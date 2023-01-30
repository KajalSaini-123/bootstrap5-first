// ------FIRST CAROUSAL----------
$("#first-slider").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  items: 1,
  dots: false,
  smartSpeed: 1000,
  autoplay: true,
  autoplayTimeout: 7000,
  navText: ["PREV", "NEXT"],
  responsive: {
    0: {
      nav: false,
    },
    600: {
      nav: true,
    },
  },
});
// ------PROJECT-SECTION-CAROUSAL------
$("#projects-slider").owlCarousel({
  loop: true,
  margin: 0,
  dots: true,
  margin: 24,
  dots: true,
  smartSpeed: 1000,
  autoplay: true,
  autoplayTimeout: 7000,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1140: {
      items: 2,
      center: true,
    },
  },
});
// ---------REVIEW-SLIDER---------
$("#review-slider").owlCarousel({
  loop: true,
  margin: 0,
  items: 1,
  dots: true,
  smartSpeed: 1000,
  autoplay: true,
  autoplayTimeout: 3000,
});
