var codeInput = "";
var code = "";
var time = 7;
var win = false;

function addHighScore() {
    
}

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

function generateCode() {
    code = "";
    for (i = 0; i < 3; i++) {
        code += Math.round(Math.random() * 2 + 1);
    }
    alert("Uh oh, you've tripped an alarm!");
}

function clearGame() {
    codeInput = "";
    time = 7;
    document.getElementById("number").innerText = codeInput;
    document.getElementById("clock").innerText = "Clock: " + time;
    document.getElementById("message").setAttribute("style", "color:black");
    document.getElementById("message").innerText = "Game reset, Crack the code!";
    document.getElementById("b1").disabled = false;
    document.getElementById("b2").disabled = false;
    document.getElementById("b3").disabled = false;
    var win = false;
    generateCode();
}

function checkIt() {
    if(codeInput.length == 3) {
        if(codeInput === code) {
            var win = true;
        } else if(Number(code) > Number(codeInput)) {
            document.getElementById("message").innerText = "Incorrect code, try a higher number";
        } else {
            document.getElementById("message").innerText = "Incorrect code, try a lower number";
        }
        codeInput = "";
        time -= 1;
        randomChance();
        document.getElementById("clock").innerText = "Clock: " + time;
    } 
    document.getElementById("number").innerText = codeInput;
    
    if(time == 0) {
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("message").innerText = "You've been busted! Game Over \n Press Clear to restart";
        document.getElementById("message").setAttribute("style", "color:red");
    }
    if (win == true) {
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("message").innerText = "You've cracked the code! \n Press Clear to restart"
        document.getElementById("message").setAttribute("style", "color:darkgreen");
    }
}

function randomChance() {
    if (win == false) {
        var rand = Math.random() * 100 + 1;
        if (rand < 15) {
            document.getElementById("message").innerText += "\nThe police are caught in a traffic jam, +1 time"
            time += 1;
        } else if (rand < 10) {
            document.getElementById("message").innerText += "\nThe police are in the area, -1 time"
            time -= 1;
        }
        else if (rand < 5) {
            document.getElementById("message").innerText += "\nYour associates created a distraction, +3 time"
            time += 3;
        }
    }
   
}
