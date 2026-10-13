// Operators

//gt: greater than
db.courses2.deleteOne({ price: { $gt: 100 } });

//gte:gt or equal to
db.courses2.deleteOne({ price: { $gte: 1000 } });

//in:inside
db.courses2.updateOne({ name: { $in: ["Neha"] } }, { $set: { lucky: true } });

//lt: less than
db.courses2.deleteOne({ price: { $lt: 40 } });

//lte: lt or equal to
db.courses2.find({ price: { $lte: 20 } });

//nin: not in or it does not exist
let z = db.courses2.find({ ut: { $lt: 40 } });
console.log(z);

//ne:not equal
db.courses2.findOne({ price: { $ne: 60 } });

//all
let d = db.courses2.findOne({ tag: { $all: ["Best", "Good"] } });
console.log(d);

//elemMatch
db.courses2.findOne({
  results: { $elemMatch: { product: "xyz", score: { $gte: 8 } } },
});

//ne:not equal
db.courses2.findOne({ price: { $ne: 60 } });

//and
db.courses2.find({ $and: [{ name: "Neha" }, { mode: "Free course" }] });

//nor
db.courses2.find({$nor:[{price:100},{price:1000}]})

//not
db.courses2.find({price:{$not:{$gt:100}}})

//