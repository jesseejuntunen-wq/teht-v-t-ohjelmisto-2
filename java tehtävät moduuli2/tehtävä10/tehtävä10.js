let ehdokas_määrä = Number(prompt("Montako ehdokasta:"));
let ehdokkaat = [];

for (let i = 0; i < ehdokas_määrä; i++) {
    let nimi = prompt("Anna ehdokkaan nimi" + (i + 1) );
    ehdokkaat.push({
        nimi: nimi,
        äänet: 0
    });
}

let äänestäjä_määrä = Number(prompt("montako äänestäjää"));
for (let i = 0; i < äänestäjä_määrä; i++) {
    let äänestys = prompt("äänestäjä" + (i + 1) + "ketä äänestät" );

    for (let j = 0; j < ehdokkaat.length; j++){
        if (ehdokkaat[j].nimi.toLowerCase() == äänestys.toLowerCase()) {
            ehdokkaat[j].äänet++; 
               
        }

    }
}   
ehdokkaat.sort((a, b) => b.äänet - a.äänet);

console.log("Voittaja on" + " " + ehdokkaat[0].nimi + " " + "tuloksella"+ " " + ehdokkaat[0].äänet);
console.log("tulokset");
for (let i = 0; i < ehdokkaat.length; i++ ){
console.log(ehdokkaat[i].nimi + ":" + ehdokkaat[i].äänet)

}