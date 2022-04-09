"use strict";

var point = [7.595737,51.969508];
var cities = [
    [6.9570, 50.9367], //Köln
    [4.9041, 52.3676], //Amsterdam
    [9.4797, 51.3127], //Kassel
    [2.1686, 41.3874], //Barcelona
    [10.1815, 36.8065], //Tunis
    [135.7681,35.0116], //Kyoto
    [26.1025, 44.4268], //Bucharest
    [15.4395, 47.0707], //Graz
    [31.2357, 30.0444], //Kairo
    [6.2603, 53.3498], //Dublin
    [10.7522, 59.9139] //Oslo
  ];

// Array für die Ausgabe erstellen
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
    // gucken ob es funktioniert
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

// Textausgabe von aufsteigend sortierten citiesDistance als Text mit Zeilenumbruch in HTML eingefügt 
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
    console.log(citiesDistance[i][0] + ": " +  citiesDistance[i][1] + "m");
}
