/*
---------------------
| TASK ONE PART ONE |
---------------------
*/
/* ARRANGE */
const stringCount = (stringInput) => {
  let stringLength = stringInput.length;
  return stringLength;
}

/* ACTION */
const canCount = (stringInput, result) => {
  console.log("--> Actual input string is: " + stringInput + " --> Total characters count: " + result);
  if (stringCount(stringInput) === result) {
    console.log("Succeed!");
  }
  else {
    console.log("Failed!");
  }
}

/* ASSERT */
canCount('Hello World', 11);