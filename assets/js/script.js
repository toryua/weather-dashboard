var searchBtnEl = document.getElementById('searchBtn');
var cityNameEl = document.getElementsByClassName("city")[0].value;
var cityEl = cityNameEl;
console.log(cityEl + " is the city name");

function weatherSearch () {
    console.log("weatherSearch is called!");
    console.log(cityEl);
    fetch("https://api.openweathermap.org/data/2.5/find?q=" + cityEl + "&units=imperial&appid=" + "4905268bbaa813b64a0dd03408e9b4eb"
      )
      .then(function(response) {
          return response.json()
      })
      .then(function(myJson) {
          console.log(JSON.stringify(myJson));
          var weatherResponse = document.querySelector('#weather-container')
          weatherResponse.innerHTML= cityEl + " weather report for " + Date() // +  myJson.main.temp + myJson.wind.speed + myJson.humidity.value
          ;
      });
      console.log("fetch is finished!"); 

      /*function weatherSearch() {
        let x = document.forms["myForm"]["fname"].value;
        fetch('https://api.openweathermap.org/data/2.5/find?q=' +
              x + '&units=imperial&appid=' + '4905268bbaa813b64a0dd03408e9b4eb'
            )
            .then(function(response) {
                return response.json()
            })
            .then(function(myJson) {
                console.log(JSON.stringify(myJson));
        }); 
    }; */

}         
searchBtnEl.addEventListener("click", weatherSearch())