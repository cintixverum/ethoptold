function depositToken() {
  let depositTokenQuery = "p[fullname='" + localStore.getItem("depositToken") + "']";
  let depositTokenAddress = $(depositTokenQuery).attr("address");
  let value = parseFloat($('#body > div.wallet-container > div > div > form > div:nth-child(2) > div > input').val());
  walletFunctions.depositToken(depositTokenAddress,value);
}  

$("input[value='Deposit']").on('click', function() {
  let depositTokenQuery = "p[fullname='" + localStore.getItem("depositToken") + "']";
  let depositTokenAddress = $(depositTokenQuery).attr("address");
  let value = parseFloat($('#body > div.wallet-container > div > div > form > div:nth-child(2) > div > input').val());
  console.log("wallet: ",depositTokenAddress," value: ",value);  
  depositTokenAddress === "0x0000000000000000000000000000000000000000" ? walletFunctions.depositETH(value) : tokenFunctions.approveToken(value,depositToken); 
});

$("input[value='Withdraw']").on('click', function() {
  let depositTokenQuery = "p[fullname='" + localStore.getItem("depositToken") + "']";
  let depositTokenAddress = $(depositTokenQuery).attr("address");
  let value = parseFloat($('#body > div.wallet-container > div > div > form > div:nth-child(2) > div > input').val());  
  console.log("wallet: ",depositTokenAddress," value: ",value);  
  depositTokenAddress === "0x0000000000000000000000000000000000000000" ? walletFunctions.withdrawETH(value) : walletFunctions.withdrawToken(depositTokenAddress,value);   
});
