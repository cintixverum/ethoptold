$.get("https://www.optionsdexapi.tk/getApprovedTokens",function(tokenArray,status) {
    tokenArray.forEach(function(arr) {
        let paragraph = '<p fullname="' + arr['token_symbol'] + '" decimals="' + arr['decimals'] +  '" address="' + arr['token_address'] + '" >' + arr['token_symbol'] + '</p>'
        $('#search-dropdown').append(paragraph);
    });
    $('.baseToken').text(localStore.getItem("baseToken"));
    $('.tradedToken').text(localStore.getItem("tradedToken"));
    $('.timeframe').text(localStore.getItem("timeframe"));
    if(window.location.href === "https://optionsdex.github.io/") {
      updateOrderbook();
      getMyOrders();
      console.log($('#ordersList'));  
      localStore.getItem("buySell") === "buy" ? $('#buySell > label.btn.btn-default.btn-on.btn-sm').addClass('active') : $('#buySell > label.btn.btn-default.btn-off.btn-sm').addClass('active');
      localStore.getItem("optionType") === "put" ? $('#optionType > label.btn.btn-default.btn-off.btn-sm').addClass('active') : $('#optionType > label.btn.btn-default.btn-on.btn-sm').addClass('active');
    }       
});
