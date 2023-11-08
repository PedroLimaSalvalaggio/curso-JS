let valores = [8,2,4,5,1,7]

//console.log(valores)

/* console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5]) */

/* for(let pos = 0; pos < valores.length; pos++){
    console.log(`O valor do vetor na posição ${pos} é ${valores[pos]}`)
} */

for(let pos in valores){
    console.log(`O valor do vetor na posição ${pos} é ${valores[pos]}`)
}