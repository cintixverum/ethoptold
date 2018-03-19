console.log($('#positionsTable'));
$('#positionsTable > tbody > tr').on('click', function() {
  console.log($(this));
  $(this).addClass('selected2');
});  
  
$('#ordersTable > tbody > tr').on('click', function() {
  console.log($(this));  
  $(this).addClass('selected2');
}); 
