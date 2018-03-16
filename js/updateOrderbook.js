function updateOrderbook(baseTokenAddress,tradedTokenAddress) {
  console.log(baseTokenAddress,tradedTokenAddress);	
  $.post("https://www.optionsdexapi.tk/getBuyOptions", {
      tokenA: baseTokenAddress,
      tokenB: tradedTokenAddress,
      makerIsSeller: "false"    	    
  }, function(optionsArray, status) {
         optionsArray.forEach(function(arr) {
             let tokenA_Amount = parseInt(arr.limitTokenA) / (Math.pow(10, parseInt(arr.tokenADecimals)));
             let tokenB_Amount = parseInt(arr.limitTokenB) / (Math.pow(10, parseInt(arr.tokenBDecimals)));
             let premium = parseInt(arr.premium) / (Math.pow(10, parseInt(arr.tokenADecimals)));
             let premiumPercentage = ((premium/tokenA_Amount).toFixed(2)).toString();
             let strike_price = ((tokenA_Amount / tokenB_Amount).toFixed(2)).toString();
             let expiration = new Date(arr.maturation*1000).toUTCString();
             let volatility = (parseFloat(arr.volatility).toFixed(2)).toString() + "%";
             let newRow = "<tr><td>" + premium + "/" + premiumPercentage + "%</td><td>" + tokenA_Amount
             + "</td><td>" + volatility + "</td><td>" + strike_price + "</td><td>" + expiration + "</td></tr>";
             $("#orderbook").append(newRow);
         });
     });
};  
