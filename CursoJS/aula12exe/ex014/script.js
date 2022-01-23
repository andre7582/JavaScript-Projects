function carregar() {

var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
//var hora = data.getHours()
var hora = 14
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 6 && hora < 12) {
    img.src = "fmanha.png"
    document.body.style.background = `#ebdf9c`
} else if (hora >= 12 && hora < 18) {
    img.src = "ftarde.png"
    document.body.style.background = `#63a6e6`
} else {
    img.src = "fnoite.png"
    document.body.style.background = `#312315`
}
}