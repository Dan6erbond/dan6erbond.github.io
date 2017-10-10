function UpdateZusammenfassungen(){
  var jsonText;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          jsonText = this.responseText;
      }
  };
  xmlhttp.open("GET", "/I1A/Zusammenfassungen/Zusammenfassungen.json", true);
  xmlhttp.send();

  console.log(jsonText);
  var zusammenfassungen = JSON.parse(jsonText);

  for (var i = 0; i < zusammenfassungen.length; i++) {
    var zusammenfassung = zusammenfassungen[i];
    var placeholder = document.createElement("div");

    var title = document.createElement("p");
    var titleText = document.createTextNode(zusammenfassung);
    title.appendChild(titleText);

    var img = document.createElement("img");
    img.src = "/I1A/Zusammenfassungen/Images/" + zusammenfassung + ".png";

    var downloadButton = document.createElement("a");
    downloadButton.classList.add("zusammenfassungDownload");
    downloadButton.href = "I1A/Zusammenfassungen/" + zusammenfassung + ".pdf";
    var downloadText = document.createTextNode(zusammenfassung);
    downloadButton.appendChild(downloadText);

    placeholder.appendChild(title);
    placeholder.appendChild(img);
    placeholder.appendChild(downloadButton);

    var zusammenfassungen = document.getElementById("Zusammenfassungen");
    zusammenfassungen.appendChild(placeholder);
  }
}
