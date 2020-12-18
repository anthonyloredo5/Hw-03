// Assignment Code
var generateBtn = document.querySelector("#generate");
var pLength;
var cTypes;
var cTypes2 = [];

// which criteria to include in the password
//Loops until user provides correct input
while (true) {
  //prompted for password length at least 8 characters and no more than 128 characters
  pLength = prompt("How long should your password be ? ");
  pLength = Number(pLength); //Convert string input into int

  //Object testing if user input is correct
  var Obj = {
    function(userS) {
      if (userS >= 8 && userS <= 128) {
        return true;
      }
      else {
        return false;
      }
    }
  };

  //Breaks loop when userInput is correct--Repeats loop if userInput is incorrect
  var check = Obj.function(pLength);
  if (check) {
    break;
  }
  else {
    alert("Password needs to be at least 8 characters and no more than 128 characters.");
  }
}

//Loops until user provides correct input
for (var i = 0; i < 4; i++) {
  //array to display to the user sequentially what options they have within the prompt
  var cChoices = ["lowercase", "uppercase", "numeric", "special"];
  while (true) {
    //prompted for character types
    cTypes = prompt("Would you like to include " + cChoices[i] + " characters in your password ?" + "\n" + "Please enter yes or no.");
    cTypes = cTypes.toLowerCase(); //Sanatizes user input
    cTypes = cTypes.trim();//Sanatizes user input

    //Object testing if user input is correct
    var Obj2 = {
      function2(userS2) {
        if (userS2 == "yes" || userS2 == "no") {
          return true;
        }
        else {
          return false;
        }
      }
    };

    //Breaks loop when userInput is correct--Repeats loop if userInput is incorrect
    var check2 = Obj2.function2(cTypes);
    if (check2) {
      break;
    }
    else {
      alert("You must select either yes or no.");
    }
  }
  //Fills array with user input
  cTypes2[i] = cTypes;
}

//checks if user input is stored correctly
console.log(cTypes2);

// Array of numeric characters to be included in password
var speciacharacters = ['@', '%',
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
  '.',
];

// Array of numeric characters to be included in password
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

// Array of lowercase characters to be included in password
var lowercase = [
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
  'z',
];

// Array of uppercase characters to be included in password
var uppercase = [
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
  'Z',
];



// Write password to the #password input
function writePassword() {
  console.log(cTypes2);
  var Fpassword = [];
  var nnPassword = [];

  //Using an array to dynamically change the character arrays we select from
  var sArrays = [lowercase, uppercase, numeric, speciacharacters];
  //Using if-else statements to compare user input in order to select which array to build from 
  for (var i = 0; i < 4; i++) {
    if (cTypes2[i] == "yes") {
      nnPassword = nnPassword.concat(sArrays[i]);
    }
  }

  //Generates password using the array built in the for loop
  Fpassword = generatePassword(nnPassword);
  var passwordText = document.querySelector("#password");
  passwordText.value = Fpassword;
  //checks if the concat worked
  console.log(nnPassword);
}

//Password Generator that takes in an array and produces random indexes to fill an empty the contains the new password
function generatePassword(array) {
  var temp = array;
  var nTemp = [];

  for (var i = 0; i < pLength; i++) {
    nTemp += temp[Math.floor(Math.random() * temp.length)];

  }
  return nTemp;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
