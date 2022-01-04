// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables of the user's selection
var length;
var lowercase;
var uppercase;
var numbers;
var symbols;
var passwordCharset;

//Possible characters
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var num = ["0","1","2","3","4","5","6","7","8","9"];
var sym = ["!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];


//Password Generator Function
function generatePassword() {

//Prompts and Validation
length = Number(prompt("How many characters would you like for your password? Choose between 8-128"));
if (isNaN(length) || length <8 || length >128) length = Number(prompt("Reminder: The length of your password must be between 8-128 characters. Try again!"));
 lowercase = window.confirm ("Would you like to use some lowercase characters?");
 uppercase = window.confirm ("Would you like to use some uppercase characters?");
 numbers = window.confirm ("Would you like to use some numbers?");
 symbols = window.confirm ("Would you like to use some special characters?");

//If the user doesn't choose anything
if (!lowercase && !uppercase && !numbers && !symbols){
  alert("You must select at least one option!")
  lowercase = window.confirm ("Would you like to use some lowercase characters?");
  uppercase = window.confirm ("Would you like to use some uppercase characters?");
  numbers = window.confirm ("Would you like to use some numbers?");
  symbols = window.confirm ("Would you like to use some special characters?");
}

//If the user selects all options
else if (lowercase && uppercase && numbers && symbols){
  passwordCharset = lower.concat(upper,num, sym);
}

//If the user selects (3) options
else if (lowercase && uppercase && numbers) {
  passwordCharset=lower.concat (upper, num);
}
else if (lowercase && uppercase && symbols) {
  passwordCharset=lower.concat (upper, sym);
}
else if (lowercase && numbers && symbols) {
  passwordCharset=lower.concat (num, sym);
}
else if (uppercase && numbers && symbols) {
  passwordCharset=upper.concat (num, sym);
}

//If the user selects (2) options
else if (lowercase && uppercase) {
  passwordCharset=lower.concat (upper);
}
else if (lowercase && symbols) {
  passwordCharset=lower.concat (sym);
}
else if (lowercase && numbers) {
  passwordCharset=lower.concat (num);
}
else if (uppercase && numbers) {
  passwordCharset=upper.concat (num);
}
else if (uppercase && symbols) {
  passwordCharset=upper.concat (sym);
}
else if (numbers && symbols) {
  passwordCharset=num.concat (sym);
}

//If the user selects (1) option
else if (lowercase) {
  passwordCharset=lower;
}
else if (uppercase) {
  passwordCharset=upper;
}
else if (numbers) {
  passwordCharset=num;
}
else if (symbols) {
  passwordCharset=sym;
}

var password = [];

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
