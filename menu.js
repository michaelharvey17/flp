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

  $("#videos").click(function(){
    window.location = "index.html";
  });
  $("#games").click(function(){
    window.location = "games.html";
  });
  $("#ebooks").click(function(){
    window.location = "ebooks.html";
  });
  $("#audio").click(function(){
    window.location = "audio.html";
  });
});