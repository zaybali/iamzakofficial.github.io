$(".navbar-nav.navbar-right > li").on("click", function(){
  $(".navbar-nav.navbar-right > li").removeClass("active");
  $(this).addClass("active");
});