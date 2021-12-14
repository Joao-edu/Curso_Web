{
    {
        {
        
           {
               var sera = "Sera???" //Variável ficara visível dentro e fora do bloco 
               console.log(sera) // diferente de outras linguagens 
           }
        }
    }
}
console.log(sera)

    function teste(){
        var local = 123 //Quando define uma variável dentro de uma função 
        console.log(local) //ela estará visível apenas dentro do escopo da função
    }

    //console.log(local)
    teste()