//var clipboard = new Clipboard('.copy')
var password = document.querySelector("#password-lable");
var copyBtn = document.querySelector("#copy");
copyBtn.disabled = true ;
var lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789",
  punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  pLength,
  userPassword,
  passwordCharSet;

function generate(){ 
  passwordCharSet = "";
  userPassword = "";
  

passwordlengthValue =Number(prompt("Enter Password Length (8 to 128):"));
if (passwordlengthValue>=8 && passwordlengthValue <= 128) {
  lowercaseValue = (prompt("Do you want lowercase characters in password? Yes (y) or No (n)")).toLowerCase();  
  uppercaseValue = (prompt("Do you want uppercase characters in password? Yes (y) or No (n)")).toLowerCase();
  numberValue = (prompt("Do you want numbers in password? Yes (y) or No (n)")).toLowerCase();
  specialValue = (prompt("Do you want special characters in password? Yes (y) or No (n)")).toLowerCase();

  if (lowercaseValue.substring(0,1) == "y") {        
    passwordCharSet += lowercase;        
  }
  if (uppercaseValue.substring(0,1) == "y") {
    passwordCharSet += uppercase;        
  }
  if (numberValue.substring(0,1) == "y") {
    passwordCharSet += numbers;        
  } 
  if (specialValue.substring(0,1) == "y") {
    passwordCharSet += punctuation;        
  }

  if (passwordCharSet == ""){
    alert("Atleast select one characterset!")
  }else {        
    for (let i = 0; i < passwordlengthValue; i++) {
        userPassword += passwordCharSet.charAt(Math.floor(Math.random() * passwordCharSet.length));    
    }       
    document.getElementById("password-label").textContent = userPassword;
    copyBtn.disabled = false ;
  
  
  }
} else {
  alert("Number not between 8 and 128. try again")
}
} //End of Function

//Copy to Clipboard function


document.getElementById("generate").addEventListener("click", generate);
document.getElementById("copy").addEventListener("click", function (){

  var textarea = document.createElement("textarea");
  var text = document.getElementById("password-label").innerText;
  if(!text){
    return;
  }

  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to the clipboard");
  
}
);
