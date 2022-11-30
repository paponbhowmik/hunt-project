
$('.banner-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-arrow-circle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-circle-right next" aria-hidden="true"></i>',
  });

  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

$('.services-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  vertical: true,
  centerPadding: '0',
  prevArrow: '<i class="fa fa-angle-up prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-down next" aria-hidden="true"></i>',
});

$('.left-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  vertical: true,
  centerPadding: '0',
  asNavFor: '.right-slider',
  prevArrow: '<i class="fa fa-angle-up prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-down next" aria-hidden="true"></i>',
});
$('.right-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  vertical: true,
  centerPadding: '0',
  asNavFor: '.left-slider'
});

$('.counter').counterUp();