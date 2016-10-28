$( document ).ready(function(){

  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ globe +"&units=metric&APPID=a473b14fcbf6d200f1c102de58640d2f",function(json) {$('#weather').text(json.main.temp);});


  var thermostat = new Thermostat();
  var globe = $( "#cities" ).val();
  $('#weather2').text("The current weather outside is...");
  $('#cities').change(function(){

    var globe = $( "#cities" ).val();
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ globe +"&units=metric&APPID=a473b14fcbf6d200f1c102de58640d2f",function(json){
        $('#weather').text(json.main.temp);
      });
    });


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
