exibirTipo(10);

function exibirTipo(limite){
    for(i = 0; i <= limite; i++){
        if(i % 2 === 0){
            console.log(i, '- Par')
        } 
        else
            console.log(i, '- Ímpar')
    }
}