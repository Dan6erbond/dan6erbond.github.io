setTimeout(function() {
  UpdateZusammenfassungen();
}, 1);

function UpdateZusammenfassungen() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);

      for (var i = 0; i < myArr.length; i++) {
        zusammenfassung = myArr[i];
        var placeholder = document.createElement("div");
        placeholder.classList.add("document");
        placeholder.classList.add("third");

        var img = document.createElement("img");
        img.classList.add("zusammenfassungThumbnail");
        img.src = "Documents/Images/Zusammenfassung Thumbnail.png";
        img.alt = zusammenfassung;

        var title = document.createElement("p");
        var titleString = zusammenfassung.fach + "<br><u>" + zusammenfassung.thema + "</u><br>" + zusammenfassung.datum;
        title.innerHTML = titleString;

        var downloadButton = document.createElement("a");
        downloadButton.classList.add("downloadButton");
        var link = "Documents/Zusammenfassungen/" + zusammenfassung.fach + " - " + zusammenfassung.thema + ".pdf";
        if (zusammenfassung.autor != "RaviAnand Mohabir")
          link = "Documents/Zusammenfassungen/" + zusammenfassung.fach + " - " + zusammenfassung.thema + " - " + zusammenfassung.autor + ".pdf";
        downloadButton.href = link;
        downloadButton.download = zusammenfassung.fach + " - " + zusammenfassung.thema + ".pdf";
        downloadButton.target = '_blank';
        downloadButton.innerHTML = '<i class="fa fa-download"></i>' + ' DOWNLOAD';

        placeholder.appendChild(img);
        placeholder.appendChild(title);
        placeholder.appendChild(downloadButton);

        var zusammenfassungen = document.getElementById("Zusammenfassungen");
        zusammenfassungen.appendChild(placeholder);
      }
    }
  };
  xmlhttp.open("GET", "Documents/Zusammenfassungen/Zusammenfassungen.json", true);
  xmlhttp.send();
}
