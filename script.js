// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate the random password
function generatePassword() {
  console.log("Button clicked!");

  // Define the possible characters
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "*"]
  
  // Get the password criteria from the user
  var numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Choose the correct number of characters";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number");
  } else {
    alert("Your password will be " + numberOfCharacters + " characters long.");
  }

  var hasLowercase = confirm("Do you want lowercase characters?");
  var hasUppercase = confirm("Do you want uppercase characters?");

  // Build the list of possible characters based on user criteria
  var possibleCharacters = numericCharacters;
  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters.map(char => char.toLowerCase()));
  }
  if (hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }

  // Generate the password
  var finalPassword = "";
  for (var i = 0; i < numberOfCharacters; i++) {
    var rng = Math.floor(Math.random() * possibleCharacters.length);
    finalPassword = finalPassword + possibleCharacters[rng];
  }

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
