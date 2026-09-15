import Player from "./components/Player"
import Gameboard from "./components/Gameboard.jsx"
import { useState } from "react"
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null,]
]


function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for(const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;
      
      gameBoard[row][col] = player
  }

  let winner;

  for(const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column];

    if (firstSquareSymbol && 
        firstSquareSymbol === secondSquareSymbol && 
        firstSquareSymbol === thirdSquareSymbol
      ) {
      winner = firstSquareSymbol;
    }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { 
          square: { row: rowIndex, col: colIndex }, 
          player: currentPlayer 
        }, ...prevTurns]
        
      return updatedTurns;
    })
  }

  const hasDraw = gameTurns.length === 9 && !winner

  function handleRestart() {
    setGameTurns([])
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
        <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
      <Gameboard onSelectSquare={handleSelectSquare} board={gameBoard}/>
    </div>
    <Log turns={gameTurns}/>
  </main>
}

export default App
