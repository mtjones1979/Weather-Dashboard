var searchHistory = [];

function getItems() {
    var storedCities = JSON.parse(localStorage.getItem("searchHistory"));
    if (storedCities !== null) {
        searchHistory = storedCities;
    }
    for (i = 0; i <searchHistory.length; i++) {
        if (i == 10) {
            break;
        }
        var cityName;
var centerInfo = $(".center");
};
// getItems();

function getInfo(centerInfo){
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=4140034c75a10c75298c4be081943fce";
    centerInfo.empty();
    $(".center").empty();
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
    var cityDate = moment().format("MM/DD/YYYY");
    var cityName = $("#cityName").html(city + date);
    centerInfo.prepend(cityName);
    // var temp = Math.round((response.main.temp))

    })
};
    getInfo();
    // activate list of searched cities
        searchButton = $("<a>").attr({
            class: "list-group-item list-group-item-action",
            href: "#"
        });
        searchButton.text(searchHistory[i]);
        $(".list-group").append(searchButton);
    }
    
    getItems();
    $("#searchCity").on("click", function(event){
        cityName = $("#cityName").val();
        getInfo();
        var checkArray = searchHistory.includes(cityName);
        if (checkArray == true) {
            return
        } else {
            searchHistory.push(cityName);
            localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
            var searchButton = $('<a>').attr({
                class: "list-group-item list-group-item-action",
                href: "#"
            });
            searchButton.text(cityName)
            $(".list-group").append(searchButton);
        };
        $(".list-group-item").click(function(){
            cityName = $(this).text();
            getInfo();
        });
        console.log(getItems);
        console.log(getInfo);
});
   
