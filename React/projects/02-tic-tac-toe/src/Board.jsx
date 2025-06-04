import confetti from 'canvas-confetti'

import { useState } from 'react';

import { Square } from './components/Square';
import { WinnerModal } from './components/WinnerModal';

import {TURNS, WINNER_COMBOS} from './logic/globalConstants'

import './App.css'



function Board() {
  console.log("render board")
  //const board = Array(9).fill(null);
  //const board = ["X", "O", "X", "X", "O", "X", "X", "O", "X"];
  const [board, setBoard] = useState(() => {
    // IMPORTANTE: localStorage no funciona en servidores, solo a nivel local    
    const localStorageBoard = window.localStorage.getItem('board')
    return localStorageBoard ? JSON.parse(localStorageBoard) : Array(9).fill(null)
  });


  // Recuperamos valores de localStorage al inicializar un estado en useState para que no se haga siempre que se renderice el componente
  const [turn, setTurn] = useState(() => {
    const turnLocalStorage = window.localStorage.getItem('turn')
    return turnLocalStorage ? turnLocalStorage : TURNS.X
  });

  //El ganador por defecto está a null, solo cambia si encontramos un ganador
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
      for (const combo of WINNER_COMBOS) {
          const [a, b, c] = combo;

          if(
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
          ){
              return boardToCheck[a];
          }
      }

      //Si no hay ganador
      return null
      
  }

  const updateBoard = (index) => {    
    // Comprobación para que no añada un valor sobre una casilla que ya tenga un valor
    if (board[index] || winner) return

    // Copiamos el array original en una nueva variable, de está manera no modificamos el componente
    const newBoard = [...board];

    //Lógica de actualización de tablero
    newBoard[index] = turn;
    setBoard(newBoard);

    //Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }
    else if (checkEndGame(newBoard) === true) {
      setWinner(false)
    }
  }

  //Dejamos nuestros estados con los valores iniciales, de esa manera podemos reiniciar el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

  
  return (
    <>
      <div className='board'>
          <h1>Tic-tac-toe</h1>
          <button onClick={resetGame}>Reiniciar el juego</button>
          <section className='game'>
            {
              board.map((square, index) => {
                  return(
                      <Square 
                        key={index}
                        index={index}
                        updateBoard={updateBoard}
                      >
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

          <WinnerModal winner={winner} resetGame={resetGame} />
      </div>
      

    </>
  )
}

export default Board
