function handleSubmit(event) {
  // preventDefault required
  event.preventDefault();

  // check what text was put into the form field
  let url = document.getElementById("name").value;
  console.log(url);
  // check validity of url
  let validity = Client.checkURL(url);

if(validity){
  getWeatherData(url).then(function (data) {
    console.log(data);
    // update ui elements using data from API response
    document.getElementById("results").innerHTML = url;
    document.getElementById("agreement").innerHTML = data.agreement;
    document.getElementById("confidence").innerHTML = data.confidence;
    document.getElementById("irony").innerHTML = data.irony;
    document.getElementById("sample_sentence").innerHTML = data.sentence_list[0].text;
  });
}else {
  window.alert("Please enter a valid url!");
}
console.log("::: Form Submitted :::");
}

const getWeatherData = async (url) => {
  const res = await fetch("/language", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"url": url})
  });
  try {
    // convert data to json format as required
    const data = await res.json();
    //console.log(data);
    if (data.status.code == 0) {
      // continue
      return data;
    } else {
      // advise user of API error
      window.alert("API call returned an error, please check input!");
    }
  } catch (error) {
    console.log("error", error);
  }
};

export { handleSubmit };
