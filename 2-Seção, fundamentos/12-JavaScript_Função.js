//Função sem retorno
function imprimirSoma(a,b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

// Função com retorno 
function soma(a, b = 0){  
    return a + b
    }    
console.log(soma(5, 2))    
    

//Armazenando uma função em uma variavel
const imprimirSoma1= function (a, b){
    console.log(a + b)
    }

imprimirSoma1(2, 3)
  

//Armazenando uma função arrow em uma variavel
const soma1 = (a, b) => {
    return a + b
    }
    
    console.log(soma(2, 8))

// Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(8, 2))        




