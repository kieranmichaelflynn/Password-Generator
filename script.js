// Assignment Code
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

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
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

// Array of uppercase characters to be included in password
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

var generateBtn = document.querySelector("#generate");
// console.log(generateBtn)

// Write password to the #password input

var password = document.querySelector("#password");

function writePassword() {
  while(password.length < passwordLength){

    var randUpper = upperCasedCharacters [Math.floor(Math.random()*password.length)];
    var randLower = lowerCasedCharacters [Math.floor(Math.random()*password.length)];
    var randNumber = numericCharacters [Math.floor(Math.random()*password.length)];
    var randSpecial = specialCharacters [Math.floor(Math.random()*password.length)];
    
      if(passwordUpper){
        password += randUpper
      }
      if(passwordLower){
        password += randLower
      }
      if(passwordNumbers){
        password += randNumber
      }
      if(passwordSpecial){
        password += randSpecial
      }
    }
  password.textContent = password;
  return;

}


// Add event listener to generate button
generateBtn.addEventListener("click", passwordSpecifications);

function passwordSpecifications(){
  var passwordLength = prompt ("What is the password length?");
  if (passwordLength <8 || passwordLength >128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }
  var passwordUpper = confirm ("Upper?");
  var passwordLower = confirm ("LowerCase?");
  var passwordNumbers = confirm ("Numbers?");
  var passwordSpecial = confirm ("Special?");
  if (!passwordUpper && !passwordLower && !passwordNumbers && !passwordSpecial){
    alert("Password must contain at least 1 parameter")
    return;
  }
  // var charArray = createPassword( passwordUpper, passwordLower, passwordNumbers, passwordSpecial)

  createPassword();
}


function createPassword(passwordUpper, passwordLower, passwordNumbers, passwordSpecial){
  var charArray = " ";

  if (passwordUpper){
    charArray = charArray.concat(upperCasedCharacters)
  }
  if (passwordLower){
    charArray = charArray.concat(lowerCasedCharacters)
  }
  if (passwordNumbers){
    charArray = charArray.concat(numericCharacters)
  }
  if (passwordSpecial){
    charArray = charArray.concat(specialCharacters)
    
  }
  console.log(charArray);
  writePassword()
}

let randomChar = " "

while(password.length < passwordLength){

var randUpper = upperCasedCharacters [Math.floor(Math.random()*password.length)];
var randLower = lowerCasedCharacters [Math.floor(Math.random()*password.length)];
var randNumber = numericCharacters [Math.floor(Math.random()*password.length)];
var randSpecial = specialCharacters [Math.floor(Math.random()*password.length)];

  if(passwordUpper){
    password += randUpper
  }
  if(passwordLower){
    password += randLower
  }
  if(passwordNumbers){
    password += randNumber
  }
  if(passwordSpecial){
    password += randSpecial
  }
 writePassword()
}



//  for (let index = 0; index < password.length; index++) {

//  const randomIndex = Math.floor(Math.random() * password.length);

//  const randomChar = charArray[randomIndex];
//  console.log(randomChar)












// // function createPassword(len, arr){
// //   console.log(len, arr);

// //   var password = " "
// // }
//   //for loop for len

//   let password = " "
//   let randomChar = " "

//   for (let index = 0; index < password.length; index++) {

//   const randomIndex = Math.floor(Math.random() * password.length);

//   const randomChar = charArray[randomIndex];

//   // passwordText.textContent = password + randomChar;

//   writePassword()

//   // password = (charAt(passwordUpper, passwordLower, passwordNumbers, passwordSpecial) * password.length)
//   console.log(password)
//   // writePassword()
//   // card-body.textContent = password
  }
    //get randome element from arr and addd it to a password

// passwordLength)


//command d multiple