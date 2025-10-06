// Egyptian Dreams Tours - Interactive Functionality

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuToggle && navList) {
        mobileMenuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            
            // Toggle icon
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

    // Smooth Scrolling for Navigation Links
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

    // Header Background Change on Scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'linear-gradient(135deg, rgba(8, 51, 66, 0.95) 0%, rgba(27, 200, 210, 0.95) 100%)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #083342 0%, #1bc8d2 100%)';
            header.style.backdropFilter = 'none';
        }
    });

    // Contact Form Handling with improved validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const phone = formData.get('phone').trim();
            const message = formData.get('message').trim();
            
            // Remove previous error messages and reset styles
            removeErrorMessages();
            
            // Validate form
            let isValid = true;
            let errorMessages = [];
            
            // Name validation
            if (!name || name.length < 2) {
                showFieldError('name', 'يرجى إدخال اسم صحيح (على الأقل حرفين)');
                errorMessages.push('اسم غير صحيح');
                isValid = false;
            }
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailPattern.test(email)) {
                showFieldError('email', 'يرجى إدخال بريد إلكتروني صحيح');
                errorMessages.push('بريد إلكتروني غير صحيح');
                isValid = false;
            }
            
            // Phone validation (more flexible for Egyptian numbers)
            const phonePattern = /^(\+20|0020|20|0)?[0-9]{10,11}$/;
            const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
            if (!phone || !phonePattern.test(cleanPhone)) {
                showFieldError('phone', 'يرجى إدخال رقم هاتف صحيح (مثال: 01234567890)');
                errorMessages.push('رقم هاتف غير صحيح');
                isValid = false;
            }
            
            // Message validation
            if (!message || message.length < 5) {
                showFieldError('message', 'يرجى إدخال رسالة (على الأقل 5 أحرف)');
                errorMessages.push('رسالة قصيرة جداً');
                isValid = false;
            }
            
            if (!isValid) {
                showGeneralError('يرجى تصحيح الأخطاء المحددة أعلاه');
                return;
            }
            
            // If validation passes, create WhatsApp message
            const whatsappMessage = `مرحباً! أنا ${name}

البريد الإلكتروني: ${email}
رقم الهاتف: ${phone}

الرسالة: ${message}`;
            
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/20123456789?text=${encodedMessage}`;
            
            // Show success message
            showSuccessMessage();
            
            // Open WhatsApp
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
            }, 1500);
            
            // Reset form
            setTimeout(() => {
                this.reset();
                removeErrorMessages();
            }, 2000);
        });

        // Real-time validation on input
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateSingleField(this);
            });
            
            input.addEventListener('input', function() {
                // Clear error state when user starts typing
                if (this.classList.contains('error')) {
                    this.classList.remove('error');
                    this.style.borderColor = '';
                    const errorMsg = this.parentNode.querySelector('.error-message');
                    if (errorMsg) {
                        errorMsg.remove();
                    }
                }
            });
        });
    }

    // Single field validation function
    function validateSingleField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        
        // Remove existing error for this field
        field.classList.remove('error');
        field.style.borderColor = '';
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        switch(fieldName) {
            case 'name':
                if (value && value.length < 2) {
                    showFieldError(fieldName, 'الاسم يجب أن يكون أكثر من حرف واحد');
                    isValid = false;
                }
                break;
            case 'email':
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value && !emailPattern.test(value)) {
                    showFieldError(fieldName, 'صيغة البريد الإلكتروني غير صحيحة');
                    isValid = false;
                }
                break;
            case 'phone':
                const phonePattern = /^(\+20|0020|20|0)?[0-9]{10,11}$/;
                const cleanPhone = value.replace(/[\s\-\(\)]/g, '');
                if (value && !phonePattern.test(cleanPhone)) {
                    showFieldError(fieldName, 'رقم الهاتف غير صحيح');
                    isValid = false;
                }
                break;
            case 'message':
                if (value && value.length < 5) {
                    showFieldError(fieldName, 'الرسالة قصيرة جداً');
                    isValid = false;
                }
                break;
        }
        
        return isValid;
    }

    // Show field error with better styling
    function showFieldError(fieldName, errorMessage) {
        const field = document.getElementById(fieldName);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errorMessage;
        
        field.classList.add('error');
        field.style.borderColor = '#dc3545';
        field.parentNode.appendChild(errorDiv);
    }

    // Show general error message
    function showGeneralError(message) {
        const form = document.getElementById('contactForm');
        let generalError = form.querySelector('.general-error');
        
        if (!generalError) {
            generalError = document.createElement('div');
            generalError.className = 'general-error';
            form.insertBefore(generalError, form.firstChild);
        }
        
        generalError.textContent = message;
        generalError.style.display = 'block';
        
        setTimeout(() => {
            if (generalError) {
                generalError.style.display = 'none';
            }
        }, 5000);
    }

    // Remove all error messages
    function removeErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-message, .general-error');
        errorMessages.forEach(error => error.remove());
        
        const formFields = document.querySelectorAll('#contactForm input, #contactForm textarea');
        formFields.forEach(field => {
            field.classList.remove('error');
            field.style.borderColor = '';
        });
    }

    // Show success message with better styling
    function showSuccessMessage() {
        // Remove existing success message
        const existingMessage = document.querySelector('.success-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message show';
        successDiv.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>تم إرسال رسالتك بنجاح! سيتم تحويلك إلى الواتساب...</span>
        `;
        
        const form = document.getElementById('contactForm');
        form.appendChild(successDiv);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            if (successDiv) {
                successDiv.remove();
            }
        }, 5000);
    }

    // Tour Card Animation on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe tour cards for animation
    const tourCards = document.querySelectorAll('.tour-card');
    tourCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Enhanced hover effects for tour cards
    tourCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // WhatsApp Booking Button Enhancement
    const bookButtons = document.querySelectorAll('.book-btn');
    
    bookButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }, 100);
            
            // Track booking attempt
            const tourName = this.closest('.tour-card').querySelector('h3').textContent;
            console.log(`Booking clicked for: ${tourName}`);
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = scrolled * 0.5;
            
            if (scrolled < hero.offsetHeight) {
                hero.style.transform = `translateY(${parallaxSpeed}px)`;
            }
        });
    }

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Smooth reveal animation for sections
    const revealElements = document.querySelectorAll('.section-header, .about-content, .contact-content');
    
    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        revealObserver.observe(element);
    });

    // Performance optimization: lazy load WhatsApp chat widget
    let whatsappLoaded = false;
    
    function loadWhatsAppWidget() {
        if (!whatsappLoaded) {
            const whatsappFloat = document.createElement('div');
            whatsappFloat.innerHTML = `
                <a href="https://wa.me/20123456789?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%21%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%B1%D8%AD%D9%84%D8%A7%D8%AA%D9%83%D9%85%20%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%AD%D9%8A%D8%A9" 
                   target="_blank" 
                   class="whatsapp-float"
                   title="تواصل معنا عبر الواتساب"
                   style="position: fixed; bottom: 20px; left: 20px; z-index: 1000; 
                          background: #25D366; color: white; border-radius: 50%; 
                          width: 60px; height: 60px; display: flex; align-items: center; 
                          justify-content: center; font-size: 24px; text-decoration: none; 
                          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4); 
                          transition: all 0.3s ease;">
                    <i class="fab fa-whatsapp"></i>
                </a>
            `;
            document.body.appendChild(whatsappFloat);
            
            // Add hover effect
            const floatButton = whatsappFloat.querySelector('.whatsapp-float');
            floatButton.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                this.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.6)';
            });
            
            floatButton.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
            });
            
            whatsappLoaded = true;
        }
    }

    // Load WhatsApp widget after a delay
    setTimeout(loadWhatsAppWidget, 3000);

    // Add page loaded class for CSS animations
    window.addEventListener('load', function() {
        document.body.classList.add('page-loaded');
    });

    console.log('Egyptian Dreams Tours website loaded successfully! 🏺✨');
});