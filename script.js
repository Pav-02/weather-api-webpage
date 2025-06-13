// API key for OpenWeatherMap
const apiKey = "bd375776c9bca9f2203064ad87b46dc4";

// Function to get weather data
async function getWeather() {
  const cityInput = document.getElementById("city");
  const city = cityInput.value.trim();
  const weatherResult = document.getElementById("weatherResult");
  
  if (!city) {
    weatherResult.innerHTML = "<p style='color: red;'>Please enter a city name</p>";
    return;
  }
  
  weatherResult.innerHTML = "<p>Loading...</p>";
  
  try {
    // Using a free API that doesn't require API key for basic functionality
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    
    if (!response.ok) {
      throw new Error("City not found or API error");
    }
    
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherResult.innerHTML = `<p style='color: red;'>${error.message}</p>`;
  }
}

// Function to display weather data
function displayWeather(data) {
  const weatherResult = document.getElementById("weatherResult");
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const weatherDescription = data.weather[0].description;
  const icon = data.weather[0].icon;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const cityName = data.name;
  const country = data.sys.country;
  
  weatherResult.innerHTML = `
    <div class="weather-card">
      <h2>${cityName}, ${country}</h2>
      <div class="weather-info">
        <div class="weather-temp">${temp}°C</div>
        <div>
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${weatherDescription}">
          <p>${weatherDescription}</p>
        </div>
      </div>
      <div class="weather-details">
        <p>Feels like: ${feelsLike}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind speed: ${windSpeed} m/s</p>
      </div>
    </div>
  `;
}

// Allow Enter key to trigger the search
document.getElementById("city").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    getWeather();
  }
});