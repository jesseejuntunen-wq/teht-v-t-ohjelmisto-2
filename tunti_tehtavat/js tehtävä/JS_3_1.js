let nimet = "";

for (let i = 1; i <= 5; i++) {
    let nimi = prompt("Anna nimi " + i );
    nimet += nimi + "<br>";
}

document.getElementById("nimet").innerHTML = nimet;