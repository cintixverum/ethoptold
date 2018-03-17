const tokenFunctions =  function() {
  let tokenABI = JSON.parse('[{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"},{"name":"extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');
  let gasPrice = 5000000000;

  function approveToken(value,callback) {
    let tokenName = localStorage.getItem("depositToken");
    let query = 'p[fullname="' + tokenName + '"]'; 
    let tokenAddress = $(query).attr('address');
    console.log(tokenName,tokenAddress);
    let tokenContract = web3.eth.contract(tokenABI).at(tokenAddress);    
    let userAddress = localStorage.getItem("userAddress");
    let decimals = parseInt($(query).attr('decimals'));
    let ethValue = Math.pow(10,decimals)*value;
    let data = tokenContract.approve.getData(tokenAddress,ethValue);
    Tx = {
       from: userAddress,
       to: tokenAddress,
       data: data,
       gasPrice: gasPrice
    };	
    sendTransaction(Tx,callback);
  } 
  
  return {
    approveToken
  };
  
}();
