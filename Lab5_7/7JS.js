const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let finish = false;
const square = document.getElementById("xo").getElementsByTagName('td');

for (let i = 0; i<9; i++) {
    square[i].addEventListener("click", click(i));
}

function get(n) {
    return square[n].innerHTML;
}

function check() {
    for (let s of win) {
        let c = get(s[0]);
        if (c && c === get(s[1]) && c === get(s[2])) {
            return true;
        }
    }
    return false;
}

function free_cells() {
    let res = [];
    for (let cell of square) {
        if (cell.innerHTML === "") res.push(cell);
    }
    return res;
}

function pc_turn(fc) {
    let pc_cell = Math.floor(Math.random()*fc.length);
    fc[pc_cell].innerHTML = "X";
}

function click(n) {
    function move() {
        if (finish) clear();

        if (get(n) === "") square[n].innerHTML = "O";
        else return;

        let fc = free_cells();

        if (check()) {
            finish = true;
            alert("Вы победили!");
        } else if (fc.length) {
            pc_turn(fc);
            if (check()) {
                finish = true;
                alert("Вы проиграли!");
            }
        } else {
            finish = true;
            alert("Ничья!");
        }
    }
    return move;
}

function clear() {
    finish = false;
    for (let sq of square) {
        sq.innerHTML = "";
    }
}