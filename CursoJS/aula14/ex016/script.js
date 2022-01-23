function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 || pas.value <= 0) {
        alert('Impossível contar! Não deixe nenhuma caixinha sem valor e deixe a caixa "Passo" com valor maior do que "zero".')
    } else {
        //alert('OK!')
        res.innerHTML = 'Contando... '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (i < f) {
            var c = i
            while (c <= f) {
                res.innerHTML += `${c} \u{1F449} `
                c +=p
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3c1}`
    }
}