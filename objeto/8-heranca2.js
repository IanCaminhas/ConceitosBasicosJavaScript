//cadeia de protótipos (prototype chain)
const avo = {attr1:'A'} //avo tem como __proto__ o Object.prototype
const pai = {__proto__:avo, attr2:'B'}
const filho = {__proto__:pai, attr3:'C'}
//A, pois o filho herdou do avo já que não existia em sua estrutura
console.log(filho.attr1)

//undefined
//como pai, avo e Object.prototype não tem attr0, resultado: undefined
console.log(filho.attr0)

/*
    Mas como avo aponta para Object.prototype
    e colocando Object.prototype.attr0='Z'..
    o resultado abaixo vai ser z
*/

Object.prototype.attr0 = 'Z'
//z
console.log(filho.attr0)
//Z A B C
console.log(filho.attr0,filho.attr1,filho.attr2,filho.attr3)

const carro ={
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

//VelMax vai sobrescrever a velMax do objeto carro 
const ferrari ={
    modelo: 'F40',
    velMax: 324
}

//super eu uso para referenciar o protótipo
const volvo ={
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

//estabelecendo a relação de protótipo
//ferrari e volvo agora têm como protótipo carro
//isso equivale a __proto__: carro
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

//{ modelo: 'F40', velMax: 324 }
console.log(ferrari)
//{ modelo: 'V40', status: [Function: status] }
console.log(volvo)

volvo.acelerarMais(100)
//V40: 100Km/h de 200Km/h
console.log(volvo.status())




