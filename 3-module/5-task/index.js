function getMinMax(str) {
  let array = str.split(' ');
  let newArray = array.map(string => parseFloat(string));
  let numberArray = newArray.filter(item => !isNaN(item));
  let result = {min: Math.min(...numberArray), max: Math.max(...numberArray)};
  return result;
}
