function getCountryName(country) {
  var text = null;
  $(country).children("title").each(function() {
    if ($(this).text() != "" && $(this).text() != null) {
      text = $(this).text();
    }
  });
  return text;
}

$(document).ready(function() {
  $(".landxx").each(function() {
    if (getCountryName($(this)) != null) {
      $(this).click(function() {
        alert(getCountryName($(this)));
      });
    }
  });
  $(".landxx").hover(function() {
    if (getCountryName($(this)) != null) {
      $(this).css({
        "fill": "rgb(171, 204, 51)"
      });
      $("#country-name").text(getCountryName($(this)));
    }
  }, function() {
    if (getCountryName($(this)) != null) {
      $(this).css({
        "fill": "#c0c0c0"
      });
      $("#country-name").text("");
    }
  });
});
