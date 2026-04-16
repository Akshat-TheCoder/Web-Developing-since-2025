import mongoose from "mongoose";
const { Schema } = mongoose;

const EmployeesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: (v) => v.length > 0 && v.length <= 100,
    default: "Anonymous",
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 100,
    get: (v) => Math.floor(v),
    set: (v) => Math.round(v),
  },
  salary: {
    type: Number,
    required: true,
  },
  isManager: {
    type: Boolean,
    default: false,
  },
  language: {
    type: String,
  },
  city: {
    type: String,
  },
});

export const Employees = mongoose.model("Employees", EmployeesSchema);
