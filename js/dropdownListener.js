const localStore = storageFactory;
      
$('#baseToken').on('change', function() {
  localStore.setItem("baseToken",this.value);
});

$('#timeframe').on('change', function() {
  localStore.setItem("timeframe",this.value);
})
