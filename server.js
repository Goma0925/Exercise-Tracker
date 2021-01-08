const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

//ENV variables
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Mongo Atlas connection settings.
const uri = process.env.ATLAS_URI;
//useNewUrlParser & useCreateIndex help using newst Atlast features
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", ()=>{
  console.log("MongoDB Connection established");
});

//Routers
const exerciseRouter = require("./routes/exercises");
const userRouter = require("./routes/users");
app.use("/api/exercises", exerciseRouter);
app.use("/api/users", userRouter);

//Static paths
app.use("/app", express.static(path.join(__dirname, "./exer_tracker_client/build")));
app.use("/static", express.static(path.join(__dirname, "./exer_tracker_client/build/static")));

app.listen(port, ()=>{
  console.log("Server is running on", port);
})
