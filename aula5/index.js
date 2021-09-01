function teste1(x, y){
    return y - x 
}

teste1(10,40)


function teste2(x, y){
    return x * 2
    console.log(x)
    return x / 2
}

//Crie uma função que converta polegadas em centímetros. 
//Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function convert(pol, cen){
   return pol * cen
}

convert(2.54, 1);

//Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
function idade(dog, hum){
    return dog * hum

}

idade(7, 1);


//Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.

function ganhoHora (hora, mes){
    return mes / hora
}

ganhoHora(5000, 160);

//Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 

    function imc(peso, altura){
        return (peso / (altura*altura))

    } 

    imc(75, 170);