//escopo -> é onde a variável é visível, em outras palavras, até onde a variável é acessível ?
// Em outras linguagens, sera so estaria visivel dentro do ultimo escopo {{{{ultimo escopo}}}}
//Esse bloco não é uma função... Foro desse escopo, var sera é visível
{ 
    { 
        {
             { 
                 var sera = 'Será???' 
            } 
        } 
    } 
}

/*
    A grande questão é: a variavel sera é imprimida ?
    Sim !

    A variavel var dentro de um bloco de código ficará
    visível para todo mundo(mesmo fora do bloco)
*/
//Será???
console.log(sera)

function teste(){
    var local = 123
}

teste()
/*consigo acessar a var local fora do 
escopo da função ? não 
console.log(local) -> isso dá um  erro

Quando defino uma variavel dentro de uma função, o escopo 
dessa variável é dentro da função apenas... Não estará
visível fora da função

*/

/*Conclusão
Quando crio uma variavel fora  de uma função, 
ele terá acesso global... Assim ela estará dentro do objeto window

Evite criar variáveis com escopo global.

Do ponto de vista do navegador:
Uma variável var pode ter 2 escopos basicamente:

nível global(todo mundo acessa) ou escopo de função



*/








