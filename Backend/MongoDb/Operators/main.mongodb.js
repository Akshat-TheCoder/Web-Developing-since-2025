use('CrudDB')

// INSERTING ITEMS

// db.Col1.deleteMany({"price":"3020"}) //INCORRECT //
// db.Col1.deleteMany({"price":"$3020"})


// db.yourCollection.insertMany([
//   // $3020 Group (5 docs)
//   { "_id": "a1b2c3d4e5f678901234abcd", "name": "A free learning course", "price": "$3020" },
//   { "_id": "f9e8d7c6b5a432109876fedc", "name": "JavaScript Fundamentals", "price": "$3020" },
//   { "_id": "1a2b3c4d5e6f7081928374ab", "name": "JavaScript Advanced", "price": "$3020" },
//   { "_id": "8f9e0d1c2b3a4f5e6d7c8901", "name": "JavaScript Patterns", "price": "$3020" },
//   { "_id": "4c5d6e7f8a9b0c1d2e3f4a5b", "name": "JavaScript Mastery", "price": "$3020" },

//   // $2500 Group (6 docs)
//   { "_id": "7e8f9a0b1c2d3e4f5a6b7c8d", "name": "Node.js Backend", "price": "$2500" },
//   { "_id": "2d3e4f5a6b7c8d9e0f1a2b3c", "name": "Express Backend", "price": "$2500" },
//   { "_id": "9e0f1a2b3c4d5e6f7a8b9c0", "name": "Backend APIs", "price": "$2500" },
//   { "_id": "5f6a7b8c9d0e1f2a3b4c5d6e", "name": "Node.js Advanced", "price": "$2500" },
//   { "_id": "1f2a3b4c5d6e7f8a9b0c1d2e", "name": "Backend Architecture", "price": "$2500" },
//   { "_id": "8a9b0c1d2e3f4a5b6c7d8e9f", "name": "CSS Design", "price": "$2500" },

//   // $1800 Group (4 docs)
//   { "_id": "4b5c6d7e8f9a0b1c2d3e4f5a", "name": "React Frontend", "price": "$1800" },
//   { "_id": "0c1d2e3f4a5b6c7d8e9f0a1b", "name": "Vue Frontend", "price": "$1800" },
//   { "_id": "7d8e9f0a1b2c3d4e5f6a7b8c", "name": "Frontend Design", "price": "$1800" },
//   { "_id": "3e4f5a6b7c8d9e0f1a2b3c4d", "name": "Frontend Mastery", "price": "$1800" },

//   // $2200 Group (6 docs)
//   { "_id": "a9b0c1d2e3f4a5b6c7d8e9f0", "name": "MongoDB Database", "price": "$2200" },
//   { "_id": "6c7d8e9f0a1b2c3d4e5f6a7b", "name": "PostgreSQL Database", "price": "$2200" },
//   { "_id": "2d3e4f5a6b7c8d9e0f1a2b3c", "name": "MySQL Database", "price": "$2200" },
//   { "_id": "9f0a1b2c3d4e5f6a7b8c9d0e", "name": "Database Design", "price": "$2200" },
//   { "_id": "5a6b7c8d9e0f1a2b3c4d5e6f", "name": "NoSQL Database", "price": "$2200" },
//   { "_id": "1b2c3d4e5f6a7b8c9d0e1f2a", "name": "Database Optimization", "price": "$2200" },

//   // $3600 Group (3 docs)
//   { "_id": "8c9d0e1f2a3b4c5d6e7f8a9b", "name": "Docker DevOps", "price": "$3600" },
//   { "_id": "4d5e6f7a8b9c0d1e2f3a4b5c", "name": "Kubernetes DevOps", "price": "$3600" },
//   { "_id": "0e1f2a3b4c5d6e7f8a9b0c1d", "name": "CI/CD DevOps", "price": "$3600" },

//   // $1500 Group (6 docs)
//   { "_id": "7f8a9b0c1d2e3f4a5b6c7d8e", "name": "Jest Testing", "price": "$1500" },
//   { "_id": "3a4b5c6d7e8f9a0b1c2d3e4f", "name": "Cypress Testing", "price": "$1500" },
//   { "_id": "9b0c1d2e3f4a5b6c7d8e9f0a", "name": "Unit Testing", "price": "$1500" },
//   { "_id": "5c6d7e8f9a0b1c2d3e4f5a6b", "name": "E2E Testing", "price": "$1500" },
//   { "_id": "1d2e3f4a5b6c7d8e9f0a1b2c", "name": "React Performance", "price": "$1500" },
//   { "_id": "8e9f0a1b2c3d4e5f6a7b8c9d", "name": "Next.js Framework", "price": "$1500" }
// ])



