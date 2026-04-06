import mongoose from "mongoose";
import express from "express";
import { Track } from "./model/Track.js";

let conn = await mongoose.connect("mongodb://localhost:27017/ArtistsRecord");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", async (req, res) => {
  const Artists = new Track({
    name: "Jagjit Singh",
    living: false,
    updated: 1234597890,
    age: 98,
    rating: 2430,
    price: 222343400,
    mixed: {
      lyrics: ["Chitthi Na Koi Sandesh"],
      annotations: { God: "Ghazals" },
      timestamps: [0.5, 120],
    }, // Dynamic structure
    duration: 3550, // String format; sets to 355 secs
  });
  await Artists.save();
  res.send(`Artist created ${Artists.name}`);
});
app.get("/artist", async (req, res) => {
  let track = await Track.findOne({});
  res.json({
    name: track.name,
    living: track.living,
    age: track.age,
    rating: track.rating,
    price: track.price,
  });
});

app.listen(port, () => {
  {
    console.log(`You are in a Artistic database`);
  }
});
