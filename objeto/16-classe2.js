class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

//No âmbito de sintaxe de classe: a definição de herança. Uso extends
//Classe Pai usa a classe Avo como protótipo. lembre: tudo isso é função por baixo dos panos. Portanto, usamos prototype
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
//Filho { sobrenome: 'Silva', profissao: 'Professor' }
console.log(filho)



