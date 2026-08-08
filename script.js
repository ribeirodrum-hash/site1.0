document.addEventListener('DOMContentLoaded', () => {

    /* Scroll reveal */
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));

    /* Demo Reel — play button */
    const demoPlayer = document.getElementById('demoPlayer');
    const demoVideo = document.getElementById('demoVideo');
    const demoPlayBtn = document.getElementById('demoPlayBtn');

    if (demoPlayer && demoVideo && demoPlayBtn) {

        demoPlayBtn.addEventListener('click', () => {
            demoVideo.setAttribute('controls', '');
            demoPlayer.classList.add('is-playing');
            demoPlayBtn.classList.add('hidden');
            demoVideo.play();
        });

        demoVideo.addEventListener('ended', () => {
            demoVideo.removeAttribute('controls');
            demoPlayer.classList.remove('is-playing');
            demoPlayBtn.classList.remove('hidden');
        });
    }

    /* Nav active state on scroll */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach((link) => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 110}px 0px -50% 0px`
    });

    sections.forEach((section) => navObserver.observe(section));
    const galleryImages = [

        "assets/images/GALERIA/backstage01.jpg",
        "assets/images/GALERIA/backstage02.jpg",
        "assets/images/GALERIA/backstage03.jpg",
        "assets/images/GALERIA/backstage04.jpg",
    
        "assets/images/GALERIA/backstage08.PNG",
        "assets/images/GALERIA/backstage09.PNG",
        "assets/images/GALERIA/backstage10.PNG",
    
        "assets/images/GALERIA/backstage11.jpg",
        "assets/images/GALERIA/backstage12.jpg",
        "assets/images/GALERIA/backstage13.jpg",
        "assets/images/GALERIA/backstage14.jpg",
        "assets/images/GALERIA/backstage15.jpg",
        "assets/images/GALERIA/backstage16.jpg",
        "assets/images/GALERIA/backstage17.jpg"
    
    ];  
    const heroImage = document.querySelector(".hero-image img");

const modal = document.getElementById("galleryModal");
const main = document.getElementById("galleryMain");
const left = document.getElementById("galleryLeft");
const right = document.getElementById("galleryRight");

const prev = document.getElementById("galleryPrev");
const next = document.getElementById("galleryNext");
const close = document.getElementById("galleryClose");

let current = 0;

function updateGallery() {

    main.src = galleryImages[current];

    left.src = galleryImages[(current - 1 + galleryImages.length) % galleryImages.length];

    right.src = galleryImages[(current + 1) % galleryImages.length];

}

heroImage.addEventListener("click", () => {

    current = 0;

    updateGallery();

    modal.classList.add("active");

});

next.addEventListener("click", () => {

    current = (current + 1) % galleryImages.length;

    updateGallery();

});

prev.addEventListener("click", () => {

    current = (current - 1 + galleryImages.length) % galleryImages.length;

    updateGallery();

});

left.addEventListener("click", () => {

    current = (current - 1 + galleryImages.length) % galleryImages.length;

    updateGallery();

});

right.addEventListener("click", () => {

    current = (current + 1) % galleryImages.length;

    updateGallery();

});

close.addEventListener("click", () => {

    modal.classList.remove("active");

});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("active");

    }

});  
});
