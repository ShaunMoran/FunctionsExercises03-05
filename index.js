//We want to COMPLETELY reverse an array by flipping the order of the entries AND flipping the order of characters in each element.

//1) a) Define a 'reverseCharacters' function. Give it one parameter, which will be the string to reverse.
/*function reverseCharacters(str){
  let reversed = "";

  for (let i = 0; i <str.length; i++ ){
    reversed = str[i] + reversed;
  }
  return reversed;
}
console.log(reverseCharacters("apple"));*/
function reverseCharacters(str) {
  if (typeof(str) === "string") {
    let lettersArray = str.split('');
    let reverseCharacters = lettersArray.reverse();
    return reverseCharacters.join('');
  } else {
      str = String(str);
      let numbersArray = str.split('');
      let reverseCharacters = numbersArray.reverse();
   return Number(reverseCharacters.join(''));
}
}
console.log(reverseCharacters(1234));




function arrayWeWantToChange (array) {
  let emptyArray = [];

  for (string of array){
    emptyArray.push(reverseCharacters(string));
  }
emptyArray.reverse();
  return emptyArray;
}
let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];
arrayWeWantToChange(arrayTest1)