
$('#createBuySell > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  localStore.setItem("createBuySell",$(this).find('input').val());
});

$('#createBuySell > label.btn.btn-default.btn-off.btn-sm').on('click', function() {
  localStore.setItem("createBuySell",$(this).find('input').val());
});

$('#createCallPut > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  localStore.setItem("createCallPut",$(this).find('input').val()); 
});

$('#createCallPut > label.btn.btn-default.btn-off.btn-sm').on('click', function() {
  localStore.setItem("createCallPut",$(this).find('input').val()); 
});
