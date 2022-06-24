somar(10);

function somar(limite){
    let multiplosTres = 0
    let multiplosCinco = 0

    for(var i = 0; i <= limite; i++){
        if(i % 3 === 0)
        multiplosTres += i;
        
        else if(i % 5 === 0)
        multiplosCinco += i;
    }
    console.log(multiplosTres + multiplosCinco)
}