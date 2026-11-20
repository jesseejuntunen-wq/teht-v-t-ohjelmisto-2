'use strict';
const koiralinkki = document.getElementById('koiralinkki');

koiralinkki.href = 'https://fi.wikipedia.org/wiki/Koira';

//1. Korjaa linkki JavaScriptillä: 
// Koira-linkin pitää viedä oikealle Wikipedia-sivulle.



//2. Tässä yritetään lisätä kissalistaan uusi elementti.
// Korjaa toimivaksi.

const ol = document.querySelector('ol');
const kissalisays = document.createElement('li');
kissalisays.innerText = 'Kissat pärjäävät mainiosti yksinäänkin.';
ol.appendChild(kissalisays);

//3. Tässä yritetään lisätä koiralistaan uusi elementti. 
// Korjaa toimivaksi.

const ul = document.querySelector('#koiralista');
const koiralisays = document.createElement('li');
koiralisays.innerText = "Monet koirat palvovat omistajaansa.";
ul.appendChild(koiralisays);


//Event-esimerkki, sama kuin materiaalissa. Toimiiko?
const button = document.querySelector('button');
button.addEventListener('click', function(evt){
  alert('WHY DID YOU CLICK THIS  ' + evt.currentTarget.tagName + ' OPETTAJA PÄÄSTÄ KOTIIN PLIIIIIIIIS ');
});



