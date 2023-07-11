async function fetchWeatherData() {
    try {
      const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Fayetteville&units=imperial&appid=004fbdf69e3f2d633b1e0fee1166eacb');
      const data = await response.json();
  

      const tempElement = document.getElementById('temp');
      const conditionElement = document.getElementById('conditions');
      const weatherImageElement = document.getElementById('weatherImage');
      const windSpeedElement = document.getElementById('windSpeed');
      const windChillElement = document.getElementById('result');
  
      
      tempElement.textContent = Math.round(data.main.temp);
      conditionElement.textContent = data.weather[0].description;
      weatherImageElement.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      windSpeedElement.textContent = data.wind.speed.toFixed(2);
  
      if (data.main.temp <= 50 && data.wind.speed >= 3) {
        const windChill = calculateWindChill(data.main.temp, data.wind.speed);
        windChillElement.textContent = Math.round(windChill);
      } else {
        windChillElement.textContent = 'N/A';
      }
    } catch (error) {
      console.log('An error occurred while fetching the weather data:', error);
    }
  }
  
  function calculateWindChill(temperature, windSpeed) {
    const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return windChill;
  }
  
  fetchWeatherData();
  