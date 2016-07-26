//Week 2 Cookies Lab - Objects and Methods
"use strict.";

//array of store hours 6am-8pm
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm',
'5pm', '6pm', '7pm'];
//console.log(hours);

//First store: 1st and Pike, min cust = 23, max cust = 65, avg sales = 6.3

var firstPike = {
    minCust: 23,
    maxCust: 65,
    avgSales: 6.3,
    cookiesEachHourArray: [],
    custEachHourArray: [],
    totalDailyCookieSales: 0,
    salesPerHour: function () {
      for (var i = 0; i < hours.length; i++) {
        var custPerHour = Math.round(Math.random() * (this.maxCust-this.minCust+1) + this.minCust);
        var cookiesPerHour = Math.round(custPerHour * this.avgSales);
        this.cookiesEachHourArray.push(cookiesPerHour);
        this.custEachHourArray.push(custPerHour);
        this.totalDailyCookieSales += cookiesPerHour;

      }
    },
    render: function() {
      var List = document.createElement('ul');

      for (var i = 0; i < hours.length; i++){
        var hoursListElement = document.createElement('li');
        //hoursListElement.textContent = hours[i];
        //List.appendChild(hoursListElement)

        for (var j = 0; j < firstPike.cookiesEachHourArray.length; j++) {
          var cookiesListElement = document.createElement('li');
          cookiesListElement.textContent = hours[i] + ': ' + firstPike.cookiesEachHourArray[i] + ' cookies';
          List.appendChild(cookiesListElement);
        }

  }
  document.body.appendChild(List);
}

};

firstPike.salesPerHour();
firstPike.render();
//Second store: SeaTac Airport, min cust = 3, max cust = 24, avg = 1.2
var seaTacAirport = {
    minCust: 3,
    maxCust: 24,
    avgSales: 1.2,
    cookiesEachHourArray: [],
    custEachHourArray: [],
    totalDailyCookieSales: 0,
    salesPerHour: function () {
      for (var i = 0; i < hours.length; i++) {
        var custPerHour = Math.round(Math.random() * (this.maxCust-this.minCust+1) + this.minCust);
        var cookiesPerHour = Math.round(custPerHour * this.avgSales);
        this.cookiesEachHourArray.push(cookiesPerHour);
        this.custEachHourArray.push(custPerHour);
        this.totalDailyCookieSales += cookiesPerHour;

      }
    }
};
seaTacAirport.salesPerHour();

//Third store: Seattle Center, min cust = 11, max cust = 38, avg = 3.7
var seattleCenter = {
    minCust: 11,
    maxCust: 38,
    avgSales: 3.7,
    cookiesEachHourArray: [],
    custEachHourArray: [],
    totalDailyCookieSales: 0,
    salesPerHour: function () {
      for (var i = 0; i < hours.length; i++) {
        var custPerHour = Math.round(Math.random() * (this.maxCust-this.minCust+1) + this.minCust);
        var cookiesPerHour = Math.round(custPerHour * this.avgSales);
        this.cookiesEachHourArray.push(cookiesPerHour);
        this.custEachHourArray.push(custPerHour);
        this.totalDailyCookieSales += cookiesPerHour;

      }
    }
};

seattleCenter.salesPerHour();

//Fourth store: Capitol Hill, min = 20, max 38, avg = 2.3
var capitolHill = {
    minCust: 20,
    maxCust: 38,
    avgSales: 2.3,
    cookiesEachHourArray: [],
    custEachHourArray: [],
    totalDailyCookieSales: 0,
    salesPerHour: function () {
      for (var i = 0; i < hours.length; i++) {
        var custPerHour = Math.round(Math.random() * (this.maxCust-this.minCust+1) + this.minCust);
        var cookiesPerHour = Math.round(custPerHour * this.avgSales);
        this.cookiesEachHourArray.push(cookiesPerHour);
        this.custEachHourArray.push(custPerHour);
        this.totalDailyCookieSales += cookiesPerHour;
      }
    }
};

capitolHill.salesPerHour();

//Fifth store: Alki, min = 2, max = 16, avg sales = 4.6
var alki = {
    minCust: 2,
    maxCust: 16,
    avgSales: 4.6,
    cookiesEachHourArray: [],
    custEachHourArray: [],
    totalDailyCookieSales: 0,
    salesPerHour: function () {
      for (var i = 0; i < hours.length; i++) {
        var custPerHour = Math.round(Math.random() * (this.maxCust-this.minCust+1) + this.minCust);
        var cookiesPerHour = Math.round(custPerHour * this.avgSales);
        this.cookiesEachHourArray.push(cookiesPerHour);
        this.custEachHourArray.push(custPerHour);
        this.totalDailyCookieSales += cookiesPerHour;
      }
    }
};
