// 自行加入的JS請寫在這裡
$(function () {
  // lazyload
  //可以指定你想要的元素做lazyload
  $('img').lazyload({ effect: 'fadeIn' });
  //燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  $('.cp_slider').slickLightbox({
    caption: 'caption',
    useHistoryApi: 'true',
    lazy: true,
  });
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.Slider-nav',
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  });
  $('.Slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.Slider-for',
    dots: true,
    arrows: true,
    focusOnSelect: true,
    infinite: true,
  });
});
// scroll
(function (win, $) {
  'use strict';
  // store all the scrollable-tables
  var _scroltables;
  /**
   * Toggle the hide/show of navigation buttons
   * <this> should refer to the scroltable DOM
   */
  function toggleNav() {
    var scroltable = $(this);
    var wrapper = scroltable.closest('.scroltable-wrapper');
    var navLeft = wrapper.children('.scroltable-nav-left');
    var navRight = wrapper.children('.scroltable-nav-right');
    var container = wrapper.children('.scroltable-container');
    var offset = container.scrollLeft();
    if (container.width() < scroltable.outerWidth(true)) {
      // Left Navigation
      if (offset > 0) navLeft.finish().fadeIn();
      else navLeft.finish().fadeOut();
      // Right Navigation
      if (scroltable.outerWidth(true) - container.width() > offset) {
        navRight.finish().fadeIn();
      } else navRight.finish().fadeOut();
    } else {
      navLeft.finish().hide();
      navRight.finish().hide();
    }
  }
  /**
   * Toggle the hide/show of navigation buttons for all scroltables.
   */
  function toggleNavs() {
    _scroltables.each(toggleNav);
  }
  /**
   * Scroll the scroltable container when the navigation
   * buttons are clicked.
   */
  function clickToScroll() {
    var nav = $(this);
    var wrapper = nav.parent();
    var container = wrapper.children('.scroltable-container');
    var displacement = container.scrollLeft() + (nav.is('.scroltable-nav-left') ? -100 : 100);
    container.animate({ scrollLeft: displacement }, 300, toggleNav.bind(container.children('.scroltable')[0]));
  }
  /**
   * [API]
   * Destroy the matched scroltables.
   * All events will be unbinded.
   */
  function destroy() {
    if (_scroltables && _scroltables.length) {
      this.each(function () {
        var scroltable = $(this);
        var scroltables = _scroltables.not(scroltable);
        if (scroltables.length < _scroltables.length) {
          _scroltables = scroltables;
          scroltable.closest('.scroltable-wrapper').children('.scroltable-nav').off('.scroltable').end().children('.scroltable-container').off('.scroltable').end().after(scroltable.detach()).remove().end().removeClass('scroltable');
        }
      });
    }
    return this;
  }
  /**
   * Route the API calls to corresponding function
   */
  function routeApi(api) {
    if (api === 'destroy') {
      return destroy.apply(this, Array.prototype.slice.call(arguments, 1));
    }
    return this;
  }
  /**
   * Initialize the scrollable tables
   */
  function initialize() {
    destroy.call(this);
    var wrapper = $('<div class="scroltable-wrapper"></div>');
    var nav = $('<div class="scroltable-nav scroltable-nav-left"></div><div class="scroltable-nav scroltable-nav-right"></div>');
    var content = $('<div class="scroltable-container"></div>');
    var scroltables = this.addClass('scroltable').wrap(wrapper).before(nav).wrap(content);
    _scroltables = _scroltables ? _scroltables.add(scroltables) : scroltables;
    scroltables.each(function () {
      $(this).closest('.scroltable-wrapper').children('.scroltable-nav').on('click.scroltable-wrapper', clickToScroll).end().children('.scroltable-container').on('scroll.scroltable-wrapper', toggleNav.bind(this));
    });
    $(win).off('resize.scroltable-wrapper').on('resize.scroltable-wrapper', toggleNavs).trigger('resize.scroltable-wrapper');
    return this;
  }
  /**
   * Public jQuery method
   */
  $.fn.scroltable = function (options) {
    if (typeof options === 'string') return routeApi.apply(this, arguments);
    return initialize.apply(this, arguments);
  };
})(this, jQuery);
$('.header .menu').scroltable();
