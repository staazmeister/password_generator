// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompts for the user's selection
var length;
var lowercase;
var uppercase;
var numbers;
var symbols;
var passwordCharset;

//Possible characters
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var sym = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_"];


//Password Generator Function
function generatePassword() {

//Prompts and Validation
length = Number(prompt("How many characters would you like for your password? Choose between 8-128"));
if (isNaN(length) || length <8 || length >128) length = Number(prompt("Reminder: The length of your password must be between 8-128 characters. How many characters would you like to use?"));

 lowercase = window.confirm ("Would you like to use some lowercase characters?");
 uppercase = window.confirm ("Would you like to use some uppercase characters?");
 numbers = window.confirm ("Would you like to use some numbers?");
 symbols = window.confirm ("Would you like to use some special characters?");

//If the user doesnt choose anything
if (!lowercase && !uppercase && !numbers && !symbols){
  alert("You must select at least one option!")
}

//If the user selects all options
else if (lowercase && uppercase && numbers && symbols){
  passwordCharset = lower.concat(upper,num, sym)
}

//If the user selects (3) options
else if (lowercase && uppercase && numbers) {
  passwordCharset=lower.concat (upper, num)
}
else if (lowercase && uppercase && symbols) {
  passwordCharset=lower.concat (upper, sym)
}
else if (lowercase && numbers && symbols) {
  passwordCharset=lower.concat (num, sym)
}
else if (uppercase && numbers && symbols) {
  passwordCharset=upper.concat (num, sym)
}


var password = "";

for (let i=0; i < length; i++) {
  password += passwordCharset[Math.floor(Math.random() * passwordCharset.length)]
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
