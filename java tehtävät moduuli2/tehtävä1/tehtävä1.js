
const lista = []
for (let i = 0; i < 5; i++) {
    let luku = Number(prompt("Anna kokonais luku: "))
    lista.push(luku)
}
lista.reverse()
document.querySelector("#vastaus").innerHTML = lista;