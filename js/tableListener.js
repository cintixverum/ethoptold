$("#orderbook").on("click", "tr", function() {
  $("tr").removeClass("selected","");
  $(this).addClass("selected");  
  localStorage.setItem("currentOrder",JSON.parse($(this).attr('order')));
});