// ARRAY USED OPERATORS

// $ALL OPERATOR

// db.Col1.insertOne({
//   "tutors": ["CodeWithHarry", "Akshat"]
// })

// try {
//   const a = db.Col1.find({
//     "tutors": {
//       $all: ["CodeWithHarry", "Akshat"]
//     }
//   });
//   console.log(a.);
// } catch (error) {
//   console.error(error);
// }

// $ELEMATCH OPERATOR

// db.Col1.insertMany([
//   // === USERS ===
//   { name: "Alice", age: 25, tags: ["dev", "js"], city: "Delhi", score: 85, active: true, skills: ["Node.js", "React"], joined: ISODate("2024-01-15") },
//   { name: "Bob", age: 30, tags: ["dev", "python"], city: "Mumbai", score: 92, active: true, skills: ["Python", "Django"], joined: ISODate("2024-02-20") },
//   { name: "Charlie", age: 22, tags: ["student"], city: "Delhi", score: 78, active: false, skills: ["JavaScript"], joined: ISODate("2024-03-10") },
//   { name: "Diana", age: 28, tags: ["dev", "js"], city: "Bangalore", score: 88, active: true, skills: ["Node.js", "MongoDB"], joined: ISODate("2024-01-25") },
  
//   // === ORDERS ===
//   { orderId: "ORD001", amount: 1500, status: "completed", items: ["laptop", "mouse"], customer: "Alice", date: ISODate("2024-04-01") },
//   { orderId: "ORD002", amount: 800, status: "pending", items: ["phone"], customer: "Bob", date: ISODate("2024-04-02") },
//   { orderId: "ORD003", amount: 2500, status: "completed", items: ["laptop", "keyboard"], customer: "Diana", date: ISODate("2024-04-03") },
  
//   // === PRODUCTS ===
//   { productId: "P001", name: "iPhone 15", category: "mobile", price: 79999, stock: 50, tags: ["premium", "new"], rating: 4.5 },
//   { productId: "P002", name: "MacBook Pro", category: "laptop", price: 159999, stock: 25, tags: ["premium"], rating: 4.8 },
//   { productId: "P003", name: "Samsung TV", category: "tv", price: 45000, stock: 100, tags: ["budget"], rating: 4.2 },
  
//   // === BOOKS ===
//   { title: "MongoDB Basics", author: "John Doe", pages: 350, genre: "tech", published: 2023, isbn: "1234567890" },
//   { title: "Node.js Guide", author: "Jane Smith", pages: 420, genre: "tech", published: 2024, isbn: "0987654321" },
  
//   // === ARRAY VARIATIONS ===
//   { tutors: ["CodeWithHarry", "Akshat"], subjects: ["JS", "Node", "Mongo"], ratings: [4.5, 4.8, 4.2] },
//   { tutors: ["CodeWithHarry"], subjects: ["JS"], ratings: [4.9] },
//   { tutors: ["Akshat", "CodeWithHarry", "Harry"], subjects: ["Node", "Python"], ratings: [4.0, 4.5] },
  
//   // === GEOSPATIAL ===
//   { name: "Delhi Office", location: { type: "Point", coordinates: [77.2090, 28.6139] }, type: "office" },
//   { name: "Mumbai Office", location: { type: "Point", coordinates: [72.8777, 19.0760] }, type: "office" },
  
//   // === NESTED DOCUMENTS ===
//   { student: { name: "Ravi", grade: "A", scores: { math: 95, science: 88 } }, class: 10 },
//   { student: { name: "Priya", grade: "B", scores: { math: 82, science: 90 } }, class: 10 },
  
//   // === DIVERSE DATA TYPES ===
//   { binaryData: BinData(0, "abc123"), mixed: { num: 123, str: "hello", bool: true, arr: [1,2,3], null: null } },
  
