function handleSubmit(event) {
  // preventDefault required
  event.preventDefault();

  // check what text was put into the form field
  let url = document.getElementById("name").value;
  console.log(url);
  // check validity of url
  let validity = Client.checkURL(url);

if(validity){
  Client.getWeatherData(url).then(function (data) {
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

export { handleSubmit };
