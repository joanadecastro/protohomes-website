$(function () {
  // faqs
  /* document.getElementById('.faqs__header').addEventListener('click', () => {

  }); */
  /* $(".faqs__header").on("click", function () {
    $(this).next().slideToggle();   
    //$(this).parent().find(".faqs__content").slideToggle();
  }); */

  // with arrow function this is not available
  $(".faqs__header").on("click", (event) => {
    //$(event.target).closest(".faqs__header").next().slideToggle();
    $(event.target)
      .closest(".faqs__article")
      .toggleClass("faqs__article--open")
      .find(".faqs__content")
      .slideToggle();
  });

  // slideshow
  $(".slideshow").slick({
    autoplay: true,
    arrows: false,
    dots: true,
  });

  let scrollPosition;

  $(window).on('scroll', (event) => {

    if($(window).scrollTop() > scrollPosition) {
      $('.site-header').addClass('site-header--hide');
    } else {
      $('.site-header').removeClass('site-header--hide');
    }

    scrollPosition = $(window).scrollTop();
    /* if(scroll > 100) {
      $('.site-header').addClass('site-header--min');
    } else {
      $('.site-header').removeClass('site-header--min');
    } */

    $('.site-header').toggleClass('site-header--min', scrollPosition > 100);
  });

  // AOS scroll animation init
  AOS.init();
});
