document.getElementById("paper").addEventListener("click", paper);
document.getElementById("scissors").addEventListener("click", scissor);
document.getElementById("rock").addEventListener("click", rock);
let win = document.getElementById("winmessage");
let winuser = document.getElementById("winuser");
let wincomputer = document.getElementById("wincomputer");
let loss = document.getElementById("lossmessage");
let lossuser = document.getElementById("lossuser");
let losscomputer = document.getElementById("losscomputer");
let tie = document.getElementById("tiemessage");
let lottie = document.getElementById("lottie");

let score = 0;
let computerscore = 0;
lottie.style.display = "none";

function paper() {
    let parent = document.querySelector("#scissors");
    parent = parent.id;

    let rsparray = ["rock", "paper", "scissors"];
    let computerresult = rsparray[Math.floor(Math.random()*rsparray.length)];

    if(computerresult.includes("rock")) {
        score++;
        win.style.display = "block";
        winuser.textContent = parent;
        wincomputer.textContent = computerresult;
        document.getElementById("score").innerHTML = score;
        loss.style.display = "none";
        tie.style.display = "none";
        lottie.style.display = "block";
    }

    if(computerresult.includes("scissors")) {
        computerscore++;
        loss.style.display = "block";
        losscomputer.textContent = parent;
        lossuser.textContent = computerresult;
        document.getElementById("computerscore").innerHTML = computerscore;
        win.style.display = "none";
        tie.style.display = "none";
        lottie.style.display = "none";
    }

    if(computerresult.includes("paper")) {
        tie.style.display = "block";
        win.style.display = "none";
        loss.style.display = "none";
        lottie.style.display = "none";
    }
}

function scissor() {
    let parent = document.querySelector("#scissors");
    parent = parent.id;

    let rsparray = ["rock", "paper", "scissors"];
    let computerresult = rsparray[Math.floor(Math.random()*rsparray.length)];

    if(computerresult.includes("paper")) {
        score++;
        win.style.display = "block";
        winuser.textContent = parent;
        wincomputer.textContent = computerresult;
        document.getElementById("score").innerHTML = score;
        loss.style.display = "none";
        tie.style.display = "none";
        lottie.style.display = "block";
    }

    if(computerresult.includes("rock")) {
        computerscore++;
        loss.style.display = "block";
        losscomputer.textContent = parent;
        lossuser.textContent = computerresult;
        document.getElementById("computerscore").innerHTML = computerscore;
        win.style.display = "none";
        tie.style.display = "none";
        lottie.style.display = "none";
    }

    if(computerresult.includes("scissors")) {
        tie.style.display = "block";
        win.style.display = "none";
        loss.style.display = "none";
        lottie.style.display = "none";
    }
}

function rock() {
    let parent = document.querySelector("#scissors");
    parent = parent.id;

    let rsparray = ["rock", "paper", "scissors"];
    let computerresult = rsparray[Math.floor(Math.random()*rsparray.length)];

    if(computerresult.includes("scissors")) {
        score++;
        win.style.display = "block";
        winuser.textContent = parent;
        wincomputer.textContent = computerresult;
        document.getElementById("score").innerHTML = score;
        loss.style.display = "none";
        tie.style.display = "none";
        lottie.style.display = "block";
        lottie.style.display = "block";
    }

    if(computerresult.includes("paper")) {
        computerscore++;
        loss.style.display = "block";
        losscomputer.textContent = parent;
        lossuser.textContent = computerresult;
        document.getElementById("computerscore").innerHTML = computerscore;
        win.style.display = "none";
        tie.style.display = "none";
        lottie.style.display = "none";
    }

    if(computerresult.includes("rock")) {
        tie.style.display = "block";
        win.style.display = "none";
        loss.style.display = "none";
        lottie.style.display = "none";
    }
}