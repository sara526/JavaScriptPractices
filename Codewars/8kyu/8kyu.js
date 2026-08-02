// ======================================
// is it a palindrome?
// ======================================

function isPalindrome(x) {
  const str = x.toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("Madam")); 
console.log(isPalindrome("Sara"));  

//========================================
// Convert a String to a Number!
//========================================
const stringToNumber = function(str){
   return Number(str);
}
console.log(stringToNumber("2026"));