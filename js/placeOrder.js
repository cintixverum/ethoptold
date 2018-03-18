$('#body > div.main > div:nth-child(3) > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > div > form > input').on('click', function() {
  let orderTimeframe = localStore.getItem("orderTimeframe");
  let strike_price = $('#body > div.main > div:nth-child(3) > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > div > form > div:nth-child(2) > div > input').val();  
  let amount = $('#body > div.main > div:nth-child(3) > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > div > form > div:nth-child(3) > div > input').val();
  console.log($('.place-order input'));
  console.log(strike_price,amount,orderTimeframe);
});  
