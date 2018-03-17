function sendTransaction(Tx,callback) {
  web3.eth.sendTransaction(Tx, function(err,transactionHash) {
    if (err) return;
    console.log("Transaction Hash: ", transactionHash," Err: ",err);
    console.log(callback);
    if(callback) {
      callback();
    }  
  });
}
