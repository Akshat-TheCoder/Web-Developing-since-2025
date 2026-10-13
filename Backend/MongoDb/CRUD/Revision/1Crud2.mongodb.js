// //CRUD Operations

// //Create
use("CrudDb2");

// console.log(db);

db.createCollection("courses2");

// db.courses2.insertOne({
//   name: "Akshat",
//   mode: "Free course",
//   price: "$0",
//   course: "Sigma web devlopment Course",
// });

db.courses2.insertMany([
  {
    name: "Akshat",
    mode: "Free course",
    price: 0,
    course: "Sigma Web Development Course",
    tag:["Good"]
  },
  {
    name: "Aman",
    mode: "Paid course",
    price: 409,
    course: "Complete JavaScript Course",
    tag:["not Bad"]
  },
  {
    name: "Priya",
    mode: "Free course",
    price: 0,
    course: "Python for Beginners",
    tag:["Excellent"]
  },
  {
    name: "Riya",
    mode: "Paid course",
    price: 35,
    course: "React.js Frontend Development",
    tag:["bad","worst"]
  },
  {
    name: "Arjun",
    mode: "Free course",
    price: 300,
    course: "HTML and CSS Fundamentals",
    tag:["Better"]
  },
  {
    name: "Kunal",
    mode: "Paid course",
    price: 60,
    course: "Node.js and Express Backend Course",
    tag:["Good","Best","Free"]
  },
  {
    name: "Neha",
    mode: "Free course",
    price: 1000,
    course: "Git and GitHub Basics",
    tag:["Best"]
  },
  {
    name: "Rohan",
    mode: "Paid course",
    price: 75,
    course: "Full Stack Web Development Bootcamp",
    tag:["Good"]
  },
  {
    name: "Rohan",
    mode: "Paid course",
    price: 75,
    course: "Full Stack Web Development Bootcamp",
    tag:["Good","Best"]
  },
]);

db.courses2.insertMany( [
   { "_id": 1, "results": [ { "product": "abc", "score": 10 },
                            { "product": "xyz", "score": 5 } ] },
   { "_id": 2, "results": [ { "product": "abc", "score": 8 },
                            { "product": "xyz", "score": 7 } ] },
   { "_id": 3, "results": [ { "product": "abc", "score": 7 },
                            { "product": "xyz", "score": 8 } ] },
   { "_id": 4, "results": [ { "product": "abc", "score": 7 },
                            { "product": "def", "score": 8 } ] },
   { "_id": 5, "results": { "product": "xyz", "score": 7 } }
] )


//Read

// let a = db.courses2.find({ price: '$0'});
// console.log(a.toArray());

// let b = db.courses2.findOne({ price: '$0' });
// console.log(b);

// db.courses2.find()
// db.getName()
//Update

// db.courses2.updateOne(
//   { price: "$0" },
//   { $set: { price: "$100", updated: true } },
// );

// db.courses2.updateMany(
//   { mode: "Free course" },
//   { $set: { mode: "Currently Free but It will be not free Soon" } },
// );

//Delete
// db.courses2.deleteOne({price:'$35'})
// db.courses2.deleteMany({price:'$35'})

