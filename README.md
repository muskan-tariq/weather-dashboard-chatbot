Weather Dashboard with Chatbot
This project is a Weather Dashboard application integrated with a Gemini chatbot. It allows users to:

Retrieve current weather data for a city using the OpenWeather API.
Get a 5-day weather forecast.
Ask general questions to a Gemini AI chatbot and receive responses.
Detect weather-related queries in the chatbot, fetching weather data accordingly.
Features
Weather Search: Enter a city name to retrieve current weather and a 5-day forecast.
Chatbot: Interact with the chatbot for both weather and general queries.
Interactive Charts: Visualize the temperature and other weather data using charts.
Responsive UI: Built with TailwindCSS for a modern, responsive design.
Technologies Used
HTML5, CSS3, JavaScript (ES6)
TailwindCSS for styling
Chart.js for visualizing data
OpenWeather API for weather data
Gemini API for chatbot interactions
Prerequisites
Before running the project locally, you need:

A web browser
Node.js and npm installed on your machine
An OpenWeather API Key (Sign up at OpenWeather)
A Gemini API Key (Register at Google AI Studio)
Getting Started
1. Clone the Repository
git clone https://github.com/your-username/weather-dashboard-chatbot.git
cd weather-dashboard-chatbot
2. Install Dependencies
There are no major dependencies beyond basic HTML/CSS/JS. However, if you want to run a local server:
npm install
3. Get API Keys
OpenWeather API: Obtain your API key from OpenWeather.
Gemini API: Obtain your Gemini API key from Google AI Studio.
4. Add API Keys
Open js/chatbot.js in a text editor.
Replace the following placeholders with your actual API keys:
const geminiApiKey = 'AIzaSyD7qDlXSGHUTHFlygj61gVEya71ZouWboQ'
const openWeatherApiKey = '086b111211145d426568e2dcd0485c69';
5. Running the Application
You can run this project in two ways:

A. Using a simple HTTP server:
1.Install a simple HTTP server via npm (if not already installed):
npm install -g http-server
2.Run the server:
http-server
3.Open the project in your web browser at http://localhost:8080.
B. Open index.html directly:
Open the index.html file in your browser by double-clicking it.
6. Using the Weather Dashboard
Type the city name in the input field and click "Get Weather" to view current weather data and a 5-day forecast.
You can also ask the chatbot general questions or weather-related queries by typing in the chatbot input field and clicking "Send."
Project structures:
├── css/                # CSS styles
├── images/             # Image assets (e.g., background images)
├── js/                 # JavaScript files
│   ├── app.js          # Handles weather API requests and chart updates
│   ├── charts.js       # Manages Chart.js integration
│   └── chatbot.js      # Manages chatbot and API interactions
├── index.html          # Main HTML structure
└── README.md           # Project README file

