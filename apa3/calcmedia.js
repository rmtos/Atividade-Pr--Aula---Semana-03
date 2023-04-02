function bubbleSort(arr) {
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
         }
      }
    }
    return arr;
  }
  
  // Exemplo de uso
  var arr = [5, 3, 8, 4, 6];
  console.log("Antes: " + arr);
  arr = bubbleSort(arr);
  console.log("Depois: " + arr);
  