# إنشاء الملفات المُحدثة للموقع مع التعديلات المطلوبة

# 1. إنشاء ملف HTML محدث مع الترجمات الكاملة والأيقونات المصححة
html_content = '''<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="page-title">Egypt Essence Tours - اكتشف جوهر مصر الحقيقي</title>
    <meta name="description" id="page-description" content="أفضل الرحلات السياحية في مصر - الغردقة، الأقصر، والقاهرة. احجز رحلتك الآن!">
    
    <!-- Favicon using uploaded logo -->
    <link rel="icon" type="image/x-icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='35' r='25' fill='%23F4A614'/%3E%3Cpath d='M20 45 L50 30 L80 45 L50 55 Z' fill='%2327BCD4'/%3E%3Cpath d='M25 60 Q50 45 75 60 Q50 75 25 60' fill='%2395E1F7'/%3E%3Ctext x='50' y='90' text-anchor='middle' fill='%23F4A614' font-family='Arial' font-size='14' font-weight='bold'%3EEE%3C/text%3E%3C/svg%3E">
    
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&family=Amiri:wght@400;700&family=Noto+Sans+SC:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="nav-container">
                <div class="logo">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='20' r='15' fill='%23F4A614'/%3E%3Cpath d='M12 27 L30 18 L48 27 L30 33 Z' fill='%2327BCD4'/%3E%3Cpath d='M15 36 Q30 27 45 36 Q30 45 15 36' fill='%2395E1F7'/%3E%3Ctext x='30' y='54' text-anchor='middle' fill='%23F4A614' font-family='Arial' font-size='8' font-weight='bold'%3EEgypt Essence%3C/text%3E%3C/svg%3E" alt="Egypt Essence Tours" class="logo-img">
                    <div class="logo-text">
                        <h2 data-translate="company-name">Egypt Essence Tours</h2>
                        <span data-translate="company-tagline">اكتشف جوهر مصر الحقيقي</span>
                    </div>
                </div>
                <nav class="nav">
                    <div class="language-switcher">
                        <button class="language-btn" id="currentLang">
                            <i class="fas fa-globe"></i>
                            <span class="flag-emoji">🇪🇬</span>
                            <span class="lang-text">العربية</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="language-dropdown" id="languageDropdown">
                            <a href="#" data-lang="ar" class="lang-option active">
                                <span class="flag-emoji">🇪🇬</span>
                                <span>العربية</span>
                            </a>
                            <a href="#" data-lang="en" class="lang-option">
                                <span class="flag-emoji">🇬🇧</span>
                                <span>English</span>
                            </a>
                            <a href="#" data-lang="de" class="lang-option">
                                <span class="flag-emoji">🇩🇪</span>
                                <span>Deutsch</span>
                            </a>
                            <a href="#" data-lang="ru" class="lang-option">
                                <span class="flag-emoji">🇷🇺</span>
                                <span>Русский</span>
                            </a>
                            <a href="#" data-lang="zh" class="lang-option">
                                <span class="flag-emoji">🇨🇳</span>
                                <span>中文</span>
                            </a>
                            <a href="#" data-lang="cs" class="lang-option">
                                <span class="flag-emoji">🇨🇿</span>
                                <span>Čeština</span>
                            </a>
                            <a href="#" data-lang="fr" class="lang-option">
                                <span class="flag-emoji">🇫🇷</span>
                                <span>Français</span>
                            </a>
                        </div>
                    </div>
                    <ul class="nav-list">
                        <li><a href="#home" data-translate="nav-home">الرئيسية</a></li>
                        <li><a href="#hurghada" data-translate="nav-hurghada">رحلات الغردقة</a></li>
                        <li><a href="#luxor" data-translate="nav-luxor">رحلات الأقصر</a></li>
                        <li><a href="#cairo" data-translate="nav-cairo">رحلات القاهرة</a></li>
                        <li><a href="#about" data-translate="nav-about">من نحن</a></li>
                        <li><a href="#contact" data-translate="nav-contact">التواصل</a></li>
                    </ul>
                    <button class="mobile-menu-toggle">
                        <i class="fas fa-bars"></i>
                    </button>
                </nav>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-overlay">
            <div class="container">
                <div class="hero-content">
                    <h1 data-translate="hero-title">اكتشف سحر مصر معنا</h1>
                    <p data-translate="hero-subtitle">استمتع بأجمل الرحلات السياحية في الغردقة والأقصر والقاهرة</p>
                    <a href="#hurghada" class="btn-hero" data-translate="hero-cta">ابدأ رحلتك الآن</a>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="section-header">
                <h2 data-translate="about-title">من نحن</h2>
                <p data-translate="about-subtitle">شركة Egypt Essence Tours، رفيقك المثالي لاستكشاف جمال مصر</p>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <p data-translate="about-description">نحن شركة متخصصة في تنظيم الرحلات السياحية في أجمل المدن المصرية. نقدم خدمات متميزة ورحلات منظمة بعناية لضمان حصولكم على أفضل تجربة سياحية ممكنة.</p>
                    <div class="features">
                        <div class="feature">
                            <i class="fas fa-star"></i>
                            <span data-translate="feature-service">خدمة عملاء متميزة</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-shield-alt"></i>
                            <span data-translate="feature-safety">رحلات آمنة ومؤمنة</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-user-tie"></i>
                            <span data-translate="feature-guides">مرشدين سياحيين محترفين</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-clock"></i>
                            <span data-translate="feature-timing">مواعيد دقيقة ومنظمة</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Hurghada Tours Section -->
    <section id="hurghada" class="tours-section">
        <div class="container">
            <div class="section-header">
                <h2 data-translate="hurghada-title">رحلات الغردقة</h2>
                <p data-translate="hurghada-subtitle">استمتع بمغامرات البحر الأحمر الرائعة</p>
            </div>
            <div class="tours-grid">
                <!-- Tour cards will be generated by JavaScript -->
            </div>
        </div>
    </section>

    <!-- Luxor Tours Section -->
    <section id="luxor" class="tours-section luxor-section">
        <div class="container">
            <div class="section-header">
                <h2 data-translate="luxor-title">رحلات الأقصر</h2>
                <p data-translate="luxor-subtitle">اكتشف كنوز مصر الفرعونية</p>
            </div>
            <div class="tours-grid">
                <!-- Tour cards will be generated by JavaScript -->
            </div>
        </div>
    </section>

    <!-- Cairo Tours Section -->
    <section id="cairo" class="tours-section cairo-section">
        <div class="container">
            <div class="section-header">
                <h2 data-translate="cairo-title">رحلات القاهرة</h2>
                <p data-translate="cairo-subtitle">استكشف عجائب العالم القديم</p>
            </div>
            <div class="tours-grid">
                <!-- Tour cards will be generated by JavaScript -->
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-header">
                <h2 data-translate="contact-title">تواصل معنا</h2>
                <p data-translate="contact-subtitle">نحن هنا لمساعدتك في تخطيط رحلتك المثالية</p>
            </div>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <div>
                            <h4 data-translate="contact-phone">الهاتف</h4>
                            <a href="tel:+201009531706" class="contact-link">+20 100 953 1706</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fab fa-whatsapp"></i>
                        <div>
                            <h4 data-translate="contact-whatsapp">واتساب</h4>
                            <a href="https://wa.me/201009531706" class="contact-link" target="_blank">+20 100 953 1706</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h4 data-translate="contact-email">البريد الإلكتروني</h4>
                            <a href="mailto:info@egyptessence.com" class="contact-link">info@egyptessence.com</a>
                        </div>
                    </div>
                </div>
                <div class="contact-form">
                    <h3 data-translate="contact-form-title">أرسل رسالة</h3>
                    <form id="contactForm">
                        <div class="form-group">
                            <input type="text" name="name" placeholder="الاسم" data-translate-placeholder="contact-name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" placeholder="البريد الإلكتروني" data-translate-placeholder="contact-email-input" required>
                        </div>
                        <div class="form-group">
                            <textarea name="message" rows="5" placeholder="الرسالة" data-translate-placeholder="contact-message" required></textarea>
                        </div>
                        <button type="submit" class="btn-primary" data-translate="contact-send">إرسال</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3 data-translate="footer-about">Egypt Essence Tours</h3>
                    <p data-translate="footer-description">شريكك المثالي لاستكشاف جمال مصر الأصيل</p>
                </div>
                <div class="footer-section">
                    <h4 data-translate="footer-contact">تواصل معنا</h4>
                    <div class="contact-info">
                        <p><i class="fas fa-phone"></i> <a href="tel:+201009531706">+20 100 953 1706</a></p>
                        <p><i class="fas fa-envelope"></i> <a href="mailto:info@egyptessence.com">info@egyptessence.com</a></p>
                    </div>
                </div>
                <div class="footer-section">
                    <h4 data-translate="footer-follow">تابعنا</h4>
                    <div class="social-links">
                        <a href="https://www.facebook.com/EgyptEssenceTours" target="_blank" class="social-link">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/egyptessencetours" target="_blank" class="social-link">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.whatsapp.com/catalog/201009531706/?app_absent=0" target="_blank" class="social-link">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <a href="https://t.me/EgyptEssenceTours" target="_blank" class="social-link">
                            <i class="fab fa-telegram"></i>
                        </a>
                        <a href="https://www.tiktok.com/@egypt.essence.tours" target="_blank" class="social-link">
                            <i class="fab fa-tiktok"></i>
                        </a>
                        <a href="https://vk.com/egyptessencetours" target="_blank" class="social-link">
                            <i class="fab fa-vk"></i>
                        </a>
                        <a href="#wechat" target="_blank" class="social-link">
                            <i class="fab fa-weixin"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p data-translate="footer-rights">&copy; 2025 Egypt Essence Tours. جميع الحقوق محفوظة.</p>
            </div>
        </div>
    </footer>

    <script src="app.js"></script>
</body>
</html>'''

# حفظ ملف HTML
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("✅ تم إنشاء ملف index.html المُحدث")