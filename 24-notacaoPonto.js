//7 -> ceil arredondou 6.1
console.log(Math.ceil(6.1))

const obj1 ={}
//obj'['nome'] = 'Bola' // tambem dá para criar um atributo assim de forma dinâmica
obj1.nome = 'Bola'
//Bola
console.log(obj1.nome)

function Obj(nome){
    //esse nome ficará visível para quem instanciar essa função
    // Em outras palavras, nome(atributo) vai ficar público
    //com var, nome ficaria restrito só no escopo da função
    this.nome = nome

    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

//Cadeira
console.log(obj2.nome)
//Mesa
console.log(obj3.nome)
//Exec...
console.log(obj3.exec())

/*
    Estou usando a notação . para acessar propriedades
    e funções... Tudo isso fica visível fora do escopo...
    Isso vai ocorrer quando usarmos o this...

    Notação . está presente em toda a linguagem... Chamamos funções
    da API do JS

    Acesso os membros de um objeto, de uma função sempre apartir da notação ponto

*/



