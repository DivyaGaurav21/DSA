function pushZeroAtEnd(arr) {
    let i = 0;
    let j = arr.length - 1;
  
    while (i < j) {
      if (arr[i] !== 0) {
        i++;
      } else if (arr[j] === 0) {
        j--;
      } else {
        // Swap non-zero element at position i with the zero element at position j
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
      }
    }
  }
  
//   // Example usage
//   const inputArray = [1, 0, 2, 0, 3, 4, 0, 5];
//   pushZeroAtEnd(inputArray);
//   console.log("Modified Array:", inputArray);
  

function pushZeroAtEnd(arr) {
    let nonZeroIndex = 0;
  
    // Iterate through the array and move non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[nonZeroIndex] = arr[i];
        nonZeroIndex++;
      }
    }
  
    // Fill the remaining positions with zeros
    for (let i = nonZeroIndex; i < arr.length; i++) {
      arr[i] = 0;
    }
  }
  
  // Example usage
  const inputArray = [1, 0, 2, 0, 3, 4, 0, 5];
  pushZeroAtEnd(inputArray);
  console.log("Modified Array:", inputArray);
  