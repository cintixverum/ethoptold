$('#orderbook tr').on('click', function() {
  $(this).addClass('selected');
});  

$('#positionsTab tr').on('click', function() {
  console.log($(this));
  $(this).addClass('selected2');
});  

$('#ordersList > table > tbody > tr:nth-child(1)').on('click', function() {
  console.log($(this));  
  $(this).addClass('selected2');
});  
