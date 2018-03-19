function getMyOrders() {
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
            let tokenName = baseTokenAddress === arr.tokenB ? arr.tokenA : arr.tokenB;
            let callPut = arr.makerIsSeller === "true" ? "Call" : "Put";
            let isMaker = arr.maker === "userAddress" ? "Yes" : "No";
            let newRow = '<tr order="' + JSON.stringify(arr).replace(/"/g, "'") + '"><th>' + tokenName + '</th><th>' + callPut  + '</th><th>' + maturation + '</th><th>' + purchaseTimestamp + '</th><th>' + isMaker + '</th></tr>';
            $('#ordersList > table').append(newRow);
        });
  });
}  
