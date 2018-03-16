$('input[value="Deposit"]').one('click', function() {
  let depositTokenQuery = "p[fullname='" + localStore.getItem("depositToken") + "']";
  let depositTokenAddress = $(tradedTokenQuery).attr("address");
  if(depositTokenAddress === "0x0000000000000000000000000000000000000000") {
    sendTransaction(exchangeWallet.depositETH());
  }
  else { 
    sendTransaction(exchangeWallet.depositToken(depositTokenAddress));
  }   
});

$('input[value="Withdraw"]').one('click', function() {
  let depositTokenQuery = "p[fullname='" + localStore.getItem("depositToken") + "']";
  let depositTokenAddress = $(tradedTokenQuery).attr("address");
  if(depositTokenAddress === "0x0000000000000000000000000000000000000000") {
    sendTransaction(exchangeWallet.depositETH());
  } 
  else { 
    sendTransaction(exchangeWallet.withdrawToken(depositTokenAddress));
  }   
});
