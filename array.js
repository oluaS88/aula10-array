let ListaDeCompras = ['sal', 'arroz', 'cafe', 'leite'];
    console.log(ListaDeCompras)

/*Método .Pop - Elimina o ultimo elemento do array e mostra o nome do elemento excluído*/
let ultimoItem = ListaDeCompras.pop()
console.log(ultimoItem)

let popFaz = ('Elimina o ultimo elemento do array e mostra o nome do elemento excluído');
console.log(popFaz)

/*Método .Join - Junta os elementos do array*/
let juntarItem = ListaDeCompras.join()
console.log(juntarItem)

let joinFaz = ('Junta os elementos do array')
console.log(joinFaz)

/*Método .Push - Acrescenta 1 ou mais elemntos no final do array*/
let acrescentarItem = ['sal', 'arroz', 'cafe', 'leite']
acrescentarItem.push('bolacha', 'ovos', 'carnes')
console.log(acrescentarItem)

let pushFaz = ('Acrescenta 1 ou mais elemntos no final do array')
console.log(pushFaz)

/*Método .Shift - Elimina o primeiro elemento do array*/
let eliminarItem = ['sal', 'arroz', 'cafe', 'leite']
let primeiroItem = eliminarItem.shift()
console.log(eliminarItem)
console.log(primeiroItem)

let shiftFaz = ('Elimina o primeiro elemento do array')
console.log(shiftFaz)

/*Método .Unshift - Adiciona 1 ou mais elementos no inicio do array*/
let adicionarItem = ['sal', 'arroz', 'cafe', 'leite']
adicionarItem.unshift('Doces', 'Salgadinhos')
console.log(adicionarItem)

let unshiftFaz = ('Adiciona 1 ou mais elementos no inicio do array')
console.log(unshiftFaz)
