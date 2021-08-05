function getValue(){
    document.getElementById("alert").classList.add("invisible");

    let inputString = document.getElementById("userString").value;

    let returnObj = checkForPalindrome(inputString);

    displayString(returnObj);
}

function checkForPalindrome(inputString){
    let palinString = [];
    let returnObj = {};

    inputString = inputString.toLowerCase().replace(/[^a-z]/g, '');

    for (let i = inputString.length-1; i >= 0; i--){
        palinString += inputString[i];
    }

    if (inputString === palinString) {
        returnObj.msg = "Well done! You've entered a palindrome!"
    } else {
        returnObj.msg = "Sorry! You did not enter a palindrome!"
    }

    returnObj.reverse = palinString;

    return returnObj;

}

function displayString(returnObj){
    
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("message").innerHTML = `Your phrase reversed is: ${returnObj.reverse}`;
    document.getElementById("alert").classList.remove("invisible");    

}