setTimeout(function() {
  includeAllHTML();
}, 500);

function includeAllHTML () {
  var divs = document.getElementsByTagName ('div');
  for (i = 0; i < divs.length; i++){
      if(divs[i].getAttribute('includeFilePath'))
        includeHTML (divs[i], divs[i].getAttribute ('includeFilePath'));
  }
}

function includeHTML(element, filePath){
  console.log(filePath);
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var fileContent = this.responseText;
        element.innerHTML = fileContent;
    }
}
xmlhttp.open("GET", filePath, true);
xmlhttp.send();
}
