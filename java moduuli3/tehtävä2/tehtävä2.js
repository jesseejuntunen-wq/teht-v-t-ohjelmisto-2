
const kohde = document.getElementById('target');

const ensimmainenKohta = document.createElement('li');
ensimmainenKohta.textContent = 'Ensimmäinen kohta';
kohde.appendChild(ensimmainenKohta);

const toinenKohta = document.createElement('li');
toinenKohta.textContent = 'Toinen kohta';
toinenKohta.classList.add('my-item');
kohde.appendChild(toinenKohta);


const kolmasKohta = document.createElement('li');
kolmasKohta.textContent = 'Kolmas kohta';
kohde.appendChild(kolmasKohta);
