let rand = Math.random();
let ad1, ad2, add3;
if (rand < 0.34) {
    ad1 = "Crazy";
    ad2 = "Engines";
    ad3 = "Bros"
} else if (rand <= 0.67) {
    ad1 = "Amazing";
    ad2 = "Foods";
    ad3 = "Limited";
} else {
    ad1 = "Fire";
    ad2 = "Garmnts";
    ad3 = "Hub";
}

console.log(rand);
console.log(`Your Business name is ${ad1} ${ad2} ${ad3}`);