$('#orderbook tr').on('click', function() {
  $(this).addClass('selected');
});  

$('#positionsTable > tbody > tr').on('click', function() {
  console.log($(this));
  $(this).addClass('selected2');
});  

$('#ordersTable > tbody > tr:nth-child(1)').on('click', function() {
  console.log($(this));  
  $(this).addClass('selected2');
});  
