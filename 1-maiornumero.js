/*
Crie uma função chamada findMax que aceita um array de números e retorne
o maior número do array.

Programa desenvolvido por:
 - Murilo Borges🤠
*/

function findMax(vetor){
    let maior = vetor[0]
    for(let i = 0; i < vetor.length; i++){
        if( vetor[i] > maior){
            maior = vetor[i]
        }
    }
    return maior
}

console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9]))