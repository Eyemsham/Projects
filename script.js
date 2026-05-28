// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navlist = document.getElementById('navlist');

if (hamburger && navlist) {
  hamburger.addEventListener('click', () => {
    navlist.classList.toggle('show');
  });

  navlist.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navlist.classList.remove('show'));
  });
}

// Hide / show nav on scroll
let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (!nav) return;
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (navlist && navlist.classList.contains('show')) {
    nav.style.transform = 'translateY(0)';
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    return;
  }

  nav.style.transform = currentScroll > lastScrollTop ? 'translateY(-100%)' : 'translateY(0)';
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Scroll-up button
const mybutton = document.getElementById('myBtn');

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  if (!mybutton) return;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Service slider helper
function scrollSlider(direction) {
  const slider = document.getElementById('serviceSlider');
  if (!slider) return;
  const scrollAmount = 300;
  slider.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
}

// Services gallery
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
  if (!sec) return;
  sec.classList.toggle('visible');
  if (sec.classList.contains('visible')) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function filterGallery(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
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
  const lightbox = document.getElementById('lightbox');
  if (lightbox) lightbox.classList.add('open');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) lightbox.classList.remove('open');
}

function closeLightboxOutside(e) {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
}

function shiftLightbox(dir) {
  const pos = visibleItems.indexOf(currentIdx);
  if (pos === -1 || !visibleItems.length) return;
  currentIdx = visibleItems[(pos + dir + visibleItems.length) % visibleItems.length];
  updateLightbox();
}

function updateLightbox() {
  const item = galleryItems[currentIdx];
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  if (!item || !img || !caption) return;
  img.src = item.src;
  caption.textContent = item.tag + ' — ' + item.title;
}

document.addEventListener('keydown', e => {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox || !lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') shiftLightbox(-1);
  if (e.key === 'ArrowRight') shiftLightbox(1);
});
