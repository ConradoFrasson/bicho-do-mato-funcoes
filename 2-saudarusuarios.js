/*
Crie uma função chamada greetUsers que aceita um array de nomes e
exibe uma saudação para cada nome no console.

Programa desenvolvido por:
 - Murilo Borges🤠
 - Conrado
 - Gabriel L
 - Enzo
 */


function greetUsers(vetor){
   for(let i = 0; i < vetor.length; i++){
    console.log(`Olá, tudo bem ${vetor[i]}`)
   }
}
greetUsers(['Murilo', 'Karine', 'Juliano', 'Otávio'])