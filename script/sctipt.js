document.addEventListener("DOMContentLoaded", function () {
    const gameContainer = document.querySelector(".game-container");
    
    let score = 0;
    let timeLeft = 20;

    const heading = document.createElement("h1");
    heading.className = "score-heading";
    gameContainer.appendChild(heading);

    const timerElement = document.createElement("h1");
    timerElement.className = "timer-heading";
    gameContainer.appendChild(timerElement);

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


        const honeySize = Math.floor(Math.random() * 40) + 10;
        honey.style.width = honeySize + "px";
        honey.style.height = honeySize + "px";

  
        let honeyPositionVertical = 0;
        const containerWidth = gameContainer.offsetWidth;
        const startPositionHoney = Math.random() * (containerWidth - honeySize);
        honey.style.left = startPositionHoney + "px"; 

        

        honey.addEventListener("click" , function(){
            honey.remove();
            score += 50;
        });

        function dropHoney() {
            honeyPositionVertical += Math.random() * 2 + 1;
            honey.style.top = honeyPositionVertical + "px";
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

        const virusSize = Math.floor(Math.random() * 60) + 10;
        virus.style.width = virusSize + "px";
        virus.style.height = virusSize + "px";

        let virusPositionVertical = 0;
        const containerWidth = gameContainer.offsetWidth;

        const startPositionVirus = Math.random() * (containerWidth - virusSize);
        virus.style.left = startPositionVirus + "px"; 

        virus.addEventListener("click" , function(){
            virus.remove();
            score -= 100;
        });

        function dropVirus() {
            virusPositionVertical += Math.random() * 4 + 1;
            virus.style.top = virusPositionVertical + "px";
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
  
