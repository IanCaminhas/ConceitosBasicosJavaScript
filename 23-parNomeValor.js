//Ojeto é um conjunto de chave-valor
//Esse conceito de chave-valor tbm está presente quando declaro uma variavel
const saudacao = 'Opa' // contexto léxico 1 -> é o local/contexto no qual a variavel foi definda fisicamente no código... No contexto do browser é global, pois foi definido em window

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

/*
    Como const saudacao foi definido em contextos(ou escopos) diferentes,
    não haverá conflito..
*/

//Objetos são grupos aninhados de pares chave/valor
const cliente ={
    nome:'Pedro',
    idade:32,
    peso:90,
        endereco: {
            logradouro: 'Rua Muito Legal',
            numero: 123
        }
}

//Opa
console.log(saudacao)
//Falaaa
console.log(exec())
/*
    {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: { logradouro: 'Rua Muito Legal', numero: 123 }
}
*/
console.log(cliente)

/*
    Cada variável está associada a um contexto... Por isso, é chave/valor
*/



