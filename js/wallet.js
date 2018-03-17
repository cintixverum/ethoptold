$('input[value="Deposit"]').one('click', function() {
  let depositTokenQuery = "p[fullname='" + localStore.getItem("depositToken") + "']";
  let depositTokenAddress = $(tradedTokenQuery).attr("address");
  if(depositTokenAddress === "0x0000000000000000000000000000000000000000") {
    sendTransaction(walletFunctions.depositETH());
  }
  else { 
    sendTransaction(walletFunctions.depositToken(depositTokenAddress));
  }   
});

$('input[value="Withdraw"]').one('click', function() {
  let depositTokenQuery = "p[fullname='" + localStore.getItem("depositToken") + "']";
  let depositTokenAddress = $(tradedTokenQuery).attr("address");
  if(depositTokenAddress === "0x0000000000000000000000000000000000000000") {
    sendTransaction(walletFunctions.depositETH());
  } 
  else { 
    sendTransaction(walletFunctions.withdrawToken(depositTokenAddress));
  }   
});
