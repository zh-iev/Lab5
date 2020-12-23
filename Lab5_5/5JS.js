//5 задание
let f=false;
function del() {
    let okno = document.getElementById('okno');
    okno.value='';
    f=false;
}
function ravno() {
    let okno = document.getElementById('okno');
    let result = eval(okno.value);
    okno.value = result;
}
function Insert(d) {
    let okno = document.getElementById('okno');
    okno.value = okno.value + d;
}
function Zero() {
    let okno = document.getElementById('okno');
    if (okno.value === '' || okno.value.slice(-1) === '/') {
        alert('Ошибка!');
        del();
    } else {
        okno.value=okno.value+'0';
    }
}
function Znak(z) {
    let okno = document.getElementById('okno');
    if (!f && okno.value !== '') {
        okno.value=okno.value+z;
    }
    f=true;
}