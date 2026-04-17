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

// Services

const galleryItems = [
  { src: 'Pictures/maseko/Contact-img1.jpg', tag: 'Bespoke', title: 'Custom Evening Wear' },  
  { src: 'Pictures/services/IMG_4962.jpg', tag: 'Tailoring', title: 'Expert Alterations' },
  { src: 'Pictures/services/IMG_5007.jpg', tag: 'Collection', title: 'Ready-to-Wear' },
  { src: 'Pictures/services/IMG_4934 (3).jpg', tag: 'Technical', title: 'Pattern & Cut' },
  { src: 'Pictures/services/IMG_5030.jpg', tag: 'Restoration', title: 'Garment Repair' },
  { src: 'Pictures/services/IMG_4924.jpg', tag: 'Fabric', title: 'Material Selection' },
  { src: 'Pictures/services/IMG_4901.jpg', tag: 'Style', title: 'Personal Style' },
];
let currentIdx = 0;
let visibleItems = [...Array(galleryItems.length).keys()];

function toggleGallery(btn) {
  const sec = document.getElementById('gallerySection');
  sec.classList.toggle('visible');
  if (sec.classList.contains('visible')) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function filterGallery(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  visibleItems = [];
  document.querySelectorAll('.gallery-item').forEach((el, i) => {
    const show = cat === 'all' || el.dataset.cat === cat;
    el.style.display = show ? '' : 'none';
    if (show) visibleItems.push(i);
  });
}
function openLightbox(idx) {
  currentIdx = idx;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox() { document.getElementById('lightbox').classList.remove('open'); }
function closeLightboxOutside(e) { if (e.target === document.getElementById('lightbox')) closeLightbox(); }
function shiftLightbox(dir) {
  const pos = visibleItems.indexOf(currentIdx);
  if (pos === -1) return;
  currentIdx = visibleItems[(pos + dir + visibleItems.length) % visibleItems.length];
  updateLightbox();
}
function updateLightbox() {
  const item = galleryItems[currentIdx];
  document.getElementById('lightboxImg').src = item.src;
  document.getElementById('lightboxCaption').textContent = item.tag + ' — ' + item.title;
}
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') shiftLightbox(-1);
  if (e.key === 'ArrowRight') shiftLightbox(1);
});
