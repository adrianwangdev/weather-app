const axios = require('axios')
const API_KEY = '4dab701cb8af0b1b9babc59e92aa5385'

// Import Model
const Weather = require('../model/Weather')

exports.renderHomePage = (req, res) => {
  res.render('index')
}

exports.getWeather = (req, res) => {
  const city = req.body.city
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

  const weather = new Weather(req.body.city)
  weather.validateUserInput()

  weather.errors.length
    ? ( res.render('index', {
          textEmpty: weather.errors.toString()
        })
      )
    : ( axios.get(url)
          .then(response => {
            const { name: location } = response.data
            const { all: rain } = response.data.clouds
            const { country } = response.data.sys
            const {
              temp: temperture,
              temp_max: maximumTemperture,
              temp_min: minimumTempertur,
              feels_like: apparentTemperature
            } = response.data.main

            res.render('index', {
              cityTemp: `${location} 目前的溫度為攝氏 ${temperture} 度`,
              maxToMinTemp: `最高溫 ${maximumTemperture} 度 - 最低溫 ${minimumTempertur} 度`,
              feelsLike: `體感溫度 ${apparentTemperature} 度`,
              cloud: `降雨機率 ${rain}%`,
              country: `所屬國家 ${country}`
              })
            })

          .catch(error => {
            res.render('index', {
              error: '換個名稱試試 :('
            })
          })
      )
}

exports.renderAboutPage = (req, res) => {
  res.render('about')
}
