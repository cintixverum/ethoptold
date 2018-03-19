$('#orderbook tr').on('click', function() {
  $(this).addClass('selected');
});  

$('#positionsTable tr').on('click', function() {
  console.log($(this));
  $(this).addClass('selected2');
});  

$('#ordersTable tr').on('click', function() {
  console.log($(this));  
  $(this).addClass('selected2');
});  
