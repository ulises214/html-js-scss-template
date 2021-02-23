const prodConfig = require('./webpack.config.prod');
const devConfig = require('./webpack.config.dev');

module.exports = (env) => (env.production === true ? prodConfig : devConfig);
