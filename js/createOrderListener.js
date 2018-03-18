
$('#createBuySell > label.btn.btn-default').on('click', function() {
  localStore.setItem("createBuySell",$(this).find('input').val());
});

$('#createCallPut > label.btn.btn-default').on('click', function() {
  localStore.setItem("createCallPut",$(this).find('input').val()); 
});
