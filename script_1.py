# إنشاء ملف CSS محدث مع تحسينات الأعلام والتصميم
css_content = '''/* Egypt Essence Tours - Enhanced Stylesheet */

:root {
  /* Egyptian Color Palette */
  --color-primary: #1bc8d2;
  --color-secondary: #DED18D;
  --color-accent: #F4A614;
  --color-dark: #083342;
  --color-light: #EFCF83;
  --color-white: #ffffff;
  --color-text: #333333;
  --color-light-bg: #f8f9fa;
  --color-border: #e0e0e0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Cairo', 'Arial', sans-serif;
  line-height: 1.6;
  color: var(--color-text);
  overflow-x: hidden;
}

/* RTL Support */
[dir="rtl"] {
  text-align: right;
}

[dir="ltr"] {
  text-align: left;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Styles */
.header {
  background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-primary) 100%);
  color: var(--color-white);
  padding: 1rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid var(--color-secondary);
}

.logo-text h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-white);
  margin: 0;
}

.logo-text span {
  font-size: 0.9rem;
  color: var(--color-secondary);
  display: block;
  margin-top: -3px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

/* Enhanced Language Switcher */
.language-switcher {
  position: relative;
}

.language-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--color-white);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.language-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* Flag Emoji Styling - Enhanced for Desktop */
.flag-emoji {
  font-size: 1.2rem !important;
  display: inline-block !important;
  width: 1.5em !important;
  height: 1.2em !important;
  vertical-align: middle !important;
  line-height: 1 !important;
  font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
  text-rendering: optimizeQuality !important;
  -webkit-font-feature-settings: "liga" !important;
  font-feature-settings: "liga" !important;
}

/* Force flag display on all devices */
@media screen {
  .flag-emoji {
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
  }
}

/* Desktop specific flag enhancement */
@media (min-width: 768px) {
  .flag-emoji {
    font-size: 1.4rem !important;
    margin-right: 0.3rem !important;
  }
  
  [dir="rtl"] .flag-emoji {
    margin-right: 0 !important;
    margin-left: 0.3rem !important;
  }
}

.language-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--color-white);
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  min-width: 150px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1001;
  margin-top: 0.5rem;
}

[dir="rtl"] .language-dropdown {
  right: auto;
  left: 0;
}

.language-switcher:hover .language-dropdown,
.language-switcher.active .language-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  color: var(--color-text);
  text-decoration: none;
  transition: background-color 0.2s ease;
  border-radius: 8px;
  margin: 0.25rem;
}

.lang-option:hover,
.lang-option.active {
  background: var(--color-light-bg);
  color: var(--color-primary);
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  align-items: center;
}

.nav-list a {
  color: var(--color-white);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-list a:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--color-white);
  font-size: 1.5rem;
  cursor: pointer;
}

/* Hero Section */
.hero {
  background: linear-gradient(rgba(8, 51, 66, 0.7), rgba(27, 200, 210, 0.7)), 
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%231bc8d2"/><stop offset="100%" style="stop-color:%23083342"/></linearGradient></defs><rect width="1200" height="600" fill="url(%23bg)"/><polygon points="0,400 300,350 600,380 900,340 1200,370 1200,600 0,600" fill="rgba(239,207,131,0.3)"/><circle cx="200" cy="150" r="80" fill="rgba(244,166,20,0.4)"/><circle cx="800" cy="200" r="60" fill="rgba(222,209,141,0.3)"/></svg>');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  color: var(--color-white);
  text-align: center;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.btn-hero {
  display: inline-block;
  background: linear-gradient(45deg, var(--color-accent), var(--color-secondary));
  color: var(--color-white);
  padding: 1rem 2.5rem;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 5px 15px rgba(244, 166, 20, 0.4);
}

.btn-hero:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(244, 166, 20, 0.6);
}

/* Section Styles */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--color-dark);
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-header p {
  font-size: 1.2rem;
  color: var(--color-text);
  max-width: 600px;
  margin: 0 auto;
}

/* About Section */
.about {
  padding: 5rem 0;
  background: var(--color-light-bg);
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--color-text);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--color-white);
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature i {
  font-size: 2rem;
  color: var(--color-primary);
}

.feature span {
  font-weight: 600;
  color: var(--color-dark);
}

/* Tours Section */
.tours-section {
  padding: 5rem 0;
}

.tours-section:nth-child(even) {
  background: var(--color-light-bg);
}

.tours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.tour-card {
  background: var(--color-white);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.tour-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.tour-card-header {
  background: linear-gradient(135deg, var(--color-primary), var(--color-dark));
  color: var(--color-white);
  padding: 2rem 1.5rem;
  text-align: center;
}

.tour-emoji {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.tour-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.tour-duration {
  font-size: 0.9rem;
  opacity: 0.9;
  color: var(--color-secondary);
}

.tour-card-body {
  padding: 2rem 1.5rem;
}

.tour-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--color-text);
}

.tour-highlights {
  list-style: none;
  margin-bottom: 2rem;
}

.tour-highlights li {
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
}

.tour-highlights li:before {
  content: "✓";
  color: var(--color-primary);
  font-weight: bold;
  font-size: 1.1rem;
}

.btn-book {
  background: linear-gradient(45deg, var(--color-accent), var(--color-primary));
  color: var(--color-white);
  padding: 0.8rem 2rem;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: none;
  cursor: pointer;
}

.btn-book:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(244, 166, 20, 0.4);
}

/* Contact Section */
.contact {
  padding: 5rem 0;
  background: var(--color-dark);
  color: var(--color-white);
}

.contact .section-header h2,
.contact .section-header p {
  color: var(--color-white);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  transition: background 0.3s ease;
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.15);
}

.contact-item i {
  font-size: 2rem;
  color: var(--color-secondary);
  min-width: 40px;
}

.contact-item h4 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--color-secondary);
}

/* Enhanced Clickable Contact Links */
.contact-link {
  color: var(--color-white) !important;
  text-decoration: none !important;
  font-weight: 600;
  transition: all 0.3s ease;
  border-radius: 5px;
  padding: 2px 4px;
}

.contact-link:hover {
  color: var(--color-secondary) !important;
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(3px);
}

[dir="rtl"] .contact-link:hover {
  transform: translateX(-3px);
}

.contact-form h3 {
  margin-bottom: 2rem;
  color: var(--color-secondary);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-white);
  font-size: 1rem;
  transition: background 0.3s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.2);
}

.btn-primary {
  background: var(--color-secondary);
  color: var(--color-dark);
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.btn-primary:hover {
  background: var(--color-accent);
  transform: translateY(-2px);
}

/* Footer */
.footer {
  background: var(--color-text);
  color: var(--color-white);
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  color: var(--color-secondary);
  margin-bottom: 1rem;
}

.footer-section p,
.footer-section .contact-info p {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.footer-section .contact-info a {
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section .contact-info a:hover {
  color: var(--color-secondary);
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  color: var(--color-white);
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--color-secondary);
  transform: translateY(-3px);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-list {
    display: none;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--color-dark);
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  [dir="rtl"] .nav-list {
    right: 0;
    left: 0;
  }
  
  .nav-list.active {
    display: flex;
  }
  
  .mobile-menu-toggle {
    display: block;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1.1rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .nav-container {
    flex-wrap: wrap;
  }
  
  .logo {
    flex: 1;
  }
  
  .nav {
    order: 3;
    width: 100%;
    justify-content: space-between;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .tours-grid {
    grid-template-columns: 1fr;
  }
  
  .flag-emoji {
    font-size: 1.1rem !important;
  }
}

/* Animation Classes */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Language-specific font adjustments */
[lang="zh"] {
  font-family: 'Noto Sans SC', sans-serif;
}

[lang="ar"] {
  font-family: 'Cairo', 'Amiri', sans-serif;
}

[lang="en"], [lang="de"], [lang="fr"], [lang="cs"], [lang="ru"] {
  font-family: 'Arial', 'Helvetica', sans-serif;
}'''

# حفظ ملف CSS
with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

print("✅ تم إنشاء ملف style.css المُحدث")