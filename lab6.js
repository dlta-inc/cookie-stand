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
};

var pike = new Store('pike', 23, 65, 6.3);
var seaTac = new Store('seaTac', 3, 24, 1.2);
var seaCenter = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var ulElement = document.getElementById('primary-list');
var sumTotalCookiesSold = 0;

function genCookies(store){
  for (var i = 0; i < hrsOpen.length; i++) {
    var cookieDifference = store.maxCustPerHour - store.minCustPerHour;
    var totalCookiesSold = ((Math.random() * cookieDifference) + store.minCustPerHour) * store.avgCookiesSold;
    totalCookiesSold = Math.floor(totalCookiesSold);
    console.log(totalCookiesSold);
    store.randCust.push(totalCookiesSold);


  }
}

function genAllCookies() {
  for (var i = 0; i < cookieStores.length; i++) {
    genCookies(cookieStores[i]);
  }
}

var table = document.getElementById('cookieTable');
var data = document.createElement('td');
//var tableBody = document.createElement('tbody');
//table.appendChild(tableBody);

function createRow(store) {
  var row = document.createElement('tr');
  var data = document.createElement('td');
  table.appendChild(row);
  data.textContent = store.location;
  row.appendChild(data);
  for (var i = 0; i < hrsOpen.length; i++) {
    var data = document.createElement('td');
    data.textContent = store.randCust[i];
    row.appendChild(data);
    console.log(store.location);
  }
}

function createAllRows() {
  for (var i = 0; i < cookieStores.length; i++) {
    createRow(cookieStores[i]);
  }
}

genAllCookies();
createAllRows();

// var sumTotalCookiesSold = sumTotalCookiesSold + totalCookiesSold;
// console.log(sumTotalCookiesSold);
// var listItemElement = document.createElement('li');
// listItemElement.textContent = hrsOpen[i] + ' : ' + totalCookiesSold + ' cookies';
// ulElement.appendChild(listItemElement);
// console.log(ulElement.children);

// var pikeStore = {
//   location: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
// };
// console.log(pikeStore);

// listItemElement.textContent = 'Total Cookies Sold @ ' + pikeStore.location + ': ' + sumTotalCookiesSold;

// var seaTac = {
//   location: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
//   hrsOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm', '8pm'],
// };
// console.log(seaTac);

// var ulElement = document.getElementById('second-list');
// var sumTotalCookiesSold = 0;

// for (var i = 0; i < hrsOpen.length; i++) {
//   var totalCookiesSold = Math.floor(((Math.random() * 24) + 3) * seaTac.avgCookieSale);
//   console.log(totalCookiesSold);
//   var sumTotalCookiesSold = sumTotalCookiesSold + totalCookiesSold;
//   console.log(sumTotalCookiesSold);
//   var listItemElement = document.createElement('li');
//   listItemElement.textContent = hrsOpen[i] + ' : ' + totalCookiesSold + ' cookies';
//   ulElement.appendChild(listItemElement);
//   console.log(ulElement.children);
// };

// listItemElement.textContent = 'Total Cookies Sold @ ' + seaTac.location + ': ' + sumTotalCookiesSold;




// var  seaCenter = {
//   location: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   hrsOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
// };
// console.log(seaCenter);

