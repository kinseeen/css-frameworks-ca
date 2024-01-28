var passwordInput = document.getElementById("passwordInput");
var passwordHelpBlock = document.getElementById("passwordHelpBlock")


function validatePassword() {
    if(passwordInput.value.length >= 8) {
        passwordHelpBlock.style.display = "none"
        window.location.href = '../html/Profile.html'
        return;
    } 
    passwordHelpBlock.style.display = "block"
}

var testString = " ban ana "

console.log(testString)
console.log(testString.trim())