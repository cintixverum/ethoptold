$("#orderbook").on("click", "tr", function() {
  $("tr").removeClass("selected","");
  $(this).addClass("selected"); 
  let order = JSON.parse($(this).attr('order'));
  contractFunctions.takeOption(order);
});
