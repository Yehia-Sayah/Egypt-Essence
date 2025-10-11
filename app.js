// Egypt Essence Tours - Complete Multilingual Interactive Application
// Supporting 8 languages with enhanced automatic detection and updated tagline "Explore More Feel More"

document.addEventListener('DOMContentLoaded', function () {
    // Initialize translations object for QA tool
    var translations = {
        ar: {
            // Page Meta
            'page-title': 'Egypt Essence Tours - استكشف أكثر اشعر أكثر',
            'page-description': 'أفضل الرحلات السياحية في مصر - الغردقة، الأقصر، والقاهرة. احجز رحلتك الآن!',

            // Company Info - NEW TAGLINE
            'company-name': 'Egypt Essence Tours',
            'company-tagline': 'استكشف أكثر اشعر أكثر',

            // Navigation
            'nav-home': 'الرئيسية',
            'nav-hurghada': 'رحلات الغردقة',
            'nav-luxor': 'رحلات الأقصر',
            'nav-cairo': 'رحلات القاهرة',
            'nav-about': 'من نحن',
            'nav-contact': 'التواصل',
            'nav-resorts': 'منتجعات',

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
            'feature-support': ' دعم علي مدار الساعة 24/7',
            'feature-quality': 'تجارب عالية الجودة',

            // Section Titles
            'hurghada-title': 'رحلات الغردقة',
            'hurghada-subtitle': 'استمتع بمغامرات البحر الأحمر الرائعة',
            'luxor-title': 'رحلات الأقصر',
            'luxor-subtitle': 'اكتشف كنوز مصر الفرعونية',
            'cairo-title': 'رحلات القاهرة',
            'cairo-subtitle': 'اكتشف عجائب مصر القديمة',
            'resorts-title': 'منتجعات وشقق',
            'resorts-subtitle': 'اعثر على إقامتك المثالية في الغردقة',

            // Hurghada Tours (18 tours)
            'tour-hula-hula-name': 'رحلة جزيرة هولا هولا',
            'tour-hula-hula-time': '8:30 صباحاً - 4:30 مساءً',
            'tour-hula-hula-desc': 'استمتع بالمالديف المصرية مع المياه الصافية والشواطئ الذهبية ونقاط تصوير احترافية',
            'tour-hula-hula-h1': 'محطتان للغطس',
            'tour-hula-hula-h2': 'استكشاف الجزيرة',
            'tour-hula-hula-h3': 'غداء شامل',
            'tour-hula-hula-h4': 'سترات نجاة متوفرة',

            'tour-royal-seascope-name': 'الغواصة الملكية سي سكوب',
            'tour-royal-seascope-time': 'رحلات متعددة يومياً',
            'tour-royal-seascope-desc': 'استكشف العالم تحت الماء في راحة مكيفة مع نوافذ بانورامية وعروض الغواصين',
            'tour-royal-seascope-h1': 'قاعة مشاهدة بانورامية',
            'tour-royal-seascope-h2': 'عروض الغواصين',
            'tour-royal-seascope-h3': 'محطة غطس',
            'tour-royal-seascope-h4': 'مرطبات ترحيبية',

            'tour-panorama-name': 'الغواصة البانوراما',
            'tour-panorama-time': 'رحلات يومية',
            'tour-panorama-desc': 'غواصة متعددة الطوابق مع وسائل الترفيه ومشاهدة العالم البحري في راحة تامة',
            'tour-panorama-h1': 'متعددة الطوابق',
            'tour-panorama-h2': 'برامج ترفيهية',
            'tour-panorama-h3': 'مشاهدة بانورامية',
            'tour-panorama-h4': 'مكيفة بالكامل',

            'tour-dolphin-house-name': 'رحلة بيت الدلافين',
            'tour-dolphin-house-time': '8:30 صباحاً - 4:30 مساءً',
            'tour-dolphin-house-desc': 'رحلة يوم كامل لمشاهدة الدلافين مع معدات الغطس وترفيه على متن القارب',
            'tour-dolphin-house-h1': 'مشاهدة الدلافين',
            'tour-dolphin-house-h2': 'محطتان للغطس',
            'tour-dolphin-house-h3': 'برنامج يوم كامل',
            'tour-dolphin-house-h4': 'معدات متضمنة',


            'tour-Family-Safari-name': 'سفاري العائلة',
            'tour-Family-Safari-time': 'صباحًا ومساءً',
            'tour-Family-Safari-desc': 'استمتع بيوم صحراوي عائلي كامل! تسابقوا على الرمال بسيارات البيتش باجي وسيارات سبيدر واختبروا المغامرات واستمتعوا بالاسترخاء معًا',
            'tour-Family-Safari-h1': 'جولات البيتش باجي',
            'tour-Family-Safari-h2': 'تجربة سيارات سبيدر',
            'tour-Family-Safari-h3': 'استكشاف الصحراء',
            'tour-Family-Safari-h4': 'معدات السلامة',

            'tour-Safari-Moto-3H-name': 'سفاري موتو 3 ساعات',
            'tour-Safari-Moto-3H-time': 'صباحًا ومساءً',
            'tour-Safari-Moto-3H-desc': 'سفاري صحراوي مشوق بدراجات رباعية وركوب الجمال، مناسب للعائلات ومحبي المغامرة',
            'tour-Safari-Moto-3H-h1': 'دراجات رباعية',
            'tour-Safari-Moto-3H-h2': 'ركوب الجمال',
            'tour-Safari-Moto-3H-h3': 'استكشاف الصحراء',
            'tour-Safari-Moto-3H-h4': 'معدات السلامة',

            'tour-banana-boat-name': 'رحلة بانانا بوت',
            'tour-banana-boat-time': 'مواعيد مرنة',
            'tour-banana-boat-desc': 'رحلة بانانا بوت ممتعة وآمنة لكل الأعمار مع توفير معدات السلامة',
            'tour-banana-boat-h1': 'جولة مثيرة',
            'tour-banana-boat-h2': 'مناسبة لجميع الأعمار',
            'tour-banana-boat-h3': 'معدات السلامة',
            'tour-banana-boat-h4': 'طاقم محترف',

            'tour-parasailing-name': 'مغامرة الباراشوت',
            'tour-parasailing-time': 'مواعيد مرنة',
            'tour-parasailing-desc': 'تجربة باراشوت مثيرة فوق البحر الأحمر مع مناظر خلابة ومعدات سلامة',
            'tour-parasailing-h1': 'مناظر خلابة',
            'tour-parasailing-h2': 'معدات السلامة',
            'tour-parasailing-h3': 'مدربين محترفين',
            'tour-parasailing-h4': 'مناسبة لجميع الأعمار',

            'tour-water-ski-name': 'تجربة التزلج على الماء',
            'tour-water-ski-time': 'مواعيد مرنة',
            'tour-water-ski-desc': 'تجربة تزلج مثيرة على مياه البحر الأحمر مع مدربين محترفين ومعدات سلامة',
            'tour-water-ski-h1': 'تجربة مثيرة',
            'tour-water-ski-h2': 'مدربين محترفين',
            'tour-water-ski-h3': 'معدات السلامة',
            'tour-water-ski-h4': 'مناسبة لجميع المستويات',

            'tour-horseback-name': 'جولة ركوب الخيل',
            'tour-horseback-time': 'صباحًا ومساءً',
            'tour-horseback-desc': 'تجربة فريدة لركوب الخيل وسط الصحراء وعلى ساحل البحر الأحمر مع مرشدين محترفين',
            'tour-horseback-h1': 'مسارات صحراوية',
            'tour-horseback-h2': 'جولات ساحلية',
            'tour-horseback-h3': 'مرشدين محترفين',
            'tour-horseback-h4': 'مناسبة لجميع المستويات',

            'tour-speedboat-name': 'مغامرة السبيد بوت الخاص',
            'tour-speedboat-time': 'مواعيد مرنة',
            'tour-speedboat-desc': 'تجربة قارب خاص لـ 4-6 ضيوف مع تنقل بين الجزر ونقاط غطس مخصصة',
            'tour-speedboat-h1': 'قارب خاص 4-6 ضيوف',
            'tour-speedboat-h2': 'جزيرتان متضمنتان',
            'tour-speedboat-h3': 'مسار مخصص',
            'tour-speedboat-h4': 'نظام صوتي',

            'tour-aquarium-name': 'الأكواريوم الكبير',
            'tour-aquarium-time': '10:00 صباحاً - 7:00 مساءً',
            'tour-aquarium-desc': 'معرض للحياة البحرية مع أنواع نادرة من الأسماك والمرجان',
            'tour-aquarium-h1': 'معرض الحياة البحرية',
            'tour-aquarium-h2': 'أسماك نادرة',
            'tour-aquarium-h3': 'عروض تفاعلية',
            'tour-aquarium-h4': 'مناسب للعائلات',

            'tour-paradise-name': 'جزيرة باراديس',
            'tour-paradise-time': '09:00 صباحًا - 05:00 مساءً',
            'tour-paradise-desc': 'جزيرة خاصة بشواطئ خلابة، مرافق فاخرة، وراحة واسترخاء في أجواء هادئة',
            'tour-paradise-h1': 'شاطئ خاص',
            'tour-paradise-h2': 'رياضات مائية',
            'tour-paradise-h3': 'بوفيه مفتوح',
            'tour-paradise-h4': 'خدمات كبار الشخصيات',

            'tour-orange-bay-name': 'جزيرة أورانج باي',
            'tour-orange-bay-time': '08:00 صباحًا - 04:00 مساءً',
            'tour-orange-bay-desc': 'جزيرة رائعة بمياه صافية ورمال بيضاء ومرافق ترفيهية',
            'tour-orange-bay-h1': 'شاطئ خاص',
            'tour-orange-bay-h2': 'سنوركلينج',
            'tour-orange-bay-h3': 'غداء مأكولات بحرية',
            'tour-orange-bay-h4': 'رياضات مائية',

            'tour-mahmya-name': 'جزيرة محمية',
            'tour-mahmya-time': '08:30 صباحًا - 04:30 مساءً',
            'tour-mahmya-desc': 'محمية طبيعية بشواطئ بكر ومياه نقية ومرافق فاخرة',
            'tour-mahmya-h1': 'محمية طبيعية',
            'tour-mahmya-h2': 'شاطئ خاص',
            'tour-mahmya-h3': 'مطعم راقي',
            'tour-mahmya-h4': 'مناطق استرخاء',

            'tour-diving-name': 'رحلة غوص',
            'tour-diving-time': '08:00 صباحًا - 04:00 مساءً',
            'tour-diving-desc': 'استكشف عالم البحر الأحمر تحت الماء مع جولات غوص لجميع المستويات ومدربين محترفين',
            'tour-diving-h1': 'مدربين محترفين',
            'tour-diving-h2': 'توفير جميع المعدات',
            'tour-diving-h3': 'مواقع غوص متنوعة',
            'tour-diving-h4': 'الأمان أولًا',

            'tour-super-safari-name': 'سوبر سفاري',
            'tour-super-safari-time': 'صباحًا ومساءً',
            'tour-super-safari-desc': 'عش تجربة صحراوية متكاملة تجمع بين الجولات المثيرة، العروض الثقافية، وعشاء بدوي تحت النجوم',
            'tour-super-safari-h1': 'جولة صحراوية 4x4',
            'tour-super-safari-h2': 'ركوب الجمال',
            'tour-super-safari-h3': 'عروض ثقافية',
            'tour-super-safari-h4': 'عشاء بدوي',

            'tour-super-pirates-name': ' سوبر بايرتس',
            'tour-super-pirates-time': '08:30 صباحًا - 04:30 مساءً',
            'tour-super-pirates-desc': 'انضم لمغامرة البحر الأحمر مع سوبر بايرتس: سنوركلينج، استكشاف الجزر ويوم ممتع على الماء',
            'tour-super-pirates-h1': 'مواقع سنوركلينج',
            'tour-super-pirates-h2': 'استكشاف الجزر',
            'tour-super-pirates-h3': 'ترفيه على القارب',
            'tour-super-pirates-h4': 'غداء مشمول',

            // Luxor Tours (4 tours)
            'tour-balloon-name': 'البالون الطائر',
            'tour-balloon-time': 'رحلات شروق الشمس',
            'tour-balloon-desc': 'تحليق لمدة 30-45 دقيقة فوق وادي الملوك ومعبد حتشبسوت ومناظر النيل عند الفجر',
            'tour-balloon-h1': 'توقيت شروق الشمس',
            'tour-balloon-h2': 'رحلة 30-45 دقيقة',
            'tour-balloon-h3': 'طيار محترف',
            'tour-balloon-h4': 'شهادة طيران',

            'tour-luxor-dendera-name': 'الأقصر + دندرة',
            'tour-luxor-dendera-time': 'يوم كامل',
            'tour-luxor-dendera-desc': 'جولة شاملة تجمع بين معالم الأقصر الرئيسية ومجمع معبد دندرة المذهل',
            'tour-luxor-dendera-h1': 'معبد الكرنك',
            'tour-luxor-dendera-h2': 'معبد حتشبسوت',
            'tour-luxor-dendera-h3': 'معبد دندرة',
            'tour-luxor-dendera-h4': 'مرشد محترف',

            'tour-luxor-highlights-name': 'أبرز معالم الأقصر',
            'tour-luxor-highlights-time': 'يوم كامل',
            'tour-luxor-highlights-desc': 'جولة شاملة تشمل وادي الملكات ومعبد الكرنك ومعبد حتشبسوت وتماثيل ممنون',
            'tour-luxor-highlights-h1': 'وادي الملكات',
            'tour-luxor-highlights-h2': 'معبد الكرنك',
            'tour-luxor-highlights-h3': 'معبد حتشبسوت',
            'tour-luxor-highlights-h4': 'تماثيل ممنون',

            'tour-nile-cruise-name': 'الرحلة النيلية',
            'tour-nile-cruise-time': '4-5 أيام',
            'tour-nile-cruise-desc': 'رحلة نيلية فاخرة بين الأقصر وأسوان مع زيارة المعابد ووجبات كاملة',
            'tour-nile-cruise-h1': 'إقامة 5 نجوم',
            'tour-nile-cruise-h2': 'وجبات كاملة',
            'tour-nile-cruise-h3': 'زيارات المعابد',
            'tour-nile-cruise-h4': 'إرشاد محترف',

            // Cairo Tours (1 tour)
            'tour-pyramids-name': 'الأهرامات والمتحف',
            'tour-pyramids-time': 'يوم كامل',
            'tour-pyramids-desc': 'تجربة القاهرة الكاملة تشمل أهرامات الجيزة وأبو الهول والمتحف المصري مع مرشد خبير',
            'tour-pyramids-h1': 'أهرامات الجيزة',
            'tour-pyramids-h2': 'تمثال أبو الهول العظيم',
            'tour-pyramids-h3': 'المتحف المصري',
            'tour-pyramids-h4': 'مرشد محترف',

            // Resorts $ Apartments (2 tours)
            'tour-Princess-Resort-name': 'منتجع البرنسيسة',
            'tour-Princess-Resort-time': 'مواعيد مرنة',
            'tour-Princess-Resort-desc': 'اكتشف أفضل المنتجعات والشقق في الغردقة مع مرافق ممتازة ومواقع مميزة لإقامة مثالية',
            'tour-Princess-Resort-h1': 'موقع متميز',
            'tour-Princess-Resort-h2': 'شاطئ خاص',
            'tour-Princess-Resort-h3': 'حمامات سباحة',
            'tour-Princess-Resort-h4': 'مناسب للعائلات',

            'tour-British-Resort-name': 'منتجع البريتش',
            'tour-British-Resort-time': 'مواعيد مرنة',
            'tour-British-Resort-desc': 'استمتع بالراحة والمرافق الممتازة في منتجع بريتش الغردقة، بموقع مركزي وحمامات سباحة حديثة',
            'tour-British-Resort-h1': 'موقع مركزي',
            'tour-British-Resort-h2': 'حمامات سباحة حديثة',
            'tour-British-Resort-h3': 'مرافق فاخرة',
            'tour-British-Resort-h4': 'مناسب للعائلات',


            'book-now': 'احجز الآن',


            // Contact Section
            'contact-title': 'تواصل معنا',
            'contact-subtitle': 'نحن هنا لمساعدتك في التخطيط لرحلة أحلامك',
            'contact-whatsapp': 'واتس اب',
            'contact-email': 'البريد الإلكتروني',
            'contact-phone': 'الهاتف',
            'form-name': 'اسمك الكامل',
            'form-email': 'البريد الإلكتروني',
            'form-phone': 'رقم الهاتف',
            'form-message': 'رسالتك أو استفسارك',
            'form-submit': 'أرسل الرسالة',

            // Footer
            'footer-links': 'روابط سريعة',
            'footer-social': 'تابعنا',
            'footer-copyright': '© 2025 Egypt Essence Tours. جميع الحقوق محفوظة.',

            // WhatsApp Messages
            'whatsapp-general': 'مرحباً! أريد الاستفسار عن رحلاتكم السياحية',
            'whatsapp-contact-form': 'مرحباً! اسمي {name}، بريدي الإلكتروني: {email}، هاتفي: {phone}. رسالتي: {message}'

        },



        en: {
            // Page Meta
            'page-title': 'Egypt Essence Tours - Explore More Feel More',
            'page-description': 'Best tours in Egypt - Hurghada, Luxor, and Cairo. Book your trip now!',

            // Company Info - NEW TAGLINE
            'company-name': 'Egypt Essence Tours',
            'company-tagline': 'Explore More Feel More',

            // Navigation
            'nav-home': 'Home',
            'nav-hurghada': 'Hurghada Tours',
            'nav-luxor': 'Luxor Tours',
            'nav-cairo': 'Cairo Tours',
            'nav-about': 'About Us',
            'nav-contact': 'Contact',
            'nav-resorts': 'Resorts',

            // Hero Section
            'hero-title': 'Discover Egypt\'s Magic with Us',
            'hero-subtitle': 'Enjoy the most beautiful tours in Hurghada, Luxor and Cairo',
            'hero-cta': 'Start Your Journey Now',

            // About Section
            'about-title': 'About Us',
            'about-subtitle': 'Egypt Essence Tours, your perfect companion to explore Egypt\'s beauty',
            'about-description': 'We are a specialized company organizing tours in Egypt\'s most beautiful cities. We provide excellent services and carefully organized trips to ensure you have the best possible tourist experience.',
            'feature-service': 'Excellent Customer Service',
            'feature-safety': 'Safe and Secure Tours',
            'feature-guides': 'Professional Tour Guides',
            'feature-timing': 'Punctual and Organized',
            'feature-support': '24/7 Support',
            'feature-quality': 'High Quality Experiences',


            // Sections Titles
            'hurghada-title': 'Hurghada Tours',
            'hurghada-subtitle': 'Enjoy amazing Red Sea adventures',
            'luxor-title': 'Luxor Tours',
            'luxor-subtitle': 'Discover Egypt\'s Pharaonic treasures',
            'cairo-title': 'Cairo Tours',
            'cairo-subtitle': 'Discover the wonders of ancient Egypt',
            'resorts-title': 'Resorts & Apartments',
            'resorts-subtitle': 'Find your perfect stay in Hurghada',

            // Hurghada Tours (18 tours)
            'tour-hula-hula-name': 'Hula Hula Island',
            'tour-hula-hula-time': '8:30 AM - 4:30 PM',
            'tour-hula-hula-desc': 'Experience Egyptian Maldives with crystal-clear waters and golden beaches with professional photo spots',
            'tour-hula-hula-h1': 'Two snorkeling stops',
            'tour-hula-hula-h2': 'Island exploration',
            'tour-hula-hula-h3': 'Full lunch included',
            'tour-hula-hula-h4': 'Life jackets available',

            'tour-royal-seascope-name': 'Royal Sea Scope Submarine',
            'tour-royal-seascope-time': 'Multiple daily trips',
            'tour-royal-seascope-desc': 'Explore underwater world in air-conditioned comfort with panoramic windows and diver shows',
            'tour-royal-seascope-h1': 'Panoramic viewing hall',
            'tour-royal-seascope-h2': 'Diver shows',
            'tour-royal-seascope-h3': 'Snorkeling stop',
            'tour-royal-seascope-h4': 'Welcome refreshments',

            'tour-panorama-name': 'Panorama Submarine',
            'tour-panorama-time': 'Daily trips',
            'tour-panorama-desc': 'Multi-deck submarine with entertainment and marine world viewing in complete comfort',
            'tour-panorama-h1': 'Multi-deck vessel',
            'tour-panorama-h2': 'Entertainment programs',
            'tour-panorama-h3': 'Panoramic viewing',
            'tour-panorama-h4': 'Fully air-conditioned',

            'tour-dolphin-house-name': 'Dolphin House Cruise',
            'tour-dolphin-house-time': '8:30 AM - 4:30 PM',
            'tour-dolphin-house-desc': 'Full day trip for dolphin watching with snorkeling equipment and onboard entertainment',
            'tour-dolphin-house-h1': 'Dolphin watching',
            'tour-dolphin-house-h2': 'Two snorkeling stops',
            'tour-dolphin-house-h3': 'Full day program',
            'tour-dolphin-house-h4': 'Equipment included',

            'tour-Family-Safari-name': 'Family Safari',
            'tour-Family-Safari-time': 'Morning & Evening',
            'tour-Family-Safari-desc': 'Enjoy a full day family desert adventure! Race beach buggies and spider cars on golden sands, experience thrilling rides, create unforgettable moments, and relax together',
            'tour-Family-Safari-h1': '  Beach buggy rides',
            'tour-Family-Safari-h2': 'Spider car experience',
            'tour-Family-Safari-h3': 'Desert exploration',
            'tour-Family-Safari-h4': 'Safety equipment',


            'tour-Safari-Moto-3H-name': 'Safari Moto 3H',
            'tour-Safari-Moto-3H-time': 'Morning & Evening',
            'tour-Safari-Moto-3H-desc': 'Exciting desert safari with quad biking and camel riding, fun for families and adventure seekers',
            'tour-Safari-Moto-3H-h1': 'Quad biking',
            'tour-Safari-Moto-3H-h2': 'Camel riding',
            'tour-Safari-Moto-3H-h3': 'Desert exploration',
            'tour-Safari-Moto-3H-h4': 'Safety equipment',


            'tour-banana-boat-name': 'Banana Boat Ride',
            'tour-banana-boat-time': 'Flexible timing',
            'tour-banana-boat-desc': 'Fun-filled banana boat ride for all ages, safety equipment provided for a safe adventure',
            'tour-banana-boat-h1': 'Exciting ride',
            'tour-banana-boat-h2': 'All ages welcome',
            'tour-banana-boat-h3': 'Safety equipment',
            'tour-banana-boat-h4': 'Professional staff',


            'tour-parasailing-name': 'Parasailing Adventure',
            'tour-parasailing-time': 'Flexible timing',
            'tour-parasailing-desc': 'Thrilling parasailing experience over the Red Sea with stunning views and safety equipment',
            'tour-parasailing-h1': 'Breathtaking views',
            'tour-parasailing-h2': 'Safety equipment',
            'tour-parasailing-h3': 'Professional instructors',
            'tour-parasailing-h4': 'All ages welcome',


            'tour-water-ski-name': 'Water Skiing Experience',
            'tour-water-ski-time': 'Flexible timing',
            'tour-water-ski-desc': 'Exciting water skiing adventure on the Red Sea with professional instructors and safety equipment',
            'tour-water-ski-h1': 'Thrilling experience',
            'tour-water-ski-h2': 'Professional instructors',
            'tour-water-ski-h3': 'Safety equipment',
            'tour-water-ski-h4': 'All skill levels welcome',



            'tour-horseback-name': 'Horseback Ride',
            'tour-horseback-time': 'Morning & Evening',
            'tour-horseback-desc': 'Unique horseback riding experience through the desert and along the Red Sea coast with professional guides',
            'tour-horseback-h1': 'Desert trails',
            'tour-horseback-h2': 'Coastal rides',
            'tour-horseback-h3': 'Professional guides',
            'tour-horseback-h4': 'All skill levels welcome',

            'tour-speedboat-name': 'Speed Boat Private',
            'tour-speedboat-time': 'Flexible timing',
            'tour-speedboat-desc': 'Private boat experience for 4-6 guests with island hopping and dedicated snorkeling spots',
            'tour-speedboat-h1': 'Private boat 4-6 guests',
            'tour-speedboat-h2': 'Two islands included',
            'tour-speedboat-h3': 'Custom route',
            'tour-speedboat-h4': 'Sound system',

            'tour-aquarium-name': 'Grand Aquarium',
            'tour-aquarium-time': '10:00 AM - 7:00 PM',
            'tour-aquarium-desc': 'Discover an exhibition of rare marine life, featuring unusual species of fish and vibrant coral displays',
            'tour-aquarium-h1': 'Marine life exhibition',
            'tour-aquarium-h2': 'Rare fish species',
            'tour-aquarium-h3': 'Interactive shows',
            'tour-aquarium-h4': 'Family friendly',


            'tour-paradise-name': 'Paradise Island',
            'tour-paradise-time': '9:00 AM - 5:00 PM',
            'tour-paradise-desc': 'Private island with stunning beaches, luxury amenities, and peaceful relaxation',
            'tour-paradise-h1': 'Private Beach',
            'tour-paradise-h2': 'Water Sports',
            'tour-paradise-h3': 'Open Buffet',
            'tour-paradise-h4': 'VIP Services',

            'tour-orange-bay-name': 'Orange Bay Island',
            'tour-orange-bay-time': '8:00 AM - 4:00 PM',
            'tour-orange-bay-desc': 'Beautiful island with turquoise waters, white sand, and recreational facilities',
            'tour-orange-bay-h1': 'Private Beach',
            'tour-orange-bay-h2': 'Snorkeling',
            'tour-orange-bay-h3': 'Seafood Lunch',
            'tour-orange-bay-h4': 'Water Sports',

            'tour-mahmya-name': 'Mahmya Island',
            'tour-mahmya-time': '8:30 AM - 4:30 PM',
            'tour-mahmya-desc': 'Nature reserve with pristine beaches, crystal clear waters, and upscale facilities',
            'tour-mahmya-h1': 'Nature Reserve',
            'tour-mahmya-h2': 'Private Beach',
            'tour-mahmya-h3': 'Premium Restaurant',
            'tour-mahmya-h4': 'Relaxation Areas',


            'tour-diving-name': 'Diving Cruise',
            'tour-diving-time': '8:00 AM - 4:00 PM',
            'tour-diving-desc': 'Explore the underwater world of the Red Sea with professional diving tours for all levels ',
            'tour-diving-h1': 'Professional Instructors',
            'tour-diving-h2': 'All Equipment Provided',
            'tour-diving-h3': 'Various Dive Sites',
            'tour-diving-h4': 'Safety First',


            'tour-super-safari-name': 'Super Safari',
            'tour-super-safari-time': 'Morning & Evening',
            'tour-super-safari-desc': 'Experience the ultimate desert adventure with our Super Safari, combining thrilling rides, cultural experiences, and a delicious Bedouin dinner under the stars.',
            'tour-super-safari-h1': '4x4 Desert Ride',
            'tour-super-safari-h2': 'Camel Riding',
            'tour-super-safari-h3': 'Cultural Performances',
            'tour-super-safari-h4': 'Bedouin Dinner',

            'tour-super-pirates-name': 'Super Pirates',
            'tour-super-pirates-time': '8:30 AM - 4:30 PM',
            'tour-super-pirates-desc': 'Join the adventure on the Red Sea with our Super Pirates tour, featuring snorkeling, island exploration, and a fun-filled day on the water',
            'tour-super-pirates-h1': 'Snorkeling Spots',
            'tour-super-pirates-h2': 'Island Exploration',
            'tour-super-pirates-h3': 'Onboard Entertainment',
            'tour-super-pirates-h4': 'Lunch Included',


            // Luxor Tours (4 tours)
            'tour-balloon-name': 'Hot Air Balloon',
            'tour-balloon-time': 'Sunrise flights',
            'tour-balloon-desc': '30-45 minute flight over Valley of Kings, Hatshepsut Temple and Nile views at dawn',
            'tour-balloon-h1': 'Sunrise timing',
            'tour-balloon-h2': '30-45 minute flight',
            'tour-balloon-h3': 'Professional pilot',
            'tour-balloon-h4': 'Flight certificate',

            'tour-luxor-dendera-name': 'Luxor + Dendera',
            'tour-luxor-dendera-time': 'Full day',
            'tour-luxor-dendera-desc': 'Comprehensive tour combining Luxor\'s main landmarks with stunning Dendera temple complex',
            'tour-luxor-dendera-h1': 'Karnak Temple',
            'tour-luxor-dendera-h2': 'Hatshepsut Temple',
            'tour-luxor-dendera-h3': 'Dendera Temple',
            'tour-luxor-dendera-h4': 'Professional guide',

            'tour-luxor-highlights-name': 'Luxor Highlights',
            'tour-luxor-highlights-time': 'Full day',
            'tour-luxor-highlights-desc': 'Comprehensive tour including Valley of Queens, Karnak Temple, Hatshepsut Temple and Memnon Colossi',
            'tour-luxor-highlights-h1': 'Valley of Queens',
            'tour-luxor-highlights-h2': 'Karnak Temple',
            'tour-luxor-highlights-h3': 'Hatshepsut Temple',
            'tour-luxor-highlights-h4': 'Memnon Colossi',

            'tour-nile-cruise-name': 'Nile Cruise',
            'tour-nile-cruise-time': '4-5 days',
            'tour-nile-cruise-desc': 'Luxury Nile cruise between Luxor and Aswan with temple visits and full board',
            'tour-nile-cruise-h1': '5-star accommodation',
            'tour-nile-cruise-h2': 'Full board meals',
            'tour-nile-cruise-h3': 'Temple visits',
            'tour-nile-cruise-h4': 'Professional guidance',

            // Cairo Tours (1 tour)
            'tour-pyramids-name': 'Pyramids & Museum',
            'tour-pyramids-time': 'Full day',
            'tour-pyramids-desc': 'Complete Cairo experience including Giza Pyramids, Sphinx and Egyptian Museum with expert guide',
            'tour-pyramids-h1': 'Giza Pyramids',
            'tour-pyramids-h2': 'Great Sphinx',
            'tour-pyramids-h3': 'Egyptian Museum',
            'tour-pyramids-h4': 'Professional guide',

            // Resorts $ Apartments (2 tours)
            'tour-Princess-Resort-name': 'Princess Resort',
            'tour-Princess-Resort-time': 'Flexible timing',
            'tour-Princess-Resort-desc': 'Discover top resorts and apartments in Hurghada with excellent amenities and prime locations for a perfect stay',
            'tour-Princess-Resort-h1': 'Prime Locations',
            'tour-Princess-Resort-h2': 'Private Beach',
            'tour-Princess-Resort-h3': 'Swimming Pools',
            'tour-Princess-Resort-h4': 'Family Friendly',


            'tour-British-Resort-name': 'British Resort',
            'tour-British-Resort-time': 'Flexible timing',
            'tour-British-Resort-desc': 'Enjoy comfort and great facilities at British Resort Hurghada, with a central location and modern swimming pools',
            'tour-British-Resort-h1': ' Central Location',
            'tour-British-Resort-h2': 'Modern Pools',
            'tour-British-Resort-h3': 'Luxury Amenities',
            'tour-British-Resort-h4': 'Family Friendly',


            'book-now': 'Book Now',

            // Contact Section
            'contact-title': 'Contact Us',
            'contact-subtitle': 'We\'re here to help you plan your dream trip',
            'contact-whatsapp': 'WhatsApp',
            'contact-email': 'Email',
            'contact-phone': 'Phone',
            'form-name': 'Your Full Name',
            'form-email': 'Email Address',
            'form-phone': 'Phone Number',
            'form-message': 'Your Message or Inquiry',
            'form-submit': 'Send Message',

            // Footer
            'footer-links': 'Quick Links',
            'footer-social': 'Follow Us',
            'footer-copyright': '© 2025 Egypt Essence Tours. All rights reserved.',

            // WhatsApp Messages
            'whatsapp-general': 'Hello! I would like to inquire about your tours',
            'whatsapp-contact-form': 'Hello! My name is {name}, email: {email}, phone: {phone}. Message: {message}'
        },

        de: {
            // Page Meta
            'page-title': 'Egypt Essence Tours – Entdecke Mehr, Fühle Mehr',
            'page-description': 'Beste Touren in Ägypten – Hurghada, Luxor und Kairo. Buche jetzt deine Reise!',

            // Company Info - NEW TAGLINE
            'company-name': 'Egypt Essence Tours',
            'company-tagline': 'Entdecke Mehr, Fühle Mehr',

            // Navigation
            'nav-home': 'Startseite',
            'nav-hurghada': 'Hurghada Touren',
            'nav-luxor': 'Luxor Touren',
            'nav-cairo': 'Kairo Touren',
            'nav-about': 'Über Uns',
            'nav-contact': 'Kontakt',
            'nav-resorts': 'Resorts',


            // Hero Section
            'hero-title': 'Erlebe die Magie Ägyptens mit uns',
            'hero-subtitle': 'Genieße die schönsten Touren in Hurghada, Luxor und Kairo',
            'hero-cta': 'Starte jetzt deine Reise',

            // About Section
            'about-title': 'Über Uns',
            'about-subtitle': 'Egypt Essence Tours, dein perfekter Begleiter zur Erkundung Ägyptens',
            'about-description': 'Wir sind ein spezialisiertes Unternehmen, das Touren in den schönsten Städten Ägyptens organisiert. Wir bieten exzellenten Service und sorgfältig geplante Reisen für das beste Erlebnis.',
            'feature-service': 'Ausgezeichneter Kundenservice',
            'feature-safety': 'Sichere und geschützte Touren',
            'feature-guides': 'Professionelle Reiseführer',
            'feature-timing': 'Pünktlich und organisiert',
            'feature-support': '24/7 Unterstützung',
            'feature-quality[': 'Hochwertige Erlebnisse',


            // Section Titles
            'hurghada-title': 'Hurghada Touren',
            'hurghada-subtitle': 'Erlebe beeindruckende Abenteuer im Roten Meer',
            'luxor-title': 'Luxor Touren',
            'luxor-subtitle': 'Entdecke die pharaonischen Schätze Ägyptens',
            'cairo-title': 'Kairo Touren',
            'cairo-subtitle': 'Entdecke die Wunder des alten Ägypten',
            'resorts-title': 'Resorts & Apartments',
            'resorts-subtitle': 'Finden Sie Ihre perfekte Unterkunft in Hurghada',

            // Hurghada Tours (18 tours)
            'tour-hula-hula-name': 'Hula Hula Insel',
            'tour-hula-hula-time': '8:30 – 16:30 Uhr',
            'tour-hula-hula-desc': 'Erlebe die ägyptischen Malediven mit kristallklarem Wasser und goldenen Stränden',
            'tour-hula-hula-h1': 'Zwei Schnorchel-Stopps',
            'tour-hula-hula-h2': 'Insel-Erkundung',
            'tour-hula-hula-h3': 'Mittagessen inklusive',
            'tour-hula-hula-h4': 'Rettungswesten verfügbar',

            'tour-royal-seascope-name': 'Royal Sea Scope U-Boot',
            'tour-royal-seascope-time': 'Mehrere tägliche Fahrten',
            'tour-royal-seascope-desc': 'Erkunde die Unterwasserwelt klimatisiert mit Panoramafenstern und Tauchshows',
            'tour-royal-seascope-h1': 'Panoramasalon',
            'tour-royal-seascope-h2': 'Tauchshows',
            'tour-royal-seascope-h3': 'Schnorchel-Stopps',
            'tour-royal-seascope-h4': 'Begrüßungsgetränke',

            'tour-panorama-name': 'Panorama U-Boot',
            'tour-panorama-time': 'Tägliche Fahrten',
            'tour-panorama-desc': 'Mehrdeckiges U-Boot mit Unterhaltung und Meeresblick',
            'tour-panorama-h1': 'Mehrdeckiges Schiff',
            'tour-panorama-h2': 'Unterhaltungsprogramm',
            'tour-panorama-h3': 'Panoramablick',
            'tour-panorama-h4': 'Voll klimatisiert',

            'tour-dolphin-house-name': 'Dolphin House Kreuzfahrt',
            'tour-dolphin-house-time': '8:30 – 16:30 Uhr',
            'tour-dolphin-house-desc': 'Ganztägige Fahrt zur Delfinbeobachtung mit Schnorchelausrüstung',
            'tour-dolphin-house-h1': 'Delfinbeobachtung',
            'tour-dolphin-house-h2': 'Zwei Schnorchel-Stopps',
            'tour-dolphin-house-h3': 'Ganztagesprogramm',
            'tour-dolphin-house-h4': 'Ausrüstung inklusive',

            'tour-Family-Safari-name': 'Familiensafari',
            'tour-Family-Safari-time': 'Morgens & Abends',
            'tour-Family-Safari-desc': 'Genießen Sie einen ganzen Tag Wüstenabenteuer mit der Familie! Fahren Sie Beach Buggys und Spider Cars im goldenen Sand, erleben Sie Action, schaffen Sie unvergessliche Momente und entspannen Sie gemeinsam.',
            'tour-Family-Safari-h1': 'Beach Buggy-Fahrten',
            'tour-Family-Safari-h2': 'Spider Car Erlebnis',
            'tour-Family-Safari-h3': 'Wüstenerkundung',
            'tour-Family-Safari-h4': 'Sicherheitsausrüstung',

            'tour-Safari-Moto-3H-name': 'Safari Moto 3H',
            'tour-Safari-Moto-3H-time': 'Morgens & Abends',
            'tour-Safari-Moto-3H-desc': 'Spannende Wüstensafari mit Quadfahren und Kamelreiten. Spaß für Familien und Abenteurer.',
            'tour-Safari-Moto-3H-h1': 'Quadfahren',
            'tour-Safari-Moto-3H-h2': 'Kamelreiten',
            'tour-Safari-Moto-3H-h3': 'Wüstenerkundung',
            'tour-Safari-Moto-3H-h4': 'Sicherheitsausrüstung',

            'tour-banana-boat-name': 'Bananenboot-Fahrt',
            'tour-banana-boat-time': 'Flexible Zeiten',
            'tour-banana-boat-desc': 'Spaßige Bananenboot-Fahrt für alle Altersgruppen, Sicherheitsausrüstung für ein sicheres Abenteuer inklusive.',
            'tour-banana-boat-h1': 'Spannende Fahrt',
            'tour-banana-boat-h2': 'Für jedes Alter geeignet',
            'tour-banana-boat-h3': 'Sicherheitsausrüstung',
            'tour-banana-boat-h4': 'Professionelles Personal',

            'tour-parasailing-name': 'Parasailing Abenteuer',
            'tour-parasailing-time': 'Flexible Zeiten',
            'tour-parasailing-desc': 'Spannendes Parasailing-Erlebnis über das Rote Meer mit fantastischen Ausblicken und Sicherheitsausrüstung.',
            'tour-parasailing-h1': 'Atemberaubende Aussichten',
            'tour-parasailing-h2': 'Sicherheitsausrüstung',
            'tour-parasailing-h3': 'Professionelle Trainer',
            'tour-parasailing-h4': 'Für jedes Alter geeignet',

            'tour-water-ski-name': 'Wasserski-Erlebnis',
            'tour-water-ski-time': 'Flexible Zeiten',
            'tour-water-ski-desc': 'Spannendes Wasserski-Abenteuer im Roten Meer mit professionellen Trainern und Sicherheitsausrüstung.',
            'tour-water-ski-h1': 'Spannendes Erlebnis',
            'tour-water-ski-h2': 'Professionelle Trainer',
            'tour-water-ski-h3': 'Sicherheitsausrüstung',
            'tour-water-ski-h4': 'Für alle Levels geeignet',

            'tour-horseback-name': 'Reitabenteuer',
            'tour-horseback-time': 'Morgens & Abends',
            'tour-horseback-desc': 'Einzigartiges Erlebnis beim Reiten durch die Wüste und entlang der Küste des Roten Meeres mit erfahrenen Guides.',
            'tour-horseback-h1': 'Wüstenrouten',
            'tour-horseback-h2': 'Küstenritte',
            'tour-horseback-h3': 'Professionelle Guides',
            'tour-horseback-h4': 'Für alle Reitniveaus geeignet',

            'tour-speedboat-name': 'Speedboot Privat',
            'tour-speedboat-time': 'Flexible Zeiten',
            'tour-speedboat-desc': 'Private Bootsfahrt für 4-6 Gäste inkl. Inselhopping und Schnorchel-Stops.',
            'tour-speedboat-h1': 'Privates Boot (4-6 Gäste)',
            'tour-speedboat-h2': 'Zwei Inseln inklusive',
            'tour-speedboat-h3': 'Individuelle Route',
            'tour-speedboat-h4': 'Soundsystem',

            'tour-aquarium-name': 'Grand Aquarium',
            'tour-aquarium-time': '10:00 - 19:00 Uhr',
            'tour-aquarium-desc': 'Entdecken Sie eine Ausstellung seltener Meeresbewohner: ungewöhnliche Fischarten und bunte Korallen.',
            'tour-aquarium-h1': 'Meereslebens-Ausstellung',
            'tour-aquarium-h2': 'Seltene Fischarten',
            'tour-aquarium-h3': 'Interaktive Shows',
            'tour-aquarium-h4': 'Familienfreundlich',

            'tour-paradise-name': 'Paradise Insel',
            'tour-paradise-time': '09:00 - 17:00 Uhr',
            'tour-paradise-desc': 'Private Insel mit traumhaften Stränden, luxuriösen Einrichtungen und Ruhe.',
            'tour-paradise-h1': 'Privater Strand',
            'tour-paradise-h2': 'Wassersport',
            'tour-paradise-h3': 'Buffet',
            'tour-paradise-h4': 'VIP-Service',

            'tour-orange-bay-name': 'Orange Bay Insel',
            'tour-orange-bay-time': '08:00 - 16:00 Uhr',
            'tour-orange-bay-desc': 'Traumhafte Insel mit türkisfarbenem Wasser, weißem Sand und Freizeitangeboten.',
            'tour-orange-bay-h1': 'Privater Strand',
            'tour-orange-bay-h2': 'Schnorcheln',
            'tour-orange-bay-h3': 'Meeresfrüchte-Mittagessen',
            'tour-orange-bay-h4': 'Wassersport',

            'tour-mahmya-name': 'Mahmya Insel',
            'tour-mahmya-time': '08:30 - 16:30 Uhr',
            'tour-mahmya-desc': 'Naturschutzgebiet mit unberührten Stränden, klarem Wasser und exklusiven Einrichtungen.',
            'tour-mahmya-h1': 'Naturschutzgebiet',
            'tour-mahmya-h2': 'Privater Strand',
            'tour-mahmya-h3': 'Premium-Restaurant',
            'tour-mahmya-h4': 'Entspannungsbereiche',

            'tour-diving-name': 'Tauchfahrt',
            'tour-diving-time': '08:00 - 16:00 Uhr',
            'tour-diving-desc': 'Erkunden Sie die Unterwasserwelt des Roten Meeres mit professionellen Tauchgängen für alle Niveaus.',
            'tour-diving-h1': 'Professionelle Tauchlehrer',
            'tour-diving-h2': 'Ausrüstung inklusive',
            'tour-diving-h3': 'Diverse Tauchplätze',
            'tour-diving-h4': 'Sicherheit zuerst',

            'tour-super-safari-name': 'Super Safari',
            'tour-super-safari-time': 'Morgens & Abends',
            'tour-super-safari-desc': 'Das ultimative Wüstenabenteuer! Spannende Fahrten, kulturelle Erlebnisse und Beduinen-Dinner unter Sternenhimmel.',
            'tour-super-safari-h1': '4x4 Wüstentour',
            'tour-super-safari-h2': 'Kamelreiten',
            'tour-super-safari-h3': 'Kulturelle Shows',
            'tour-super-safari-h4': 'Beduinen-Dinner',

            'tour-super-pirates-name': 'Super Pirates',
            'tour-super-pirates-time': '08:30 - 16:30 Uhr',
            'tour-super-pirates-desc': 'Erleben Sie das Abenteuer am Roten Meer mit Super Pirates: Schnorcheln, Inselerkundung & Spaß auf dem Wasser.',
            'tour-super-pirates-h1': 'Schnorchelspots',
            'tour-super-pirates-h2': 'Inselerkundung',
            'tour-super-pirates-h3': 'Unterhaltung an Bord',
            'tour-super-pirates-h4': 'Mittagessen inklusive',


            // Luxor Tours (4 tours)
            'tour-balloon-name': 'Heißluftballon',
            'tour-balloon-time': 'Sonnenaufgangsflüge',
            'tour-balloon-desc': '30–45 Minuten Flug über das Tal der Könige und die Tempel',
            'tour-balloon-h1': 'Sonnenaufgangszeit',
            'tour-balloon-h2': '30–45 Minuten Flug',
            'tour-balloon-h3': 'Professioneller Pilot',
            'tour-balloon-h4': 'Flugzertifikat',

            'tour-luxor-dendera-name': 'Luxor + Dendera',
            'tour-luxor-dendera-time': 'Ganzer Tag',
            'tour-luxor-dendera-desc': 'Kombinierte Tour zu Luxors Hauptsehenswürdigkeiten und Dendera-Tempel',
            'tour-luxor-dendera-h1': 'Karnak-Tempel',
            'tour-luxor-dendera-h2': 'Hatschepsut-Tempel',
            'tour-luxor-dendera-h3': 'Dendera-Tempel',
            'tour-luxor-dendera-h4': 'Professioneller Guide',

            'tour-luxor-highlights-name': 'Luxor Höhepunkte',
            'tour-luxor-highlights-time': 'Ganzer Tag',
            'tour-luxor-highlights-desc': 'Tour durch Tal der Königinnen und Memnon-Kolosse',
            'tour-luxor-highlights-h1': 'Tal der Königinnen',
            'tour-luxor-highlights-h2': 'Karnak-Tempel',
            'tour-luxor-highlights-h3': 'Hatschepsut-Tempel',
            'tour-luxor-highlights-h4': 'Memnon-Kolosse',

            'tour-nile-cruise-name': 'Nilkreuzfahrt',
            'tour-nile-cruise-time': '4–5 Tage',
            'tour-nile-cruise-desc': 'Luxuriöse Nilkreuzfahrt zwischen Luxor und Assuan mit Vollpension',
            'tour-nile-cruise-h1': '5-Sterne Unterbringung',
            'tour-nile-cruise-h2': 'Vollpension',

            // Cairo Tours (1 tour)
            "tour-pyramids-name": "Pyramiden & Museum",
            "tour-pyramids-time": "Ganztägig",
            "tour-pyramids-desc": "Umfassendes Kairo-Erlebnis einschließlich der Pyramiden von Gizeh, der Sphinx und des Ägyptischen Museums mit fachkundigem Reiseleiter",
            "tour-pyramids-h1": "Pyramiden von Gizeh",
            "tour-pyramids-h2": "Große Sphinx",
            "tour-pyramids-h3": "Ägyptisches Museum",
            "tour-pyramids-h4": "Professioneller Reiseleiter",

            // Resorts $ Apartments (2 tours)
            'tour-Princess-Resort-name': 'Princess Resort',
            'tour-Princess-Resort-time': 'Flexible Zeiten',
            'tour-Princess-Resort-desc': 'Entdecken Sie Top-Resorts und Apartments in Hurghada mit ausgezeichneten Einrichtungen und bester Lage für einen perfekten Aufenthalt',
            'tour-Princess-Resort-h1': 'Top-Lage',
            'tour-Princess-Resort-h2': 'Privater Strand',
            'tour-Princess-Resort-h3': 'Swimmingpools',
            'tour-Princess-Resort-h4': 'Familienfreundlich',

            'tour-British-Resort-name': 'British Resort',
            'tour-British-Resort-time': 'Flexible Zeiten',
            'tour-British-Resort-desc': 'Genießen Sie Komfort und hervorragende Ausstattung im British Resort Hurghada mit zentraler Lage und modernen Pools',
            'tour-British-Resort-h1': 'Zentrale Lage',
            'tour-British-Resort-h2': 'Moderne Pools',
            'tour-British-Resort-h3': 'Luxuriöse Ausstattung',
            'tour-British-Resort-h4': 'Familienfreundlich',


            "book-now": "Jetzt buchen",

            // Contact Section
            "contact-title": "Kontakt",
            "contact-subtitle": "Wir helfen Ihnen, Ihre Traumreise zu planen",
            "contact-whatsapp": "WhatsApp",
            "contact-email": "E-Mail",
            "contact-phone": "Telefon",
            "form-name": "Ihr vollständiger Name",
            "form-email": "E-Mail-Adresse",
            "form-phone": "Telefonnummer",
            "form-message": "Ihre Nachricht",
            "form-submit": "Nachricht senden",

            // Footer
            "footer-links": "Schnellzugriff",
            "footer-social": "Folgen Sie uns",
            "footer-copyright": "© 2025 Egypt Essence Tours. Alle Rechte vorbehalten.",


            // WhatsApp Messages
            'whatsapp-general': 'Hallo! Ich möchte mich über Ihre Touren erkundigen',
            'whatsapp-contact-form': 'Hallo! Mein Name ist {name}, E-Mail: {email}, Telefon: {phone}. Nachricht: {message}'

        },

        ru: {

            // Page Meta
            "page-title": "Egypt Essence Tours – Откройте Больше, Почувствуйте Больше",
            "page-description": "Лучшие туры в Египте – Хургада, Луксор и Каир. Забронируйте сейчас!",

            // Company Info - NEW TAGLINE
            "company-name": "Egypt Essence Tours",
            "company-tagline": "Откройте Больше, Почувствуйте Больше",

            // Navigation
            "nav-home": "Главная",
            "nav-hurghada": "Туры Хургады",
            "nav-luxor": "Туры Луксора",
            "nav-cairo": "Туры Каира",
            "nav-about": "О Нас",
            "nav-contact": "Контакты",
            "nav-resorts": "Курорты",

            // Hero Section
            "hero-title": "Откройте Магию Египта с Нами",
            "hero-subtitle": "Наслаждайтесь лучшими турами в Хургаде, Луксоре и Каире",
            "hero-cta": "Начните Ваше Путешествие",

            // About Section
            "about-title": "О Нас",
            "about-subtitle": "Egypt Essence Tours, ваш идеальный спутник для изучения красоты Египта",
            "about-description": "Мы – компания, специализирующаяся на организации туров по самым красивым городам Египта. Мы предоставляем превосходный сервис и тщательно продуманные маршруты для лучшего впечатления.",
            "feature-service": "Отличное обслуживание клиентов",
            "feature-safety": "Безопасные и надежные туры",
            "feature-guides": "Профессиональные гиды",
            "feature-timing": "Точно и организованно",
            "feature-support": "Поддержка 24/7",
            "feature-quality": "Высококачественные впечатления",

            // Section Titles
            "hurghada-title": "Туры Хургады",
            "hurghada-subtitle": "Насладитесь приключениями в Красном море",
            "luxor-title": "Туры Луксора",
            "luxor-subtitle": "Откройте Фараоновы сокровища Египта",
            "cairo-title": "Туры Каира",
            "cairo-subtitle": "Откройте чудеса Древнего Египта",
            "resorts-title": "Курорты и Апартаменты",
            "resorts-subtitle": "Найдите идеальное жилье в Хургаде",

            // Hurghada Tours (18 tours)
            "tour-hula-hula-name": "Остров Хула Хула",
            "tour-hula-hula-time": "8:30 – 16:30",
            "tour-hula-hula-desc": "Погрузитесь в египетские Мальдивы с чистейшей водой и золотыми пляжами",
            "tour-hula-hula-h1": "Два места для сноркелинга",
            "tour-hula-hula-h2": "Исследование острова",
            "tour-hula-hula-h3": "Обед включен",
            "tour-hula-hula-h4": "Спасательные жилеты предоставляются",

            "tour-royal-seascope-name": "Подводная лодка Royal Sea Scope",
            "tour-royal-seascope-time": "Несколько рейсов в день",
            "tour-royal-seascope-desc": "Изучайте подводный мир в кондиционированных условиях с панорамными окнами и шоу дайверов",
            "tour-royal-seascope-h1": "Панорамный салон",
            "tour-royal-seascope-h2": "Шоу дайверов",
            "tour-royal-seascope-h3": "Сноркелинг",
            "tour-royal-seascope-h4": "Приветственные напитки",

            "tour-panorama-name": "Панорамная лодка",
            "tour-panorama-time": "Ежедневные рейсы",
            "tour-panorama-desc": "Многоярусная лодка с развлечениями и видом на морской мир",
            "tour-panorama-h1": "Многоярусный корабль",
            "tour-panorama-h2": "Развлекательная программа",
            "tour-panorama-h3": "Панорамный вид",
            "tour-panorama-h4": "Полная кондиция",

            "tour-dolphin-house-name": "Круиз к дому дельфинов",
            "tour-dolphin-house-time": "8:30 – 16:30",
            "tour-dolphin-house-desc": "Целодневный тур для наблюдения за дельфинами со сноркелингом",
            "tour-dolphin-house-h1": "Наблюдение за дельфинами",
            "tour-dolphin-house-h2": "Два места для сноркелинга",
            "tour-dolphin-house-h3": "Целодневная программа",
            "tour-dolphin-house-h4": "Оборудование включено",

            'tour-Family-Safari-name': 'Семейное сафари',
            'tour-Family-Safari-time': 'Утро и вечер',
            'tour-Family-Safari-desc': 'Насладитесь семейным приключением в пустыне на целый день! Гоняйте на багги и спайдерах по золотым пескам, испытайте яркие впечатления, создайте незабываемые моменты и отдыхайте вместе.',
            'tour-Family-Safari-h1': 'Катание на багги',
            'tour-Family-Safari-h2': 'Опыт езды на спайдер-кара',
            'tour-Family-Safari-h3': 'Исследование пустыни',
            'tour-Family-Safari-h4': 'Средства безопасности',

            'tour-Safari-Moto-3H-name': 'Сафари Мото 3Ч',
            'tour-Safari-Moto-3H-time': 'Утро и вечер',
            'tour-Safari-Moto-3H-desc': 'Увлекательное сафари в пустыне с квадроциклами и катанием на верблюдах – весело для всей семьи и любителей приключений.',
            'tour-Safari-Moto-3H-h1': 'Квадроциклы',
            'tour-Safari-Moto-3H-h2': 'Катание на верблюдах',
            'tour-Safari-Moto-3H-h3': 'Исследование пустыни',
            'tour-Safari-Moto-3H-h4': 'Средства безопасности',

            'tour-banana-boat-name': 'Катание на банане',
            'tour-banana-boat-time': 'Гибкий график',
            'tour-banana-boat-desc': 'Веселая поездка на банане для всех возрастов, средства безопасности предоставляются.',
            'tour-banana-boat-h1': 'Впечатляющая поездка',
            'tour-banana-boat-h2': 'Добро пожаловать всем возрастам',
            'tour-banana-boat-h3': 'Средства безопасности',
            'tour-banana-boat-h4': 'Профессиональный персонал',

            'tour-parasailing-name': 'Парасейлинг-приключение',
            'tour-parasailing-time': 'Гибкий график',
            'tour-parasailing-desc': 'Захватывающий парасейлинг над Красным морем с потрясающими видами и средствами безопасности.',
            'tour-parasailing-h1': 'Завораживающие виды',
            'tour-parasailing-h2': 'Средства безопасности',
            'tour-parasailing-h3': 'Профессиональные инструкторы',
            'tour-parasailing-h4': 'Для всех возрастов',

            'tour-water-ski-name': 'Водные лыжи',
            'tour-water-ski-time': 'Гибкий график',
            'tour-water-ski-desc': 'Увлекательное катание на водных лыжах в Красном море с профессиональными инструкторами и средствами безопасности.',
            'tour-water-ski-h1': 'Захватывающий опыт',
            'tour-water-ski-h2': 'Профессиональные инструкторы',
            'tour-water-ski-h3': 'Средства безопасности',
            'tour-water-ski-h4': 'Для любого уровня',

            'tour-horseback-name': 'Верховая езда',
            'tour-horseback-time': 'Утро и вечер',
            'tour-horseback-desc': 'Уникальный опыт верховой езды по пустыне и вдоль побережья Красного моря с профессиональными гидами.',
            'tour-horseback-h1': 'Пустынные тропы',
            'tour-horseback-h2': 'Маршруты вдоль побережья',
            'tour-horseback-h3': 'Профессиональные гиды',
            'tour-horseback-h4': 'Для любого уровня',

            'tour-speedboat-name': 'Скоростная лодка (приват)',
            'tour-speedboat-time': 'Гибкий график',
            'tour-speedboat-desc': 'Приватная прогулка на лодке для 4-6 гостей с посещением островов и специально подобранными местами для снорклинга.',
            'tour-speedboat-h1': 'Частная лодка 4-6 гостей',
            'tour-speedboat-h2': 'Включено два острова',
            'tour-speedboat-h3': 'Индивидуальный маршрут',
            'tour-speedboat-h4': 'Звуковая система',

            'tour-aquarium-name': 'Гранд Аквариум',
            'tour-aquarium-time': '10:00 - 19:00',
            'tour-aquarium-desc': 'Откройте для себя экспозицию редких морских обитателей, необычных видов рыб и ярких коралловых рифов.',
            'tour-aquarium-h1': 'Экспозиция морских обитателей',
            'tour-aquarium-h2': 'Редкие виды рыб',
            'tour-aquarium-h3': 'Интерактивные шоу',
            'tour-aquarium-h4': 'Для всей семьи',

            'tour-paradise-name': 'Остров Парадайз',
            'tour-paradise-time': '09:00 - 17:00',
            'tour-paradise-desc': 'Частный остров с потрясающими пляжами, роскошными удобствами и атмосферой спокойствия.',
            'tour-paradise-h1': 'Частный пляж',
            'tour-paradise-h2': 'Водные виды спорта',
            'tour-paradise-h3': 'Открытый буфет',
            'tour-paradise-h4': 'VIP-услуги',

            'tour-orange-bay-name': 'Остров Оранж Бэй',
            'tour-orange-bay-time': '08:00 - 16:00',
            'tour-orange-bay-desc': 'Красивый остров с бирюзовыми водами, белым песком и развлекательными возможностями.',
            'tour-orange-bay-h1': 'Частный пляж',
            'tour-orange-bay-h2': 'Снорклинг',
            'tour-orange-bay-h3': 'Обед из морепродуктов',
            'tour-orange-bay-h4': 'Водные виды спорта',

            'tour-mahmya-name': 'Остров Махмия',
            'tour-mahmya-time': '08:30 - 16:30',
            'tour-mahmya-desc': 'Природный заповедник с нетронутыми пляжами, кристально чистой водой и первоклассными удобствами.',
            'tour-mahmya-h1': 'Природный заповедник',
            'tour-mahmya-h2': 'Частный пляж',
            'tour-mahmya-h3': 'Премиум-ресторан',
            'tour-mahmya-h4': 'Зоны для релакса',

            'tour-diving-name': 'Дайвинг-круиз',
            'tour-diving-time': '08:00 - 16:00',
            'tour-diving-desc': 'Исследуйте подводный мир Красного моря с профессиональными дайвинг-турами для любого уровня подготовки.',
            'tour-diving-h1': 'Профессиональные инструкторы',
            'tour-diving-h2': 'Всё оборудование включено',
            'tour-diving-h3': 'Разнообразные места погружений',
            'tour-diving-h4': 'Безопасность прежде всего',

            'tour-super-safari-name': 'Супер сафари',
            'tour-super-safari-time': 'Утро и вечер',
            'tour-super-safari-desc': 'Испытайте самое захватывающее пустынное приключение: экстремальные поездки, культурные впечатления и вкусный бедуинский ужин под звёздами.',
            'tour-super-safari-h1': 'Путешествие по пустыне на 4x4',
            'tour-super-safari-h2': 'Катание на верблюдах',
            'tour-super-safari-h3': 'Культурные представления',
            'tour-super-safari-h4': 'Бедуинский ужин',

            'tour-super-pirates-name': 'Супер Пайратс',
            'tour-super-pirates-time': '08:30 - 16:30',
            'tour-super-pirates-desc': 'Присоединяйтесь к приключению на Красном море с нашим туром Супер Пайратс: снорклинг, исследование островов и день, полный радости на воде.',
            'tour-super-pirates-h1': 'Места для снорклинга',
            'tour-super-pirates-h2': 'Исследование островов',
            'tour-super-pirates-h3': 'Развлечения на борту',
            'tour-super-pirates-h4': 'Обед включён',


            // Luxor Tours (4 tours)
            "tour-balloon-name": "Воздушный шар",
            "tour-balloon-time": "Ранние утренние полёты",
            "tour-balloon-desc": "30–45-минутный полёт над Долиной Царей, храмом Хатшепсут и видами Нила на рассвете",
            "tour-balloon-h1": "Рассветное время",
            "tour-balloon-h2": "30–45 минут полёта",
            "tour-balloon-h3": "Профессиональный пилот",
            "tour-balloon-h4": "Сертификат полёта",

            "tour-luxor-dendera-name": "Луксор + Дендера",
            "tour-luxor-dendera-time": "Целый день",
            "tour-luxor-dendera-desc": "Обширный тур, сочетающий главные достопримечательности Луксора с впечатляющим комплексом храма Дендера",
            "tour-luxor-dendera-h1": "Храм Карнака",
            "tour-luxor-dendera-h2": "Храм Хатшепсут",
            "tour-luxor-dendera-h3": "Храм Дендера",
            "tour-luxor-dendera-h4": "Профессиональный гид",

            "tour-luxor-highlights-name": "Основные достопримечательности Луксора",
            "tour-luxor-highlights-time": "Целый день",
            "tour-luxor-highlights-desc": "Полный тур, включающий Долину Цариц, храм Карнака, храм Хатшепсут и Колоссы Мемнона",
            "tour-luxor-highlights-h1": "Долина Цариц",
            "tour-luxor-highlights-h2": "Храм Карнака",
            "tour-luxor-highlights-h3": "Храм Хатшепсут",
            "tour-luxor-highlights-h4": "Колоссы Мемнона",

            "tour-nile-cruise-name": "Круиз по Нилу",
            "tour-nile-cruise-time": "4–5 дней",
            "tour-nile-cruise-desc": "Роскошный круиз по Нилу между Луксором и Асваном с посещением храмов и полным пансионом",
            "tour-nile-cruise-h1": "5-звёздочное размещение",
            "tour-nile-cruise-h2": "Полный пансион",
            "tour-nile-cruise-h3": "Посещение храмов",
            "tour-nile-cruise-h4": "Профессиональное сопровождение",


            // Cairo Tours (1 tour)
            "tour-pyramids-name": "Пирамиды и Музей",
            "tour-pyramids-time": "Целый день",
            "tour-pyramids-desc": "Полный опыт по Каиру, включающий пирамиды Гизы, Сфинкса и Египетский музей с профессиональным гидом",
            "tour-pyramids-h1": "Пирамиды Гизы",
            "tour-pyramids-h2": "Великий Сфинкс",
            "tour-pyramids-h3": "Египетский музей",
            "tour-pyramids-h4": "Профессиональный гид",

            // Resorts $ Apartments (2 tours)
            'tour-Princess-Resort-name': 'Принцесса Резорт',
            'tour-Princess-Resort-time': 'Гибкое время',
            'tour-Princess-Resort-desc': 'Откройте лучшие курорты и апартаменты в Хургаде с отличными удобствами и прекрасным расположением для идеального отдыха',
            'tour-Princess-Resort-h1': 'Отличное расположение',
            'tour-Princess-Resort-h2': 'Частный пляж',
            'tour-Princess-Resort-h3': 'Бассейны',
            'tour-Princess-Resort-h4': 'Для всей семьи',

            'tour-British-Resort-name': 'Британский Резорт',
            'tour-British-Resort-time': 'Гибкое время',
            'tour-British-Resort-desc': 'Наслаждайтесь комфортом и отличными удобствами в British Resort Hurghada, центральное расположение и современные бассейны',
            'tour-British-Resort-h1': 'Центральное расположение',
            'tour-British-Resort-h2': 'Современные бассейны',
            'tour-British-Resort-h3': 'Роскошные удобства',
            'tour-British-Resort-h4': 'Для всей семьи',


            "book-now": "Забронировать",

            // Contact Section
            "contact-title": "Контакты",
            "contact-subtitle": "Мы поможем вам спланировать путешествие мечты",
            "contact-whatsapp": "WhatsApp",
            "contact-email": "Эл. почта",
            "contact-phone": "Телефон",
            "form-name": "Ваше полное имя",
            "form-email": "Адрес электронной почты",
            "form-phone": "Номер телефона",
            "form-message": "Ваше сообщение",
            "form-submit": "Отправить сообщение",

            // Footer
            "footer-links": "Быстрые ссылки",
            "footer-social": "Следите за нами",
            "footer-copyright": "© 2025 Egypt Essence Tours. Все права защищены.",


            // WhatsApp Messages
            'whatsapp-general': 'Здравствуйте! Я хотел бы узнать о ваших турах',
            'whatsapp-contact-form': 'Здравствуйте! Меня зовут {name}, электронная почта: {email}, телефон: {phone}. Сообщение: {message}'

        },

        zh: {

            // Page Meta
            "page-title": "Egypt Essence Tours – 探索更多，感受更多",
            "page-description": "埃及最佳旅游—赫尔格达、卢克索和开罗。立即预订！",

            // Company Info - NEW TAGLINE
            "company-name": "Egypt Essence Tours",
            "company-tagline": "探索更多，感受更多",

            // Navigation
            "nav-home": "首页",
            "nav-hurghada": "赫尔格达之旅",
            "nav-luxor": "卢克索之旅",
            "nav-cairo": "开罗之旅",
            "nav-about": "关于我们",
            "nav-contact": "联系我们",
            "nav-resorts": "度假村",

            // Hero Section
            "hero-title": "与我们一起发现埃及之美",
            "hero-subtitle": "畅享赫尔格达、卢克索和开罗的精彩之旅",
            "hero-cta": "立即开始您的旅程",

            // About Section
            "about-title": "关于我们",
            "about-subtitle": "Egypt Essence Tours，探索埃及之美的最佳伙伴",
            "about-description": "我们专注于组织埃及最美城市的旅游。我们提供优质服务和精心规划的行程，确保您拥有最佳体验。",
            "feature-service": "卓越客户服务",
            "feature-safety": "安全有保障的旅游",
            "feature-guides": "专业导游",
            "feature-timing": "准时有序",
            "feature-support": "全天候支持",
            "feature-quality": "高品质体验",

            // Sections Titles
            "hurghada-title": "赫尔格达之旅",
            "hurghada-subtitle": "畅享红海的奇妙冒险",
            "luxor-title": "卢克索之旅",
            "luxor-subtitle": "探索埃及的法老宝藏",
            "cairo-title": "开罗之旅",
            "cairo-subtitle": "探索古埃及的奇观",
            "resorts-title": "度假村与公寓",
            "resorts-subtitle": "在赫尔格达找到理想住宿",

            // Hurghada Tours (18 tours)
            "tour-hula-hula-name": "胡拉胡拉岛之旅",
            "tour-hula-hula-time": "8:30 – 16:30",
            "tour-hula-hula-desc": "畅游埃及马尔代夫，清澈海水与金色沙滩",
            "tour-hula-hula-h1": "两处浮潜点",
            "tour-hula-hula-h2": "岛屿探索",
            "tour-hula-hula-h3": "含午餐",
            "tour-hula-hula-h4": "提供救生衣",

            "tour-royal-seascope-name": "皇家海景潜艇",
            "tour-royal-seascope-time": "每日多趟",
            "tour-royal-seascope-desc": "空调潜艇观海，配全景窗与潜水表演",
            "tour-royal-seascope-h1": "全景观景舱",
            "tour-royal-seascope-h2": "潜水表演",
            "tour-royal-seascope-h3": "浮潜停靠",
            "tour-royal-seascope-h4": "欢迎饮品",

            "tour-panorama-name": "海景多层潜艇",
            "tour-panorama-time": "每日出航",
            "tour-panorama-desc": "多层潜艇娱乐观海，舒适体验",
            "tour-panorama-h1": "多层甲板",
            "tour-panorama-h2": "娱乐项目",
            "tour-panorama-h3": "全景视野",
            "tour-panorama-h4": "全程空调",

            "tour-dolphin-house-name": "海豚之家游船",
            "tour-dolphin-house-time": "8:30 – 16:30",
            "tour-dolphin-house-desc": "全日海豚观赏，含浮潜装备与船上娱乐",
            "tour-dolphin-house-h1": "海豚观赏",
            "tour-dolphin-house-h2": "两处浮潜点",
            "tour-dolphin-house-h3": "全天行程",
            "tour-dolphin-house-h4": "装备齐全",

            'tour-Family-Safari-name': '家庭沙漠探险',
            'tour-Family-Safari-time': '上午和傍晚',
            'tour-Family-Safari-desc': '畅享全天的家庭沙漠探险！驾驶沙滩越野车和蜘蛛车穿越金色沙丘，体验刺激的行程，创造难忘回忆，一同放松身心。',
            'tour-Family-Safari-h1': '沙滩越野车之旅',
            'tour-Family-Safari-h2': '蜘蛛车体验',
            'tour-Family-Safari-h3': '沙漠探索',
            'tour-Family-Safari-h4': '安全装备',

            'tour-Safari-Moto-3H-name': '摩托沙漠探险3小时',
            'tour-Safari-Moto-3H-time': '上午和傍晚',
            'tour-Safari-Moto-3H-desc': '激动人心的沙漠探险，包括四驱摩托骑行和骆驼骑行，适合家庭和冒险爱好者。',
            'tour-Safari-Moto-3H-h1': '四驱摩托骑行',
            'tour-Safari-Moto-3H-h2': '骑骆驼',
            'tour-Safari-Moto-3H-h3': '沙漠探索',
            'tour-Safari-Moto-3H-h4': '安全装备',

            'tour-banana-boat-name': '香蕉船体验',
            'tour-banana-boat-time': '时间灵活',
            'tour-banana-boat-desc': '适合所有年龄段的趣味香蕉船体验，配备安全装备，乐享安全冒险。',
            'tour-banana-boat-h1': '刺激之旅',
            'tour-banana-boat-h2': '各年龄段适宜',
            'tour-banana-boat-h3': '安全装备',
            'tour-banana-boat-h4': '专业团队',

            'tour-parasailing-name': '拖伞冒险',
            'tour-parasailing-time': '时间灵活',
            'tour-parasailing-desc': '红海上空精彩的拖伞体验，享受壮观美景与安全装备保障。',
            'tour-parasailing-h1': '壮观景色',
            'tour-parasailing-h2': '安全装备',
            'tour-parasailing-h3': '专业教练',
            'tour-parasailing-h4': '各年龄段适宜',

            'tour-water-ski-name': '滑水体验',
            'tour-water-ski-time': '时间灵活',
            'tour-water-ski-desc': '红海滑水精彩冒险，配有专业教练和安全装备。',
            'tour-water-ski-h1': '刺激体验',
            'tour-water-ski-h2': '专业教练',
            'tour-water-ski-h3': '安全装备',
            'tour-water-ski-h4': '各水平适宜',

            'tour-horseback-name': '骑马之旅',
            'tour-horseback-time': '上午和傍晚',
            'tour-horseback-desc': '穿越沙漠和红海沿岸的独特骑马体验，配有专业向导。',
            'tour-horseback-h1': '沙漠小径',
            'tour-horseback-h2': '海岸骑行',
            'tour-horseback-h3': '专业向导',
            'tour-horseback-h4': '各水平适宜',

            'tour-speedboat-name': '私人快艇体验',
            'tour-speedboat-time': '时间灵活',
            'tour-speedboat-desc': '适合4-6位客人的私人快艇体验，跳岛与专属浮潜点。',
            'tour-speedboat-h1': '私人快艇（4-6人）',
            'tour-speedboat-h2': '包含两个岛屿',
            'tour-speedboat-h3': '定制路线',
            'tour-speedboat-h4': '音响系统',

            'tour-aquarium-name': '大型水族馆',
            'tour-aquarium-time': '10:00 - 19:00',
            'tour-aquarium-desc': '发现珍稀海洋生物展，罕见鱼类和色彩斑斓的珊瑚展示。',
            'tour-aquarium-h1': '海洋生物展',
            'tour-aquarium-h2': '珍稀鱼类',
            'tour-aquarium-h3': '互动表演',
            'tour-aquarium-h4': '适合家庭',

            'tour-paradise-name': '天堂岛',
            'tour-paradise-time': '09:00 - 17:00',
            'tour-paradise-desc': '私人小岛，拥有迷人海滩、豪华设施和宁静休憩体验。',
            'tour-paradise-h1': '私人海滩',
            'tour-paradise-h2': '水上运动',
            'tour-paradise-h3': '自助餐',
            'tour-paradise-h4': 'VIP服务',

            'tour-orange-bay-name': '橙湾岛',
            'tour-orange-bay-time': '08:00 - 16:00',
            'tour-orange-bay-desc': '美丽小岛，拥有碧绿海水、白沙和休闲设施。',
            'tour-orange-bay-h1': '私人海滩',
            'tour-orange-bay-h2': '浮潜',
            'tour-orange-bay-h3': '海鲜午餐',
            'tour-orange-bay-h4': '水上运动',

            'tour-mahmya-name': '马赫米亚岛',
            'tour-mahmya-time': '08:30 - 16:30',
            'tour-mahmya-desc': '自然保护区，原生态海滩，清澈海水和高档设施。',
            'tour-mahmya-h1': '自然保护区',
            'tour-mahmya-h2': '私人海滩',
            'tour-mahmya-h3': '高档餐厅',
            'tour-mahmya-h4': '休息区',

            'tour-diving-name': '潜水巡游',
            'tour-diving-time': '08:00 - 16:00',
            'tour-diving-desc': '与专业教练一同探索红海水下世界，适合所有水平的潜水者。',
            'tour-diving-h1': '专业教练',
            'tour-diving-h2': '全套装备提供',
            'tour-diving-h3': '多样潜点',
            'tour-diving-h4': '安全第一',

            'tour-super-safari-name': '超级沙漠探险',
            'tour-super-safari-time': '上午和傍晚',
            'tour-super-safari-desc': '体验终极沙漠冒险，融合刺激行程、文化体验和星空下美味的贝都因晚餐。',
            'tour-super-safari-h1': '四驱越野沙漠游',
            'tour-super-safari-h2': '骑骆驼',
            'tour-super-safari-h3': '文化表演',
            'tour-super-safari-h4': '贝都因晚餐',

            'tour-super-pirates-name': '超级海盗团',
            'tour-super-pirates-time': '08:30 - 16:30',
            'tour-super-pirates-desc': '加入红海超级海盗团之旅，享受浮潜、岛屿探索和充满欢乐的一天。',
            'tour-super-pirates-h1': '浮潜区域',
            'tour-super-pirates-h2': '岛屿探索',
            'tour-super-pirates-h3': '船上娱乐',
            'tour-super-pirates-h4': '含午餐',


            // Luxor Tours (4 tours)
            "tour-balloon-name": "热气球之旅",
            "tour-balloon-time": "日出航班",
            "tour-balloon-desc": "30-45分钟飞越帝王谷与哈特谢普苏特神庙",
            "tour-balloon-h1": "日出时间",
            "tour-balloon-h2": "30-45分钟",
            "tour-balloon-h3": "专业飞行员",
            "tour-balloon-h4": "飞行证书",

            "tour-luxor-dendera-name": "卢克索+丹德拉",
            "tour-luxor-dendera-time": "全天",
            "tour-luxor-dendera-desc": "卢克索主要景点与丹德拉神庙联游",
            "tour-luxor-dendera-h1": "卡纳克神庙",
            "tour-luxor-dendera-h2": "哈特谢普苏特神庙",
            "tour-luxor-dendera-h3": "丹德拉神庙",
            "tour-luxor-dendera-h4": "专业导游",

            "tour-luxor-highlights-name": "卢克索精华游",
            "tour-luxor-highlights-time": "全天",
            "tour-luxor-highlights-desc": "帝王谷、国王谷与孟农巨像全览",
            "tour-luxor-highlights-h1": "女王谷",
            "tour-luxor-highlights-h2": "卡纳克神庙",
            "tour-luxor-highlights-h3": "哈特谢普苏特神庙",
            "tour-luxor-highlights-h4": "孟农巨像",

            "tour-nile-cruise-name": "尼罗河游轮",
            "tour-nile-cruise-time": "4–5天",
            "tour-nile-cruise-desc": "尊享奢华游轮，从卢克索到阿斯旺，含参观神庙及全餐服务",
            "tour-nile-cruise-h1": "五星级住宿",
            "tour-nile-cruise-h2": "全票餐饮",
            "tour-nile-cruise-h3": "神庙参观",
            "tour-nile-cruise-h4": "专业导游",


            // Cairo Tours (1 tour)
            "tour-pyramids-name": "金字塔与博物馆",
            "tour-pyramids-time": "全天",
            "tour-pyramids-desc": "金字塔、狮身人面像与埃及博物馆导览",
            "tour-pyramids-h1": "吉萨金字塔",
            "tour-pyramids-h2": "狮身人面像",
            "tour-pyramids-h3": "埃及博物馆",
            "tour-pyramids-h4": "专业导游",

            // Resorts $ Apartments (2 tours)
            'tour-Princess-Resort-name': '公主度假村',
            'tour-Princess-Resort-time': '时间灵活',
            'tour-Princess-Resort-desc': '探索赫尔格达顶级度假村与公寓，享受优质设施与理想位置，打造完美假期',
            'tour-Princess-Resort-h1': '优越位置',
            'tour-Princess-Resort-h2': '私人海滩',
            'tour-Princess-Resort-h3': '泳池设施',
            'tour-Princess-Resort-h4': '适合家庭',

            'tour-British-Resort-name': '英国度假村',
            'tour-British-Resort-time': '时间灵活',
            'tour-British-Resort-desc': '享受British Resort Hurghada的舒适与优质设施，中心位置与现代泳池',
            'tour-British-Resort-h1': '中心位置',
            'tour-British-Resort-h2': '现代泳池',
            'tour-British-Resort-h3': '豪华设施',
            'tour-British-Resort-h4': '适合家庭',

            "book-now": "立即预订",

            // Contact Section
            "contact-title": "联系我们",
            "contact-subtitle": "我们助您规划梦想之旅",
            "contact-whatsapp": "WhatsApp",
            "contact-email": "邮箱",
            "contact-phone": "电话",
            "form-name": "您的全名",
            "form-email": "电子邮箱",
            "form-phone": "电话号码",
            "form-message": "您的留言",
            "form-submit": "发送留言",

            // Footer
            "footer-links": "快速链接",
            "footer-social": "关注我们",
            "footer-copyright": "© 2025 Egypt Essence Tours.版权所有",

            // WhatsApp Messages
            "whatsapp-general": "您好！我想咨询您的旅游行程",
            "whatsapp-contact-form": "您好！我叫{name}，电子邮件：{email}，电话：{phone}。留言：{message}"

        },

        cs: {

            // Page Meta
            "page-title": "Egypt Essence Tours – Objevte Více, Pociťte Více",
            "page-description": "Nejlepší výlety v Egyptě – Hurghada, Luxor a Káhira. Rezervujte nyní!",

            // Company Info - NEW TAGLINE
            "company-name": "Egypt Essence Tours",
            "company-tagline": "Objevte Více, Pociťte Více",

            // Navigation
            "nav-home": "Domů",
            "nav-hurghada": "Výlety Hurghady",
            "nav-luxor": "Výlety Luxoru",
            "nav-cairo": "Výlety Káhiry",
            "nav-about": "O Nás",
            "nav-contact": "Kontakt",
            "nav-resorts": "Letoviska",

            // Hero Section
            "hero-title": "Objevte Kouzlo Egypta s Námi",
            "hero-subtitle": "Užijte si nejkrásnější výlety v Hurgadě, Luxoru a Káhiře",
            "hero-cta": "Začněte Cestu Nyní",

            // About Section
            "about-title": "O Nás",
            "about-subtitle": "Egypt Essence Tours, váš ideální společník k objevování krás Egypta",
            "about-description": "Jsme specializovaná společnost organizující výlety po nejkrásnějších městech Egypta. Poskytujeme vynikající služby a pečlivě naplánované trasy pro ten nejlepší zážitek.",
            "feature-service": "Vynikající zákaznický servis",
            "feature-safety": "Bezpečné a zajištěné výlety",
            "feature-guides": "Profesionální průvodci",
            "feature-timing": "Přesné a organizované",
            "feature-support": "Podpora 24/7",
            "feature-quality": "Zážitek nejvyšší kvality",

            // Section Titles
            "hurghada-title": "Okruhy Hurghada",
            "hurghada-subtitle": "Užijte si úžasná dobrodružství v Rudém moři",
            "luxor-title": "Okruhy Luxor",
            "luxor-subtitle": "Objevte egyptské faraonské poklady",
            "cairo-title": "Okruhy Káhira",
            "cairo-subtitle": "Objevte divy starověkého Egypta",
            "resorts-title": "Letoviska a Apartmány",
            "resorts-subtitle": "Najděte ideální ubytování v Hurgadě",

            // Hurghada Tours (18 tours)
            "tour-hula-hula-name": "Výlet na ostrov Hula Hula",
            "tour-hula-hula-time": "8:30–16:30",
            "tour-hula-hula-desc": "Zažijte egyptské Maledivy s křišťálově čistou vodou, zlatými plážemi a profesionálními fotospoty",
            "tour-hula-hula-h1": "Dvě zastávky na šnorchlování",
            "tour-hula-hula-h2": "Průzkum ostrova",
            "tour-hula-hula-h3": "Oběd v ceně",
            "tour-hula-hula-h4": "Záchranné vesty k dispozici",

            "tour-royal-seascope-name": "Ponorka Royal Sea Scope",
            "tour-royal-seascope-time": "Několik výletů denně",
            "tour-royal-seascope-desc": "Objevte podmořský svět v klimatizovaném pohodlí s panoramatickými okny a potápěčskými show",
            "tour-royal-seascope-h1": "Panoramatická vyhlídková místnost",
            "tour-royal-seascope-h2": "Potápěčské show",
            "tour-royal-seascope-h3": "Zastávka na šnorchlování",
            "tour-royal-seascope-h4": "Uvítací nápoje",

            "tour-panorama-name": "Ponorka Panorama",
            "tour-panorama-time": "Denní výlety",
            "tour-panorama-desc": "Vícepodlažní ponorka s zábavním programem a komfortním pozorováním mořského světa",
            "tour-panorama-h1": "Vícepodlažní loď",
            "tour-panorama-h2": "Zábavní programy",
            "tour-panorama-h3": "Panoramatické pozorování",
            "tour-panorama-h4": "Plně klimatizované",

            "tour-dolphin-house-name": "Plavba Dolphin House",
            "tour-dolphin-house-time": "8:30–16:30",
            "tour-dolphin-house-desc": "Celodenní výlet s pozorováním delfínů, vybavením na šnorchlování a zábavou na palubě",
            "tour-dolphin-house-h1": "Pozorování delfínů",
            "tour-dolphin-house-h2": "Dvě zastávky na šnorchlování",
            "tour-dolphin-house-h3": "Celodenní program",
            "tour-dolphin-house-h4": "Vybavení v ceně",

            'tour-Family-Safari-name': 'Rodinné pouštní safari',
            'tour-Family-Safari-time': 'Ráno a večer',
            'tour-Family-Safari-desc': 'Užijte si celodenní rodinné pouštní safari! Projeďte se čtyřkolkami a buginami po zlatých dunách, zažijte vzrušující dobrodružství a vytvořte nezapomenutelné vzpomínky při společném odpočinku.',
            'tour-Family-Safari-h1': 'Jízda na čtyřkolce',
            'tour-Family-Safari-h2': 'Zážitek s buginou',
            'tour-Family-Safari-h3': 'Průzkum pouště',
            'tour-Family-Safari-h4': 'Bezpečnostní vybavení',

            'tour-Safari-Moto-3H-name': 'Motocyklové pouštní safari 3 hodiny',
            'tour-Safari-Moto-3H-time': 'Ráno a večer',
            'tour-Safari-Moto-3H-desc': 'Vzrušující pouštní dobrodružství zahrnující jízdu na čtyřkolce a jízdu na velbloudech, ideální pro rodiny a milovníky dobrodružství.',
            'tour-Safari-Moto-3H-h1': 'Jízda na čtyřkolce',
            'tour-Safari-Moto-3H-h2': 'Jízda na velbloudech',
            'tour-Safari-Moto-3H-h3': 'Průzkum pouště',
            'tour-Safari-Moto-3H-h4': 'Bezpečnostní vybavení',

            'tour-banana-boat-name': 'Zážitek s banánovým člunem',
            'tour-banana-boat-time': 'Čas dle výběru',
            'tour-banana-boat-desc': 'Zábavný zážitek s banánovým člunem pro všechny věkové kategorie, vybavený bezpečnostním vybavením pro bezpečné dobrodružství.',
            'tour-banana-boat-h1': 'Vzrušující jízda',
            'tour-banana-boat-h2': 'Vhodné pro všechny věkové kategorie',
            'tour-banana-boat-h3': 'Bezpečnostní vybavení',
            'tour-banana-boat-h4': 'Profesionální tým',

            'tour-parasailing-name': 'Paraglidingové dobrodružství',
            'tour-parasailing-time': 'Čas dle výběru',
            'tour-parasailing-desc': 'Vzrušující paragliding nad Rudým mořem s úchvatnými výhledy a bezpečnostním vybavením.',
            'tour-parasailing-h1': 'Úchvatné výhledy',
            'tour-parasailing-h2': 'Bezpečnostní vybavení',
            'tour-parasailing-h3': 'Profesionální instruktoři',
            'tour-parasailing-h4': 'Vhodné pro všechny věkové kategorie',

            'tour-water-ski-name': 'Zážitek s vodním lyžováním',
            'tour-water-ski-time': 'Čas dle výběru',
            'tour-water-ski-desc': 'Vzrušující zážitek s vodním lyžováním na Rudém moři s profesionálními instruktory a bezpečnostním vybavením.',
            'tour-water-ski-h1': 'Vzrušující zážitek',
            'tour-water-ski-h2': 'Profesionální instruktoři',
            'tour-water-ski-h3': 'Bezpečnostní vybavení',
            'tour-water-ski-h4': 'Vhodné pro všechny úrovně',

            'tour-horseback-name': 'Jízda na koni',
            'tour-horseback-time': 'Ráno a večer',
            'tour-horseback-desc': 'Unikátní zážitek z jízdy na koni přes poušť a podél pobřeží Rudého moře s profesionálními průvodci.',
            'tour-horseback-h1': 'Pouštní stezky',
            'tour-horseback-h2': 'Jízda podél pobřeží',
            'tour-horseback-h3': 'Profesionální průvodci',
            'tour-horseback-h4': 'Vhodné pro všechny úrovně',

            'tour-speedboat-name': 'Zážitek s privátní rychlou lodí',
            'tour-speedboat-time': 'Čas dle výběru',
            'tour-speedboat-desc': 'Privátní zážitek s rychlou lodí pro 4-6 osob, zahrnující návštěvy ostrovů a exkluzivní místa na šnorchlování.',
            'tour-speedboat-h1': 'Privátní rychlá loď (4-6 osob)',
            'tour-speedboat-h2': 'Zahrnuje dva ostrovy',
            'tour-speedboat-h3': 'Přizpůsobená trasa',
            'tour-speedboat-h4': 'Zvukový systém',

            'tour-aquarium-name': 'Velké akvárium',
            'tour-aquarium-time': '10:00 - 19:00',
            'tour-aquarium-desc': 'Objevte výstavu vzácných mořských tvorů, včetně vzácných ryb a barevných korálů.',
            'tour-aquarium-h1': 'Výstava mořských tvorů',
            'tour-aquarium-h2': 'Vzácné ryby',
            'tour-aquarium-h3': 'Interaktivní představení',
            'tour-aquarium-h4': 'Vhodné pro rodiny',

            'tour-paradise-name': 'Ostrov Paradise',
            'tour-paradise-time': '09:00 - 17:00',
            'tour-paradise-desc': "Soukromý ostrov s okouzlujícími plážemi, luxusními zařízeními a klidným prostředím pro relaxaci.",
            'tour-paradise-h1': 'Soukromá pláž',
            'tour-paradise-h2': 'Vodní sporty',
            'tour-paradise-h3': 'Bufetové obědy',
            'tour-paradise-h4': 'VIP služby',

            'tour-orange-bay-name': 'Ostrov Orange Bay',
            'tour-orange-bay-time': '08:00 - 16:00',
            'tour-orange-bay-desc': 'Krásný ostrov s tyrkysovou vodou, bílými plážemi a rekreačními zařízeními.',
            'tour-orange-bay-h1': 'Soukromá pláž',
            'tour-orange-bay-h2': 'Šnorchlování',
            'tour-orange-bay-h3': 'Oběd z mořských plodů',
            'tour-orange-bay-h4': 'Vodní sporty',

            'tour-mahmya-name': 'Ostrov Mahmya',
            'tour-mahmya-time': '08:30 - 16:30',
            'tour-mahmya-desc': 'Přírodní rezervace s nedotčenými plážemi, křišťálově čistou vodou a špičkovými zařízeními.',
            'tour-mahmya-h1': 'Přírodní rezervace',
            'tour-mahmya-h2': 'Soukromá pláž',
            'tour-mahmya-h3': 'Špičková restaurace',
            'tour-mahmya-h4': 'Odpočinkové zóny',

            'tour-diving-name': 'Potápěčský výlet',
            'tour-diving-time': '08:00 - 16:00',
            'tour-diving-desc': 'Prozkoumejte podmořský svět Rudého moře s profesionálními instruktory, vhodné pro všechny úrovně potápěčů.',
            'tour-diving-h1': 'Profesionální instruktoři',
            'tour-diving-h2': 'Kompletní vybavení v ceně',
            'tour-diving-h3': 'Různá potápěčská místa',
            'tour-diving-h4': 'Bezpečnost na prvním místě',

            'tour-super-safari-name': 'Super pouštní safari',
            'tour-super-safari-time': 'Ráno a večer',
            'tour-super-safari-desc': 'Zažijte ultimátní pouštní dobrodružství kombinující vzrušující aktivity, kulturní zážitky a lahodnou beduínskou večeři pod hvězdami.',
            'tour-super-safari-h1': 'Čtyřkolkové pouštní jízdy',
            'tour-super-safari-h2': 'Jízda na velbloudech',
            'tour-super-safari-h3': 'Kulturní představení',
            'tour-super-safari-h4': 'Beduínská večeře',

            'tour-super-pirates-name': 'Super pirátská plavba',
            'tour-super-pirates-time': '08:30 - 16:30',
            'tour-super-pirates-desc': 'Přidejte se k super pirátské plavbě na Rudém moři s šnorchlováním, průzkumem ostrovů a zábavou na palubě.',
            'tour-super-pirates-h1': 'Oblast pro šnorchlování',
            'tour-super-pirates-h2': 'Průzkum ostrovů',
            'tour-super-pirates-h3': 'Zábava na palubě',
            'tour-super-pirates-h4': 'Oběd v ceně',


            // Luxor Tours (4 tours)
            "tour-balloon-name": "Let balónem",
            "tour-balloon-time": "Lety za úsvitu",
            "tour-balloon-desc": "Let trvající 30–45 minut nad Údolím králů, chrámem Hatšepsut a Nilem při svítání",
            "tour-balloon-h1": "Čas svítání",
            "tour-balloon-h2": "Let 30–45 minut",
            "tour-balloon-h3": "Profesionální pilot",
            "tour-balloon-h4": "Certifikát o letu",

            "tour-luxor-dendera-name": "Luxor + Dendera",
            "tour-luxor-dendera-time": "Celodenní výlet",
            "tour-luxor-dendera-desc": "Kombinovaný výlet po hlavních památkách Luxoru a nádherném chrámovém komplexu Dendera",
            "tour-luxor-dendera-h1": "Chrám Karnak",
            "tour-luxor-dendera-h2": "Chrám Hatšepsut",
            "tour-luxor-dendera-h3": "Chrám Dendera",
            "tour-luxor-dendera-h4": "Profesionální průvodce",

            "tour-luxor-highlights-name": "Hlavní památky Luxoru",
            "tour-luxor-highlights-time": "Celodenní výlet",
            "tour-luxor-highlights-desc": "Výlet zahrnující Údolí královen, chrám Karnak, chrám Hatšepsut a Memnónovy kolosy",
            "tour-luxor-highlights-h1": "Údolí královen",
            "tour-luxor-highlights-h2": "Chrám Karnak",
            "tour-luxor-highlights-h3": "Chrám Hatšepsut",
            "tour-luxor-highlights-h4": "Memnónovy kolosy",

            "tour-nile-cruise-name": "Plavba po Nilu",
            "tour-nile-cruise-time": "4–5 dní",
            "tour-nile-cruise-desc": "Luxusní plavba po Nilu mezi Luxorem a Asuánem s návštěvami chrámů a plnou penzí",
            "tour-nile-cruise-h1": "Ubytování 5 hvězd",
            "tour-nile-cruise-h2": "Plná penze",
            "tour-nile-cruise-h3": "Návštěvy chrámů",
            "tour-nile-cruise-h4": "Profesionální průvodce",

            // Cairo Tours (1 tour)
            "tour-pyramids-name": "Pyramidy a muzeum",
            "tour-pyramids-time": "Celodenní výlet",
            "tour-pyramids-desc": "Kompletní zážitek z Káhiry – pyramidy v Gíze, Sfinga a Egyptské muzeum s odborným průvodcem",
            "tour-pyramids-h1": "Pyramidy v Gíze",
            "tour-pyramids-h2": "Velká Sfinga",
            "tour-pyramids-h3": "Egyptské muzeum",
            "tour-pyramids-h4": "Profesionální průvodce",

            // Resorts $ Apartments (2 tours)  
            'tour-Princess-Resort-name': 'Princess Resort',
            'tour-Princess-Resort-time': 'Čas dle výběru',
            'tour-Princess-Resort-desc': 'Objevte špičkové letovisko a apartmány v Hurgadě s vynikajícími zařízeními a ideální polohou pro dokonalou dovolenou',
            'tour-Princess-Resort-h1': 'Vynikající poloha',
            'tour-Princess-Resort-h2': 'Soukromá pláž',
            'tour-Princess-Resort-h3': 'Bazénové zařízení',
            'tour-Princess-Resort-h4': 'Vhodné pro rodiny',

            'tour-British-Resort-name': 'British Resort',
            'tour-British-Resort-time': 'Čas dle výběru',
            'tour-British-Resort-desc': 'Užijte si pohodlí a špičková zařízení British Resort Hurghada s centrální polohou a moderním bazénem',
            'tour-British-Resort-h1': 'Centrální poloha',
            'tour-British-Resort-h2': 'Moderní bazén',
            'tour-British-Resort-h3': 'Luxusní zařízení',
            'tour-British-Resort-h4': 'Vhodné pro rodiny',

            "book-now": "Rezervovat nyní",

            // Contact Section
            "contact-title": "Kontaktujte nás",
            "contact-subtitle": "Pomůžeme vám naplánovat vysněnou cestu",
            "contact-whatsapp": "WhatsApp",
            "contact-email": "E-mail",
            "contact-phone": "Telefon",
            "form-name": "Vaše celé jméno",
            "form-email": "E-mailová adresa",
            "form-phone": "Telefonní číslo",
            "form-message": "Vaše zpráva nebo dotaz",
            "form-submit": "Odeslat zprávu",

            // Footer
            "footer-links": "Rychlé odkazy",
            "footer-social": "Sledujte nás",
            "footer-copyright": "© 2025 Egypt Essence Tours. Všechna práva vyhrazena.",

            // WhatsApp Messages
            "whatsapp-general": "Dobrý den! Rád bych se informoval o vašich výletech",
            "whatsapp-contact-form": "Dobrý den! Jmenuji se {name}, e-mail: {email}, telefon: {phone}. Zpráva: {message}"

        },

        fr: {

            // Page Meta
            "page-title": "Egypt Essence Tours – Explorez Plus, Ressentez Plus",
            "page-description": "Meilleures excursions en Égypte – Hurghada, Louxor et Le Caire. Réservez maintenant !",

            // Company Info - NEW TAGLINE
            "company-name": "Egypt Essence Tours",
            "company-tagline": "Explorez Plus, Ressentez Plus",

            // Navigation
            "nav-home": "Accueil",
            "nav-hurghada": "Circuits Hurghada",
            "nav-luxor": "Circuits Louxor",
            "nav-cairo": "Circuits Le Caire",
            "nav-about": "À Propos",
            "nav-contact": "Contact",
            "nav-resorts": "Stations",

            // Hero Section
            "hero-title": "Découvrez la Magie de l'Égypte avec Nous",
            "hero-subtitle": "Profitez des plus belles excursions à Hurghada, Louxor et Le Caire",
            "hero-cta": "Commencez Votre Aventure",

            // About Section
            "about-title": "À Propos",
            "about-subtitle": "Egypt Essence Tours, votre compagnon idéal pour explorer la beauté de l'Égypte",
            "about-description": "Nous sommes une entreprise spécialisée dans l'organisation d'excursions dans les plus belles villes d'Égypte. Nous offrons un service d'excellence et des itinéraires soigneusement planifiés pour une expérience inoubliable.",
            "feature-service": "Service Client Exemplaire",
            "feature-safety": "Excursions Sûres et Sécurisées",
            "feature-guides": "Guides Professionnels",
            "feature-timing": "Ponctuel et Organisé",
            "feature-support": "Support 24/7",
            "feature-quality": "Expérience de la Plus Haute Qualité",


            // Section Titles
            "hurghada-title": "Excursions à Hurghada",
            "hurghada-subtitle": "Profitez d’aventures incroyables en mer Rouge",
            "luxor-title": "Excursions à Louxor",
            "luxor-subtitle": "Découvrez les trésors pharaoniques de l’Égypte",
            "cairo-title": "Excursions au Caire",
            "cairo-subtitle": "Découvrez les merveilles de l’Égypte ancienne",
            "resorts-title": "Stations et Appartements",
            "resorts-subtitle": "Trouvez l’hébergement idéal à Hurghada",

            // Hurghada Tours (18 tours)
            "tour-hula-hula-name": "Excursion à l’île Hula Hula",
            "tour-hula-hula-time": "8h30 – 16h30",
            "tour-hula-hula-desc": "Découvrez les Maldives égyptiennes avec des eaux cristallines, des plages dorées et des spots photo professionnels",
            "tour-hula-hula-h1": "Deux arrêts de plongée avec tuba",
            "tour-hula-hula-h2": "Exploration de l’île",
            "tour-hula-hula-h3": "Déjeuner complet inclus",
            "tour-hula-hula-h4": "Gilets de sauvetage disponibles",

            "tour-royal-seascope-name": "Sous-marin Royal Sea Scope",
            "tour-royal-seascope-time": "Plusieurs excursions par jour",
            "tour-royal-seascope-desc": "Explorez le monde sous-marin dans un confort climatisé avec des fenêtres panoramiques et des spectacles de plongeurs",
            "tour-royal-seascope-h1": "Salle d’observation panoramique",
            "tour-royal-seascope-h2": "Spectacles de plongeurs",
            "tour-royal-seascope-h3": "Arrêt pour le snorkeling",
            "tour-royal-seascope-h4": "Boisson de bienvenue",

            "tour-panorama-name": "Sous-marin Panorama",
            "tour-panorama-time": "Excursions quotidiennes",
            "tour-panorama-desc": "Sous-marin à plusieurs ponts avec divertissement et vue sur le monde marin en tout confort",
            "tour-panorama-h1": "Bateau à plusieurs ponts",
            "tour-panorama-h2": "Programmes de divertissement",
            "tour-panorama-h3": "Observation panoramique",
            "tour-panorama-h4": "Entièrement climatisé",

            "tour-dolphin-house-name": "Croisière Maison des Dauphins",
            "tour-dolphin-house-time": "8h30 – 16h30",
            "tour-dolphin-house-desc": "Excursion d’une journée complète pour observer les dauphins avec équipement de plongée et divertissement à bord",
            "tour-dolphin-house-h1": "Observation des dauphins",
            "tour-dolphin-house-h2": "Deux arrêts de snorkeling",
            "tour-dolphin-house-h3": "Programme d’une journée complète",
            "tour-dolphin-house-h4": "Équipement inclus",

            'tour-Family-Safari-name': 'Safari familial dans le désert',
            'tour-Family-Safari-time': 'Matin et soir',
            'tour-Family-Safari-desc': 'Profitez d’un safari familial dans le désert toute la journée ! Faites du quad et du buggy à travers les dunes dorées, vivez une aventure passionnante et créez des souvenirs inoubliables en vous détendant ensemble.',
            'tour-Family-Safari-h1': 'Balade en quad',
            'tour-Family-Safari-h2': 'Expérience en buggy',
            'tour-Family-Safari-h3': 'Exploration du désert',
            'tour-Family-Safari-h4': 'Équipement de sécurité',

            'tour-Safari-Moto-3H-name': 'Safari moto dans le désert 3 heures',
            'tour-Safari-Moto-3H-time': 'Matin et soir',
            'tour-Safari-Moto-3H-desc': "Aventure passionnante dans le désert incluant une  balade en quad et une balade à dos de chameau, idéale pour les familles et les amateurs d'aventure.",
            'tour-Safari-Moto-3H-h1': 'Balade en quad',
            'tour-Safari-Moto-3H-h2': 'Balade à dos de chameau',
            'tour-Safari-Moto-3H-h3': 'Exploration du désert',
            'tour-Safari-Moto-3H-h4': 'Équipement de sécurité',

            'tour-banana-boat-name': "Expérience en bateau banane",
            'tour-banana-boat-time': 'Heure au choix',
            'tour-banana-boat-desc': "Expérience amusante en bateau banane pour tous les âges, équipée d'équipements de sécurité pour une aventure en toute sécurité.",
            'tour-banana-boat-h1': 'Balade excitante',
            'tour-banana-boat-h2': 'Convient à tous les âges',
            'tour-banana-boat-h3': 'Équipement de sécurité',
            'tour-banana-boat-h4': 'Équipe professionnelle',

            'tour-parasailing-name': "Aventure en parachute ascensionnel",
            'tour-parasailing-time': 'Heure au choix',
            'tour-parasailing-desc': "Excitant parachute ascensionnel au-dessus de la mer Rouge avec des vues à couper le souffle et un équipement de sécurité.",
            'tour-parasailing-h1': 'Vues à couper le souffle',
            'tour-parasailing-h2': 'Équipement de sécurité',
            'tour-parasailing-h3': 'Instructeurs professionnels',
            'tour-parasailing-h4': 'Convient à tous les âges',

            'tour-water-ski-name': "Expérience de ski nautique",
            'tour-water-ski-time': 'Heure au choix',
            'tour-water-ski-desc': "Excitant ski nautique sur la mer Rouge avec des instructeurs professionnels et un équipement de sécurité.",
            'tour-water-ski-h1': 'Expérience excitante',
            'tour-water-ski-h2': 'Instructeurs professionnels',
            'tour-water-ski-h3': 'Équipement de sécurité',
            'tour-water-ski-h4': 'Convient à tous les niveaux',

            'tour-horseback-name': "Balade à cheval",
            'tour-horseback-time': 'Matin et soir',
            'tour-horseback-desc': "Expérience unique de balade à cheval à travers le désert et le long de la côte de la mer Rouge avec des guides professionnels.",
            'tour-horseback-h1': 'Sentiers désertiques',
            'tour-horseback-h2': 'Balade le long de la côte',
            'tour-horseback-h3': 'Guides professionnels',
            'tour-horseback-h4': 'Convient à tous les niveaux',

            'tour-speedboat-name': "Expérience en bateau rapide privé",
            'tour-speedboat-time': 'Heure au choix',
            'tour-speedboat-desc': "Expérience privée en bateau rapide pour 4-6 personnes, incluant des visites d'îles et des spots de snorkeling exclusifs.",
            'tour-speedboat-h1': 'Bateau rapide privé (4-6 personnes)',
            'tour-speedboat-h2': 'Inclut deux îles',
            'tour-speedboat-h3': 'Itinéraire personnalisé',
            'tour-speedboat-h4': 'Système audio',

            'tour-aquarium-name': "Grand Aquarium",
            'tour-aquarium-time': '10h00 - 19h00',
            'tour-aquarium-desc': "Découvrez une exposition de créatures marines rares, y compris des poissons rares et des coraux colorés.",
            'tour-aquarium-h1': "Exposition de créatures marines",
            'tour-aquarium-h2': "Poissons rares",
            'tour-aquarium-h3': "Spectacles interactifs",
            'tour-aquarium-h4': "Convient aux familles",

            'tour-paradise-name': "Île Paradise",
            'tour-paradise-time': '09h00 - 17h00',
            'tour-paradise-desc': "Île privée avec des plages charmantes, des installations luxueuses et un environnement paisible pour se détendre.",
            'tour-paradise-h1': 'Plage privée',
            'tour-paradise-h2': 'Sports nautiques',
            'tour-paradise-h3': 'Déjeuners buffet',
            'tour-paradise-h4': 'Services VIP',

            'tour-orange-bay-name': "Île Orange Bay",
            'tour-orange-bay-time': '08h00 - 16h00',
            'tour-orange-bay-desc': "Belle île avec des eaux turquoise, des plages blanches et des installations de loisirs.",
            'tour-orange-bay-h1': 'Plage privée',
            'tour-orange-bay-h2': 'Snorkeling',
            'tour-orange-bay-h3': 'Déjeuner de fruits de mer',
            'tour-orange-bay-h4': 'Sports nautiques',

            'tour-mahmya-name': "Île Mahmya",
            'tour-mahmya-time': '08h30 - 16h30',
            'tour-mahmya-desc': "Réserve naturelle avec des plages immaculées, des eaux cristallines et des installations de premier ordre.",
            'tour-mahmya-h1': 'Réserve naturelle',
            'tour-mahmya-h2': 'Plage privée',
            'tour-mahmya-h3': 'Restaurant haut de gamme',
            'tour-mahmya-h4': 'Zones de détente',

            'tour-diving-name': "Excursion de plongée",
            'tour-diving-time': '08h00 - 16h00',
            'tour-diving-desc': "Explorez le monde sous-marin de la mer Rouge avec des instructeurs professionnels, adapté à tous les niveaux de plongeurs.",
            'tour-diving-h1': 'Instructeurs professionnels',
            'tour-diving-h2': 'Équipement complet inclus',
            'tour-diving-h3': 'Divers sites de plongée',
            'tour-diving-h4': 'Sécurité avant tout',

            'tour-super-safari-name': "Super Safari dans le désert",
            'tour-super-safari-time': 'Matin et soir',
            'tour-super-safari-desc': "Vivez l'ultime aventure dans le désert combinant des activités passionnantes, des expériences culturelles et un délicieux dîner bédouin sous les étoiles.",
            'tour-super-safari-h1': 'Balades en quad dans le désert',
            'tour-super-safari-h2': 'Balade à dos de chameau',
            'tour-super-safari-h3': 'Spectacles culturels',
            'tour-super-safari-h4': 'Dîner bédouin',

            'tour-super-pirates-name': "Croisière Super Pirates",
            'tour-super-pirates-time': '08h30 - 16h30',
            'tour-super-pirates-desc': "Rejoignez la croisière super pirates sur la mer Rouge avec snorkeling, exploration d'îles et divertissement à bord.",
            'tour-super-pirates-h1': "Zone de snorkeling",
            'tour-super-pirates-h2': "Exploration d'îles",
            'tour-super-pirates-h3': "Divertissement à bord",
            'tour-super-pirates-h4': "Déjeuner inclus",

            // Luxor Tours (4 tours)
            "tour-balloon-name": "Montgolfière",
            "tour-balloon-time": "Vols au lever du soleil",
            "tour-balloon-desc": "Vol de 30 à 45 minutes au-dessus de la Vallée des Rois, du temple d’Hatchepsout et des vues sur le Nil à l’aube",
            "tour-balloon-h1": "Lever du soleil",
            "tour-balloon-h2": "Vol de 30–45 minutes",
            "tour-balloon-h3": "Pilote professionnel",
            "tour-balloon-h4": "Certificat de vol",

            "tour-luxor-dendera-name": "Louxor + Dendéra",
            "tour-luxor-dendera-time": "Journée complète",
            "tour-luxor-dendera-desc": "Circuit complet combinant les principaux sites de Louxor avec le magnifique complexe du temple de Dendéra",
            "tour-luxor-dendera-h1": "Temple de Karnak",
            "tour-luxor-dendera-h2": "Temple d’Hatchepsout",
            "tour-luxor-dendera-h3": "Temple de Dendéra",
            "tour-luxor-dendera-h4": "Guide professionnel",

            "tour-luxor-highlights-name": "Les incontournables de Louxor",
            "tour-luxor-highlights-time": "Journée complète",
            "tour-luxor-highlights-desc": "Circuit complet incluant la Vallée des Reines, le temple de Karnak, le temple d’Hatchepsout et les Colosses de Memnon",
            "tour-luxor-highlights-h1": "Vallée des Reines",
            "tour-luxor-highlights-h2": "Temple de Karnak",
            "tour-luxor-highlights-h3": "Temple d’Hatchepsout",
            "tour-luxor-highlights-h4": "Colosses de Memnon",

            "tour-nile-cruise-name": "Croisière sur le Nil",
            "tour-nile-cruise-time": "4–5 jours",
            "tour-nile-cruise-desc": "Croisière de luxe sur le Nil entre Louxor et Assouan avec visites de temples et pension complète",
            "tour-nile-cruise-h1": "Hébergement 5 étoiles",
            "tour-nile-cruise-h2": "Repas en pension complète",
            "tour-nile-cruise-h3": "Visites de temples",
            "tour-nile-cruise-h4": "Encadrement professionnel",

            // Cairo Tours (1 tour)
            "tour-pyramids-name": "Pyramides et musée",
            "tour-pyramids-time": "Journée complète",
            "tour-pyramids-desc": "Expérience complète du Caire incluant les pyramides de Gizeh, le Sphinx et le musée égyptien avec guide expert",
            "tour-pyramids-h1": "Pyramides de Gizeh",
            "tour-pyramids-h2": "Grand Sphinx",
            "tour-pyramids-h3": "Musée égyptien",
            "tour-pyramids-h4": "Guide professionnel",

            "book-now": "Réserver maintenant",

            // Contact Section
            "contact-title": "Contactez-nous",
            "contact-subtitle": "Nous sommes là pour vous aider à planifier le voyage de vos rêves",
            "contact-whatsapp": "WhatsApp",
            "contact-email": "E-mail",
            "contact-phone": "Téléphone",
            "form-name": "Votre nom complet",
            "form-email": "Adresse e-mail",
            "form-phone": "Numéro de téléphone",
            "form-message": "Votre message ou demande",
            "form-submit": "Envoyer le message",

            // Footer
            "footer-links": "Liens rapides",
            "footer-social": "Suivez-nous",
            "footer-copyright": "© 2025 Egypt Essence Tours. Tous droits réservés.",

            // WhatsApp Messages
            "whatsapp-general": "Bonjour ! J’aimerais me renseigner sur vos excursions",
            "whatsapp-contact-form": "Bonjour ! Je m’appelle {name}, e-mail : {email}, téléphone : {phone}. Message : {message}"

        },

        pl: {
            // Page Meta
            'page-title': 'Egypt Essence Tours - Odkryj więcej, poczuj więcej',
            'page-description': 'Najlepsze wycieczki w Egipcie – Hurghada, Luxor i Kair. Zarezerwuj swoją podróż już teraz!',

            // Company Info
            'company-name': 'Egypt Essence Tours',
            'company-tagline': 'Odkryj więcej, poczuj więcej',

            // Navigation
            'nav-home': 'Strona główna',
            'nav-hurghada': 'Wycieczki Hurghada',
            'nav-luxor': 'Wycieczki Luxor',
            'nav-cairo': 'Wycieczki Kair',
            'nav-about': 'O nas',
            'nav-contact': 'Kontakt',
            'nav-resorts': 'Ośrodki',

            // Hero Section
            'hero-title': 'Odkryj magię Egiptu z nami',
            'hero-subtitle': 'Ciesz się najlepszymi wycieczkami w Hurghadzie, Luxorze i Kairze',
            'hero-cta': 'Rozpocznij swoją podróż teraz',

            // About Section
            'about-title': 'O nas',
            'about-subtitle': 'Egypt Essence Tours, Twój idealny towarzysz do odkrywania piękna Egiptu',
            'about-description': 'Jesteśmy firmą specjalizującą się w organizowaniu wycieczek po najpiękniejszych miastach Egiptu. Oferujemy doskonałą obsługę i starannie zorganizowane trasy, aby zapewnić najlepsze doświadczenia turystyczne.',
            'feature-service': 'Doskonała obsługa klienta',
            'feature-safety': 'Bezpieczne i zabezpieczone wycieczki',
            'feature-guides': 'Profesjonalni przewodnicy',
            'feature-timing': 'Punktualnie i zorganizowanie',
            'feature-support': 'Wsparcie 24/7',
            'feature-quality': 'Najwyższa jakość doświadczeń',

            // Section Titles
            'hurghada-title': 'Wycieczki Hurghada',
            'hurghada-subtitle': 'Ciesz się niesamowitymi przygodami na Morzu Czerwonym',
            'luxor-title': 'Wycieczki Luxor',
            'luxor-subtitle': 'Odkryj faraońskie skarby Egiptu',
            'cairo-title': 'Wycieczki Kair',
            'cairo-subtitle': 'Odkryj cuda starożytnego Egiptu',
            'resorts-title': 'Ośrodki i apartamenty',
            'resorts-subtitle': 'Znajdź idealne zakwaterowanie w Hurghadzie',

            // Hurghada Tours (18 tours)
            'tour-hula-hula-name': 'Wycieczka na wyspę Hula Hula',
            'tour-hula-hula-time': '8:30 – 16:30',
            'tour-hula-hula-desc': 'Egipskie Malediwy z krystalicznie czystą wodą i złotymi plażami, idealne miejsca do zdjęć',
            'tour-hula-hula-h1': 'Dwa przystanki do snorkelingu',
            'tour-hula-hula-h2': 'Odkrywanie wyspy',
            'tour-hula-hula-h3': 'Pełny obiad w cenie',
            'tour-hula-hula-h4': 'Kamizelki ratunkowe dostępne',

            'tour-royal-seascope-name': 'Podwodna łódź Royal Sea Scope',
            'tour-royal-seascope-time': 'Wiele rejsów dziennie',
            'tour-royal-seascope-desc': 'Poznaj podwodny świat w klimatyzowanej przestrzeni przez panoramiczne okna z pokazami nurków',
            'tour-royal-seascope-h1': 'Panoramiczna sala widokowa',
            'tour-royal-seascope-h2': 'Pokazy nurków',
            'tour-royal-seascope-h3': 'Przystanek do snorkelingu',
            'tour-royal-seascope-h4': 'Powitalne orzeźwienia',

            'tour-panorama-name': 'Panorama Submarine',
            'tour-panorama-time': 'Codzienne rejsy',
            'tour-panorama-desc': 'Wielopokładowa łódź podwodna z rozrywką i panoramicznym widokiem',
            'tour-panorama-h1': 'Wielopokładowy statek',
            'tour-panorama-h2': 'Programy rozrywkowe',
            'tour-panorama-h3': 'Panoramiczny widok',
            'tour-panorama-h4': 'W pełni klimatyzowane',

            'tour-dolphin-house-name': 'Rejs na Dolphin House',
            'tour-dolphin-house-time': '8:30 – 16:30',
            'tour-dolphin-house-desc': 'Całodniowa wycieczka na obserwację delfinów z wyposażeniem do snorkelingu i rozrywką na pokładzie',
            'tour-dolphin-house-h1': 'Obserwacja delfinów',
            'tour-dolphin-house-h2': 'Dwa przystanki do snorkelingu',
            'tour-dolphin-house-h3': 'Całodniowy program',
            'tour-dolphin-house-h4': 'Wyposażenie w cenie',

            'tour-Family-Safari-name': 'Rodzinne safari na pustyni',
            'tour-Family-Safari-time': 'Rano i wieczorem',
            'tour-Family-Safari-desc': 'Ciesz się całodniowym rodzinnym safari na pustyni! Przejażdżki quadami i buggy przez złote wydmy, ekscytująca przygoda i niezapomniane wspólne chwile relaksu.',
            'tour-Family-Safari-h1': 'Przejażdżka quadem',
            'tour-Family-Safari-h2': 'Przejażdżka buggy',
            'tour-Family-Safari-h3': 'Odkrywanie pustyni',
            'tour-Family-Safari-h4': 'Sprzęt ochronny',

            'tour-Safari-Moto-3H-name': '3-godzinne safari motocyklowe na pustyni',
            'tour-Safari-Moto-3H-time': 'Rano i wieczorem',
            'tour-Safari-Moto-3H-desc': "Ekscytująca przygoda na pustyni z przejażdżką quadem i na wielbłądzie, idealna dla rodzin i miłośników przygód.",
            'tour-Safari-Moto-3H-h1': 'Przejażdżka quadem',
            'tour-Safari-Moto-3H-h2': 'Przejażdżka na wielbłądzie',
            'tour-Safari-Moto-3H-h3': 'Odkrywanie pustyni',
            'tour-Safari-Moto-3H-h4': 'Sprzęt ochronny',

            'tour-banana-boat-name': 'Przygoda na bananowej łodzi',
            'tour-banana-boat-time': 'Godzina według wyboru',
            'tour-banana-boat-desc': "Zabawa na bananowej łodzi dla wszystkich grup wiekowych, z wyposażeniem bezpieczeństwa dla bezpiecznej przygody.",
            'tour-banana-boat-h1': 'Ekscytująca przejażdżka',
            'tour-banana-boat-h2': 'Dla wszystkich grup wiekowych',
            'tour-banana-boat-h3': 'Wyposażenie bezpieczeństwa',
            'tour-banana-boat-h4': 'Profesjonalna załoga',

            'tour-parasailing-name': 'Przygoda w paralotni',
            'tour-parasailing-time': 'Godzina według wyboru',
            'tour-parasailing-desc': "Ekscytująca paralotnia nad Morzem Czerwonym z zapierającymi dech w piersiach widokami i wyposażeniem bezpieczeństwa.",
            'tour-parasailing-h1': 'Zapierające dech w piersiach widoki',
            'tour-parasailing-h2': 'Wyposażenie bezpieczeństwa',
            'tour-parasailing-h3': 'Profesjonalni instruktorzy',
            'tour-parasailing-h4': 'Dla wszystkich grup wiekowych',

            'tour-water-ski-name': 'Przygoda w narciarstwie wodnym',
            'tour-water-ski-time': 'Godzina według wyboru',
            'tour-water-ski-desc': 'Ekscytujące narty wodne na Morzu Czerwonym z profesjonalnymi instruktorami i wyposażeniem bezpieczeństwa.',
            'tour-water-ski-h1': 'Ekscytujące doświadczenie',
            'tour-water-ski-h2': 'Profesjonalni instruktorzy',
            'tour-water-ski-h3': 'Wyposażenie bezpieczeństwa',
            'tour-water-ski-h4': 'Dla wszystkich poziomów',

            'tour-horseback-name': 'Przejażdżka konna',
            'tour-horseback-time': 'Rano i wieczorem',
            'tour-horseback-desc': 'Unikalne doświadczenie przejażdżki konnej przez pustynię i wzdłuż wybrzeża Morza Czerwonego z profesjonalnymi przewodnikami.',
            'tour-horseback-h1': 'Szlaki pustynne',
            'tour-horseback-h2': 'Przejażdżka wzdłuż wybrzeża',
            'tour-horseback-h3': 'Profesjonalni przewodnicy',
            'tour-horseback-h4': 'Dla wszystkich poziomów',

            'tour-speedboat-name': 'Prywatna przygoda na szybkiej łodzi',
            'tour-speedboat-time': 'Godzina według wyboru',
            'tour-speedboat-desc': "Prywatna przygoda na szybkiej łodzi dla 4-6 osób, z wizytami na wyspach i ekskluzywnymi miejscami do snorkelingu.",
            'tour-speedboat-h1': 'Prywatna szybka łódź (4-6 osób)',
            'tour-speedboat-h2': 'Wizyta na dwóch wyspach',
            'tour-speedboat-h3': 'Spersonalizowana trasa',
            'tour-speedboat-h4': 'System audio',

            'tour-aquarium-name': 'Wielkie Akwarium',
            'tour-aquarium-time': '10:00 - 19:00',
            'tour-aquarium-desc': 'Odkryj wystawę rzadkich stworzeń morskich, w tym rzadkich ryb i kolorowych koralowców.',
            'tour-aquarium-h1': 'Wystawa stworzeń morskich',
            'tour-aquarium-h2': 'Rzadkie ryby',
            'tour-aquarium-h3': 'Interaktywne pokazy',
            'tour-aquarium-h4': 'Dla rodzin',

            'tour-paradise-name': 'Wyspa Paradise',
            'tour-paradise-time': '09:00 - 17:00',
            'tour-paradise-desc': 'Prywatna wyspa z urokliwymi plażami, luksusowymi udogodnieniami i spokojnym otoczeniem do relaksu.',
            'tour-paradise-h1': 'Prywatna plaża',
            'tour-paradise-h2': 'Sporty wodne',
            'tour-paradise-h3': 'Bufetowe obiady',
            'tour-paradise-h4': 'Usługi VIP',

            'tour-orange-bay-name': 'Wyspa Orange Bay',
            'tour-orange-bay-time': '08:00 - 16:00',
            'tour-orange-bay-desc': 'Piękna wyspa z turkusowymi wodami, białymi plażami i udogodnieniami rekreacyjnymi.',
            'tour-orange-bay-h1': 'Prywatna plaża',
            'tour-orange-bay-h2': 'Snorkeling',
            'tour-orange-bay-h3': 'Obiad z owocami morza',
            'tour-orange-bay-h4': 'Sporty wodne',

            'tour-mahmya-name': 'Wyspa Mahmya',
            'tour-mahmya-time': '08:30 - 16:30',
            'tour-mahmya-desc': 'Rezerwat przyrody z nieskazitelnymi plażami, krystalicznie czystą wodą i udogodnieniami najwyższej klasy.',
            'tour-mahmya-h1': 'Rezerwat przyrody',
            'tour-mahmya-h2': 'Prywatna plaża',
            'tour-mahmya-h3': 'Restauracja wysokiej klasy',
            'tour-mahmya-h4': 'Strefy relaksu',

            'tour-diving-name': 'Wycieczka nurkowa',
            'tour-diving-time': '08:00 - 16:00',
            'tour-diving-desc': 'Odkryj podwodny świat Morza Czerwonego z profesjonalnymi instruktorami, dostosowane do wszystkich poziomów nurków.',
            'tour-diving-h1': 'Profesjonalni instruktorzy',
            'tour-diving-h2': 'Pełne wyposażenie w cenie',
            'tour-diving-h3': 'Różne miejsca nurkowe',
            'tour-diving-h4': 'Bezpieczeństwo przede wszystkim',

            'tour-super-safari-name': 'Super safari na pustyni',
            'tour-super-safari-time': 'Rano i wieczorem',
            'tour-super-safari-desc': "Przeżyj ostateczną przygodę na pustyni, łącząc ekscytujące aktywności, doświadczenia kulturowe i pyszny biesiadny obiad pod gwiazdami.",
            'tour-super-safari-h1': 'Przejażdżki quadami po pustyni',
            'tour-super-safari-h2': 'Przejażdżka na wielbłądzie',
            'tour-super-safari-h3': 'Pokazy kulturowe',
            'tour-super-safari-h4': 'Biesiadny obiad',

            'tour-super-pirates-name': 'Rejs Super Pirates',
            'tour-super-pirates-time': '08:30 - 16:30',
            'tour-super-pirates-desc': "Dołącz do rejsu super piratów na Morzu Czerwonym z snorkelingiem, odkrywaniem wysp i rozrywką na pokładzie.",
            'tour-super-pirates-h1': 'Strefa do snorkelingu',
            'tour-super-pirates-h2': 'Odkrywanie wysp',
            'tour-super-pirates-h3': 'Rozrywka na pokładzie',
            'tour-super-pirates-h4': 'Obiad w cenie',

            // Luxor Tours (4 tours)
            'tour-balloon-name': 'Lot balonem',
            'tour-balloon-time': 'Loty o wschodzie słońca',
            'tour-balloon-desc': 'Lot 30–45 minut nad Doliną Królów, świątynią Hatszepsut i widokiem na Nil',
            'tour-balloon-h1': 'Czas wschodu słońca',
            'tour-balloon-h2': 'Lot 30–45 minut',
            'tour-balloon-h3': 'Doświadczony pilot',
            'tour-balloon-h4': 'Certyfikat lotu',

            'tour-luxor-dendera-name': 'Luxor + Dendera',
            'tour-luxor-dendera-time': 'Cały dzień',
            'tour-luxor-dendera-desc': 'Kompleksowa wycieczka łącząca najważniejsze zabytki Luxoru z imponującą świątynią Dendera',
            'tour-luxor-dendera-h1': 'Świątynia Karnak',
            'tour-luxor-dendera-h2': 'Świątynia Hatszepsut',
            'tour-luxor-dendera-h3': 'Świątynia Dendera',
            'tour-luxor-dendera-h4': 'Profesjonalny przewodnik',

            'tour-luxor-highlights-name': 'Najważniejsze atrakcje Luxoru',
            'tour-luxor-highlights-time': 'Cały dzień',
            'tour-luxor-highlights-desc': 'Wycieczka obejmująca Dolinę Królowych, świątynię Karnak, świątynię Hatszepsut i kolosy Memnona',
            'tour-luxor-highlights-h1': 'Dolina Królowych',
            'tour-luxor-highlights-h2': 'Świątynia Karnak',
            'tour-luxor-highlights-h3': 'Świątynia Hatszepsut',
            'tour-luxor-highlights-h4': 'Kolosy Memnona',

            'tour-nile-cruise-name': 'Rejs po Nilu',
            'tour-nile-cruise-time': '4–5 dni',
            'tour-nile-cruise-desc': 'Luksusowy rejs między Luxorem a Asuaną z wizytami w świątyniach i pełnym wyżywieniem',
            'tour-nile-cruise-h1': 'Zakwaterowanie 5-gwiazdkowe',
            'tour-nile-cruise-h2': 'Pełne wyżywienie',
            'tour-nile-cruise-h3': 'Wizyty w świątyniach',
            'tour-nile-cruise-h4': 'Profesjonalne oprowadzanie',

            // Cairo Tours (1 tour)
            'tour-pyramids-name': 'Piramidy i Muzeum',
            'tour-pyramids-time': 'Cały dzień',
            'tour-pyramids-desc': 'Pełne doświadczenie Kairu: Piramidy w Gizie, Sfinks i Muzeum Egipskie z przewodnikiem',
            'tour-pyramids-h1': 'Piramidy w Gizie',
            'tour-pyramids-h2': 'Wielki Sfinks',
            'tour-pyramids-h3': 'Muzeum Egipskie',
            'tour-pyramids-h4': 'Profesjonalny przewodnik',

            // Resorts $ Apartments (2 tours)
            'resort-Princess-name': 'Princess Palace Resort',
            'tour-Princess-Resort-time': 'Zakwaterowanie całoroczne',
            'resort-Princess-desc': 'Luksusowy ośrodek all-inclusive z prywatną plażą, basenami i spa',
            'tour-Princess-Resort-h1': 'Prywatna plaża',
            'tour-Princess-Resort-h2': 'Baseny',
            'tour-Princess-Resort-h3': 'Spa',
            'tour-Princess-Resort-h4': 'Restauracje',

            'tour-British-Resort-name': 'British Resort',
            'tour-British-Resort-time': 'Zakwaterowanie całoroczne',
            'tour-British-Resort-desc': 'Rodzinny ośrodek z basenami, kortami tenisowymi i bliskością plaży',
            'tour-British-Resort-h1': 'Baseny',
            'tour-British-Resort-h2': 'Korty tenisowe',
            'tour-British-Resort-h3': 'Blisko plaży',
            'tour-British-Resort-h4': 'Restauracje',


            'book-now': 'Zarezerwuj teraz',

            // Contact Section
            'contact-title': 'Skontaktuj się z nami',
            'contact-subtitle': 'Jesteśmy tu, aby pomóc Ci zaplanować podróż marzeń',
            'contact-whatsapp': 'WhatsApp',
            'contact-email': 'E-mail',
            'contact-phone': 'Telefon',
            'form-name': 'Twoje pełne imię i nazwisko',
            'form-email': 'Adres e-mail',
            'form-phone': 'Numer telefonu',
            'form-message': 'Twoja wiadomość lub zapytanie',
            'form-submit': 'Wyślij wiadomość',

            // Footer
            'footer-links': 'Szybkie linki',
            'footer-social': 'Obserwuj nas',
            'footer-copyright': '© 2025 Egypt Essence Tours. Wszelkie prawa zastrzeżone.',

            // WhatsApp Messages
            'whatsapp-general': 'Cześć! Chciałbym zapytać o wasze wycieczki',
            'whatsapp-contact-form': 'Cześć! Nazywam się {name}, e-mail: {email}, telefon: {phone}. Wiadomość: {message}'
        }

    };

    // Language configuration with enhanced detection
    const languageConfig = {
        ar: { dir: 'rtl', name: 'العربية', flag: '🇪🇬' },
        en: { dir: 'ltr', name: 'English', flag: '🇬🇧' },
        de: { dir: 'ltr', name: 'Deutsch', flag: '🇩🇪' },
        ru: { dir: 'ltr', name: 'Русский', flag: '🇷🇺' },
        zh: { dir: 'ltr', name: '中文', flag: '🇨🇳' },
        cs: { dir: 'ltr', name: 'Čeština', flag: '🇨🇿' },
        fr: { dir: 'ltr', name: 'Français', flag: '🇫🇷' },
        pl: { dir: 'ltr', name: 'Polski', flag: '🇵🇱' }
    };

    // Expose translations and languageConfig for diagnostic tools (sandbox)
    try {
        window.__EET_translations = translations;
        window.__EET_languageConfig = languageConfig;
    } catch (e) {
        // ignore in environments where window isn't writable
        console.warn('Could not expose translations to window:', e);
    }

    let currentLanguage = 'ar';
    // Read whatsapp number from <body data-whatsapp="..."> if provided, otherwise use default
    const defaultWhatsApp = '201009531706'; // Updated WhatsApp number
    const whatsappNumber = (document && document.body && document.body.dataset && document.body.dataset.whatsapp) ? document.body.dataset.whatsapp : defaultWhatsApp;

    // Enhanced Language Detection Function
    function detectLanguage() {
        // Check for saved preference first
        const savedLang = localStorage.getItem('egypt-essence-language');
        if (savedLang && languageConfig[savedLang]) {
            console.log(`✅ Found saved language: ${savedLang}`);
            return savedLang;
        }

        // Comprehensive browser language detection
        const browserLanguages = [];

        // Primary language
        if (navigator.language) {
            browserLanguages.push(navigator.language.toLowerCase());
        }

        // All preferred languages
        if (navigator.languages && navigator.languages.length > 0) {
            navigator.languages.forEach(lang => {
                browserLanguages.push(lang.toLowerCase());
            });
        }

        // System language fallbacks
        if (navigator.userLanguage) browserLanguages.push(navigator.userLanguage.toLowerCase());
        if (navigator.browserLanguage) browserLanguages.push(navigator.browserLanguage.toLowerCase());
        if (navigator.systemLanguage) browserLanguages.push(navigator.systemLanguage.toLowerCase());

        console.log('🌐 Detected browser languages:', browserLanguages);

        // Language mapping with priority
        for (let browserLang of browserLanguages) {
            // Exact matches and variants
            if (browserLang === 'ar' || browserLang.startsWith('ar-')) return 'ar';
            if (browserLang === 'en' || browserLang.startsWith('en-')) return 'en';
            if (browserLang === 'de' || browserLang.startsWith('de-')) return 'de';
            if (browserLang === 'ru' || browserLang.startsWith('ru-')) return 'ru';
            if (browserLang === 'zh' || browserLang.startsWith('zh-')) return 'zh';
            if (browserLang === 'cs' || browserLang.startsWith('cs-')) return 'cs';
            if (browserLang === 'fr' || browserLang.startsWith('fr-')) return 'fr';
            if (browserLang === 'pl' || browserLang.startsWith('pl-')) return 'pl';
        }

        // Default to English
        console.log('🔄 No supported language detected, defaulting to English');
        return 'en';
    }

    // Ensure some common translation keys exist for all languages (runtime-safe)
    (function ensureCommonTranslations() {
        const commonKeys = {
            'error-fill-fields': {
                ar: 'يرجى ملء جميع الحقول المطلوبة.',
                en: 'Please fill in all required fields.',
                de: 'Bitte füllen Sie alle erforderlichen Felder aus.',
                ru: 'Пожалуйста, заполните все обязательные поля.',
                zh: '请填写所有必填字段。',
                cs: 'Vyplňte prosím všechna povinná pole.',
                fr: 'Veuillez remplir tous les champs requis.',
                pl: 'Proszę wypełnić wszystkie wymagane pola.'
            },
            'error-invalid-email': {
                ar: 'صيغة البريد الإلكتروني غير صحيحة.',
                en: 'Invalid email format.',
                de: 'Ungültiges E-Mail-Format.',
                ru: 'Неверный формат электронной почты.',
                zh: '电子邮件格式无效。',
                cs: 'Neplatný formát e-mailu.',
                fr: 'Format d\'e-mail invalide.',
                pl: 'Nieprawidłowy format adresu e-mail.'
            }
        };

        Object.keys(translations).forEach(lang => {
            Object.keys(commonKeys).forEach(key => {
                if (!translations[lang][key]) {
                    translations[lang][key] = commonKeys[key][lang] || commonKeys[key]['en'];
                }
            });
        });
    })();

    // Copy English tour-* keys into all non-ar/non-en languages so tour details match English
    (function fillTourKeysWithEnglish() {
        try {
            const english = translations['en'] || {};
            const tourKeys = Object.keys(english).filter(k => k.startsWith('tour-'));
            Object.keys(translations).forEach(lang => {
                if (lang === 'en' || lang === 'ar') return;
                translations[lang] = translations[lang] || {};
                let filled = 0;
                tourKeys.forEach(k => {
                    // Only fill if missing (do not overwrite existing translations)
                    if (typeof translations[lang][k] === 'undefined' && typeof english[k] !== 'undefined') {
                        translations[lang][k] = english[k];
                        filled++;
                    }
                });
                if (filled > 0) {
                    console.log(`🔁 Filled ${filled} missing English tour keys into language '${lang}'.`);
                }
            });
        } catch (e) {
            console.error('Failed to copy English tour keys:', e);
        }
    })();

    // Ensure Polish (and all languages) include all keys present in English translations
    (function fillMissingFromEnglish() {
        const base = translations['en'] || {};
        Object.keys(translations).forEach(lang => {
            if (lang === 'en') return;
            let added = 0;
            Object.keys(base).forEach(key => {
                if (typeof translations[lang][key] === 'undefined') {
                    translations[lang][key] = base[key];
                    added++;
                }
            });
            if (added > 0) {
                console.log(`🔤 Filled ${added} missing keys for language '${lang}' from English fallback.`);
            }
        });
    })();

    // Apply Language Function
    function applyLanguage(lang) {
        currentLanguage = lang;
        const config = languageConfig[lang];

        console.log(`🔧 Applying language: ${lang} (${config.name})`);

        // Update document attributes
        document.documentElement.lang = lang;
        document.body.setAttribute('data-lang', lang);
        document.body.setAttribute('data-dir', config.dir);

        // Update page title and meta description
        document.title = translations[lang]['page-title'];
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', translations[lang]['page-description']);
        }

        // Update all translatable elements
        const translatableElements = document.querySelectorAll('[data-translate]');

        // Helper: decide whether a key is a tour-related key
        function isTourKey(key) {
            return typeof key === 'string' && key.startsWith('tour-');
        }

        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');

            // Always prefer the selected language for tour keys; fall back to English only if missing
            let text;
            if (isTourKey(key)) {
                text = (translations[lang] && translations[lang][key]) ? translations[lang][key] : (translations['en'] && translations['en'][key]) || key;
            } else {
                text = (translations[lang] && translations[lang][key]) ? translations[lang][key] : (translations['en'] && translations['en'][key]) || key;
            }

            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        });

        // Update language switcher current display
        const currentLangBtn = document.getElementById('currentLang');
        if (currentLangBtn) {
            const flagSpan = currentLangBtn.querySelector('.flag');
            const nameSpan = currentLangBtn.querySelector('.lang-name');
            if (flagSpan) flagSpan.textContent = config.flag;
            if (nameSpan) nameSpan.textContent = config.name;
            // Accessibility: aria attributes
            try {
                currentLangBtn.setAttribute('aria-label', config.name);
                // If a dropdown exists, link them
                const languageDropdown = document.getElementById('languageDropdown');
                if (languageDropdown) {
                    currentLangBtn.setAttribute('aria-controls', 'languageDropdown');
                    currentLangBtn.setAttribute('aria-expanded', 'false');
                }
            } catch (e) {
                // ignore if setting attributes fails
            }
        }

        // Update active language in dropdown
        const langLinks = document.querySelectorAll('.language-dropdown a');
        langLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-lang') === lang) {
                link.classList.add('active');
            }
        });

        // Save to localStorage
        localStorage.setItem('egypt-essence-language', lang);

        // Update WhatsApp float button
        updateWhatsAppFloat();

        console.log(`✅ Language applied successfully: ${config.name}`);
    }

    // WhatsApp Message Generator
    function generateWhatsAppMessage(tourName, lang = currentLanguage) {
        let message;
        if (tourName && tourName !== 'general') {
            message = `${translations[lang]['whatsapp-general']} - ${tourName}`;
        } else {
            message = translations[lang]['whatsapp-general'];
        }
        return encodeURIComponent(message);
    }

    // Update WhatsApp float button
    function updateWhatsAppFloat() {
        const existingFloat = document.querySelector('.whatsapp-float');
        if (existingFloat) {
            const message = generateWhatsAppMessage('general');
            existingFloat.href = `https://wa.me/${whatsappNumber}?text=${message}`;
            existingFloat.title = translations[currentLanguage]['contact-whatsapp'];
        }
    }

    // Initialize Language System
    function initLanguageSystem() {
        const detectedLang = detectLanguage();
        console.log(`🚀 Detected language: ${detectedLang}`);
        applyLanguage(detectedLang);

        // Language switcher functionality
        const languageBtn = document.getElementById('currentLang');
        const languageDropdown = document.getElementById('languageDropdown');

        if (languageBtn && languageDropdown) {
            languageBtn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                languageDropdown.classList.toggle('active');
                // Update aria-expanded for accessibility
                const expanded = languageDropdown.classList.contains('active');
                try { languageBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false'); } catch (err) { }
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', function (e) {
                if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
                    languageDropdown.classList.remove('active');
                    try { languageBtn.setAttribute('aria-expanded', 'false'); } catch (err) { }
                }
            });

            // Language selection
            const langLinks = languageDropdown.querySelectorAll('a');
            langLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const selectedLang = this.getAttribute('data-lang');

                    // Smooth transition effect
                    document.body.classList.add('fade-transition');
                    document.body.classList.add('fade-out');

                    setTimeout(() => {
                        applyLanguage(selectedLang);
                        languageDropdown.classList.remove('active');
                        try { languageBtn.setAttribute('aria-expanded', 'false'); } catch (err) { }

                        document.body.classList.remove('fade-out');
                        setTimeout(() => {
                            document.body.classList.remove('fade-transition');
                        }, 200);
                    }, 200);
                });
            });
        }
    }

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (mobileMenuToggle && navList) {
        mobileMenuToggle.addEventListener('click', function () {
            navList.classList.toggle('active');

            const icon = this.querySelector('i');
            if (navList.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-list a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navList.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Smooth Scrolling
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
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

    // Enhanced Header Background on Scroll
    const header = document.querySelector('.header');
    let ticking = false;

    function updateHeader() {
        if (!header) { ticking = false; return; }
        if (window.scrollY > 50) {
            header.style.background = 'linear-gradient(135deg, rgba(8, 51, 66, 0.98) 0%, rgba(27, 200, 210, 0.98) 100%)';
            header.style.backdropFilter = 'blur(15px)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
            header.style.background = 'linear-gradient(135deg, #083342 0%, #1bc8d2 100%)';
            header.style.backdropFilter = 'none';
            header.style.borderBottom = 'none';
        }
        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });

    // Enhanced Booking Buttons with Animation
    function initBookingButtons() {
        const bookButtons = document.querySelectorAll('.book-btn');

        bookButtons.forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault();

                // Enhanced click animation
                this.style.transform = 'scale(0.95)';
                this.style.boxShadow = '0 2px 10px rgba(27, 200, 210, 0.3)';

                setTimeout(() => {
                    this.style.transform = 'scale(1.05)';
                    this.style.boxShadow = '0 8px 25px rgba(27, 200, 210, 0.5)';

                    setTimeout(() => {
                        this.style.transform = '';
                        this.style.boxShadow = '';
                    }, 200);
                }, 100);

                const tourName = this.getAttribute('data-tour-name') || 'general';
                const message = generateWhatsAppMessage(tourName);
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

                // Open WhatsApp
                window.open(whatsappUrl, '_blank');

                // Analytics tracking
                console.log(`📱 Booking clicked: ${tourName} in ${currentLanguage}`);
            });
        });
    }

    // Enhanced Contact Form Handling
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const phone = formData.get('phone').trim();
            const message = formData.get('message').trim();

            // Enhanced validation
            if (!name || !email || !phone || !message) {
                showNotification(getTranslation('error-fill-fields'), 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification(getTranslation('error-invalid-email'), 'error');
                return;
            }

            // Create WhatsApp message with form data
            const whatsappMessage = translations[currentLanguage]['whatsapp-contact-form']
                .replace('{name}', name)
                .replace('{email}', email)
                .replace('{phone}', phone)
                .replace('{message}', message);

            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Show success message
            showSuccessMessage();

            // Open WhatsApp
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
            }, 1500);

            // Reset form
            setTimeout(() => {
                this.reset();
            }, 2000);

            console.log(`📧 Contact form submitted by ${name}`);
        });
    }

    // Helper function for translations
    function getTranslation(key) {
        try {
            if (translations[currentLanguage] && translations[currentLanguage][key]) {
                return translations[currentLanguage][key];
            }
            // fallback to English if available
            if (translations['en'] && translations['en'][key]) {
                return translations['en'][key];
            }
        } catch (e) {
            // ignore and fallback to key
        }
        return key;
    }

    // In-browser translation coverage reporter
    function printTranslationReport() {
        try {
            const base = translations['en'] || {};
            const baseKeys = Object.keys(base).sort();
            const report = {};
            Object.keys(translations).sort().forEach(lang => {
                const keys = Object.keys(translations[lang] || {});
                const missing = baseKeys.filter(k => !keys.includes(k));
                report[lang] = { total: keys.length, missingCount: missing.length, missing };
            });

            console.group('🌍 Translation Coverage Report');
            Object.keys(report).forEach(lang => {
                const r = report[lang];
                console.log(`${lang}: total=${r.total}, missing=${r.missingCount}`);
            });
            const langsWithMissing = Object.keys(report).filter(l => report[l].missingCount > 0);
            if (langsWithMissing.length > 0) {
                console.warn('Languages with missing keys:', langsWithMissing.join(', '));
            } else {
                console.log('All languages have the same keys as English.');
            }
            console.groupEnd();

            // Small overlay for quick visual feedback
            const overlay = document.createElement('div');
            overlay.className = 'translation-report-overlay';
            overlay.setAttribute('aria-hidden', 'true');
            overlay.style.cssText = 'position:fixed;left:10px;bottom:10px;padding:10px 14px;background:rgba(0,0,0,0.6);color:#fff;border-radius:8px;font-size:0.9rem;z-index:99999;backdrop-filter:blur(4px);';
            const summary = langsWithMissing.length > 0 ? `${langsWithMissing.length} languages incomplete` : 'All languages complete';
            overlay.textContent = `Translations: ${summary}`;
            document.body.appendChild(overlay);
            setTimeout(() => { overlay.remove(); }, 8000);
        } catch (e) {
            console.error('Translation reporter failed', e);
        }
    }

    // Enhanced success message
    function showSuccessMessage() {
        const existingMessage = document.querySelector('.success-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const successDiv = document.createElement('div');
        successDiv.className = 'success-message show';

        const successMessages = {
            ar: 'تم إرسال رسالتك بنجاح! سيتم تحويلك إلى الواتساب...',
            en: 'Message sent successfully! Redirecting to WhatsApp...',
            de: 'Nachricht erfolgreich gesendet! Weiterleitung zu WhatsApp...',
            ru: 'Сообщение успешно отправлено! Перенаправление в WhatsApp...',
            zh: '消息发送成功！正在重定向到WhatsApp...',
            cs: 'Zpráva úspěšně odeslána! Přesměrování na WhatsApp...',
            pl: 'Wiadomość wysłana pomyślnie! Przekierowywanie do WhatsApp...',
            fr: 'Message envoyé avec succès! Redirection vers WhatsApp...'
        };
        // Ensure there's always a fallback message (default to English)
        const successText = successMessages[currentLanguage] || successMessages['en'] || '';

        successDiv.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${successText}</span>
        `;

        try {
            if (contactForm) {
                contactForm.appendChild(successDiv);
            } else {
                document.body.appendChild(successDiv);
            }
        } catch (e) {
            document.body.appendChild(successDiv);
        }

        // Announce success message to assistive technologies
        try {
            const live = document.getElementById('a11y-notifications');
            if (live) {
                live.textContent = successText;
            }
        } catch (e) { }

        setTimeout(() => {
            if (successDiv) {
                successDiv.remove();
            }
        }, 6000);
    }

    // Enhanced notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'error' ? '#dc3545' : '#28a745'};
            color: white;
            padding: 15px 25px;
            border-radius: 15px;
            z-index: 10000;
            font-weight: 600;
            font-size: 0.95rem;
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
            animation: slideInRight 0.4s ease;
        `;

        if (document.body.getAttribute('data-dir') === 'ltr') {
            notification.style.left = '20px';
            notification.style.right = 'auto';
        }

        document.body.appendChild(notification);

        // Announce to screen readers via live region
        try {
            const live = document.getElementById('a11y-notifications');
            if (live) {
                live.textContent = message;
            }
        } catch (e) { }

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.4s ease forwards';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 400);
        }, 4000);
    }

    // Active navigation highlighting
    function initNavHighlighting() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(section => observer.observe(section));
    }

    // Enhanced WhatsApp Float Button
    function loadWhatsAppFloat() {
        const whatsappFloat = document.createElement('div');
        const message = generateWhatsAppMessage('general');
        const waTitle = getTranslation('contact-whatsapp') || 'WhatsApp';
        whatsappFloat.innerHTML = `
            <a href="https://wa.me/${whatsappNumber}?text=${message}" 
               target="_blank" 
               class="whatsapp-float"
               title="${waTitle}">
                <i class="fab fa-whatsapp"></i>
            </a>
        `;
        document.body.appendChild(whatsappFloat);

        const floatButton = whatsappFloat.querySelector('.whatsapp-float');
        if (floatButton) {
            // Accessibility: aria-label and role
            try {
                floatButton.setAttribute('aria-label', getTranslation('contact-whatsapp') || 'WhatsApp');
                floatButton.setAttribute('role', 'link');
            } catch (err) { }

            // Enhanced interaction events (guarded)
            floatButton.addEventListener('mouseenter', function () {
                try { this.style.animationPlayState = 'paused'; } catch (e) { }
            });

            floatButton.addEventListener('mouseleave', function () {
                try { this.style.animationPlayState = 'running'; } catch (e) { }
            });

            floatButton.addEventListener('click', function () {
                console.log(`📱 WhatsApp float clicked - Language: ${currentLanguage}`);
            });
        }
    }

    // Enhanced Animation Observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const animationObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Initialize enhanced animations
    function initAnimations() {
        const tourCards = document.querySelectorAll('.tour-card');
        const features = document.querySelectorAll('.feature');

        [...tourCards, ...features].forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px) scale(0.95)';
            element.style.transition = `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;
            animationObserver.observe(element);
        });

        // Enhanced hover effects for tour cards
        tourCards.forEach(card => {
            card.addEventListener('mouseenter', function () {
                if (this.classList.contains('animated')) {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                    this.style.boxShadow = '0 25px 60px rgba(0,0,0,0.25)';
                }
            });

            card.addEventListener('mouseleave', function () {
                if (this.classList.contains('animated')) {
                    this.style.transform = 'translateY(0) scale(1)';
                    this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
                }
            });
        });
    }

    // Add CSS animations dynamically
    function addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize everything
    function init() {
        console.log('🏺 Egypt Essence Tours - Initializing complete multilingual website...');
        console.log('📱 Updated WhatsApp: +' + whatsappNumber);
        console.log('🆕 New Tagline: "Explore More Feel More"');

        addAnimationStyles();
        initLanguageSystem();
        initBookingButtons();
        initAnimations();
        initNavHighlighting();
        // Print a translation coverage report in-browser (console + small overlay)
        try { printTranslationReport(); } catch (e) { /* ignore if reporter fails */ }

        // Load WhatsApp float after page load
        setTimeout(loadWhatsAppFloat, 3000);

        // Mark page as loaded
        window.addEventListener('load', function () {
            document.body.classList.add('page-loaded');
        });

        console.log('✅ Egypt Essence Tours multilingual website loaded successfully!');
        console.log(`🌍 Current language: ${currentLanguage} (${languageConfig[currentLanguage].name})`);
        console.log('🗣️ Supported languages:', Object.keys(languageConfig).map(k => `${k} (${languageConfig[k].name})`).join(', '));
        console.log('🎯 Total tours: 15 (10 Hurghada + 4 Luxor + 1 Cairo)');
    }

    // Start the application
    init();
});

// Global error handler
window.addEventListener('error', function (e) {
    console.error('Egypt Essence Tours Error:', e.error);
});

// Service Worker registration (for better performance)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        // Service worker would be registered here for production
        console.log('💡 Ready for service worker implementation');
    });
}