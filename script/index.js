

const container = document.querySelector(".container");

const title = document.createElement("h1");
title.className = "title";
container.appendChild(title);
title.innerHTML = "HoneyBee Game";


const form = document.createElement("form");
form.className = "form";
container.appendChild(form);

const inputField = document.createElement("input");
inputField.type = "text";
inputField.className = "input-field";
inputField.id = "userInput";
inputField.placeholder = "Enter Your Name : ";
inputField.required;

form.appendChild(inputField);


const btn = document.createElement("button");
btn.className = "btn";
btn.onclick = startGame;
btn.innerHTML = "Start Game";
form.appendChild(btn);

function startGame() {
    let name = document.getElementById("userInput").value;
    if (name.length == 0) {
        alert('Please enter something before submitting.');
    } else {
        localStorage.setItem("name", name);
        form.action = "../game.html";
    }   
}


