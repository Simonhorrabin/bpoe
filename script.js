// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("Button clicked!");
    var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var uppercaseCharacters = [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];]
    var passwordLength =12;
    var password = "";

    // 1. Prompt the user for the password criteria
   numberOfCharacters = prompt("How many charachters do you want in your Password? Choose between 8-128 charachters") 
   if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Choose the correct number of characters"
   }
    

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


// 
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  // Code to execute when the button is clicked
});
console.log("button clicked!")
