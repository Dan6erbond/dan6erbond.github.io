import find from "https://raw.githack.com/Dan6erbond/Fuzzle/master/javascript/fuzzle.js";
// Use this if throttling is a problem:
// https://rawcdn.githack.com/Dan6erbond/Fuzzle/faad868f8cec8d47880e5ed1c3ffbcc7a6ef833d/javascript/fuzzle.js

var url = new URL(document.location.href).searchParams;

if (url.get("q") != "" && url.get("q") != null){
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var array = JSON.parse(this.responseText);

      var query = url.get("q");

      document.getElementsByTagName("h1")[1].innerHTML = "'" + query + "'";

      var results = find(array, query, ["description"]);

      if (results.length < 1){
        document.getElementById("badSearch").style = "visibility: visible;";
        return;
      }

      for (var i in results){
        var result = results[i];

        var li = document.createElement("li");

        var a = document.createElement("a");
        a.innerHTML = result["key"];
        a.href = result["url"];

        var p = document.createElement("p");
        p.innerHTML = result["description"];

        li.appendChild(a);
        li.appendChild(p);

        document.getElementsByTagName("ul")[1].appendChild(li);
      }
    }
  };

  xmlhttp.open("GET", "pages.json", true);
  xmlhttp.send();
}
