$('#orderbook tr').on('click', function() {
  $(this).addClass('selected');
});  

$('#positionsTab > table > tbody > tr').on('click', function() {
  console.log($(this));
  $(this).addClass('selected2');
});  

$('#ordersList > table > tbody > tr').on('click', function() {
  console.log($(this));  
  $(this).addClass('selected2');
});  
