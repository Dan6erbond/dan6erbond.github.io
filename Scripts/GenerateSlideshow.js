function GenerateSlideshow(jsonPath){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);

        for (var i = 0; i < myArr.length; i++) {
          img = myArr[i];

          var container = document.createElement("div");
          container.classList.add("mySlide fade");

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

          var slideshow-container = document.getElementsByClassName("slideshow-container")[0];
          zusammenfassungen.appendChild(container);

          var dot = document.createElement("span");
          dot.classList.add("dot");
          dot.onclick = function(){currentSlide(i+1);};
        }
    }
};
xmlhttp.open("GET", jsonPath, true);
xmlhttp.send();
}
