/*----------------------------------

*-* Sala 05 *-*

*-* Anderson A. Souza (Andy) *-*
*-* Gabriella Gomes de Lima (Gabi) *-*
*-* Iago Mendes *-*
*-* Renato Pina *-*
*-* Saulo dos Santos Nascimento *-*

------------------------------------*/

/*let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]
function convertirAMayusculas(array){
    for(i=0; i<array.length; i++){
        array[i] = array[i].toUpperCase()
    }
    return console.log(array)
  }
convertirAMayusculas(peliculas)

let filmes = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]
let series = ["Breaking Bad", "TWD", "GOT", "Simpsons", "Icarly"]

function recomendacoes(array1, array2) {
    for(i=0; i<array2.length; i++){
        array1.push(array2[i])
    }
    return console.log(array1)
   }
recomendacoes(filmes, series)*/

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararCalificaciones(asia, europa) {
  let comparacionesAsiaEuropa = []
  for(i=0; i<asiaScores.length; i++){
    comparacionesAsiaEuropa[i] = asia[i] === europa[i]
  }
  return console.log(comparacionesAsiaEuropa)
}
compararCalificaciones(asiaScores, euroScores)