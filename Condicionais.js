/* If, Else */

//Se a hora estiver entre 06:00 até 12:00 : Bom dia!
//Se estiver entre 12:00 até as 18:00 : Boa Tarde!
//Caso contrário : Boa Noite!

var horario = 16

if(horario >= 6 && horario <= 12){
    console.log('Bom Dia!');
} else if(horario > 12 && horario <= 18){
    console.log('Boa Tarde!');
} else{
    console.log('Boa Noite!');
}

/* Switch Case */
let permissao = ''; // comum, gerente, diretor
switch(permissao){
    case 'comum':
        console.log('Usuário comum.');
        break;

    case 'gerente':
        console.log('Usuário gerente.');
        break;
    
    case 'diretor':
        console.log('Usuário diretor.');
        break;

    default:
        console.log('Usuário não reconhecido.');
}