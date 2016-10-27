function Thermostat(){
  this.startTemp = 20;
  this.temperature = 20;
};

  Thermostat.prototype.startTemp = function(){
    return this.startTemp;
  };

  Thermostat.prototype.temperature = function(){
    return this.temperature
  };

  Thermostat.prototype.upTemp = function(n){
    this.temperature += n;
  };

  Thermostat.prototype.downTemp = function(n){
    this.temperature -= n;
  };
