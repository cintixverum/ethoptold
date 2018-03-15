$.get("https://www.optionsdexapi.tk/getApprovedTokens",function(tokenArray,status) {
    tokenArray.forEach(function(arr) {
        let paragraph = '<p fullName="' + arr['token_name'] + '" decimals="' + arr['decimals'] +  '" address="' + arr['token_address'] + '" >' + arr['token_symbol'] + '</p>'
        console.log(paragraph);
        $('#search-dropdown').append(paragraph);
    });
});
