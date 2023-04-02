// Função que implementa o Bubble Sort
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Troca os elementos adjacentes
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  // Exemplo de uso
  const arr = [64, 34, 25, 12, 22, 11, 90];
  console.log(bubbleSort(arr)); // [11, 12, 22, 25, 34, 64, 90]
  