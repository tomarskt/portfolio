
'use strict';

$(document).ready(function() {

  //expand project details from project thumbnail
  $(listenExpand);

  function listenExpand() {
    $('.project-img').click((e) => {
      $(e.currentTarget).siblings('.tech').find('.tech-list').toggleClass('hidden');
      $(e.currentTarget).siblings('.tech').find('.more-button').toggleClass('hidden');
      listenCollapse();
    });
  }

  //expand and collapse project details from `Learn More` button
  $(listenExpand2);

  function listenExpand2() {
    $('.tech').on('click', '.more-button', (e) => {
      $(e.currentTarget).next('.tech-list').removeClass('hidden');
      $(e.currentTarget).addClass('hidden');
      listenCollapse();
    });
  }

  function listenCollapse() {
    $('.less-button').on('click', (e) => {
      $(e.currentTarget).parent().addClass('hidden');
      $(e.currentTarget).closest('.tech-list').prev().removeClass('hidden');
      listenExpand2();
    });
  }

  $(hamburger);
  //hamburger menu
  function hamburger() {
    $('.hamburger').on('click', (e) => {
      $('.mobileNav').toggleClass('hidden');
    });
  }

  //if the viewport is being widdened from mobile, 
  //remove the opened hamburger menu
  $(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 768) {
            $(".mobileNav").addClass("hidden");
    }
});

	// scroll on navbar links
  $('.home-link').click(() => {
    $('html, body').animate({
      scrollTop: ($('html').offset().top)
    },1000);
    $('.mobileNav').addClass('hidden');
  });

  $('.about-me-link').click(() => {
    $('html, body').animate({
      scrollTop: ($('#about-me-anchor').offset().top - 80)
    },1000);
    $('.mobileNav').addClass('hidden');
  });

  $('.projects-link').click(() => {
    $('html, body').animate({
      scrollTop: ($('#projects-anchor').offset().top - 80)
    },1000);
    $('.mobileNav').addClass('hidden');
  });

  $('.contact-section-link').click(() => {
    $('html, body').animate({
      scrollTop: ($('.contact').offset().top)
    },1000);
    $('.mobileNav').addClass('hidden');
  });

});