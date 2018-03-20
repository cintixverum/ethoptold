function getMyOrders() {
  let userAddress = localStorage.getItem("userAddress");
  let currentTime = parseInt(Date.now()/1000);
  $.post('https://www.optionsdexapi.tk/getMyOrders', {
        'taker': userAddress
    }, function(data) {
        data.forEach(function(arr) {
            let tokenAddress =  arr.makerIsSeller === "true" ? arr.tokenB : arr.tokenA; 
            let tradedTokenQuery = "p[address='" + tokenAddress + "']";
            let tradedTokenName = $(tradedTokenQuery).attr("fullname");       
            let timeframeQuery = "option[date='" + localStore.getItem("timeframe") + "']";
            let maturation = new Date(parseInt(arr.maturation)*1000).toUTCString();
            let purchaseTimestamp = new Date(parseInt(arr.purchaseTimestamp)).toUTCString();
            let callPut = arr.makerIsSeller === "true" ? "Call" : "Put";
            let isMaker = arr.maker === userAddress ? "Yes" : "No";
            let newRow = '<tr order="' + JSON.stringify(arr).replace(/"/g, "'") + '"><th>' + tradedTokenName + '</th><th>' + callPut  + '</th><th>' + purchaseTimestamp + '</th><th>' + maturation + '</th><th>' + isMaker + '</th></tr>';
            $('#ordersTable').append(newRow);
            if(arr.expiration >= currentTime && arr.maturation >= currentTime) {
              $('#positionsTable').append(newRow);
            }
        });
    
        $('#positionsTable > tbody > tr').on('click', function() {
          $('tr').removeClass('selected2');          
          $(this).addClass('selected2');
          localStorage.seItem("tradeableOrder",$(this).attr("order"));
        });  
    
  });
}
