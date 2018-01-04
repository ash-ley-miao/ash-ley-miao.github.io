$(document).ready(function(){
  $('.flyers-carousel').slick({
    slidesToScroll: 2,
    slidesToShow: 2,
    autoplay: false,
    arrows: true,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var small = {width: "50%", height: "auto"};
  var large = {width: "100%", height: "auto"};
  var count = 1;
  $(".artwork").css(small).on('click', function() {
    $(this).animate((count==1) ? large : small);
    count = 1 - count;
  });
});
