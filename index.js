const nextButton = document.querySelector('.next-button');
const previousButton = document.querySelector('.previous-button');
const slides = document.querySelectorAll('.slider-content');

function openNextSlide() {
  const currentSlide = document.querySelector('.current');
  currentSlide.classList.remove('current');

  if (currentSlide.nextElementSibling) {
    currentSlide.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
}

function openPreviousSlide() {
  const currentSlide = document.querySelector('.current');
  currentSlide.classList.remove('current');

  if (currentSlide.previousElementSibling) {
    currentSlide.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
}

nextButton.addEventListener('click', openNextSlide);
previousButton.addEventListener('click', openPreviousSlide);
