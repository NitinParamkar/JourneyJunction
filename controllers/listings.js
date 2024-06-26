const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index=async (req, res) => {           // this is creation of api. data.js ka data aa jaye ga
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });  // we are passing allListings to index.ejs file
  };

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
  }

module.exports.showListing = async (req, res) => { 
    let { id } = req.params;    //it means we extract id from the link itself
    const listing = await Listing.findById(id).populate({path: "reviews", populate:{path:"author",},}).populate("owner");
    if(!listing){
      req.flash("error", "The Destination that you requested for, does not exists!");
      res.redirect("/listings");
    }else{
    res.render("listings/show.ejs", { listing });
    }
  };


module.exports.createListing = async (req, res, next) => {

  let response = await geocodingClient.forwardGeocode({
    query: req.body.listing.location,
    limit: 1,
  })
    .send()
    

    let url = req.file.path;
    let filename  = req.file.filename;
    
    const newListing = new Listing(req.body.listing); // here we created listing object. it is equivalent to  let{title, description, image, price, country, location} = req.body;
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    newListing.geometry =  response.body.features[0].geometry;
    let savedListing = await newListing.save();
    //console.log(savedListing);
    req.flash("success", "New Destination Created!");
    res.redirect("/listings");
  };

module.exports.renderEditForm = async (req, res) => { //we use wrapAsync to handle errors (try-catch ka kaam)
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
      req.flash("error", "The Destination that you requested for, does not exists!");
      res.redirect("/listings");
    }else{
      let originalImageUrl = listing.image.url;
      originalImageUrl = originalImageUrl.replace("/upload","/upload/h_200,w_250");
      res.render("listings/edit.ejs", { listing, originalImageUrl });
    }
  };

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    
    if(typeof req.file != "undefined"){
    let url = req.file.path;
    let filename  = req.file.filename;
    listing.image = { url , filename };
    await listing.save();
    }
    req.flash("success", "Destination Updated!");
    res.redirect(`/listings/${id}`);
  
  };

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Destination Deleted!");
    res.redirect("/listings");
  };