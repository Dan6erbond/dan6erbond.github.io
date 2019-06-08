import find from "https://raw.githack.com/Dan6erbond/Fuzzle/master/javascript/fuzzle.js";
// Use this if throttling is a problem:
// https://rawcdn.githack.com/Dan6erbond/Fuzzle/faad868f8cec8d47880e5ed1c3ffbcc7a6ef833d/javascript/fuzzle.js

window.search = search;
window.update = update;

document.getElementById("results").style = "visibility:hidden;"

update();

function search(){
  var query = document.getElementById("query").value;
  if (query == null || query == ""){
    return;
  }

  var select = document.getElementById("group");
  var group = select.options[select.selectedIndex].value;

  var url;
  switch(group){
    case "movies":
      url = "https://raw.githubusercontent.com/Dan6erbond/Fuzzle/master/data/movies/movies.json";
      break;
    case "games":
      url = "https://raw.githubusercontent.com/Dan6erbond/Fuzzle/master/data/games/games.json";
      break;
    case "countries":
      url = "https://raw.githubusercontent.com/Dan6erbond/Fuzzle/master/data/places/countries.json";
      break;
    default:
      url = "https://raw.githubusercontent.com/Dan6erbond/Fuzzle/master/data/economy/companies.json";
      break;
  }

  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var ul = document.getElementById("searchResults");
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }

      var array = JSON.parse(this.responseText);
      var timeStarted = new Date();
      var results = find(array, query);
      var timeEnded = new Date();
      var maxRes = Math.min(10, results.length);

      document.getElementById("results").style = "visibility:visible;"
      document.getElementById("searchTime").innerHTML = results.length + " Results in " + (timeEnded - timeStarted) + "ms";

      for (var i = 0; i < maxRes; i++){
        var result = results[i];
        var li = document.createElement("li");

        if ("appid" in result){
          var a = document.createElement("a");
          a.href = "https://store.steampowered.com/app/" + result["appid"];
          a.target = "_blank";
          a.innerHTML = result["key"];
          li.appendChild(a);
        } else {
          li.innerHTML = result["key"];
        }

        ul.appendChild(li);
      }
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function update(){
  var select = document.getElementById("group");
  var group = select.options[select.selectedIndex].value;

  var url;
  switch(group){
    case "movies":
      url = "https://raw.githubusercontent.com/Dan6erbond/Fuzzle/master/data/movies/movies.json";
      break;
    case "games":
      url = "https://raw.githubusercontent.com/Dan6erbond/Fuzzle/master/data/games/games.json";
      break;
    case "countries":
      url = "https://raw.githubusercontent.com/Dan6erbond/Fuzzle/master/data/places/countries.json";
      break;
    default:
      url = "https://raw.githubusercontent.com/Dan6erbond/Fuzzle/master/data/economy/companies.json";
      break;
  }

  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var array = JSON.parse(this.responseText);
      document.getElementById("amount").innerHTML = "Search through " + array.length + " " + select.options[select.selectedIndex].innerHTML + "."
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
