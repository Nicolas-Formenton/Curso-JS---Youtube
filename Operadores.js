//Operadores Aritméticos (+; -; /; *; etc)
//"" Atribuição
//"" Comparação
//"" Lógicos
//"" Bitwise

//Op. Ternários ( ? = If / : = else{else if})
let pontos = 1001;
let tipo = pontos <= 100 ? 'comumm' : pontos > 100 ? 'comum' : 'nada';
console.log(tipo);

//Op. Lógicos

/* e (&&) */
/* Retorna TRUE se os dois operandos forem true */
let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho
console.log(podeAplicar);

/* ou (||) */
/* retornar TRUE se um dos operandos forem true */
let podeAplicar2 = maiorDeIdade || possuiCarteiraDeTrabalho
console.log(podeAplicar2)

/* NOT (!) */
let candidatoRecusado = !podeAplicar2;
console.log('Candidato Recusado:', candidatoRecusado);

//Falsy
/* Undefined
null
0
false
''
NaN - not a number */

//Truthy
let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);