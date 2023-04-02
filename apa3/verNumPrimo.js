// Função que verifica se um número é primo ou não
function isPrime(num) {
    if (num <= 1) {
      return false; // retorna falso para números menores ou iguais a 1
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; // retorna falso se o número for divisível por algum outro número diferente de 1 e ele mesmo
      }
    }
    return true;
  }
  
  // Exemplo de uso
  console.log(isPrime(11)); // true
  