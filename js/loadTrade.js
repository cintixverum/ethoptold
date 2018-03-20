function loadTrade() {
  let baseTokenName = localStore.getItem("tradeableOrderBaseTokenName");
  let tradedTokenName = localStore.getItem("tradeableOrderTradedTokenName");
  
  $('.tradeableOrderBaseTokenName').text(baseTokenName);
  $('.tradeableOrderTradedTokenName').text(tradedTokenName);  
  
  if($('#tradeTab > div:nth-child(1) > select').children() === 1) {
    let option = "<option>" + baseTokenName  + "</option>";  
    let option2 = option + "<option>" + tradedTokenName  + "</option>";
    $('#tradeTab > div:nth-child(1) > select').append(option2);
  }
}  
