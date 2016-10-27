function Thermostat(){
  this.startTemp = 20;
  this.temperature = 20;
  this.MIN_TEMP = 10;
};

  Thermostat.prototype.startTemp = function(){
    return this.startTemp;
  };

  Thermostat.prototype.temperature = function(){
    return this.temperature
  };

  Thermostat.prototype.upTemp = function(){
    this.temperature += 1;
  };

  Thermostat.prototype.isMinTemp = function(){
    return this.temperature === this.MIN_TEMP;
  };

  Thermostat.prototype.downTemp = function(){
    if (this.isMinTemp()) {
       return;
    }
      this.temperature -= 1;
  };
