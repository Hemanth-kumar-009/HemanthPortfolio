// DOM Elements
const nav = document.getElementById('navigation');
const themeToggle = document.getElementById('theme-toggle');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const contactForm = document.getElementById('contact-form');
const currentYearSpan = document.getElementById('current-year');

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// State
let isDarkMode = true;
let isMobileMenuOpen = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeNavigation();
    initializeAnimations();
    initializeContactForm();
    updateCurrentYear();
    initializeSkillBars();
});

// Theme Management
function initializeTheme() {
    // Set dark mode as default
    document.documentElement.classList.add('dark');
    
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle('dark');
}

// Navigation Management
function initializeNavigation() {
    // Scroll event for navigation background
    window.addEventListener('scroll', handleNavScroll);
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId.substring(1)); // Remove # from href
            if (isMobileMenuOpen) toggleMobileMenu();
        });
    });
}

function handleNavScroll() {
    if (window.scrollY > 50) {
        nav.classList.remove('nav-transparent');
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
        nav.classList.add('nav-transparent');
    }
}

function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    mobileMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('mobile-menu-open');
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed nav
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// GSAP Animations
function initializeAnimations() {
    // Hero section animations
    const heroTl = gsap.timeline();
    heroTl.from('.profile-image', { duration: 1, y: 50, opacity: 0, ease: 'power2.out' })
          .from('.hero-text', { duration: 1, y: 30, opacity: 0, ease: 'power2.out' }, '-=0.5')
          .from('.hero-description', { duration: 1, y: 20, opacity: 0, ease: 'power2.out' }, '-=0.3')
          .from('.hero-buttons', { duration: 1, y: 20, opacity: 0, ease: 'power2.out' }, '-=0.3');

    // Section animations on scroll
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        gsap.fromTo(section.querySelector('.section-header'), 
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // About section highlight cards
    gsap.fromTo('.highlight-card',
        { y: 30, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.about-highlights',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        }
    );

    // Project cards animation
    gsap.fromTo('.project-card',
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.projects-grid',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        }
    );

    // Timeline animation
    gsap.fromTo('.timeline-item',
        { x: -50, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        }
    );

    // Contact form animation
    gsap.fromTo('.contact-form-wrapper',
        { x: -50, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.contact-content',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        }
    );

    gsap.fromTo('.contact-info',
        { x: 50, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.contact-content',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        }
    );
}

// Skills section progress bars
function initializeSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    // Animate skill items on scroll
    skillItems.forEach((item, index) => {
        gsap.fromTo(item,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Animate progress bars
        const progressBar = item.querySelector('.skill-progress');
        const level = item.getAttribute('data-level');
        
        gsap.fromTo(progressBar,
            { width: '0%' },
            {
                width: level + '%',
                duration: 1.5,
                delay: 0.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });
}

// Contact Form Management
function initializeContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Utility Functions
function updateCurrentYear() {
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m18 6-12 12"></path>
                    <path d="m6 6 12 12"></path>
                </svg>
            </button>
        </div>
    `;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        background: ${type === 'success' ? 'hsl(142, 76%, 36%)' : 'hsl(220, 50%, 47%)'};
        color: white;
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        animation: slideInRight 0.3s ease;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Add notification styles to head
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        transition: background-color 0.2s;
    }
    
    .notification-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;
document.head.appendChild(notificationStyles);

// Download resume function (placeholder)
function downloadResume() {
    // This would typically trigger a file download
    showNotification('Resume download started!', 'success');
}

// Preview resume function (placeholder)
function previewResume() {
    // This would typically open a modal or new tab with resume preview
    showNotification('Resume preview feature coming soon!', 'info');
}

// Intersection Observer for scroll animations (fallback for browsers without GSAP)
function initializeFallbackAnimations() {
    if (typeof gsap === 'undefined') {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe all elements that should animate
        const animatedElements = document.querySelectorAll('.section-header, .highlight-card, .project-card, .timeline-item, .skill-item');
        animatedElements.forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    }
}

// Initialize fallback animations if GSAP is not available
if (typeof gsap === 'undefined') {
    document.addEventListener('DOMContentLoaded', initializeFallbackAnimations);
}

// Expose functions to global scope for HTML onclick handlers
window.scrollToSection = scrollToSection;
window.scrollToTop = scrollToTop;
window.downloadResume = downloadResume;
window.previewResume = previewResume;