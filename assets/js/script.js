var searchBtnEl = document.getElementById('#searchBtnEl');
var cityNameEl = document.getElementById('#city');
var city = cityNameEl.value; 




var weatherSearch = 
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q={" +
        city + "}&appid={" +
          "4905268bbaa813b64a0dd03408e9b4eb}"
      );
    
      
    





document.addEventListener("click", weatherSearch);