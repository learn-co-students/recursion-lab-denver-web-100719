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

reverseString('abcde')


function isPalindrome(string){
    if(string.length > 1 && string[0] === string[string.length -1]){
      isPalindrome(string.substring(1, string.length -1))
    } else {
      return false
    }
    return true
  }

  