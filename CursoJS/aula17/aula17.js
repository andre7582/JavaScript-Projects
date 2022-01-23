let amigo = {nome: 'Maria', sexo: 'M', peso: 34, engordar(p=0){
    console.log('Engordou!')
    this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)