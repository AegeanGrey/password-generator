// Assignment Code
var generateBtn = document.querySelector("#generate");


var criteria = {

  // Will need to find a way to randomize these data items when pulling from one or each array
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R","S", "T", "U", "V", "W", "X", "Y", "Z"],
  specialChar: ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "-","_", "=", "+"],
  nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  
}

function generatePassword() {

  // Will need to establish a way to prevent a user from submitting 7 or less as an answer
  prompt("How long would you like your password? (8 characters minimum)");
  
  // Will need to store responses into a variable
  confirm("Would you like lowercase letters?");
  confirm("Would you like uppercase letters?");
  confirm("Would you like special characters?");
  confirm("Would you like numbers?");

  // Find a way to take the boolean values from these responses and determine how the password is generated

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
