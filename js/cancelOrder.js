$('#positionsTab > div > span:nth-child(2) > button').on('click', function() {
  let order = JSON.parse(localStorage.getItem("tradeableOrder"));  
  contractFunctions.cancelOptionOrder(order);
});
