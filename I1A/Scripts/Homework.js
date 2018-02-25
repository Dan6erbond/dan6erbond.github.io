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
        var tableRow = document.createElement('tr');
        var date = document.createElement('td');
        var subject = document.createElement('td');
        var job = document.createElement('td');
        date.innerHTML = myArr[i].datum;
        subject.innerHTML = myArr[i].fach;
        job.innerHTML = myArr[i].aufgabe;
        tableRow.appendChild(date);
        tableRow.appendChild(subject);
        tableRow.appendChild(job);
        table.appendChild(tableRow);
      }
    }
  };
  xmlhttp.open("GET", "https://cors.io/?http://dan6erbond.bplaced.net/Hausaufgaben.json", true);
  xmlhttp.send();
}
