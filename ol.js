'use strict';

var hrsOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm', '8pm'];
 console.log (hrsOpen);

var pikeStore = {
   location: '1st and Pike',
   minCust: 23,
   maxCust: 65,
   avgCookieSale: 6.3,
};
console.log (pikeStore);

var ulElement = document.getElementById ('primary-list');
var sumTotalCookiesSold = 0;

for (var i = 0; i < hrsOpen.length; i++) {
   var totalCookiesSold = Math.floor(((Math.random() * 65) + 23) * pikeStore.avgCookieSale);
   console.log (totalCookiesSold);
   var sumTotalCookiesSold = sumTotalCookiesSold + totalCookiesSold;
   console.log (sumTotalCookiesSold);
   var listItemElement = document.createElement ('li');
   listItemElement.textContent = hrsOpen[i] + ' : ' + totalCookiesSold + ' cookies';
   ulElement.appendChild(listItemElement);
   console.log(ulElement.children);

};

//listItemElement.textContent = 'Total Cookies Sold @ ' + pikeStore.location + ': ' sumTotalCookiesSold;

var seaTac = {
   location: 'SeaTac Airport',
   minCust: 3,
   maxCust: 24,
   avgCookieSale: 1.2,
};
console.log (seaTac);

var ulElement = document.getElementById ('second-list');
var sumTotalCookiesSold = 0;

for (var i = 0; i < hrsOpen.length; i++) {
   var totalCookiesSold = Math.floor(((Math.random() * 24) + 3) * seaTac.avgCookieSale);
   console.log (totalCookiesSold);
   var sumTotalCookiesSold = sumTotalCookiesSold + totalCookiesSold;
   console.log (sumTotalCookiesSold);
   var listItemElement = document.createElement ('li');
   listItemElement.textContent = hrsOpen[i] + ' : ' + totalCookiesSold + ' cookies';
   ulElement.appendChild(listItemElement);
   console.log(ulElement.children);
};

//listItemElement.textContent = 'Total Cookies Sold @ ' + seaTac.location + ': ' sumTotalCookiesSold;

var  seaCenter = {
   location: 'Seattle Center',
   minCust: 11,
   maxCust: 38,
   avgCookieSale: 3.7,
};
console.log (seaCenter);

var ulElement = document.getElementById ('third-list');
var sumTotalCookiesSold = 0;

for (var i = 0; i < hrsOpen.length; i++) {
   var totalCookiesSold = Math.floor(((Math.random() * 38) + 11) * seaCenter.avgCookieSale);
   console.log (totalCookiesSold);
   var sumTotalCookiesSold = sumTotalCookiesSold + totalCookiesSold;
   console.log (sumTotalCookiesSold);
   var listItemElement = document.createElement ('li');
   listItemElement.textContent = hrsOpen[i] + ' : ' + totalCookiesSold + ' cookies';
   ulElement.appendChild(listItemElement);
   console.log(ulElement.children);
};

//listItemElement.textContent = 'Total Cookies Sold @ ' + seaCenter.location + ': ' sumTotalCookiesSold;

var  capHill = {
   location: 'Capitol Hill',
   minCust: 20,
   maxCust: 38,
   avgCookieSale: 2.3,
};
console.log (capHill);

var ulElement = document.getElementById ('fourth-list');
var sumTotalCookiesSold = 0;

for (var i = 0; i < hrsOpen.length; i++) {
   var totalCookiesSold = Math.floor(((Math.random() * 38) + 20) * capHill.avgCookieSale);
   console.log (totalCookiesSold);
   var sumTotalCookiesSold = sumTotalCookiesSold + totalCookiesSold;
   console.log (sumTotalCookiesSold);
var listItemElement = document.createElement ('li');
   listItemElement.textContent = hrsOpen[i] + ' : ' + totalCookiesSold + ' cookies';
   ulElement.appendChild(listItemElement);
   console.log(ulElement.children);
};

 //listItemElement.textContent = 'Total Cookies Sold @ ' + capHill.location + ': ' + sumTotalCookiesSold;

var  alki = {
   location: 'Alki',
   minCust: 2,
   maxCust: 16,
   avgCookieSale: 4.6,
};
console.log (alki);

var ulElement = document.getElementById ('fifth-list');
var sumTotalCookiesSold = 0;

for (var i = 0; i < hrsOpen.length; i++) {
   var totalCookiesSold = Math.floor(((Math.random() * 16) + 2) * alki.avgCookieSale);
   console.log (totalCookiesSold);
   var sumTotalCookiesSold = sumTotalCookiesSold + totalCookiesSold;
   console.log (sumTotalCookiesSold);
   var listItemElement = document.createElement ('li');
   listItemElement.textContent = hrsOpen[i] + ' : ' + totalCookiesSold + ' cookies';
   ulElement.appendChild(listItemElement);
   console.log(ulElement.children);
};

//listItemElement.textContent = 'Total Cookies Sold @ ' + alki.location + ': ' + sumTotalCookiesSold;
