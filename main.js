
// Mohamed G. Mohamed
// 4/27/2021

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

// Mapping function to loop through each integer input in the args array and outputs the values.
args.map(function(item, index, array){
  if(index != array.length - 1){
    process.stdout.write(convertToDigits(Number(item)) + ',');
  } else {
    process.stdout.write(convertToDigits(Number(item)));
  }
});
process.stdout.write('\n');

// Function that takes in  an Integer and returns each digit into a combined string.
function convertToDigits(num) {
  var string = '';
  while(num >= 10){
    string = dict[num % 10].value + string;
    num = Math.floor(num / 10);
  }
  string = dict[num].value + string;
  return string;
}
