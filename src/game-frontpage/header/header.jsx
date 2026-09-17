import rpsLogo from '../../assets/logo.svg'
import './header.css'

function Header({ score }) {
  return (
    <header  className="header">
      <div className="header-content">
        <img className="logo" src={rpsLogo} alt="Rock Paper Scissors logo" />
        <div className="score">
          <div className="score-label">
            <h1>SCORE</h1>
            <h2>{score}</h2>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
