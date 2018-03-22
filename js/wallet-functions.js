const contractFunctions =  function() {
  let contractABI = JSON.parse('[{"constant":false,"inputs":[{"name":"tokenA_tokenB_maker","type":"address[3]"},{"name":"limitTokenA_limitTokenB_premium","type":"uint256[3]"},{"name":"maturation_expiration","type":"uint256[2]"},{"name":"makerIsSeller","type":"bool"},{"name":"premiumIsTokenA","type":"bool"}],"name":"cancelOptionOrder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokenA_tokenB_maker","type":"address[3]"},{"name":"limitTokenA_limitTokenB_premium","type":"uint256[3]"},{"name":"maturation_expiration","type":"uint256[2]"},{"name":"makerIsSeller","type":"bool"},{"name":"premiumIsTokenA","type":"bool"},{"name":"amountToOption","type":"uint256"},{"name":"tradingTokenAToOption","type":"bool"}],"name":"tradeOption","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"name":"depositToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"optionOrderCancelled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"userBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"optionTaker","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenA_tokenB_maker","type":"address[3]"},{"name":"limitTokenA_limitTokenB_premium","type":"uint256[3]"},{"name":"maturation_expiration","type":"uint256[2]"},{"name":"makerIsSeller","type":"bool"},{"name":"premiumIsTokenA","type":"bool"}],"name":"getOptionHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"fee_ratio","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenA_tokenB_maker","type":"address[3]"},{"name":"limitTokenA_limitTokenB_premium","type":"uint256[3]"},{"name":"maturation_expiration","type":"uint256[2]"},{"name":"makerIsSeller","type":"bool"},{"name":"premiumIsTokenA","type":"bool"}],"name":"closeOption","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_admin","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenA_tokenB_maker","type":"address[3]"},{"name":"limitTokenA_limitTokenB_premium","type":"uint256[3]"},{"name":"maturation_expiration","type":"uint256[2]"},{"name":"makerIsSeller","type":"bool"},{"name":"premiumIsTokenA","type":"bool"}],"name":"getOptionState","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"address"}],"name":"optionBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenA_tokenB_maker","type":"address[3]"},{"name":"limitTokenA_limitTokenB_premium","type":"uint256[3]"},{"name":"maturation_expiration","type":"uint256[2]"},{"name":"makerIsSeller","type":"bool"},{"name":"premiumIsTokenA","type":"bool"},{"name":"v","type":"uint8"},{"name":"r_s","type":"bytes32[2]"}],"name":"fillOptionOrder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdrawETH","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"depositETH","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":true,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":true,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Withdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"optionHash","type":"bytes32"}],"name":"OrderFilled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"optionHash","type":"bytes32"}],"name":"OrderCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"optionHash","type":"bytes32"},{"indexed":false,"name":"amountToOption","type":"uint256"},{"indexed":false,"name":"tradingTokenAToOption","type":"bool"}],"name":"OptionTraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"optionHash","type":"bytes32"}],"name":"OptionClosed","type":"event"}]');
  let contractAddress = "0xb9db80a18242554589bd1c1ddf5b429607a9e7ec";
  let contract = web3.eth.contract(contractABI).at(contractAddress);
  let gasPrice = 5000000000;

  function getWalletBalance(callback) {
    let userAddress = localStorage.getItem("userAddress");
    let tokenName = localStorage.getItem("depositToken");
    let query = 'p[fullname="' + tokenName + '"]'; 
    let tokenAddress = $(query).attr('address');
    let decimals = parseInt($(query).attr('decimals'));
    contract.userBalance.call(userAddress,tokenAddress, function(err,val) {
       let value = parseFloat(val)/(Math.pow(10,decimals));
       callback(value);
    })
  }
  
  function depositETH(value) {
    let userAddress = localStorage.getItem("userAddress");
    let tokenName = localStorage.getItem("depositToken");
    let query = 'p[fullname="' + tokenName + '"]'; 
    let tokenAddress = $(query).attr('address');
    let decimals = parseInt($(query).attr('decimals'));
    let ethValue = Math.pow(10,decimals)*value;	      
    let data = contract.depositETH.getData();  	  
    let Tx = {
       from: userAddress,
       to: contractAddress,
       value:ethValue,
       data: data,
       gasPrice: gasPrice
    };
    sendTransaction(Tx)
  }

  function withdrawETH(value) {
    let userAddress = localStorage.getItem("userAddress");
    let tokenName = localStorage.getItem("depositToken");
    let query = 'p[fullname="' + tokenName + '"]'; 
    let tokenAddress = $(query).attr('address');
    let decimals = parseInt($(query).attr('decimals'));    
    let ethValue = Math.pow(10,decimals)*value;	  
    let data = contract.withdrawETH.getData(ethValue);  	  
    let Tx = {
       from: userAddress,
       to: contractAddress,
       data: data,
       gasPrice: gasPrice
    };
    sendTransaction(Tx);
  }

  function depositToken(token,value) {
    let userAddress = localStorage.getItem("userAddress");
    let tokenName = localStorage.getItem("depositToken");
    let query = 'p[fullname="' + tokenName + '"]'; 
    let tokenAddress = $(query).attr('address');
    let decimals = parseInt($(query).attr('decimals'));   
    let ethValue = Math.pow(10,decimals)*value;
    console.log(userAddress,contractAddress,tokenAddress);
    let data = contract.depositToken.getData(token,ethValue);  	  
    let Tx = {
       from: userAddress,
       to: contractAddress,
       data: data,
       gasPrice: gasPrice
    };
    sendTransaction(Tx);
  }
  
  function withdrawToken(token,value) {
    let userAddress = localStorage.getItem("userAddress");
    let tokenName = localStorage.getItem("depositToken");
    let query = 'p[fullname="' + tokenName + '"]'; 
    let tokenAddress = $(query).attr('address');
    let decimals = parseInt($(query).attr('decimals'));  
    let ethValue = Math.pow(10,decimals)*value;	      
    let data = contract.withdrawToken.getData(token,ethValue);  	  
    let Tx = {
       from: userAddress,
       to: contractAddress,
       data: data,
       gasPrice: gasPrice
    };
    sendTransaction(Tx);
  }
  
  function takeOption(order) {
    let userAddress = localStorage.getItem("userAddress");    
    let tokenA_tokenB_maker = [order.tokenA,order.tokenB, order.maker];
    let limitTokenA_limitTokenB_premium = [order.limitTokenA,order.limitTokenB,order.premium];
    let maturation_expiration  = [order.maturation,order.expiration];
    let makerIsSeller = order.makerIsSeller;
    let premiumIsTokenA = order.premiumIsTokenA;
    let v = order.v;
    let r_s = [order.r,order.s];
    let data = contract.fillOptionOrder.getData(tokenA_tokenB_maker,limitTokenA_limitTokenB_premium,maturation_expiration,makerIsSeller,premiumIsTokenA,v,r_s);	
    let Tx = {
       from: userAddress,
       to: contractAddress,
       data: data,
       gasPrice: gasPrice
    };
    sendTransaction(Tx);    
  }

  function tradeOption(order,amount,bool) {
    console.log(amount,bool);
    let userAddress = localStorage.getItem("userAddress");    
    let tokenA_tokenB_maker = [order.tokenA,order.tokenB, order.maker];
    let limitTokenA_limitTokenB_premium = [order.limitTokenA,order.limitTokenB,order.premium];
    let maturation_expiration  = [order.maturation,order.expiration];
    let makerIsSeller = order.makerIsSeller;
    let premiumIsTokenA = order.premiumIsTokenA;
    let amountToOption = amount;
    let tradingTokenAToOption = bool;
    let data = contract.tradeOption.getData(tokenA_tokenB_maker,limitTokenA_limitTokenB_premium,maturation_expiration,makerIsSeller,premiumIsTokenA,amountToOption,tradingTokenAToOption);	
    let Tx = {
       from: userAddress,
       to: contractAddress,
       data: data,
       gasPrice: gasPrice
    };
    sendTransaction(Tx);    
  }
  
    function closeOption(order) {
      let userAddress = localStorage.getItem("userAddress");    
      let tokenA_tokenB_maker = [order.tokenA,order.tokenB, order.maker];
      let limitTokenA_limitTokenB_premium = [order.limitTokenA,order.limitTokenB,order.premium];
      let maturation_expiration  = [order.maturation,order.expiration];
      let makerIsSeller = order.makerIsSeller;
      let premiumIsTokenA = order.premiumIsTokenA;
      let data = contract.closeOption.getData(tokenA_tokenB_maker,limitTokenA_limitTokenB_premium,maturation_expiration,makerIsSeller,premiumIsTokenA);	
      let Tx = {
         from: userAddress,
         to: contractAddress,
         data: data,
         gasPrice: gasPrice
      };
      sendTransaction(Tx);    
    }

    function cancelOptionOrder(order) {
      let userAddress = localStorage.getItem("userAddress");    
      let tokenA_tokenB_maker = [order.tokenA,order.tokenB, order.maker];
      let limitTokenA_limitTokenB_premium = [order.limitTokenA,order.limitTokenB,order.premium];
      let maturation_expiration  = [order.maturation,order.expiration];
      let makerIsSeller = order.makerIsSeller;
      let premiumIsTokenA = order.premiumIsTokenA;
      let data = contract.cancelOptionOrder.getData(tokenA_tokenB_maker,limitTokenA_limitTokenB_premium,maturation_expiration,makerIsSeller,premiumIsTokenA);	
      let Tx = {
         from: userAddress,
         to: contractAddress,
         data: data,
         gasPrice: gasPrice
      };
      sendTransaction(Tx);    
    }

   function getOrderBalance(order,token,callback) {
    let hash = order.hash;
    console.log(hash,token);
    contract.optionBalance.call(hash,token,function(err,val) {
      if(err) return;
      callback(val);
    });  
  
  } 
  
  function getCallVolatility(initial_deposit, premium, market_price, strike_price) {
    let vol_lookup = [
    [17, 175, 293, 400, 499, 593, 682, 768, 850, 930, 1008, 1083, 1157, 1229, 1299, 1367, 1435, 1500, 1565, 1629, 1691],
    [22, 185, 308, 417, 519, 615, 706, 794, 878, 959, 1038, 1115, 1189, 1262, 1333, 1403, 1471, 1538, 1603, 1667, 1731],
    [28, 198, 324, 437, 541, 639, 733, 822, 908, 990, 1071, 1149, 1224, 1298, 1370, 1441, 1510, 1577, 1644, 1709, 1773],
    [35, 212, 343, 459, 566, 666, 761, 852, 940, 1024, 1106, 1185, 1262, 1337, 1410, 1482, 1552, 1620, 1687, 1753, 1818],
    [45, 228, 364, 483, 593, 696, 793, 886, 975, 1061, 1144, 1225, 1303, 1379, 1454, 1526, 1597, 1666, 1734, 1801, 1866],
    [57, 248, 387, 511, 623, 729, 828, 923, 1014, 1102, 1186, 1268, 1348, 1425, 1500, 1574, 1646, 1716, 1785, 1852, 1918],
    [73, 270, 415, 542, 658, 766, 867, 964, 1057, 1146, 1232, 1316, 1396, 1475, 1551, 1626, 1699, 1770, 1840, 1908, 1975],
    [93, 297, 446, 577, 696, 807, 911, 1010, 1105, 1196, 1283, 1368, 1450, 1530, 1607, 1683, 1757, 1829, 1899, 1968, 2036],
    [119, 328, 483, 618, 740, 854, 960, 1061, 1158, 1250, 1340, 1426, 1509, 1590, 1669, 1745, 1820, 1893, 1964, 2034, 2103],
    [152, 366, 526, 665, 791, 907, 1016, 1119, 1217, 1312, 1402, 1490, 1575, 1657, 1736, 1814, 1890, 1964, 2036, 2107, 2176],
    [194, 413, 578, 720, 849, 968, 1079, 1185, 1285, 1381, 1473, 1562, 1648, 1731, 1812, 1891, 1968, 2042, 2116, 2187, 2257],
    [248, 470, 639, 785, 917, 1038, 1152, 1260, 1362, 1459, 1553, 1643, 1731, 1815, 1897, 1977, 2054, 2130, 2204, 2277, 2347],
    [317, 540, 713, 862, 997, 1121, 1237, 1346, 1450, 1549, 1645, 1736, 1825, 1910, 1993, 2074, 2153, 2229, 2304, 2377, 2449],
    [406, 628, 804, 956, 1093, 1219, 1337, 1448, 1554, 1654, 1751, 1843, 1933, 2020, 2104, 2185, 2265, 2342, 2418, 2491, 2564],
    [520, 740, 917, 1070, 1209, 1337, 1457, 1569, 1676, 1778, 1875, 1969, 2060, 2147, 2232, 2314, 2394, 2473, 2549, 2623, 2696],
    [669, 883, 1059, 1213, 1353, 1482, 1602, 1716, 1823, 1926, 2024, 2119, 2210, 2298, 2384, 2467, 2548, 2626, 2703, 2778, 2851],
    [864, 1069, 1242, 1395, 1535, 1664, 1784, 1898, 2006, 2109, 2207, 2302, 2394, 2483, 2568, 2652, 2733, 2812, 2889, 2964, 3038],
    [1126, 1319, 1486, 1635, 1772, 1900, 2019, 2132, 2239, 2342, 2440, 2535, 2626, 2715, 2801, 2884, 2965, 3044, 3121, 3196, 3270],
    [1492, 1668, 1825, 1968, 2100, 2224, 2340, 2451, 2556, 2657, 2754, 2847, 2937, 3025, 3110, 3192, 3273, 3351, 3428, 3502, 3575],
    [2051, 2205, 2346, 2477, 2600, 2716, 2826, 2931, 3032, 3129, 3223, 3313, 3401, 3486, 3568, 3649, 3727, 3804, 3879, 3952, 4024],
    [3169, 3290, 3404, 3513, 3618, 3718, 3814, 3907, 3997, 4084, 4169, 4251, 4332, 4410, 4487, 4562, 4635, 4706, 4777, 4846, 4913]
    ];  
    console.log("volatility params: ", initial_deposit, premium, market_price, strike_price);
    if((strike_price <= 0) || (initial_deposit <= 0) || (strike_price < market_price)) {
        return -1;
    }
    let log_pr = Math.log(premium / (initial_deposit * market_price));
    let log_sr = Math.log(strike_price / market_price);
    let lookup_pr_start = -5;
    let lookup_pr_step = .244;
    let lookup_sr_start = 0;
    let lookup_sr_step = .25;
    let lookup_index = [(log_pr - lookup_pr_start) / lookup_pr_step,
        (log_sr - lookup_sr_start) / lookup_sr_step
    ];
    console.log(lookup_index);  
    if((lookup_index[0] < 0) || (lookup_index[0] >= 20) || (lookup_index[1] < 0) || (lookup_index[0] >= 20)) {
        return -1;
    }
    let x_ind = [Math.floor(lookup_index[0]),
        Math.ceil(lookup_index[0])
    ];
    let y_ind = [Math.floor(lookup_index[1]),
        Math.ceil(lookup_index[1])
    ];
    let x_weight = [1 - (lookup_index[0] % 1),
        (lookup_index[0] % 1)
    ];
    let y_weight = [1 - (lookup_index[1] % 1),
        (lookup_index[1] % 1)
    ];
    let volatility = x_weight[0] * y_weight[0] * vol_lookup[x_ind[0]][y_ind[0]] +
        x_weight[0] * y_weight[1] * vol_lookup[x_ind[0]][y_ind[1]] +
        x_weight[1] * y_weight[0] * vol_lookup[x_ind[1]][y_ind[0]] +
        x_weight[1] * y_weight[1] * vol_lookup[x_ind[1]][y_ind[1]];
    volatility /= 10;
    return volatility;
  }

  function prefixMessage(msgIn) {
    let msg = msgIn;
    console.log("passed to personal.sign: ", msg);
    msg = new Buffer(msg.slice(2), 'hex');
    msg = Buffer.concat([new Buffer(`\x19Ethereum Signed Message:\n${msg.length.toString()}`), msg]);
    msg = web3.sha3(`0x${msg.toString('hex')}`, {
        encoding: 'hex'
    });
    msg = new Buffer(msg.slice(2), 'hex');
    return `0x${msg.toString('hex')}`;
  };

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
  
  function create() {        
    let inputs = $('input.form-control');      
    let userAddress = localStorage.getItem("userAddress");
    
    let baseTokenName =  localStore.getItem("baseToken");
    let baseTokenQuery = "p[fullname='" + baseTokenName + "']";
    let baseTokenDecimals = $(baseTokenQuery).attr("decimals");    
    let basetoken = $(baseTokenQuery).attr("address");   
    
    let tradedTokenName =  localStore.getItem("tradedToken");    
    let tradedTokenQuery = "p[fullname='" + tradedTokenName + "']";
    let tradedTokenDecimals = $(tradedTokenQuery).attr("decimals");        
    let tradedTokenFullName = $(tradedTokenQuery).attr("name");
    let tradedtoken = $(tradedTokenQuery).attr("address");
    
    let timeframeQuery = "option[date='" + localStore.getItem("timeframe") + "']";
    let timeframe = parseInt(Date.now()/1000) + parseInt($(timeframeQuery).attr("timeseconds")); 

    let maturation = timeframe;
    let expiration = parseInt(Date.now() / 1000) + parseInt(inputs[2].value) * 60 * 60;  
      
    let optionsType = localStorage.getItem("createCallPut");      
    let optionsType2 = localStorage.getItem("createBuySell");
      
    let strike_price = parseFloat(inputs[3].value); 
    let premiumVal = parseFloat(inputs[4].value);
    let tokenAmount = parseFloat(inputs[5].value);
         
    if(!timeframe) {
        alert("Timeframe not selected!");
    }

    if(!basetoken) {
        alert("Base Token not selected!");
    }

    if(!optionsType) {
        alert("Options Type not selected");
    }

    let getURL = "https://api.coinmarketcap.com/v1/ticker/" + tradedTokenFullName + "/?convert=" + baseTokenName;

    $.get(getURL, function(tokenInfo) {

        let marketPrice;

        if(baseTokenName === "ETH") {
            marketPrice = parseFloat(tokenInfo[0].price_eth);
        }
        
        let volatility = getCallVolatility(tokenAmount,premiumVal,marketPrice,strike_price);

        if(volatility === -1) {
            alert("Invalid Orders");
            return;
        }

        let tokenAmountInBase = new BigNumber(tokenAmount).multipliedBy(strike_price);
        let amount = new BigNumber(tokenAmount).multipliedBy(Math.pow(10, tradedTokenDecimals));
        let limitTokenA = toFixedNumber(parseFloat(tokenAmountInBase.multipliedBy(Math.pow(10, baseTokenDecimals))));
        let limitTokenB = toFixedNumber(parseFloat(amount));
        let premium = toFixedNumber(parseFloat(new BigNumber(premiumVal).multipliedBy(Math.pow(10, baseTokenDecimals))));
        let makerIsSeller = optionsType2 === "sell" ? "true" : "false";

        if(optionsType === "call") {
            tokenA = basetoken;
            tokenB = tradedtoken;
        } else if(optionsType === "put") {
            tokenA = tradedtoken;
            tokenB = basetoken;
        }

        let orderObject = {
            'tokenA': tokenA,
            'tokenADecimals': baseTokenDecimals,
            'tokenB': tokenB,
            'tokenBDecimals': tradedTokenDecimals,
            'maker': userAddress,
            'taker':null,
            'limitTokenA': limitTokenA,
            'limitTokenB': limitTokenB,
            'premium': premium,
            'maturation': maturation,
            'expiration': expiration,
            'makerIsSeller': makerIsSeller,
            'premiumIsTokenA': "true",
            'volatility': volatility,
            'purchased': "false",
            'cancelled': "false",
            'hash': null,
            'v': null,
            'r': null,
            's': null
        }
        
        console.log(orderObject);

        let param1 = [orderObject['tokenA'], orderObject['tokenB'], userAddress];
        let param2 = [orderObject['limitTokenA'], orderObject['limitTokenB'], orderObject['premium']];
        let param3 = [orderObject['maturation'], orderObject['expiration']];
        let param4 = [orderObject['makerIsSeller'], orderObject['premiumIsTokenA']];   
       
        contract.getOptionHash.call(param1, param2, param3, param4[0], param4[1], function(err, val) {
            web3.eth.sign(userAddress, prefixMessage(val), function(err, val2) {
                sig = val2.substr(2, val2.length);
                let r = '0x' + sig.substr(0, 64);
                let s = '0x' + sig.substr(64, 64);
                let v = parseInt('0x' + sig.substr(128, 130));
                orderObject['v'] = v;
                orderObject['r'] = r;
                orderObject['s'] = s;
                orderObject['hash'] = val;
                $.ajax({
                    url: 'https://www.optionsdexapi.tk/placeOrder',
                    type: 'POST',
                    data: orderObject
                }, function(response, status) {
                       console.log(response);
                   });
            });
        });
    });
  }

  
  return {
    getOrderBalance,
    getWalletBalance,
    depositETH,
    withdrawETH,
    depositToken,
    withdrawToken,
    takeOption,
    tradeOption,
    closeOption,
    cancelOptionOrder,
    create  
  };
  
}();
