
/*arguments é um array interno de uma função que tem todos 
os argumentos passados
quando nenhuma parametro é passado, esse array fica vazio*
Aqui podemos passar a quantidade de argumentos eu quiser*/
function soma(){
    let soma = 0
    for(i in arguments){
        soma +=arguments[i]
    }

    return soma
}
//0
console.log(soma())
//1
console.log(soma(1))
//6.6
console.log(soma(1.1,2.2,3.3))
//3.3000000000000003Teste
console.log(soma(1.1,2.2,"Teste"))
//0abc
console.log(soma('a','b','c'))