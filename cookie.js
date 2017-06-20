'use strict';

var hrsOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
console.log(hrsOpen);

var cookieStores = [];

function Store(location, minCustPerHour, maxCustPerHour, avgCookiesSold){
  this.location = location;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesSold = avgCookiesSold;
  this.randCust = [];
  cookieStores.push(this);
  genCookies(this);
  createRow(this);
};

var body = document.getElementById('cookieTable');
console.log(body);

var pike = new Store('pike', 23, 65, 6.3);
var seaTac = new Store('seaTac', 3, 24, 1.2);
var seaCenter = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

// var ulElement = document.getElementById('primary-list');
// var sumTotalCookiesSold = 0;

function genCookies(store){
  for (var i = 0; i < hrsOpen.length; i++) {
    var cookieDifference = store.maxCustPerHour - store.minCustPerHour;
    var totalCookiesSold = ((Math.random() * cookieDifference) + store.minCustPerHour) * store.avgCookiesSold;
    totalCookiesSold = Math.floor(totalCookiesSold);
    console.log(totalCookiesSold);
    store.randCust.push(totalCookiesSold);
  }
}

// function genAllCookies() {
//   for (var i = 0; i < cookieStores.length; i++) {
//     genCookies(cookieStores[i]);
//   }
// }


// var data = document.createElement('td');
//var tableBody = document.createElement('tbody');
//table.appendChild(tableBody);

function createRow(store) {
  var row = document.createElement('tr');
  var data = document.createElement('td');
  body.appendChild(row);
  data.textContent = store.location;
  row.appendChild(data);
  for (var i = 0; i < hrsOpen.length; i++) {
    var cellInfo = document.createElement('td');
    cellInfo.textContent = store.randCust[i];
    row.appendChild(cellInfo);
    console.log(store.location);
  }
}

// function createAllRows() {
//   for (var i = 0; i < cookieStores.length; i++) {
//     createRow(cookieStores[i]);
//   }
// }
//
// genAllCookies();
// createAllRows();

var form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
   event.preventDefault();
   console.log(event.target.location.value);
   console.log(event.target.minCustPerHour.value);
   console.log(event.target.maxCustPerHour.value);
   console.log(event.target.avgCookiesSold.value);

   var storeName = event.target.location.value;
   var minCust = event.target.minCustPerHour.value;
   var maxCust = event.target.maxCustPerHour.value;
   var avgCust = event.target.avgCookiesSold.value;

   var newStore = new Store(storeName, minCust, maxCust, avgCust);
}
