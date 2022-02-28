//Posso usar let numero = 1 que o resultado abaixo será o mesmo
var numero = 1

{
    //O let numero = 2 vai ter escopo apenas aqui dentro
    //O escopo inferior prevalece sobre o maior
    //Aqui  let numero = 2 tem preferência, pois tem escopo menor
    let numero = 2
    //dentro =  2
    console.log('dentro = ', numero)
}
//fora =  1
console.log('fora = ', numero)


let numero2 = 10

{
    let numero2 = 11
    //dentro =  11 -> aqui o esopo interno prevalece, por isso o valor 11
    console.log('dentro = ', numero2)

}
//fora =  10 -> aqui o esopo mais global prevalece
console.log('fora = ', numero2)

/*
    Let tem escopo de bloco, mesmo dentro de uma função...

    var => escopo global e de função
    let => escopo global, função e de bloco.
*/