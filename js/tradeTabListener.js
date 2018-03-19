$('#status > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  $('#positionsTab').hide();
  $('#ordersList').hide();  
  $('#tradeTab').show();
});
$('#status > label.btn.btn-default.btn-on.btn-sm:nth-child(2)').on('click', function() {
  $('#tradeTab').hide();
  $('#ordersList').hide);    
  $('#positionsTab').show();
});
$('#status > label.btn.btn-default.btn-on.btn-sm:nth-child(3)').on('click', function() {
  $('#positionsTab').hide();
  $('#tradeTab').hide();  
  $('#ordersList').show();
});
