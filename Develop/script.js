// Assignment Code
var generateBtn = document.querySelector("#generate");

  // which criteria to include in the password
//Loops until user provides correct input
while (true) {
  //prompted for password length at least 8 characters and no more than 128 characters
  var pLength = prompt("How long should your password be ? ");
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
while (true){
  //prompted for character types
  var cTypes = prompt("Choose character types to include in your password below: " + "\n" + "-lowercase" + "\n" + "-uppercase" + "\n" + "-numeric" + "\n" + "-special characters");
  cTypes = cTypes.toLowerCase(); //Sanatizes user input

  //Object testing if user input is correct
  var Obj2 = {
    function2(userS2) {
      if (userS2 == "lowercase" || userS2 == "uppercase" || userS2 == "numeric" || userS2 == "special characters") {
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
    alert("You must select a type from the selected options.");
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
