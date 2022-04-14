/*
    Introdução
O que posso fazer com o código que 
potencialmente pode gerar algum tipo de erro ? *
Alguns códigos tem a possibilidade de gerar um erro..

Exemplo: 
Faço uma chamada Ajax e dá erro 500. Posso tratar com try{}catch{}

isso serve para evitar mensagens de infraestrutura 
para o usuário, stack de errors, mensagens em inglês. Assim
mando uma mensagem de erro mais amigável para o usuário..

Dica: hash de erro.

O erro é lançado:
ou trato o erro ou o programa acaba parando.

Trate o erro para não jogar o desastre na cara do usuário 

*/

/* O lançamento do erro é com a palavra reservada throw */
function tratarErroELancar(erro){

    /*dentro de Erro() posso mandar qualquer mensagem.
    Exemplo: deu erro e nosso suporte já foi notificado */
    //throw new Error('...')
    //throw 10 posso lançar um número
    //throw true posso lançar um boolean
    //throw 'mensagem' posso lançar string
    throw {
        nome:erro.name,
        msq:erro.message,
        date: new Date
    }

    //toda essa flexibilidade de lançar o erro não está presente em todas as linguagens

}

/*
vou converter todas as letras para maiúsculo e concatenar 
com algumas exclamações
*/

function imprimirNomeGritado(obj){

    /*
    finally -> bloco que será executado mesmo que 
    ocorra um erro ou não 
*/
    try {
        console.log(obj.name.toUpperCase()+'!!!')
    }catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('final')
    }
   
}

const obj = {nome: 'Roberto'}

/*
    final

C:\Users\ianca\Desktop\Cursos\Conceitos básicos de javaScript\31-erro.js:19
    throw {
    ^
{
  nome: 'TypeError',
  msq: "Cannot read properties of undefined (reading 'toUpperCase')",
  date: 2022-04-14T17:15:19.308Z
}
*/
imprimirNomeGritado(obj)

