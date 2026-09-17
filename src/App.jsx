import { useState } from 'react'
import Header from './game-frontpage/header/header.jsx'
import Game from './game-frontpage/game/game.jsx'
import Rules from './game-frontpage/rules/rules.jsx'
import Battle from './game-frontpage/result/battle.jsx'

function App() {

    const [score, setScore] = useState(0);
    const [userChoice, setUserChoice] = useState(null);

  return (
    <main className="App">
      <Header score={score} />
      
      {!userChoice ? (
        <Game setUserChoice={setUserChoice} />
      ) : (
        <Battle
          userChoice={userChoice}
          setScore={setScore}
          setUserChoice={setUserChoice}
        />
      )}
      
      <Rules />
    </main>
  )
}

export default App