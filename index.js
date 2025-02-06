const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl1 = document.getElementById("password-box-1");
let passwordEl2 = document.getElementById("password-box-2");

function generatePassword() {
    let pass1 = "";
    let pass2 = "";
    for(let i = 0; i < 16; ++i) {
        pass1 += characters[Math.floor(Math.random() * characters.length)];
    }

    for(let i = 0; i < 16; ++i) {
        pass2 += characters[Math.floor(Math.random() * characters.length)];
    }

    passwordEl1.textContent = pass1;
    passwordEl2.textContent = pass2;
}

function copyText(element) {
    let passwordToCopy = "";
    if(element.id === "password-box-1") {
        passwordToCopy = passwordEl1.textContent;
    } else if(element.id === "password-box-2") {
        passwordToCopy = passwordEl2.textContent;
    }

    if(passwordToCopy) {
        navigator.clipboard.writeText(passwordToCopy).then(() => {
            alert("Password copied to clipboard");
        }).catch(err => {
            console.error("Failed to copy:", err);
        });
    } else {
        alert("No password to copy");
    }
}