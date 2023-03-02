$(function (){
  $('.slide_show').slick({
      slidesToShow:2 ,
      arrows: false ,
  })
  $('.ar_cle_slide').slick({
      arrows: false ,
      
  })
  $('#sidebar_toggler').on('click', function () {
      $('.nav_btn').addClass('.pop_active');
  })
  $('#searchbar_toggler').on('click', function () {
    $('#popUp').addClass('pop_active');
})
  $('.ppCross').on('click', function () {
      $('#popUp').removeClass('pop_active');
  })

  $("#back_to_top").on("click", function () {
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });

    $(window).on("scroll", function(){
      let scrollSize = $(window).scrollTop();
      if (scrollSize > 80) {
         $(".my-nab").addClass("nav_active");
       } else {
         $(".my-nab").removeClass("nav_active");
       }
   });
   $(".nav_btn").on("click",function(){
    $("#sideNav").show()
   });
   $(".sli_x").on("click",function(){
    $("#sideNav").hide()
   })
})