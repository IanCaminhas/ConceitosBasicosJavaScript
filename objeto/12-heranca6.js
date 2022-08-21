function Aula(nome,videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Olá',1)
const aula2 = new Aula('Hello guys',2)
//Aula { nome: 'Olá', videoID: 1 }
console.log(aula1)
//Aula { nome: 'Hello guys', videoID: 2 }
console.log(aula2)

/*
    Quando uso uma função construtora e uso o operador new...
    não só o fato de criar um novo ojeto, mas o protótipo
    desse objeto criado aponta para a função(Aula())

*/