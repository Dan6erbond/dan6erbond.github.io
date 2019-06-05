bots = [
  {
    "id": "aliciane",
    "name": "Aliciane",
    "img": "lydocia/aliciane.png"
  },
  {
    "id": "lydocia",
    "name": "lydocia",
    "img": "lydocia/lydocia.png"
  },
  {
    "id": "polydicer",
    "name": "Polydicer",
    "img": "lydocia/polydicer.png"
  },
  {
    "id": "banhammer",
    "name": "Banhammer",
    "img": "/mariavi/img/banhammer/banhammer.png"
  },
  {
    "id": "melon",
    "name": "Melon",
    "img": "/mariavi/img/melon/melon.png",
    "url": "https://discordapp.com/oauth2/authorize?client_id=563957035763236864&scope=bot&permissions=8"
  },
  {
    "id": "reddify",
    "name": "Reddify",
    "img": "/mariavi/img/reddify/reddify.png"
  },
  {
    "id": "submoon",
    "name": "Submoon",
    "img": "/mariavi/img/substarters/submoon/submoon.png"
  },
  {
    "id": "substar",
    "name": "Substar",
    "img": "/mariavi/img/substarters/substar/substar.png"
  }
]

function loadData(id){
  var url = new URL(document.location.href).searchParams;

  if (id == null){
    if (url.get("bot") == null){
      return;
    } else {
      id = url.get("bot");
    }
  }

  var bot;

  for (i in bots){
    bot = bots[i];
    if (bot["id"] == id){
      break;
    }
  }

  if (document.getElementById("name") != null){
    if (bot["name"] != null){
      document.getElementById("name").innerHTML = bot["name"];
    }
    if (bot["url"] != null){
      document.getElementById("name").href = bot["url"];
    }
  }
  if (bot["img"] != null){
    if (document.getElementsByTagName("img")[0] != null) {
      document.getElementsByTagName("img")[0].src = bot["img"];
    }
  }

  var led = document.getElementById("led");

  if (url.get("textColor") != null){
    document.getElementsByTagName("a")[0].style.color = url.get("textColor");
    document.getElementsByClassName("not-found")[0].style.color = url.get("textColor");
  }

  if (url.get("borderColor") != null){
    led.style.borderColor = url.get("borderColor");
  }

  var mobileReq = url.get("mobile") != null && url.get("mobile").toLowerCase() == "true";
  if (mobileReq || isMobileDevice()){
    document.getElementById("bot").className = "mobile";
  }

  loadStatus(id, led);
}

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function loadStatus(id, led){
  setTimeout(function(){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var bots = JSON.parse(this.responseText);

        var online = false;

        if (id in bots){
          if (typeof bots[id] == "number"){
            var diff = (new Date() - new Date(bots[id] * 1000)) / 1000 / 60;
            online = diff < 10;
          } else if (typeof bots[id] == "boolean") {
            online = bots[id];
          }
        }

        document.getElementById("status").innerHTML = online ? "Online" : "Offline";

        setTimeout(function(){
          if (online){
            led.className = "green";
          } else {
            led.className = "red";
          }
        }, 5);
      }
    };

    xmlhttp.open("GET", "https://api.myjson.com/bins/1f1baf", true);
    xmlhttp.send();

    loadStatus(id, led);
  }, 1000);
}

function card(){
  console.log("test");
}
