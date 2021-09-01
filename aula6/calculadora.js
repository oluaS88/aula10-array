function adicionar  (x, y){
    return(x + y)
}

function subtrair (x, y){
    return(x - y)
}

function multiplicar (x, y){
    return(x * y)
}

function dividir (x, y){
    return(x / y)
}

function quadradoDoNumero(x){
    return Math.pow(x, 2)
}

function quadradoDoNumero2(x){
    return(x*x)
}

function media3numeros(x, y, z){
    return (x + y + z) / 3
}

function calculaPorcentagem(x, y){
    return(x, y)*100
}


console.log("Teste de operações: " );
console.log(adicionar(2, 7))
console.log(subtrair(2, 7))
console.log(multiplicar(2, 7))
console.log(dividir(2, 7))
console.log(dividir(0, 7))
console.log(media3numeros(6, 8, 9))
console.log(quadradoDoNumero(30))
console.log(quadradoDoNumero2(50))
