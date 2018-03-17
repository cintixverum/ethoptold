$.get("https://www.optionsdexapi.tk/getApprovedTokens",function(tokenArray,status) {
    tokenArray.forEach(function(arr) {
        let paragraph = '<p fullname="' + arr['token_name'] + '" decimals="' + arr['decimals'] +  '" address="' + arr['token_address'] + '" >' + arr['token_symbol'] + '</p>'
        console.log(paragraph);
        $('#search-dropdown').append(paragraph);
    });
    $('.baseToken').text(localStore.getItem("baseToken"));
    $('.tradedToken').text(localStore.getItem("tradedToken"));
    $('.timeframe').text(localStore.getItem("timeframe"));
    console.log(window.location.href);
    if(window.location.href === "https://optionsdex.github.io/") {
      updateOrderbook();    
      localStore.getItem("buySell") === "buy" ? $('#buySell > label.btn.btn-default.btn-on.btn-sm').addClass('active') : $('#buySell > label.btn.btn-default.btn-off.btn-sm').addClass('active');
      localStore.getItem("optionType") === "put" ? $('#optionType > label.btn.btn-default.btn-on.btn-sm').addClass('active') : $('#optionType > label.btn.btn-default.btn-off.btn-sm').addClass('active');
    }
    else if(window.location.href === "https://optionsdex.github.io/wallet.html") {
      $('#body > div.wallet-container > div > div > form > div:nth-child(1) > div > input').attr('placeholder',walletFunctions.getBalance());        
    }        
});
