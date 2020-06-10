function isVisible(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop; // + $(elem).height();
  return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {
  $(".skill-container").each(function(){
    if (isVisible($(this))) {
      $(this).children(".skill").each(function(){
        $(this).children("div").children("div").removeClass("collapsed");
      });
    }
  });
  /*if (isVisible($('#skills'))) {
    $(".skill").each(function() {
      $(this).children("div").children("div").removeClass("collapsed");
      // console.log("visible");
    });
  }*/
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

$(function(){
  $.get("/cv/js/refs.json", function(refs){
    var url = new URL(window.location.href);
    var ref_nr = url.searchParams.get("ref_nr");
    if (ref_nr != null){
      for (var i in refs){
        var ref = refs[i];
        if (ref.ref_nr == ref_nr){
          for (var j in ref.hide){
            $(ref.hide[j]).css({"display": "none"});
          }
          for (var j in ref.html){
            $(ref.html[j].selector).html(ref.html[j].html);
          }
          for (var j in ref.position){
            $(ref.position[j].selector).insertBefore($(ref.position[j].selector).parent().children().eq(ref.position[j].index));
          }
          break;
        }
      }
    }
  });
});
