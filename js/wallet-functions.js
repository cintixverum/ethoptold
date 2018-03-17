const walletFunctions =  function() {
  let contractABI = JSON.parse('[{"constant":false,"inputs":[{"name":"tokenA_tokenB_maker","type":"address[3]"},{"name":"limitTokenA_limitTokenB_premium","type":"uint256[3]"},{"name":"maturation_expiration","type":"uint256[2]"},{"name":"makerIsSeller","type":"bool"},{"name":"premiumIsTokenA","type":"bool"}],"name":"cancelOptionOrder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokenA_tokenB_maker","type":"address[3]"},{"name":"limitTokenA_limitTokenB_premium","type":"uint256[3]"},{"name":"maturation_expiration","type":"uint256[2]"},{"name":"makerIsSeller","type":"bool"},{"name":"premiumIsTokenA","type":"bool"},{"name":"amountToOption","type":"uint256"},{"name":"tradingTokenAToOption","type":"bool"}],"name":"tradeOption","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"name":"depositToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"optionOrderCancelled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"userBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"optionTaker","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenA_tokenB_maker","type":"address[3]"},{"name":"limitTokenA_limitTokenB_premium","type":"uint256[3]"},{"name":"maturation_expiration","type":"uint256[2]"},{"name":"makerIsSeller","type":"bool"},{"name":"premiumIsTokenA","type":"bool"}],"name":"getOptionHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"fee_ratio","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenA_tokenB_maker","type":"address[3]"},{"name":"limitTokenA_limitTokenB_premium","type":"uint256[3]"},{"name":"maturation_expiration","type":"uint256[2]"},{"name":"makerIsSeller","type":"bool"},{"name":"premiumIsTokenA","type":"bool"}],"name":"closeOption","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_admin","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenA_tokenB_maker","type":"address[3]"},{"name":"limitTokenA_limitTokenB_premium","type":"uint256[3]"},{"name":"maturation_expiration","type":"uint256[2]"},{"name":"makerIsSeller","type":"bool"},{"name":"premiumIsTokenA","type":"bool"}],"name":"getOptionState","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"address"}],"name":"optionBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenA_tokenB_maker","type":"address[3]"},{"name":"limitTokenA_limitTokenB_premium","type":"uint256[3]"},{"name":"maturation_expiration","type":"uint256[2]"},{"name":"makerIsSeller","type":"bool"},{"name":"premiumIsTokenA","type":"bool"},{"name":"v","type":"uint8"},{"name":"r_s","type":"bytes32[2]"}],"name":"fillOptionOrder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdrawETH","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"depositETH","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":true,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":true,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Withdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"optionHash","type":"bytes32"}],"name":"OrderFilled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"optionHash","type":"bytes32"}],"name":"OrderCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"optionHash","type":"bytes32"},{"indexed":false,"name":"amountToOption","type":"uint256"},{"indexed":false,"name":"tradingTokenAToOption","type":"bool"}],"name":"OptionTraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"optionHash","type":"bytes32"}],"name":"OptionClosed","type":"event"}]');
  let contractAddress = "0xb9db80a18242554589bd1c1ddf5b429607a9e7ec";
  let contract = web3.eth.contract(contractABI).at(contractAddress);
  let userAddress = localStorage.getItem("userAddress");

  function getBalance(callback) {
    let userAddress = localStorage.getItem("userAddress");
    let tokenName = localStorage.getItem("depositToken");
    let query = 'p[fullname="' + tokenName + '"]'; 
    let tokenAddress = $(query).attr('address');
    let decimals = $(query).attr('decimals');
    contract.userBalance.call(userAddress,tokenAddress, function(err,val) {
       let value = parseFloat(val)/(Math.pow(10,parseInt(decimals)));
       callback(value);
    })
  }
  
  function depositETH(value) {
    let ethValue = Math.pow(10,18)*value;	      
    let data = optionsDEX.depositETH.getData();  	  
    let Tx = {
       from: userAddress,
       to: contractAddress,
       value:ethValue,
       data: data,
       gasPrice: gasPrice
    };
    return Tx;
  }

  function withdrawETH(value) {
    let ethValue = Math.pow(10,18)*value;	  
    let data = optionsDEX.withdrawETH.getData(ethValue);  	  
    let Tx = {
       from: userAddress,
       to: contractAddress,
       data: data,
       gasPrice: gasPrice
    };
    return Tx;
  }

  function depositToken(token,value) {
    let data = optionsDEX.depositToken.getData(token,value);  	  
    let Tx = {
       from: userAddress,
       to: contractAddress,
       data: data,
       gasPrice: gasPrice
    };
    return Tx;
  }
  
  function withdrawToken(token,value) {
    let data = optionsDEX.withdrawToken.getData(token,value);  	  
    let Tx = {
       from: userAddress,
       to: contractAddress,
       data: data,
       gasPrice: gasPrice
    };
    return Tx;
  }

  return {
    getBalance,
    depositETH,
    withdrawETH,
    depositToken,
    withdrawToken
  };
  
}();
