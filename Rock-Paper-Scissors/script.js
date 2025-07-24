      let score = JSON.parse(localStorage.getItem("score")) || {
        wins: 0,
        losses: 0,
        ties: 0,
      };

      updateScoreElement();

      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = "";

        if (playerMove === "scissors") {
          if (computerMove === "rock") {
            result = "Ahh, you lose 😢 ";
          } else if (computerMove === "paper") {
            result = "Congrats, you win 😄 ";
          } else if (computerMove === "scissors") {
            result = "It's a tie 😐 ";
          }
        } else if (playerMove === "paper") {
          if (computerMove === "rock") {
             result = "Congrats, you win 😄 ";
          } else if (computerMove === "paper") {
            result = "It's a tie 😐 ";
          } else if (computerMove === "scissors") {
            result = "Ahh, you lose 😢 ";
          }
        } else if (playerMove === "rock") {
          if (computerMove === "rock") {
            result = "It's a tie 😐 ";
          } else if (computerMove === "paper") {
            result = "Ahh, you lose 😢 ";
          } else if (computerMove === "scissors") {
             result = "Congrats, you win 😄 ";
          }
        }

        if (result === "Congrats, you win 😄 ") {
          score.wins += 1;
        } else if (result === "Ahh, you lose 😢 ") {
          score.losses += 1;
        } else if (result === "It's a tie 😐 ") {
          score.ties += 1;
        }

        localStorage.setItem("score", JSON.stringify(score));

        updateScoreElement();

        document.querySelector(".js-result").innerHTML = result;

        document.querySelector(
          ".js-moves"
        ).innerHTML = `You picked <img src="${playerMove}-emoji.png" class="result-icon"> Computer picked <img src="${computerMove}-emoji.png" class="result-icon">`;
      }

      function updateScoreElement() {
        document.querySelector(
          ".js-score"
        ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = "";

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = "rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = "paper";
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = "scissors";
        }

        return computerMove;
      }
