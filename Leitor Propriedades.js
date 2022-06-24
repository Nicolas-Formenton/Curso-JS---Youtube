const filme = {
    nome: ': Homem Aranha',
    ano: 2021,
    personagem: ': Mary Jane,' + ' Dr. Octopus,' + ' Ned.'
}

exibirPropriedades(filme);

function exibirPropriedades(obj){
    for(propriedade in obj)
        if (typeof obj[propriedade] === 'string'){
            console.log(propriedade, obj[propriedade])
        }
        /* else if (typeof obj[propriedade] !== 'string'){
            console.log(propriedade, obj[propriedade]);
        } */
}