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

            // Section Titles
            'hurghada-title': 'رحلات الغردقة',
            'hurghada-subtitle': 'استمتع بمغامرات البحر الأحمر الرائعة',
            'luxor-title': 'رحلات الأقصر',
            'luxor-subtitle': 'اكتشف كنوز مصر الفرعونية',
            'cairo-title': 'رحلات القاهرة',
            'cairo-subtitle': 'اكتشف عجائب مصر القديمة',

            // Hurghada Tours (10 tours)
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

            'tour-sindbad-name': 'غواصة سندباد',
            'tour-sindbad-time': '11:00 صباحاً و 1:00 ظهراً',
            'tour-sindbad-desc': 'انغمس 25 متراً في العمق لمشاهدة الشعاب المرجانية والحياة البحرية من خلال النوافذ الكبيرة',
            'tour-sindbad-h1': 'عمق 25 متر',
            'tour-sindbad-h2': 'مشاهدة الشعاب المرجانية',
            'tour-sindbad-h3': 'رصد الحياة البحرية',
            'tour-sindbad-h4': 'مرشد محترف',

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

            'tour-morning-safari-name': 'سفاري الصحراء الصباحي العائلي',
            'tour-morning-safari-time': 'برنامج صباحي',
            'tour-morning-safari-desc': 'مغامرة صحراوية عائلية مع عربات الشاطئ والعربات العنكبوتية',
            'tour-morning-safari-h1': 'ركوب عربات الشاطئ',
            'tour-morning-safari-h2': 'تجربة العربة العنكبوتية',
            'tour-morning-safari-h3': 'استكشاف الصحراء',
            'tour-morning-safari-h4': 'معدات أمان',

            'tour-evening-safari-name': 'سفاري الصحراء المسائي العائلي',
            'tour-evening-safari-time': 'برنامج مسائي',
            'tour-evening-safari-desc': 'سفاري صحراوي مع ترفيه تقليدي وعشاء بدوي تحت النجوم',
            'tour-evening-safari-h1': 'عشاء بدوي',
            'tour-evening-safari-h2': 'عروض تقليدية',
            'tour-evening-safari-h3': 'ركوب الجمال',
            'tour-evening-safari-h4': 'صور تذكارية',

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

            'tour-dolphin-show-name': 'عرض الدلافين',
            'tour-dolphin-show-time': '3:30 - 5:00 مساءً',
            'tour-dolphin-show-desc': 'عرض ترفيهي بحري مع الدلافين المدربة وعروض مائية مثيرة',
            'tour-dolphin-show-h1': 'عروض دلافين مدربة',
            'tour-dolphin-show-h2': 'عروض مائية',
            'tour-dolphin-show-h3': 'ترفيه عائلي',
            'tour-dolphin-show-h4': 'تصوير مع الدلافين',

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

            // Sections Titles
            'hurghada-title': 'Hurghada Tours',
            'hurghada-subtitle': 'Enjoy amazing Red Sea adventures',
            'luxor-title': 'Luxor Tours',
            'luxor-subtitle': 'Discover Egypt\'s Pharaonic treasures',
            'cairo-title': 'Cairo Tours',
            'cairo-subtitle': 'Discover the wonders of ancient Egypt',

            // Hurghada Tours 
            'tour-hula-hula-name': 'Hula Hula Island Trip',
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

            'tour-sindbad-name': 'Sindbad Submarine',
            'tour-sindbad-time': '11:00 AM & 1:00 PM',
            'tour-sindbad-desc': 'Dive 25 meters deep to observe coral reefs and marine life through large windows',
            'tour-sindbad-h1': '25 meter depth',
            'tour-sindbad-h2': 'Coral reef viewing',
            'tour-sindbad-h3': 'Marine life spotting',
            'tour-sindbad-h4': 'Professional guide',

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

            'tour-morning-safari-name': 'Family Morning Safari',
            'tour-morning-safari-time': 'Morning program',
            'tour-morning-safari-desc': 'Family desert adventure with beach buggies and spider cars',
            'tour-morning-safari-h1': 'Beach buggy riding',
            'tour-morning-safari-h2': 'Spider car experience',
            'tour-morning-safari-h3': 'Desert exploration',
            'tour-morning-safari-h4': 'Safety equipment',

            'tour-evening-safari-name': 'Family Evening Safari',
            'tour-evening-safari-time': 'Evening program',
            'tour-evening-safari-desc': 'Desert safari with traditional entertainment and Bedouin dinner under the stars',
            'tour-evening-safari-h1': 'Bedouin dinner',
            'tour-evening-safari-h2': 'Traditional shows',
            'tour-evening-safari-h3': 'Sunset trip',
            'tour-evening-safari-h4': 'Folk music',

            'tour-speedboat-name': 'Speed Boat Private',
            'tour-speedboat-time': 'Flexible timing',
            'tour-speedboat-desc': 'Private boat experience for 4-6 guests with island hopping and dedicated snorkeling spots',
            'tour-speedboat-h1': 'Private boat 4-6 guests',
            'tour-speedboat-h2': 'Two islands included',
            'tour-speedboat-h3': 'Custom route',
            'tour-speedboat-h4': 'Sound system',

            'tour-aquarium-name': 'Grand Aquarium',
            'tour-aquarium-time': '10:00 AM - 7:00 PM',
            'tour-aquarium-desc': 'Marine life exhibition with rare species of fish and coral',
            'tour-aquarium-h1': 'Marine life exhibition',
            'tour-aquarium-h2': 'Rare fish species',
            'tour-aquarium-h3': 'Interactive shows',
            'tour-aquarium-h4': 'Family friendly',

            'tour-dolphin-show-name': 'Dolphin Show',
            'tour-dolphin-show-time': '3:30 - 5:00 PM',
            'tour-dolphin-show-desc': 'Marine entertainment show with trained dolphins and exciting water shows',
            'tour-dolphin-show-h1': 'Trained dolphin shows',
            'tour-dolphin-show-h2': 'Water performances',
            'tour-dolphin-show-h3': 'Family entertainment',
            'tour-dolphin-show-h4': 'Photo with dolphins',


            'tour-paradise-name': 'Paradise Island',
            'tour-paradise-time': '9:00 AM - 5:00 PM',
            'tour-paradise-desc': 'Private island with stunning beaches and luxury facilities for relaxation',
            'tour-paradise-h1': 'Private Beach',
            'tour-paradise-h2': 'Water Sports',
            'tour-paradise-h3': 'Open Buffet',
            'tour-paradise-h4': 'VIP Services',

            'tour-orange-bay-name': 'Orange Bay',
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

            "tour-morning-safari-name": "Familien-Morgensafari",
            "tour-morning-safari-time": "Morgensprogramm",
            "tour-morning-safari-desc": "Familienabenteuer in der Wüste mit Beach-Buggys und Spinnenautos",
            "tour-morning-safari-h1": "Buggyfahren am Strand",
            "tour-morning-safari-h2": "Spinnenauto-Erlebnis",
            "tour-morning-safari-h3": "Wüstenexpedition",
            "tour-morning-safari-h4": "Sicherheitsausrüstung",

            "tour-evening-safari-name": "Familien-Abendsafari",
            "tour-evening-safari-time": "Abendprogramm",
            "tour-evening-safari-desc": "Wüstensafari mit traditioneller Unterhaltung und Beduinen-Dinner unter den Sternen",
            "tour-evening-safari-h1": "Beduinen-Dinner",
            "tour-evening-safari-h2": "Traditionelle Shows",
            "tour-evening-safari-h3": "Sonnenuntergangsfahrt",
            "tour-evening-safari-h4": "Volksmusik",

            "tour-speedboat-name": "Privates Schnellboot",
            "tour-speedboat-time": "Flexible Zeiten",
            "tour-speedboat-desc": "Privates Bootserlebnis für 4–6 Gäste mit Inselhopping und ausgewählten Schnorchelplätzen",
            "tour-speedboat-h1": "Privates Boot für 4–6 Gäste",
            "tour-speedboat-h2": "Zwei Inseln inklusive",
            "tour-speedboat-h3": "Individuelle Route",
            "tour-speedboat-h4": "Soundsystem",

            "tour-aquarium-name": "Großes Aquarium",
            "tour-aquarium-time": "10:00–19:00 Uhr",
            "tour-aquarium-desc": "Meeresausstellung mit seltenen Fischarten und Korallen",
            "tour-aquarium-h1": "Meeresausstellung",
            "tour-aquarium-h2": "Seltene Fischarten",
            "tour-aquarium-h3": "Interaktive Shows",
            "tour-aquarium-h4": "Familienfreundlich",

            "tour-dolphin-show-name": "Delphin-Show",
            "tour-dolphin-show-time": "15:30–17:00 Uhr",
            "tour-dolphin-show-desc": "Meeresunterhaltung mit trainierten Delfinen und spannenden Wassershows",
            "tour-dolphin-show-h1": "Trainings-Shows mit Delfinen",
            "tour-dolphin-show-h2": "Wasser-Performances",
            "tour-dolphin-show-h3": "Familienunterhaltung",
            "tour-dolphin-show-h4": "Foto mit Delfinen",

            "tour-paradise-name": "Paradiesinsel",
            "tour-paradise-time": "09:00–17:00 Uhr",
            "tour-paradise-desc": "Private Insel mit traumhaften Stränden und luxuriösen Einrichtungen zur Entspannung",
            "tour-paradise-h1": "Privater Strand",
            "tour-paradise-h2": "Wassersport",
            "tour-paradise-h3": "Offenes Buffet",
            "tour-paradise-h4": "VIP-Services",

            "tour-orange-bay-name": "Orange Bay",
            "tour-orange-bay-time": "08:00–16:00 Uhr",
            "tour-orange-bay-desc": "Schöne Insel mit türkisfarbenem Wasser, weißem Sand und Freizeiteinrichtungen",
            "tour-orange-bay-h1": "Privater Strand",
            "tour-orange-bay-h2": "Schnorcheln",
            "tour-orange-bay-h3": "Meeresfrüchte-Mittagessen",
            "tour-orange-bay-h4": "Wassersport",

            "tour-mahmya-name": "Insel Mahmya",
            "tour-mahmya-time": "08:30–16:30 Uhr",
            "tour-mahmya-desc": "Naturschutzgebiet mit unberührten Stränden, kristallklarem Wasser und gehobener Ausstattung",
            "tour-mahmya-h1": "Naturschutzgebiet",
            "tour-mahmya-h2": "Privater Strand",
            "tour-mahmya-h3": "Gourmet-Restaurant",
            "tour-mahmya-h4": "Entspannungsbereiche",



            // Luxor Tours
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

            // Cairo Tours
            'tour-pyramids-name': 'Pyramids & Museum',
            'tour-pyramids-time': 'Full day',
            'tour-pyramids-desc': 'Complete Cairo experience including Giza Pyramids, Sphinx and Egyptian Museum with expert guide',
            'tour-pyramids-h1': 'Giza Pyramids',
            'tour-pyramids-h2': 'Great Sphinx',
            'tour-pyramids-h3': 'Egyptian Museum',
            'tour-pyramids-h4': 'Professional guide',

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
            // ================= Page Meta =================
            'page-title': 'Egypt Essence Tours – Entdecke Mehr, Fühle Mehr',
            'page-description': 'Beste Touren in Ägypten – Hurghada, Luxor und Kairo. Buche jetzt deine Reise!',

            // ================= Company Info - NEW TAGLINE =================
            'company-name': 'Egypt Essence Tours',
            'company-tagline': 'Entdecke Mehr, Fühle Mehr',

            // ================= Navigation =================
            'nav-home': 'Startseite',
            'nav-hurghada': 'Hurghada Touren',
            'nav-luxor': 'Luxor Touren',
            'nav-cairo': 'Kairo Touren',
            'nav-about': 'Über Uns',
            'nav-contact': 'Kontakt',

            // ================= Hero Section =================
            'hero-title': 'Erlebe die Magie Ägyptens mit uns',
            'hero-subtitle': 'Genieße die schönsten Touren in Hurghada, Luxor und Kairo',
            'hero-cta': 'Starte jetzt deine Reise',

            // ================= About Section =================
            'about-title': 'Über Uns',
            'about-subtitle': 'Egypt Essence Tours, dein perfekter Begleiter zur Erkundung Ägyptens',
            'about-description': 'Wir sind ein spezialisiertes Unternehmen, das Touren in den schönsten Städten Ägyptens organisiert. Wir bieten exzellenten Service und sorgfältig geplante Reisen für das beste Erlebnis.',
            'feature-service': 'Ausgezeichneter Kundenservice',
            'feature-safety': 'Sichere und geschützte Touren',
            'feature-guides': 'Professionelle Reiseführer',
            'feature-timing': 'Pünktlich und organisiert',

            // ================= Sections Titles=================
            'hurghada-title': 'Hurghada Touren',
            'hurghada-subtitle': 'Erlebe beeindruckende Abenteuer im Roten Meer',
            'luxor-title': 'Luxor Touren',
            'luxor-subtitle': 'Entdecke die pharaonischen Schätze Ägyptens',
            'cairo-title': 'Kairo Touren',
            'cairo-subtitle': 'Entdecke die Wunder des alten Ägypten',

            // ================= Tours =================
            'tour-hula-hula-name': 'Hula Hula Insel-Ausflug',
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

            'tour-sindbad-name': 'Sindbad U-Boot',
            'tour-sindbad-time': '11:00 & 13:00 Uhr',
            'tour-sindbad-desc': 'Tauche 25 Meter ab, um Korallenriffe und Meeresleben zu beobachten',
            'tour-sindbad-h1': '25 Meter Tiefe',
            'tour-sindbad-h2': 'Korallenriff-Blick',
            'tour-sindbad-h3': 'Meeresbeobachtung',
            'tour-sindbad-h4': 'Professioneller Guide',

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

            'tour-morning-safari-name': 'Familien-Safari am Morgen',
            'tour-morning-safari-time': 'Morgens Programm',
            'tour-morning-safari-desc': 'Familienabenteuer in der Wüste mit Buggys und Geländewagen',
            'tour-morning-safari-h1': 'Buggy-Fahrt',
            'tour-morning-safari-h2': 'Geländewagen-Erlebnis',
            'tour-morning-safari-h3': 'Wüsten-Erkundung',
            'tour-morning-safari-h4': 'Sicherheitsausrüstung',

            'tour-evening-safari-name': 'Familien-Safari am Abend',
            'tour-evening-safari-time': 'Abendprogramm',
            'tour-evening-safari-desc': 'Wüstensafari mit traditioneller Unterhaltung und Beduinen-Dinner unter Sternen',
            'tour-evening-safari-h1': 'Beduinen-Dinner',
            'tour-evening-safari-h2': 'Traditionelle Shows',
            'tour-evening-safari-h3': 'Sonnenuntergangsfahrt',
            'tour-evening-safari-h4': 'Volksmusik',

            'tour-speedboat-name': 'Speedboot Privat',
            'tour-speedboat-time': 'Flexible Zeiten',
            'tour-speedboat-desc': 'Privates Boot für 4-6 Gäste mit Inselhopping und Schnorchelspots',
            'tour-speedboat-h1': 'Privates Boot 4-6 Gäste',
            'tour-speedboat-h2': 'Zwei Inseln inklusive',
            'tour-speedboat-h3': 'Individuelle Route',
            'tour-speedboat-h4': 'Soundsystem',

            'tour-aquarium-name': 'Großes Aquarium',
            'tour-aquarium-time': '10:00 – 19:00 Uhr',
            'tour-aquarium-desc': 'Meerestierausstellung mit seltenen Korallen und Fischen',
            'tour-aquarium-h1': 'Meerestieraustellung',
            'tour-aquarium-h2': 'Seltene Fischarten',
            'tour-aquarium-h3': 'Interaktive Shows',
            'tour-aquarium-h4': 'Familienfreundlich',

            'tour-dolphin-show-name': 'Delfinshow',
            'tour-dolphin-show-time': '15:30 – 17:00 Uhr',
            'tour-dolphin-show-desc': 'Unterhaltungsshow mit trainierten Delfinen und Wassershows',
            'tour-dolphin-show-h1': 'Delfin-Darbietungen',
            'tour-dolphin-show-h2': 'Wasseraufführungen',
            'tour-dolphin-show-h3': 'Familienunterhaltung',
            'tour-dolphin-show-h4': 'Fotos mit Delfinen',

            // ================= Luxor Tours =================
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

            // Cairo Tours
            "tour-pyramids-name": "Pyramiden & Museum",
            "tour-pyramids-time": "Ganztägig",
            "tour-pyramids-desc": "Umfassendes Kairo-Erlebnis einschließlich der Pyramiden von Gizeh, der Sphinx und des Ägyptischen Museums mit fachkundigem Reiseleiter",
            "tour-pyramids-h1": "Pyramiden von Gizeh",
            "tour-pyramids-h2": "Große Sphinx",
            "tour-pyramids-h3": "Ägyptisches Museum",
            "tour-pyramids-h4": "Professioneller Reiseleiter",


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

            // ================= Page Meta =================
            "page-title": "Egypt Essence Tours – Откройте Больше, Почувствуйте Больше",
            "page-description": "Лучшие туры в Египте – Хургада, Луксор и Каир. Забронируйте сейчас!",

            // ================= Company Info - NEW TAGLINE =================
            "company-name": "Egypt Essence Tours",
            "company-tagline": "Откройте Больше, Почувствуйте Больше",

            // ================= Navigation =================
            "nav-home": "Главная",
            "nav-hurghada": "Туры Хургады",
            "nav-luxor": "Туры Луксора",
            "nav-cairo": "Туры Каира",
            "nav-about": "О Нас",
            "nav-contact": "Контакты",

            // ================= Hero Section =================
            "hero-title": "Откройте Магию Египта с Нами",
            "hero-subtitle": "Наслаждайтесь лучшими турами в Хургаде, Луксоре и Каире",
            "hero-cta": "Начните Ваше Путешествие",

            // ================= About Section =================
            "about-title": "О Нас",
            "about-subtitle": "Egypt Essence Tours, ваш идеальный спутник для изучения красоты Египта",
            "about-description": "Мы – компания, специализирующаяся на организации туров по самым красивым городам Египта. Мы предоставляем превосходный сервис и тщательно продуманные маршруты для лучшего впечатления.",
            "feature-service": "Отличное обслуживание клиентов",
            "feature-safety": "Безопасные и надежные туры",
            "feature-guides": "Профессиональные гиды",
            "feature-timing": "Точно и организованно",

            // ================= Sections titles =================
            "hurghada-title": "Туры Хургады",
            "hurghada-subtitle": "Насладитесь приключениями в Красном море",
            "luxor-title": "Туры Луксора",
            "luxor-subtitle": "Откройте Фараоновы сокровища Египта",
            "cairo-title": "Туры Каира",
            "cairo-subtitle": "Откройте чудеса Древнего Египта",

            // ================= Hurghada Tours =================
            "tour-hula-hula-name": "Тур на Остров Хула Хула",
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

            "tour-sindbad-name": "Подводная лодка Синдбад",
            "tour-sindbad-time": "11:00 & 13:00",
            "tour-sindbad-desc": "Погружение на 25 метров для просмотра кораллов и морской жизни",
            "tour-sindbad-h1": "Глубина 25 m",
            "tour-sindbad-h2": "Наблюдение коралловых рифов",
            "tour-sindbad-h3": "Наблюдение морской жизни",
            "tour-sindbad-h4": "Профессиональный гид",

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

            // Luxor Tours
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


            // Cairo Tours
            "tour-pyramids-name": "Пирамиды и Музей",
            "tour-pyramids-time": "Целый день",
            "tour-pyramids-desc": "Полный опыт по Каиру, включающий пирамиды Гизы, Сфинкса и Египетский музей с профессиональным гидом",
            "tour-pyramids-h1": "Пирамиды Гизы",
            "tour-pyramids-h2": "Великий Сфинкс",
            "tour-pyramids-h3": "Египетский музей",
            "tour-pyramids-h4": "Профессиональный гид",

            "book-now": "Забронировать",

            // ================= Contact Section =================
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

            // ================= Footer =================
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

            // Sections Titles
            "hurghada-title": "赫尔格达之旅",
            "hurghada-subtitle": "畅享红海的奇妙冒险",
            "luxor-title": "卢克索之旅",
            "luxor-subtitle": "探索埃及的法老宝藏",
            "cairo-title": "开罗之旅",
            "cairo-subtitle": "探索古埃及的奇观",

            // ================= Hurghada Toures  =================
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

            "tour-sindbad-name": "辛巴达潜艇",
            "tour-sindbad-time": "11:00 & 13:00",
            "tour-sindbad-desc": "潜入25米深观看珊瑚礁与海洋生物",
            "tour-sindbad-h1": "25米深度",
            "tour-sindbad-h2": "珊瑚礁观赏",
            "tour-sindbad-h3": "海洋生物观察",
            "tour-sindbad-h4": "专业导游",

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


            "tour-morning-safari-name": "家庭晨间冲沙",
            "tour-morning-safari-time": "上午项目",
            "tour-morning-safari-desc": "家庭沙漠冒险，包括沙滩越野车与蜘蛛车体验",
            "tour-morning-safari-h1": "沙滩越野车",
            "tour-morning-safari-h2": "蜘蛛车体验",
            "tour-morning-safari-h3": "沙漠探险",
            "tour-morning-safari-h4": "安全装备",

            "tour-evening-safari-name": "家庭夜间冲沙",
            "tour-evening-safari-time": "傍晚项目",
            "tour-evening-safari-desc": "沙漠冲沙，传统娱乐及贝都因人星空晚餐",
            "tour-evening-safari-h1": "贝都因晚餐",
            "tour-evening-safari-h2": "传统表演",
            "tour-evening-safari-h3": "日落之旅",
            "tour-evening-safari-h4": "民俗音乐",


            "tour-speedboat-name": "私人快艇",
            "tour-speedboat-time": "时间灵活",
            "tour-speedboat-desc": "4–6人私人游艇体验，包含跳岛游及专属浮潜点",
            "tour-speedboat-h1": "4–6人专属游艇",
            "tour-speedboat-h2": "包含两座岛屿",
            "tour-speedboat-h3": "定制路线",
            "tour-speedboat-h4": "音响系统",


            "tour-aquarium-name": "大型水族馆",
            "tour-aquarium-time": "10:00–19:00",
            "tour-aquarium-desc": "珍稀鱼类与珊瑚海洋展示",
            "tour-aquarium-h1": "海洋展示",
            "tour-aquarium-h2": "珍稀鱼种",
            "tour-aquarium-h3": "互动表演",
            "tour-aquarium-h4": "适合家庭",

            "tour-dolphin-show-name": "海豚表演",
            "tour-dolphin-show-time": "15:30–17:00",
            "tour-dolphin-show-desc": "驯化海豚与精彩水上表演",
            "tour-dolphin-show-h1": "海豚训练秀",
            "tour-dolphin-show-h2": "水上演出",
            "tour-dolphin-show-h3": "家庭娱乐",
            "tour-dolphin-show-h4": "与海豚合影",


            "tour-paradise-name": "天堂岛",
            "tour-paradise-time": "09:00–17:00",
            "tour-paradise-desc": "私人岛屿，拥有绝美海滩与豪华设施",
            "tour-paradise-h1": "专属海滩",
            "tour-paradise-h2": "水上运动",
            "tour-paradise-h3": "自助餐",
            "tour-paradise-h4": "贵宾服务",

            "tour-orange-bay-name": "橙色海湾",
            "tour-orange-bay-time": "08:00–16:00",
            "tour-orange-bay-desc": "碧水白沙美岛，配套娱乐设施",
            "tour-orange-bay-h1": "专属海滩",
            "tour-orange-bay-h2": "浮潜",
            "tour-orange-bay-h3": "海鲜午餐",
            "tour-orange-bay-h4": "水上运动",

            "tour-mahmya-name": "马赫米亚岛",
            "tour-mahmya-time": "08:30–16:30",
            "tour-mahmya-desc": "自然保护区，拥有原始海滩、清澈海水及高端设施",
            "tour-mahmya-h1": "自然保护区",
            "tour-mahmya-h2": "私人海滩",
            "tour-mahmya-h3": "高级餐厅",
            "tour-mahmya-h4": "休闲区",


            // ================= Luxor Toures =================
            "luxor-title": "卢克索之旅",
            "luxor-subtitle": "探索埃及法老宝藏",
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


            // ================= Cairo Toures =================
            "cairo-title": "开罗之旅",
            "cairo-subtitle": "探索古埃及奇迹",
            "tour-pyramids-name": "金字塔与博物馆",
            "tour-pyramids-time": "全天",
            "tour-pyramids-desc": "金字塔、狮身人面像与埃及博物馆导览",
            "tour-pyramids-h1": "吉萨金字塔",
            "tour-pyramids-h2": "狮身人面像",
            "tour-pyramids-h3": "埃及博物馆",
            "tour-pyramids-h4": "专业导游",

            "book-now": "立即预订",

            // ================= Contact Section =================
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

            // ================= Footer =================
            "footer-links": "快速链接",
            "footer-social": "关注我们",
            "footer-copyright": "© 2025 Egypt Essence Tours.版权所有",

            // WhatsApp Messages
            "whatsapp-general": "您好！我想咨询您的旅游行程",
            "whatsapp-contact-form": "您好！我叫{name}，电子邮件：{email}，电话：{phone}。留言：{message}"



        },

        cs: {

            // ================= Page Meta =================
            "page-title": "Egypt Essence Tours – Objevte Více, Pociťte Více",
            "page-description": "Nejlepší výlety v Egyptě – Hurghada, Luxor a Káhira. Rezervujte nyní!",

            // ================= Company Info - NEW TAGLINE =================
            "company-name": "Egypt Essence Tours",
            "company-tagline": "Objevte Více, Pociťte Více",

            // ================= Navigation =================
            "nav-home": "Domů",
            "nav-hurghada": "Výlety Hurghady",
            "nav-luxor": "Výlety Luxoru",
            "nav-cairo": "Výlety Káhiry",
            "nav-about": "O Nás",
            "nav-contact": "Kontakt",

            // ================= Hero Section =================
            "hero-title": "Objevte Kouzlo Egypta s Námi",
            "hero-subtitle": "Užijte si nejkrásnější výlety v Hurgadě, Luxoru a Káhiře",
            "hero-cta": "Začněte Cestu Nyní",

            // ================= About Section =================
            "about-title": "O Nás",
            "about-subtitle": "Egypt Essence Tours, váš ideální společník k objevování krás Egypta",
            "about-description": "Jsme specializovaná společnost organizující výlety po nejkrásnějších městech Egypta. Poskytujeme vynikající služby a pečlivě naplánované trasy pro ten nejlepší zážitek.",
            "feature-service": "Vynikající zákaznický servis",
            "feature-safety": "Bezpečné a zajištěné výlety",
            "feature-guides": "Profesionální průvodci",
            "feature-timing": "Přesné a organizované",

            // Sections Titles
            "hurghada-title": "Okruhy Hurghada",
            "hurghada-subtitle": "Užijte si úžasná dobrodružství v Rudém moři",
            "luxor-title": "Okruhy Luxor",
            "luxor-subtitle": "Objevte egyptské faraonské poklady",
            "cairo-title": "Okruhy Káhira",
            "cairo-subtitle": "Objevte divy starověkého Egypta",

            // ================= Hurghada Tours =================
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

            "tour-sindbad-name": "Ponorka Sindbad",
            "tour-sindbad-time": "11:00 & 13:00",
            "tour-sindbad-desc": "Ponor do hloubky 25 metrů pro pozorování korálových útesů a mořského života přes velká okna",
            "tour-sindbad-h1": "Hloubka 25 metrů",
            "tour-sindbad-h2": "Pozorování korálových útesů",
            "tour-sindbad-h3": "Pozorování mořského života",
            "tour-sindbad-h4": "Profesionální průvodce",

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

            "tour-morning-safari-name": "Rodinné ranní safari",
            "tour-morning-safari-time": "Ranní program",
            "tour-morning-safari-desc": "Rodinné dobrodružství na poušti s buginami a pískovými vozidly",
            "tour-morning-safari-h1": "Jízda na bugině",
            "tour-morning-safari-h2": "Zážitek se spider car",
            "tour-morning-safari-h3": "Objevování pouště",
            "tour-morning-safari-h4": "Bezpečnostní vybavení",

            "tour-evening-safari-name": "Rodinné večerní safari",
            "tour-evening-safari-time": "Večerní program",
            "tour-evening-safari-desc": "Pouštní safari s tradiční zábavou a beduínskou večeří pod hvězdami",
            "tour-evening-safari-h1": "Beduínská večeře",
            "tour-evening-safari-h2": "Tradiční show",
            "tour-evening-safari-h3": "Výlet při západu slunce",
            "tour-evening-safari-h4": "Lidová hudba",

            "tour-speedboat-name": "Soukromý rychlý člun",
            "tour-speedboat-time": "Flexibilní čas",
            "tour-speedboat-desc": "Soukromý zážitek pro 4–6 hostů s návštěvou ostrovů a šnorchlovacími místy",
            "tour-speedboat-h1": "Soukromý člun pro 4–6 osob",
            "tour-speedboat-h2": "Dva ostrovy v ceně",
            "tour-speedboat-h3": "Vlastní trasa",
            "tour-speedboat-h4": "Zvukový systém",

            "tour-aquarium-name": "Velké akvárium",
            "tour-aquarium-time": "10:00–19:00",
            "tour-aquarium-desc": "Expozice mořského života s vzácnými druhy ryb a korálů",
            "tour-aquarium-h1": "Výstava mořského života",
            "tour-aquarium-h2": "Vzácné druhy ryb",
            "tour-aquarium-h3": "Interaktivní show",
            "tour-aquarium-h4": "Vhodné pro rodiny",

            "tour-dolphin-show-name": "Delfíní show",
            "tour-dolphin-show-time": "15:30–17:00",
            "tour-dolphin-show-desc": "Zábavné vystoupení s delfíny a vodními show",
            "tour-dolphin-show-h1": "Drezúrovaní delfíni",
            "tour-dolphin-show-h2": "Vodní výkony",
            "tour-dolphin-show-h3": "Rodinná zábava",
            "tour-dolphin-show-h4": "Foto s delfíny",

            "tour-paradise-name": "Ostrov Ráj",
            "tour-paradise-time": "9:00–17:00",
            "tour-paradise-desc": "Soukromý ostrov s nádhernými plážemi a luxusními službami pro relaxaci",
            "tour-paradise-h1": "Soukromá pláž",
            "tour-paradise-h2": "Vodní sporty",
            "tour-paradise-h3": "Otevřený bufet",
            "tour-paradise-h4": "VIP služby",

            "tour-orange-bay-name": "Orange Bay",
            "tour-orange-bay-time": "8:00–16:00",
            "tour-orange-bay-desc": "Krásný ostrov s tyrkysovou vodou, bílým pískem a zázemím pro rekreaci",
            "tour-orange-bay-h1": "Soukromá pláž",
            "tour-orange-bay-h2": "Šnorchlování",
            "tour-orange-bay-h3": "Oběd s mořskými plody",
            "tour-orange-bay-h4": "Vodní sporty",

            "tour-mahmya-name": "Ostrov Mahmya",
            "tour-mahmya-time": "8:30–16:30",
            "tour-mahmya-desc": "Přírodní rezervace s nedotčenými plážemi, čistou vodou a prvotřídním vybavením",
            "tour-mahmya-h1": "Přírodní rezervace",
            "tour-mahmya-h2": "Soukromá pláž",
            "tour-mahmya-h3": "Luxusní restaurace",
            "tour-mahmya-h4": "Relax zóny",

            // Luxor Tours
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

            // Cairo Tours
            "tour-pyramids-name": "Pyramidy a muzeum",
            "tour-pyramids-time": "Celodenní výlet",
            "tour-pyramids-desc": "Kompletní zážitek z Káhiry – pyramidy v Gíze, Sfinga a Egyptské muzeum s odborným průvodcem",
            "tour-pyramids-h1": "Pyramidy v Gíze",
            "tour-pyramids-h2": "Velká Sfinga",
            "tour-pyramids-h3": "Egyptské muzeum",
            "tour-pyramids-h4": "Profesionální průvodce",

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

            // ================= Page Meta =================
            "page-title": "Egypt Essence Tours – Explorez Plus, Ressentez Plus",
            "page-description": "Meilleures excursions en Égypte – Hurghada, Louxor et Le Caire. Réservez maintenant !",

            // ================= Company Info - NEW TAGLINE =================
            "company-name": "Egypt Essence Tours",
            "company-tagline": "Explorez Plus, Ressentez Plus",

            // ================= Navigation =================
            "nav-home": "Accueil",
            "nav-hurghada": "Circuits Hurghada",
            "nav-luxor": "Circuits Louxor",
            "nav-cairo": "Circuits Le Caire",
            "nav-about": "À Propos",
            "nav-contact": "Contact",

            // ================= Hero Section =================
            "hero-title": "Découvrez la Magie de l'Égypte avec Nous",
            "hero-subtitle": "Profitez des plus belles excursions à Hurghada, Louxor et Le Caire",
            "hero-cta": "Commencez Votre Aventure",

            // ================= About Section =================
            "about-title": "À Propos",
            "about-subtitle": "Egypt Essence Tours, votre compagnon idéal pour explorer la beauté de l'Égypte",
            "about-description": "Nous sommes une entreprise spécialisée dans l'organisation d'excursions dans les plus belles villes d'Égypte. Nous offrons un service d'excellence et des itinéraires soigneusement planifiés pour une expérience inoubliable.",
            "feature-service": "Service Client Exemplaire",
            "feature-safety": "Excursions Sûres et Sécurisées",
            "feature-guides": "Guides Professionnels",
            "feature-timing": "Ponctuel et Organisé",


            // Sections Titles
            "hurghada-title": "Excursions à Hurghada",
            "hurghada-subtitle": "Profitez d’aventures incroyables en mer Rouge",
            "luxor-title": "Excursions à Louxor",
            "luxor-subtitle": "Découvrez les trésors pharaoniques de l’Égypte",
            "cairo-title": "Excursions au Caire",
            "cairo-subtitle": "Découvrez les merveilles de l’Égypte ancienne",

            // ================= Hurghada Tours =================
            "tour-hula-hula-name": "Excursion à l’Île Hula Hula",
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

            "tour-sindbad-name": "Sous-marin Sindbad",
            "tour-sindbad-time": "11h00 & 13h00",
            "tour-sindbad-desc": "Plongez à 25 mètres de profondeur pour observer les récifs coralliens et la vie marine à travers de grandes fenêtres",
            "tour-sindbad-h1": "Profondeur de 25 mètres",
            "tour-sindbad-h2": "Observation des récifs coralliens",
            "tour-sindbad-h3": "Observation de la vie marine",
            "tour-sindbad-h4": "Guide professionnel",

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

            "tour-morning-safari-name": "Safari matinal en famille",
            "tour-morning-safari-time": "Programme du matin",
            "tour-morning-safari-desc": "Aventure familiale dans le désert avec buggys et voitures spider",
            "tour-morning-safari-h1": "Conduite de buggy sur la plage",
            "tour-morning-safari-h2": "Expérience en voiture spider",
            "tour-morning-safari-h3": "Exploration du désert",
            "tour-morning-safari-h4": "Équipement de sécurité",

            "tour-evening-safari-name": "Safari du soir en famille",
            "tour-evening-safari-time": "Programme du soir",
            "tour-evening-safari-desc": "Safari dans le désert avec spectacles traditionnels et dîner bédouin sous les étoiles",
            "tour-evening-safari-h1": "Dîner bédouin",
            "tour-evening-safari-h2": "Spectacles traditionnels",
            "tour-evening-safari-h3": "Excursion au coucher du soleil",
            "tour-evening-safari-h4": "Musique folklorique",

            "tour-speedboat-name": "Bateau rapide privé",
            "tour-speedboat-time": "Horaires flexibles",
            "tour-speedboat-desc": "Expérience privée pour 4 à 6 personnes avec visite d’îles et spots de plongée personnalisés",
            "tour-speedboat-h1": "Bateau privé pour 4–6 personnes",
            "tour-speedboat-h2": "Deux îles incluses",
            "tour-speedboat-h3": "Itinéraire personnalisé",
            "tour-speedboat-h4": "Système audio",

            "tour-aquarium-name": "Grand Aquarium",
            "tour-aquarium-time": "10h00 – 19h00",
            "tour-aquarium-desc": "Exposition marine avec des espèces rares de poissons et de coraux",
            "tour-aquarium-h1": "Exposition de la vie marine",
            "tour-aquarium-h2": "Espèces rares de poissons",
            "tour-aquarium-h3": "Spectacles interactifs",
            "tour-aquarium-h4": "Adapté aux familles",

            "tour-dolphin-show-name": "Spectacle de dauphins",
            "tour-dolphin-show-time": "15h30 – 17h00",
            "tour-dolphin-show-desc": "Spectacle marin avec des dauphins dressés et des performances aquatiques passionnantes",
            "tour-dolphin-show-h1": "Spectacles de dauphins dressés",
            "tour-dolphin-show-h2": "Performances aquatiques",
            "tour-dolphin-show-h3": "Divertissement familial",
            "tour-dolphin-show-h4": "Photo avec les dauphins",

            "tour-paradise-name": "Île Paradis",
            "tour-paradise-time": "9h00 – 17h00",
            "tour-paradise-desc": "Île privée avec plages magnifiques et installations luxueuses pour la détente",
            "tour-paradise-h1": "Plage privée",
            "tour-paradise-h2": "Sports nautiques",
            "tour-paradise-h3": "Buffet ouvert",
            "tour-paradise-h4": "Services VIP",

            "tour-orange-bay-name": "Orange Bay",
            "tour-orange-bay-time": "8h00 – 16h00",
            "tour-orange-bay-desc": "Belle île aux eaux turquoise, sable blanc et installations de loisirs",
            "tour-orange-bay-h1": "Plage privée",
            "tour-orange-bay-h2": "Snorkeling",
            "tour-orange-bay-h3": "Déjeuner fruits de mer",
            "tour-orange-bay-h4": "Sports nautiques",

            "tour-mahmya-name": "Île Mahmya",
            "tour-mahmya-time": "8h30 – 16h30",
            "tour-mahmya-desc": "Réserve naturelle avec plages préservées, eaux cristallines et installations haut de gamme",
            "tour-mahmya-h1": "Réserve naturelle",
            "tour-mahmya-h2": "Plage privée",
            "tour-mahmya-h3": "Restaurant gastronomique",
            "tour-mahmya-h4": "Espaces de détente",

            // Luxor Tours
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

            // Cairo Tours
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

            // Section Titles
            'hurghada-title': 'Wycieczki Hurghada',
            'hurghada-subtitle': 'Ciesz się niesamowitymi przygodami na Morzu Czerwonym',
            'luxor-title': 'Wycieczki Luxor',
            'luxor-subtitle': 'Odkryj faraońskie skarby Egiptu',
            'cairo-title': 'Wycieczki Kair',
            'cairo-subtitle': 'Odkryj cuda starożytnego Egiptu',

            // Hurghada Tours (10 tours)
            'tour-hula-hula-name': 'Wyspa Hula Hula',
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

            'tour-sindbad-name': 'Łódź podwodna Sindbad',
            'tour-sindbad-time': '11:00 i 13:00',
            'tour-sindbad-desc': 'Zanurz się na 25 metrów, aby obserwować rafy koralowe i życie morskie przez duże okna',
            'tour-sindbad-h1': 'Głębokość 25 metrów',
            'tour-sindbad-h2': 'Widok na rafy koralowe',
            'tour-sindbad-h3': 'Obserwacja życia morskiego',
            'tour-sindbad-h4': 'Profesjonalny przewodnik',

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

            'tour-morning-safari-name': 'Poranne safari rodzinne',
            'tour-morning-safari-time': 'Program poranny',
            'tour-morning-safari-desc': 'Rodzinna przygoda na pustyni z buggy i pojazdami terenowymi',
            'tour-morning-safari-h1': 'Przejażdżka buggy',
            'tour-morning-safari-h2': 'Jazda pojazdem terenowym',
            'tour-morning-safari-h3': 'Odkrywanie pustyni',
            'tour-morning-safari-h4': 'Sprzęt bezpieczeństwa',

            'tour-evening-safari-name': 'Wieczorne safari rodzinne',
            'tour-evening-safari-time': 'Program wieczorny',
            'tour-evening-safari-desc': 'Safari z tradycyjną rozrywką i beduińskim obiadem pod gwiazdami',
            'tour-evening-safari-h1': 'Beduiński obiad',
            'tour-evening-safari-h2': 'Tradycyjne pokazy',
            'tour-evening-safari-h3': 'Wycieczka na zachód słońca',
            'tour-evening-safari-h4': 'Muzyka ludowa',

            'tour-speedboat-name': 'Prywatny speedboat',
            'tour-speedboat-time': 'Elastyczne godziny',
            'tour-speedboat-desc': 'Prywatna łódź dla 4-6 gości z przeskokami między wyspami i wyznaczonymi miejscami do snorkelingu',
            'tour-speedboat-h1': 'Prywatna łódź 4-6 gości',
            'tour-speedboat-h2': 'Dwie wyspy w cenie',
            'tour-speedboat-h3': 'Trasa na zamówienie',
            'tour-speedboat-h4': 'System nagłośnienia',

            'tour-aquarium-name': 'Wielkie Akwarium',
            'tour-aquarium-time': '10:00 – 19:00',
            'tour-aquarium-desc': 'Wystawa życia morskiego z rzadkimi gatunkami ryb i koralowcami',
            'tour-aquarium-h1': 'Wystawa życia morskiego',
            'tour-aquarium-h2': 'Rzadkie gatunki ryb',
            'tour-aquarium-h3': 'Interaktywne pokazy',
            'tour-aquarium-h4': 'Przyjazne rodzinom',

            'tour-dolphin-show-name': 'Pokaz delfinów',
            'tour-dolphin-show-time': '15:30 – 17:00',
            'tour-dolphin-show-desc': 'Atrakcja z tresowanymi delfinami i pokazami wodnymi',
            'tour-dolphin-show-h1': 'Pokazy tresowanych delfinów',
            'tour-dolphin-show-h2': 'Wodne pokazy',
            'tour-dolphin-show-h3': 'Rozrywka rodzinna',
            'tour-dolphin-show-h4': 'Zdjęcia z delfinami',

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
        }

        // Default to Arabic
        console.log('🔄 No supported language detected, defaulting to Arabic');
        return 'ar';
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