function toFixedNumber(i) {
    console.log(i);
    if(~i.toString().indexOf("e")) {
        let num = parseInt(i);
        while(i > 1) {
            num += "0";
            i /= 10;
        }
        return num;
    }
    return i.toString();
}

$('#tradeTab > input').on('click', function() {
  let order = JSON.parse(localStore.getItem("tradeableOrder"));
  let tokenName = $('#tradeTab > div:nth-child(1) > select').val();
  let element = $('option[name="' + tokenName + '"]');
  let tokenAddress = element.attr("address");
  let amount =  new BigNumber($('#tradeTab > div:nth-child(3) > div > input').val());
  let isTradingTokenA = tokenAddress === order.tokenA;
  let decimals = isTradingTokenA ? parseInt(order.tokenADecimals) : parseInt(order.tokenBDecimals); 
  let adjustedAmount = toFixedNumber(parseFloat(amount.multipliedBy(decimals)));
  contractFunctions.tradeOption(order,adjustedAmount,isTradingTokenA);
});
