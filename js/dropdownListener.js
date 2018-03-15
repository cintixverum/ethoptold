const localStore = storageFactory;
      
$('#baseToken').on('change', function() {
  localStore.setItem("baseToken",this.value);
  console.log(localStore.getItem("baseToken"));
});

$('#timeframe').on('change', function() {
  localStore.setItem("timeframe",this.value);
  console.log(localStore.getItem("timeframe"));
})
