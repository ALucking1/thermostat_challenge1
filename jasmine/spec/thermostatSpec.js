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
      thermostat.powerSaveOff()
      expect(thermostat.powerSaveOn).toEqual(false);
    });

    // it('has a max temp of 25 when on', function(){
    //   expect(thermostat.PS_MAX_TEMP_ON).toEqual(25);
    // });
    //
    // it('has a max temp of 32 when off', function(){
    //   thermostat.powerSaveOff
    //   expect(thermostat.PS_MAX_TEMP_OFF).toEqual(32);
    });
  });
});
