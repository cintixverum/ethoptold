$('#buySell > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  localStore.setItem("buySell",$(this).find('input').val());
});

$('#buySell > label.btn.btn-default.btn-off.btn-sm').on('click', function() {
  localStore.setItem("buySell",$(this).find('input').val());
});

$('#optionType > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  localStore.setItem("optionType",$(this).find('input').val());
});

$('#optionType > label.btn.btn-default.btn-off.btn-sm').on('click', function() {
  localStore.setItem("optionType",$(this).find('input').val());
});
