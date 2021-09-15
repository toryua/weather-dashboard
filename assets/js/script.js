// create a variable for the local storage array
var cityArr = [];

var weatherForm = document.getElementById('myForm');
function weatherSearch (event) {
    event.preventDefault();
    var cityNameEl = document.getElementById("city").value;
    var cityEl = cityNameEl;
        console.log(cityEl + " is the city name");
    console.log("weatherSearch is called!");
    console.log(cityEl);
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityEl + "&units=imperial&appid=" + "4905268bbaa813b64a0dd03408e9b4eb"
      )
      .then(function(response) {
          return response.json()
      })
      .then(function(myJson) {
          console.log(myJson);
         
          var weatherResponse = document.querySelector('#weather-container');
          
          var weatherTemp = myJson.list[0].main.temp;
          var windSpeed = myJson.list[0].wind.speed;
          var humidity = myJson.list[0].main.humidity;
          var icon = myJson.list[0].weather[0].icon;

          console.log(Math.floor(weatherTemp));
        // return current weather
          weatherResponse.innerHTML= "Current Weather for " + cityEl + " on " + Date() + ": " +  "<br>" +
          
          "Temperature: " + (Math.floor(weatherTemp)) + "°F " + "<br>" +
          
          "Wind Speed: " + windSpeed + "mph " + "<br>" +

          "Humidity: " + humidity + " " + "<br>" +
          
          "Icon: " + icon + "<br>"
           
          ;

        // create for loop to pull five day forecast  
          for (let i = 1; i < 6; i++) {
            var weatherTemp5 = myJson.list[i].main.temp;
            var windSpeed5 = myJson.list[i].wind.speed;
            var humidity5 = myJson.list[i].main.humidity;
            var icon5 = myJson.list[i].weather[0].icon;
            console.log(humidity5);
            
            var weatherForecast = document.querySelector('#weather-forecast');
            var x = document.createElement("div");
            var y = document.createTextNode("Day " + i);
            x.appendChild(y);
            var tempNode = document.createTextNode(" Temperature: " + (Math.floor(weatherTemp5)) + "°F ");
            x.appendChild(tempNode);
            var windNode = document.createTextNode(" Wind Speed: " + windSpeed5 + "mph ");
            x.appendChild(windNode);
            var humidNode = document.createTextNode(" Humidity: " + humidity5 + " ");
            x.appendChild(humidNode);
            var iconNode = document.createTextNode(" Icon: " + icon5);
            x.appendChild(iconNode);

            weatherForecast.appendChild(x);

          }  
            

      });
      function citySearchFn () { 
           if(!cityArr) {
             cityArr = [];
            } else { 
                var cityStr = JSON.stringify(cityEl);
                cityArr.push(cityStr);
                console.log(cityArr);
            }
          localStorage.setItem('city-array', cityArr);  
      }
      citySearchFn();
      
}     

// to do: create button with event listeners
// associate event listeners with re-search of city
// append it to the previous search
// iterate through the local storage array to create a button for each city

var citySearch = document.getElementById('previous-searches');
citySearch.innerHTML = localStorage.getItem('citySearch');



weatherForm.addEventListener("submit", weatherSearch);