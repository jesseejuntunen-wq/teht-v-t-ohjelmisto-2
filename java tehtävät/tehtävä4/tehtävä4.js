const nimi = prompt('Mikä on nimesi?');
const tuvat = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
const arvottu = tuvat[Math.floor(Math.random() * 4)];

document.getElementById('tulos').innerHTML = nimi + ', olet ' + arvottu + '.';