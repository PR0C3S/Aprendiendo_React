import { WINNER_COMBOS } from "../constant"

export const checkWinnerFrom = (boardToCheck) =>{
    
    //check all the combinations winners
    for(const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(
        boardToCheck[a] && 
        boardToCheck[a]=== boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]
        ){
          return boardToCheck[a] //return the winner
        }
    }

    //no winner
    return null
  }

export const checkEndGame = (newBoard) =>{
    // check if every position is different to null
    //if every position is diferrent return true else false
    return newBoard.every((square) => square !== null)
  }