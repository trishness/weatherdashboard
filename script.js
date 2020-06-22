
var cityName = "Seattle"
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=2acfaadbcdceb6ac258c5d746dd4e2a2";
var currentDate = moment().format("MM/DD/YYYY");

//var currentDate = moment().year(year).month(month).date(date);

//$("#day1").append(currentDate)


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);

    var temp=response.list[0].main.temp;
    var humidity=response.list[0].main.humidity;
    var wind=response.list[3].wind.speed;
    var lat=response.city.coord.lat;
    var lon=response.city.coord.lon;
    var queryURLuvi= "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&appid=2acfaadbcdceb6ac258c5d746dd4e2a2";

    //incorporate UVI
    $.ajax({
       url:queryURLuvi,
       method:"GET"
    }).then(function(response){
            console.log(response.current.uvi)
            var uvi=response.current.uvi
            $("div.uvi").text("UVI: "+uvi);
        })

    //display current values
    $("div.city").html("<h2>"+response.city.name+"</h2>");
    $("div.city").append("<h2>"+currentDate+"</h2>")
    $("div.temp").text("Temperature: "+temp+" °F");
    $("div.humidity").text("Humidity: "+humidity+"%");
    $("div.wind").text("Wind: "+wind+" mph");

    for (i=0; i < 6; i++) {
        $("#day"+[i]).append("<h5>"+(moment().format("MM/"+"DD+[i]"+"/YYYY"))+"</h5>");
        imgToAttach=response.list[i].weather.icon;
        $("#day"+[i]+"temp").append(response.list[i].main.temp+"°F");
        $("#day"+[i]+"humid").text("Humidity: "+response.list[i].main.humidity+"%");
        console.log(response.list[i].main.temp);
    }
  });


  








  //connecting city search to page

  //function search(){
    //  var cityNameg
  //}

 // function renderButtons(){
      //for (var i=0; i<8; i++){
          //var a=$("<button>");
          //a.addClass("city");
          //a.attr("")
    //  }
  //}