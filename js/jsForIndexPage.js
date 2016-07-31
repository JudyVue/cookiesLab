//this js page links to index.html
'use strict.';

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

//arrays for divs and buttons
var divArray = [homeContent, aboutDiv, locationsDiv, purchaseDiv];
var buttonsArray = [homeButton, aboutButton, locationsButton, purchaseButton];

function clickAnyButton() {
  for (var i=0; i <divArray.length; i++) {
    for (var j=0; j < buttonsArray.length; j++) {

      //if we click a button that contains id name of the div id name, e.g. if we click the 'about' button, this function should find that the div id name also contains 'about' and displays it accordingly
      if (divArray[i].textContent.includes (buttonsArray[j].textContent)) {
        divArray[i].style.display = 'block';
      }
      }
    }
  }

for (var j=0; j < buttonsArray.length; j++) {
  buttonsArray[j].addEventListener('click', clickAnyButton);
}


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

// aboutButton.addEventListener ('click', clickAboutButton);
// locationsButton.addEventListener ('click', clickLocationsButton);
// homeButton.addEventListener ('click', clickHomeButton);
// purchaseButton.addEventListener ('click', clickPurchaseButton);
