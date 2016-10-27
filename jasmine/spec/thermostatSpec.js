describe('Thermostat', function(){

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts the thermostat at 20 degrees', function(){
    expect(thermostat.temperature).toBe(20);
  });

  describe('Changing temperature', function(){
    it('increases the temperature with an up function', function(){
      expect(thermostat.upTemp).toBeGreaterThan(thermostat.temperature);
    });
  });
});
