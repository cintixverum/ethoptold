$('#status > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  $('#positionsTab').show();
  $('#ordersList').show();  
  $('#tradeTab').hide();
});
$('#status > label.btn.btn-default.btn-on.btn-sm:nth-child(2)').on('click', function() {
  $('#tradeTab').show();
  $('#ordersList').show();    
  $('#positionsTab').hide();
});
$('#status > label.btn.btn-default.btn-on.btn-sm:nth-child(3)').on('click', function() {
  $('#positionsTab').show();
  $('#tradeTab').show();  
  $('#ordersList').hide();
});
