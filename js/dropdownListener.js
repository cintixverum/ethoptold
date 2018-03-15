$('#baseToken').on('change', function() {
  localStore.setItem("baseToken",this.value);
  $('.baseToken').text(localStore.getItem("baseToken"));
});

$('#timeframe').on('change', function() {
  localStore.setItem("timeframe",this.value);
  $('.timeframe').text(localStore.getItem("timeframe")); 
})