//   // === 50+ MORE FOR OPERATOR PRACTICE ===
//   { age: 18, status: "active", dept: "IT", salary: 30000 },
//   { age: 35, status: "inactive", dept: "HR", salary: 45000 },
//   { age: 29, status: "active", dept: "IT", salary: 60000 },
//   { age: 42, status: "active", dept: "Finance", salary: 75000 },
//   { age: null, status: "pending", dept: "Marketing", salary: 0 },
//   { hobbies: ["coding", "chess"], level: "intermediate" },
//   { hobbies: ["music", "coding"], level: "advanced" },
//   { hobbies: ["chess"], level: "beginner" },
//   { products: ["P001", "P002"], total: 239998 },
//   { products: ["P003"], total: 45000 },
//   { timestamp: ISODate("2024-01-01T10:00:00Z") },
//   { timestamp: ISODate("2024-01-02T15:30:00Z") },
//   { size: "large", color: "blue", available: true },
//   { size: "medium", color: "red", available: false },
//   { priority: 1, category: "urgent" },
//   { priority: 3, category: "low" },
//   { email: "user1@example.com", verified: true },
//   { email: "user2@example.com", verified: false },
//   { type: "premium", points: 1500 },
//   { type: "basic", points: 250 },
//   { version: 1.0, active: true },
//   { version: 2.5, active: false },
//   { department: { id: 101, name: "Engineering" } },
//   { department: { id: 102, name: "Sales" } },
//   { cart: [{ item: "P001", qty: 2 }, { item: "P002", qty: 1 }] },
//   { cart: [{ item: "P003", qty: 3 }] },
//   { languages: ["English", "Hindi"], proficiency: "fluent" },
//   { languages: ["Hindi"], proficiency: "native" },
//   { score: { final: 92, midterm: 88 }, passed: true },
//   { score: { final: 75, midterm: 82 }, passed: false },
//   { tags: { frontend: ["React", "Vue"], backend: ["Node"] } },
//   { tags: { frontend: ["Angular"], backend: [] } },
//   { visits: [ISODate("2024-01-01"), ISODate("2024-01-03"), ISODate("2024-01-05")] },
//   { visits: [ISODate("2024-01-02"), ISODate("2024-01-04")] },
//   { inventory: { stock: 100, min: 10, max: 500 } },
//   { inventory: { stock: 5, min: 10, max: 100 } },
//   { metadata: { created: ISODate(), updated: null } },
//   { metadata: { created: ISODate("2024-01-01"), updated: ISODate("2024-01-10") } }
// ]);

// async function runQuery() {
//   try {
//     const bud = db.Col1.find({ results: { $elemMatch: { "product" : "xyz", "score" : { $gte : 5} } } });
//     const b = await bud.toArray();
//     console.log(b);
//   } catch (e) {
//     console.error(e);
//   }
// }

// runQuery(); // call the async function



// Comparison Operators


// $eq

// try {
//     const c = db.Col1.find({age : {$eq : 29}})
//     console.log(c);
    
// } catch (e) {
//     console.error(e);
// }


// $gt 

// try {
//     const c = db.Col1.find({age : {$gt : 29}})
//     console.log(c);
    
// } catch (e) {
//     console.error(e);
// }

// // gte

// try {
//     const c = db.Col1.find({age : {$gte : 29}})
//     console.log(c);
    
// } catch (e) {
//     console.error(e);
// }


// // in {equal}

// try {
//     const c = db.Col1.updateOne(
//         {tutors : {$in: ['CodWithHarry','Akshat']}},
//         {$set: {sold : true}}
//     )
//     console.log(c);
    
// } catch (e) {
//     console.error(e);
// }


// lt

// try {
//     const c = db.Col1.find({age : {$lt : 29}})
//     console.log(c.count());
    
// } catch (e) {
// //     console.error(e);
// // }

// // lte

// try {
//     const c = db.Col1.find({age : {$lte : 29}})
//     console.log(c.count());
    
// } catch (e) {
//     console.error(e);
// }


// // ne

// try {
//     const c = db.Col1.find({age : {$ne : 29}})
//     console.log(c.count());
    
// } catch (e) {
//     console.error(e);
// }


// TYPE

// let d = db.Col1.find({price : {$type : "string"}})
// console.log(d);



//Boolean Operators

// $and

// let e = db.Col1.find({ price: { $in: ["$3200", "$2500"] } });
// console.log(e.toArray());  // toArray() returns a Promise; use await in async context

// //nor
// let f = db.Col1.find({ price: { $nor: ["$3200", "$2500"] } });
// console.log(f.toArray());  // toArray() returns a Promise; use await in async context

// //or
// let g = db.Col1.find({ price: { $or: ["$3200", "$2500"] } });
// console.log(g.toArray());  // toArray() returns a Promise; use await in async context

//not
// let h = db.Col1.find({ amount: { $not: {$gt : 1000} } });
// console.log(h.toArray());  // toArray() returns a Promise; use await in async context