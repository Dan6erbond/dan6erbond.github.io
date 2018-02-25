setTimeout(function() {
  UpdateHomework();
}, 1);

function UpdateHomework() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText)[''];
      for (var i = 0; i < myArr.length; i++) {
        var table = document.getElementById('homeworkTable').childNodes[0];
        var tableRow = table.insertRow(tableRef.rows.length);
        var date = tableRow.insertCell(0);
        var subject = tableRow.insertCell(1);
        var job = tableRow.insertCell(2);
        date.innerHTML = myArr[i].datum;
        subject.innerHTML = myArr[i].fach;
        job.innerHTML = myArr[i].aufgabe;
      }
    }
  };
  xmlhttp.open("GET", "https://cors.io/?http://dan6erbond.bplaced.net/Hausaufgaben.json", true);
  xmlhttp.send();
}
