function insertionSort(arr) {
  // your code

  for (let i = 0; i < arr.length; i++) {
    let mini = i;
    for (let j = i + 1; j < arr.length + 1; j++) {
      if (arr[j] < arr[mini]) {
        mini = j;
      }
    }
    let newVar = arr[i];
    arr[i] = arr[mini];
    arr[mini] = newVar;
  }

  return arr;
}

let values = [76, 34, 12, 32, 4, 2, 123, 5667, 8, 1, 3];
console.log(insertionSort(values));
