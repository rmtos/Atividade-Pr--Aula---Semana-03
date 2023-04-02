// Função que gera uma série de Fibonacci até um determinado número
function fibonacci(num) {
    let a = 0;
    let b = 1;
    let result = [];
    while (b <= num) {
      result.push(b);
      let temp = a;
      a = b;
      b = temp + b;
    }
    return result;
  }
  
  // Exemplo de uso
  console.log(fibonacci(20)); // [1, 1, 2, 3, 5, 8, 13]
  