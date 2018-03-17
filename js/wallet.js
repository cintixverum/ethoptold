$("input[value='Deposit']").on('click', function() {
  let depositTokenQuery = "p[fullname='" + localStore.getItem("depositToken") + "']";
  let depositTokenAddress = $(tradedTokenQuery).attr("address");
  console.log("wallet: ",depositTokenAddress);
  depositTokenAddress === "0x0000000000000000000000000000000000000000" ? sendTransaction(walletFunctions.depositETH()) : sendTransaction(walletFunctions.depositToken(depositTokenAddress)); 
});

$("input[value='Withdraw']").on('click', function() {
  let depositTokenQuery = "p[fullname='" + localStore.getItem("depositToken") + "']";
  let depositTokenAddress = $(tradedTokenQuery).attr("address");
  console.log("wallet: ",depositTokenAddress);  
  depositTokenAddress === "0x0000000000000000000000000000000000000000" ? sendTransaction(walletFunctions.withdrawETH()) : sendTransaction(walletFunctions.withdrawToken(depositTokenAddress));   
});
