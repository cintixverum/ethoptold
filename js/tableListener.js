$("#orderbook").on("click", "tr", function() {
  $("tr").removeClass("selected","");
  $(this).addClass("selected"); 
  contractFunctions.takeOption(JSON.parse($(this).attr('order')));
});
