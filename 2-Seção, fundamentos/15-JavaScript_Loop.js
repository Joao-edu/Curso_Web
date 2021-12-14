
// Loop Usando Var

for( var i = 0; i < 10; i++){
    console.log(i)
}
console.log("i =", i)

// Loop Usando Let

for( let a = 0; a < 10; a++){
    console.log(a)
    //console.log("i =", a)
}

//console.log("i =", a) // erro pois esta fora do escopo


// Loop Usando Var

var funcs = []

for(var b = 0; b < 10; b++){
    funcs.push(function(){
        console.log(b)
    })
}

funcs[2]()//Como a variavel Var não tem scopo do bloco não respeita 
funcs[8]()//o valor de b, um erro da java script

// Loop Usando Let

var funcs1 = []

for(let c = 0; c < 10; c++){
    funcs1.push(function(){
        console.log(c)
    })
}

funcs1[2]()//Bloco respeita o scopo usando a variavel Let no lugar de var
funcs1[8]()//