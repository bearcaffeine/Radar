function getValue(){
    document.getElementById("alert").classList.add("invisible");

    let inputString = document.getElementById("userString").value;

    inputString = inputString.toLowerCase().replace(/[^A-Za-z]/g, '');

    let palindrome = palindromeString(inputString);

    displayString(palindrome, inputString);
}

function palindromeString(inputString){
    let palinString = [];

    for (let i = inputString.length-1; i >= 0; i--){
        palinString += inputString[i];
    }

    return palinString;

}

function displayString(palinString, inputString){
    let orgString = inputString;
    let palindromeString = palinString;

    if (palinString === orgString){
        document.getElementById("message").innerHTML = `Success, <strong>${palinString}</strong> is a Palindrome!`;
        document.getElementById("alert").classList.remove("invisible");
    } else {
        document.getElementById("message").innerHTML = `Sorry, <strong>${palinString}</strong> is not a Palindrome!`;
        document.getElementById("alert").classList.remove("invisible");
    }

}