import './game.css'
import triangle from '../../assets/bg-triangle.svg'
import paper from '../../assets/icon-paper.svg'
import rock from '../../assets/icon-rock.svg'
import scissors from '../../assets/icon-scissors.svg'



function Game({ setUserChoice }) {

  return (
    <section className="main-game">
      <div className="main-game-content">
        <img className="triangle" src={triangle} alt="Triangle background" />
        
        <div className="game-options">
          <div className="paper" onClick={() => setUserChoice('paper')}>
            <img src={paper} alt="Paper icon" />
          </div>
          <div className="rock" onClick={() => setUserChoice('rock')}>
            <img src={rock} alt="Rock icon" />
          </div>
          <div className="scissors" onClick={() => setUserChoice('scissors')}>
            <img src={scissors} alt="Scissors icon" />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Game
