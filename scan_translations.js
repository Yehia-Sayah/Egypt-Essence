const fs = require('fs');
const vm = require('vm');
const path = 'f:\\Egypt Essense\\website Project\\website 0.1\\app.js';

try {
    const src = fs.readFileSync(path, 'utf8');
    const marker = 'const translations =';
    const startIdx = src.indexOf(marker);
    if (startIdx === -1) {
        console.error('Could not find translations marker in app.js');
        process.exit(2);
    }

    // find first '{' after marker
    let objStart = src.indexOf('{', startIdx);
    if (objStart === -1) { console.error('Malformed translations object'); process.exit(2); }

    // find matching closing brace by counting
    let i = objStart;
    let depth = 0;
    let endIdx = -1;
    for (; i < src.length; i++) {
        const ch = src[i];
        if (ch === '{') depth++;
        else if (ch === '}') {
            depth--;
            if (depth === 0) { endIdx = i; break; }
        }
    }

    if (endIdx === -1) { console.error('Could not locate end of translations object'); process.exit(2); }

    const objStr = src.slice(objStart, endIdx + 1);
    const wrapped = 'module.exports = ' + objStr + ';';

    // Evaluate in a sandbox
    const translations = vm.runInNewContext(wrapped, {}, { timeout: 1000 });

    if (!translations || typeof translations !== 'object') {
        console.error('Translations did not evaluate to an object');
        process.exit(2);
    }

    const base = translations['en'];
    if (!base) { console.error('English base translations not found (en)'); process.exit(2); }

    const baseKeys = Object.keys(base).sort();

    console.log('Translation keys in English (count):', baseKeys.length);

    const report = {};
    Object.keys(translations).sort().forEach(lang => {
        const keys = Object.keys(translations[lang] || {});
        const missing = baseKeys.filter(k => !keys.includes(k));
        const extra = keys.filter(k => !baseKeys.includes(k));
        report[lang] = { total: keys.length, missingCount: missing.length, missing: missing.slice(0, 20), extraCount: extra.length, extra: extra.slice(0,20) };
    });

    // Print summary
    console.log('\nPer-language summary:');
    Object.keys(report).forEach(lang => {
        const r = report[lang];
        console.log(`- ${lang}: total keys=${r.total}, missing=${r.missingCount}${r.missingCount>0 ? ', sample missing: ' + r.missing.join(', ') : ''}${r.extraCount>0 ? ', extra: ' + r.extra.join(', ') : ''}`);
    });

    // Print languages that have missing keys
    const languagesWithMissing = Object.keys(report).filter(l => report[l].missingCount > 0);
    if (languagesWithMissing.length === 0) {
        console.log('\nAll languages contain the same keys as English.');
    } else {
        console.log('\nLanguages with missing keys:', languagesWithMissing.join(', '));
        languagesWithMissing.forEach(l => {
            console.log(`\n>>> ${l} missing (${report[l].missingCount}) keys — sample:`);
            console.log(report[l].missing.join('\n'));
        });
    }

    process.exit(0);

} catch (err) {
    console.error('Error while scanning translations:', err);
    process.exit(2);
}
