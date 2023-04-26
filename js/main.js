$(document).ready(function () {
  const hotelSwiper = new Swiper(".hotel-slider", {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
  });

  const reviewsSwiper = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  var menuBottom = $(".menu-button");
  menuBottom.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--activ");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--active");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--active");
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");

    modalOverlay.addClass("modal__overlay--active");
    modalDialog.addClass("modal__dialog--active");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--active");
    modalDialog.removeClass("modal__dialog--active");
  }
  //
  $(".form").each(function() {
		$(this).validate({
      messages: {
        name: "Please specify your name",
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
	})
});
