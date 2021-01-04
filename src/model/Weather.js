const Weather = function(data) {
  this.data = data
  this.errors = []
}

Weather.prototype.validateUserInput = function() {
  if (this.data === '') {
    this.errors.push('請輸入國家或城市的英文名')
  }
}

module.exports = Weather
