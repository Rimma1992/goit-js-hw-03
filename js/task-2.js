function makeArray(firstArray, secondArray, maxLength) {
  let newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    newArray = newArray.slice(0, maxLength);
  } else {
    newArray;
  }
  return newArray;
}