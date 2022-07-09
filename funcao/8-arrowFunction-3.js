let comparaComThis = function (param) {
    console.log(this === param)
}

//global é um objeto
//true
// no contexto do node, o this aponta para o objeto global
comparaComThis(global)

/*

no contento do browser,
o this aponta para o window

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(window)


global não existe no contexto do browser:
Isso dá falso:
comparaComThis(global)

*/


const obj = {}
comparaComThis = comparaComThis.bind(obj)

//não aponta mais para o global. Aponta para obj agora
comparaComThis(global)

//this agora aponta para obj. Agora é true
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
//false. O this agora não aponta para global porque estou usando uma função arrow
// o this aqui aponta para o objeto ou módulo corrente, ou seja, o arquivo em que essa função foi definida
comparaComThisArrow(global)

//true... O arquivo em que essa função foi definida ou módulo em que a função foi definida
comparaComThisArrow(module.exports)

//true 
comparaComThisArrow(this)
//false
comparaComThis(this)


//Quem é mais forte aqui ? o bind ou a arrow function ?
// A arrow function é a mais forte. Não consigo mudar o this... O this não varia de forma alguma
//mesmo usando o bind() para realizar uma mudança de contexto, o this não varia
comparaComThisArrow = comparaComThisArrow.bind(obj) //false
comparaComThisArrow(module.exports) //true



