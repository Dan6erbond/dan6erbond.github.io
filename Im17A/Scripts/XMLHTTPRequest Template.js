//GET
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://api.myjson.com/bins/1h8sp7", true);
xmlhttp.send();

//PUT
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("PUT", "https://api.myjson.com/bins/1h8sp7", true);
xmlhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
xmlhttp.send("[{\"datum\":\"04.04.2018\",\"fach\":\"Informatik\",\"aufgabe\":\"Quizfragen an Herr Meyer schicken\"},{\"datum\":\"04.04.2018\",\"fach\":\"Finanz- und Rechnungswesen\",\"aufgabe\":\"Aufgabe A und B auf neuem Blatt beenden\"},{\"datum\":\"04.04.2018\",\"fach\":\"Finanz- und Rechnungswesen\",\"aufgabe\":\"Auftrag zu Devisen beenden\"},{\"datum\":\"04.04.2018\",\"fach\":\"Informatik\",\"aufgabe\":\"test\"},{\"datum\":\"05.04.2018\",\"fach\":\"Geschichte\",\"aufgabe\":\"Staatsaufbau kennenlernen\"},{\"datum\":\"05.04.2018\",\"fach\":\"Geschichte\",\"aufgabe\":\"Meinung zu Stimmrecht f\u00FCr Ausl\u00E4nder\"},{\"datum\":\"06.04.2018\",\"fach\":\"Englisch\",\"aufgabe\":\"Eye of Minds bis S. 137 lesen\"},{\"datum\":\"11.04.2018\",\"fach\":\"Informatik\",\"aufgabe\":\"KG_304_1724_OS_Erl\u00E4utern\"},{\"datum\":\"02.05.2018\",\"fach\":\"Finanz- und Rechnungswesen\",\"aufgabe\":\"keine Klassenstunde\"},{\"datum\":\"04.05.2018\",\"fach\":\"Englisch\",\"aufgabe\":\"Eye of Minds bis S. 157 lesen\"},{\"datum\":\"11.05.2018\",\"fach\":\"Englisch\",\"aufgabe\":\"Eye of Minds bis S. 176 lesen\"},{\"datum\":\"18.05.2018\",\"fach\":\"Englisch\",\"aufgabe\":\"Eye of Minds bis S. 205 lesen\"},{\"datum\":\"25.05.2018\",\"fach\":\"Englisch\",\"aufgabe\":\"Eye of Minds bis S. 221 lesen\"},{\"datum\":\"01.06.2018\",\"fach\":\"Englisch\",\"aufgabe\":\"Eye of Minds bis S. 242 lesen\"},{\"datum\":\"08.06.2018\",\"fach\":\"Englisch\",\"aufgabe\":\"Eye of Minds bis S. 256 lesen\"},{\"datum\":\"15.06.2018\",\"fach\":\"Englisch\",\"aufgabe\":\"Eye of Minds bis S. 278 lesen\"},{\"datum\":\"22.06.2018\",\"fach\":\"Englisch\",\"aufgabe\":\"Eye of Minds bis S. 299 lesen\"}]");
