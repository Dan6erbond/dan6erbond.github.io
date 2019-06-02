function loadStatus(botName){
  var url = new URL(document.location.href).searchParams;
  var led = document.getElementById("led");

  if (url.get("textColor") != null){
    ps = document.getElementsByTagName("p");
    for (i in ps){
      if (ps[i].style != null){
        ps[i].style.color = url.get("textColor");
      }
    }
  }

  if (url.get("borderColor") != null){
    console.log(url.get("borderColor"));
    led.style.borderColor = url.get("borderColor");
  }

  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var bots = JSON.parse(this.responseText);
      diff = (new Date() - new Date(bots[botName] * 1000)) / 1000 / 60;

      if (diff < 10){
        led.classList.add("green");
      } else {
        led.classList.add("red");
      }
    }
  };

  xmlhttp.open("GET", "https://api.myjson.com/bins/1f1baf", true);
  xmlhttp.send();
}
