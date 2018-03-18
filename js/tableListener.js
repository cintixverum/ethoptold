$("#orderbook").on("click", "tr", function() {
  $("tr").removeClass("selected","");
  $(this).addClass("selected"); 
  console.log($(this).attr('order'));
  console.log(JSON.parse($(this).attr('order')));
  contractFunctions.takeOption(JSON.parse($(this).attr('order')));
});
