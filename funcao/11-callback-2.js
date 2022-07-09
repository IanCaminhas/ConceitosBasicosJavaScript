/*
    Objetivo da aula: ter um código usando o callback
    e outro sem o uso do callback.
    Tenho um array de notas. Vou gerar
    um novo array com todas as notas
    menores que 7
*/

const notas = [7.7,6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback

let notasBaixas = []

for(let i in notas){
    if(notas[i] <7){
        notasBaixas.push(notas[i])
    }
}

//[ 6.5, 5.2, 3.6 ]
console.log(notasBaixas)

/* com callback... Aqui a função será invocada 
em cada um dos elementos. 
Se o resultado for true, o elemento será
inserido no array. Qual o evento ? 
Quando o resultado for true
*/

const notasBaixas2 = notas.filter(function(nota){
    return nota<7
})

//[ 6.5, 5.2, 3.6 ]
console.log(notasBaixas2)

/*Função callback que é chamada para cada elemento
que vai responder se o elemento vai ser incluído
ou não: nota => nota <7 */
const notasBaixas3 = notas.filter(nota => nota <7)
//[ 6.5, 5.2, 3.6 ]
console.log(notasBaixas3)


const notasMenorQue7 = nota => nota <7
const notasBaixas4 = notas.filter(notasMenorQue7)
//[ 6.5, 5.2, 3.6 ]
console.log(notasBaixas4)