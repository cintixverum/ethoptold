function loadTrade() {
  $('#tradeTab > div:nth-child(1) > select > option').not(':first').remove();
  
  let baseTokenName = localStore.getItem("tradeableOrderBaseTokenName");
  let tradedTokenName = localStore.getItem("tradeableOrderTradedTokenName");
  
  $('.tradeableOrderBaseTokenName').text(baseTokenName);
  $('.tradeableOrderTradedTokenName').text(tradedTokenName);  
  
  let option = "<option>" + baseTokenName  + "</option>";  
  let option2 = option + "<option>" + tradedTokenName  + "</option>";
  
  $('#tradeTab > div:nth-child(1) > select').append(option2);
  
  let order = JSON.parse(localStore.getItem("tradeableOrder"));
  
  let tradedTokenQuery = "p[fullname='" + tradedTokenName + "']";
  let baseTokenQuery = "p[fullname='" + baseTokenName + "']";
  let tradedTokenAddress = $(tradedTokenQuery).attr("address");
  let baseTokenAddress = $(baseTokenQuery).attr("address");
  
  $('#tradeTab > div:nth-child(1) > select').on('click', function() {
    contractFunctions.getOrderBalance(order,tradedTokenAddress);
  });  

}  
