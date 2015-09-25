$(document).ready(function(){
  $(".id").click(function(){
    $(".menu-wrapper").animate({
      left: "+=620px"
    }, 1000, function(){
    });
  });

  $(".back-button").click(function(){
    $(".menu-wrapper").animate({
      left: "-=620px"
    }, 1000, function(){
    });
  });
});