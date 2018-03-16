$(document).ready(function() {
  $('.baseToken').text(localStore.getItem("baseToken"));
  $('.tradedToken').text(localStore.getItem("tradedToken"));
  $('.timeframe').text(localStore.getItem("timeframe"));
  updateOrderbook();
});  
