/* For | While | Do..While | For..In | For..of */

//1. For
/* for(let i = 1; i <= 5; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
} */

//2. While
/* let i = 5;

while(i >= 1){
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
} */

//3. Do..While
/* let i = 0;
do{
    console.log('Digitando...', i);
    i++;
} while (i < 10) */

//4. For-in
const pessoa = {
    nome: 'Nicolas',
    idade: 20
};
for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

const cores = ['Vermelho', 'Azul', 'Verde'];
for (let indice in cores){
    console.log(indice, cores[indice]);
}

//5. For-of
for(let cor of cores){
    console.log(cor);
}