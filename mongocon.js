var mongoose = require('mongoose')
var config = require(__base + 'mongo_config') //require config file.
// console.log(process.env.NODE_ENV, config)

var con = function () {
  function connect () {
    var options = { server: { socketOptions: { keepAlive: 1 } } }
    return mongoose.connect(config.db.host, options).connection
  }
//ensure mongodb connect.
  return connect()
    .on('error', console.log)
    .on('reconnected', function () { console.log('reconnecting mongo...') })
    .on('disconnected', connect )
    .on('open', function () { console.log('mongodb connection opened!') })
}

module.exports = con