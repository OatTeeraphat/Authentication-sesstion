// set up ======================================================================
// required for node function
var util = require('util')

// set value ===================================================================
// localhost value for test @local server
var config = {
  host: {
    PORT : '80',
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
  },
  facebookAuth : {
    clientID        : '883191021763843',
    clientSecret    : '0310c2f8ad0421767a2c93b87744d2f1',
  }
}

//set dynamic path -----------------------------------------------------

//return callback facebook  format form config
//important for set Valid OAuth redirect URIs "youdomain(localhost):80" in product @developers.facebook.com/apps
config.facebookAuth.callbackURL = util.format(
  'http://%s:%s/auth/facebook/callback',
  config.host.frontend,
  config.host.PORT
)

//return mongo format form config
config.db.host = util.format(
  'mongodb://%s/%s',
  config.host.backendInternal,
  config.db.name
)

module.exports = config
 