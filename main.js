console.log(convertToDigits(67824));
// Function that takes in Integer and returns each digit in an array.
function convertToDigits(num) {
  var array = [];
  while(num >= 10){
    array.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  array.unshift(num);
  return array;
}
