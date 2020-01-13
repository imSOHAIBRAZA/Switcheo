require('dotenv').config({path:__dirname+"/keys/app.env"});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require("passport");
const path = require("path");

// Setting up port
// const connUri = process.env.MONGO_CONN_URL;
const connUri = 'mongodb://localhost:27017/switcheo'
let PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

mongoose.promise = global.Promise;
mongoose.connect(connUri, { useNewUrlParser: true ,useCreateIndex:true});

const connection = mongoose.connection;
connection.once('open', () => console.log('MongoDB --  database connection established successfully!'));
connection.on('error', (err) => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    process.exit();
});

// app.use(express.static(__dirname+"/build"));
app.use(express.static(__dirname+"/build"));


app.use(passport.initialize());
require("./middlewares/jwt")(passport);


require("./Routes/index")(app);
app.get("/name",(req,res)=>{
    res.redirect("/home")
})
app.get("/*",(req,res)=>{
    res.sendFile(__dirname+"/build/index.html")
})

app.listen(PORT, () => console.log('Server running on http://localhost:'+PORT+'/'));