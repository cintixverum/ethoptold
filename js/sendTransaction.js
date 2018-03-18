function sendTransaction(Tx,callback) {
  web3.eth.sendTransaction(Tx, function(err,transactionHash) {
    if (err || !transactionHash) return;
    console.log("Transaction Hash: ", transactionHash," Err: ",err);
    console.log(callback);
    if(callback) {
      callback();
    }  
  });
}

function sendTransactionCallback(Tx,callback) {
  web3.eth.sendTransaction(Tx, function(err,transactionHash) {
    if (err || !transactionHash) return;
    console.log("sendTransactionCallback");
    let filter = web3.eth.filter('latest')
    filter.watch(function(error, result) {
      if (!error) {
        let confirmedBlock = web3.eth.getBlock(web3.eth.blockNumber - 11)
        if (confirmedBlock.transactions.length > 0) {
          confirmedBlock.transactions.forEach(function(txId) {
            let transaction = web3.eth.getTransaction(txId);
            console.log(transaction);
            if (transaction.to == "0x8f225bffa2fca0852f727787227c4ce97adb572e") {
              if(callback) {
                callback();
              }      
            }
          })
        }
      }
    })       
  });
}
