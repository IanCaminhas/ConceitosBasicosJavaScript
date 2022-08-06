//Entretanto, o conteúdo do array pode ser trabalhado
const jogadores = ['Messi','Neymar','Mbappe','Verrati']

//remove o último elemento do array
jogadores.pop()
//[ 'Vettel', 'Alonso', 'Raikkonen' ]
console.log(jogadores)

//adiciona outro elemento no array
jogadores.push('Marquinhos')
//[ 'Messi', 'Neymar', 'Mbappe', 'Marquinhos' ]
console.log(jogadores)

//Retira o elemento da primeira posição
jogadores.shift()
//[ 'Neymar', 'Mbappe', 'Marquinhos' ]
console.log(jogadores)

//coloca na primeira posição do array. Empurra os elmentos à frente uma posição a mais
jogadores.unshift('Donnarumma')

//[ 'Donnarumma', 'Neymar', 'Mbappe', 'Marquinhos' ]
console.log(jogadores)

//splice pode adicionar e remover elementos

//Considere a seguinte lista antes de alterar://[ 'Donnarumma', 'Neymar', 'Mbappe', 'Marquinhos' ]
//adicionar...Antes de Mbappe, vou adicionar Hakimi e Sérgio Ramos
jogadores.splice(2,0,'Hakimi','Sérgio Ramos')

/*
[
  'Donnarumma',
  'Neymar',
  'Hakimi',
  'Sérgio Ramos',
  'Mbappe',
  'Marquinhos'
]
*/
console.log(jogadores)

//remover com splice...Removendo apartir do índice 3 e apenas um elemento

/*
[
  'Donnarumma',
  'Neymar',
  'Hakimi',
  'Sérgio Ramos',
  'Mbappe',
  'Marquinhos'
]
*/

jogadores.splice(3,1)
//[ 'Donnarumma', 'Neymar', 'Hakimi', 'Mbappe', 'Marquinhos' ] Sergio ramos saiu
console.log(jogadores)

//slice significa pedaço
//metodo retorna um novo array
//Pego os elementos a partir do índice 2 
const algunsJogadores1 = jogadores.slice(2)
//[ 'Hakimi', 'Mbappe', 'Marquinhos' ]
console.log(algunsJogadores1)

//pegando do índice 1 até o índice 4. Entretanto, vai pegar os elementos 1,2,3
const algunsJogadores2 = jogadores.slice(1,4)
//[ 'Neymar', 'Hakimi', 'Mbappe' ]
console.log(algunsJogadores2)


