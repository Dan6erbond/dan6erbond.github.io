function GenerateSlideshow(jsonPath){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);

        for (var i = 0; i < myArr.length; i++) {
          img = myArr[i];

          var container = document.createElement("div");
          container.classList.add("mySlides");
          container.classList.add("fade");

          var numbertext = document.createElement("div");
          numbertext.classList.add("numbertext");
          var number = document.createTextNode(i+1 + "/" + myArr.length);
          numbertext.appendChild(number);

          var slideshowImg = document.createElement("img");
          slideshowImg.classList.add("collectionSlideshowImage");
          slideshowImg.src = img.src;

          var text = document.createElement("div");
          text.classList.add("text");
          var caption = document.createTextNode(img.caption);
          text.appendChild(caption);

          container.appendChild(numbertext);
          container.appendChild(slideshowImg);
          container.appendChild(text);

          var slideshowContainer = document.getElementsByClassName("slideshow-container")[0];
          slideshowContainer.appendChild(container);

          var dot = document.createElement("span");
          dot.classList.add("dot");

          var dotPlaceholder = document.getElementsByClassName("dotPlaceholder")[0];
          dotPlaceholder.appendChild(dot);
        }
    }
};
xmlhttp.open("GET", jsonPath, true);
xmlhttp.send();

setTimeout(function() { showSlides(slideIndex); }, 500);
SetOnClick();
}

function SetOnClick(){
  var dots = document.getElementsByClassName("dot");
  for(var i = 0; i < dots.length; i++){
    dots[i].onclick = function() {
         Slideshow.currentSlide(i+1);
     };
  }
}
