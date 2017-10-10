function UpdateZusammenfassungen(){
  var placeholder = document.createElement("div");

  var title = document.createElement("p");
  var titleText = document.createTextNode("zusammenfassung");

  var img = document.createElement("img");
  img.src = "/I1A/Zusammenfassungen/Images/" + "zusammenfassung";

  var downloadButton = document.createElement("a");
  downloadButton.classList.add("zusammenfassungDownload");
  downloadButton.href = "I1A/Zusammenfassungen/" + "zusammenfassung";

  placeholder.appendChild(title);
  placeholder.appendChild(img);
  placeholder.appendChild(downloadButton);
  title.appendChild(titleText);

  var zusammenfassungen = document.getElementById("Zusammenfassungen");
  zusammenfassungen.appendChild(placeholder);

  const fs = require('fs');
  fs.readdir("I1A/Zusammenfassungen/", (err, files) => {
    files.forEach(zusammenfassung => {
      var placeholder = document.createElement("div");

      var title = document.createElement("p");
      var titleText = document.createTextNode(zusammenfassung);

      var img = document.createElement("img");
      img.src = "/I1A/Zusammenfassungen/Images/" + zusammenfassung;

      var downloadButton = document.createElement("a");
      downloadButton.classList.add("zusammenfassungDownload");
      downloadButton.href = "I1A/Zusammenfassungen/" + zusammenfassung;

      placeholder.appendChild(title);
      placeholder.appendChild(img);
      placeholder.appendChild(downloadButton);
      title.appendChild(titleText);

      var zusammenfassungen = document.getElementById("Zusammenfassungen");
      zusammenfassungen.appendChild(placeholder);
    });
  })
}
