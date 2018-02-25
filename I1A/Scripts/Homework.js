setTimeout(function() {
  UpdateHomework();
}, 1);

function UpdateHomework() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText)[''];
      for (var i = 0; i < myArr.length; i++) {
        var table = document.findElementById('HomeworkTable');
        var tableRow = document.createElement('tr');
        var date = document.createElement('td');
        var subject = document.createElement('td');
        var job = document.createElement('td');
        date.innerHTML = myArr[i].datum;
        subject.innerHTML = myArr[i].fach;
        job.innerHTML = myArr[i].aufgabe;
        tablerow.appendChild(date);
        tablerow.appendChild(subject);
        tablerow.appendChild(job);
        table.appendChild(tableRow);
      }
    }
  };
  xmlhttp.open("GET", "http://dan6erbond.bplaced.net/Hausaufgaben.json", true);
  xmlhttp.send();
}
