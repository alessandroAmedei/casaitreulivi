const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.carousel').forEach((carousel) => {
  const slides = carousel.querySelectorAll('.carousel-slide');
  const slideNumber = carousel.querySelector('.current-slide');
  let activeSlide = 0;

  setInterval(() => {
    slides[activeSlide].classList.remove('is-active');
    activeSlide = (activeSlide + 1) % slides.length;
    slides[activeSlide].classList.add('is-active');
    slideNumber.textContent = String(activeSlide + 1).padStart(2, '0');
  }, 2000);
});

const checkin = document.querySelector('#checkin');
const checkout = document.querySelector('#checkout');
const today = new Date().toISOString().split('T')[0];
checkin.min = today;
checkout.min = today;
checkin.addEventListener('change', () => {
  checkout.min = checkin.value;
  if (checkout.value && checkout.value <= checkin.value) checkout.value = '';
});

document.querySelector('#booking-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const params = new URLSearchParams({
    check_in: checkin.value,
    check_out: checkout.value,
    adults: document.querySelector('#guests').value,
  });
  window.open(`https://www.airbnb.it/rooms/1229572590554872003?${params}`, '_blank', 'noopener');
});
