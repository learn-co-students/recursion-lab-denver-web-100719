// Code your solution here!


function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

function reverseString(string){
    let reversedString;
    if(string.length > 0){
        reversedString = string[string.length -1] + reverseString(string.substring(0, string.length - 1))
    } else {
        return ''
    }
    return reversedString
}


function isPalindrome(string){
    if(string.length > 1 && string[0] === string[string.length -1]){
      isPalindrome(string.substring(1, string.length -1))
    } else {
      return false
    }
    return true
}

  
function addUp(array){
    let sum;
    if(array.length > 0){
      sum = Number.parseInt(array[0]) + addUpTo(array.slice(1, array.length))
    } else {
      return 0
    }
    return sum
}

function addUpTo(array, index){
    let sum;
    if(index >= 0){
      sum = Number.parseInt(array[0]) + addUpTo(array.slice(1, array.length), index - 1)
    } 
    else {
        return 0
    }
    return sum
  }