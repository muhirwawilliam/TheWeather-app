
const apiKey = "4a0992963345759a2bb28de01cb49e09"; // Your API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Brussels&units=metric&appid=" + apiKey; // Complete API URL

async function checkWeather() {
  const response = await fetch(apiUrl = '&appid={apiKey}');
  var date = await response.json();

  console.log(date);
}
