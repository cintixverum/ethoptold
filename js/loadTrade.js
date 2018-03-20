function loadTrade() {
  $('#tradeTab > div:nth-child(1) > select > option').not(':first').remove();
  
  let baseTokenName = localStore.getItem("tradeableOrderBaseTokenName");
  let tradedTokenName = localStore.getItem("tradeableOrderTradedTokenName");
  
  $('.tradeableOrderBaseTokenName').text(baseTokenName);
  $('.tradeableOrderTradedTokenName').text(tradedTokenName);  
  
  let option = "<option>" + baseTokenName  + "</option>";  
  let option2 = option + "<option>" + tradedTokenName  + "</option>";
  
  $('#tradeTab > div:nth-child(1) > select').append(option2);
  
  let order = localStore.getItem("tradeableOrder");
  
  contractFunctions.getOrderBalance(order,tradedTokenName);

}  
