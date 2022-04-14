const funcs = []

for(let i = 0; i< 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

//Qual vai ser o valor de i ao chamar essa função de índice 2 ?
//Resposta: 2
funcs[2]()
//Qual vai ser o valor de i ao chamar essa função de índice 8 ?
//Resposta: 8
funcs[8]()

