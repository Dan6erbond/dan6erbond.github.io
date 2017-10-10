function UpdateZusammenfassungen(jsonPath){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);

        for (var i = 0; i < myArr.length; i++) {
          zusammenfassung = myArr[i];
        }
    }
};
xmlhttp.open("GET", jsonPath, true);
xmlhttp.send();
}
