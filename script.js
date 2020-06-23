
var cityName = "Seattle"
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=2acfaadbcdceb6ac258c5d746dd4e2a2";
var currentDate = moment().format("MM/DD/YYYY");
//var cityArray = JSON.parse(localStorage.getItem("cityData")) || [];

//renderSearchHistory();
//function renderData(cityName){
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(queryURL);

    var temp = response.list[0].main.temp;
    var humidity = response.list[0].main.humidity;
    var wind = response.list[3].wind.speed;
    var lat = response.city.coord.lat;
    var lon = response.city.coord.lon;
    console.log(response.list[1].weather[0].icon);
    var queryURLuvi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&appid=2acfaadbcdceb6ac258c5d746dd4e2a2";

    //incorporate UVI
    $.ajax({
        url: queryURLuvi,
        method: "GET"
    }).then(function (response) {
        console.log(response.current.uvi)
        var uvi = response.current.uvi
        $("div.uvi").text("UVI: " + uvi);
    })

    //display current values
    $("div.city").html("<h2>" + response.city.name + "</h2>");
    $("div.city").append("<h2>" + currentDate + "</h2>")
    $("div.temp").text("Temperature: " + temp + " °F");
    $("div.humidity").text("Humidity: " + humidity + "%");
    $("div.wind").text("Wind: " + wind + " mph");


    for (i = 0; i < 6; i++) {
        $("#day" + [i]).append((moment().add(i, 'days').format("MM/" + "DD" + "/YY")));
        var imgToAttach = response.list[i].weather[0].icon;
        $("#day" + [i] + "Img").attr("src", "http://openweathermap.org/img/wn/" + imgToAttach + ".png")
        $("#day" + [i] + "temp").append(response.list[i].main.temp + "°F");
        $("#day" + [i] + "humid").text("Humidity: " + response.list[i].main.humidity + "%");
    }
})
//};

//function renderSearchHistory() {
    //$("#cityList").empty();

    //for (let i=0; i < cityArray.length; i++) {
        //var newLi = $("<li>");

        //newLi.addClass("list-group-item");
        //newLi.attr("id", ("city" + [i]))
        //newLi.text(cityArray[i]);

        //$("#cityList").append(newLi)
        //$("#city"+[i]).on("click", function (event){
            //var citySearch = (cityArray[i])

            //renderData(citySearch)
        //})
   // }
//}

//$("#searchBtn").on("click", function(event){
    //event.preventDefault();

    //var citySearch = $("#citySearch").val().trim();

    //cityArray.push(citySearch);
    //localStorage.setItem("cityData", JSON.stringify(cityArray))
    //renderSearchHistory();
//})