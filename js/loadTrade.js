function setBalance(val) {
  $('#tradeTab > div:nth-child(2) > div > input').attr('placeholder',val);
}  

function loadTrade() {
  $('#tradeTab > div:nth-child(1) > select > option').not(':first').remove();
  
  let baseTokenName = localStore.getItem("tradeableOrderBaseTokenName");
  let tradedTokenName = localStore.getItem("tradeableOrderTradedTokenName");
  
  let tradedTokenQuery = "p[fullname='" + tradedTokenName + "']";
  let baseTokenQuery = "p[fullname='" + baseTokenName + "']";
  let tradedTokenAddress = $(tradedTokenQuery).attr("address");
  let baseTokenAddress = $(baseTokenQuery).attr("address");
  
  $('.tradeableOrderBaseTokenName').text(baseTokenName);
  $('.tradeableOrderTradedTokenName').text(tradedTokenName);  
  
  let option = '<option address="' + baseTokenAddress + '" name="' + baseTokenName + '">' + baseTokenName  + "</option>";  
  let option2 = option + '<option address="' + tradedTokenAddress + '" name="' + tradedTokenName + '">' + tradedTokenName  + "</option>";  
  
  $('#tradeTab > div:nth-child(1) > select').append(option2);
  
  let order = JSON.parse(localStore.getItem("tradeableOrder"));
  
  $('#tradeTab > div:nth-child(1) > select').change(function() {
    let tokenAddress = $(this).attr("address");
    let inputVal = $('#tradeTab > div:nth-child(1) > select').val();
    console.log(inputVal,$(this));
    let tokenName = $(this).attr("name");
    $('#tradeTab > div:nth-child(2) > div > span > span').text(tokenName);
    $('#tradeTab > div:nth-child(3) > div > span > span').text(tokenName);
    contractFunctions.getOrderBalance(order,tokenAddress,setBalance);
  });  

}  
