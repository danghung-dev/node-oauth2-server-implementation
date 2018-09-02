/**
 * Created by Manjesh on 15-05-2016.
 */

var oauthServer = require('oauth2-server');
var config = require('../../config')

let options = {
  model: config.db==='mongo' ? require('./mongo-models.js') : require('./models.js'),
  // Allow token requests using the password grant to not include a client_secret.
  requireClientAuthentication: {password: false},
  accessTokenLifetime: 60 * 60, // 1 hour access token live time in seconds
  refreshTokenLifetime: 60 * 60 * 24 * 7, // 1 weeks
};
var oauth = new oauthServer(options);

module.exports = oauth;