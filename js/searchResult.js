$.get("https://www.optionsdexapi.tk/getApprovedTokens",function(tokenArray,status) {
    tokenArray.forEach(function(arr) {
        let paragraph = '<p fullname="' + arr['token_name'] + '" decimals="' + arr['decimals'] +  '" address="' + arr['token_address'] + '" >' + arr['token_symbol'] + '</p>'
        console.log(paragraph);
        $('#search-dropdown').append(paragraph);
    });
    $('.baseToken').text(localStore.getItem("baseToken"));
    $('.tradedToken').text(localStore.getItem("tradedToken"));
    $('.timeframe').text(localStore.getItem("timeframe"));
    updateOrderbook();
});
