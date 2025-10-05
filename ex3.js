// ex3.js

// Function for the first problem: sum of multiples of a or b in list l
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

// Function for any-length list of divisors and list of numbers
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

// Optional: an alternate version (same logic, different approach)
function euler2Lists1() {
  const aList = document.getElementById("aList").value
    .split(",")
    .map(Number)
    .filter(x => !isNaN(x));

  const mList = document.getElementById("mList").value
    .split(",")
    .map(Number)
    .filter(x => !isNaN(x));

  let total = 0;
  for (const m of mList) {
    for (const a of aList) {
      if (m % a === 0) {
        total += m;
        break;
      }
    }
  }

  alert(`(Method 2) Sum of multiples of ${aList.join(", ")}: ${total}`);
}
