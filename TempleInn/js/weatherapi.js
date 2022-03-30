/*const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Washington&units=imperial&APPID=7cd73d453aadf41359bddc513633ca91";*/
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.90&lon=-77.01&exclude=hourly,minutely&units=imperial&appid=7cd73d453aadf41359bddc513633ca91";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = Math.round(jsObject.current.temp);
    const iconsrc= `https://openweathermap.org/img/wn/${jsObject.current.weather[0].icon}@2x.png`;
    const desc = jsObject.current.weather[0].description;
    document.querySelector('#current-wSpeed').textContent =jsObject.current.wind_speed;
    document.querySelector('#current-humidity').textContent = jsObject.current.humidity;
    document.querySelector('#weatherDescription').textContent =jsObject.current.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    
    document.querySelector('#temp1').textContent =jsObject.daily[0].temp.day;
    document.querySelector('#temp2').textContent =jsObject.daily[1].temp.day;
    document.querySelector('#temp3').textContent =jsObject.daily[2].temp.day;

    if (jsObject.alerts){
      document.getElementById("close_alert").classList.toggle("alerts");
      document.querySelector('#alert').textContent =jsObject.alerts.description;
      const alert= document.getElementById('alerts')
      alert.onclick = toggleAlert;
    }
  });

  function toggleAlert(){
     document.getElementById("alerts").classList.toggle("close_alert");
}

