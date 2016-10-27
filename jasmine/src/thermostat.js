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

  Thermostat.prototype.powerSaveOff = function(){
    this.powerSaveOn = false;
    // this.temperature !== this.PS_MAX_TEMP_OFF;
  };



  Thermostat.prototype.switchMaxTemp = function(){
    if powerSaveOn = true
    this.temperature === this.PS_MAX_TEMP_ON
    else
      powerSaveOn = false
      this.temperature === this.PS_MAX_TEMP_OFF
  };
