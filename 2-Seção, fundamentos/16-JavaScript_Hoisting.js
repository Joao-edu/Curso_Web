//Tradução da palavra Hoisting = içar jogar para cima

console.log("a =", a)//O valor "2" não é atribuido a variável 
var a = 2
console.log("a =", a)

function teste(){
    console.log("b =", b)//Iça a variável "b" porem não o valor atribuido a ela "4"
    var b = 4
    console.log("b =", b)
}

teste()

  