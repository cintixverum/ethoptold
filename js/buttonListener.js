
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
             let premiumPercentage = premium/tokenA_Amount;
             let strike_price = tokenA_Amount / tokenB_Amount;
             let expiration = new Date(arr.maturation*1000).toUTCString();
             let volatility = arr.volatility + "%";
             let newRow = "<tr><td>" + premium + "/" + premiumPercentage + "%</td><td>" + tokenA_Amount
             + "</td><td>" + volatility + "</td><td>" + strike_price + "</td><td>" + expiration + "</td></tr>";
             $("#orderbook").append(newRow);
         });
     });
};  

$('#buySell > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  localStore.setItem("buySell",$(this).find('input').val());
  let tradedTokenQuery = "p[fullName='" + localStore.getItem("tradedToken") + "']";
  let baseTokenQuery = "p[fullName='" + localStore.getItem("baseToken") + "']";  
  let tradedTokenAddress = $(tradedTokenQuery).attr("address");
  let baseTokenAddress = $(baseTokenQuery).attr("address");  
  updateOrderbook(baseTokenAddress,tradedTokenAddress);  
});

$('#buySell > label.btn.btn-default.btn-off.btn-sm').on('click', function() {
  localStore.setItem("buySell",$(this).find('input').val());
  let tradedTokenQuery = "p[fullName='" + localStore.getItem("tradedToken") + "']";
  let baseTokenQuery = "p[fullName='" + localStore.getItem("baseToken") + "']";  
  let tradedTokenAddress = $(tradedTokenQuery).attr("address");
  let baseTokenAddress = $(baseTokenQuery).attr("address");  
  updateOrderbook(baseTokenAddress,tradedTokenAddress);  
  
});

$('#optionType > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  localStore.setItem("optionType",$(this).find('input').val());
  let tradedTokenQuery = "p[fullName='" + localStore.getItem("tradedToken") + "']";
  let baseTokenQuery = "p[fullName='" + localStore.getItem("baseToken") + "']";  
  let tradedTokenAddress = $(tradedTokenQuery).attr("address");
  let baseTokenAddress = $(baseTokenQuery).attr("address");  
  updateOrderbook(baseTokenAddress,tradedTokenAddress);  
});

$('#optionType > label.btn.btn-default.btn-off.btn-sm').on('click', function() {
  localStore.setItem("optionType",$(this).find('input').val());
  let tradedTokenQuery = "p[fullName='" + localStore.getItem("tradedToken") + "']";
  let baseTokenQuery = "p[fullName='" + localStore.getItem("baseToken") + "']";  
  let tradedTokenAddress = $(tradedTokenQuery).attr("address");
  let baseTokenAddress = $(baseTokenQuery).attr("address");  
  updateOrderbook(baseTokenAddress,tradedTokenAddress);  
});
