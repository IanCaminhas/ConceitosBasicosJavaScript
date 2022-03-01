/*
0
1
2
3
4
5
6
7
8
9
*/
for (let i=0; i<10;i++){
    console.log(i)
}

/*
Isso dá erro, pois a variável let i tem apenas escopo de bloco
ReferenceError: i is not defined
Ou seja, estou acessando a variável i fora do escopo dele

console.log('i =', i)

*/