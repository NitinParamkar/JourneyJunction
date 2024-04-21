if(process.env.NODE_ENV!="production"){
    require('dotenv').config();
}



const express = require("express");
const app =  express();
const mongoose = require("mongoose");  
const path = require("path");                // this is required for ejs.
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");  // helps to create many templets and layouts.

const ExpressError=require("./utils/ExpressError.js");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");


const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


const dbUrl = process.env.ATLASDB_URL;
main().then(()=>{                 
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});

async function main(){              // we are connecting with mongoose database
    await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");                    // required for ejs
app.set("views", path.join(__dirname,"views")); // required for ejs
app.use(express.urlencoded({extended: true})); //taki jyo sara data request ke aander aa raha hai wo parse ho paye
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

const store = MongoStore.create({
    mongoUrl: dbUrl, 
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24*3600,
});

store.on("error", ()=>{
    console.log("ERROR in MONGO SESSION STORE", err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7*24*60*60*1000,  //it is in milliseconds.. 7 days ke baad expire ho jayega.
        maxAge: 7*24*60*60*1000,
        httpOnly: true,
    }
};



app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));   //user ko login ya signup karwana
passport.serializeUser(User.serializeUser());               //user se releated info hum store karte hai session me
passport.deserializeUser(User.deserializeUser());       //user se related info unstore karte hai


app.use((req, res, next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// app.get("/demouser", async(req,res)=>{
//    let fakeUser = new User({
//     email: "student@gmail.com",
//     username: "delta-student"
//    });

//    let registeredUser = await User.register(fakeUser, "helloworld");          //we have passed username and pswd. and it automatically checks whether the user is unique
//    res.send(registeredUser);
// })

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);


app.all("*", (req, res, next)=>{            //agar valid api enter nahi kiya gaya then it should show error
  next(new ExpressError(404, "Page not Found!"));
});

app.use((err, req, res, next)=>{
  let {statusCode=500, message="Something went wrong!"} = err;
  res.status(statusCode).render("error.ejs", {message});
});

app.listen(8080, ()=>{          // first this will get runned then main will get runned
    console.log("server is listening to port 8080");
});