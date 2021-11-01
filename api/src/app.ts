"use strict";

import { cacheMiddleware } from "./Middleware/cache";

const express = require("express");
const fetchNode = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 4000;

const baseUrl = 'http://www.omdbapi.com/'
const apiKey = 'af5a42aa';

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration


app.get("/movies/search/:title", cacheMiddleware(1200), (req, res) => {  
  const title = req.params.title
  fetchNode(`${baseUrl}?s=${title}&apikey=${apiKey}`)
    .then(res => res.json())
    .then(json => { res.status(200).send(json) })
    .catch(error => {
      console.error(error);
      res.status(400).send(error);
    });
});


app.listen(PORT, () => console.log(`Server up and running on ${PORT}`));