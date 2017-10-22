function UpdateZusammenfassungen(){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);

        for (var i = 0; i < myArr.length; i++) {
          zusammenfassung = myArr[i];
          if (zusammenfassung != "Zusammenfassungen.json" && zusammenfassung != "Images"){
            var placeholder = document.createElement("div");
            placeholder.classList.add("zusammenfassung");

            var img = document.createElement("img");
            img.classList.add("zusammenfassungImg");
            img.src = "Documents/Images/Zusammenfassung Thumbnail.png";
            img.alt = zusammenfassung;

            var title = document.createElement("p");
            var titleText = document.createTextNode(zusammenfassung);
            title.classList.add("zusammenfassungTitle");
            title.appendChild(titleText);

            var downloadButton = document.createElement("a");
            downloadButton.classList.add("zusammenfassungDownload");
            downloadButton.href = "Documents/Zusammenfassungen/" + zusammenfassung + ".pdf";
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
xmlhttp.open("GET", "/I1A/Documents/Zusammenfassungen/Zusammenfassungen.json", true);
xmlhttp.send();
}
