// Função que inverte uma string fornecida pelo usuário
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  // Exemplo de uso
  console.log(reverseString('hello world')); // 'dlrow olleh'
  nn