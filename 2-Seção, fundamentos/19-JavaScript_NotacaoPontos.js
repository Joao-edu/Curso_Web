console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = "Bola"
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec')
    }
}

const obje2 = new Obj('Cadeira')
const obje3 = new Obj('Mesa')

console.log(obje2.nome)
console.log(obje3.nome)
obje3.exec()

