function filterArray(numbers, value) {
    let filteredArray = [];
    
  for (const i of numbers) {
    if (i > value) {
      filteredArray.push(i);
    }
  }
    return filteredArray;
    
}