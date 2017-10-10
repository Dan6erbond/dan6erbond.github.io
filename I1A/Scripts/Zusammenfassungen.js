function UpdateZusammenfassungen(){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);

        for (var i = 0; i < myArr.length; i++) {
          zusammenfassung = myArr[i];
          if (zusammenfassung != "Zusammenfassungen.json" && zusammenfassung != "Images"){
            var placeholder = document.createElement("div");

          var title = document.createElement("p");
          var titleText = document.createTextNode(zusammenfassung);
          title.classList.add("zusammenfassungTitle");
          title.appendChild(titleText);

          var img = document.createElement("img");
          img.classList.add("zusammenfassungImg");
          img.src = "/I1A/Zusammenfassungen/Images/" + zusammenfassung + ".png";

          var downloadButton = document.createElement("a");
          downloadButton.classList.add("zusammenfassungDownload");
          downloadButton.href = "/I1A/Zusammenfassungen/" + zusammenfassung + ".pdf";
          var downloadText = document.createTextNode("DOWNLOAD");
          downloadButton.appendChild(downloadText);

          placeholder.appendChild(title);
          placeholder.appendChild(img);
          placeholder.appendChild(downloadButton);

          var zusammenfassungen = document.getElementById("Zusammenfassungen");
          zusammenfassungen.appendChild(placeholder);
        }
        }
    }
};
xmlhttp.open("GET", "/I1A/Zusammenfassungen/Zusammenfassungen.json", true);
xmlhttp.send();
}
