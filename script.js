let slideIndex = 0;
const slides = document.querySelectorAll('.slider-item');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        dots[i].classList.remove('active');
    });

    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        slideIndex = i;
        showSlide(slideIndex);
    });
});

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Initialize slider
showSlide(slideIndex);


let buttons = document.querySelectorAll('.col button');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        button.classList.add('clicked');


        setTimeout(() => {
            button.classList.remove('clicked');
        }, 200);
    });
});

// Show or hide the button when scrolling
window.onscroll = function() {
    var backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
};

// Smooth scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const burgerMenu = document.getElementById("burgerMenu");

    // Toggle Sidebar width
    if (sidebar.style.width === "300px") {
        sidebar.style.width = "0";
        burgerMenu.classList.remove('active');
        burgerMenu.style.display = 'block';
    } else {
        sidebar.style.width = "300px";
        burgerMenu.classList.add('active'); // Animate burger icon to X
        burgerMenu.style.display = 'none';
    }
}




