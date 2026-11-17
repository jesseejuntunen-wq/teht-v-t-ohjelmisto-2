const kysymys = confirm("Haluatko laskea neliöjuuren?");
if (kysymys == true){
    const numero = Number(prompt("Anna joku luku: "));
    const vastaus = Math.sqrt(numero);
    document.querySelector("#vastaus").innerHTML = `Neliöjuuri on ${vastaus}`

}else {
    alert("Neliöjuurta ei laskettu")
}