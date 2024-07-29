/*
Crie uma função chamada getEvenNumbers que aceite um array de números e
retorne um novo array contendo apenas os números pares do array original.

Dica: Para filtrar os números pares, você pode usar o operador módulo (%).
Um número é par se o resto da divisão desse número por 2 é zero (num % 2 === 0).
Tente utilizar o método filter para criar um novo array contendo apenas os
números que atendem a essa condição.

Programa desenvolvido por:
 - Conrado Grachinski frasson
 - Gabriel lazarine
 - Murilo Borges
 - Enzo Biaco
*/

function getEvenNumbers(numbers) {
    return numbers.filter(function(num) {
        return num % 2 === 0;
    });
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = getEvenNumbers(numeros);
console.log(numerosPares);