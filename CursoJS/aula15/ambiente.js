let num = [5, 3, 1]
num[3] = 4
num.push(2)
num.sort()
//sort() classifica os valores como strings em ordem alfabética e crescente
console.log(`Nosso vetor é o ${num}.`)
console.log(`Nosso vetor tem ${num.length} posições.`)
/*for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}*/
for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}
let ind = num.indexOf(3)
console.log(`O valor 3 está na posição ${ind}.`)