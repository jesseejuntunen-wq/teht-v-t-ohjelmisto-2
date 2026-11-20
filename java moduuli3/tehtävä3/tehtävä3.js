
const nimet = ['John', 'Paul', 'Jones'];

const kohde = document.getElementById('target');

let html = '';

for (let i = 0; i < nimet.length; i++) {
    html += `<li>${nimet[i]}</li>`;
}

kohde.innerHTML = html;
