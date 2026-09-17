import { useState, useEffect } from "react";
import { getComputerChoice, determineWinner } from "../../gamelogic.js";

import paperIcon from "../../assets/icon-paper.svg";
import scissorsIcon from "../../assets/icon-scissors.svg";
import rockIcon from "../../assets/icon-rock.svg";
import "./battle.css";

const icons = {
  paper: paperIcon,
  scissors: scissorsIcon,
  rock: rockIcon,
};

function Battle({ userChoice, setUserChoice, setScore }) {
  const [computerChoice, setComputerChoice] = useState(null);
  const [countdown, setCountdown] = useState(2);

  useEffect(() => {
    let currentCount = 2;

    const timerInterval = setInterval(() => {
      currentCount -= 1;
      setCountdown(currentCount);

      if (currentCount === 0) {
        clearInterval(timerInterval);
        const pcChoice = getComputerChoice();
        setComputerChoice(pcChoice);

        const result = determineWinner(userChoice, pcChoice);
        if (result === "win") {
          setScore((prevScore) => prevScore + 1);
        } else if (result === "lose") {
          setScore((prevScore) => prevScore - 1);
        }
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [userChoice, setScore]);

  const winner = computerChoice
    ? determineWinner(userChoice, computerChoice)
    : null;

  const outcomeText =
    winner === "win" ? "YOU WIN" : winner === "lose" ? "YOU LOSE" : "DRAW";

  return (
    <section className="result">
      <div className="result-content">
        {/* LADO ESQUERDO: Jogador */}
        <div className="player-side">
          <h1 className="result-title">YOU PICKED</h1>
          <div
            className={`${userChoice} ${computerChoice && winner === "win" ? "winner-glow" : ""}`}
          >
            <img src={icons[userChoice]} alt={userChoice} />
          </div>
        </div>

        <div className="result-outcome">
          {!computerChoice ? (
            <span className="countdown-number">{countdown}</span>
          ) : (
            <>
              <h2 className="result-outcome-title" aria-live="polite">
                {outcomeText}
              </h2>
              <button
                className="result-outcome-button"
                onClick={() => setUserChoice(null)}
              >
                PLAY AGAIN
              </button>
            </>
          )}
        </div>

        {/* LADO DIREITO: Computador */}
        <div className="house-side">
          <h1 className="result-title">THE HOUSE PICKED</h1>
          {computerChoice ? (
            <div
              className={`${computerChoice} ${winner === "lose" ? "winner-glow" : ""}`}
            >
              <img src={icons[computerChoice]} alt={computerChoice} />
            </div>
          ) : (
            <div className="empty-circle"></div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Battle;
