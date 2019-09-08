function isVisible(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop; // + $(elem).height();
  return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {
  if (isVisible($('#skills'))) {
    $(".skill").each(function() {
      $(this).children("div").children("div").removeClass("collapsed");
      // console.log("visible");
    });
  }
  if (isVisible($('#hobbies'))) {
    var d = 400;
    $("#hobbies .items .item").each(function(){
      $(this).delay(d).queue(function(next){
        $(this).css({"opacity": 1});
        next();
      });
      d += 400;
    });
  }
});
