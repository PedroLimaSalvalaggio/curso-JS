let valores = [];
let num = document.getElementById('txtn');
let lis = document.getElementById('lista');
let res = document.getElementById('res');

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else{
        return false;
    }
}

function inLista(n, l){
    for(let i in l){
        if(n == l[i]){
            return true;
        }else{
            return false;
        }
    }
}

function adicionar(){
    if(num.value.length == 0){
        window.alert('[ERRO] Preencha o espaço disponível para adicionar um elemento');
    }else if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Número ${num.value} foi adicionado`;
        lis.appendChild(item); 
    }else{
        window.alert("[ERRO] Valor inválido ou já encontrado a lista.")
    }
    num.value = '';
    num.focus();
}

function finalizar(){
    if(valores.length == 0){
        window.alert("[ERRO] Adicione itens a lista para finalizar");
    } else{
        let tam = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        
        for(let i in valores){
            soma += valores[i];
            if(valores[i] > maior){
                maior = valores[i];
            }
            if(valores[i] < menor){
                menor = valores[i];
            }
        }
        
        let media = soma/tam;

        res.innerHTML = '';
        res.innerHTML += `<p>Temos ${tam} números cadastrados</p>`;
        res.innerHTML += `<p>O maior número registrado foi ${maior}</p>`;
        res.innerHTML += `<p>O menor número registrado foi ${menor}</p>`;
        res.innerHTML += `<p>A soma de todos os valor resulta em ${soma}</p>`;
        res.innerHTML += `<p>A média dos valores fornecidos é ${media}</p>`;
    }
}
