const a = Number(prompt('Anna ensimmäinen luku:'));
const b = Number(prompt('Anna toinen luku:'));
const c = Number(prompt('Anna kolmas luku:'));

document.getElementById('tulos').innerHTML =
  'Summa: ' + (a + b + c) + '<br>' +
  'Tulo: ' + (a * b * c) + '<br>' +
  'Keskiarvo: ' + (a + b + c) / 3;

