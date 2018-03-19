$('#status > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  $('#positionsTab').show();
  $('#ordersTab').show();  
  $('#tradeTab').hide();
});
$('#status > label.btn.btn-default.btn-on.btn-sm:nth-child(2)').on('click', function() {
  $('#tradeTab').show();
  $('#ordersTab').show();    
  $('#positionsTab').hide();
});
$('#status > label.btn.btn-default.btn-on.btn-sm:nth-child(3)').on('click', function() {
  $('#positionsTab').show();
  $('#tradeTab').show();  
  $('#ordersTab').hide();
});
