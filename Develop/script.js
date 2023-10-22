// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password generation function
function generatePassword() {
  var passwordLength = prompt("What length should the password be?")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
