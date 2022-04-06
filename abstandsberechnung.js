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

var lat1 = point[1];
var lon1 = point[0];

//
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

const d = R * c; // in metres

citiesDistance[i][1] = d;
// gucken ob es funktioniert
console.log(citiesDistance[i][0] + ": " + citiesDistance[i][1] + "m");

}

// Array citiesDistance aufsteigend sortieren
citiesDistance.sort(compareSecondColumn);

function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}

console.log(" ");
console.log(" ");

for(var i = 0; i < citiesDistance.length; i++){
    console.log(citiesDistance[i][0] + ": " +  citiesDistance[i][1] + "m");
}





