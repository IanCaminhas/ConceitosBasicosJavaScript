/*
O exemplo abaixo mostra como o 
this pode variar de acordo com quem 
está chamando a função

O setInterval não vai achar o this que eu
acharia que o setInterval iria encontar. Duas soluções
vão ser abordadas !

*/

function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, 1000)
}

/* 
Resulta NaN a cada 1 segundo.
Resultado indesejado !!
No caso acima, this.idade não aponta para o objeto Pessoa
Quem está chamando this.idade é o temporizador e não 
o objeto Pessoa

new Pessoa 
*/

//Abordagem com solução usando bind:
function Pessoa2(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

//A cada segundo a idade será incrementada
//1,2,3,4,5 e assim por diante
//Agora o bind aponta para o objeto pessoa
//new Pessoa2

//Abordagem com solução usando const:
function Pessoa3(){
    this.idade = 0
    /*como executo dentro da função Pessoa3(), de fato
    o this é o que quero... Significando que a 
    constante não mudará nunca, não importando quem chame a função */
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

/*
/1,2,3,4,5 e assim por diante
A cada segundo a idade será incrementada
*/
new Pessoa3