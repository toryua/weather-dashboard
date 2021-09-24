// create a variable for the local storage array
var cityArr = [];
var buttonSearch = document.getElementById('')
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
                if (cityArr.length < 5) {
                cityArr.push(cityStr);
                console.log(cityArr);
                } else {
                  cityArr.shift();
                  cityArr.push(cityStr);
                  console.log(cityArr);
                }
              localStorage.setItem('city-array', cityArr);  
            }
      } 
      citySearchFn();
     
      
        function prevSearch(i) {
        var x = document.createElement("button");
        var t = document.createTextNode(cityArr[i]);
        x.classList.add("cityButton");
        x.setAttribute("city-name", cityArr[i]);
        x.appendChild(t);
        document.body.appendChild(x);        
      } 

      function buttonSearch (event) {
        event.preventDefault();
        var cityEl = cityArr[i];
            console.log(cityEl + " is the city name");
        console.log("buttonSearch is called!");
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
            });
    for (let i = 0; i < 5; i++) {
      prevSearch(i);
      }   
    }
  } 
// to do: create button with event listeners
// associate event listeners with re-search of city
// append it to the previous search
// iterate through the local storage array to create a button for each city

var citySearch = document.getElementById('previous-searches');
citySearch.innerHTML = localStorage.getItem('citySearch');

//

// working through the array, creating buttons for each previous search up to the length of the array
for (let i = 0; i < citySearch.length; i++) {
  var prevCity = localStorage.getItem('citySearch'[i]);
// create button and class
  var prevSearch = document.createElement("BUTTON");
  prevSearch.classList.add("button");
  prevSearch.id = prevCity;
  prevSearch.value = prevCity;
  prevSearch.addEventListener("click", buttonSearch);
  

  
  


//establish variable as previous searched cities
var prevSearches = document.getElementById('prev-searches');
prevSearches.appendChild(prevSearch);


console.log(prevCity)


//prevCity = document.createTextNode(prevSearch.textContent);
//prevSearch.appendChild(prevCity);
//document.body.appendChild(prevCity);



}

//next steps: 1. specify for loop is on load; 2. give it the ability to automatically launch when application is loading (search document.ready)
//3. create a function for creating this button when you search, and call the function in the for loop and when you search. for the five-day forecast -
//4. make sure content of container gets replaced every time you search 5. look at where the creation of the local storage is - why is it wiping each time?




weatherForm.addEventListener("submit", weatherSearch);