var cityListEl = document.querySelector('#cityList');
var weeklyForecast = document.querySelector('#weeklyForecast');
var currentWeatherDiv = document.querySelector('.center');
var cityTemp = document.querySelector('#temp');
var cityHumidity = document.querySelector('#humidity');
var cityWind = document.querySelector('#wind');
var cityUvIndex = document.querySelector('#uvIndex');
var cityList = [];
var cityName;
var APPKEY = "4140034c75a10c75298c4be081943fce";
var cityInputVal = document.querySelector('#userInput');

searchCityBtn.addEventListener("click", function(event){
    event.preventDefault();
    var cityInputVal = document.querySelector('#userInput').val();

    if(cityName === ""){
        alert("Please enter a city to look up")

    }else if (cityList.length >= 5){  
        cityList.shift();
        cityList.push(cityName);

    }else{
    cityList.push(cityName);
    }
 }); 
    displayWeather();
    displayFiveDayForecast();

function displayWeather(data) {
    console.log(data);
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +cityInputVal+ "&appid=" + APPKEY + "&units=imperial";
    // var getLon = data.coord.lon;
    // var getLat = data.coord.lat;
    fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    
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
    })
};  displayWeather();

function displayFiveDayForecast() {

    var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" +getLat+ "&lon" +getLon+ "&appid=4140034c75a10c75298c4be081943fce";
    var getLon = data.coord.lon;
    var getLat = data.coord.lat;
    fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
      console.log(response);
      for (i=0; i<5;i++){
          var forecastCard = document.createElement("div");
          forecastCard.classList.add('card', 'text-dark', 'text-center')  
          
          var resultBody = document.createElement("div");
          resultBody.classList.add('card-body');
          forecastCard.append(resultBody);

          var bodyContentEl = document.createElement('p');
          var cityDate = moment().format("MM/DD/YYYY");
          bodyContentEl.innerHTML = cityDate + '<br>'
          
          var getTemp = data.list[i].daily.temp;
          bodyContentEl.innerHTML = 'Temperature: ' +getTemp+ '° F' + '<br>';

          var getHumidity = response.list[i].daily.humidity;
          bodyContentEl.innerHTML = 'Humidity: ' +getHumidity+ '%' + '<br>';
        }
        resultBody.append(bodyContentEl);
        weeklyForecast.append(forecastCard);
});
    displayFiveDayForecast();



};


// // Trying to search for a city 
// // shows name of city (appends from search) and the date (need moment format)
// // Then it shows the towns temp (need calculations for farheit) humidity (response), wind speed, 
// // uv (separate api for UV also need if for difference in UV - color the box) another "GET"
// // then it shows 5-day forecast temp, humidity and icon ()
