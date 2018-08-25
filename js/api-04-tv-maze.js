 // ##### TV Maze
// https://www.tvmaze.com/api

// 1. What is the average rating for the show Better Call Saul?
const answerElement_tvmaze_1 = document.getElementById('tvmaze-1')

function getSaulRating(apiRes) {
  var aveRating = apiRes.body[0].show.rating.average
  answerElement_tvmaze_1.innerHTML = aveRating
}

request
  .get('http://api.tvmaze.com/search/shows?q=better-call-saul')
  .then(getSaulRating)

// 2. When was the premiere date for the 9th season of Friends?
const answerElement_tvmaze_2 = document.getElementById('tvmaze-2')

function getPremiereDate(apiRes) {
  var aveRating = apiRes.body.premiered
  answerElement_tvmaze_2.innerHTML = aveRating
}

request
  .get('http://api.tvmaze.com/shows/431')
  .then(getPremiereDate)
// 3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?
const answerElement_tvmaze_3 = document.getElementById('tvmaze-3')

function getCastings(apiRes) {
  var otherCastings = apiRes.body
  // console.log(otherCastings.length-1);
  answerElement_tvmaze_3.innerHTML = otherCastings.length-1
}

request
  .get('http://api.tvmaze.com/people/24483/castcredits?embed=show')
  .then(getCastings)
