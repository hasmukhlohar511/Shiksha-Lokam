
function shortestSubstrings(s, x) {
  var substringArr = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = i + x - 1; j < s.length + 1; j++) {
      const substring = s.substring(i, j);

      //Store substrings in the substringArr where the length is greater than or equal to x, and the first and last characters are the same.
      if (
        substring.length >= x &&
        substring[0] === substring[substring.length - 1]
        ) {
        // console.log(substring, i, j)
        substringArr.push(substring);
      }
    }
  }

  // console.log("substringArr",substringArr);
  if (substringArr.length === 0) {
    console.log("No Substring Found");
  } else {
    const shortestLength = Math.min(...substringArr.map((s) => s.length));
    const result = substringArr.filter((s) => s.length === shortestLength);
    console.log(result.toString());
  }

}

const s = "abccdbacca";
console.log("\nGiven String :",s)
var x = 3;
console.log("\nx =",x)
shortestSubstrings(s, x);

x = 4;
console.log("\nx =",x)
shortestSubstrings(s, x);

x = 5;
console.log("\nx =",x)
shortestSubstrings(s, x);

x = 6;
console.log("\nx =",x)
shortestSubstrings(s, x);

x = 7;
console.log("\nx =",x)
shortestSubstrings(s, x);

x = 8;
console.log("\nx =",x)
shortestSubstrings(s, x);

x = 9;
console.log("\nx =",x)
shortestSubstrings(s, x);

x = 10;
console.log("\nx =",x)
shortestSubstrings(s, x);

x = 11;
console.log("\nx =",x)
shortestSubstrings(s, x);