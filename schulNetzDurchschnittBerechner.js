//schulNetz Durchschnitt Berechner
//Kopiere dieses Skript in die Konsole

var table = document.getElementsByClassName('list')[0];
var tableRows = table.childNodes[1].childNodes;
var grades = [];

for (var i = 0; i < tableRows.length; i++){
  if (tableRows[i].childNodes[3] != null){
    var grade = parseFloat (tableRows[i].childNodes[3].innerHTML);
    if (!isNaN(grade))
      grades.push(grade);
  }
}

var sum = 0;

for (var j = 0; j < grades.length; j++){
  sum += grades[j];
}

var avg = sum/grades.length;
window.alert('Dein Durchschnitt ist: ' + avg);
