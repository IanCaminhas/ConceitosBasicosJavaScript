/*
    Coma função construtora, eu crio 
    o molde para os objetos.
    Funciona como a classe em outras linguagens.
    Crio os comportamentos e atributos que podem
    ser públicos ou privados.
    Se eu quiser colocar uma função privada,
    basta tirar o this substituindo por: let, const, var

    this.funcao = function (){} //isso é público
    funcao = function () {} // isso é privado
*/

/*
    Se quiser colocar algum atributo acessível para fora,
    basta usar o this:
    let velocidadeAtual 
     this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
*/

function Carro(velocidadeMaxima=200,delta=5){
    //atributo privado => pertence apenas ao escopo dessa função
    //por ser privado, não consigo fazer carro.velocidadeAtual
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual +=delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }

}

/*
aqui instancio a função usando o new.
Posso usar o parêntese também: const palio = new Carro()
*/
const palio = new Carro
palio.acelerar()
//5
console.log(palio.getVelocidadeAtual())

const onix = new Carro(350,20)
onix.acelerar()
onix.acelerar()
onix.acelerar()
//60
console.log(onix.getVelocidadeAtual())

/*
    Tenho duas instâncias diferentes 
    a partir da função construtora:
        const palio = new Carro
        const onix = new Carro(350,20)
    Isso é paradigma OO

    função construtora que é o molde
    dos objetos: function Carro(){}
*/

console.log(typeof Carro)

//foi instanciado a partir da função construtora. Por isso é um obejct
console.log(typeof onix)