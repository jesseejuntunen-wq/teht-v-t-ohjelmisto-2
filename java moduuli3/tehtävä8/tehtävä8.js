const numero1 = document.getElementById('num1');
const numero2 = document.getElementById('num2');
const laskutoimitus = document.getElementById('operation');
const painike = document.getElementById('start');
const tulos = document.getElementById('result');

painike.addEventListener('click', function() {
    const luku1 = Number(numero1.value);
    const luku2 = Number(numero2.value);
    const toiminto = laskutoimitus.value;

    let vastaus;

    if (toiminto === 'add') {
        vastaus = luku1 + luku2;
    } else if (toiminto === 'sub') {
        vastaus = luku1 - luku2;
    } else if (toiminto === 'multi') {
        vastaus = luku1 * luku2;
    } else if (toiminto === 'div') {
        if (luku2 === 0) {
            tulos.textContent = 'Nollalla ei voi jakaa';
            return;
        }
        vastaus = luku1 / luku2;
    }

    tulos.textContent = 'Tulos: ' + vastaus;
});