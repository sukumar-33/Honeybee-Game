document.addEventListener("DOMContentLoaded", function () {
    const gameContainer = document.querySelector(".game-container");
    const honeyAudio = new Audio();
    honeyAudio.src = "audio/honey.mp3";

    const virusAudio = new Audio();
    virusAudio.src = "audio/virus.mp3";
    let score = 0;
    let timeLeft = 120;

    const heading = document.createElement("h1");
    heading.className = "score-heading";
    gameContainer.appendChild(heading);

    const timerElement = document.createElement("h1");
    timerElement.className = "timer-heading";
    gameContainer.appendChild(timerElement);

    const startLine = document.createElement("div");
    startLine.className = "start-line";
    gameContainer.appendChild(startLine);

    const endLine = document.createElement("div");
    endLine.className = "end-line";
    gameContainer.appendChild(endLine);

    function updateScore(){
        heading.innerHTML = "Your Score is : " + score;
    }

    function updateTimer() {
        timerElement.textContent = "Time: " + timeLeft + "s";
    }

    function createHoney() {
        const honey = document.createElement("img");
        honey.className = "honey";
        honey.src = "images/lovepik-honeybee-element-png-image_401004322_wh1200.png";
        gameContainer.appendChild(honey);


        const honeySize = Math.floor(Math.random() * 80) + 10;
        honey.style.width = honeySize + "px";
        honey.style.height = honeySize + "px";

  
        let honeyPositionVertical = 60;
        const containerWidth = gameContainer.offsetWidth;
        const startPositionHoney = Math.random() * (containerWidth - honeySize);
        honey.style.left = startPositionHoney + "px"; 

        

        honey.addEventListener("click" , function(){
            honeyAudio.play();
            honey.remove();
            score += 100;
        });

        function dropHoney() {
            honeyPositionVertical += Math.random() * 2 + 1;
            honey.style.top = honeyPositionVertical  + "px";
            if (honeyPositionVertical < window.innerHeight - honey.offsetHeight) {
                requestAnimationFrame(dropHoney);
            } else {
                honey.remove();
            }
        } 
        dropHoney(); 
        
    }

    function createVirus(){
        
        const virus = document.createElement("img");
        virus.className = "virus";
        virus.src = "images/virus_7691073.png";
        gameContainer.appendChild(virus);

        const virusSize = Math.floor(Math.random() * 80) + 10;
        virus.style.width = virusSize + "px";
        virus.style.height = virusSize + "px";

        let virusPositionVertical = 60;
        const containerWidth = gameContainer.offsetWidth;

        const startPositionVirus = Math.random() * (containerWidth - virusSize);
        virus.style.left = startPositionVirus + "px"; 

        virus.addEventListener("click" , function(){
            virusAudio.play();
            virus.remove();
            score -= 150;
        });

        function dropVirus() {
            virusPositionVertical += Math.random() * 2 + 1;
            virus.style.top = virusPositionVertical  + "px";
            if (virusPositionVertical < window.innerHeight - virus.offsetHeight) {
                requestAnimationFrame(dropVirus);
            } else {
                virus.remove();
            }
        }
        dropVirus();
    }
    function startGame(){
        const gameInterval = setInterval(function(){
            createHoney();
            createVirus();
        } , 2000);

        const timerInterval = setInterval(function () {
            timeLeft--;
            updateTimer();
            updateScore();
            if(score < 0){
                clearInterval(gameInterval);
                clearInterval(timerInterval);
                localStorage.setItem("score", score);
                localStorage.setItem("result" , "LOOSER");
                window.location.href = "score.html";
            }
            if (timeLeft <= 0) {
                clearInterval(gameInterval);
                clearInterval(timerInterval);
                localStorage.setItem("score", score);
                localStorage.setItem("result" , "WINNER");
                window.location.href = "score.html";
            }
          }, 1000); 
    }
    startGame();   
    
    
  });
  
