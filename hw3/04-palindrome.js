let userInput = document.querySelector('input');
let final = document.getElementById("result");

userInput.addEventListener('input', function(evt) {
    let input_val = userInput.value;

    // Validation of a valid input number
    if(isNaN(parseFloat(input_val))){
      final.innerText = "Please enter a number";
    }

    // Validate string for a Palindrome
    else{
     if(fetchPalindrom(input_val))
     {
      final.innerText="Yes, This is a palindrome";
      final.style.color = "green";
     }
    else
    {
      final.innerText = "No, Try again";
      final.style.color = "red";
    }
    }
    
});

function fetchPalindrom(str){
    var reverse_str = str.split("").reverse().join("");
    if(str === reverse_str)
    return true;
    else return false;
  }
  


