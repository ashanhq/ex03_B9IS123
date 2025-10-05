let listEuler1 = (a, b, l) => {
    return l
        .filter(x => x % a === 0 || x % b === 0)
        .reduce((sum, x) => sum + x, 0);
};

let listEuler2 = (a, l) => {
    return l
        .filter(x => a.some(y => x % y === 0))
        .reduce((sum, x) => sum + x, 0);
};

let listEuler3 = (a, l) => {
    return l
        .filter(x => a.some(y => x % y === 0))
        .reduce((sum, x) => sum + x, 0);
};

let eulerlist = () => {
    let a = parseInt(document.getElementById('a1').value) || 2;
    let b = parseInt(document.getElementById('b1').value) || 3;
    let l = document.getElementById('l').value.split(" ").map(x => parseInt(x));
    let result = listEuler1(a, b, l);
    alert("Sum of multiples of " + a + " or " + b + " = " + result);
};

let euler2Lists = () => {
    let a = document.getElementById('aList').value.split(" ").map(x => parseInt(x));
    let l = document.getElementById('mList').value.split(" ").map(x => parseInt(x));
    let result = listEuler2(a, l);
    alert("Sum of multiples (length 2 list) = " + result);
};

let euler2Lists1 = () => {
    let a = document.getElementById('aList').value.split(" ").map(x => parseInt(x));
    let l = document.getElementById('mList').value.split(" ").map(x => parseInt(x));
    let result = listEuler3(a, l);
    alert("Sum of multiples (any length list) = " + result);
};
