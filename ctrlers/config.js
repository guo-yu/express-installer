module.exports = function(config) {
  var Config = {};
  Config.create = function(baby, callback) {
    return config.create(baby, callback);
  };
  Config.check = function(callback) {
    config.findOne({}).exec(function(err, c) {
      callback(err, !!c, c);
    });
  };
  return Config;
}