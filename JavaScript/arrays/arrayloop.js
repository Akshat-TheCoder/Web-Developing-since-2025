let a = [33, 92, 111 , 45];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
// }

// a.forEach((value, index,array) => {
//     console.log(value, index, array);
// });

// let bank = {
//     bankName: "SBI",
//     location: "Mumbai",
//     accountNo: 1234567890,
//     ifsc: "SBIN0000456",
//     interestRate: "7%",
// }

// for (const key in bank) {
//     if (!Object.hasOwn(bank, key)) continue;
//     const element = bank[key];
//     console.log(key , ":", element);
// }

// for (const element of a) {
//     console.log(element);
// }

// let newArr = [];
// for (const num of a) {
//     newArr.push(num**2 - 2);
// }

let newArr = a.map((e) => {
    return e**2 -2
})
console.log(newArr);

const greaterthanfifty = (e) => {
    if (e>50){
        return true
    }
    return false
}
console.log(a.filter(greaterthanfifty))


let bx = [2,5,76,5];
const red = (a,b) =>{
    return a*b
}
console.log(bx.reduce(red))

let f = Array.from("Akshat@2013")
console.log(f)

