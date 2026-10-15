# 🌦️ Atmos

### A weather app built with JavaScript.

A sleek, responsive weather dashboard built with HTML, Tailwind CSS, and JavaScript, powered by the OpenWeather API. Get real-time weather updates, explore detailed weather metrics, and automatically sync weather information with your device's current location.

**Live Demo:** [Atmos](https://suprio-dev.github.io/Atmos/)

---

## ✨ Features

- Search for weather by city name
- Automatically detect device location using browser geolocation
- Display current weather conditions and temperature
- Show feels-like temperature, daily highs, and lows
- Display humidity and wind speed metrics
- Show wind direction, visibility, and atmospheric pressure
- Display cloudiness and wind gust information
- Show sunrise and sunset times
- Fetch weather data dynamically using the OpenWeather API
- Loading indicator while fetching weather data
- Error handling for unsuccessful API requests
- Responsive dashboard layout
- Dark, modern UI with Tailwind CSS

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| Tailwind CSS | Styling and responsive UI |
| JavaScript | Application logic and DOM manipulation |
| OpenWeather API | Real-time weather data |
| Fetch API | Asynchronous API requests |
| Browser Geolocation API | Detect the device's current location |

---

## 🔄 How It Works

```text
Open Atmos
    ↓
Request Device Location
    ↓
Get Latitude & Longitude
    ↓
Fetch Weather Data
    ↓
OpenWeather API
    ↓
Receive Weather Information
    ↓
Display Current Weather
```

Users can also search for a city manually.

```text
Enter City Name
      ↓
Submit Search Form
      ↓
Fetch API Request
      ↓
  OpenWeather API
      ↓
Receive Weather Data
      ↓
Update Dashboard
```

Atmos retrieves weather information from the OpenWeather API and dynamically updates the dashboard using JavaScript. When location access is granted, the application can fetch weather conditions based on the device's current geographical coordinates.

---

## 🌐 API Integration

Atmos uses the **OpenWeather API** to retrieve current weather information.

Example API request:

```js
const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=YOUR_API_KEY`
);

const data = await response.json();
```

For automatic location-based weather, the application can use latitude and longitude:

```js
const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=YOUR_API_KEY`
);

const data = await response.json();
```

The application processes the API response and displays the relevant weather information on the dashboard.

**Note:** Device location access requires browser permission and a supported, secure context, such as HTTPS or localhost.

---

## 🎯 Why I Built It

This project was built to practice working with:

- DOM manipulation
- Event listeners and form submission
- User input and validation
- Fetch API and asynchronous JavaScript
- `async/await`
- Working with JSON data
- API integration and response handling
- Browser Geolocation API
- Latitude and longitude-based requests
- Dynamic DOM updates
- Error handling with `try/catch`
- JavaScript date and time formatting
- Responsive UI design with Tailwind CSS

---

## 🚀 Run Locally

```bash
git clone https://github.com/suprio-dev/Atmos.git
cd Atmos
```

Open `index.html` using VS Code Live Server.

Configure a valid OpenWeather API key in the JavaScript file before running the application.

**Important:** Keep your API key private. Avoid committing a personal API key to a public repository.

---

## 📌 Project Status

**Completed — v1.0**

Built as a hands-on project to strengthen my JavaScript fundamentals and explore API integration, geolocation, asynchronous programming, and responsive web design.

More features may be added as the project evolves.
