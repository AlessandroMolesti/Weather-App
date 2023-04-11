var inputval = document.querySelector('#search-bar')
var btn = document.querySelector('#add');
var city = document.querySelector('#location')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')


apik = ""

//kelvin to celcious. 1 Kelvin is equal to -272.15 Celsius.

function convertion(val){
    return (val - 273).toFixed(2)
}
//Now we have to collect all the information with the help of fetch method

btn.addEventListener('click', function(){

  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
  .then(res => res.json())

    //.then(data => console.log(data))

  .then(data => {

      var nameval = data['name']
      var descrip = data['weather']['0']['description']
      var tempature = data['main']['temp']
      var wndspd = data['wind']['speed']

      
      city.innerHTML=`Weather of <span>${nameval}<span>`
      temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
      description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
      wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

  })

  //Now the condition must be added that what if you do not input anything in the input box.
  .catch(err => alert('You entered Wrong city name'))
})
//If you click on the submit button without inputting anything in the input box or typing the wrong city name then the above text can be seen.