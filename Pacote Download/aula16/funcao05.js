function fatorial(n){
    if(n == 1){
        return 1
    } else{
        let res = n * fatorial(n-1)
        return res
    }
}

console.log(fatorial(5))