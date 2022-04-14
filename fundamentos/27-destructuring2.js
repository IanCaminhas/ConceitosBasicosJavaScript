///Criei a variável a que recebeu o primeiro elemento do array
const [a] = [10]
//10
console.log(a)

//desestruturando -> desestruturo e extraio para outras variáveis
//pular elementos , , e recebendo valor default caso não exista n6=0
const [n1,,n3,,n5,n6=0] = [10,7,9,8]
//10 9 undefined 0
console.log(n1,n3,n5,n6)

//array composto de outros array... Em suma é uma matriz
//Ignore o primeiro array... No segundo array, ignore o primeiro elemento e pegue o segundo
const [, [, nota]] = [[,8,8],[9,6,8]]
//6
console.log(nota)

/*
    Quando desestruturo de um objeto, uso {}.
    Quando desestruturo de um array, uso [].

*/
