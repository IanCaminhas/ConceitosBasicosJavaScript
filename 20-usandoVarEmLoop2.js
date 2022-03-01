const funcs = []

for(var i = 0; i< 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

//Qual vai ser o valor de i ao chamar essa função de índice 2 ?
//Resposta: 10
funcs[2]()
//Qual vai ser o valor de i ao chamar essa função de índice 8 ?
//Resposta: 10
funcs[8]()

/*
    O let agora tem memória do valor 2 e do valor 8...
    O var não possui essa memória
*/

