let querCoxinha=true;
let totalValor=0.00

while(querCoxinha){
    let pergunta=prompt("Quer coxinha?")
    if(pergunta=="s"){
        querCoxinha=true;
        totalValor=totalValor+2.50
    }
    if(pergunta=="n"){
        querCoxinha=false;
    }
}

console.log("O valor total foi: R$"+totalValor)