function loadTrade() {

  let order = localStore.setItem("tradeableOrder");
  
  let tradedTokenQuery = "p[address='" + order.tokenA + "']";
  let baseTokenQuery = "p[address='" + order.tokenB + "']";
  let tradedTokenName = $(tradedTokenQuery).attr("fullname");
  let baseTokenName = $(baseTokenQuery).attr("fullname");
  
  $('.tradeableOrderBaseTokenName').text(baseTokenName);
  $('.tradeableOrderTradedTokenName').text(tradedTokenName);
 
  let option = "<option>" + baseTokenName  + "</option>";  
  let option2 = option + "<option>" + tradedTokenName  + "</option>";
  
  $('#tradeTab > div:nth-child(1) > select').append(option2);
  
}  
