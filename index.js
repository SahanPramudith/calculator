function T1() {
    let prev = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = prev + 1;

}
function T2() {
    let prev = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = prev + 2;

}
function T3() {
    let prev = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = prev + 3;

}
function T4() {
    let prev = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = prev + 4;

}
function T5() {
    let prev = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = prev + 5;

}
function T6() {
    let prev = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = prev + 6;

}
function T7() {
    let prev = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = prev + 7;

}
function T8() {
    let prev = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = prev + 8;

}
function T9() {
    let prev = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = prev + 9;

}
function T0() {
    let prev = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = prev + 0;

}
function cl() {
    let prev = document.getElementById('display').innerHTML;
    let clear;
    clear = prev.slice(0, -1);
    document.getElementById('display').innerHTML = clear;

}

let first;
let op;

function sum() {
    first = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = " ";
    
    op = 1;
}

function sub() {
    first = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = " ";
    op = 2;
}

function multi() {
    document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = " ";
    op = 3;

}


function div() {
    document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = " ";
    op = 4;

}

function ev() {

    if (op == 1) {
        let secondsave = document.getElementById('display').innerHTML;
        document.getElementById('display').innerHTML = parseInt(secondsave) + parseInt(first);

    } else if (op == 2) {
        let secondsave = document.getElementById('display').innerHTML;
        document.getElementById('display').innerHTML = parseInt(secondsave) - parseInt(first);
    } else if (op == 3) {
        let secondsave = document.getElementById('display').innerHTML;
        document.getElementById('display').innerHTML = parseInt(secondsave) * parseInt(first);
    } else if (op == 4) {
        let secondsave = document.getElementById('display').innerHTML;
        document.getElementById('display').innerHTML = parseInt(secondsave) / parseInt(first);
    } else {
        document.getElementById('display').innerHTML = 'error';

    }
}
