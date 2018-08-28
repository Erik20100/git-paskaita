
  var zero = 0;
  $(document).ready(function(){
    $(window).on('scroll',function(){
      $('header').toggleClass('hide', $(window).scrollTop() > zero);
      zero = $(window).scrollTop();
    })
  })

  $(document).ready(function(){
    $('.sl').slick({

      // slidesToShow: 3,
      // slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: true,
      // useTransform: false
    });
  });
