$('#baseToken').on('change', function() {
  if(this.value === "Base Token") return;
  localStore.setItem("baseToken",this.value);
  $('.baseToken').text(localStore.getItem("baseToken"));
  updateOrderbook();  
});

$('#timeframe').on('change', function() {
  if(this.value === "Select Timeframe") return;  
  localStore.setItem("timeframe",this.value);
  $('.timeframe').text(localStore.getItem("timeframe")); 
  updateOrderbook();  
})
