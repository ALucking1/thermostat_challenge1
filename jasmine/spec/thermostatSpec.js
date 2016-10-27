describe('Thermostat', function(){

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts the thermostat at 20 degrees', function(){
    expect(thermostat.startTemp).toBe(20);
  });

  describe('Changing temperature', function(){
    it('increases the temperature with an up function', function(){
      thermostat.upTemp(1)
      expect(thermostat.temperature).toBe(21);
    });
    it('decreases the temperature with an up function', function(){
      thermostat.downTemp(1)
      expect(thermostat.temperature).toBe(19);
    });
  });
});
