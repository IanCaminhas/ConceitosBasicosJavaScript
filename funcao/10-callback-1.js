/*
    callback significa chamar de volta.
    A ideia do callback é passar uma função 
    para outra função. Quando determinado
    evento acontecer, a função passada 
    vai ser chamada de volta.
    A função callback pode ser chamada uma 
    ou mais vezes -> vai depender do contexto em que estou
    passando a função.
*/

const fabricantes = ["Honda","Nissan","Toyota"]

function imprimir(nome,indice){
    console.log(`${indice+1}. ${nome}`)
}

/*para cada elemento a função imprimir vai ser chamada. 
Isto é, vai chamar a função de volta */
/*
1. Honda
2. Nissan
3. Toyota
*/

fabricantes.forEach(imprimir)

/*
Honda
Nissan
Toyota
*/
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})

/*
Honda
Nissan
Toyota
*/ 
fabricantes.forEach(fabricante => console.log(fabricante))

/*

    A ideia do callback é passar uma função 
    para outra função. Quando determinado
    evento acontecer, a função passada 
    vai ser chamada de volta.

    Mas qual o evento que acontece para chamar o callback ?

    O evento nos cenários acima é o loop, ou seja,
    quando ele encontra um novo elemento ele dispara 
    uma função. 

    O evento é cada um dos elementos percorridos
    no array. 

    Para cada elmento, ele chama o callback(a função passada) passando
    o próprio elemento e o índice.

    Callback acontece muito em requisições Ajax:
    Quando faço a requisição, vou ao servidor passando
    para a requisição uma callback que será chamada 
    quando a resposta chegar. A resposta pode ser
    de sucesso ou erro. Assim, posso passar
    2 funções: um função de sucesso e outra de erro



*/