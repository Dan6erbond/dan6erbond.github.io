var xmlhttp = new XMLHttpRequest();
xmlhttp.open("PUT", "https://api.myjson.com/bins/1h8sp7", true);
xmlhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
xmlhttp.send(string);

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://api.myjson.com/bins/1h8sp7", true);
xmlhttp.send();
