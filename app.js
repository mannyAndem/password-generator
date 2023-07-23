let generateBtn = document.querySelector(".generate-btn");
let copyBtn = document.querySelector(".copy-btn");
let outputDisplay = document.querySelector(".output");
let passwordLength = document.querySelector("#password-length");
let uppercaseIncluded = document.querySelector("#uppercase");
let lowercaseIncluded = document.querySelector("#lowercase");
let numbersIncluded = document.querySelector("#numbers");
let symbolsIncluded = document.querySelector("#symbols");

//Setting default values for all conditions
passwordLength.defaultValue = 8;
uppercaseIncluded.setAttribute("checked", "");
lowercaseIncluded.setAttribute("checked", "");
numbersIncluded.setAttribute("checked", "");
symbolsIncluded.setAttribute("checked", "");


let passwordElements = [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], ["!", "@", "#", "$", "%", "^", "&", "*", "+", "<", ">", "?", "/"]];

generateBtn.addEventListener("click", ()=>{
        outputDisplay.innerText = generatePassword(passwordLength.value);
})

function generatePassword(param){
    let finalPassword = "";
    
    /*Create a temporary array to hold the specific password elements as 
    specified by the user and push elements from the global passwordElements 
    array to this temporary array. */
    let availablePasswordElements = [];
    if(uppercaseIncluded.checked){
        availablePasswordElements.push(passwordElements[1]);
    }
    if(lowercaseIncluded.checked){
        availablePasswordElements.push(passwordElements[0]);
    }
    if(numbersIncluded.checked){
        availablePasswordElements.push(passwordElements[2]);
    }
    if(symbolsIncluded.checked){
        availablePasswordElements.push(passwordElements[3]);
    }
    
    // Randomly select an array from the availablePasswordElements array and then randomly select a character and push it to the finalPassword string that will be returned. The loop will run the number of times specified by the user in choosing the password length.
    for(let i = 0; i<param; i++){
        let currentArray = availablePasswordElements[Math.floor(Math.random() * availablePasswordElements.length)];
        finalPassword+=currentArray[Math.floor(Math.random()*currentArray.length)]
    }

    return finalPassword;
}
