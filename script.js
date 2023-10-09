let currentPlayer = "X";
let arr = Array(9).fill(null);

function checkWinner() {
    if (
        // Rows
        (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
        (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
        (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
        // Columns
        (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
        (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
        (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
        // Diagonals
        (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
        (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])
    ) {
        // A player has won
        document.write(`Winner is ${currentPlayer}`);
    } else if (!arr.includes(null)) {
        // It's a draw
        document.write("It's a draw!");
    }
}

function handleClick(el) {
    const id = el.id;
    if (arr[id] === null) {
        arr[id] = currentPlayer;
        el.innerText = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        checkWinner(); // Check for a winner or draw after each move
    }
    console.log(arr);
}
