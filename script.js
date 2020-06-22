
var cityName = "Seattle"
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=2acfaadbcdceb6ac258c5d746dd4e2a2";

//var currentDate = moment().year(year).month(month).date(date);

//$("#day1").append(currentDate)

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);

    console.log(response.list[0].main.temp);
    var temp=response.list[0].main.temp;
    var humidity=response.list[0].main.humidity;
    var wind=response.list[3].wind.speed;
    //var uv


    $("div.city").html("<h2>"+response.city.name+"</h2>");
    $("div.temp").text("Temperature: "+temp+" degrees F");
    $("div.humidity").text("Humidity: "+humidity+"%");
    $("div.wind").text("Wind: "+wind+" mph");
  });

  function search(){
      var cityNameg
  }

  function renderButtons(){
      for (var i=0; i<8; i++){
          var a=$("<button>");
          a.addClass("city");
          a.attr("")
      }
  }