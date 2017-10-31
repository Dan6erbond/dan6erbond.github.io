setTimeout(function() {
  UpdateZusammenfassungen();
}, 1);

function UpdateZusammenfassungen(){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);

        for (var i = 0; i < myArr.length; i++) {
          zusammenfassung = myArr[i];
          if (zusammenfassung != "Zusammenfassungen.json" && zusammenfassung != "Images"){
            var placeholder = document.createElement("div");
            placeholder.classList.add("document");
            placeholder.classList.add("third");

            var img = document.createElement("img");
            img.classList.add("documentThumbnail");
            img.src = "Documents/Images/Zusammenfassung Thumbnail.png";
            img.alt = zusammenfassung;

            var title = document.createElement("p");
            var titleText = document.createTextNode(zusammenfassung);
            title.classList.add("documentTitle");
            title.appendChild(titleText);

            var downloadButton = document.createElement("a");
            downloadButton.classList.add("downloadButton");
            downloadButton.href = "Documents/Zusammenfassungen/" + zusammenfassung + ".pdf";
            downloadButton.target = '_blank';
            downloadButton.innerHTML = '<i class="fa fa-download"></i>' + ' DOWNLOAD';

            placeholder.appendChild(img);
            placeholder.appendChild(title);
            placeholder.appendChild(downloadButton);

            var zusammenfassungen = document.getElementById("Zusammenfassungen");
            zusammenfassungen.appendChild(placeholder);
          }
        }
    }
};
xmlhttp.open("GET", "Documents/Zusammenfassungen/Zusammenfassungen.json", true);
xmlhttp.send();
}
