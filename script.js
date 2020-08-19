var cityhist = document.querySelector("#city-input");
var citylist = document.querySelector("#city-list");
var cities = [];

var cityinfobox = document.querySelector(".cityinfo");

var searchbutton = document.querySelector(".searchBtn");





$(".searchBtn").on("click", function (event) {
    event.preventDefault();
    


    var city = $(".searchTerm").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d8b1da3830469076bdeb2463e849fb9f";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var tRow = $("<tr>");

        var city1name = $("<td>").text(city);
        tRow.append(city1name);
        $(".table").append(tRow);


    });



    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/uvi?appid=d8b1da3830469076bdeb2463e849fb9f&lat=29.7604&lon=95.3698",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var city = $(".searchTerm").val();
        var tRow1 = $("<tr>");


        tRow1.append(city);
        
        $(".table2").append(tRow1);

        var tRowdate = $("<tr>");
        var date = "Date: " + (response.date_iso);
        tRowdate.append(date);
        $(".table2").append(tRowdate);
    });


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var city = $(".searchTerm").val();
        var tRow2 = $("<tr>");

        //var city1temp = $("<td>");
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        var temp2 = tempF.toFixed(2);
        var city1temperature = "Temperature: " + temp2 + "F";

        tRow2.append(city1temperature);
        $(".table2").append(tRow2);



        var tRow3 = $("<tr>");

        var city1humidity = "Humidity: " + (response.main.humidity);
        tRow3.append(city1humidity);
        $(".table2").append(tRow3);


        var tRow4 = $("<tr>");

        var city1speed = "Speed: " + (response.wind.speed);
        tRow4.append(city1speed);
        $(".table2").append(tRow4);




    });



    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/uvi?appid=d8b1da3830469076bdeb2463e849fb9f&lat=29.7604&lon=95.3698",
        method: "GET"
    }).then(function (response) {
        console.log(response);
       
        var tRow5 = $("<tr>");

        var city1uv = "UV Index " + (response.value);
        tRow5.append(city1uv);
        $(".table2").append(tRow5);


    });


    /* Getting the 5 day forecast*/

    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city +"&appid=d8b1da3830469076bdeb2463e849fb9f",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        //var dayone = "Day 1 " + (response.list[0].dt_text);

        var tRow6 = $("<h4>");
        var dateone = "Day 1: " + (response.list[1].dt_txt);

        tRow6.append(dateone);
        $(".forecast").append(tRow6);


        var tRow7 = $("<tr>");
        var tempone = response.list[1].main.temp;


        var tempFa = (tempone - 273.15) * 1.80 + 32;
        var tempforecast = tempFa.toFixed(2);
        var city1forecast = "Temperature: " + tempforecast + "F";

        tRow7.append(city1forecast);
        $(".forecast").append(tRow7);

        var tRow8 = $("<tr>");
        var humone = "Humidity: " + (response.list[1].main.humidity) + "%";

        tRow8.append(humone);
        $(".forecast").append(tRow8);

    });

    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city +"&appid=d8b1da3830469076bdeb2463e849fb9f",
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var tRow9 = $("<h4>");
        var datetwo = "Day 2: " + (response.list[2].dt_txt);

        tRow9.append(datetwo);
        $(".forecast2").append(tRow9);


        var tRow10 = $("<tr>");
        var temptwo = response.list[2].main.temp;


        var tempFar = (temptwo - 273.15) * 1.80 + 32;
        var tempforecasttwo = tempFar.toFixed(2);
        var city2forecast = "Temperature: " + tempforecasttwo + "F";

        tRow10.append(city2forecast);
        $(".forecast2").append(tRow10);

        var tRow11 = $("<tr>");
        var humtwo = "Humidity: " + (response.list[2].main.humidity) + "%";

        tRow11.append(humtwo);
        $(".forecast2").append(tRow11);
    });
    

    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city +"&appid=d8b1da3830469076bdeb2463e849fb9f",
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var tRow12 = $("<h4>");
        var datethree = "Day 3: " + (response.list[3].dt_txt);

        tRow12.append(datethree);
        $(".forecast3").append(tRow12);


        var tRow13 = $("<tr>");
        var tempthree = response.list[3].main.temp;


        var tempFarh = (tempthree - 273.15) * 1.80 + 32;
        var tempforecastthree = tempFarh.toFixed(2);
        var city3forecast = "Temperature: " + tempforecastthree + "F";

        tRow13.append(city3forecast);
        $(".forecast3").append(tRow13);

        var tRow14 = $("<tr>");
        var humthree = "Humidity: " + (response.list[3].main.humidity) + "%";

        tRow14.append(humthree);
        $(".forecast3").append(tRow14);


        var tRow15 = $("<h4>");
        var datefour = "Day 4: " + (response.list[4].dt_txt);

        tRow15.append(datefour);
        $(".forecast4").append(tRow15);


        var tRow16 = $("<tr>");
        var tempfour = response.list[4].main.temp;


        var tempFarhn = (tempfour - 273.15) * 1.80 + 32;
        var tempforecastfour = tempFarhn.toFixed(2);
        var city4forecast = "Temperature: " + tempforecastfour + "F";

        tRow16.append(city4forecast);
        $(".forecast4").append(tRow16);

        var tRow17 = $("<tr>");
        var humfour = "Humidity: " + (response.list[4].main.humidity) + "%";

        tRow17.append(humfour);
        $(".forecast4").append(tRow17);


        var tRow18 = $("<h4>");
        var datefive = "Day 5: " + (response.list[5].dt_txt);

        tRow18.append(datefive);
        $(".forecast5").append(tRow18);

        var tRow19 = $("<tr>");
        var tempfive = response.list[5].main.temp;


        var tempFarhne = (tempfive - 273.15) * 1.80 + 32;
        var tempforecastfive = tempFarhne.toFixed(2);
        var city5forecast = "Temperature: " + tempforecastfive + "F";

        tRow19.append(city5forecast);
        $(".forecast5").append(tRow19);


 var tRow20 = $("<tr>");
        var humfive = "Humidity: " + (response.list[5].main.humidity) + "%";

        tRow20.append(humfive);
        $(".forecast5").append(tRow20);
    });

});


//local storage:

renderCity();
function renderCity() {
  // Clear todoList element and update todoCountSpan
  citylist.innerHTML = "";


  // Render a new li for each todo
  for (var i = 0; i < cities.length; i++) {
    var CITY = cities[i];

    var li = document.createElement("li");
    li.textContent = CITY;
    citylist.appendChild(li);
  }
}


$(".searchBtn").on("click", function (event) {
    event.preventDefault();
  


var cityhistory = cityhist.value.trim();
if (cityhistory === "") {
    return;
  }

  cities.push(cityhistory);
  cityhist.value = "";
  renderCity();
});