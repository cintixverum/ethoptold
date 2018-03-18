$("#orderbook").on("click", "tr", function() {
  $(this).addClass('selected');  
  localStorage.setItem("currentOrder",JSON.parse($(this).attr('order')));
});
