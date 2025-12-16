// {
//     let a = prompt("Enter Your Name");
//     document.title = a;
// }

let o = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

o.salary = "$50000";

console.log(o);
let p = {
    name: prompt("Enter Your Name"),
    age: prompt("Enter Your Age"),
    city: prompt("Enter Your city"),
    salary: prompt("Enter Your Salary"),
    handsome: confirm("Are You Handsome?")
};
document.title = p.name;

console.log(p);

let q = {
    "name": "Akshat",
    "age": 14,
    "city": "Pratapgarh"
};

console.log(q);

q.salary = "$20000";

console.log(q);

{
    let key = prompt("Enter Key To Delete From Object");
    delete q[key];
    console.log(q);
}

{
    let key = prompt("Enter Key To Access Value From Object");
    alert(p[key],q[key]);
}

{
    console.log(Object.keys(q));
    console.log(Object.values(q));
}

{
    console.log(Object.entries(q));
}

{
    console.log("name" in q);
    console.log("salary" in q);
}
