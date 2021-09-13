var searchBtnEl = document.getElementById('searchBtn');
var cityNameEl = document.getElementById('city');
var cityEl = "Phoenix";
 

function weatherSearch () {
    console.log("weatherSearch is called!");
    
    fetch('https://api.openweathermap.org/data/2.5/find?q=' +
        cityEl + '&units=imperial&appid=' + '4905268bbaa813b64a0dd03408e9b4eb'
      )
      .then(function(response) {
          return response.json()
      })
      .then(function(myJson) {
          console.log(JSON.stringify(myJson));
          var weatherResponse = document.querySelector('#weather-container')
          weatherResponse.innerHTML= cityEl + Date() + myJson.main.temp + myJson.wind.speed + myJson.humidity.value
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