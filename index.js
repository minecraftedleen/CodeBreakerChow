var codeInput = "";
var code = "321";
var time = 7;


function addOne() {
    codeInput += "1";
    checkIt();
}

function addTwo() {
    codeInput += "2";
    checkIt();
}

function addThree() {
    codeInput += "3";
    checkIt();
    
}

function checkIt() {
    if(codeInput.length == 3) {
        if(codeInput === code) {
            document.getElementById("message").innerText = "You cracked the code!";
        } else if(Number(code) > Number(codeInput)) {
            document.getElementById("message").innerText = "Incorrect code, try a higher number";
        } else {
            document.getElementById("message").innerText = "Incorrect code, try a lower number";
        }
        codeInput = "";
        time -= 1;
        document.getElementById("clock").innerText = "Clock: " + time;
    } 
    document.getElementById("number").innerText = codeInput;
}
