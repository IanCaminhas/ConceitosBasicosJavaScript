const alunos =[
    {nome:'Pedro', nota:7.3, bolsista: false},
    {nome:'Cristiano', nota:9.2, bolsista: true},
    {nome:'Laila', nota:9.8, bolsista: false},
    {nome:'Renato', nota:8.7, bolsista: true},
]

//Desafio 1: Todos os alunos são bolsistas ?
//Se der verdadeiro em todos os casos, todos os alunos são bolsistas
const todosBolsistas = (resultado,bolsista) => resultado && bolsista
//false
console.log(alunos.map(a=> a.bolsista).reduce(todosBolsistas))

//Desafio 2: Algum aluno é bolsita ?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
//true
console.log(alunos.map(a=>a.bolsista).reduce(algumBolsista))