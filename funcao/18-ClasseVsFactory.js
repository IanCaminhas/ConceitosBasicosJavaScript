/*

Obsjetivo: 
Apresentar duas formas de criar instâncias: usando factory ou class

O this é necessário numa class, enquanto que numa função factory 
não é.

classe é uma forma de se construir função em java Script. 
Com classe, pego um pouco a ideia que vem da orientação a objetos do java. 
A classe tem atributos e comportamentos. 
A partir de uma classe posso instanciar objetos.
Classe é uma forma diferente de escrever uma função.

O navegador suporta definição de classe.

*/

//No final das contas, isso é convertido numa função.
//Se na função falar(){} eu retirar o this de this.nome, um erro é gerado
class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Ian')
//Meu nome é Ian
p1.falar()

const criarPessoa = nome =>{
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Pereira')
//Meu nome é Pereira
p2.falar()

/*
    const p1 = new Pessoa('Ian')
    p1.falar() 
    O resultado pode não ser o esperado, pois o this(de nome) pode 
    variar conforme o chamador. Quando chamo a função no navegador
    usando classe, o resultado pode não ser o esperado. No caso, o resultado
    foi: Meu nome é undefined

    Usando factory, esse problema
    não é enfrentado, ou seja, o método fica mais previsível(determinístico).
    Usando criarPessoa(uma factory), o resultado será 
    Meu nome é Pereira. Mais previsível!!!!

   O objeto tem consciência do contexto léxico onde foi declarado
   no caso da factory.


*/