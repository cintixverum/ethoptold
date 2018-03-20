function loadTrade() {
  let baseTokenName = localStore.getItem("tradeableOrderBaseTokenName");
  let tradedTokenName = localStore.getItem("tradeableOrderTradedTokenName");
  
  $('.tradeableOrderBaseTokenName').text(baseTokenName);
  $('.tradeableOrderTradedTokenName').text(tradedTokenName);
 
  let option = "<option>" + baseTokenName  + "</option>";  
  let option2 = option + "<option>" + tradedTokenName  + "</option>";
  
  console.log($('#tradeTab > div:nth-child(1) > select').children());
  
  $('#tradeTab > div:nth-child(1) > select').append(option2);
  
}  
