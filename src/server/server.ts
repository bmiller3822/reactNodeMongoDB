import express from "express";
import cors from "cors";

const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors());

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.get('/', function(req, res){
    res.render("index");
});

server.listen("3000", "localhost", () =>{
    console.info(
    "Express server is listening at http://localhost:3000"
    );
}); 

