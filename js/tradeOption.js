$('#tradeTab > div:nth-child(3) > div > input').keyup(function() {
  let amount = parseFloat($(this).val());
  let order = JSON.parse(localStore.getItem("tradeableOrder"));
  let tokenName = $('#tradeTab > div:nth-child(1) > select').val();
  let element = $('option[name="' + tokenName + '"]');
  let tokenAddress = element.attr("address");
  let amountA,amountB;
  order.tokenA === tokenAddress ? amountA = parseFloat(order.limitTokenA) : amountB = parseFloat(order.limitTokenB);
  order.tokenB === tokenAddress ? amountA = parseFloat(order.limitTokenB) : amountB = parseFloat(order.limitTokenA);
  let price = (amount*(amountB/amountA)).toFixed(2);
  let baseToken = order.makerIsSeller === "true" ? order.tokenA : order.tokenB;
  let baseTokenName = $('option[address="' + baseToken + '"]').attr('name');
  let tradedToken = order.makerIsSeller === "true" ? order.tokenB : order.tokenA;
  let tradedTokenName = $('option[address="' + tradedToken + '"]').attr('name');
  $('#tradeTab > div.total > div > div:nth-child(1) > div.col-md-4 > p').text(baseTokenName);
  $('#tradeTab > div.total > div > div:nth-child(2) > div.col-md-4 > p').text(tradedTokenName);
  $('#tradeTab > div.total > div > div:nth-child(1) > div.col-md-8 > span').text(amount);  
  $('#tradeTab > div.total > div > div:nth-child(2) > div.col-md-8 > span').text(price);
});  
