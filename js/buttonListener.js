$('#buySell > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  localStore.setItem("buySell",$(this).find('input').val());
  location.reload();
});

$('#buySell > label.btn.btn-default.btn-off.btn-sm').on('click', function() {
  localStore.setItem("buySell",$(this).find('input').val());  
  location.reload();
});

$('#optionType > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  localStore.setItem("optionType",$(this).find('input').val()); 
  location.reload();
});

$('#optionType > label.btn.btn-default.btn-off.btn-sm').on('click', function() {
  localStore.setItem("optionType",$(this).find('input').val());  
  location.reload();
});
