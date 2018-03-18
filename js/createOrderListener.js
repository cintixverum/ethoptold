
$('#createBuySell > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  localStore.setItem("createBuySell","buy");
});

$('#createBuySell > label.btn.btn-default.btn-off.btn-sm').on('click', function() {
  localStore.setItem("createBuySell","sell");
});

$('#createCallPut > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  localStore.setItem("createCallPut","put"); 
});

$('#createCallPut > label.btn.btn-default.btn-off.btn-sm').on('click', function() {
  localStore.setItem("createCallPut","call"); 
});
