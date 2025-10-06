// ex3.js

function eulerlist() {
  const a = parseInt(document.getElementById("a1").value);
  const b = parseInt(document.getElementById("b1").value);
  const l = document.getElementById("l").value
    .split(",")
    .map(x => parseInt(x.trim()))
    .filter(x => !isNaN(x));

  const sum = l
    .filter(x => x % a === 0 || x % b === 0)
    .reduce((acc, val) => acc + val, 0);

  alert(`Sum of multiples of ${a} or ${b}: ${sum}`);
}

function euler2Lists() {
  const aList = document.getElementById("aList").value
    .split(",")
    .map(x => parseInt(x.trim()))
    .filter(x => !isNaN(x));

  const mList = document.getElementById("mList").value
    .split(",")
    .map(x => parseInt(x.trim()))
    .filter(x => !isNaN(x));

  const sum = mList
    .filter(num => aList.some(a => num % a === 0))
    .reduce((acc, val) => acc + val, 0);

  alert(`Sum of multiples of ${aList.join(", ")}: ${sum}`);
}
