$( document ).ready(function(){

  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=&units=metric&APPID=a473b14fcbf6d200f1c102de58640d2f",function(json) {$('#weather').text(json.main.temp);});

  $("#form").submit(function(stop) {
  stop.preventDefault();
  var globe = $( "#cities" ).val();
  $('#weather2').text("The current temperature in " + globe + " is:");

  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ globe +"&units=metric&APPID=a473b14fcbf6d200f1c102de58640d2f",function(json){
        $('#weather').text(json.main.temp);
      });
    });

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
