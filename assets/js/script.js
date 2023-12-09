// Swiper.js Custom Js Code start from {{
var swiper = new Swiper(".short_news", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".stories_slid", {
  slidesPerView: 6,
  spaceBetween: 20,
  mousewheel: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

swiper.on("slideChangeTransitionEnd", function (e) {
  var images = document.querySelectorAll(".swiper-slide img");
  var images_to_active = document.querySelectorAll(
    ".swiper-slide.swiper-slide-active img"
  );

  images.forEach((image) => {
    image.classList.remove("active-image");
  });

  images_to_active.forEach((image) => {
    image.classList.add("active-image");
  });
});

var swiper = new Swiper(".update", {
  zoom: true,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
// Swiper.js Custom Js Code End from }}