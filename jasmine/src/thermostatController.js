$( document ).ready(function(){

  var thermostat = new Thermostat();

  $('#DecreaseTemp').click(function(){
    thermostat.downTemp();
    checkTemp();
  });

  $('#IncreaseTemp').click(function(){
    thermostat.upTemp();
    checkTemp();
  });

  $('#ResetTemp').click(function(){
    thermostat.reset();
    checkTemp();
  });

  $('#PowerSaveOn').click(function(){
    thermostat.switchPowerSaveOn();
    checkTemp();
  });

  $('#PowerSaveOff').click(function(){
    thermostat.switchPowerSaveOff();
    checkTemp();
  });

  function checkTemp() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr("class", thermostat.energyUsage());
  };
});
