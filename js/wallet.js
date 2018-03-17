$("input[value='Deposit']").on('click', function() {
  let depositTokenQuery = "p[fullname='" + localStore.getItem("depositToken") + "']";
  let depositTokenAddress = $(tradedTokenQuery).attr("address");
  let value = parseFloat($('#body > div.wallet-container > div > div > form > div:nth-child(2) > div > input').val());
  console.log("wallet: ",depositTokenAddress," value: ",value);  
  depositTokenAddress === "0x0000000000000000000000000000000000000000" ? sendTransaction(walletFunctions.depositETH(value)) : sendTransaction(walletFunctions.depositToken(depositTokenAddress,value)); 
});

$("input[value='Withdraw']").on('click', function() {
  let depositTokenQuery = "p[fullname='" + localStore.getItem("depositToken") + "']";
  let depositTokenAddress = $(tradedTokenQuery).attr("address");
  let value = parseFloat($('#body > div.wallet-container > div > div > form > div:nth-child(2) > div > input').val());  
  console.log("wallet: ",depositTokenAddress," value: ",value);  
  depositTokenAddress === "0x0000000000000000000000000000000000000000" ? sendTransaction(walletFunctions.withdrawETH(value)) : sendTransaction(walletFunctions.withdrawToken(depositTokenAddress,value));   
});
