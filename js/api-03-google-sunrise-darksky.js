/*
##### Geocoding
1. What are latitude longitude coordinates of Montreal?
  - https://maps.googleapis.com/maps/api/geocode/json?address=Montreal

2. What time does the sun set in Montreal (based on the Google geocode coordinates)?
  - https://sunrise-sunset.org/api

3. What is the weekly weather forecast in Montreal?
  - https://darksky.net/dev
  - Note: You will have to create an account.

*/


//========================================================================
//  (1) What are latitude longitude coordinates of Montreal?
//
//     - https://developers.google.com/maps/documentation/geocoding/start
//     = NOtE: You don't need an API key for this api
//

const answerElement_apimashup_1 = document.getElementById('apimashup-1')

function getLonCoorMontreal(apiRes) {

  var montrealLocation = apiRes.body.results[0].geometry.location

  answerElement_apimashup_1.innerHTML += `
  (${montrealLocation.lat}, ${montrealLocation.lng})
  `
}

request
  .get('https://maps.googleapis.com/maps/api/geocode/json?address=Montreal')
  .then(getLonCoorMontreal)



//========================================================================
//  (2) What time does the sun set in Montreal (based on the Google geocode coordinates)?

const answerElement_apimashup_2 = document.getElementById('apimashup-2')

function getSunSet(apiRes) {
  var sunsetTime = apiRes.body.results.sunset
  answerElement_apimashup_2.innerHTML = sunsetTime
}

request
  .get('https://api.sunrise-sunset.org/json?lat=45.5016889&lng=-73.567256')
  .then(getSunSet)





//========================================================================
//  (3) What is the weekly weather forecast in Montreal? (look for summary property in 'daily')

const answerElement_apimashup_3 = document.getElementById('apimashup-3')

function getWeather(apiRes) {
  var dailyWeather = apiRes.body.daily.summary
  answerElement_apimashup_3.innerHTML = dailyWeather
}

request
  .get('https://api.darksky.net/forecast/6ea69d4fc0778361708247b204ddfcfb/45.5016889,-73.567256')
  .then(getWeather)

//
