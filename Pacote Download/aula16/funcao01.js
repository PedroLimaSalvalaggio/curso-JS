function parImp(n){
    if (n % 2 == 0){
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let res = parImp(4)
console.log(res)