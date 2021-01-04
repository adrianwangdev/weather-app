const axios = require('axios')
const API_KEY = '4dab701cb8af0b1b9babc59e92aa5385'

exports.renderHomePage = (req, res) => {
  res.render('index')
}

exports.getWeather = (req, res) => {
  const city = req.body.city
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

  axios.get(url)
    .then(response => {
      console.log(`${response.data.name} 目前的溫度為 ${response.data.main.temp}`)
    })
    .catch(error => {
      console.log(error)
    })
}

exports.renderAboutPage = (req, res) => {
  res.render('about')
}
