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
          var weatherForecast = document.querySelector('#weather-forecast');
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
            
            weatherForecast.innerHTML= "Five Day Forecast for " + cityEl + ": " + "<br>" + 
          "Day " + i + ": " +

          "Temperature: " + (Math.floor(weatherTemp5)) + "°F " + "<br>" +
          
          "Wind Speed: " + windSpeed5 + "mph " + "<br>" +

          "Humidity: " + humidity5 + " " + "<br>" +
          
          "Icon: " + icon5 + "<br>" 
           
          ;

          }
          
          

          /*var cocktailFunction = function(){
            fetch(
                'https://www.thecocktaildb.com/api/json/v1/1/random.php'
                
            )
        
            .then(function(randomCocktail){
                return randomCocktail.json();
            })
            .then(function(randomCocktail){
                console.log(randomCocktail);
        
                var cocktail = JSON.stringify(randomCocktail.drinks[0].strDrink);
                var cocktailGlass = randomCocktail.drinks[0].strGlass
                var cocktailIngredientOne = randomCocktail.drinks[0].strIngredient1;
                console.log(cocktailGlass);
        
                var cocktailResponse = document.querySelector('#cocktailName')
                cocktailResponse.innerHTML = 'Drink Name: ' + cocktail + '<br>' + 'Usually served in a(n): ' + 
                cocktailGlass + '<br>' + 'Ingredients: ' + cocktailIngredientOne;
        
            }
            )
            
            
        }*/
      });
 
      localStorage.setItem('citySearch', cityEl);  
    
}     

var citySearch = document.getElementById('previous-searches');
citySearch.innerHTML = localStorage.getItem('citySearch');

weatherForm.addEventListener("submit", weatherSearch);