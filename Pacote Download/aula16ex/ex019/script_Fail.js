function adicionar(){
    let vet = [];
    let num = document.getElementById('txtn');
    let lis = document.getElementById('lista')
    let n = Number(num.value);

    if(num.value.length == 0){
        window.alert('[ERRO] Preencha o espaço disponível para adicionar um elemento');
    }else if(n < 1 || n > 100){
        window.alert(`[ERRO] O valor ${n} não respeita o limite entre 1 e 100!`);
    }else{
        vet.push(n);
        window.alert("Tudo certo");
        let item = document.createElement('option');
        item.text = `Número ${n} foi adicionado à lista`;
        lis.appendChild(item);
    }
    let res = document.getElementById('res');
    res.innerHTML = vet[0];
    
}
function finalizar(){

}

function inLista(n, l){
    for(let i in l){
        if(n == i){
            return true;
        }else{
            return false;
        }
    }
}