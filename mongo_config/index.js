var development = require('./development')
var testserver = require('./testserver')

var defaults = {

}

module.exports = {
  development: Object.assign(development, defaults),
  testserver: Object.assign(testserver, defaults),
}[process.env.NODE_ENV|| 'development']//config envoronment
