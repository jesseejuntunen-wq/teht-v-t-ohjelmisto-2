const lista = []
const maara = Number(prompt("Montako kertaa heitetään noppaa"))
for (let i = 0; i < maara; i++) {
    const luvut = Math.floor(Math.random()* 6) + 1
    lista.push(luvut)
}
console.log("Nopat heittivät luvut " + lista)
let sum = 0
for (const numero of lista){
    sum += numero;
}
console.log("Noppien yhteinen summaon " + sum);