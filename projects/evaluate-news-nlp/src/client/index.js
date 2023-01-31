import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";

//import fetch from "node-fetch";
//const fetch = require("node-fetch");

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

//console.log(checkForName);

//alert("I EXIST");
//console.log("CHANGE!!");

// to post data to server
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    //convert response to json and return from function
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

//postData("/language", { sentence: "test sentence" });

export { checkForName, handleSubmit };
