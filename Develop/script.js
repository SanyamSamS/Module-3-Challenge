// Assignment Code
var generateBtn = document.querySelector("#generate");



// Character options 
var lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz";
var upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberOptions = "0123456789";
var specialCharacterOptions = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Password generation function
function generatePassword() {
  var passwordLength = prompt("What length should the password be?");
  var numbers = prompt("Include numbers?");
  var lowerCase = prompt("Include lowercase letters?");
  var upperCase = prompt("Include uppercase letters?");
  var specialCharacters = prompt("Include special characters?");

  // Turn string into a number 
  var lengthInt = parseInt(passwordLength);

  // At least one character alert
  if (!passwordLength && !numbers && !lowerCase && !upperCase && !specialCharacters) {
    alert("At least one character type should be selected.")
  };

  // Password output
  var password = "";

  // Randomize characters
  if (upperCase) {
    password += upperCaseOptions[Math.floor(Math.random() * upperCaseOptions.length)];
  }
  if (lowerCase) {
    password += lowerCaseOptions[Math.floor(Math.random() * lowerCaseOptions.length)];
  }
  if (numbers) {
    password += numberOptions[Math.floor(Math.random() * numberOptions.length)];
  }
  if (specialCharacters) {
    password += specialCharacterOptions[Math.floor(Math.random() * specialCharacterOptions.length)];
  }
    
    

  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
