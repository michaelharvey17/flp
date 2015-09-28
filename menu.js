$(document).ready(function(){
  $(".id").click(function(){
    $(".menu-wrapper").animate({
      left: "+=622.5px",
    }, 1000, function(){
    });
  });

  $(".back-button, .activities").click(function(){
    $(".menu-wrapper").animate({
      left: "-=622.5px",
    }, 1000, function(){
    });
  });
});