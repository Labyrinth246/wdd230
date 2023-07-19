async function fetchCurrentWeatherData() {
  try {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=004fbdf69e3f2d633b1e0fee1166eacb');
    const data = await response.json();

    const currentTempElement = document.getElementById('currentTempValue');
    const conditionsElement = document.getElementById('conditions');
    const weatherImageElement = document.getElementById('weatherImage');
    const humidityValueElement = document.getElementById('humidityValue');

    currentTempElement.textContent = Math.round(data.main.temp);
    weatherImageElement.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    conditionsElement.textContent = data.weather[0].description;
    humidityValueElement.textContent = data.main.humidity;
  } catch (error) {
    console.log('An error occurred while fetching the current weather data:', error);
  }
}

async function fetchForecastData() {
  try {
    const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&cnt=8&appid=004fbdf69e3f2d633b1e0fee1166eacb');
    const data = await response.json();

    const forecastContainer = document.getElementById('forecastContainer');
    forecastContainer.innerHTML = '';

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    let dayCount = 0;

    for (const forecast of data.list) {
      const date = new Date(forecast.dt * 1000);
      date.setHours(0, 0, 0, 0);

      if (date.getTime() === currentDate.getTime()) {
        continue;
      }

      const temp = forecast.main.temp;

      const forecastItem = document.createElement('div');
      forecastItem.classList.add('forecastItem');

      const dateElement = document.createElement('h4');
      dateElement.textContent = getDateString(date);
      forecastItem.appendChild(dateElement);

      const tempElement = document.createElement('p');
      tempElement.textContent = `${Math.round(temp)}°F`;
      forecastItem.appendChild(tempElement);

      forecastContainer.appendChild(forecastItem);

      dayCount++;
      if (dayCount === 3) {
        break;
      }
    }
  } catch (error) {
    console.log('An error occurred while fetching the forecast data:', error);
  }
}


function getDateString(date) {
  const options = { month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Call the functions to fetch weather data and forecast data
fetchCurrentWeatherData();
fetchForecastData();

