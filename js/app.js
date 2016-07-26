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
    this.cookiesEachHourArray.push('Total: ' + this.totalDailyCookieSales);
    console.log(this.name + ': ' + this.cookiesEachHourArray);
  };
  cookieStores.push(this);
}

//1. First and Pike Store, constructor
var firstAndPikeStore = new Store('First and Pike', 23, 65, 6.3);
firstAndPikeStore.salesPerHour();

//2. SeaTac Airport store constructor
var seaTacAirportStore = new Store('SeaTac Airprt', 3, 24, 1.2);
seaTacAirportStore.salesPerHour();

//3. Seattle Center store constructor
var seattleCenterStore = new Store('Seattle Center', 11, 38, 3.7);
seattleCenterStore.salesPerHour();

//4. Capital Hill store constructor
var capitolHillStore = new Store('Capitol Hill', 20, 38, 2.3);
capitolHillStore.salesPerHour();

//.5 Alki store constructor
var alkiStore = new Store('Alki', 2, 16, 4.6);
alkiStore.salesPerHour();
