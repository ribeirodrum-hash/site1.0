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

   /* Demo Reel Modal */

   const demoPlayer = document.getElementById("demoPlayer");
const demoModal = document.getElementById("demoModal");
const demoFrame = document.getElementById("demoFrame");
const demoClose = document.getElementById("demoClose");

if (demoPlayer && demoModal && demoFrame && demoClose) {

    demoPlayer.addEventListener("click", (e) => {

        e.preventDefault();

        demoFrame.src =
            "https://www.youtube.com/embed/16HTqtiDRrc?autoplay=1&rel=0";

        demoModal.classList.add("active");

    });

    demoClose.addEventListener("click", () => {

        demoModal.classList.remove("active");
        demoFrame.src = "";

    });

    demoModal.addEventListener("click", (e) => {

        if (e.target === demoModal) {

            demoModal.classList.remove("active");
            demoFrame.src = "";

        }

    });

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            demoModal.classList.remove("active");
            demoFrame.src = "";

        }

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
