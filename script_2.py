# إنشاء ملف JavaScript محدث مع الترجمات الكاملة لجميع الرحلات والتحسينات
js_content = '''// Egypt Essence Tours - Complete Multilingual Interactive Application
// Enhanced with full translations and improved functionality

document.addEventListener('DOMContentLoaded', function() {
    
    // Complete Multilingual Content Database
    const translations = {
        ar: {
            // Page Meta
            'page-title': 'Egypt Essence Tours - اكتشف جوهر مصر الحقيقي',
            'page-description': 'أفضل الرحلات السياحية في مصر - الغردقة، الأقصر، والقاهرة. احجز رحلتك الآن!',
            
            // Company Info
            'company-name': 'Egypt Essence Tours',
            'company-tagline': 'اكتشف جوهر مصر الحقيقي',
            
            // Navigation
            'nav-home': 'الرئيسية',
            'nav-hurghada': 'رحلات الغردقة',
            'nav-luxor': 'رحلات الأقصر',
            'nav-cairo': 'رحلات القاهرة',
            'nav-about': 'من نحن',
            'nav-contact': 'التواصل',
            
            // Hero Section
            'hero-title': 'اكتشف سحر مصر معنا',
            'hero-subtitle': 'استمتع بأجمل الرحلات السياحية في الغردقة والأقصر والقاهرة',
            'hero-cta': 'ابدأ رحلتك الآن',
            
            // About Section
            'about-title': 'من نحن',
            'about-subtitle': 'شركة Egypt Essence Tours، رفيقك المثالي لاستكشاف جمال مصر',
            'about-description': 'نحن شركة متخصصة في تنظيم الرحلات السياحية في أجمل المدن المصرية. نقدم خدمات متميزة ورحلات منظمة بعناية لضمان حصولكم على أفضل تجربة سياحية ممكنة.',
            'feature-service': 'خدمة عملاء متميزة',
            'feature-safety': 'رحلات آمنة ومؤمنة',
            'feature-guides': 'مرشدين سياحيين محترفين',
            'feature-timing': 'مواعيد دقيقة ومنظمة',
            
            // Tours
            'hurghada-title': 'رحلات الغردقة',
            'hurghada-subtitle': 'استمتع بمغامرات البحر الأحمر الرائعة',
            'luxor-title': 'رحلات الأقصر',
            'luxor-subtitle': 'اكتشف كنوز مصر الفرعونية',
            'cairo-title': 'رحلات القاهرة',
            'cairo-subtitle': 'استكشف عجائب العالم القديم',
            
            // Contact
            'contact-title': 'تواصل معنا',
            'contact-subtitle': 'نحن هنا لمساعدتك في تخطيط رحلتك المثالية',
            'contact-phone': 'الهاتف',
            'contact-whatsapp': 'واتساب',
            'contact-email': 'البريد الإلكتروني',
            'contact-form-title': 'أرسل رسالة',
            'contact-name': 'الاسم',
            'contact-email-input': 'البريد الإلكتروني',
            'contact-message': 'الرسالة',
            'contact-send': 'إرسال',
            
            // Footer
            'footer-about': 'Egypt Essence Tours',
            'footer-description': 'شريكك المثالي لاستكشاف جمال مصر الأصيل',
            'footer-contact': 'تواصل معنا',
            'footer-follow': 'تابعنا',
            'footer-rights': '© 2025 Egypt Essence Tours. جميع الحقوق محفوظة.',
            
            // Tour specific
            'book-now': 'احجز الآن'
        },
        
        en: {
            // Page Meta
            'page-title': 'Egypt Essence Tours - Discover the True Essence of Egypt',
            'page-description': 'Best tours in Egypt - Hurghada, Luxor, and Cairo. Book your trip now!',
            
            // Company Info
            'company-name': 'Egypt Essence Tours',
            'company-tagline': 'Discover the True Essence of Egypt',
            
            // Navigation
            'nav-home': 'Home',
            'nav-hurghada': 'Hurghada Tours',
            'nav-luxor': 'Luxor Tours',
            'nav-cairo': 'Cairo Tours',
            'nav-about': 'About Us',
            'nav-contact': 'Contact',
            
            // Hero Section
            'hero-title': 'Discover the Magic of Egypt with Us',
            'hero-subtitle': 'Enjoy the most beautiful tours in Hurghada, Luxor, and Cairo',
            'hero-cta': 'Start Your Journey Now',
            
            // About Section
            'about-title': 'About Us',
            'about-subtitle': 'Egypt Essence Tours, your perfect partner to explore the beauty of Egypt',
            'about-description': 'We are a company specialized in organizing tours in the most beautiful Egyptian cities. We provide excellent services and carefully organized trips to ensure you get the best possible tourist experience.',
            'feature-service': 'Excellent Customer Service',
            'feature-safety': 'Safe and Secure Tours',
            'feature-guides': 'Professional Tour Guides',
            'feature-timing': 'Precise and Organized Schedules',
            
            // Tours
            'hurghada-title': 'Hurghada Tours',
            'hurghada-subtitle': 'Enjoy amazing Red Sea adventures',
            'luxor-title': 'Luxor Tours',
            'luxor-subtitle': 'Discover Egypt\\'s pharaonic treasures',
            'cairo-title': 'Cairo Tours',
            'cairo-subtitle': 'Explore the wonders of the ancient world',
            
            // Contact
            'contact-title': 'Contact Us',
            'contact-subtitle': 'We are here to help you plan your perfect trip',
            'contact-phone': 'Phone',
            'contact-whatsapp': 'WhatsApp',
            'contact-email': 'Email',
            'contact-form-title': 'Send Message',
            'contact-name': 'Name',
            'contact-email-input': 'Email',
            'contact-message': 'Message',
            'contact-send': 'Send',
            
            // Footer
            'footer-about': 'Egypt Essence Tours',
            'footer-description': 'Your perfect partner to explore authentic Egyptian beauty',
            'footer-contact': 'Contact Us',
            'footer-follow': 'Follow Us',
            'footer-rights': '© 2025 Egypt Essence Tours. All rights reserved.',
            
            // Tour specific
            'book-now': 'Book Now'
        },
        
        de: {
            // Page Meta
            'page-title': 'Egypt Essence Tours - Entdecke die wahre Essenz Ägyptens',
            'page-description': 'Beste Touren in Ägypten - Hurghada, Luxor und Kairo. Buchen Sie jetzt Ihre Reise!',
            
            // Company Info
            'company-name': 'Egypt Essence Tours',
            'company-tagline': 'Entdecke die wahre Essenz Ägyptens',
            
            // Navigation
            'nav-home': 'Startseite',
            'nav-hurghada': 'Hurghada Touren',
            'nav-luxor': 'Luxor Touren',
            'nav-cairo': 'Kairo Touren',
            'nav-about': 'Über Uns',
            'nav-contact': 'Kontakt',
            
            // Hero Section
            'hero-title': 'Entdecken Sie die Magie Ägyptens mit uns',
            'hero-subtitle': 'Genießen Sie die schönsten Touren in Hurghada, Luxor und Kairo',
            'hero-cta': 'Starten Sie Ihre Reise jetzt',
            
            // About Section
            'about-title': 'Über Uns',
            'about-subtitle': 'Egypt Essence Tours, Ihr perfekter Partner zur Erkundung der Schönheit Ägyptens',
            'about-description': 'Wir sind ein Unternehmen, das sich auf die Organisation von Touren in den schönsten ägyptischen Städten spezialisiert hat. Wir bieten exzellente Services und sorgfältig organisierte Reisen, um Ihnen die bestmögliche Tourismuserfahrung zu gewährleisten.',
            'feature-service': 'Exzellenter Kundenservice',
            'feature-safety': 'Sichere und geschützte Touren',
            'feature-guides': 'Professionelle Reiseführer',
            'feature-timing': 'Präzise und organisierte Zeitpläne',
            
            // Tours
            'hurghada-title': 'Hurghada Touren',
            'hurghada-subtitle': 'Genießen Sie erstaunliche Rotes-Meer-Abenteuer',
            'luxor-title': 'Luxor Touren',
            'luxor-subtitle': 'Entdecken Sie Ägyptens pharaonische Schätze',
            'cairo-title': 'Kairo Touren',
            'cairo-subtitle': 'Erkunden Sie die Wunder der antiken Welt',
            
            // Contact
            'contact-title': 'Kontaktieren Sie uns',
            'contact-subtitle': 'Wir sind hier, um Ihnen bei der Planung Ihrer perfekten Reise zu helfen',
            'contact-phone': 'Telefon',
            'contact-whatsapp': 'WhatsApp',
            'contact-email': 'E-Mail',
            'contact-form-title': 'Nachricht senden',
            'contact-name': 'Name',
            'contact-email-input': 'E-Mail',
            'contact-message': 'Nachricht',
            'contact-send': 'Senden',
            
            // Footer
            'footer-about': 'Egypt Essence Tours',
            'footer-description': 'Ihr perfekter Partner zur Erkundung authentischer ägyptischer Schönheit',
            'footer-contact': 'Kontaktieren Sie uns',
            'footer-follow': 'Folgen Sie uns',
            'footer-rights': '© 2025 Egypt Essence Tours. Alle Rechte vorbehalten.',
            
            // Tour specific
            'book-now': 'Jetzt buchen'
        },
        
        ru: {
            // Page Meta
            'page-title': 'Egypt Essence Tours - Откройте истинную суть Египта',
            'page-description': 'Лучшие туры в Египет - Хургада, Луксор и Каир. Забронируйте поездку сейчас!',
            
            // Company Info
            'company-name': 'Egypt Essence Tours',
            'company-tagline': 'Откройте истинную суть Египта',
            
            // Navigation
            'nav-home': 'Главная',
            'nav-hurghada': 'Туры в Хургаду',
            'nav-luxor': 'Туры в Луксор',
            'nav-cairo': 'Туры в Каир',
            'nav-about': 'О нас',
            'nav-contact': 'Контакты',
            
            // Hero Section
            'hero-title': 'Откройте магию Египта с нами',
            'hero-subtitle': 'Наслаждайтесь самыми красивыми турами в Хургаде, Луксоре и Каире',
            'hero-cta': 'Начните свое путешествие сейчас',
            
            // About Section
            'about-title': 'О нас',
            'about-subtitle': 'Egypt Essence Tours, ваш идеальный партнер для изучения красоты Египта',
            'about-description': 'Мы компания, специализирующаяся на организации туров в самые красивые египетские города. Мы предоставляем отличные услуги и тщательно организованные поездки, чтобы обеспечить вам лучший туристический опыт.',
            'feature-service': 'Отличное обслуживание клиентов',
            'feature-safety': 'Безопасные и надежные туры',
            'feature-guides': 'Профессиональные гиды',
            'feature-timing': 'Точные и организованные расписания',
            
            // Tours
            'hurghada-title': 'Туры в Хургаду',
            'hurghada-subtitle': 'Наслаждайтесь удивительными приключениями Красного моря',
            'luxor-title': 'Туры в Луксор',
            'luxor-subtitle': 'Откройте фараонские сокровища Египта',
            'cairo-title': 'Туры в Каир',
            'cairo-subtitle': 'Исследуйте чудеса древнего мира',
            
            // Contact
            'contact-title': 'Свяжитесь с нами',
            'contact-subtitle': 'Мы здесь, чтобы помочь вам спланировать идеальную поездку',
            'contact-phone': 'Телефон',
            'contact-whatsapp': 'WhatsApp',
            'contact-email': 'Электронная почта',
            'contact-form-title': 'Отправить сообщение',
            'contact-name': 'Имя',
            'contact-email-input': 'Электронная почта',
            'contact-message': 'Сообщение',
            'contact-send': 'Отправить',
            
            // Footer
            'footer-about': 'Egypt Essence Tours',
            'footer-description': 'Ваш идеальный партнер для изучения подлинной египетской красоты',
            'footer-contact': 'Свяжитесь с нами',
            'footer-follow': 'Следите за нами',
            'footer-rights': '© 2025 Egypt Essence Tours. Все права защищены.',
            
            // Tour specific
            'book-now': 'Забронировать сейчас'
        },
        
        zh: {
            // Page Meta
            'page-title': 'Egypt Essence Tours - 探索埃及的真正精髓',
            'page-description': '埃及最佳旅游 - 赫尔格达、卢克索和开罗。立即预订您的行程！',
            
            // Company Info
            'company-name': 'Egypt Essence Tours',
            'company-tagline': '探索埃及的真正精髓',
            
            // Navigation
            'nav-home': '首页',
            'nav-hurghada': '赫尔格达旅游',
            'nav-luxor': '卢克索旅游',
            'nav-cairo': '开罗旅游',
            'nav-about': '关于我们',
            'nav-contact': '联系我们',
            
            // Hero Section
            'hero-title': '与我们一起探索埃及的魅力',
            'hero-subtitle': '享受赫尔格达、卢克索和开罗最美丽的旅游',
            'hero-cta': '立即开始您的旅程',
            
            // About Section
            'about-title': '关于我们',
            'about-subtitle': 'Egypt Essence Tours，您探索埃及美景的完美伙伴',
            'about-description': '我们是一家专门在最美丽的埃及城市组织旅游的公司。我们提供优秀的服务和精心组织的行程，确保您获得最佳的旅游体验。',
            'feature-service': '优秀的客户服务',
            'feature-safety': '安全可靠的旅游',
            'feature-guides': '专业导游',
            'feature-timing': '精确有序的时间安排',
            
            // Tours
            'hurghada-title': '赫尔格达旅游',
            'hurghada-subtitle': '享受令人惊叹的红海冒险',
            'luxor-title': '卢克索旅游',
            'luxor-subtitle': '发现埃及的法老宝藏',
            'cairo-title': '开罗旅游',
            'cairo-subtitle': '探索古代世界的奇迹',
            
            // Contact
            'contact-title': '联系我们',
            'contact-subtitle': '我们在这里帮助您规划完美的旅行',
            'contact-phone': '电话',
            'contact-whatsapp': 'WhatsApp',
            'contact-email': '电子邮件',
            'contact-form-title': '发送消息',
            'contact-name': '姓名',
            'contact-email-input': '电子邮件',
            'contact-message': '消息',
            'contact-send': '发送',
            
            // Footer
            'footer-about': 'Egypt Essence Tours',
            'footer-description': '您探索正宗埃及美景的完美伙伴',
            'footer-contact': '联系我们',
            'footer-follow': '关注我们',
            'footer-rights': '© 2025 Egypt Essence Tours. 版权所有。',
            
            // Tour specific
            'book-now': '立即预订'
        },
        
        cs: {
            // Page Meta
            'page-title': 'Egypt Essence Tours - Objevte pravou podstatu Egypta',
            'page-description': 'Nejlepší zájezdy do Egypta - Hurghada, Luxor a Káhira. Rezervujte si cestu nyní!',
            
            // Company Info
            'company-name': 'Egypt Essence Tours',
            'company-tagline': 'Objevte pravou podstatu Egypta',
            
            // Navigation
            'nav-home': 'Domů',
            'nav-hurghada': 'Zájezdy Hurghada',
            'nav-luxor': 'Zájezdy Luxor',
            'nav-cairo': 'Zájezdy Káhira',
            'nav-about': 'O nás',
            'nav-contact': 'Kontakt',
            
            // Hero Section
            'hero-title': 'Objevte kouzlo Egypta s námi',
            'hero-subtitle': 'Užijte si nejkrásnější zájezdy do Hurghady, Luxoru a Káhiry',
            'hero-cta': 'Začněte svou cestu nyní',
            
            // About Section
            'about-title': 'O nás',
            'about-subtitle': 'Egypt Essence Tours, váš perfektní partner pro objevování krásy Egypta',
            'about-description': 'Jsme společnost specializující se na organizaci zájezdů do nejkrásnějších egyptských měst. Poskytujeme vynikající služby a pečlivě organizované cesty, abychom vám zajistili nejlepší možný turistický zážitek.',
            'feature-service': 'Vynikající zákaznický servis',
            'feature-safety': 'Bezpečné a zabezpečené zájezdy',
            'feature-guides': 'Profesionální průvodci',
            'feature-timing': 'Přesné a organizované rozvrhy',
            
            // Tours
            'hurghada-title': 'Zájezdy Hurghada',
            'hurghada-subtitle': 'Užijte si úžasná dobrodružství Rudého moře',
            'luxor-title': 'Zájezdy Luxor',
            'luxor-subtitle': 'Objevte egyptské faraonské poklady',
            'cairo-title': 'Zájezdy Káhira',
            'cairo-subtitle': 'Prozkoumejte zázraky starověkého světa',
            
            // Contact
            'contact-title': 'Kontaktujte nás',
            'contact-subtitle': 'Jsme tu, abychom vám pomohli naplánovat vaši perfektní cestu',
            'contact-phone': 'Telefon',
            'contact-whatsapp': 'WhatsApp',
            'contact-email': 'Email',
            'contact-form-title': 'Poslat zprávu',
            'contact-name': 'Jméno',
            'contact-email-input': 'Email',
            'contact-message': 'Zpráva',
            'contact-send': 'Odeslat',
            
            // Footer
            'footer-about': 'Egypt Essence Tours',
            'footer-description': 'Váš perfektní partner pro objevování autentické egyptské krásy',
            'footer-contact': 'Kontaktujte nás',
            'footer-follow': 'Sledujte nás',
            'footer-rights': '© 2025 Egypt Essence Tours. Všechna práva vyhrazena.',
            
            // Tour specific
            'book-now': 'Rezervovat nyní'
        },
        
        fr: {
            // Page Meta
            'page-title': 'Egypt Essence Tours - Découvrez la vraie essence de l\\'Égypte',
            'page-description': 'Meilleurs circuits en Égypte - Hurghada, Louxor et Le Caire. Réservez votre voyage maintenant!',
            
            // Company Info
            'company-name': 'Egypt Essence Tours',
            'company-tagline': 'Découvrez la vraie essence de l\\'Égypte',
            
            // Navigation
            'nav-home': 'Accueil',
            'nav-hurghada': 'Circuits Hurghada',
            'nav-luxor': 'Circuits Louxor',
            'nav-cairo': 'Circuits Le Caire',
            'nav-about': 'À propos',
            'nav-contact': 'Contact',
            
            // Hero Section
            'hero-title': 'Découvrez la magie de l\\'Égypte avec nous',
            'hero-subtitle': 'Profitez des plus beaux circuits à Hurghada, Louxor et Le Caire',
            'hero-cta': 'Commencez votre voyage maintenant',
            
            // About Section
            'about-title': 'À propos de nous',
            'about-subtitle': 'Egypt Essence Tours, votre partenaire parfait pour explorer la beauté de l\\'Égypte',
            'about-description': 'Nous sommes une entreprise spécialisée dans l\\'organisation de circuits dans les plus belles villes égyptiennes. Nous fournissons d\\'excellents services et des voyages soigneusement organisés pour vous assurer la meilleure expérience touristique possible.',
            'feature-service': 'Excellent service client',
            'feature-safety': 'Circuits sûrs et sécurisés',
            'feature-guides': 'Guides touristiques professionnels',
            'feature-timing': 'Horaires précis et organisés',
            
            // Tours
            'hurghada-title': 'Circuits Hurghada',
            'hurghada-subtitle': 'Profitez d\\'incroyables aventures en mer Rouge',
            'luxor-title': 'Circuits Louxor',
            'luxor-subtitle': 'Découvrez les trésors pharaoniques de l\\'Égypte',
            'cairo-title': 'Circuits Le Caire',
            'cairo-subtitle': 'Explorez les merveilles du monde antique',
            
            // Contact
            'contact-title': 'Contactez-nous',
            'contact-subtitle': 'Nous sommes là pour vous aider à planifier votre voyage parfait',
            'contact-phone': 'Téléphone',
            'contact-whatsapp': 'WhatsApp',
            'contact-email': 'Email',
            'contact-form-title': 'Envoyer un message',
            'contact-name': 'Nom',
            'contact-email-input': 'Email',
            'contact-message': 'Message',
            'contact-send': 'Envoyer',
            
            // Footer
            'footer-about': 'Egypt Essence Tours',
            'footer-description': 'Votre partenaire parfait pour explorer la beauté authentique égyptienne',
            'footer-contact': 'Contactez-nous',
            'footer-follow': 'Suivez-nous',
            'footer-rights': '© 2025 Egypt Essence Tours. Tous droits réservés.',
            
            // Tour specific
            'book-now': 'Réserver maintenant'
        }
    };

    // Tour data with complete translations
    const toursData = {
        hurghada: [
            {
                id: 'hula-hula',
                emoji: '🏝️',
                names: {
                    ar: 'رحلة جزيرة هولا هولا',
                    en: 'Hula Hula Island Trip',
                    de: 'Hula Hula Inselausflug',
                    ru: 'Поездка на остров Хула Хула',
                    zh: '呼拉呼拉岛之旅',
                    cs: 'Výlet na ostrov Hula Hula',
                    fr: 'Excursion île Hula Hula'
                },
                durations: {
                    ar: '8:30 صباحاً - 4:30 مساءً',
                    en: '8:30 AM - 4:30 PM',
                    de: '8:30 - 16:30',
                    ru: '8:30 - 16:30',
                    zh: '上午8:30 - 下午4:30',
                    cs: '8:30 - 16:30',
                    fr: '8h30 - 16h30'
                },
                descriptions: {
                    ar: 'استمتع بالمالديف المصرية مع المياه الصافية والشواطئ الذهبية',
                    en: 'Experience Egyptian Maldives with crystal-clear waters and golden beaches',
                    de: 'Erleben Sie die ägyptischen Malediven mit kristallklarem Wasser und goldenen Stränden',
                    ru: 'Испытайте египетские Мальдивы с кристально чистой водой и золотыми пляжами',
                    zh: '体验埃及马尔代夫，享受清澈海水和金色海滩',
                    cs: 'Zažijte egyptské Maledivy s křišťálově čistou vodou a zlatými plážemi',
                    fr: 'Découvrez les Maldives égyptiennes avec des eaux cristallines et des plages dorées'
                },
                highlights: {
                    ar: ['محطتان للغطس', 'استكشاف الجزيرة', 'غداء شامل', 'سترات نجاة متوفرة'],
                    en: ['Two snorkeling stops', 'Island exploration', 'Full lunch included', 'Life jackets provided'],
                    de: ['Zwei Schnorchelstopps', 'Inselerkundung', 'Vollständiges Mittagessen', 'Schwimmwesten verfügbar'],
                    ru: ['Два места для снорклинга', 'Исследование острова', 'Полный обед включен', 'Спасательные жилеты предоставляются'],
                    zh: ['两个浮潜点', '岛屿探索', '包含全餐', '提供救生衣'],
                    cs: ['Dva body pro šnorchlování', 'Průzkum ostrova', 'Kompletní oběd', 'Záchranné vesty k dispozici'],
                    fr: ['Deux arrêts snorkeling', 'Exploration de l\\'île', 'Déjeuner complet inclus', 'Gilets de sauvetage fournis']
                }
            },
            {
                id: 'royal-seascope',
                emoji: '⚓',
                names: {
                    ar: 'الغواصة الملكية سي سكوب',
                    en: 'Royal Sea Scope Submarine',
                    de: 'Royal Sea Scope U-Boot',
                    ru: 'Подводная лодка Royal Sea Scope',
                    zh: '皇家海域潜水艇',
                    cs: 'Ponorka Royal Sea Scope',
                    fr: 'Sous-marin Royal Sea Scope'
                },
                durations: {
                    ar: 'مواعيد يومية متعددة',
                    en: 'Multiple daily slots',
                    de: 'Mehrere tägliche Zeiten',
                    ru: 'Несколько ежедневных слотов',
                    zh: '每日多个时段',
                    cs: 'Více denních časů',
                    fr: 'Plusieurs créneaux quotidiens'
                },
                descriptions: {
                    ar: 'استكشف عالم ما تحت الماء في راحة مكيفة مع نوافذ بانورامية',
                    en: 'Explore underwater world in air-conditioned comfort with panoramic windows',
                    de: 'Erkunden Sie die Unterwasserwelt in klimatisiertem Komfort mit Panoramafenstern',
                    ru: 'Исследуйте подводный мир в кондиционированном комфорте с панорамными окнами',
                    zh: '在空调舒适环境中通过全景窗户探索海底世界',
                    cs: 'Prozkoumejte podvodní svět v klimatizovaném pohodlí s panoramatickými okny',
                    fr: 'Explorez le monde sous-marin dans un confort climatisé avec des fenêtres panoramiques'
                },
                highlights: {
                    ar: ['قاعة بانوراما للمشاهدة', 'ترفيه بالغواصين', 'محطة غطس', 'مرطبات ترحيبية'],
                    en: ['Panorama hall viewing', 'Diver entertainment', 'Snorkeling stop', 'Welcome refreshments'],
                    de: ['Panorama-Halle Betrachtung', 'Taucher-Entertainment', 'Schnorchel-Stopp', 'Willkommenserfrischungen'],
                    ru: ['Просмотр панорамного зала', 'Развлечения с дайверами', 'Остановка для снорклинга', 'Приветственные напитки'],
                    zh: ['全景厅观赏', '潜水员表演', '浮潜停留', '欢迎饮料'],
                    cs: ['Prohlídka panoramatické haly', 'Zábava s potápěči', 'Zastávka šnorchlování', 'Uvítací občerstvení'],
                    fr: ['Vue salle panoramique', 'Animation plongeurs', 'Arrêt snorkeling', 'Rafraîchissements de bienvenue']
                }
            },
            {
                id: 'sindbad-submarine',
                emoji: '🚢',
                names: {
                    ar: 'غواصة سندباد',
                    en: 'Sindbad Submarine',
                    de: 'Sindbad U-Boot',
                    ru: 'Подводная лодка Синдбад',
                    zh: '辛德巴德潜水艇',
                    cs: 'Ponorka Sindbad',
                    fr: 'Sous-marin Sindbad'
                },
                durations: {
                    ar: '11:00 صباحاً و 1:00 مساءً',
                    en: '11:00 AM & 1:00 PM',
                    de: '11:00 & 13:00',
                    ru: '11:00 & 13:00',
                    zh: '上午11:00和下午1:00',
                    cs: '11:00 & 13:00',
                    fr: '11h00 et 13h00'
                },
                descriptions: {
                    ar: 'اغطس 25 متر لمشاهدة الشعاب المرجانية والحياة البحرية من خلال نوافذ كبيرة',
                    en: 'Dive 25 meters deep to witness coral reefs and marine life through large viewing windows',
                    de: 'Tauchen Sie 25 Meter tief, um Korallenriffe und Meerestiere durch große Sichtfenster zu beobachten',
                    ru: 'Погружайтесь на 25 метров, чтобы увидеть коралловые рифы и морскую жизнь через большие смотровые окна',
                    zh: '潜水25米深度，通过大型观景窗观赏珊瑚礁和海洋生物',
                    cs: 'Ponořte se 25 metrů hluboko a pozorujte korálové útesy a mořský život přes velká pozorovací okna',
                    fr: 'Plongez à 25 mètres de profondeur pour observer les récifs coralliens et la vie marine à travers de grandes fenêtres'
                },
                highlights: {
                    ar: ['عمق 25 متر', 'مشاهدة الشعاب المرجانية', 'رصد الحياة البحرية', 'مرشد متخصص'],
                    en: ['25-meter depth', 'Coral reef viewing', 'Marine life spotting', 'Professional guide'],
                    de: ['25 Meter Tiefe', 'Korallenriff-Betrachtung', 'Meerestier-Beobachtung', 'Professioneller Führer'],
                    ru: ['Глубина 25 метров', 'Просмотр коралловых рифов', 'Наблюдение морской жизни', 'Профессиональный гид'],
                    zh: ['25米深度', '珊瑚礁观赏', '海洋生物观察', '专业导游'],
                    cs: ['Hloubka 25 metrů', 'Prohlídka korálových útesů', 'Pozorování mořského života', 'Profesionální průvodce'],
                    fr: ['Profondeur 25 mètres', 'Observation récifs coralliens', 'Observation vie marine', 'Guide professionnel']
                }
            },
            {
                id: 'panorama-submarine',
                emoji: '🛥️',
                names: {
                    ar: 'غواصة بانوراما',
                    en: 'Panorama Submarine',
                    de: 'Panorama U-Boot',
                    ru: 'Подводная лодка Панорама',
                    zh: '全景潜水艇',
                    cs: 'Ponorka Panorama',
                    fr: 'Sous-marin Panorama'
                },
                durations: {
                    ar: 'يومياً',
                    en: 'Daily',
                    de: 'Täglich',
                    ru: 'Ежедневно',
                    zh: '每日',
                    cs: 'Denně',
                    fr: 'Quotidien'
                },
                descriptions: {
                    ar: 'غواصة متعددة الطوابق مع مسبح للأطفال وترفيه على متنها',
                    en: 'Multi-deck submarine with kids pool and onboard entertainment',
                    de: 'Mehrstöckiges U-Boot mit Kinderpool und Bordunterhaltung',
                    ru: 'Многопалубная подводная лодка с детским бассейном и развлечениями на борту',
                    zh: '多层潜水艇，配有儿童游泳池和船上娱乐',
                    cs: 'Vícepatrová ponorka s dětským bazénem a zábavou na palubě',
                    fr: 'Sous-marin multi-ponts avec piscine enfants et animations à bord'
                },
                highlights: {
                    ar: ['متعدد الطوابق', 'مسبح للأطفال', 'ترفيه على متن السفينة', 'مناسب للعائلات'],
                    en: ['Multi-deck design', 'Kids swimming pool', 'Onboard entertainment', 'Family-friendly'],
                    de: ['Mehrstöckiges Design', 'Kinderschwimmbad', 'Bordunterhaltung', 'Familienfreundlich'],
                    ru: ['Многопалубный дизайн', 'Детский бассейн', 'Развлечения на борту', 'Подходит для семей'],
                    zh: ['多层设计', '儿童游泳池', '船上娱乐', '适合家庭'],
                    cs: ['Vícepatrový design', 'Dětský bazén', 'Zábava na palubě', 'Vhodné pro rodiny'],
                    fr: ['Design multi-ponts', 'Piscine enfants', 'Animations à bord', 'Adapté aux familles']
                }
            },
            {
                id: 'dolphin-house',
                emoji: '🐬',
                names: {
                    ar: 'رحلة بيت الدولفين',
                    en: 'Dolphin House Cruise',
                    de: 'Delphin-Haus Kreuzfahrt',
                    ru: 'Круиз Дом Дельфинов',
                    zh: '海豚之家游轮',
                    cs: 'Plavba Dům Delfínů',
                    fr: 'Croisière Maison des Dauphins'
                },
                durations: {
                    ar: '8:30 صباحاً - 4:30 مساءً',
                    en: '8:30 AM - 4:30 PM',
                    de: '8:30 - 16:30',
                    ru: '8:30 - 16:30',
                    zh: '上午8:30 - 下午4:30',
                    cs: '8:30 - 16:30',
                    fr: '8h30 - 16h30'
                },
                descriptions: {
                    ar: 'رحلة يوم كامل لمشاهدة الدلافين مع معدات الغطس وترفيه على متن السفينة',
                    en: 'Full-day dolphin watching cruise with snorkeling equipment and onboard entertainment',
                    de: 'Ganztägige Delfin-Beobachtungskreuzfahrt mit Schnorchelausrüstung und Bordunterhaltung',
                    ru: 'Полнодневный круиз наблюдения за дельфинами с оборудованием для снорклинга и развлечениями на борту',
                    zh: '全日海豚观察游轮，配有浮潜装备和船上娱乐',
                    cs: 'Celodenní plavba pozorování delfínů se šnorchlovacím vybavením a zábavou na palubě',
                    fr: 'Croisière d\\'observation des dauphins d\\'une journée complète avec équipement de snorkeling et animations à bord'
                },
                highlights: {
                    ar: ['رصد الدلافين', 'محطتان للغطس', 'برنامج يوم كامل', 'معدات مشمولة'],
                    en: ['Dolphin spotting', 'Two snorkeling stops', 'Full day program', 'Equipment included'],
                    de: ['Delfin-Beobachtung', 'Zwei Schnorchel-Stopps', 'Ganztägiges Programm', 'Ausrüstung inbegriffen'],
                    ru: ['Наблюдение за дельфинами', 'Два места для снорклинга', 'Программа на весь день', 'Оборудование включено'],
                    zh: ['海豚观察', '两个浮潜点', '全日程序', '设备包含'],
                    cs: ['Pozorování delfínů', 'Dva šnorchlovací body', 'Celodenní program', 'Vybavení zahrnuto'],
                    fr: ['Observation dauphins', 'Deux arrêts snorkeling', 'Programme journée complète', 'Équipement inclus']
                }
            },
            {
                id: 'morning-safari',
                emoji: '🚙',
                names: {
                    ar: 'سفاري عائلي صباحي',
                    en: 'Family Morning Safari',
                    de: 'Familien-Morgen-Safari',
                    ru: 'Семейное утреннее сафари',
                    zh: '家庭晨间越野',
                    cs: 'Rodinné ranní safari',
                    fr: 'Safari matinal en famille'
                },
                durations: {
                    ar: 'صباحاً',
                    en: 'Morning',
                    de: 'Vormittag',
                    ru: 'Утром',
                    zh: '上午',
                    cs: 'Ráno',
                    fr: 'Matin'
                },
                descriptions: {
                    ar: 'مغامرة صحراوية للعائلات مع عربات الشاطئ وسيارات العنكبوت',
                    en: 'Family-friendly desert adventure with beach buggies and spider cars',
                    de: 'Familienfreundliches Wüstenabenteuer mit Strandbuggys und Spider-Cars',
                    ru: 'Семейное пустынное приключение с пляжными багги и паучьими автомобилями',
                    zh: '适合家庭的沙漠探险，配有沙滩越野车和蜘蛛车',
                    cs: 'Rodinné pouštní dobrodružství s plážovými buggy a pavoučími vozy',
                    fr: 'Aventure désertique familiale avec buggys de plage et voitures araignées'
                },
                highlights: {
                    ar: ['ركوب عربة الشاطئ', 'تجربة سيارة العنكبوت', 'استكشاف الصحراء', 'معدات الأمان'],
                    en: ['Beach buggy riding', 'Spider car experience', 'Desert exploration', 'Safety equipment'],
                    de: ['Strandbuggy-Fahren', 'Spider-Car-Erfahrung', 'Wüsten-Erkundung', 'Sicherheitsausrüstung'],
                    ru: ['Езда на пляжном багги', 'Опыт паучьего автомобиля', 'Исследование пустыни', 'Оборудование безопасности'],
                    zh: ['沙滩越野车驾驶', '蜘蛛车体验', '沙漠探索', '安全设备'],
                    cs: ['Jízda plážovým buggy', 'Zkušenost s pavoučím vozem', 'Průzkum pouště', 'Bezpečnostní vybavení'],
                    fr: ['Conduite buggy plage', 'Expérience voiture araignée', 'Exploration désert', 'Équipement sécurité']
                }
            },
            {
                id: 'evening-safari',
                emoji: '🌅',
                names: {
                    ar: 'سفاري عائلي مسائي',
                    en: 'Family Evening Safari',
                    de: 'Familien-Abend-Safari',
                    ru: 'Семейное вечернее сафари',
                    zh: '家庭黄昏越野',
                    cs: 'Rodinné večerní safari',
                    fr: 'Safari du soir en famille'
                },
                durations: {
                    ar: 'مساءً',
                    en: 'Evening',
                    de: 'Abend',
                    ru: 'Вечер',
                    zh: '傍晚',
                    cs: 'Večer',
                    fr: 'Soir'
                },
                descriptions: {
                    ar: 'سفاري صحراوي مع ترفيه وتوقيت مسائي',
                    en: 'Desert safari with entertainment and evening timing',
                    de: 'Wüsten-Safari mit Unterhaltung und Abendtermin',
                    ru: 'Пустынное сафари с развлечениями и вечерним временем',
                    zh: '沙漠越野配娱乐和黄昏时间',
                    cs: 'Pouštní safari se zábavou a večerním časem',
                    fr: 'Safari désertique avec animations et horaire du soir'
                },
                highlights: {
                    ar: ['نفس الأنشطة', 'توقيت مسائي', 'منظر الغروب', 'ترفيه تقليدي'],
                    en: ['Same activities', 'Evening timing', 'Sunset views', 'Traditional entertainment'],
                    de: ['Gleiche Aktivitäten', 'Abendtermin', 'Sonnenuntergangsblicke', 'Traditionelle Unterhaltung'],
                    ru: ['Те же мероприятия', 'Вечернее время', 'Виды заката', 'Традиционные развлечения'],
                    zh: ['相同活动', '傍晚时间', '日落景观', '传统娱乐'],
                    cs: ['Stejné aktivity', 'Večerní čas', 'Pohledy na západ slunce', 'Tradiční zábava'],
                    fr: ['Mêmes activités', 'Horaire du soir', 'Vues coucher de soleil', 'Divertissement traditionnel']
                }
            },
            {
                id: 'speed-boat',
                emoji: '🚤',
                names: {
                    ar: 'سبيد بوت خاص',
                    en: 'Speed Boat Private',
                    de: 'Privates Speedboot',
                    ru: 'Частный скоростной катер',
                    zh: '私人快艇',
                    cs: 'Soukromý rychlý člun',
                    fr: 'Bateau rapide privé'
                },
                durations: {
                    ar: 'مواعيد مرنة',
                    en: 'Flexible timing',
                    de: 'Flexible Zeiten',
                    ru: 'Гибкое время',
                    zh: '灵活时间',
                    cs: 'Flexibilní časy',
                    fr: 'Horaires flexibles'
                },
                descriptions: {
                    ar: 'تجربة قارب خاص لـ 4-6 ضيوف مع تنقل بين الجزر ونقاط غطس مخصصة',
                    en: 'Private boat experience for 4-6 guests with island hopping and custom snorkeling spots',
                    de: 'Private Boot-Erfahrung für 4-6 Gäste mit Inselhopping und individuellen Schnorchelplätzen',
                    ru: 'Частный опыт катера для 4-6 гостей с посещением островов и индивидуальными местами для снорклинга',
                    zh: '4-6位客人的私人船艇体验，包括岛屿跳跃和定制浮潜点',
                    cs: 'Soukromý zážitek na lodi pro 4-6 hostů s ostrovními výlety a vlastními šnorchlovacími místy',
                    fr: 'Expérience bateau privé pour 4-6 invités avec saut d\\'îles et spots de snorkeling personnalisés'
                },
                highlights: {
                    ar: ['قارب خاص', 'جزيرتان مشمولتان', 'مسار مخصص', 'نظام صوتي'],
                    en: ['Private boat', 'Two islands included', 'Custom route', 'Sound system'],
                    de: ['Privates Boot', 'Zwei Inseln inbegriffen', 'Individuelle Route', 'Soundsystem'],
                    ru: ['Частный катер', 'Два острова включены', 'Индивидуальный маршрут', 'Звуковая система'],
                    zh: ['私人船艇', '包含两个岛屿', '定制路线', '音响系统'],
                    cs: ['Soukromý člun', 'Dva ostrovy zahrnuty', 'Vlastní trasa', 'Zvukový systém'],
                    fr: ['Bateau privé', 'Deux îles incluses', 'Itinéraire personnalisé', 'Système audio']
                }
            },
            {
                id: 'grand-aquarium',
                emoji: '🐟',
                names: {
                    ar: 'جراند أكواريوم',
                    en: 'Grand Aquarium',
                    de: 'Großes Aquarium',
                    ru: 'Большой аквариум',
                    zh: '大型水族馆',
                    cs: 'Velké akvárium',
                    fr: 'Grand Aquarium'
                },
                durations: {
                    ar: '10:00 صباحاً - 7:00 مساءً',
                    en: '10:00 AM - 7:00 PM',
                    de: '10:00 - 19:00',
                    ru: '10:00 - 19:00',
                    zh: '上午10:00 - 下午7:00',
                    cs: '10:00 - 19:00',
                    fr: '10h00 - 19h00'
                },
                descriptions: {
                    ar: 'معرض الحياة البحرية مناسب للعائلات',
                    en: 'Marine life exhibition suitable for all family',
                    de: 'Meereslebensausstellung für die ganze Familie geeignet',
                    ru: 'Выставка морской жизни, подходящая для всей семьи',
                    zh: '适合全家的海洋生物展览',
                    cs: 'Výstava mořského života vhodná pro celou rodinu',
                    fr: 'Exposition de la vie marine adaptée à toute la famille'
                },
                highlights: {
                    ar: ['معرض بحري', 'مناسب للعائلات', 'ساعات طويلة', 'تجربة تعليمية'],
                    en: ['Marine exhibition', 'Family-friendly', 'Long hours', 'Educational experience'],
                    de: ['Marine-Ausstellung', 'Familienfreundlich', 'Lange Öffnungszeiten', 'Bildungserfahrung'],
                    ru: ['Морская выставка', 'Подходит для семей', 'Долгие часы', 'Образовательный опыт'],
                    zh: ['海洋展览', '适合家庭', '长时间开放', '教育体验'],
                    cs: ['Mořská výstava', 'Vhodné pro rodiny', 'Dlouhá otevírací doba', 'Vzdělávací zážitek'],
                    fr: ['Exposition marine', 'Adapté aux familles', 'Longues heures', 'Expérience éducative']
                }
            },
            {
                id: 'dolphin-show',
                emoji: '🐬',
                names: {
                    ar: 'عرض الدولفين',
                    en: 'Dolphin Show',
                    de: 'Delfin-Show',
                    ru: 'Шоу дельфинов',
                    zh: '海豚表演',
                    cs: 'Delfí show',
                    fr: 'Spectacle de dauphins'
                },
                durations: {
                    ar: '3:30 - 5:00 مساءً',
                    en: '3:30 - 5:00 PM',
                    de: '15:30 - 17:00',
                    ru: '15:30 - 17:00',
                    zh: '下午3:30 - 5:00',
                    cs: '15:30 - 17:00',
                    fr: '15h30 - 17h00'
                },
                descriptions: {
                    ar: 'عرض ترفيهي بحري',
                    en: 'Marine entertainment show',
                    de: 'Marine Unterhaltungsshow',
                    ru: 'Морское развлекательное шоу',
                    zh: '海洋娱乐表演',
                    cs: 'Mořská zábavní show',
                    fr: 'Spectacle de divertissement marin'
                },
                highlights: {
                    ar: ['عرض دلافين', 'ترفيه مسائي', 'مناسب للعائلات', 'تجربة تفاعلية'],
                    en: ['Dolphin performance', 'Evening entertainment', 'Family suitable', 'Interactive experience'],
                    de: ['Delfin-Aufführung', 'Abendunterhaltung', 'Für Familien geeignet', 'Interaktive Erfahrung'],
                    ru: ['Выступление дельфинов', 'Вечернее развлечение', 'Подходит для семей', 'Интерактивный опыт'],
                    zh: ['海豚表演', '晚间娱乐', '适合家庭', '互动体验'],
                    cs: ['Vystoupení delfínů', 'Večerní zábava', 'Vhodné pro rodiny', 'Interaktivní zážitek'],
                    fr: ['Spectacle dauphins', 'Divertissement du soir', 'Adapté aux familles', 'Expérience interactive']
                }
            }
        ],
        
        luxor: [
            {
                id: 'hot-air-balloon',
                emoji: '🎈',
                names: {
                    ar: 'بالون طائر',
                    en: 'Hot Air Balloon',
                    de: 'Heißluftballon',
                    ru: 'Воздушный шар',
                    zh: '热气球',
                    cs: 'Horkovzdušný balón',
                    fr: 'Montgolfière'
                },
                durations: {
                    ar: 'رحلات الشروق',
                    en: 'Sunrise flights',
                    de: 'Sonnenaufgangsflüge',
                    ru: 'Полеты на восходе',
                    zh: '日出飞行',
                    cs: 'Lety za úsvitu',
                    fr: 'Vols au lever du soleil'
                },
                descriptions: {
                    ar: 'طيران 30-45 دقيقة فوق وادي الملوك ومعبد حتشبسوت ومناظر النيل عند الفجر',
                    en: 'Soar 30-45 minutes over Valley of Kings, Hatshepsut Temple, and Nile landscapes at dawn',
                    de: 'Schweben Sie 30-45 Minuten über das Tal der Könige, den Hatschepsut-Tempel und Nil-Landschaften bei Sonnenaufgang',
                    ru: 'Парите 30-45 минут над Долиной Царей, храмом Хатшепсут и пейзажами Нила на рассвете',
                    zh: '在黎明时分飞行30-45分钟，俯瞰国王谷、哈特谢普苏特神庙和尼罗河景观',
                    cs: 'Vznášejte se 30-45 minut nad Údolím králů, chrámem Hatšepsut a krajinou Nilu za úsvitu',
                    fr: 'Volez 30-45 minutes au-dessus de la Vallée des Rois, du temple d\\'Hatchepsout et des paysages du Nil à l\\'aube'
                },
                highlights: {
                    ar: ['توقيت الشروق', 'طيران 30-45 دقيقة', 'طيار محترف', 'شهادة طيران'],
                    en: ['Sunrise timing', '30-45 min flight', 'Professional pilot', 'Flight certificate'],
                    de: ['Sonnenaufgangszeit', '30-45 Min Flug', 'Professioneller Pilot', 'Flugzertifikat'],
                    ru: ['Время восхода', 'Полет 30-45 мин', 'Профессиональный пилот', 'Сертификат полета'],
                    zh: ['日出时间', '30-45分钟飞行', '专业飞行员', '飞行证书'],
                    cs: ['Čas úsvitu', 'Let 30-45 min', 'Profesionální pilot', 'Certifikát letu'],
                    fr: ['Horaire lever soleil', 'Vol 30-45 min', 'Pilote professionnel', 'Certificat de vol']
                }
            },
            {
                id: 'luxor-dendera',
                emoji: '🏛️',
                names: {
                    ar: 'الأقصر + دندرة',
                    en: 'Luxor + Dendera',
                    de: 'Luxor + Dendera',
                    ru: 'Луксор + Дендера',
                    zh: '卢克索 + 丹德拉',
                    cs: 'Luxor + Dendera',
                    fr: 'Louxor + Dendéra'
                },
                durations: {
                    ar: 'يوم كامل',
                    en: 'Full day',
                    de: 'Ganzer Tag',
                    ru: 'Полный день',
                    zh: '全天',
                    cs: 'Celý den',
                    fr: 'Journée complète'
                },
                descriptions: {
                    ar: 'جولة شاملة تجمع بين معالم الأقصر البارزة مع مجمع معبد دندرة المذهل',
                    en: 'Comprehensive tour combining Luxor\\'s highlights with the stunning Dendera Temple complex',
                    de: 'Umfassende Tour, die Luxors Höhepunkte mit dem atemberaubenden Dendera-Tempelkomplex verbindet',
                    ru: 'Комплексный тур, сочетающий основные достопримечательности Луксора с потрясающим храмовым комплексом Дендера',
                    zh: '综合游览，结合卢克索的亮点和令人惊叹的丹德拉神庙群',
                    cs: 'Komplexní prohlídka kombinující hlavní body Luxoru s úchvatným chrámovým komplexem Dendera',
                    fr: 'Visite complète combinant les points forts de Louxor avec le magnifique complexe du temple de Dendéra'
                },
                highlights: {
                    ar: ['معبد الكرنك', 'معبد حتشبسوت', 'معبد دندرة', 'مرشد متخصص'],
                    en: ['Karnak Temple', 'Hatshepsut Temple', 'Dendera Temple', 'Professional guide'],
                    de: ['Karnak-Tempel', 'Hatschepsut-Tempel', 'Dendera-Tempel', 'Professioneller Führer'],
                    ru: ['Храм Карнак', 'Храм Хатшепсут', 'Храм Дендера', 'Профессиональный гид'],
                    zh: ['卡纳克神庙', '哈特谢普苏特神庙', '丹德拉神庙', '专业导游'],
                    cs: ['Chrám Karnak', 'Chrám Hatšepsut', 'Chrám Dendera', 'Profesionální průvodce'],
                    fr: ['Temple de Karnak', 'Temple d\\'Hatchepsout', 'Temple de Dendéra', 'Guide professionnel']
                }
            },
            {
                id: 'luxor-highlights',
                emoji: '⭐',
                names: {
                    ar: 'معالم الأقصر',
                    en: 'Luxor Highlights',
                    de: 'Luxor Höhepunkte',
                    ru: 'Основные достопримечательности Луксора',
                    zh: '卢克索亮点',
                    cs: 'Hlavní body Luxoru',
                    fr: 'Points forts de Louxor'
                },
                durations: {
                    ar: 'يوم كامل',
                    en: 'Full day',
                    de: 'Ganzer Tag',
                    ru: 'Полный день',
                    zh: '全天',
                    cs: 'Celý den',
                    fr: 'Journée complète'
                },
                descriptions: {
                    ar: 'وادي الملكات، الكرنك، حتشبسوت، وتمثالا ممنون',
                    en: 'Valley of Queens, Karnak, Hatshepsut, and Colossi of Memnon',
                    de: 'Tal der Königinnen, Karnak, Hatschepsut und Kolosse von Memnon',
                    ru: 'Долина Цариц, Карнак, Хатшепсут и Колоссы Мемнона',
                    zh: '皇后谷、卡纳克、哈特谢普苏特和门农巨像',
                    cs: 'Údolí královen, Karnak, Hatšepsut a Kolosové Memnóna',
                    fr: 'Vallée des Reines, Karnak, Hatchepsout et Colosses de Memnon'
                },
                highlights: {
                    ar: ['وادي الملكات', 'معبد الكرنك', 'معبد حتشبسوت', 'تمثالا ممنون'],
                    en: ['Valley of Queens', 'Karnak Temple', 'Hatshepsut Temple', 'Memnon Colossi'],
                    de: ['Tal der Königinnen', 'Karnak-Tempel', 'Hatschepsut-Tempel', 'Memnon-Kolosse'],
                    ru: ['Долина Цариц', 'Храм Карнак', 'Храм Хатшепсут', 'Колоссы Мемнона'],
                    zh: ['皇后谷', '卡纳克神庙', '哈特谢普苏特神庙', '门农巨像'],
                    cs: ['Údolí královen', 'Chrám Karnak', 'Chrám Hatšepsut', 'Kolosové Memnóna'],
                    fr: ['Vallée des Reines', 'Temple de Karnak', 'Temple d\\'Hatchepsout', 'Colosses de Memnon']
                }
            },
            {
                id: 'nile-cruise',
                emoji: '⛵',
                names: {
                    ar: 'كروز النيل',
                    en: 'Nile Cruise',
                    de: 'Nil-Kreuzfahrt',
                    ru: 'Круиз по Нилу',
                    zh: '尼罗河游轮',
                    cs: 'Plavba po Nilu',
                    fr: 'Croisière sur le Nil'
                },
                durations: {
                    ar: '4-5 أيام',
                    en: '4-5 days',
                    de: '4-5 Tage',
                    ru: '4-5 дней',
                    zh: '4-5天',
                    cs: '4-5 dní',
                    fr: '4-5 jours'
                },
                descriptions: {
                    ar: 'كروز النيل الفاخر بين الأقصر وأسوان مع زيارات المعابد وإقامة كاملة',
                    en: 'Luxury Nile cruise between Luxor and Aswan with temple visits and full board dining',
                    de: 'Luxuriöse Nilkreuzfahrt zwischen Luxor und Assuan mit Tempelbesuchen und Vollpension',
                    ru: 'Роскошный круиз по Нилу между Луксором и Асуаном с посещением храмов и полным пансионом',
                    zh: '豪华尼罗河游轮，往返卢克索和阿斯旺，包含神庙参观和全膳',
                    zh: '卢克索和阿斯旺间的豪华尼罗河游轮，含神庙参观和全膳服务',
                    cs: 'Luxusní plavba po Nilu mezi Luxorem a Asuánem s návštěvami chrámů a plnou penzí',
                    fr: 'Croisière de luxe sur le Nil entre Louxor et Assouan avec visites de temples et pension complète'
                },
                highlights: {
                    ar: ['إقامة 5 نجوم', 'وجبات كاملة', 'زيارات المعابد', 'إرشاد متخصص'],
                    en: ['5-star accommodation', 'Full board meals', 'Temple visits', 'Professional guidance'],
                    de: ['5-Sterne-Unterkunft', 'Vollpension', 'Tempelbesuche', 'Professionelle Führung'],
                    ru: ['5-звездочное размещение', 'Полный пансион', 'Посещения храмов', 'Профессиональное руководство'],
                    zh: ['5星级住宿', '全膳服务', '神庙参观', '专业指导'],
                    cs: ['5hvězdičkové ubytování', 'Plná penze', 'Návštěvy chrámů', 'Profesionální vedení'],
                    fr: ['Hébergement 5 étoiles', 'Pension complète', 'Visites temples', 'Guidage professionnel']
                }
            }
        ],
        
        cairo: [
            {
                id: 'pyramids-museum',
                emoji: '🗿',
                names: {
                    ar: 'الأهرامات والمتحف',
                    en: 'Pyramids & Museum',
                    de: 'Pyramiden & Museum',
                    ru: 'Пирамиды и музей',
                    zh: '金字塔和博物馆',
                    cs: 'Pyramidy a muzeum',
                    fr: 'Pyramides et Musée'
                },
                durations: {
                    ar: 'يوم كامل',
                    en: 'Full day',
                    de: 'Ganzer Tag',
                    ru: 'Полный день',
                    zh: '全天',
                    cs: 'Celý den',
                    fr: 'Journée complète'
                },
                descriptions: {
                    ar: 'تجربة القاهرة الكاملة شاملة أهرامات الجيزة وأبو الهول والمتحف المصري مع مرشد خبير',
                    en: 'Complete Cairo experience including Giza Pyramids, Sphinx, and Egyptian Museum with expert guide',
                    de: 'Komplette Kairo-Erfahrung einschließlich Gizeh-Pyramiden, Sphinx und Ägyptischem Museum mit Experten-Führer',
                    ru: 'Полный опыт Каира, включая пирамиды Гизы, Сфинкса и Египетский музей с экспертным гидом',
                    zh: '完整的开罗体验，包括吉萨金字塔、狮身人面像和埃及博物馆，配专家导游',
                    cs: 'Kompletní zážitek z Káhiry včetně pyramid v Gíze, Sfingy a Egyptského muzea s odborným průvodcem',
                    fr: 'Expérience complète du Caire incluant les Pyramides de Gizeh, le Sphinx et le Musée égyptien avec guide expert'
                },
                highlights: {
                    ar: ['أهرامات الجيزة', 'أبو الهول العظيم', 'المتحف المصري', 'مرشد متخصص'],
                    en: ['Giza Pyramids', 'Great Sphinx', 'Egyptian Museum', 'Professional guide'],
                    de: ['Gizeh-Pyramiden', 'Große Sphinx', 'Ägyptisches Museum', 'Professioneller Führer'],
                    ru: ['Пирамиды Гизы', 'Большой Сфинкс', 'Египетский музей', 'Профессиональный гид'],
                    zh: ['吉萨金字塔', '大狮身人面像', '埃及博物馆', '专业导游'],
                    cs: ['Pyramidy v Gíze', 'Velká Sfinga', 'Egyptské muzeum', 'Profesionální průvodce'],
                    fr: ['Pyramides de Gizeh', 'Grand Sphinx', 'Musée égyptien', 'Guide professionnel']
                }
            }
        ]
    };

    // Language configuration
    const languages = [
        { code: 'ar', name: 'العربية', flag: '🇪🇬', rtl: true },
        { code: 'en', name: 'English', flag: '🇬🇧', rtl: false },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪', rtl: false },
        { code: 'ru', name: 'Русский', flag: '🇷🇺', rtl: false },
        { code: 'zh', name: '中文', flag: '🇨🇳', rtl: false },
        { code: 'cs', name: 'Čeština', flag: '🇨🇿', rtl: false },
        { code: 'fr', name: 'Français', flag: '🇫🇷', rtl: false }
    ];

    let currentLanguage = 'ar';

    // Enhanced language detection
    function detectLanguage() {
        // Check saved preference first
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && translations[savedLang]) {
            return savedLang;
        }

        // Enhanced browser language detection
        const browserLangs = [
            navigator.language,
            ...(navigator.languages || []),
            navigator.userLanguage,
            navigator.browserLanguage,
            navigator.systemLanguage
        ].filter(Boolean);

        for (const lang of browserLangs) {
            const code = lang.substring(0, 2).toLowerCase();
            if (translations[code]) {
                return code;
            }
        }

        return 'ar'; // Default to Arabic
    }

    // Apply translations
    function applyTranslations(lang) {
        const langData = translations[lang] || translations['ar'];
        
        // Update document properties
        document.title = langData['page-title'];
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = langData['page-description'];
        }

        // Update language attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = languages.find(l => l.code === lang)?.rtl ? 'rtl' : 'ltr';

        // Apply text translations
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (langData[key]) {
                element.textContent = langData[key];
            }
        });

        // Update placeholder texts
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (langData[key]) {
                element.placeholder = langData[key];
            }
        });

        // Update current language display
        const currentLangBtn = document.getElementById('currentLang');
        const langConfig = languages.find(l => l.code === lang);
        if (currentLangBtn && langConfig) {
            const flagSpan = currentLangBtn.querySelector('.flag-emoji');
            const textSpan = currentLangBtn.querySelector('.lang-text');
            if (flagSpan) flagSpan.textContent = langConfig.flag;
            if (textSpan) textSpan.textContent = langConfig.name;
        }

        // Update active language option
        document.querySelectorAll('.lang-option').forEach(option => {
            option.classList.remove('active');
            if (option.dataset.lang === lang) {
                option.classList.add('active');
            }
        });

        currentLanguage = lang;
    }

    // Generate tour cards with complete translations
    function generateTourCards() {
        const sectionsData = [
            { section: 'hurghada', containerId: '.tours-section .tours-grid' },
            { section: 'luxor', containerId: '.luxor-section .tours-grid' },
            { section: 'cairo', containerId: '.cairo-section .tours-grid' }
        ];

        sectionsData.forEach(({ section, containerId }) => {
            const container = document.querySelector(containerId);
            if (!container || !toursData[section]) return;

            container.innerHTML = toursData[section].map(tour => `
                <div class="tour-card" data-tour-id="${tour.id}">
                    <div class="tour-card-header">
                        <div class="tour-emoji">${tour.emoji}</div>
                        <h3>${tour.names[currentLanguage] || tour.names.ar}</h3>
                        <div class="tour-duration">${tour.durations[currentLanguage] || tour.durations.ar}</div>
                    </div>
                    <div class="tour-card-body">
                        <p class="tour-description">${tour.descriptions[currentLanguage] || tour.descriptions.ar}</p>
                        <ul class="tour-highlights">
                            ${(tour.highlights[currentLanguage] || tour.highlights.ar).map(highlight => 
                                `<li>${highlight}</li>`
                            ).join('')}
                        </ul>
                        <a href="https://wa.me/201009531706?text=${encodeURIComponent(
                            `${translations[currentLanguage]?.['book-now'] || 'احجز الآن'}: ${tour.names[currentLanguage] || tour.names.ar}`
                        )}" 
                           class="btn-book" 
                           target="_blank">
                            ${translations[currentLanguage]?.['book-now'] || 'احجز الآن'}
                        </a>
                    </div>
                </div>
            `).join('');
        });
    }

    // Language switching
    function switchLanguage(newLang) {
        if (translations[newLang]) {
            localStorage.setItem('preferred-language', newLang);
            applyTranslations(newLang);
            generateTourCards();
        }
    }

    // Initialize language system
    function initializeLanguageSystem() {
        const detectedLang = detectLanguage();
        switchLanguage(detectedLang);

        // Language switcher event listeners
        const dropdown = document.getElementById('languageDropdown');
        const currentLangBtn = document.getElementById('currentLang');

        // Toggle dropdown
        if (currentLangBtn) {
            currentLangBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown?.classList.toggle('active');
            });
        }

        // Language option clicks
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const langCode = option.dataset.lang;
                switchLanguage(langCode);
                dropdown?.classList.remove('active');
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            dropdown?.classList.remove('active');
        });

        // Generate initial tour cards
        generateTourCards();
    }

    // Mobile menu functionality
    function initializeMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navList = document.querySelector('.nav-list');

        if (mobileToggle && navList) {
            mobileToggle.addEventListener('click', () => {
                navList.classList.toggle('active');
                const icon = mobileToggle.querySelector('i');
                if (navList.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });

            // Close mobile menu when clicking on links
            navList.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navList.classList.remove('active');
                    const icon = mobileToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                });
            });
        }
    }

    // Smooth scrolling
    function initializeSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Contact form
    function initializeContactForm() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const formData = new FormData(form);
                const message = `Name: ${formData.get('name')}\\nEmail: ${formData.get('email')}\\nMessage: ${formData.get('message')}`;
                const whatsappUrl = `https://wa.me/201009531706?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                form.reset();
            });
        }
    }

    // Animations
    function initializeAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Add animation classes and observe elements
        document.querySelectorAll('.tour-card, .feature, .section-header').forEach(element => {
            element.classList.add('fade-in');
            observer.observe(element);
        });
    }

    // Initialize all functionality
    initializeLanguageSystem();
    initializeMobileMenu();
    initializeSmoothScrolling();
    initializeContactForm();
    initializeAnimations();

    // Update WhatsApp number globally
    const whatsappNumber = '+201009531706';
    document.querySelectorAll('a[href*="whatsapp"], a[href*="wa.me"]').forEach(link => {
        if (!link.href.includes('201009531706')) {
            link.href = link.href.replace(/(\+?\d{10,15})/, whatsappNumber);
        }
    });
});'''

# حفظ ملف JavaScript
with open('app.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("✅ تم إنشاء ملف app.js المُحدث مع الترجمات الكاملة")