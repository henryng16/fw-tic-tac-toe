import React from "react";

function History({ history, jumpTo }) {
  return (
    <div className="history">
      <h4>History</h4>
      <ul>
        {history.map((step, move) => {
          console.log(step, move);
          const nextMove = move ? "Go to move #" + move : "Go to game start";
          return (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>{nextMove}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default History;
