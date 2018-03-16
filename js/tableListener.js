$("#orderbook").on("click", "tr", function() {
  console.log(JSON.parse($(this).attr('order')));
});
