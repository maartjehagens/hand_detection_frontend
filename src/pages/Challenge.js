import React, {useState} from "react";
import "../Styles/Challenge.css"

function Challenge() {
    const [grid, setGrid] = useState([
        [0, 3, 5, 1],
        [1, 2, 2, 4],
        [4, 3, 5, 0],
    ])
    const [revealedGrid, setRevealedGrid] = useState (
        new Array(grid.length)
            .fill("")
            .map(() => new Array (grid[0].length).fill(false))
    );
    
    const [previousClick, setPreviousClick] = useState();
    
    function handleCardClicked(rowIndex, colIndex){
        const clickedNumber = grid[rowIndex][colIndex];
        const newRevealedGrid = [...revealedGrid];
        newRevealedGrid[rowIndex][colIndex] = true;
        newRevealedGrid[rowIndex][colIndex] = true;
        setRevealedGrid(newRevealedGrid)
        
        if(previousClick) {

            if (previousClick !== clickedNumber) {
                setTimeout(() => {
                    newRevealedGrid[rowIndex][colIndex] = false;
                    setRevealedGrid(newRevealedGrid);
                }, 1000);
            }
            setPreviousClick(undefined);
        } else {
            setPreviousClick(previousClick);
        }
    }
    
    return (
    <div className="Challenge">
        <div className="grid">
    {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="rowChallenge">
        {row.map((number, colIndex) => (
            <div 
                onClick={() => handleCardClicked(rowIndex, colIndex)}
                key={colIndex}
                className="cardChallenge"
                >
                {revealedGrid[rowIndex] [colIndex] ? number : ""}
             </div>
        ))}
        </div>
        ))}
    </div>
    </div>
);
}

export default Challenge;