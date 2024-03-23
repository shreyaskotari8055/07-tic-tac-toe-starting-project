


export default function GameBoard({onSelectSquare, board}){
    


// const [gamBoard, setGameBoard] = useState(initialGameBoard);

// function handleSelectBox(rowIndex,colIndex){
//     setGameBoard((prevGameBoard) => {
//         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
//         // console.log(updatedBoard);
//         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
//         return updatedBoard;    
//     }) 
//     console.log(gamBoard)

//     onSelectSquare();
// }

    return <ol id="game-board">
        {board.map((row, rowIndex) => (<li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex) => (<li key={colIndex}>
                    <button onClick={() => onSelectSquare(rowIndex,colIndex)} disabled ={playerSymbol !== null}>
                        {playerSymbol}
                    </button>
                </li>
                ))}
            </ol>
        </li>
        ))}
    </ol>
}