//display current day & time
let now = new Date();

let h5 = document.querySelector("h5");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

h5.innerHTML = `${day}  ${hours}:${minutes}`;

//building out the SE to track weather
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");
  let h1 = document.querySelector("#main");

  h1.innerHTML = `${searchInput.value}`;

  searchCity(searchInput.value);
}

function searchCity(city) {
  let apiKey = "35143c749e7f5097cfbe937f7d9a3f62";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let searchForm = document.querySelector("#search-city-form");
searchForm.addEventListener("submit", search);

//Wk 5 Search Engine homework assignment
searchCity("Seattle");

function showTemperature(response) {
  console.log(response.data);
  let temp = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp");
  let description = document.querySelector("#temperature-description");
  let humidityElement = document.querySelector("#humid");
  let wind = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#wind");
  let cityElement = document.querySelector("#main");
  temperatureElement.innerHTML = `${temp}°F`;
  description.innerHTML = response.data.weather[0].main;
  humidityElement.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  windElement.innerHTML = `Wind: ${response.data.wind.speed} mph`;
  cityElement.innerHTML = response.data.name;
}

//Wk 5 Bonus Point
//function showTemp1() {
///let weatherH1 = document.querySelector("#actual-temp");
//let temperature = Math.round(response.data.main.temp);
//weatherH1.innerHTML = temperatureElement;
//let city1 = document.querySelector("#main");
//}

//function getPosition(position) {
//let lat = position.coords.latitude;
//let long = position.coords.longitude;
//let apiKey = "35143c749e7f5097cfbe937f7d9a3f62";
//let units = "metric";
//let endPoint = "https://api.openweathermap.org/data/2.5/weather";
//let apiUrl = `${endPoint}?lat=${lat}&lon=${long}&appid=${apiKey}&units=${units}`;

//axios.get(apiUrl).then(showTemp1);
//}
//function getCurrentPosition() {
//navigator.geolocation.getCurrentPosition(getPosition);
///}

//let button = document.querySelector("#current-button");
//button.addEventListener("click", getCurrentPosition);
