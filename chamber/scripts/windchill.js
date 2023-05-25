var temp = document.getElementById('temp');
var wind = document.getElementById('windSpeed');
var degree = temp.textContent;
var temperature = Number(degree);
var windS = wind.textContent;
var windSpeed = Number(windS); 

  
if (temperature <= 50 && windSpeed > 3.0) {
    var windChill = calculateWindChillFactor(temperature, windSpeed);
    document.getElementById('result').textContent = windChill;
} else {
    document.getElementById('result').textContent = 'N/A';
}
  
  function calculateWindChillFactor(temperature, windSpeed) {
    var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(0);
  }