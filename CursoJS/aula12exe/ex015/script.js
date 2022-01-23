function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano || fano.value < ano - 122) {
        window.alert('Data informada fora do esperado. Por favor, informe novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'f')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'fcrih.png')
            } else if (idade < 24) {
                img.setAttribute('src', 'fjovh.png')
            } else if (idade < 57) {
                img.setAttribute('src', 'faduh.png')
            } else {
                img.setAttribute('src', 'fidoh.png')
            }    
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'fcrim.png')
            } else if (idade < 24) {
                img.setAttribute('src', 'fjovm.png')
            } else if (idade < 57) {
                img.setAttribute('src', 'fadum.png')
            } else {
                img.setAttribute('src', 'fidom.png')
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }    

}
