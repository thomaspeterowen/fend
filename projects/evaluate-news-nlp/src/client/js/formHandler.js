function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let url = document.getElementById("name").value;
  console.log(url);
  Client.checkForName(url);

  /*console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/test")
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById("results").innerHTML = res.message;
    });
}*/

getWeatherData(url).then(function (data) {
  console.log(data);
  document.getElementById("results").innerHTML = data.main.temp;
});

  console.log("::: Form Submitted :::");
  /*fetch("/language", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sentence: formText }),
  })
    .then((res) => res.json())
.then(function (res) {
      console.log("TOWEN TEST LOG");
      console.log(res.message);
      document.getElementById("results").innerHTML = "TEST TEST";
    });*/

  /*const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
  const apiKey = "&appid=38621e60d3342339ccfb250e31b427a9&units=metric";
  const zip = document.getElementById("name").value + ",de";

  console.log("::: Form Submitted :::");
  console.log(baseURL + zip + apiKey);
  getWeatherData(baseURL, zip, apiKey).then(function (data) {
    document.getElementById("results").innerHTML = data.main.temp;
  });*/
}

const getWeatherData = async (url) => {
  const res = await fetch("/language", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"text": url})
  });
  try {
    // convert data to json format as required
    console.log(res);
    const data = await res.json();
    if (data.cod == 404) {
      // advise user if postal code is not valid
      window.alert("Please enter a valid postal code in Germany!");
    } else {
      return data;
    }
  } catch (error) {
    console.log("error", error);
  }
};

export { handleSubmit };
