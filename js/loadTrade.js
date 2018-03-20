function loadTrade() {
  let baseTokenName = localStore.setItem("tradeableOrderBaseTokenName",baseTokenName);
  let tradedTokenName = localStore.setItem("tradeableOrderTradedTokenName",tradedTokenName)
  
  $('.tradeableOrderBaseTokenName').text(baseTokenName);
  $('.tradeableOrderTradedTokenName').text(tradedTokenName);
 
  let option = "<option>" + baseTokenName  + "</option>";  
  let option2 = option + "<option>" + tradedTokenName  + "</option>";
  
  $('#tradeTab > div:nth-child(1) > select').append(option2);
  
}  
