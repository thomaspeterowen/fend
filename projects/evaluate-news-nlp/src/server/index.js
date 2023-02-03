// require dot-env, fetch, path, body-parser modules
const dotenv = require("dotenv");
const fetch = require("node-fetch");
const path = require("path");
const bodyParser = require('body-parser');

// require express, mock-api modules
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);

const app = express();

app.use(express.static("dist"));
app.use(bodyParser.json());

console.log(__dirname);

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

// mock API not in use
app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// POST route to speak between MeaningCloud and this app
app.post("/language", async (req, res) => {
  let data = req.body;
  // data holding url from user
  console.log(data);

  const requestOptions = {
    method: "POST",
  };
  console.log(requestOptions);
  const apiKey = process.env.API_KEY;
  const userInput = data.url;

  // call fetch on API url, then process response and send to client.
  const result = await fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${userInput}&lang=en`,
    requestOptions
  )
  .then(result =>  result.json().then(data => res.send(data)));
  })
