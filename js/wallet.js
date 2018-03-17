$('input[value="Deposit"]').one('click', function() {
  let depositTokenQuery = "p[fullname='" + localStore.getItem("depositToken") + "']";
  let depositTokenAddress = $(tradedTokenQuery).attr("address");
  depositTokenAddress === "0x0000000000000000000000000000000000000000" ? sendTransaction(walletFunctions.depositETH()) : sendTransaction(walletFunctions.depositToken(depositTokenAddress)); 
});

$('input[value="Withdraw"]').one('click', function() {
  let depositTokenQuery = "p[fullname='" + localStore.getItem("depositToken") + "']";
  let depositTokenAddress = $(tradedTokenQuery).attr("address");
  depositTokenAddress === "0x0000000000000000000000000000000000000000" ? sendTransaction(walletFunctions.withdrawETH()) : sendTransaction(walletFunctions.withdrawToken(depositTokenAddress));   
});
