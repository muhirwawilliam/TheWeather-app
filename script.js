
const apiKey = "4a0992963345759a2bb28de01cb49e09"; // Your API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Brussels&units=metric&appid=" + apiKey; // Complete API URL

async function checkWeather() {
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Brussels&appid=4a0992963345759a2bb28de01cb49e09';
  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".rain").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";
}

checkWeather(); // Call the function
