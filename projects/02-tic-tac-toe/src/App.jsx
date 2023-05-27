import './App.css'
import { useState } from 'react'
import { Square } from './components/Square'
import confetti from 'canvas-confetti'
import { INITIAL_BOARD, TURNS } from './constant'
import { checkEndGame, checkWinnerFrom } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { resetGameStorage, saveGameStorage } from './logic/storage'

function App() {
  const [board, setBoard] = useState(() =>{
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : INITIAL_BOARD
  })
  const [turn, setTurn] = useState(() =>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURNS.X
  })

  // null no winner, false is a tie, true is a winner
  const [winner, setWinner] = useState(null)

  
  
  const updateBoard = (index) =>{

    //Don't update if the positio has something or it have a winner
    if(board[index] || winner) return 

    //Change the turn
    const newTurn = (turn === TURNS.X ? TURNS.O : TURNS.X)
    setTurn(newTurn)

    //update board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //save game
    saveGameStorage({board:JSON.stringify(newBoard), turn: newTurn})

    //check if it have a winner
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      setWinner(newWinner)
      confetti()
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }


  }

  const resetGame = () =>{
    setBoard(INITIAL_BOARD)
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className='game'>
        {
          board.map((square,index)=>{
            return(
              <Square key={index}  index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
    </main>
  )
}

export default App
