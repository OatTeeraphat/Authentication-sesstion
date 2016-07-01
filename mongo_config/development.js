var util = require('util')

var config = {
  host: {
    frontend: 'localhost',
    backend: 'localhost',

    frontendInternal: 'localhost',
    backendInternal: 'localhost'
  },
  db: {
    user: '',
    pwd: '',
    port: 27017,
    name: 'test_login'
  }
}

config.db.host = util.format(
  'mongodb://%s/%s',
  config.host.backendInternal,
  config.db.name
)

module.exports = config
