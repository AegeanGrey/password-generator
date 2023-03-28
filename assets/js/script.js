// Assignment Code
var generateBtn = document.querySelector("#generate");


var criteria = {

  // Key-values for min and max amount of characters
  minChar: 8,
  maxChar: 20,

  // Created arrays that contains data for their respective lists
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R","S", "T", "U", "V", "W", "X", "Y", "Z"],
  specialChar: ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "-","_", "=", "+"],
  nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],

  // Data will be stored into userPass based on the users response
  userPass: [],
  
  // When the process method is called it will store the user input values into corresponding variables
  process: function() {
    var lowerCaseIn = confirm("Would you like lowercase letters?");
    console.log(lowerCaseIn);

    var upperCaseIn = confirm("Would you like uppercase letters?");
    console.log(upperCaseIn);

    var specialCharIn = confirm("Would you like special characters?");
    console.log(specialCharIn);
  
    var numsIn = confirm("Would you like numbers?");
    console.log(numsIn);

  // Takes the values from the user-input variables from the process method
  // Checks each value to see if they are true or false
    if (lowerCaseIn === true) {
      this.userPass.push(this.lowerCase);
    }

    if (upperCaseIn === true) {
      this.userPass.push(this.upperCase);
    }

    if (specialCharIn === true) {
      this.userPass.push(this.specialChar);
    }

    if (numsIn === true) {
      this.userPass.push(this.nums);
    }

    // if none of the criteria is true, then it will alert the user
    if (lowerCaseIn === false && upperCaseIn === false && specialCharIn === false && numsIn === false) {
      alert("None of the criteria was accepted, please confirm at least one or more");
    }

    // Takes all of the data that was pushed to the userPass array and joins them together
    var truePass = this.userPass.join("")

    console.log(truePass)
  }
}

function validation() {

}

function generatePassword() {

  // Generates a pop=up for the user to respond with
  // User input will be stored within the passLen variable
  var passLen = prompt("How long would you like your password? (8-20 characters)");

  // Compares passLen and checks if it's 8-20 characters long
  if (passLen >= criteria.minChar && passLen <= criteria.maxChar) {
    criteria.process();
  
  // Creates an alert message if criteria hasn't been met and stops the function from running  
  } else {    
    alert("Please input a number between 8 and 20");    
  }

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
