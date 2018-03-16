function updateOrderbook() {
  let tradedTokenQuery = "p[fullname='" + localStore.getItem("tradedToken") + "']";
  let baseTokenQuery = "p[fullname='" + localStore.getItem("baseToken") + "']"; 
  console.log(tradedTokenQuery,baseTokenQuery);
  let tradedTokenAddress = $(tradedTokenQuery).attr("address");
  let baseTokenAddress = $(baseTokenQuery).attr("address");
  console.log(tradedTokenAddress,baseTokenAddress);
  let data = {tokenA:null,tokenB:null,makerIsSeller:null};
  localStorage.getItem("buySell") === "sell" ? data.makerIsSeller = "true" : data.makerIsSeller = "false";
  localStorage.getItem("optionType") === "put" ? (data.tokenA = baseTokenAddress,data.tokenB = tradedTokenAddress) : (data.tokenB = baseTokenAddress, data.tokenA = tradedTokenAddress);    
  console.log(data);
  console.log(baseTokenAddress,tradedTokenAddress);	
  $.post("https://www.optionsdexapi.tk/getBuyOptions", data,
     function(optionsArray, status) {
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
