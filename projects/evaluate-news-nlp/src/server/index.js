const dotenv = require("dotenv");
dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);

const fetch = require("node-fetch");

var path = require("path");
var bodyParser = require('body-parser');

const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

const app = express();

app.use(express.static("dist"));
app.use(bodyParser.json());


console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("dist/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// POST route to speak between MeaningCloud and this app
app.post("/language", async (req, res) => {
  let data = req.body;
  console.log(data);

  const requestOptions = {
    method: "POST",
  };
  console.log(requestOptions);
  const apiKey = process.env.API_KEY;
  //const userInput = data.sentence;
  const userInput = "https://www.google.com/";

  let status;

  const result = await fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${userInput}&lang=en`,
    requestOptions
  ).then(response => {
    status = response.status;
    return response.json()
})
.then(response => {
  console.log(response);
   return {
       response: response,
       status: status
   }
})
  .then(response => res.send(response))
  
});

// API CALL CODE
/*
const formdata = new FormData();
formdata.append("key", "630b070847ed36d6703cfdf5c82e5a02");
formdata.append("txt", "YOUR TEXT HERE");
formdata.append("lang", "en"); // 2-letter code, like en es fr ...

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow",
};

const response = fetch(
  "https://api.meaningcloud.com/sentiment-2.1",
  requestOptions
)
  .then((response) => ({
    status: response.status,
    body: response.json(),
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch((error) => console.log("error", error));
*/
