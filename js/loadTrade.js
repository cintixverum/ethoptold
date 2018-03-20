function loadTrade() {
  let baseTokenName = localStore.getItem("tradeableOrderBaseTokenName");
  let tradedTokenName = localStore.getItem("tradeableOrderTradedTokenName");
  
  $('.tradeableOrderBaseTokenName').text(baseTokenName);
  $('.tradeableOrderTradedTokenName').text(tradedTokenName);  
  
  let option = "<option>" + baseTokenName  + "</option>";  
  let option2 = "<select>" + option + "<option>" + tradedTokenName  + "</option></select>";
  
  $('#tradeTab > div:nth-child(1)').append(option2);

}  
