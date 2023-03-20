// Assignment Code
var generateBtn = document.querySelector("#generate");


var criteria = {

  // Key-values for min and max amount of characters
  minChar: 8,
  maxChar: 20,

  // Will need to find a way to randomize these data items when pulling from one or each array
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R","S", "T", "U", "V", "W", "X", "Y", "Z"],
  specialChar: ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "-","_", "=", "+"],
  nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  
}

function generatePassword() {

  // Generates a pop=up for the user to respond with
  // User input will be stored within the passLen variable
  var passLen = prompt("How long would you like your password? (8 characters minimum)");

  // Compares passLen and checks if it's 8-20 characters long
  if (passLen >= criteria.minChar && passLen <= criteria.maxChar) {
  
  
  // If a user clicks cancel on the pop-up it will stop the function from running
  } else if (!passLen) {    
    return;

  // Creates an alert message if criteria hasn't been met and stops the function from running
  } else {
    alert("Please input a number between 8 and 20");
    return;
  }


  // Will need to store responses into a variable
  confirm("Would you like lowercase letters?");


  confirm("Would you like uppercase letters?");


  confirm("Would you like special characters?");


  confirm("Would you like numbers?");

  // Find a way to take the boolean values from these responses and determine how the password is generated

  // Ensure that at least one of the pop-ups is selected to generate a password
  // Prevent user from selecting no on all answers
  

} 






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
