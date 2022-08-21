function MeuObjeto(){}
//{} -> atributo objeto vazio
console.log(MeuObjeto.prototype)


const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

/*Quando crio dois objetos diferentes a partir 
da mesma função construtora, os protótipos dos
objetos apontam para o mesmo objeto ?
sim
*/
//true
console.log(obj1.__proto__ === obj2.__proto__)

/*
    Quando crio um objeto a partir da função construtora usando o new,
    o protótipo desse objeto automaticamente aponta para função 
    que criei ? sim
*/
//true
console.log(MeuObjeto.prototype === obj1.__proto__)

/*posso colocar um atributo no protótipo.
Assim, o pai do objeto criado a partir dessa função
construtora vai ter o atributo nome e função falar()  */
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function (){
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}
//Bom dia! Meu nome é Anônimo
obj1.falar()

//Se eu criar o atributo abaixo, sobrepõe o atributo do pai
obj2.nome ='Carla'
//Bom dia! Meu nome é Carla
obj2.falar()

const obj3 = {}
/*estou mudando a referência do protótipo do 
objeto 3 para MeuObjeto.prototype */
obj3.__proto__ = MeuObjeto.prototype

//vou ter acesso agora ao atributo nome e a funçao falar()
//Bom dia! Meu nome é Anônimo
obj3.falar()

//Resumindo
console.log((new Object).__proto__ === MeuObjeto.prototype) //true
console.log(MeuObjeto.__proto__ === Function.prototype) //true
console.log(Function.prototype.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__ === undefined) //false
console.log(Object.prototype.__proto__ === null) //true... Não existe objeto pai para Object.prototype










