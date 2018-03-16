$('#baseToken').on('change', function() {
  if(this.value === "Base Token") return;
  localStore.setItem("baseToken",this.value);
  $('.baseToken').text(localStore.getItem("baseToken"));
  window.location.reload(true);  
});

$('#timeframe').on('change', function() {
  if(this.value === "Select Timeframe") return;  
  localStore.setItem("timeframe",$(this).attr('timeSeconds'));
  $('.timeframe').text(this.value); 
  window.location.reload(true);  
})
