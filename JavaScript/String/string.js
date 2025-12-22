let a  = "Akshat";
console.log(a)
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a.length);

console.log("My Name is " + a);
console.log(`My Name is ${a}`);

let b = "  Shivam";
console.log(b);
console.log(b.length);
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.slice(0,4));
console.log(b.slice(2));
console.log(b.replace("Shivam", "Shivani"));
console.log(b.replace("Sh", "Hi"));
console.log(b.concat(" Kumar"));
console.log(b.concat(a));
console.log(b.trim());
console.log(b.charAt(3));
console.log(b.indexOf("v"));
console.log(b.lastIndexOf("a"));
console.log(b.split(""));
console.log(b.split("v"));
console.log(b.endsWith("a"));
console.log(b.includes("z"));
console.log(b.repeat(3));
console.log(b.substr(2,4));
console.log(b.substring(2,5));

console.log("har\"".length);

let am = " Please give Rs 1000";
console.log(am.slice(16));
console.log(am[3].toUpperCase()); 