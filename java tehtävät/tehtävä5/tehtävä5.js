const syote = Number(prompt('Minkä vuoden haluat tarkistaa?'));
let karkaus = false;

if (syote % 4 == 0) {
  karkaus = true;
}

if (syote % 100 == 0 && syote % 400 != 0) {
  karkaus = false;
}

let viesti = '';

if (karkaus) {
  viesti = syote + ' on karkausvuosi.';
} else {
  viesti = syote + ' ei ole karkausvuosi.';
}

document.getElementById('tulos').innerHTML = viesti;