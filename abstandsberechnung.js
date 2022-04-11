"use strict";

// Array für die Ausgabe erstellen mit Name der Stadt und Abstand
var citiesDistance = [
    ["Köln", 0.0],
    ["Amsterdam", 0.0],
    ["Kassel", 0.0],
    ["Barcelona", 0.0],
    ["Tunis", 0.0],
    ["Kyoto", 0.0],
    ["Bucharest", 0.0],
    ["Graz", 0.0],
    ["Kairo", 0.0],
    ["Dublin", 0.0],
    ["Oslo", 0.0],
];

// Punkt point für Formel
var lat1 = point[1];
var lon1 = point[0];

// Berechnung der Abstände von Städten zu Punkt mit for-Schleife 
for(var i = 0; i < cities.length; i++) {
    // Punkte von cities-Array als zweiten Punkt speichern 
    var lat2 = cities[i][1];
    var lon2 = cities[i][0];
    
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI/180; // φ, λ in radians
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = Math.round((R * c / 1000) * 10) / 10; // in km umgerechnet und auf eine Nachkommastelle gerundet
    // Distanzen runden auf zwei Nachkommastellen

    // In array cities distance eintragen
    citiesDistance[i][1] = d;
    // Zur Kontrolle in Console ausgeben
    console.log(citiesDistance[i][0] + ": " + citiesDistance[i][1] + "km");

}

// Array citiesDistance aufsteigend sortieren
//Quelle: https://stackoverflow.com/questions/16096872/how-to-sort-2-dimensional-array-by-column-value
citiesDistance.sort(compareSecondColumn); 

function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}

// Textausgabe von aufsteigend sortierten citiesDistance als Text mit Zeilenumbruch (in HTML) eingefügen
var ausgabeAB = "";
for(var i = 0; i < citiesDistance.length; i++) {
    ausgabeAB = ausgabeAB + citiesDistance[i][0] + ": " +  citiesDistance[i][1] + "km" + "<br />";
}

console.log(" ");
console.log(ausgabeAB);
console.log(" ");
console.log(" ");
// citiesDistance in Console ausgeben
for(var i = 0; i < citiesDistance.length; i++){
    console.log(citiesDistance[i][0] + ": " +  citiesDistance[i][1] + "km");
}
