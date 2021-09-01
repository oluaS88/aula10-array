//função declarada
function darOi(){
    console.log("Olá mundo");
}

darOi();
darOi();
darOi();

//função expressa
let somar = function (){
    console.log(1+1);
}

somar();

//função expressa com parâmetro
let somar1 = function (numA, numB){
    console.log(numA + numB);
};

somar1(1, 7);