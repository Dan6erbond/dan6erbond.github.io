var homeworkArray;

setTimeout(function() {
  UpdateHomework();
}, 1);

function UpdateHomework() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      homeworkArray = JSON.parse(this.responseText);
      for (var i = 0; i < homeworkArray.length; i++) {
        AddHomeworkToTable(homeworkArray[i].datum, homeworkArray[i].fach, homeworkArray[i].aufgabe);
      }
    }
  };
  xmlhttp.open("GET", "https://api.myjson.com/bins/1h8sp7", true);
  xmlhttp.send();
}

function AddHomeworkToTable(a, b, c){
  var table = document.getElementById('homeworkTable').getElementsByTagName('tbody')[0];
  var tableRow = table.insertRow();
  var date = tableRow.insertCell();
  var subject = tableRow.insertCell();
  var job = tableRow.insertCell();
  date.innerHTML = a;
  subject.innerHTML = b;
  job.innerHTML = c;
}

function AddHomework() {
  var homework = new Object();
  var date = new Date(document.getElementById("homeworkDate").value + 'T00:00');
  if(isNaN(date.getDate()) || isNaN(date.getMonth()) || isNaN(date.getFullYear()) || document.getElementById("homeworkJob").value == "")
    return;
  var day = date.getDate();
  if(day < 10)
    day = "0" + day;
  var month = date.getMonth() + 1;
  if(month < 10)
    month = "0" + month;
  var dateString = day + "." + month + "." + date.getFullYear();
  homework.datum = dateString;
  homework.fach = document.getElementById("homeworkSubject").value;
  homework.aufgabe = document.getElementById("homeworkJob").value;
  AddHomeworkToTable(homework.datum, homework.fach, homework.aufgabe);
  homeworkArray.push(homework);
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("PUT", "https://api.myjson.com/bins/1h8sp7", true);
  xmlhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
  xmlhttp.send(JSON.stringify(homeworkArray));
}
