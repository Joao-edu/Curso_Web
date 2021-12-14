var numero = 1 
  { 
     let numero = 2 // Variável Let não sobrescreve como aconte com Var pois são escopo diferente
     console.log("Dentro =", numero)
  }

console.log("Dentro =", numero)  
