//initialization ka logic likh rahe hai.
const mongoose = require("mongoose");                  
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({}); // agar database ke aander pahale se kuch data pada hua hai then usse completely clean kardo
  initData.data=initData.data.map((obj)=>({...obj,owner:"6606671bb4074cf5da28c71f"}));
  await Listing.insertMany(initData.data); // data.js se data aa jaye ga.
  console.log("data was initialized");
};

initDB();