$('#createBuySell > label.btn.btn-default').on('click', function() {
  localStore.setItem("createBuySell",$(this).find('input').val());
});

$('#createCallPut > label.btn.btn-default').on('click', function() {
  localStore.setItem("createCallPut",$(this).find('input').val()); 
});

$('#body > div.main > div:nth-child(3) > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > div > form > div:nth-child(1) > select').on('change', function() {
  localStore.setItem("orderTimeframe",$(this).val());
})
