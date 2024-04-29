let result = require('dotenv').config({ path: 'C:/WanderLust Project/.env' });
// console.log("dotenv result:", result);
// console.log("Environment variables:", process.env);

const mongoose = require("mongoose");                  
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const multer  = require('multer'); 
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage }) ; 
const cloudinary = require('cloudinary').v2;


const dbUrl = process.env.ATLASDB_URL;
console.log("ATLASDB_URL:", dbUrl); 
if (!dbUrl) {
  console.error("ATLASDB_URL is not defined in the environment variables.");
  process.exit(1); 
}

async function main() {
  try {
    await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to DB");

    // Initialize cloudinary
    cloudinary.config({ 
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET,
    });

    // Initialize database
    await initDB();
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
}

main();

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner:process.env.ATLAS_ADMIN }));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
  } catch (error) {
    console.error("Error initializing data:", error);
  }
};
