//contexto léxico: Onde as variáveis foram declaradas

const valor = 'Global'

/*
contexto em que essa função foi definida: 
    dentro de 14-conetxtolexico.js
Não foi dentro de um objeto, outra função, etc.
Global
*/
function minhaFuncao(){
    console.log(valor)
}

/*
    Qual valor vai ser impresso ?
    Global ou Local ?
    Resposta: Global
*/

function exec(){
    const valor='Local'
    minhaFuncao()
}

/*
    Qual valor vai ser impresso ?
    Global ou Local ?
    Resposta: Global

    Se const valor='Local' fosse definido dentro de 
    function minhaFuncao(){}, Local seria exibido.

    function minhaFuncao(){
         const valor='Local'
         console.log(valor)
    }

    Pelo contexto léxico, a função vai usar o 
    const valor= 'Global'. 
    
    Quando a function é carregada, ela tem ciência 
    do contexto onde foi declarada.

    Carrega consigo o contexto  onde foi definido. Assim, o 
    const valor= 'Global' é usado.

    Abaixo minhaFuncao() é executada e não definida, por isso não mostra Local
    function exec(){
        const valor='Local'
        minhaFuncao()
    }

*/
exec()