function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem')
    var agora = new Date();
    var hora = agora.getHours();
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        img.src = './assets/céu-dia.jpg'
        document.body.style.background = 'yellow'
    } else if(hora >= 12 && hora < 18){
        img.src = './assets/céu-tarde.jpg'
        document.body.style.background = 'pink'
    } else {
        img.src = './assets/céu-noite.jpg'
        document.body.style.background = 'blue'
    }
}

