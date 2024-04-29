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
// if (!dbUrl) {
//   console.error("ATLASDB_URL is not defined in the environment variables.");
//   process.exit(1); 
// }

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



// <---------The following code snippet is utilized to display cropped images upon rendering the edit.js file. --------->

// const initDB = async () => {
//   try {
//     //To clear existing listings before inserting new ones
//     await Listing.deleteMany({});

//     // Map over the initData data and add the owner field
//     initData.data = initData.data.map((obj) => ({ ...obj, owner:  process.env.ATLAS_ADMIN }));

//     // Iterate through the initData data and upload images to Cloudinary
//     const listingsWithCloudinaryImages = await Promise.all(
//       initData.data.map(async (listingData) => {
//         // Extract the image data from the listingData
//         const { image, ...rest } = listingData;

//         try {
//           // Ensure that `image` is structured as expected
//           const imageData = image && image.url ? image.url : null;

//           if (!imageData) {
//             throw new Error('Image data is missing or invalid.');
//           }

//           // Use Cloudinary's `upload` function to upload the image directly
//           const cloudinaryImage = await cloudinary.uploader.upload(imageData, {
//             folder: 'wanderlust_DEV',
//             allowed_formats: ["png", "jpg", "jpeg"],
//           });

//           // Create a new listing object with Cloudinary image URL
//           const listingWithImage = {
//             ...rest,
//             image: {
//               url: cloudinaryImage.url,
//               filename: cloudinaryImage.original_filename,
//             },
//             owner: process.env.ATLAS_ADMIN,
//           };

//           return listingWithImage;
//         } catch (uploadError) {
//           console.error('Error uploading image to Cloudinary:', uploadError);
//           throw uploadError; // Rethrow the error to propagate it to the outer catch block
//         }
//       })
//     );

//     // Insert the listings with Cloudinary images into the database
//     let listings = await Listing.insertMany(listingsWithCloudinaryImages);

//     console.log("Data was initialized with Cloudinary images");
//   } catch (error) {
//     console.error('Error in initDB:', error);
//   }
// };


// initDB();