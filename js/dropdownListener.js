import localStorage from "./storage";

$('#baseToken').on('change', function() {
  localStorage.setItem("baseToken",this.value);
  console.log(localStorage.getItem("baseToken"));
});

$('#timeframe').on('change', function() {
  localStorage.setItem("timeframe",this.value);
  console.log(localStorage.getItem("timeframe"));
})
