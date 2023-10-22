// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password generation function
function generatePassword() {
  var passwordLength = prompt("What length should the password be?")
  var numbers = prompt("Include numbers?")
  var lowCase = prompt("Include lowercase letters?")
  var upperCase = prompt("Include uppercase letters?")
  var specialCharacters = prompt("Include special characters?")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
