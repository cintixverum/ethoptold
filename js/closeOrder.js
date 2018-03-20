$('#positionsTab > div > span:nth-child(1) > button').on('click', function() {
  let order = JSON.parse(localStorage.getItem("tradeableOrder"));
  contractFunctions.closeOption(order);
});
