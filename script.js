// Hurmburger 

const hamburger = document.getElementById('hamburger');
    const navlist = document.getElementById('navlist');

    hamburger.addEventListener('click', () => {
        navlist.classList.toggle('show');
    });

// nav

  let lastScrollTop = 0;
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scrolling down
      nav.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      nav.style.transform = 'translateY(0)';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
  });


// Scroll-up button
let mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// service

function scrollSlider(direction) {
    const slider = document.getElementById('serviceSlider');
    const scrollAmount = 300;

    if (direction === 'left') {
      slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

