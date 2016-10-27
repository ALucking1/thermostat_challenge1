function Thermostat(){
  this.startTemp = 20;
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.powerSaveOn = true;
  this.PS_MAX_TEMP_ON = 25;
  this.PS_MAX_TEMP_OFF = 32;
};

  Thermostat.prototype.startTemp = function(){
    return this.startTemp;
  };

  Thermostat.prototype.temperature = function(){
    return this.temperature
  };

  Thermostat.prototype.upTemp = function(){
    if (this.isMaxTemp()) {
      return;
    }
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

  Thermostat.prototype.isMaxTemp = function(){
    if (this.powerSaveOn === false) {
      return this.temperature === this.PS_MAX_TEMP_OFF;
    }
      return this.temperature === this.PS_MAX_TEMP_ON;
  };

  Thermostat.prototype.switchPowerSaveOn = function(){
    this.powerSaveOn = true;
  };

  Thermostat.prototype.switchPowerSaveOff = function(){
    this.powerSaveOn = false;
  };

  Thermostat.prototype.reset = function(){
    return this.temperature = 20;
  };

  Thermostat.prototype.energyUsage = function(){
    if (this.temperature <= 18) {
      return "low-usage";
    } else if (this.temperature <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
  };
};
