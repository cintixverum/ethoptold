function getMyOrders() {
  $('#ordersList > table > tbody > tr:gt(0)').remove();  
  let userAddress = localStorage.getItem("userAddress");
  $.post('https://www.optionsdexapi.tk/getMyOrders', {
        'taker': userAddress
    }, function(data) {
        data.forEach(function(arr) {
            let tradedTokenName = localStore.getItem("tradedToken");
            let baseTokenName = localStore.getItem("baseToken");
            let tradedTokenQuery = "p[fullname='" + tradedTokenName + "']";
            let baseTokenQuery = "p[fullname='" + baseTokenName + "']";
            let timeframeQuery = "option[date='" + localStore.getItem("timeframe") + "']";
            let tradedTokenAddress = $(tradedTokenQuery).attr("address");
            let baseTokenAddress = $(baseTokenQuery).attr("address"); 
            let maturation = new Date(parseInt(arr.maturation)*1000).toUTCString();
            let purchaseTimestamp = new Date(parseInt(arr.purchaseTimestamp)).toUTCString();
            let newRow;
            if(arr.makerIsSeller === "true") {  
                if(baseTokenAddress === arr.tokenB) {
                    newRow = '<tr order="' + JSON.stringify(arr).replace(/"/g, "'") + '"><th>' + tokenName + '</th><th>Call</th><th>' + maturation + '</th><th>' + purchaseTimestamp + '</th><th>No</th></tr>';
                    console.log(newRow);
                    $('#ordersList > table').append(newRow);
                }
            } else if(arr.makerIsSeller === "false") {
                if(baseTokenAddress === arr.tokenA) {
                    newRow = '<tr order="' + JSON.stringify(arr).replace(/"/g, "'") + '"><th>' + tokenName + '</th><th>Put</th><th>' + maturation + '</th><th>' + purchaseTimestamp + '</th><th>No</th></tr>';
                    console.log(newRow);
                    $('#ordersList > table').append(newRow);
                }
            }
        });
  });
}  
