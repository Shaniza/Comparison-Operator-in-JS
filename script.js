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

const g = 5;
const h = 10;
console.log(g != h)//!=	not equal, ans - true

const i = 5;
const j = "3";
console.log(i !== j)//!==,  ans - true if not equal value or not equal type
//>	greater than
const m = 10; 
const n = 2;
console.log(m > n)// true if m is greater than n

//>= greater than or equal
const one = 2; 
const two = 2;
console.log(one >= two)// true if is greater than or equal to n
// less than , <
const r = 1; 
const s = 2;
console.log(r < s)// true if r is less than s

// <= less than or equal
const u = 1; 
const v = 2;
console.log(u <= v)