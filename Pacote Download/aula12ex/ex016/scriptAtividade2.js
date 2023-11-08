function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[Erro] Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //Bebê
                img.setAttribute('src', './assets/bebe-homem.jpg')
                img.setAttribute('width', 250)
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', './assets/jovem-homem.jpg')
                img.setAttribute('width', 250)
            } else if (idade < 60){
                //Jovem
                img.setAttribute('src', './assets/adulto-homem.jpg')
                img.setAttribute('width', 250)
            } else{
                //Idoso
                img.setAttribute('src', './assets/idoso-homem.jpg')
                img.setAttribute('width', 250)
            }
        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //Bebê
                img.setAttribute('src', './assets/bebe-mulher.jpg')
                img.setAttribute('width', 250)
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', './assets/jovem-mulher.jpg')
                img.setAttribute('width', 250)
            } else if (idade < 60){
                //Jovem
                img.setAttribute('src', './assets/adulto-mulher.jpg')
                img.setAttribute('width', 250)
            } else{
                //Idoso
                img.setAttribute('src', './assets/idoso-mulher.jpg')
                img.setAttribute('width', 250)
            }
        }
        res.computedStyleMap.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com idade ${idade} anos.`
        res.appendChild(img)
    }

}
