// Função que conta o número de palavras em uma string fornecida pelo usuário
function countWords(str) {
    return str.trim().split(/\s+/).length;
  }
  
  // Exemplo de uso
  console.log(countWords('Hello world')); // 2
  