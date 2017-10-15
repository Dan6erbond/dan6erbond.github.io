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

          var beginning = '<span class="dot" ';
          var onClick = 'onclick="currentSlide(' + (i+1) + ');"';
          var end = '></span>';
          var dot = beginning + onClick + end;
          console.log(dot);
          document.getElementsByClassName ("dotPlaceholder")[0].innerHTML += dot;
        }
    }
};
xmlhttp.open("GET", jsonPath, true);
xmlhttp.send();

setTimeout(function() {
  showSlides(slideIndex);
}, 500);
}

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
