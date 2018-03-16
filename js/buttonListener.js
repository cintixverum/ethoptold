$('#status > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  localStore.setItem("buySell",$(this).find('input').val());
});

$('#status > label.btn.btn-default.btn-off.btn-sm').on('click', function() {
  console.log($(this).find('input').val());
  localStore.setItem("buySell",$(this).find('input').val());
});

$('#status1 > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  localStore.setItem("optionType",$(this).find('input').val());
});

$('#status1 > label.btn.btn-default.btn-off.btn-sm').on('click', function() {
  console.log($(this).find('input').val());  
  localStore.setItem("optionType",$(this).find('input').val());
});
