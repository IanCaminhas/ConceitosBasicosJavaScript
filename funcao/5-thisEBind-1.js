/*
    O this é o objeto referenciado no contexto de execução
    Porém, em JS o this pode variar

    Dois motivos para a criação da função arrow:
    1 - diminuir a sintaxe
    2 - para ter um this que não varia

    Usando a sintaxe function(), 
    o this pode variar de acordo com quem chamou a função.
    Não sendo, necessariamente, o comportamento desejado.
    this representa o window ? representa o objeto ?
    representa o elemento que cliquei ?

    Mas... se eu estiver usando a arrow function, o this 
    não varia nunca. Assim, o this vai ser definido
    quando a função for definida, ou seja, no contexto da função.
    
    como o window é no contexto global, por isso o resultado abaixo é true:
    this === window... 

    Com arrow function:
    o this foi associado ao local que a função foi escrita
    o this é associado ao contexto da palavra, ou seja, ao contexto léxico(contexto em que a função foi escrita)
*/

/* 
Objetivo da aula:
ter um controle maior e deixar o this mais determinístico
*/ 

const pessoa ={
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
//undefined ->  A função falar() não tem saudação dentro dele
// Ou seja, temos um conflito entre paradigmas: funcional e OO
falar()

//aqui o this será resolvido para a variável pessoa
//Quando chamar pessoa.falar.bind(pessoa) e sempre que referenciar o this... O this será do objeto pessoa passado para função bind
// a função bind não altera o this de pessoa... O bind retorna outra função 
const falarDePessoa = pessoa.falar.bind(pessoa)
//Bom dia!
falarDePessoa()



/*
const pessoa ={
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}
//Bom dia
pessoa.falar()

Se tirar o this, uma exception é lançada:
const pessoa ={
    saudacao: 'Bom dia!',
    falar() {
        console.log(saudacao)
    }
}
//exception é lançada !!!
pessoa.falar()

*/
