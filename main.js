
// Dictionary of values.
var dict = [{key: 0, value: 'Zero'},
            {key: 1, value: 'One'},
            {key: 2, value: 'Two'},
            {key: 3, value: 'Three'},
            {key: 4, value: 'Four'},
            {key: 5, value: 'Five'},
            {key: 6, value: 'Six'},
            {key: 7, value: 'Seven'},
            {key: 8, value: 'Eight'},
            {key: 9, value: 'Nine'}];

// Store arguments into variable
var args = process.argv.slice(2);


// Mapping function to loop through each integer input.
let array = args.map(function(item, index, array){
  return convertToDigits(Number(item));
});

// Test Output
console.log(array);

// Function that takes in Integer and returns each digit in an array.
// UPDATE: Function now returns the phonetic equivalent of the Integer ex: 97 --> ['Nine', 'Seven'].
function convertToDigits(num) {
  var array = [];
  while(num >= 10){
    array.unshift(dict[num % 10].value);
    num = Math.floor(num / 10);
  }
  array.unshift(dict[num].value);
  return array;
}
