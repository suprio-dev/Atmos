// https://api.openweathermap.org/data/2.5/weather?q=Kolkata,in&units=metric&appid=YOUR_API_KEY



let weatherForm = document.querySelector("#weatherForm");
let cityInput = document.querySelector("#cityInput");
let cityName = document.querySelector("#cityName");
let temperature = document.querySelector("#temperature");
let weatherCondition = document.querySelector("#weatherCondition");
let feelsLike = document.querySelector("#feelsLike");
let highTemp = document.querySelector("#highTemp");
let lowTemp = document.querySelector("#lowTemp");
let humidity = document.querySelector("#humidity");
let windSpeed = document.querySelector("#windSpeed");
let visibility = document.querySelector("#visibility");
let pressure = document.querySelector("#pressure");
let cloudiness = document.querySelector("#cloudiness");
let windGust = document.querySelector("#windGust");
let sunrise = document.querySelector("#sunrise");
let sunset = document.querySelector("#sunset");
let windDirection = document.querySelector("#windDirection");
let weatherSummary = document.querySelector("#weatherSummary");
let weatherIcon = document.querySelector("#weatherIcon");
let humidityBar = document.querySelector("#humidityBar");
let currentDate = document.querySelector("#currentDate");
let loadingOverlay = document.querySelector("#loadingOverlay");
let nameOfCity;


weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  nameOfCity = cityInput.value.trim();
  cityInput.value = "";
  if (!nameOfCity)
    return;
  setTimeout(() => {
    searchCity(encodeURIComponent(nameOfCity));
  }, 5000);
  loadingOverlay.classList.remove("hidden");
  // foreCast(encodeURIComponent(nameOfCity));
})


async function searchCity(city) {
  loadingOverlay.classList.add("hidden");
  try {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=62abd4698f2754971327ba4655a735c3`)
    let data = await response.json();
    // console.log(data);
    displayWeather(data);
  } catch (error) {
    cityName.textContent = `⚠️ Unable to fetch weather data.`;
  }
}


function getDirection(deg) {
  if (deg === undefined)
    return "--";
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return directions[Math.round(deg / 45) % 8] + ` (${deg}°)`;
}

function displayWeather(data) {
  cityName.textContent = `${data.name}, ${data.sys.country}`;
  temperature.innerHTML = `<span class="text-[6.5rem] font-semibold leading-none tracking-[-.085em] sm:text-[8.5rem]">
              ${Math.round(data.main.temp)}
            </span>
            <span class="mt-2 text-3xl font-light text-indigo-300 sm:mt-4 sm:text-4xl">°C</span>`;
  weatherSummary.textContent = data.weather[0].description;
  feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
  highTemp.textContent = `${Math.round(data.main.temp_max)}°C`;
  lowTemp.textContent = `${Math.round(data.main.temp_min)}°C`;
  humidity.textContent = `${data.main.humidity}%`;
  windSpeed.textContent = `${(data.wind.speed * 3.6).toFixed(1)} km/h`;
  windDirection.textContent = `Direction: ${getDirection(data.wind.deg)}`;
  visibility.textContent = `${(data.visibility / 1000).toFixed(1)} km`;
  pressure.textContent = `${data.main.pressure} hPa`;
  cloudiness.textContent = `${data.clouds.all}%`;
  windGust.textContent = data.wind.gust ? `${(data.wind.gust * 3.6).toFixed(1)} km/h` : "N/A";
  sunrise.textContent = formatTime(data.sys.sunrise, data.timezone);
  sunset.textContent = formatTime(data.sys.sunset, data.timezone);
  weatherCondition.textContent = "☁️ Weather conditions now...";
  weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="Current weather icon"
              class="h-full w-full object-contain drop-shadow-[0_0_35px_rgba(129,140,248,.28)]">`;
  humidityBar.style.width = `${data.main.humidity}%`;
}


function formatTime(unix, offset) {
  return new Date((unix + offset) * 1000).toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// async function foreCast(city) {
//   try {
//     let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=62abd4698f2754971327ba4655a735c3`)
//     let data = await response.json();
//     console.log(data);
//     displayWeather(data);
//   } catch (error) {

//   }
// }

navigator.geolocation.getCurrentPosition(
  (position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    getWeatherbyLocation(lat, lon);
  },
  (error) => {
    console.log("Location access Denied !");
  }
);


async function getWeatherbyLocation(lat, lon) {
  try {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=62abd4698f2754971327ba4655a735c3`)
    let data = await response.json();
    // console.log(data);
    displayWeather(data);
  } catch (error) {
    cityName.textContent = `⚠️ Unable to fetch weather data.`;
  }
}

setInterval(function () {

  let date = new Date();
  let current_date = date.getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let current_month = months[date.getMonth()];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let current_day = days[date.getDay()];
  let current_year = date.getFullYear();
  currentDate.textContent = `${current_day}, ${current_month} ${current_date}, ${current_year}`
}, 1000);