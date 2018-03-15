$.get("https://www.optionsdexapi.tk/getApprovedTokens",function(tokenArray,status) {
    tokenArray.forEach(function(arr) {
        let newRow = '<tr><th>' + arr['token_name'] + '</th><th id="' + arr['token_name'] + '" decimals=' + arr['decimals'] +  '>' + arr['token_symbol'] + '</th><th>' + arr['token_address'] + '</th></tr>'
        $('#searchResult').load(newRow);
    });
});        
