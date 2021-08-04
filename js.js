//load board
document.addEventListener("DOMContentLoaded", createBoard);
const blueText = document.getElementById("bText");
const redText = document.getElementById("rText");
const resetBtn = document.getElementsByClassName("resetBtn")[0];
const circles = document.querySelectorAll(".circle");
const players = document.getElementsByClassName("players")[0];
const p = document.createElement("p");

// let p1;
// let p2;
let currentPlayer;
let winOrder = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
];

function createBoard() {
    // p1 = [];
    // p2 = [];
    currentPlayer = "blue";
    blueText.style.textDecoration = "underline";
    p.innerHTML = "";
    for (let i = 0; i < circles.length - 7; i++) {
        circles[i].setAttribute("id", i);
        circles[i].classList.remove("full", "red", "blue");
        circles[i].addEventListener("click", checkForClick);
    }

    resetBtn.addEventListener("click", createBoard);

    //check if u can click
    function checkForClick() {
        let id = this.id;
        if (circles[7 + +id].classList.contains("full")) {
            clickedCircle(id);
        }
    }
    //click on circle
    function clickedCircle(id) {
        if (currentPlayer === "blue") {
            circles[id].classList.add("full", "blue");
            circles[id].removeEventListener("click", checkForClick);

            currentPlayer = "red";
            blueText.style.textDecoration = "none";
            redText.style.textDecoration = "underline";
            // p1.push(id);
            checkFourCircles();

            return;
        }
        circles[id].classList.add("full", "red");
        circles[id].removeEventListener("click", checkForClick);

        currentPlayer = "blue";
        blueText.style.textDecoration = "underline";
        redText.style.textDecoration = "none";
        // p2.push(id);
        checkFourCircles();
    }

    //check who's the winner

    function checkFourCircles() {
        for (let j = 0; j < winOrder.length; j++) {
            const c1 = circles[winOrder[j][0]];
            const c2 = circles[winOrder[j][1]];
            const c3 = circles[winOrder[j][2]];
            const c4 = circles[winOrder[j][3]];

            // console.dir(c1);
            if (
                c1.classList.contains("blue") &&
                c2.classList.contains("blue") &&
                c3.classList.contains("blue") &&
                c4.classList.contains("blue")
            ) {
                p.innerHTML = "CONGRATS!! BLUE Won";
                p.style.color = "rgb(63, 63, 216)";
                players.appendChild(p);
                winnerBoard();
            }
            if (
                c1.classList.contains("red") &&
                c2.classList.contains("red") &&
                c3.classList.contains("red") &&
                c4.classList.contains("red")
            ) {
                p.innerHTML = "CONGRATS!! RED Won";
                p.style.color = "rgb(207, 64, 93)";

                players.appendChild(p);
                winnerBoard();
            }
        }
    }

    function winnerBoard() {
        for (let i = 0; i < circles.length - 7; i++) {
            circles[i].removeEventListener("click", checkForClick);
        }
    }
}

// for (let j = 0; j < winOrder.length; j++) {
//     // console.dir(j);
//     for (let i = 0; i < 4; i++) {
//         console.log(winOrder[j][i]);
//     }
// }