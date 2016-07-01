var util = require('util')

var config = {
  host: {
    frontend: '104.199.176.202',
    backend: '104.199.171.234',

    frontendInternal: '10.140.0.3',
    backendInternal: '10.140.0.2'
  },
  db: {
    user: 'admin',
    pwd: 'qwer1234!',
    port: 27017,
    name: 'admin'
  }
}

config.db.host = util.format(
  'mongodb://%s:%s@%s:%s/%s',
  config.db.user,
  config.db.pwd,
  config.host.backendInternal,
  config.db.port,
  config.db.name
)

module.exports = config
