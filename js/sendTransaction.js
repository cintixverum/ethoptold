function sendTransaction(Tx,callback) {
  web3.eth.sendTransaction(Tx, function(err,transactionHash) {
    if (err || !transactionHash) return;
    if(callback) {
      callback();
    }  
  });
}

function sendTransactionCallback(Tx,callback) {
  web3.eth.sendTransaction(Tx, function(err,transactionHash) {
    if (err || !transactionHash) return;
    let filter = web3.eth.filter('latest')
    filter.watch(function(error, result) {
      if (!error) {
        web3.eth.getBlockNumber(function(err,blockNumber) {
          console.log(blockNumber);
          web3.eth.getBlock(parseInt(blockNumber) - 11, function(err,confirmedBlock) {
            if (confirmedBlock.transactions.length > 0) {
              confirmedBlock.transactions.forEach(function(txId) {
                web3.eth.getTransaction(txId,function(err,transaction) {
                  console.log(transaction);
                  if (transaction.to == "0x8f225bffa2fca0852f727787227c4ce97adb572e") {
                    if(callback) {
                      callback();
                    }      
                  }
                });  
              });
            }
          });   
        });    
      }
    })       
  });
}
