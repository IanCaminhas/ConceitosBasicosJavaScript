var numero = 1 

{
    var numero = 2
    //dentro = 2
    console.log('dentro =', numero)
}
//fora = 2, pois o var numero = 2 dentro de {} sobrescreveu o var numero = 1

console.log('fora =', numero)

/*
    Não existe escopo de bloco, como o exemplo o abaixo:
    {
         var numero = 2
    }

    Só existem dois escopos: global e de função

A sobrescrita acima é o risco de declarar uma variavel var 
de escopo global.

Apesar que var numero = 2 está dentro de {}, o escopo global permanece



*/