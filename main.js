// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => otherItem.classList.remove('active'));
        
        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Reveal on Scroll
const revealElements = document.querySelectorAll('[data-reveal]');
const revealOnScroll = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.85) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Sticky Header handled via CSS
const header = document.querySelector('header');

// Show More Services Logic
const showMoreBtn = document.getElementById('show-more-services');
const extraServices = document.querySelectorAll('.extra-service');

if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
        extraServices.forEach(card => {
            card.classList.toggle('hidden');
        });
        
        if (showMoreBtn.innerText === 'Показать все услуги') {
            showMoreBtn.innerText = 'Скрыть';
        } else {
            showMoreBtn.innerText = 'Показать все услуги';
            // Scroll back to top of services if hiding
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

console.log('Autovera interactive elements initialized');
