//Week 2 Cookies Lab - Objects and Methods
'use strict.';

//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm',
'5pm', '6pm', '7pm'];

var cookieStores = [];

//global variables from html
var newInfoButton = document.getElementById('newInfo');
var clearInfoButton = document.getElementById('clearInfo');
var inputForm = document.getElementById('inputForm');
var inputFields = document.getElementsByTagName('input');
var cookieTable = document.getElementById('cookiesSoldPerHour');


function Store(name, minCust, maxCust, avgSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.cookiesEachHourArray = [];
  this.custEachHourArray = [];
  this.totalDailyCookieSales = 0;
  //need to bring my sales per hour function into constructor notation
  this.salesPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      //find random #s between min and max
      var custPerHour = Math.floor(Math.random() * (maxCust-minCust+1) + minCust);
      var cookiesPerHour = Math.floor(custPerHour * avgSales);

      //pushes #s to arrays
      this.cookiesEachHourArray.push(cookiesPerHour);
      this.custEachHourArray.push(custPerHour);

      //calculates daily totals
      this.totalDailyCookieSales += cookiesPerHour;

    }
  };
  this.render = function() {
    //creates new row for store
    var numCookiesRow = document.createElement('tr');
    cookieTable.appendChild (numCookiesRow);

    //displays store name
    var storeNameElement = document.createElement('td');
    storeNameElement.textContent = this.name;
    numCookiesRow.appendChild(storeNameElement);

    //make td element in a for loop to display the #cookies sold
    for (var i =0; i < this.cookiesEachHourArray.length; i++){
      var tdElement = document.createElement('td');
      tdElement.textContent = this.cookiesEachHourArray[i];
      numCookiesRow.appendChild (tdElement);
    }
    //displays total on far right
    var totalSalesElement = document.createElement('td');
    totalSalesElement.textContent = this.totalDailyCookieSales;
    numCookiesRow.appendChild (totalSalesElement);
  };


  this.salesPerHour();
  this.render();
  cookieStores.push(this);

}

function makeFooterRow() {
  var cookieTable = document.getElementById('cookiesSoldPerHour');
  var footerRow = document.createElement('tr');
  cookieTable.appendChild (footerRow);

  //this is cell that says "Totals"
  var totalStringElement = document.createElement('td');
  totalStringElement.textContent = 'Total Hourly Sales for All Stores';
  footerRow.appendChild (totalStringElement);

  //double for loops to calculate all stores' hourly sales
  var allStoresTotal = 0;
  for (var i =0; i < hours.length; i++){
    var hourlyTotal = 0;
    for (var j=0; j < cookieStores.length; j++) {
      hourlyTotal = hourlyTotal + cookieStores[j].cookiesEachHourArray[i];
      allStoresTotal += cookieStores[j].cookiesEachHourArray[i];
    }
    var hourlyTotalElement = document.createElement('td');
    hourlyTotalElement.textContent = hourlyTotal;
    footerRow.appendChild (hourlyTotalElement);
  }
  var tdElement = document.createElement('td');
  tdElement.textContent = allStoresTotal;
  footerRow.appendChild (tdElement);

}

//function to handle name
function handleStoreNameInput(event){
  event.preventDefault();

  //if statement to tell user to input all fields
if (!event.target.name.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value) {
  return alert('Fields cannot be empty!');
}
//vars for name input
  var nameInput = event.target.name.value;

//var for minCust input
  var minInput = event.target.min.value;
  minInput = parseInt(minInput);
  console.log("this is min input: " + minInput);

//var for maxCust input
  var maxInput = event.target.max.value;
  maxInput = parseInt(maxInput);
  console.log("this is max input: " + maxInput);

//var for avg custPerHour
  var avgCustInput = event.target.avg.value;
  avgCustInput = parseInt(avgCustInput);
  console.log("this is avg customers " + avgCustInput);

//the new store
  var newStore = new Store(nameInput, minInput, maxInput, avgCustInput);
  console.log(newStore.custEachHourArray); //testing to see if math works

  //code to keep footer row as a footerRow
  cookieTable.textContent = null;

 makeHeaderRow();

 //code to remake table after null
//   for (var i = 0; i < cookieStores.length; i++){
//     if (nameInput === cookieStores[i].name) {
//       //updates row if matches between name
//       cookieStores[i] = newStore;
//
//     }
//     cookieStores[i].render();
//   }
//
//   makeFooterRow();
}

inputForm.addEventListener('submit', handleStoreNameInput);

// clear the info in fields
clearInfoButton.addEventListener('reset', function(event) {
  console.log('clear the fields');

});


function makeHeaderRow() {
  //1. create table row to attach to HTML id cookiesSoldPerHour
  //first need to declare that HTML table as a variable
  var tableTimeRow = document.createElement('tr');
  cookieTable.appendChild (tableTimeRow);
  //this is the blank cell in top left corner
  var blankElement = document.createElement('td');
  blankElement.textContent = '';
  tableTimeRow.appendChild (blankElement);
  //make td element in a for loop to display the times
  for (var i =0; i < hours.length; i++){
    var tdElement = document.createElement('td');
    tdElement.textContent = hours[i];
    tableTimeRow.appendChild (tdElement);
  }
  //this is the totals cell in top right corner
  var totalElement = document.createElement('td');
  totalElement.textContent = 'Daily Cookie Sales Total';
  tableTimeRow.appendChild (totalElement);
}

//creating time table row for first page load
makeHeaderRow();

//instatiate objects
var firstAndPikeStore = new Store('First and Pike', 23, 65, 6.3);
var seaTacAirportStore = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenterStore = new Store('Seattle Center', 11, 38, 3.7);
var capitolHillStore = new Store('Capitol Hill', 20, 38, 2.3);
var alkiStore = new Store('Alki', 2, 16, 4.6);

//make footer row for first page load
makeFooterRow();
