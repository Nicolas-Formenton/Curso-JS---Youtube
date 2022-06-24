/* Vel. Max. 70km
a cada 5km acima do limite, 1 ponto na carteira
Usar > Math.floor() para arredondar para o mais proximo
Caso pontos > 12 -> 'Carteira Suspensa' */

verificarVelocidade(85)

function verificarVelocidade(velocidade){
    
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    
    if(velocidade <= velocidadeMaxima){
    console.log ('Sua velocidade é: ' + velocidade + ' km/h.');    
    console.log ('Velocidade Limite da Via: 70km/h');
    }
    
    else{
    const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto))
    
    if(pontos >= 12){
    console.log('Carteira Suspensa! Máximo de 12 pontos atingido.');
    console.log ('Sua velocidade é: ' + velocidade + ' km/h.');
    console.log ('Você tem: ' + pontos + ' ponto(s).')
    }
    
    else{
    console.log ('Sua velocidade é: ' + velocidade + ' km/h.');   
    console.log ('Você tem: ' + pontos + ' ponto(s).')    
        }
    }
}