//Week 2 Cookies Lab - Objects and Methods
'use strict.';

//arrays for global scope
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm',
'5pm', '6pm', '7pm'];

var cookieStores = [];

//First store: 1st and Pike, min cust = 23, max cust = 65, avg sales = 6.3

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
      var custPerHour = Math.round(Math.random() * (maxCust-minCust+1) + minCust);
      var cookiesPerHour = Math.round(custPerHour * avgSales);
      this.totalDailyCookieSales += cookiesPerHour;
      // console.log(custPerHour + ' customers bought ' + cookiesPerHour + ' cookies at ' + hours[i] + ' for a total of ' + this.totalDailyCookieSales + ' cookies.');
      this.cookiesEachHourArray.push(cookiesPerHour);
      this.custEachHourArray.push(custPerHour);
      // console.log(this.cookiesEachHourArray);
      // console.log(this.custEachHourArray);
    }
  };
  cookieStores.push(this);

  this.makeHeaderRow = function() {
    //1. create table row to attach to HTML id cookiesSoldPerHour
    //first need to declare that HTML table as a variable
    var cookieTable = document.getElementById('cookiesSoldPerHour');
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
  };
  this.render = function() {
    //creates new row for store
    var cookieTable = document.getElementById('cookiesSoldPerHour');
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
  this.makeFooterRow = function() {
    var cookieTable = document.getElementById('cookiesSoldPerHour');
    var footerRow = document.createElement('tr');
    cookieTable.appendChild (footerRow);

    //this is cell that says "Totals"
    var totalStringElement = document.createElement('td');
    totalStringElement.textContent = 'Total Hourly Sales for All Stores';
    footerRow.appendChild (totalStringElement);

    //figure out how to add the total daily sales for all stores
    //stretch goal, screw it, I'm tired
    for (var i =0; i < hours.length; i++){
      var tdElement = document.createElement('td');
      tdElement.textContent = 'blah';
      footerRow.appendChild (tdElement);
    }
  };
}

//this is a blank var for the footer row only
var blankStoreForFooterRow = new Store ();
blankStoreForFooterRow.makeHeaderRow();

console.log(cookieStores);


//1. First and Pike Store, constructor
var firstAndPikeStore = new Store('First and Pike', 23, 65, 6.3);
firstAndPikeStore.salesPerHour();
firstAndPikeStore.render();


//2. SeaTac Airport store constructor
var seaTacAirportStore = new Store('SeaTac Airprt', 3, 24, 1.2);
seaTacAirportStore.salesPerHour();
seaTacAirportStore.render();


//3. Seattle Center store constructor
var seattleCenterStore = new Store('Seattle Center', 11, 38, 3.7);
seattleCenterStore.salesPerHour();
seattleCenterStore.render();

//4. Capital Hill store constructor
var capitolHillStore = new Store('Capitol Hill', 20, 38, 2.3);
capitolHillStore.salesPerHour();
capitolHillStore.render();

//.5 Alki store constructor
var alkiStore = new Store('Alki', 2, 16, 4.6);
alkiStore.salesPerHour();
alkiStore.render();

//this adds footer row, figuring out how to add totals
//  blankStoreForFooterRow.makeFooterRow();
