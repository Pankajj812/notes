var env = process.env.NODE_ENV||'development';
console.log("env", env);

var config = require('./config.json');
var envConfig=config[env];
console.log("configenv", envConfig)
Object.keys(envConfig).forEach(key => process.env[key]=envConfig[key]);