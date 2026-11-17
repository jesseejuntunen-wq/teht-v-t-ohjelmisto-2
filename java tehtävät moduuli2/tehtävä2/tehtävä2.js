let määrä = Number(prompt("kuinka monta osallistujaa"));
let nimet = [];

for (let i = 0; i < määrä; i++)  {
    let nimi = prompt("anna osallistujan" + (i + 1) + "nimi");
    nimet.push(nimi);
}
nimet.sort();
let html = "";
for (let i = 0; i < nimet.length; i++){
    html += "<liv>" + nimet[i] + "</li><li>";
}
html += "</ol>";

document.getElementById("vastaus").innerHTML = html;