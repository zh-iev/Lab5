//2 задание
let num, str,stb;
function pole(){
    num = Math.round(Math.random()*9+1);
    document.getElementById('txt').value = num;
}
//3 задание
function copy(){
    if (document.getElementById("1st").value !== "") {
        document.getElementById("2nd").value = document.getElementById("1st").value;
    }
    else {
        alert("Пожалуйста, введите текст в первое поле");
    }
}
function clearing() {
    document.getElementById("1st").value='';
    document.getElementById("2nd").value='';
}
//4 задание
function createtable() {
    let stb=document.getElementById("3rd").value;
    let str=document.getElementById("4ed").value;
    if (isNaN(stb/str)) {
        alert('Введите натуральные числа!');
} else {
        let block_table=(document.getElementById("block_table"));
        let table = document.createElement("table");
        block_table.appendChild(table);
        for (let i=0; i<str; i++) {
            let tr = document.createElement("tr");
            table.appendChild(tr);
            for (let j=0; j<stb; j++) {
                td=document.createElement("td");
                tr.appendChild(td);
                td.innerHTML = Math.round(Math.random()*9+1);
            }}
    }
}

