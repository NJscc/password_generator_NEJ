//Storing character arrays here means
//they are generated once, and can be accessed
//by both functions.
//Array of letter for the password.
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Array of usable special characters - notably avoids spaces, the pound sign "#", apostrophes, and quotation marks.
var special = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "/", "_"];

function generatePassword(){
  //TODO: your code goes here

  //Prompt user for length. If not given a number, defaults to 8. If given an
  //  invalid number, defaults to nearest integer. If given a decimal, round to nearest
  //  integer below the value.
  var length_pass = prompt("What should be the length of the password? Please use an integer value between 8 and 128, inclusive.");
  if ( isNaN(length_pass) ) {
    alert("That response was invalid. Your password will be 8 characters long.");
    length_pass = 8;
  } else if (length_pass < 8) {
    alert("That value was invalid. Your password will be 8 characters long.");
    length_pass = 8;
  } else if (length_pass > 128) {
    alert("That value was invalid. Your password will be 128 characters long.");
    length_pass = 128;
  } else {
    length_pass = Math.floor(length_pass);
  }

  //Request to include lowercase letters 
  var toInclude = [0, 0, 0, 0];
  toInclude[0] = confirm("Do you want to use lowercase letters? (Cancel means it will not use them.)");

  //Request to include uppercase letters 
  toInclude[1] = confirm("Do you want to use uppercase letters? (Cancel means it will not use them.)");

  //Request to include numbers 
  toInclude[2] = confirm("Do you want to use numbers? (Cancel means it will not use them.)");

  //Request to include special characters 
  toInclude[3] = confirm("Do you want to use special characters? (Cancel means it will not use them.)");

  //Generates password based on arrays and criteria.
  // Returns 'password' if all character types to include
  // were listed as 'false'. 
  if ( !(toInclude[0] || toInclude[1] || toInclude[2] || toInclude[3]) ) {
    alert("No character types were selected. Here is your password.")
    return "password"
  } else {

    var password = "";
    var index = [];

    //Fills array 'index' with index values of the toInclude array
    //values storing 'true', corresponding to character types to use.
    for (let i = 0; i < toInclude.length; i++) {
      if(toInclude[i]) {
        index.push(i);
      }
    }

    //Generates final password.
    //  Only one type of character.
    if (index.length === 1) {
      for( let i = 0; i < length_pass; i++) {
        var letter = characterAccess(index[0]);
        password = password + letter;
      }
    
    // More than one type of character.
    } else {
      for (let i = 0; i < length_pass; i++) {
        var access_array= Math.floor(Math.random()*index.length);
        var letter = characterAccess([index[access_array]]);
        password = password + letter;
      }
    }
    return password;
  }
}

//Obtains a random character based on the
//index value given.
function characterAccess(index) {
  //lowercase
  if (index == 0) {
    var char_ind = Math.floor(Math.random()*lowerLetters.length);
    return lowerLetters[char_ind];

  //uppercase
  } else if (index == 1) {
    var char_ind = Math.floor(Math.random()*lowerLetters.length);
    letter = lowerLetters[char_ind];
    return letter.toUpperCase();

  //numbers
  } else if (index == 2) {
    return Math.floor(Math.random()*10);

  //special characters
  } else {
    var char_ind = Math.floor(Math.random()*special.length);
    return special[char_ind];
  }
}


// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE    ====================
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
