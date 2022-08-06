const escola = [{
    nome: 'Turma M1',
    alunos:[{
        nome:'Tiago',
        nota:7.8
    },{
        nome:'Guilherme',
        nota:9.7
    }]
},{
    nome:'Turma M2',
    alunos:[{
        nome: 'Reebeca',
        nota:6.1
    },{
        nome:'Roberta',
        nota:6.9
    }]
}

]


//Vou querer todas as notas, indepentemente da turma... Por isso o uso do flatMap
const getNotaDoAluno = aluno =>aluno.nota
const getNotasDaturma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaturma)

//[ [ 7.8, 9.7 ], [ 6.1, 6.9 ] ]
console.log(notas1)

//[ 7.8, 9.7, 6.1, 6.9 ] -> usei o concat aqui para resultar único array e não array de array
console.log([].concat([ 7.8, 9.7 ], [ 6.1, 6.9 ]))

//criando um flatMap
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaturma)

//[ 7.8, 9.7, 6.1, 6.9 ]
console.log(notas2)

