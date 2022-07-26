// Prime numbers logic

let input = +prompt("Please enter the number: ");   // Get input from user
let isPrime = true;

if (isNaN(input)) {          // Check if input is number or not
  alert("Please enter only number!!!");
} else {
  alert("Your selected number is: " + input);
}

// Logicall part
if (input === 1) {
  alert("not Prime or Composite number");
} else {
  for (let i = 2; i < input; i++) {
    if (input % i === 0) {
      isPrime = false;
      alert("Not a prime");
      break;
    }
  }
  if (isPrime) {
    alert("Prime.");
  }
}

