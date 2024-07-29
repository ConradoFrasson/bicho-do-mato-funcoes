/*
Crie uma função chamada isPrime que aceite um número e retorne true se o
número for primo e false caso contrário.

Dica: Um número primo é um número maior que 1 que não tem divisores positivos
além de 1 e ele mesmo. Para verificar se um número é primo, você pode testar
se ele é divisível por qualquer número entre 2 e a raiz quadrada do número.
Você pode usar a função sqrt() da biblioteca Math para calcular isso.

Programa desenvolvido por:
 - Conrado Grachinski frasson
 - Gabriel lazarine
 - Murilo Borges
 - Enzo Biaco
*/

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true; 
    if (num % 2 === 0) return false; 

    let sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i += 2) {
        if (num % i === 0) return false;
    }

    return true;

}  console.log(isPrime(18))
console.log(isPrime(19))
console.log(isPrime(20))
console.log(isPrime(21))
console.log(isPrime(23))