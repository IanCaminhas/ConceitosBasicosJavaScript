//IIFE -> Immediately Invoked Function Expression

/*
Função auto-invocada:
Função anônima que é declarada e chamada ao mesmo tempo
*/

/*
    Tudo que estiver declarado aqui dentro,
    vai ficar restrito a essa função.
    Posso definir constantes, variáveis,funções,etc.
    Isso serve para fugir do escopo global.
*/
(function(){
    //Será executado na hora!
    //Foge do escopo mais abrangente!
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()