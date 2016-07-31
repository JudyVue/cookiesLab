//this js page links to index.html

//global variables

//the divs
var homeContent = document.getElementById('homeContent');
var aboutDiv = document.getElementById('aboutDiv');
var locationsDiv = document.getElementById('locationsDiv');
var purchaseDiv = document.getElementById('purchaseDiv');

//the buttons
var allButtons = document.getElementsByClassName('button');
var homeButton = document.getElementById('homeButton');
var aboutButton = document.getElementById('aboutButton');
var locationsButton = document.getElementById('locationsButton');
var purchaseButton = document.getElementById('purchaseButton');


//functions

function clickAboutButton() {
  if (homeContent.style.display !== 'none' || locationsDiv.style.display !=='none' || purchaseDiv.style.display !== 'none') {
      homeContent.style.display = 'none';
      locationsDiv.style.display ='none';
      purchaseDiv.style.display = 'none';
      aboutDiv.style.display = 'block';
  }
}

function clickLocationsButton () {
  if (homeContent.style.display !== 'none' || aboutDiv.style.display !=='none'|| purchaseDiv.style.display !== 'none') {
      homeContent.style.display = 'none';
      aboutDiv.style.display ='none';
      purchaseDiv.style.display = 'none';
      locationsDiv.style.display = 'block';

  }
}

function clickHomeButton () {
  if (aboutDiv.style.display !== 'none' || locationsDiv.style.display !=='none'|| purchaseDiv.style.display !== 'none') {
      aboutDiv.style.display = 'none';
      locationsDiv.style.display ='none';
      purchaseDiv.style.display = 'none';
      homeContent.style.display = 'block';
  }
}

function clickPurchaseButton () {
  if (aboutDiv.style.display !== 'none' || locationsDiv.style.display !=='none' || homeContent.style.display !== 'none') {
      aboutDiv.style.display = 'none';
      locationsDiv.style.display ='none';
      homeContent.style.display = 'none';
      purchaseDiv.style.display = 'block';
  }
}

aboutButton.addEventListener ('click', clickAboutButton);
locationsButton.addEventListener ('click', clickLocationsButton);
homeButton.addEventListener ('click', clickHomeButton);
purchaseButton.addEventListener ('click', clickPurchaseButton);
