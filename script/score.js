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

        function redirectHomePage(){
            window.location.href = "index.html";
        }

        localStorage.removeItem("score");
        localStorage.removeItem("name");
        localStorage.removeItem("result");