// var ulElement = document.getElementById('third-list');
// var sumTotalCookiesSold = 0;
//
// for (var i = 0; i < hrsOpen.length; i++) {
//   var totalCookiesSold = Math.floor(((Math.random() * 38) + 11) * seaCenter.avgCookieSale);
//   console.log (totalCookiesSold);
//   var sumTotalCookiesSold = sumTotalCookiesSold + totalCookiesSold;
//   console.log (sumTotalCookiesSold);
//   var listItemElement = document.createElement('li');
//   listItemElement.textContent = hrsOpen[i] + ' : ' + totalCookiesSold + ' cookies';
//   ulElement.appendChild(listItemElement);
//   console.log(ulElement.children);
// };
//
// listItemElement.textContent = 'Total Cookies Sold @ ' + seaCenter.location + ': ' + sumTotalCookiesSold;
//
// // var  capHill = {
// //   location: 'Capitol Hill',
// //   minCust: 20,
// //   maxCust: 38,
// //   avgCookieSale: 2.3,
// //   hrsOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
// // };
// // console.log(capHill);
//
// var ulElement = document.getElementById('fourth-list');
// var sumTotalCookiesSold = 0;
//
// for (var i = 0; i < hrsOpen.length; i++) {
//   var totalCookiesSold = Math.floor(((Math.random() * 38) + 20) * capHill.avgCookieSale);
//   console.log(totalCookiesSold);
//   var sumTotalCookiesSold = sumTotalCookiesSold + totalCookiesSold;
//   console.log(sumTotalCookiesSold);
//   var listItemElement = document.createElement('li');
//   listItemElement.textContent = hrsOpen[i] + ' : ' + totalCookiesSold + ' cookies';
//   ulElement.appendChild(listItemElement);
//   console.log(ulElement.children);
// };
//
// listItemElement.textContent = 'Total Cookies Sold @ ' + capHill.location + ': ' + sumTotalCookiesSold;
//
// // var  alki = {
// //   location: 'Alki',
// //   minCust: 2,
// //   maxCust: 16,
// //   avgCookieSale: 4.6,
// //   hrsOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm', '8pm'],
// // };
// // console.log (alki);
//
// var ulElement = document.getElementById ('fifth-list');
// var sumTotalCookiesSold = 0;
//
// for (var i = 0; i < hrsOpen.length; i++) {
//   var totalCookiesSold = Math.floor(((Math.random() * 16) + 2) * alki.avgCookieSale);
//   console.log (totalCookiesSold);
//   var sumTotalCookiesSold = sumTotalCookiesSold + totalCookiesSold;
//   console.log (sumTotalCookiesSold);
//   var listItemElement = document.createElement ('li');
//   listItemElement.textContent = hrsOpen[i] + ' : ' + totalCookiesSold + ' cookies';
//   ulElement.appendChild(listItemElement);
//   console.log(ulElement.children);
// };
//
// listItemElement.textContent = 'Total Cookies Sold @ ' + alki.location + ': ' + sumTotalCookiesSold;
//
//
//
// // var hrsOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm', '8pm', 'Total Sales'];
// // var msg = '';
// // var i;
// // var ulElement = document.getElementById ('primary-list');
// // console.log (ulElement);
// // // var pikeCookiesSoldByHour = Math.floor (locationOne.avgCookieSoldPerSale *locationOne.randomCustByHour);
// // // console.log (pikeCookiesSoldByHour);
//
// // var locationOne = {
// //    location: '1st and Pike',
// //    minCustPerHour: 23,
// //    maxCustPerHour: 65,
// //    avgCookieSoldPerSale: 6.3,
// //    randomCustByHour: Math.floor((Math.random () * 65) + 23),
// //    cookiesSoldByHour: Math.floor(locationOne.avgCookieSoldPerSale * locationOne.randomCustByHour),
// //    totalCookiesSold: 0,
// // };
// // console.log (randomCustByHour);
//
// // for (var i = 0; i < hrsOpen.length; i++) {
// //    var listItemElement = document.createElement ('li');
// //    listItemElement.textContent = hrsOpen[i] + ' : ' + locationOne.cookiesSoldByHour + ' cookies';
// //    ulElement.appendChild(listItemElement);
// //    console.log(ulElement.children);
// // };
//
// //
// // var stores = [
// //    {
// //       location: '1st and Pike',
// //       minCustPerHour: 23,
// //       maxCustPerHour: 65,
// //       avgCookieSoldPerSale: 6.3,
// //       randomCustByHour: 0,
// //       cookiesSoldByHour: [],
// //       totalCookiesSold: 0,
// //    },
// //    {
// //       storeName: 'Seatac Store',
// //       location: 'SeaTac Airport',
// //       minCustPerHour : 3,
// //       maxCustPerHour : 24,
// //       avgCookieSoldPerSale: 1.2,
// //       randomCustByHour: 0,
// //       cookiesSoldByHour: [],
// //       totalCookiesSold: 0,
// //    },
// //    {
// //       storeName: 'SeaCenter Store',
// //       location: 'Seattle Center',
// //       minCustPerHour: 11,
// //       maxCustPerHour: 38,
// //       avgCookieSoldPerSale: 3.7,
// //       randomCustByHour: 0,
// //       cookiesSoldByHour: [],
// //       totalCookiesSold: 0,
// //    },
// //    {
// //       storeName: 'Capitol Store',
// //       location: 'Capitol Hill',
// //       minCustPerHour: 20,
// //       maxCustPerHour: 38,
// //       avgCookieSoldPerSale: 2.3,
// //       randomCustByHour: 0,
// //       cookiesSoldByHour: [],
// //       totalCookiesSold: 0,
// //    },
// //    {
// //       storeName: 'Capitol Hill Store',
// //       location: 'Capitol Hill',
// //       minCustPerHour: 20,
// //       maxCustPerHour: 38,
// //       avgCookieSoldPerSale: 2.3,
// //       randomCustByHour: 0,
// //       cookiesSoldByHour: [],
// //       totalCookiesSold: 0,
// //    },
// //    {
// //       storeName: 'Alki Store',
// //       location: 'Alki',
// //       minCustPerHour: 2,
// //       maxCustPerHour: 16,
// //       avgCookieSoldPerSale: 4.6,
// //       randomCustByHour: 0,
// //       cookiesSoldByHour: [],
// //       totalCookiesSold: 0,
// //    },
// // ];
// //
// // console.log (stores);
