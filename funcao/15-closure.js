/*
Closure é o escopo criado quando uma 
função é declarada. Esse escopo é a região
que envolve a função. Essa região é o closure
da função. A função tem memória onde foi definida.
A função lembra das suas origens!

O escopo externo à função vai junto quando declaro a função.

Esse escopo permite a função acessar e manipular 
variáveis externas à função. As variáveis declaradas
ao redor da função tem haver com o contexto léxico.

Função em JS é um closure

*/

//Contexto léxico em ação !
/*o contetxo em que function dentro(){} 
foi declarada foi dentro da function fora(){} */

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
/*
    vai retornar Global ou Local ?
    Local
    Pois o local físico onde a função dentro foi 
    declarada foi em function fora(){}
    O escopo externo à função vai junto
    quando declaro a função.
    A função lembra das suas origens!

*/
console.log(minhaFuncao())