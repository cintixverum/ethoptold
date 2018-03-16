$('#buySell > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  localStore.setItem("buySell",$(this).find('input').val());
  let tradedTokenQuery = "p[fullname='" + localStore.getItem("tradedToken") + "']";
  let baseTokenQuery = "p[fullname='" + localStore.getItem("baseToken") + "']";  
  let tradedTokenAddress = $(tradedTokenQuery).attr("address");
  let baseTokenAddress = $(baseTokenQuery).attr("address");
  console.log(tradedTokenAddress,baseTokenAddress);
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
