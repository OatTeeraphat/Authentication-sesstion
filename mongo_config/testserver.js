// set up ======================================================================
// required for node function
var util = require('util')

// set value ===================================================================
// localhost value for test @global server
var config = {
  host: {
    PORT : '80',
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
  },
// for global server
  facebookAuth : {
    clientID        : '883191021763843',
    clientSecret    : '0310c2f8ad0421767a2c93b87744d2f1',
  }
}

//set dynamic path -----------------------------------------------------

    if ((config.host.PORT)==80) {
    config.facebookAuth.callbackURL = util.format(
    'http://%s/auth/facebook/callback',
    config.host.frontend)


    } else {
    config.facebookAuth.callbackURL = util.format(
    'http://%s:%s/auth/facebook/callback',
    config.host.frontend,
    config.host.PORT)
    }

console.log('FB callbackUrl @port 80&8080 only');

//return mongo format form config
config.db.host = util.format(
  'mongodb://%s:%s@%s:%s/%s',
  config.db.user,
  config.db.pwd,
  config.host.backendInternal,
  config.db.port,
  config.db.name
)

module.exports = config
