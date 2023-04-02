// Função que implementa o cálculo do fatorial de um número
function fatorial(num) {
    if (num < 0) {
      return undefined; // retorna undefined se o número for negativo
    } else if (num === 0) {
      return 1; // retorna 1 se o número for 0
    } else {
      return num * fatorial(num - 1); // chama a função recursivamente
    }
  }
  
  // Exemplo de uso
  console.log(fatorial(5)); // 120
  