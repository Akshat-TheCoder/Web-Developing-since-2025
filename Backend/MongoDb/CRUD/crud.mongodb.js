// //Creating a database
use("CrudDB")


// //Creating a collection
// db.createCollection("Hello-World")


// //Inserting in a collection

// db.Col1.insertOne({
//     "name": "A free learning course",
//     "price": "$23"
// })

// db.Col1.insertMany([
//     {
//         "name": "A free learning course",
//         "price": "$23"
//     },
//     {
//         "name": "A free learning course",
//         "price": "$23"
//     },
//     {
//         "name": "A free learning course",
//         "price": "$23"
//     },
//     {
//         "name": "A free learning course",
//         "price": "$23"
//     },
//     {
//         "name": "A free learning course",
//         "price": "$23"
//     },
//     {
//         "name": "A free learning course",
//         "price": "$23"
//     },
//     {
//         "name": "A free learning course",
//         "price": "$23"
//     },
//     {
//         "name": "A free learning course",
//         "price": "$23"
//     },
//     {
//         "name": "A free learning course",
//         "price": "$23"
//     },
// ])


// // target a collection's items

// let c = db.Col1.find("{price":'$23'})
// console.log(c.count());

// let cb = db.Col1.findOne({"price":"$23"})
// console.log(cb);


// UPDATE

// db.Col1.updateMany({"price":"$302"},{$set:{"price" : "$3020"}})

// db.Col1.updateOne({"price":"$302"},{$set:{"price" : "$32"}})

// let cd = db.Col1.findOne({price:"$32"})
// console.log(cd);


//DELETE

db.Col1.deleteMany({"price":"$3020"})