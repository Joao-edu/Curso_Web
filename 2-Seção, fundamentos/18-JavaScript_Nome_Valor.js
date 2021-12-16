const saudacao = 'opa' // Contexto léxico 1

function exec(){
    const  saudacao = 'Falaaa' // Contexto léxico 1
    return saudacao

}

//Objeto são grupos alinhados de pares nome/valor
const cliente = {
    nome: "Predro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua: João carlos',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())

console.log(cliente)
