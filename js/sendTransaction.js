function sendTransaction(Tx) {
  web3.eth.sendTransaction(Tx, function(err,transactionHash) {
    if (err) return;
    console.log("Transaction Hash: ", transactionHash," Err: ",err);
  });
}