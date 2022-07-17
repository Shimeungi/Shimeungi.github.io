// API KEY 
// af073ee49565c767863799f5596a4524
const API_KEY = "af073ee49565c767863799f5596a4524";

function onGeoLocation(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(url)
    .then(response => response.json())
    .then((data) => {
        const weather = document.querySelector(".weather h2:first-child");
        const city = document.querySelector(".weather h2:last-child");
        city.innerText = `location : ${data.name}`;
        weather.innerText = `weather : ${data.weather[0].main}`;
    });

   
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoLocation, onGeoError);