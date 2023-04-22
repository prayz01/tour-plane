const hotelSwiper = new Swiper('.hotel-slider', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
});

const reviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
		nextEl: '.reviews-slider__button--next',
		prevEl: '.reviews-slider__button--prev',
  },
});


var menuBottom  = document.querySelector(".menu-button");
menuBottom.addEventListener('click', function() {
	console.log('клик по кнопке');
	document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--activ');
})