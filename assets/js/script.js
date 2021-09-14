var weatherForm = document.getElementById('myForm');
function weatherSearch (event) {
    event.preventDefault();
    var cityNameEl = document.getElementById("city").value;
    var cityEl = cityNameEl;
        console.log(cityEl + " is the city name");
    console.log("weatherSearch is called!");
    console.log(cityEl);
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityEl + "&units=imperial&appid=" + "4905268bbaa813b64a0dd03408e9b4eb"
      )
      .then(function(response) {
          return response.json()
      })
      .then(function(myJson) {
          console.log(myJson);
          var weatherResponse = document.querySelector('#weather-container')
          weatherResponse.innerHTML= cityEl + " weather report for " + Date() + ": " +  myJson.main.temp + myJson.wind.speed + myJson.humidity.value
          ;
      });
 
      localStorage.setItem('citySearch', cityEl);  
    
}     

var citySearch = document.getElementById('previous-searches');
citySearch.innerHTML = localStorage.getItem('citySearch');

weatherForm.addEventListener("submit", weatherSearch);