
const apiKey = "4a0992963345759a2bb28de01cb49e09"; // Your API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Brussels&units=metric&appid=" + apiKey; // Complete API URL

async function checkWeather(city) {
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const apiKey = '4a0992963345759a2bb28de01cb49e09';
  const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
  const data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML = Math.round(data.main.temp - 273.15) + "°C"; // Convert from Kelvin to Celsius
  document.querySelector(".rain").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds"){

    weatherIcon.src = "img/cloudy.png";
  }
  else if (data.weather[0].main == "Rain"){
    weatherIcon.src = "img/rain.png";
  }
  else if (data.weather[0].main == "Snow"){
    weatherIcon.src = "img/snow.png";
  }
  else if (data.weather[0].main == "Sun"){
    weatherIcon.src = "img/sun.png";
  }
}

const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".weather-icon");

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// Call the function with a default city if needed
checkWeather('Brussels');
