setTimeout(function() {
  UpdateHomework();
}, 1);

function UpdateHomework() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      for (var i = 0; i < myArr.length; i++) {
        var table = document.getElementById('homeworkTable').getElementsByTagName('tbody')[0];
        var tableRow = table.insertRow();
        var date = tableRow.insertCell();
        var subject = tableRow.insertCell();
        var job = tableRow.insertCell();
        date.innerHTML = myArr[i].datum;
        subject.innerHTML = myArr[i].fach;
        job.innerHTML = myArr[i].aufgabe;
      }
    }
  };
  xmlhttp.open("GET", "https://crossorigin.me/http://dan6erbond.bplaced.net/Hausaufgaben.json", true);
  xmlhttp.send();
}
