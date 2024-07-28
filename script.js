const apiKey = '782193fb4e128ac6aa274ffb1c088226';
const url = "https://api.openweathermap.org/data/2.5/weather?q="; 
const searchButton = document.querySelector('.search-button');
const locationInput = document.querySelector('.location-input');
const weatherIcon = document.querySelector('.weather-icon');

searchButton.addEventListener('click', () => {
    const location = locationInput.value.trim();
    if (location) {
        checkWeather(location);
    } else {
        alert('Please enter a location');
    }
});

async function checkWeather(location) {
    const response = await fetch(`${url}${location}&units=metric&appid=${apiKey}`);
    const data = await response.json();
    
    if (data.cod === 200) {
        document.querySelector(".location-name").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        const weatherCondition = data.weather[0].main.toLowerCase();
        switch (weatherCondition) {
            case "clear":
                weatherIcon.src = "images/clear.png";
                break;
            case "clouds":
                weatherIcon.src = "images/cloudy.png";
                break;
            case "rain":
                weatherIcon.src = "images/rain.png";
                break;
            case "drizzle":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "thunderstorm":
                weatherIcon.src = "images/thunderstorm.png";
                break;
            case "snow":
                weatherIcon.src = "images/snow.png";
                break;
            case "mist":
                weatherIcon.src = "images/mist.png";
                break;
            case "haze":
                weatherIcon.src = "images/haze.png";
                break;
        }
        document.querySelector(".weather-info").style.display="block";
    } else {
        alert('Location not found');
    }
  
}

