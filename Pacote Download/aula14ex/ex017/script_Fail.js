function contar(){

    let inicio = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    res.innerHTML = `Contagem: `;

    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    while(i < f){
        console.log("funcionou" + i);
        res.innerHTML += `${i} => `;
        i = i + p;
    }
    res.innerHTML += `Chegou!`
}