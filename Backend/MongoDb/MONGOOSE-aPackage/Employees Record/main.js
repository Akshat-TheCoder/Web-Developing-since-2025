import mongoose from "mongoose";
import express from "express";
import { Employees } from "./model/Employees.js";
import cors from "cors";

let conn = await mongoose.connect("mongodb://127.0.0.1:27017/company");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

function generateDummyData() {
  const names = [
    "Akshat",
    "Saurya",
    "Aman",
    "Rachit",
    "Satyarth",
    "Siddharth",
    "Kaivalya",
    "Shivam",
    "Vishesh",
    "Yash",
  ];
  const languages = [
    "Python",
    "Javascript",
    "Java",
    "C++",
    "Go",
    "Php",
    "C",
    "C#",
    "BASIC",
  ];
  const cities = [
    "London",
    "New York",
    "Paris",
    "Berlin",
    "Tokyo",
    "Delhi",
    "Mumbai",
    "Ahemdabad",
    "Banglore",
    "Kolkata",
  ];

  return Array.from({ length: 10 }, (_, i) => ({
    name: names[i % names.length],
    salary: Math.floor(Math.random() * 5000000) + 1000000,
    language: languages[Math.floor(Math.random() * languages.length)],
    city: cities[Math.floor(Math.random() * cities.length)],
    isManager: Math.random() > 0.5,
    age: 22 + Math.floor(Math.random() * 25),
  }));
}

app.post("/generate-data", async (req, res) => {
  console.log("POST / generate-data recieved");
  try {
    console.log("Deleteing data...");
    await Employees.deleteMany({});

    console.log("Generating data...");
    const data = generateDummyData();
    console.log("Generated", data.length, "records");

    await Employees.insertMany(data);

    console.log("sending reponse...");
    res.json({
      message: "Dummy data is generated succesfully",
      data,
    });
    console.log("response sent!");
  } catch (error) {
    console.error("error", error.message);
    console.error("stack", error.stack);
    res.status(500).json({
      error: error.message,
    });
  }
});

// Serve your HTML directly from server
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Employee Generator</title>
        <style>body{font-family:Arial;max-width:1200px;margin:50px auto;padding:20px;}</style>
    </head>
    <body>
        <h1>🚀 Employee Data Generator</h1>
        <button onclick="generateData()" style="padding:15px 30px;font-size:18px;background:#007bff;color:white;border:none;border-radius:8px;cursor:pointer;">Generate Data</button>
        <table id="dataTable" style="width:100%;margin-top:20px;border-collapse:collapse;display:none;">
            <thead><tr><th>Name</th><th>Salary</th><th>Language</th><th>City</th><th>Manager</th></tr></thead>
            <tbody id="tableBody"></tbody>
        </table>
        <script>
            function getValueOrNA(v, d='N/A'){return v!=null?v:d;}
            async function generateData(){
                try{
                    const res=await fetch('/generate-data',{method:'POST'});
                    const{data}=await res.json();
                    document.getElementById('tableBody').innerHTML='';
                    data.forEach(e=>{
                        const r=document.createElement('tr');
                        r.innerHTML=\`
                            <td>\${getValueOrNA(e.name)}</td>
                            <td>₹\${Number(getValueOrNA(e.salary,0)).toLocaleString()}</td>
                            <td>\${getValueOrNA(e.language)}</td>
                            <td>\${getValueOrNA(e.city)}</td>
                            <td style="\${getValueOrNA(e.isManager,false)?'color:green;font-weight:bold':''}">
                                \${getValueOrNA(e.isManager,false)?'Yes':'No'}
                            </td>
                        \`;
                        document.getElementById('tableBody').appendChild(r);
                    });
                    document.getElementById('dataTable').style.display='table';
                }catch(e){alert('Error: '+e.message)}
            }
        </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log("Server running on http://localhost:3000");
});
