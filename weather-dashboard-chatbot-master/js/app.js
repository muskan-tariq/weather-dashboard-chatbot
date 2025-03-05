document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('get-weather').addEventListener('click', fetchWeather);

  async function fetchWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = '086b111211145d426568e2dcd0485c69';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(weatherUrl);
      
      if (!response.ok) {
        throw new Error(`City ${city} not found. Please enter a valid city name.`);
      }

      const data = await response.json();
      displayWeatherData(data);

      // Fetch the 5-day forecast after getting the current weather
      await fetchForecast(city, apiKey);
    } catch (error) {
      console.error('Error fetching weather:', error); // Log the error
      document.getElementById('weather-widget').innerHTML = `<p style="color:red">${error.message}</p>`;
    }
  }

  async function fetchForecast(city, apiKey) {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(forecastUrl);
      
      // Check if the response is OK
      if (!response.ok) {
        throw new Error('Error fetching the forecast. Please try again later.');
      }

      const forecastData = await response.json();
      displayForecast(forecastData);
      // Uncomment the line below if you have a function to update charts
      // updateCharts(forecastData);
    } catch (error) {
      document.getElementById('weather-widget').innerHTML = `<p style="color:red">${error.message}</p>`;
    }
  }

  function displayWeatherData(data) {
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('weather-description').textContent = data.weather[0].description;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
  }

  function displayForecast(data) {
    const tableBody = document.getElementById('forecast-table');
    tableBody.innerHTML = '';

    // Loop through the forecast data to display it in the table
    data.list.forEach((entry, index) => {
      // Only display the data for each day (every 8th entry represents a new day)
      if (index % 8 === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${new Date(entry.dt * 1000).toLocaleDateString()}</td>
          <td>${entry.main.temp}°C</td>
          <td>${entry.weather[0].description}</td>
        `;
        tableBody.appendChild(row);
      }
    });
  }
});
