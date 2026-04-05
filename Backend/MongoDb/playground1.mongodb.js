
use('Akshat-learnings');

// Insert a few documents into the akshat collection.
db.getCollection('akshat').insertMany([
    { "Consumer-Name": "Akshat", "Mrp": "$23000", "Sold-For": "$20000" },
    { "Consumer-Name": "Priya", "Mrp": "$15000", "Sold-For": "$13200" },
    { "Consumer-Name": "Rahul", "Mrp": "$28000", "Sold-For": "$24500" },
    { "Consumer-Name": "Neha", "Mrp": "$18900", "Sold-For": "$16500" },
    { "Consumer-Name": "Vikram", "Mrp": "$35000", "Sold-For": "$31200" },
    { "Consumer-Name": "Anjali", "Mrp": "$12000", "Sold-For": "$10800" },
    { "Consumer-Name": "Karan", "Mrp": "$42000", "Sold-For": "$37800" },
    { "Consumer-Name": "Sneha", "Mrp": "$17600", "Sold-For": "$15400" },
    { "Consumer-Name": "Amit", "Mrp": "$29500", "Sold-For": "$26500" },
    { "Consumer-Name": "Riya", "Mrp": "$21000", "Sold-For": "$18900" },
    { "Consumer-Name": "Suresh", "Mrp": "$34000", "Sold-For": "$30600" },
    { "Consumer-Name": "Divya", "Mrp": "$14500", "Sold-For": "$12800" },
    { "Consumer-Name": "Rohan", "Mrp": "$26000", "Sold-For": "$23400" },
    { "Consumer-Name": "Meera", "Mrp": "$19800", "Sold-For": "$17300" },
    { "Consumer-Name": "Arjun", "Mrp": "$38000", "Sold-For": "$34200" },
    { "Consumer-Name": "Nikhil", "Mrp": "$31000", "Sold-For": "$27900" },
    { "Consumer-Name": "Shalini", "Mrp": "$22500", "Sold-For": "$20200" },
    { "Consumer-Name": "Gaurav", "Mrp": "$45000", "Sold-For": "$40500" },
    { "Consumer-Name": "Tanya", "Mrp": "$17900", "Sold-For": "$15700" }
]);

// Print a message to the output window.
console.log(`Done inserting Data`);