const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const path = require("path");

const Employees = require("./models/Employees");

mongoose
  .connect("mongodb://127.0.0.1:27017/newCompany")
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB error:", err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/test", (req, res) => {
  res.json({
    message: "Server is working!",
  });
});

const GetRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

let randomNames = ["Akshat", "Riya", "Saumya", "Ranu"];

let randomSalary = [200000, 23000000, 324000, 984305, 47];

let randomCity = ["Pratapgarh", "Gorakhpur", "Delhi", "Aminabad"];

let randomManager = [true, false];

let randomLanguage = [
  "Hindi",
  "English",
  "Math",
  "Urdu",
  "Marathi",
  "Bhojpuri",
  "Bengali",
  "Tamil",
];

app.get("/generate-many", async (req, res) => {
  try {
    console.log("Generate button clicked");

    // Delete previous employees
    await Employees.deleteMany({});

    console.log("Old employees deleted");

    // Generate 10 employees
    let records = [];

    for (let i = 0; i < 10; i++) {
      records.push({
        name: GetRandom(randomNames),
        salary: GetRandom(randomSalary),
        city: GetRandom(randomCity),
        language: GetRandom(randomLanguage),
        isManager: GetRandom(randomManager),
      });
    }

    // Insert new employees
    let inserted = await Employees.insertMany(records);

    console.log("New employees inserted:", inserted.length);

    res.json({
      success: true,
      count: inserted.length,
      employees: inserted,
    });
  } catch (err) {
    console.error("❌ Error:", err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

app.get("/view", async (req, res) => {
  try {
    let allEmployees = await Employees.find();

    res.json({
      total: allEmployees.length,
      employees: allEmployees,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
