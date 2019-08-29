function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop; //+ $(elem).height()
  return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function isNotVisible() {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  return docViewBottom < elemTop || docViewTop > elemBottom;
}

$(window).scroll(function() {
  if (isScrolledIntoView($('#skills'))) {
    $(".skill").each(function() {
      $(this).children("div").children("div").removeClass("collapsed");
    });
  }
  if (isNotVisible($('#skills'))) {
    alert("invisible");
  }
});
