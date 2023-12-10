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

  breakpoints: {
    0: {
      slidesPerView: 4,
      spaceBetweenSlides: 10,
    },
    400: {
      slidesPerView: 5,
      spaceBetweenSlides: 10,
    },
    576: {
      slidesPerView: 7,
      spaceBetweenSlides: 10,
    },
    768: {
      slidesPerView:8,
      spaceBetweenSlides: 10,
    },
    1400: {
      slidesPerView: 8,
      spaceBetweenSlides: 10,
    },
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

// ADD class for sidebar Close Open from {{
function openclose() {
  let main = document.getElementById("main");

  main.classList.toggle("open_side_nav");
}
// ADD class for sidebar Close Open from }}
