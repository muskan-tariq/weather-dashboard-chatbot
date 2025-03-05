document.getElementById('send-chatbot').addEventListener('click', handleChatbot);

async function handleChatbot() {
  const userQuery = document.getElementById('chatbot-input').value;
  const chatbotOutput = document.getElementById('chatbot-output');
  const geminiApiKey = 'AIzaSyD7qDlXSGHUTHFlygj61gVEya71ZouWboQ'; // Inserted your Gemini API key
  const openWeatherApiKey = '086b111211145d426568e2dcd0485c69'; // Replace with your OpenWeather API key

  // Detect if the user is asking for weather
  if (userQuery.toLowerCase().includes('weather')) {
    await handleWeatherQuery(userQuery, chatbotOutput, openWeatherApiKey);
  } else {
    await handleGeneralQuery(userQuery, chatbotOutput, geminiApiKey);
  }

  // Clear the input
  document.getElementById('chatbot-input').value = '';
}

// Function to handle weather-related queries
async function handleWeatherQuery(userQuery, chatbotOutput, openWeatherApiKey) {
  try {
    // Extract city name from the user query (you can customize this logic)
    const city = extractCityFromQuery(userQuery);

    // Fetch weather data
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}&units=metric`;
    const response = await fetch(weatherUrl);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`City ${city} not found.`);
    }

    // Display the weather data
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    chatbotOutput.innerHTML += `<p>User: ${userQuery}</p>`;
    chatbotOutput.innerHTML += `<p>Bot: The current weather in ${city} is ${weatherDescription} with a temperature of ${temperature}°C, humidity of ${humidity}%, and wind speed of ${windSpeed} m/s.</p>`;
  } catch (error) {
    chatbotOutput.innerHTML += `<p>Sorry, I couldn't retrieve the weather for your query.</p>`;
  }
}

// Function to handle general queries using Gemini API
async function handleGeneralQuery(userQuery, chatbotOutput, geminiApiKey) {
  try {
    // Gemini API request
    const response = await fetch('https://gemini-api-url-here', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${geminiApiKey}`, // Using Gemini API key here
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        input: userQuery,
        lang: 'en',
        sessionId: 'weather-dashboard-session'
      })
    });

    const data = await response.json();
    const botResponse = data.output;

    chatbotOutput.innerHTML += `<p>User: ${userQuery}</p>`;
    chatbotOutput.innerHTML += `<p>Bot: ${botResponse}</p>`;
  } catch (error) {
    chatbotOutput.innerHTML += `<p>Sorry, I couldn't process your request. Try again.</p>`;
  }
}

// Helper function to extract the city name from the user query (you can improve this based on your need)
function extractCityFromQuery(query) {
  const words = query.split(' ');
  const cityIndex = words.indexOf('weather') + 1;
  return cityIndex < words.length ? words[cityIndex] : 'unknown city';
}
