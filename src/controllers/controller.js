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
      const { data } = response
      res.render('index', {
        cityTemp: `${data.name} 目前的溫度為攝氏 ${data.main.temp} 度`,
        maxToMinTemp: `最高溫 ${data.main.temp_max} 度 - 最低溫 ${data.main.temp_min} 度`,
        feelsLike: `體感溫度 ${data.main.feels_like} 度`,
        cloud: `降雨機率 ${data.clouds.all}%`,
        country: `所屬國家 ${data.sys.country}`
      })
    })
    .catch(error => {
      res.render('index', {
        error: 'OOPS 😮'
      })
    })
}

exports.renderAboutPage = (req, res) => {
  res.render('about')
}
