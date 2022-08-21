//function
console.log(typeof String)
//function
console.log(typeof Array)
//function
console.log(typeof Object)

/*Conclusão: String, Array e Object 
tem um atributo chamado .prototype
Toda função tem um atributo chamado prototype */

//quero reverter uma string. Estou atribuindo uma função no protótipo
String.prototype.reverse = function () {
    //O método this.split('') pertence à String
    return this.split('').reverse().join('')
}
//odlanoR onaitsirC
console.log('Cristiano Ronaldo'.reverse())
//pegando o elemento da primeira posição
Array.prototype.first = function(){
    //this[0] é o próprio Array na posição 0 
    return this[0]
}
//1
console.log([1,2,3,4,5].first())

/*Estou sobrescrevendo o comportamento de uma função da String
isso causa efeitos colateiras... Só de adicionar, já causa aflitos...
Imagina sobrescrever

String.prototype.toString = function (){
    return 'Não!!!!!'
}

*/