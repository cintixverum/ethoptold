function depositToken() {
  let depositTokenQuery = "p[fullname='" + localStore.getItem("depositToken") + "']";
  let depositTokenAddress = $(depositTokenQuery).attr("address");
  let value = parseFloat($('#body > div.wallet-container > div > div > form > div:nth-child(2) > div > input').val());
  walletFunctions.depositToken(depositTokenAddress,value);
}  

$("#body > div.wallet-container > div > div > form > input").on('click', function() {
  let depositWithdraw = localStorage.getItem("depositWithdraw");
  if(depositWithdraw === "deposit") {
    let contractAddress = "0xb9db80a18242554589bd1c1ddf5b429607a9e7ec";  
    let depositTokenQuery = "p[fullname='" + localStore.getItem("depositToken") + "']";
    let depositTokenAddress = $(depositTokenQuery).attr("address");
    let value = parseFloat($('#body > div.wallet-container > div > div > form > div:nth-child(2) > div > input').val());
    depositTokenAddress === "0x0000000000000000000000000000000000000000" ? walletFunctions.depositETH(value) : tokenFunctions.approveToken(contractAddress,value,depositToken); 
  } 
});

$("#body > div.wallet-container > div > div > form > input").on('click', function() {
  let depositWithdraw = localStorage.getItem("depositWithdraw");
  if(depositWithdraw === "withdraw") {  
    let depositTokenQuery = "p[fullname='" + localStore.getItem("depositToken") + "']";
    let depositTokenAddress = $(depositTokenQuery).attr("address");
    let value = parseFloat($('#body > div.wallet-container > div > div > form > div:nth-child(2) > div > input').val());  
    depositTokenAddress === "0x0000000000000000000000000000000000000000" ? walletFunctions.withdrawETH(value) : walletFunctions.withdrawToken(depositTokenAddress,value);  
  }  
});

