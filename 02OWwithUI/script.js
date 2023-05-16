function getWeatherData() {
  const apiKey = '1b0d4e056d91c25a4fe8658fd55f3f06';
  const cityInput = document.getElementById('cityInput');
  const cityName = cityInput.value;

  if (cityName === '') {
    alert('Please enter a city name!');
  }

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  axios
    .get(url)
    .then((response) => {
      const weatherData = response.data;
      displayWeatherData(weatherData);
    })
    .catch((error) => {
      console.log('Error:', error);
    });

  function displayWeatherData(data) {
    const weatherDataContainer = document.getElementById('weatherData');

    weatherDataContainer.innerHTML = `
    <p>Temperature: ${data.main.temp} °C </p>
    <p>Humidity: ${data.main.humidity} % </p>
    <p>Atmospheric Pressure: ${data.main.pressure} hPa</p>
    <p>Weather Description: ${data.weather[0].description}</p>

    `;
  }
}
