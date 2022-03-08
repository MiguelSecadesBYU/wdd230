const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Gijón&units=imperial&APPID=7cd73d453aadf41359bddc513633ca91";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = Math.round(jsObject.main.temp);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#current-wSpeed').textContent =jsObject.wind.speed;
    document.querySelector('#weatherDescription').textContent =jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    
  });


