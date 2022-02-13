const universidade = "PUCMG"

//Pega a letra na posição indicada... Começa da posição 0
//G
console.log(universidade.charAt(4))

//"" retorna vazio, pois não existe a posição 5
console.log(universidade.charAt(5))

//pega a numeração unicode. No caso é 77
console.log(universidade.charCodeAt(3))

//Existe o dígito 'C' dentro da palavra PUCMG. Se sim, em qual posição está ?
//posicao 2
console.log(universidade.indexOf('C'))

//retorna -1, pois não existe o dígito 'X' na string
console.log(universidade.indexOf('X'))

//pega da posição 1 em diante.
//UCMG
console.log(universidade.substring(1))

//não inclui o índice 3
//vai retonar PUC
//Começando do índice 0 me dê 3 caracteres
console.log(universidade.substring(0,3))

//Universidade PUCMG!
console.log('Universidade '.concat(universidade).concat("!"))

//substitui um caractere por outro
//PUCMT
console.log(universidade.replace(4, 'T'))

//Ana,Maria,Pedro
console.log('Ana,Maria,Pedro')

//Ana,Maria,Pedro
console.log("Ana,Maria,Pedro")

//Transformando a String num Array
//[ 'Ana', 'Maria', 'Pedro' ]
console.log("Ana,Maria,Pedro".split(','))

//32
console.log('3'+2)
//32
console.log("3"+2)

//1
console.log('3'-2)

//1
console.log("3"-2)

/*
    String em JS podem ser circundadas por '', "", ``
    console.log('3'+2)
    sinal de + concatena... dá 32

    Mas aqui dá 1
    //1
    console.log('3'-2)

*/