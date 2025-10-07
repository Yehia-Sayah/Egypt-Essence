// Egypt Essence Tours - Complete Multilingual Interactive Application
// Supporting 7 languages with enhanced automatic detection and updated tagline "Explore More Feel More"

document.addEventListener('DOMContentLoaded', function() {
    
    // Complete Multilingual Content Database - All 7 languages with new tagline
    const translations = {
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
            'tour-evening-safari-h3': 'رحلة غروب',
            'tour-evening-safari-h4': 'موسيقى شعبية',
            
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
            
            // Sections
            'hurghada-title': 'Hurghada Tours',
            'hurghada-subtitle': 'Enjoy amazing Red Sea adventures',
            'luxor-title': 'Luxor Tours',
            'luxor-subtitle': 'Discover Egypt\'s Pharaonic treasures',
            'cairo-title': 'Cairo Tours',
            'cairo-subtitle': 'Discover the wonders of ancient Egypt',
            
            // Tours
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
            // Page Meta
            'page-title': 'Egypt Essence Tours - Erkunde Mehr Fühle Mehr',
            'page-description': 'Beste Touren in Ägypten - Hurghada, Luxor und Kairo. Buchen Sie jetzt Ihre Reise!',
            
            // Company Info - NEW TAGLINE
            'company-name': 'Egypt Essence Tours',
            'company-tagline': 'Erkunde Mehr Fühle Mehr',
            
            // Navigation
            'nav-home': 'Startseite',
            'nav-hurghada': 'Hurghada Touren',
            'nav-luxor': 'Luxor Touren',
            'nav-cairo': 'Kairo Touren',
            'nav-about': 'Über Uns',
            'nav-contact': 'Kontakt',
            
            // Hero Section
            'hero-title': 'Entdecke Ägyptens Magie mit uns',
            'hero-subtitle': 'Genieße die schönsten Touren in Hurghada, Luxor und Kairo',
            'hero-cta': 'Starte deine Reise jetzt',
            
            // About Section
            'about-title': 'Über Uns',
            'about-subtitle': 'Egypt Essence Tours, Ihr perfekter Begleiter zur Erkundung Ägyptens Schönheit',
            'about-description': 'Wir sind ein spezialisiertes Unternehmen, das Touren in Ägyptens schönsten Städten organisiert. Wir bieten exzellente Dienstleistungen und sorgfältig organisierte Reisen, um Ihnen die bestmögliche Touristen erfahrung zu gewährleisten.',
            'feature-service': 'Exzellenter Kundenservice',
            'feature-safety': 'Sichere Touren',
            'feature-guides': 'Professionelle Reiseführer',
            'feature-timing': 'Pünktlich und organisiert',
            
            // Sections
            'hurghada-title': 'Hurghada Touren',
            'hurghada-subtitle': 'Genieße erstaunliche Rotes Meer Abenteuer',
            'luxor-title': 'Luxor Touren',
            'luxor-subtitle': 'Entdecke Ägyptens pharaonische Schätze',
            'cairo-title': 'Kairo Touren',
            'cairo-subtitle': 'Entdecke die Wunder des alten Ägyptens',
            
            // Tours
            'tour-hula-hula-name': 'Hula Hula Inselausflug',
            'tour-hula-hula-time': '8:30 - 16:30 Uhr',
            'tour-hula-hula-desc': 'Erleben Sie die ägyptischen Malediven mit kristallklarem Wasser und goldenen Stränden mit professionellen Fotospots',
            'tour-hula-hula-h1': 'Zwei Schnorchelstopps',
            'tour-hula-hula-h2': 'Inselerkundung',
            'tour-hula-hula-h3': 'Vollständiges Mittagessen',
            'tour-hula-hula-h4': 'Schwimmwesten verfügbar',
            
            'book-now': 'Jetzt Buchen',
            
            // Contact Section
            'contact-title': 'Kontaktieren Sie uns',
            'contact-subtitle': 'Wir helfen Ihnen bei der Planung Ihrer Traumreise',
            'contact-whatsapp': 'WhatsApp',
            'contact-email': 'E-Mail',
            'contact-phone': 'Telefon',
            'form-name': 'Ihr vollständiger Name',
            'form-email': 'E-Mail-Adresse',
            'form-phone': 'Telefonnummer',
            'form-message': 'Ihre Nachricht oder Anfrage',
            'form-submit': 'Nachricht senden',
            
            // Footer
            'footer-links': 'Schnelle Links',
            'footer-social': 'Folgen Sie uns',
            'footer-copyright': '© 2025 Egypt Essence Tours. Alle Rechte vorbehalten.',
            
            // WhatsApp Messages
            'whatsapp-general': 'Hallo! Ich möchte mich über Ihre Touren informieren',
            'whatsapp-contact-form': 'Hallo! Mein Name ist {name}, E-Mail: {email}, Telefon: {phone}. Nachricht: {message}'
        },
        
        ru: {
            // Page Meta
            'page-title': 'Egypt Essence Tours - Исследуйте Больше Чувствуйте Больше',
            'page-description': 'Лучшие туры в Египте - Хургада, Луксор и Каир. Забронируйте поездку сейчас!',
            
            // Company Info - NEW TAGLINE
            'company-name': 'Egypt Essence Tours',
            'company-tagline': 'Исследуйте Больше Чувствуйте Больше',
            
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
            'about-subtitle': 'Egypt Essence Tours, ваш идеальный спутник для изучения красоты Египта',
            'about-description': 'Мы специализированная компания, организующая туры в самые красивые города Египта. Мы предоставляем отличные услуги и тщательно организованные поездки, чтобы обеспечить вам лучший возможный туристический опыт.',
            'feature-service': 'Отличное обслуживание клиентов',
            'feature-safety': 'Безопасные туры',
            'feature-guides': 'Профессиональные гиды',
            'feature-timing': 'Пунктуально и организованно',
            
            // Sections
            'hurghada-title': 'Туры в Хургаду',
            'hurghada-subtitle': 'Наслаждайтесь удивительными приключениями Красного моря',
            'luxor-title': 'Туры в Луксор',
            'luxor-subtitle': 'Откройте фараонские сокровища Египта',
            'cairo-title': 'Туры в Каир',
            'cairo-subtitle': 'Откройте чудеса древнего Египта',
            
            'book-now': 'Забронировать сейчас',
            
            // Contact Section
            'contact-title': 'Свяжитесь с нами',
            'contact-subtitle': 'Мы здесь, чтобы помочь вам спланировать поездку мечты',
            'contact-whatsapp': 'WhatsApp',
            'contact-email': 'Электронная почта',
            'contact-phone': 'Телефон',
            'form-name': 'Ваше полное имя',
            'form-email': 'Адрес электронной почты',
            'form-phone': 'Номер телефона',
            'form-message': 'Ваше сообщение или запрос',
            'form-submit': 'Отправить сообщение',
            
            // Footer
            'footer-links': 'Быстрые ссылки',
            'footer-social': 'Следуйте за нами',
            'footer-copyright': '© 2025 Egypt Essence Tours. Все права защищены.',
            
            // WhatsApp Messages
            'whatsapp-general': 'Привет! Я хотел бы узнать о ваших турах',
            'whatsapp-contact-form': 'Привет! Меня зовут {name}, электронная почта: {email}, телефон: {phone}. Сообщение: {message}'
        },
        
        zh: {
            // Page Meta
            'page-title': 'Egypt Essence Tours - 探索更多 感受更多',
            'page-description': '埃及最佳旅游 - 赫尔格达、卢克索和开罗。立即预订您的旅行！',
            
            // Company Info - NEW TAGLINE
            'company-name': 'Egypt Essence Tours',
            'company-tagline': '探索更多 感受更多',
            
            // Navigation
            'nav-home': '首页',
            'nav-hurghada': '赫尔格达旅游',
            'nav-luxor': '卢克索旅游',
            'nav-cairo': '开罗旅游',
            'nav-about': '关于我们',
            'nav-contact': '联系我们',
            
            // Hero Section
            'hero-title': '与我们一起探索埃及的魔力',
            'hero-subtitle': '享受在赫尔格达、卢克索和开罗最美丽的旅游',
            'hero-cta': '立即开始您的旅程',
            
            // About Section
            'about-title': '关于我们',
            'about-subtitle': 'Egypt Essence Tours，您探索埃及美景的完美伴侣',
            'about-description': '我们是一家专门在埃及最美丽城市组织旅游的公司。我们提供优质服务和精心组织的旅行，确保您获得最佳的旅游体验。',
            'feature-service': '优质客户服务',
            'feature-safety': '安全可靠的旅游',
            'feature-guides': '专业导游',
            'feature-timing': '准时有序',
            
            // Sections
            'hurghada-title': '赫尔格达旅游',
            'hurghada-subtitle': '享受令人惊叹的红海冒险',
            'luxor-title': '卢克索旅游',
            'luxor-subtitle': '发现埃及的法老宝藏',
            'cairo-title': '开罗旅游',
            'cairo-subtitle': '发现古埃及的奇迹',
            
            'book-now': '立即预订',
            
            // Contact Section
            'contact-title': '联系我们',
            'contact-subtitle': '我们在这里帮助您计划梦想之旅',
            'contact-whatsapp': 'WhatsApp',
            'contact-email': '电子邮件',
            'contact-phone': '电话',
            'form-name': '您的全名',
            'form-email': '电子邮件地址',
            'form-phone': '电话号码',
            'form-message': '您的信息或询问',
            'form-submit': '发送信息',
            
            // Footer
            'footer-links': '快速链接',
            'footer-social': '关注我们',
            'footer-copyright': '© 2025 Egypt Essence Tours。版权所有。',
            
            // WhatsApp Messages
            'whatsapp-general': '您好！我想咨询您的旅游项目',
            'whatsapp-contact-form': '您好！我的名字是{name}，邮箱：{email}，电话：{phone}。信息：{message}'
        },
        
        cs: {
            // Page Meta
            'page-title': 'Egypt Essence Tours - Prozkoumejte Více Pocítíte Více',
            'page-description': 'Nejlepší výlety v Egyptě - Hurghada, Luxor a Káhira. Rezervujte si výlet hned teď!',
            
            // Company Info - NEW TAGLINE
            'company-name': 'Egypt Essence Tours',
            'company-tagline': 'Prozkoumejte Více Pocítíte Více',
            
            // Navigation
            'nav-home': 'Domů',
            'nav-hurghada': 'Výlety do Hurghady',
            'nav-luxor': 'Výlety do Luxoru',
            'nav-cairo': 'Výlety do Káhiry',
            'nav-about': 'O nás',
            'nav-contact': 'Kontakt',
            
            // Hero Section
            'hero-title': 'Objevte kouzlo Egypta s námi',
            'hero-subtitle': 'Užijte si nejkrásnější výlety v Hurghadě, Luxoru a Káhiře',
            'hero-cta': 'Začněte svou cestu nyní',
            
            // About Section
            'about-title': 'O nás',
            'about-subtitle': 'Egypt Essence Tours, váš dokonalý společník pro objevování krásy Egypta',
            'about-description': 'Jsme specializovaná společnost organizující výlety v nejkrásnějších městech Egypta. Poskytujeme vynikající služby a pečlivě organizované výlety, abychom vám zajistili nejlepší možný turistický zážitek.',
            'feature-service': 'Vynikající zákaznický servis',
            'feature-safety': 'Bezpečné výlety',
            'feature-guides': 'Profesionální průvodci',
            'feature-timing': 'Přesné a organizované',
            
            // Sections
            'hurghada-title': 'Výlety do Hurghady',
            'hurghada-subtitle': 'Užijte si úžasná dobrodružství Rudého moře',
            'luxor-title': 'Výlety do Luxoru',
            'luxor-subtitle': 'Objevte faraónské poklady Egypta',
            'cairo-title': 'Výlety do Káhiry',
            'cairo-subtitle': 'Objevte divy starověkého Egypta',
            
            'book-now': 'Rezervovat nyní',
            
            // Contact Section
            'contact-title': 'Kontaktujte nás',
            'contact-subtitle': 'Jsme tu, abychom vám pomohli naplánovat vaši vysněnou cestu',
            'contact-whatsapp': 'WhatsApp',
            'contact-email': 'E-mail',
            'contact-phone': 'Telefon',
            'form-name': 'Vaše celé jméno',
            'form-email': 'E-mailová adresa',
            'form-phone': 'Telefonní číslo',
            'form-message': 'Vaše zpráva nebo dotaz',
            'form-submit': 'Odeslat zprávu',
            
            // Footer
            'footer-links': 'Rychlé odkazy',
            'footer-social': 'Sledujte nás',
            'footer-copyright': '© 2025 Egypt Essence Tours. Všechna práva vyhrazena.',
            
            // WhatsApp Messages
            'whatsapp-general': 'Ahoj! Chtěl bych se zeptat na vaše výlety',
            'whatsapp-contact-form': 'Ahoj! Jmenuji se {name}, e-mail: {email}, telefon: {phone}. Zpráva: {message}'
        },
        
        fr: {
            // Page Meta
            'page-title': 'Egypt Essence Tours - Explorez Plus Ressentez Plus',
            'page-description': 'Meilleurs circuits en Égypte - Hurghada, Luxor et Le Caire. Réservez votre voyage maintenant!',
            
            // Company Info - NEW TAGLINE
            'company-name': 'Egypt Essence Tours',
            'company-tagline': 'Explorez Plus Ressentez Plus',
            
            // Navigation
            'nav-home': 'Accueil',
            'nav-hurghada': 'Circuits Hurghada',
            'nav-luxor': 'Circuits Luxor',
            'nav-cairo': 'Circuits Le Caire',
            'nav-about': 'À propos',
            'nav-contact': 'Contact',
            
            // Hero Section
            'hero-title': 'Découvrez la magie de l\'Égypte avec nous',
            'hero-subtitle': 'Profitez des plus beaux circuits à Hurghada, Luxor et Le Caire',
            'hero-cta': 'Commencez votre voyage maintenant',
            
            // About Section
            'about-title': 'À propos de nous',
            'about-subtitle': 'Egypt Essence Tours, votre compagnon parfait pour explorer la beauté de l\'Égypte',
            'about-description': 'Nous sommes une entreprise spécialisée dans l\'organisation de circuits dans les plus belles villes d\'Égypte. Nous fournissons d\'excellents services et des voyages soigneusement organisés pour vous assurer la meilleure expérience touristique possible.',
            'feature-service': 'Excellent service client',
            'feature-safety': 'Circuits sûrs et sécurisés',
            'feature-guides': 'Guides touristiques professionnels',
            'feature-timing': 'Ponctuel et organisé',
            
            // Sections
            'hurghada-title': 'Circuits Hurghada',
            'hurghada-subtitle': 'Profitez d\'aventures incroyables en mer Rouge',
            'luxor-title': 'Circuits Luxor',
            'luxor-subtitle': 'Découvrez les trésors pharaoniques de l\'Égypte',
            'cairo-title': 'Circuits Le Caire',
            'cairo-subtitle': 'Découvrez les merveilles de l\'Égypte ancienne',
            
            'book-now': 'Réserver maintenant',
            
            // Contact Section
            'contact-title': 'Contactez-nous',
            'contact-subtitle': 'Nous sommes là pour vous aider à planifier le voyage de vos rêves',
            'contact-whatsapp': 'WhatsApp',
            'contact-email': 'E-mail',
            'contact-phone': 'Téléphone',
            'form-name': 'Votre nom complet',
            'form-email': 'Adresse e-mail',
            'form-phone': 'Numéro de téléphone',
            'form-message': 'Votre message ou demande',
            'form-submit': 'Envoyer le message',
            
            // Footer
            'footer-links': 'Liens rapides',
            'footer-social': 'Suivez-nous',
            'footer-copyright': '© 2025 Egypt Essence Tours. Tous droits réservés.',
            
            // WhatsApp Messages
            'whatsapp-general': 'Bonjour! J\'aimerais me renseigner sur vos circuits',
            'whatsapp-contact-form': 'Bonjour! Je m\'appelle {name}, e-mail: {email}, téléphone: {phone}. Message: {message}'
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
        fr: { dir: 'ltr', name: 'Français', flag: '🇫🇷' }
    };

    let currentLanguage = 'ar';
    const whatsappNumber = '201009531706'; // Updated WhatsApp number

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
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Update language switcher current display
        const currentLangBtn = document.getElementById('currentLang');
        if (currentLangBtn) {
            const flagSpan = currentLangBtn.querySelector('.flag');
            const nameSpan = currentLangBtn.querySelector('.lang-name');
            if (flagSpan) flagSpan.textContent = config.flag;
            if (nameSpan) nameSpan.textContent = config.name;
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
            languageBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                languageDropdown.classList.toggle('active');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
                    languageDropdown.classList.remove('active');
                }
            });

            // Language selection
            const langLinks = languageDropdown.querySelectorAll('a');
            langLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const selectedLang = this.getAttribute('data-lang');
                    
                    // Smooth transition effect
                    document.body.classList.add('fade-transition');
                    document.body.classList.add('fade-out');
                    
                    setTimeout(() => {
                        applyLanguage(selectedLang);
                        languageDropdown.classList.remove('active');
                        
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
        mobileMenuToggle.addEventListener('click', function() {
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
            link.addEventListener('click', function() {
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

    // Enhanced Header Background on Scroll
    const header = document.querySelector('.header');
    let ticking = false;
    
    function updateHeader() {
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
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });

    // Enhanced Booking Buttons with Animation
    function initBookingButtons() {
        const bookButtons = document.querySelectorAll('.book-btn');
        
        bookButtons.forEach(button => {
            button.addEventListener('click', function(e) {
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
        contactForm.addEventListener('submit', function(e) {
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
        return translations[currentLanguage][key] || key;
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
            fr: 'Message envoyé avec succès! Redirection vers WhatsApp...'
        };
        
        successDiv.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${successMessages[currentLanguage]}</span>
        `;
        
        contactForm.appendChild(successDiv);
        
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
        whatsappFloat.innerHTML = `
            <a href="https://wa.me/${whatsappNumber}?text=${message}" 
               target="_blank" 
               class="whatsapp-float"
               title="${translations[currentLanguage]['contact-whatsapp']}">
                <i class="fab fa-whatsapp"></i>
            </a>
        `;
        document.body.appendChild(whatsappFloat);
        
        const floatButton = whatsappFloat.querySelector('.whatsapp-float');
        
        // Enhanced interaction events
        floatButton.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        floatButton.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
        
        floatButton.addEventListener('click', function() {
            console.log(`📱 WhatsApp float clicked - Language: ${currentLanguage}`);
        });
    }

    // Enhanced Animation Observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const animationObserver = new IntersectionObserver(function(entries) {
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
            card.addEventListener('mouseenter', function() {
                if (this.classList.contains('animated')) {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                    this.style.boxShadow = '0 25px 60px rgba(0,0,0,0.25)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
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
        
        // Load WhatsApp float after page load
        setTimeout(loadWhatsAppFloat, 3000);
        
        // Mark page as loaded
        window.addEventListener('load', function() {
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
window.addEventListener('error', function(e) {
    console.error('Egypt Essence Tours Error:', e.error);
});

// Service Worker registration (for better performance)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service worker would be registered here for production
        console.log('💡 Ready for service worker implementation');
    });
}