

const container = document.querySelector(".container");

const title = document.createElement("h1");
title.className = "title";
container.appendChild(title);
title.innerHTML = "HoneyBee Game";


const form = document.createElement("form");
form.className = "form";
container.appendChild(form);

const label = document.createElement("label");
label.innerHTML = "<h1>Choose Difficulty Level</h1>";
form.appendChild(label);

const selectElement = document.createElement("select");

const easyOption = document.createElement("option");
easyOption.value = "Easy";
easyOption.text = "Easy";
selectElement.appendChild(easyOption);

const mediumOption = document.createElement("option");
mediumOption.value = "Medium";
mediumOption.text = "Medium";
selectElement.appendChild(mediumOption);

const hardOption = document.createElement("option");
hardOption.value = "Hard";
hardOption.text = "Hard";
selectElement.appendChild(hardOption);

label.appendChild(selectElement);

const inputField = document.createElement("input");
inputField.type = "text";
inputField.className = "input-field";
inputField.id = "userInput";
inputField.placeholder = "Enter Your Name : ";

form.appendChild(inputField);


const btn = document.createElement("button");
btn.className = "btn";
btn.onclick = startGame;
btn.innerHTML = "Start Game";
form.appendChild(btn);

function startGame() {
    let name = document.getElementById("userInput").value;
    if (name.length == 0) {
        alert('Please enter name before submitting.');
    } else {
        localStorage.setItem("level", selectElement.value);
        localStorage.setItem("name", name);
        form.action = "../game.html";
    }   
}


