/*
    Toda função tem referência para um protótipo, assim que JavaScript define herança
    Se o objeto corrente não um atributo e comportamento, 
    ele procura no seu protótipo(objeto pai) e vai percorrer
    toda a cadeia de protótipo até encontrar o que deseja.

    A forma para acionar o protótipo do objeto corrente é usando 
    o __proto__

*/

const ferrari = {
    modelo:'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velmax:200
}

//A partir de __proto__, consigo acessar o protótipo(ou objeto pai) desse objeto
/*Se não encontrar algum atributo em ferrari, 
vou procurar esse mesmo atributo no protótipo(obj pai):
Se encontrar, pego o valor do pai.
Se não, vai procurando no protótipo do protótipo(nas gerações anteriores)
Se encontrar em alguma geração, retorna o valor... Se não, retorna undefined
*/

/*o protótipo de ferrari é um objeto vazio
[Object: null prototype] {} */ 
console.log(ferrari.__proto__)

//objeto não tem prototype.Objeto tem __proto__. olhe no exemplo abaixo:
//undefined
console.log(ferrari.prototype)

/*
    __proto__ aponta para Object.prototype.
    Object é uma função. Toda função tem um atributo chamado prototype
*/
//true
console.log(ferrari.__proto__ === Object.prototype)

//true... Object.prototype.__proto__ não tem um protótipo. É o top da hierarquia
console.log(Object.prototype.__proto__ === null)





