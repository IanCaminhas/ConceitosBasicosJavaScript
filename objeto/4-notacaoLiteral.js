const a =1
const b = 2
const c = 3

//antes do ECMASCRIPT 2015 para criação de um objeto
const obj1 = { a:a, b:b,c:c }

//após ECMASCRIPT 2015
const obj2 = {a,b,c}
/*{ a: 1, b: 2, c: 3 }
{ a: 1, b: 2, c: 3 }
Perceba que o resultado é o mesmo
*/
console.log(obj1,obj2)

//quero criar dinamicamente um atributo para um objeto
//antes do ECMASCRIPT era assim:
const nomeAttr = 'nota'
const valorAttr = 7.87
const obj3 = {}
obj3[nomeAttr] = valorAttr
//{ nota: 7.87 }
console.log(obj3)

//Com ECMASCRIPT 2015
const obj4 = {[nomeAttr]:valorAttr}
//{ nota: 7.87 }
console.log(obj4)

//forma antiga de criar uma função no objeto. Tinha que ter a chave/função
const obj5 ={
    funcao1: function(){
        //...
    }
}

//A partir do ECMA 2015, posso fazer sem chaves
const obj6 ={
    funcao1() {
        //...
    }
}

/*
{ funcao1: [Function: funcao1] } 
{ funcao1: [Function: funcao1] }
*/
console.log(obj5,obj6)





