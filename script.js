var cityListEl = document.querySelector('#cityList');
var weeklyForecast = document.querySelector('#weeklyForecast');
var currentWeatherDiv = document.querySelector('.center');
var cityTemp = document.querySelector('#temp');
var cityHumidity = document.querySelector('#humidity');
var cityWind = document.querySelector('#wind');
var cityUvIndex = document.querySelector('#uvIndex');
var cityList = [];
var cityName;


function displayWeather() {
    var getLon = response.coord.lon;
    var getLat = response.coord.lat;
    var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" +getLat+ "&lon=" +getLon+ "&appid=4140034c75a10c75298c4be081943fce";

    fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    console.log(queryURL);
        
        var cityNameEl = document.querySelector('#cityName');
        var presentDay = moment().format('MMMM Do YYYY');
            cityNameEl.textcontent = cityName + presentDay;
        var getTemp = data.current.temp;
            cityTemp.textContent = ("Temperature: " +getTemp+ "° F");
        var getHumidity = data.current.humidity;
            cityHumidity.textContent = ("Humidity: " +getHumidity+ "%");
        var getWindSpeed = data.current.wind.speed;
            cityWind.textContent = ("Wind Speed: " +getWindSpeed+ "MPH");
        var getUvIndex = data.current.uvi;
            cityUvIndex.textContent = ("UV Index:  " +getUvIndex);
        
        
       
        // getting UV Index info and setting color class according to value
        // var getUVIndex = uvResponse.value;
        // var uvNumber = $("<span>");
        // if (getUVIndex > 0 && getUVIndex <= 2.99){
        //     uvNumber.addClass("low");
        // }else if(getUVIndex >= 3 && getUVIndex <= 5.99){
        //     uvNumber.addClass("moderate");
        // }else if(getUVIndex >= 6 && getUVIndex <= 7.99){
        //     uvNumber.addClass("high");
        // }else if(getUVIndex >= 8 && getUVIndex <= 10.99){
        //     uvNumber.addClass("vhigh");
        // }else{
        //     uvNumber.addClass("extreme");
        // } 
        // uvNumber.text(getUVIndex);
        // var uvIndexEl = $("<p class='card-text'>").text("UV Index: ");
       
       
       

    })
    
};

searchCityBtn.addEventListener("click", displayWeather);

// // Trying to search for a city 
// // shows name of city (appends from search) and the date (need moment format)
// // Then it shows the towns temp (need calculations for farheit) humidity (response), wind speed, 
// // uv (separate api for UV also need if for difference in UV - color the box) another "GET"
// // then it shows 5-day forecast temp, humidity and icon ()
