import "./game.css";
import triangle from "../../assets/bg-triangle.svg";
import paper from "../../assets/icon-paper.svg";
import rock from "../../assets/icon-rock.svg";
import scissors from "../../assets/icon-scissors.svg";

function Game({ setUserChoice }) {
  return (
    <section className="main-game">
      <div className="main-game-content">
        <img className="triangle" src={triangle} alt="Triangle background" />

        <div className="game-options" aria-label="Choose your move">
          <button
            className="paper"
            type="button"
            onClick={() => setUserChoice("paper")}
          >
            <img src={paper} alt="Paper" />
          </button>
          <button
            className="rock"
            type="button"
            onClick={() => setUserChoice("rock")}
          >
            <img src={rock} alt="Rock" />
          </button>
          <button
            className="scissors"
            type="button"
            onClick={() => setUserChoice("scissors")}
          >
            <img src={scissors} alt="Scissors" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Game;
