describe('Thermostat', function(){

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts the thermostat at 20 degrees', function(){
    expect(thermostat.startTemp).toBe(20);
  });

  describe('Changing temperature', function(){
    it('increases the temperature with an up function', function(){
      thermostat.upTemp()
      expect(thermostat.temperature).toBe(21);
    });

    it('decreases the temperature with an down function', function(){
      thermostat.downTemp()
      expect(thermostat.temperature).toBe(19);
    });

    it('has a minimum temperature of 10', function(){
      for (var i = 0; i < 11; i++){
        thermostat.downTemp();
      }
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe('Power saving mode', function(){
    it('can turn on', function(){
      expect(thermostat.powerSaveOn).toEqual(true);
    });

    it('can be turned off', function(){
      thermostat.switchPowerSaveOff()
      expect(thermostat.powerSaveOn).toEqual(false);
    });

    it('has a max temp of 25 when on', function(){
      for (var i = 0; i < 6; i++) {
        thermostat.upTemp();
       }
    expect(thermostat.temperature).toEqual(25);
    });

    it('has a maximum temperature of 32 degrees', function() {
      thermostat.switchPowerSaveOff()
      for (var i = 0; i < 13; i++) {
      thermostat.upTemp();
      }
    expect(thermostat.temperature).toEqual(32);
    });
  });

  describe('Reset mode', function(){

    it('resets the temperature to startTemp', function(){
      thermostat.reset()
    expect(thermostat.temperature).toEqual(20);
    });
  });

});
