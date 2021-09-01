function podeSubir(alturaDaPessoa, estaAcompanhada){ 
    let podeSubir = false 

    if(alturaDaPessoa <= 2.0 && altura >= 1.40){
       podeSubir = true
    }

    if(altura >= 1.40 && estaAcompanhada){
        podeSubir
    }
    return podeSubir
}

//function podeSubir(alturaDaPessoa, estaAcompanhada){
 //   if((altura <= 2.0 && alturaDaPessoa >= 1.40) || (alturaDaPessoa >= 1.40 && estaAcompanhada)){
 //       return true
//    }
//    else{
  //      return false
   // }
//}

//function podeSubir(alturaDaPessoa, estaAcompanhada){
//    return (alturaDaPessoa <= 2.0 && alturaDaPessoa >= 1.40) || ( alturaDaPessoa >= 1.40 &&estaAcompanhada)
//}


  