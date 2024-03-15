const container = document.querySelector(".game-container");

const name = localStorage.getItem("name");
const nameHeading = document.createElement("h1");
nameHeading.className = "name";
nameHeading.innerHTML = "Your name is : " + name;
container.appendChild(nameHeading);

const score = localStorage.getItem("score");
const result = localStorage.getItem("result");
const para = document.createElement("p");
para.className = "score";

para.innerHTML = "You are " + result + " Your score is " + score;
container.appendChild(para);

const btn = document.createElement("button");
btn.className = "btn";
btn.innerHTML = "Go to Homepage";
container.appendChild(btn);
btn.onclick = redirectHomePage;


const tryButton = document.createElement("button");
tryButton.className = "try-btn";
tryButton.innerHTML = "Try Again";
container.appendChild(tryButton);
tryButton.onclick = redirectGamePage;

function redirectHomePage(){
    window.location.href = "index.html";
}

function redirectGamePage(){
    window.location.href = "game.html";
}

localStorage.removeItem("score");
localStorage.removeItem("name");
localStorage.removeItem("result");
