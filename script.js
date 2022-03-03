//Character arrays to be included in Password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


//Identifiers to link Javascript to ID's in HTML
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

//Function to write the password, adding arrays to suit criteria and randomly picking as per length input
function writePassword(passwordLength, passwordUpper, passwordLower, passwordNumbers, passwordSpecial) {
  let charArr = []

  if(passwordUpper){
  charArr = charArr + upperCasedCharacters
}
  if(passwordLower){
    charArr = charArr + lowerCasedCharacters
}
  if(passwordNumbers){
    charArr = charArr + numericCharacters
}
  if(passwordSpecial){
    charArr = charArr + specialCharacters
}
console.log("array " + charArr)

var generatedPassword = " "

  for(let i = 0; i < passwordLength; i++) {
    generatedPassword = generatedPassword + charArr[Math.floor(Math.random()*charArr.length)];
    }

console.log("password " + generatedPassword)
password.textContent = generatedPassword
return;  
};


//Event listener to prompt user for criteria, and then start write function
generateBtn.addEventListener("click", passwordSpecifications);

function passwordSpecifications(){
  var passwordLength = prompt ("What length password length would you like?");
  if (passwordLength <8 || passwordLength >128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }
  var passwordUpper = confirm ("Would you like Upper case characters included?");
  var passwordLower = confirm ("Would you like LowerCase characters included?");
  var passwordNumbers = confirm ("Would you like Numbers included?");
  var passwordSpecial = confirm ("Would you like Special characters included?");
  if (!passwordUpper && !passwordLower && !passwordNumbers && !passwordSpecial){
    alert("Password must contain at least 1 parameter")
    return;
  }

  writePassword(passwordLength, passwordUpper, passwordLower, passwordNumbers, passwordSpecial);
};