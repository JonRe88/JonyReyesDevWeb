// Efecto de desplazamiento en el header
$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('header').addClass('nav-show');
    } else {
        $('header').removeClass('nav-show');
    }
});

// Menú de hamburguesa
function navSlide() {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-bar li");

    hamburger.onclick = () => {
        navbar.classList.toggle("nav-active");

        // Animación de los links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // Animación del ícono de hamburguesa
        hamburger.classList.toggle("toggle");
    };
}

window.onload = () => navSlide();

// Carrusel automático para proyectos
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Cambia la imagen cada 3 segundos
}

// Animación de máquina de escribir
const typewriterText = document.getElementById('typewriter-text');
const words = ["Web Developer", "Designer", "Coder"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;

function type() {
    if (charIndex < words[wordIndex].length && !isDeleting) {
        currentWord += words[wordIndex][charIndex];
        charIndex++;
        typewriterText.textContent = currentWord;
        setTimeout(type, 100);
    } else if (charIndex > 0 && isDeleting) {
        currentWord = currentWord.slice(0, -1);
        charIndex--;
        typewriterText.textContent = currentWord;
        setTimeout(type, 100);
    } else {
        isDeleting = !isDeleting;
        wordIndex = isDeleting ? wordIndex : (wordIndex + 1) % words.length;
        setTimeout(type, 200);
    }
}

type();
