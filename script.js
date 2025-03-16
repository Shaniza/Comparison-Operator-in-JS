const a = 5;
const b = 10;
console.log(a == b)

const p = 10;
const q = "10";//single quote does not make string
console.log(p == q)//true, check only value

const c = 5;
const d = "5";
console.log(c === d)//false, string and integer are not equal

const e = 5;
const f = 5;
console.log(e === f)//true, as both value and type is same