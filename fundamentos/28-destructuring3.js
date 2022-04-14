/*vou passar um objeto para a função...
Ao invés de acessar obj.max dentro função, 
eu quero que já tire dentro do objeto 
os atributos min e max...
Ou seja, quero esses atritubos prontos
{min = 0, max = 1000} => isso é o destructuring
*/
//a função abaixo retorna um elemento randômico entre o mínimo e o máximo
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

//Agora estou passando um objeto
console.log(rand({max:50, min:40}))

const obj ={max:50, min:40}
console.log(rand(obj))

console.log(rand({min: 955}))

//vai ficar gerando números entre 0 e 1000
console.log(rand({}))

/*aqui vai ficar randomizando entre undefined
Um erro é lançado
console.log(rand())
*/



