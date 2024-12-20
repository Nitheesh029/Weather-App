
const apiKey = "e9a155139b33c0fe6f352522d508dc5b";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox= document.querySelector(".js-city-input");
const searchBtn = document.querySelector('.js-search-btn');
const weatherIcon = document.querySelector('.weather-icon');
const error = document.querySelector('.error');

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(response.status === 404){
        error.style.display="block";
        document.querySelector('.weather').style.display = "none";
    }else{
        error.style.display="none";
        document.querySelector('.weather').style.display = "block";
    }

    var data = await response.json();


    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.floor(data.main.temp)+'°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity+'%';
    document.querySelector('.wind').innerHTML = data.wind.speed+' km/h';

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "weather-app-img/images/clouds.png";
    }else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "weather-app-img/images/clouds.png";
    }else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "weather-app-img/images/rain.png";
    }else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "weather-app-img/images/drizzle.png";
    }else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "weather-app-img/images/mist.png";
    }else if(data.weather[0].main === "Snow"){
        weatherIcon.src = "weather-app-img/images/snow.png";
    }
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})

