// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("Button clicked!");

    // 1. Prompt the user for the password criteria
    // 
    

    return "Generated password will go here!"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
