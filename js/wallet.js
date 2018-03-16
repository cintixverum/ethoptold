$().one('click', function() {
   sendTransaction(exchangeWallet.depositETH());
});

$().one('click', function() {
   sendTransaction(exchangeWallet.withdrawETH());
});

$().one('click', function() {
  let depositTokenQuery = "p[fullname='" + localStore.getItem("depositToken") + "']";
  let depositTokenAddress = $(tradedTokenQuery).attr("address");
  sendTransaction(exchangeWallet.depositToken(token));
});

$().one('click', function() {
  let depositTokenQuery = "p[fullname='" + localStore.getItem("depositToken") + "']";
  let depositTokenAddress = $(tradedTokenQuery).attr("address");
  sendTransaction(exchangeWallet.withdrawToken(token));
});
