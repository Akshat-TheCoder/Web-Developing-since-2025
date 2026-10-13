const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  city: String,
  language: String,
  isManager: Boolean,
});
const Employees = mongoose.model("Employees", EmployeeSchema);

module.exports = Employees;
