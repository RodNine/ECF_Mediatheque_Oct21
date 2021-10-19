const express = require("express");
const server = express();
const morgan = require("morgan");
const router = require("./routeur");
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/mediatheque", {useNewUrlParser:true,useUnifiedTopology:true});

const livreModel=require("./models/livres.models")



server.use(express.static("public"))
server.use(morgan("dev"));
server.use("/", router);



server.listen(3000);

