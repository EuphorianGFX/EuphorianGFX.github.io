/* JavaScript Document

TemplateMo 605 Xmas Countdown - Customized for caper Design

https://templatemo.com/tm-605-xmas-countdown

*/

// Create Particles and Snowflakes
function createParticles() {
   const container = document.getElementById('particles');

   // Floating particles
   for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (15 + Math.random() * 20) + 's';
      particle.style.animationDelay = Math.random() * 15 + 's';
      container.appendChild(particle);
   }

   // Snowflakes removed
}

// Header scroll effect
function handleScroll() {
   const header = document.getElementById('header');
   if (window.scrollY > 50) {
      header.classList.add('scrolled');
   } else {
      header.classList.remove('scrolled');
   }
}

// Scroll Spy - Update active nav item based on scroll position
function scrollSpy() {
   const sections = document.querySelectorAll('section[id]');
   const navLinks = document.querySelectorAll('nav a:not(.nav-cta)');

   let currentSection = '';
   const scrollPosition = window.scrollY + 150;

   sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
         currentSection = section.getAttribute('id');
      }
   });

   navLinks.forEach(link => {
      link.classList.remove('nav-active');
      if (link.getAttribute('href') === '#' + currentSection) {
         link.classList.add('nav-active');
      }
   });
}

// Mobile navigation
function setupNavigation() {
   const toggle = document.getElementById('navToggle');
   const nav = document.getElementById('nav');
   const links = nav.querySelectorAll('a');

   toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      nav.classList.toggle('active');
   });

   links.forEach(link => {
      link.addEventListener('click', () => {
         toggle.classList.remove('active');
         nav.classList.remove('active');
      });
   });
}

// Contact form
function setupContactForm() {
   const form = document.getElementById('contactForm');
   form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get form data
      const name = form.elements.name.value.trim();
      const business = form.elements.business.value.trim();
      const phone = form.elements.phone.value.trim();
      const email = form.elements.email.value.trim();
      const service = form.elements.service.value;
      const message = form.elements.message.value.trim();

      // Validate that service is selected
      if (!service) {
         alert('Please select a service');
         return;
      }

      // Create email body
      const emailBody = `New contact form submission from caper Design website:\n\n` +
         `Name: ${name}\n` +
         `Business: ${business}\n` +
         `Phone: ${phone}\n` +
         `Email: ${email}\n` +
         `Service Interest: ${service}\n\n` +
         `Message:\n${message}`;

      // Create mailto link
      const mailtoLink = `mailto:harley.woffinden.2@gmail.com?subject=New%20Contact%20Form%20Submission%20from%20caper%20Design%20Website&body=${encodeURIComponent(emailBody)}`;

      // Open email client
      window.location.href = mailtoLink;

      // Show thank you message
      alert('Thank you for your message! We\'ll get back to you soon.');

      // Reset form
      form.reset();
   });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
   createParticles();
   // Removed countdown update since we replaced it with statistics
   setupNavigation();
   setupContactForm();
   scrollSpy();
   window.addEventListener('scroll', () => {
      handleScroll();
      scrollSpy();
   });
});