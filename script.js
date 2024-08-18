// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');  
	} 
	else{
		$('header').removeClass('nav-show');
	}  
})

//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }
	 
	}

window.onload = () => navSlide();

const typewriters = document.querySelectorAll(".typewriter");
typewriters.forEach(typewriter => {
    const text = typewriter.textContent;
    typewriter.textContent = ""; 
    let i = 0;
    const typeSpeed = 1000; // Adjust this for typing speed in milliseconds
    const delaySpeed = 15000; // Adjust this for delay after typing is complete
    const type = () => {
        if (i < text.length) {
            typewriter.textContent += text.charAt(i);
            i++;
            setTimeout(type, typeSpeed);
        } else {
            setTimeout(() => {
                typewriter.classList.add("typing-complete"); // Add a class for any styling after typing
            }, delaySpeed);
        }
    };
    setTimeout(type, 1500); // Delay the start of typing 
});

const slideshowContainer = document.querySelector('.slideshow-container');
const workSlides = slideshowContainer.querySelectorAll('.work');
let currentSlide = 0;

const nextSlide = () => {
    workSlides[currentSlide].classList.remove('active'); // Remove 'active' class from current slide
    currentSlide = (currentSlide + 1) % workSlides.length; // Move to the next slide, looping back to the beginning
    workSlides[currentSlide].classList.add('active'); // Add 'active' class to the new slide
};

setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)