function Thermostat(){
  this.temperature = 20;
};

  Thermostat.prototype.temperature = function(){
    return this.temperature;
  };

  Thermostat.prototype.upTemp = function(n){
      var currentTemp = this.temperature + n;
      return currentTemp;
  };


// this.currentTemp = function (n) {
// }
