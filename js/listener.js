$('#buySell > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  localStore.setItem("buySell",$(this).find('input').val());
  window.location.reload(true);  
});

$('#buySell > label.btn.btn-default.btn-off.btn-sm').on('click', function() {
  localStore.setItem("buySell",$(this).find('input').val());  
  window.location.reload(true);  
});

$('#optionType > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  localStore.setItem("optionType",$(this).find('input').val()); 
  window.location.reload(true);  
});

$('#optionType > label.btn.btn-default.btn-off.btn-sm').on('click', function() {
  localStore.setItem("optionType",$(this).find('input').val());  
  window.location.reload(true);  
});
$('#createBuySell > label.btn.btn-default').on('click', function() {
  localStore.setItem("createBuySell",$(this).find('input').val());
});
$('#createCallPut > label.btn.btn-default').on('click', function() {
  localStore.setItem("createCallPut",$(this).find('input').val()); 
});
$('#body > div.main > div:nth-child(3) > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > div > form > div:nth-child(1) > select').on('change', function() {
  localStore.setItem("orderTimeframe",$(this).val());
})
$('#baseToken').on('change', function() {
  if(this.value === "Base Token") return;
  localStore.setItem("baseToken",this.value);
  $('.baseToken').text(localStore.getItem("baseToken"));
  window.location.reload(true);  
});
$('#timeframe').on('change', function() {
  if(this.value === "Select Timeframe") return;  
  localStore.setItem("timeframe",this.value);
  $('.timeframe').text(localStore.getItem("timeframe")); 
  window.location.reload(true);  
})
$("#orderbook").on("click", "tr", function() {
  $("tr").removeClass("selected","");
  $(this).addClass("selected"); 
  let order = JSON.parse($(this).attr('order'));
  contractFunctions.takeOption(order);
});
$('#tradeTab > div:nth-child(3) > div > input').keyup(function() {
  let amount = parseFloat($(this).val());
  let order = JSON.parse(localStore.getItem("tradeableOrder"));
  let tokenName = $('#tradeTab > div:nth-child(1) > select').val();
  let element = $('option[name="' + tokenName + '"]');
  let tokenAddress = element.attr("address");
  let amountA = parseFloat(order.limitTokenA);
  let amountB = parseFloat(order.limitTokenB);
  let price = (amountB/amountA).toFixed(2);
  price = tokenAddress === order.tokenA ? (amount*(1/price)).toFixed(2) : (amount*price);
  let baseToken = order.tokenA;
  let baseTokenName = $('option[address="' + baseToken + '"]').attr('name');
  let tradedToken = order.tokenB;
  let tradedTokenName = $('option[address="' + tradedToken + '"]').attr('name');
  let base,traded;
  tokenAddress === order.tokenB ? (base = tradedTokenName,traded = baseTokenName) : (traded = tradedTokenName,base = baseTokenName);
  $('#tradeTab > div.total > div > div:nth-child(1) > div.col-md-4 > p').text(base);
  $('#tradeTab > div.total > div > div:nth-child(2) > div.col-md-4 > p').text(traded);
  $('#tradeTab > div.total > div > div:nth-child(1) > div.col-md-8 > span').text(amount);  
  $('#tradeTab > div.total > div > div:nth-child(2) > div.col-md-8 > span').text(price);
});  
$('#status > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  $('#body > div.wallet-container > div > div > form > input').val('Deposit');
  localStorage.setItem('depositWithdraw','deposit');
});

$('#status > label.btn.btn-default.btn-off.btn-sm').on('click', function() {
  $('#body > div.wallet-container > div > div > form > input').val('Withdraw');
  localStorage.setItem('depositWithdraw','withdraw');  
});
$('#status > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  $('#positionsTab').hide();
  $('#ordersList').hide();  
  $('#tradeTab').show();
});
$('#status > label.btn.btn-default.btn-on.btn-sm:nth-child(2)').on('click', function() {
  $('#tradeTab').hide();
  $('#ordersList').hide();    
  $('#positionsTab').show();
});
$('#status > label.btn.btn-default.btn-on.btn-sm:nth-child(3)').on('click', function() {
  $('#positionsTab').hide();
  $('#tradeTab').hide();  
  $('#ordersList').show();
});
  $("#imaginary_container > div:nth-child(1) > input").keyup(function() {
    var $ps = $("#search-dropdown > p");
    var val = $.trim(this.value).toUpperCase();
    if (val === "") {
        $("#search-dropdown").hide(); 
    }
    else {
        $("#search-dropdown").show(); 
        $ps.hide();
        $ps.filter(function() {
            return -1 != $(this).text().toUpperCase().indexOf(val); }).show();
    } 
    $ps.one("click", function() {
      if(localStore.getItem("tradedToken") !== $(this).attr("fullname")) {
        localStore.setItem("tradedToken",$(this).attr("fullname"));       
      }
      $('.baseToken').text(localStore.getItem("baseToken"));
      $('.tradedToken').text(localStore.getItem("tradedToken"));
      $("#imaginary_container > div:nth-child(1) > input").val('');      
      $("#search-dropdown").hide();  
      window.location.reload(true);  
    });
  });
$("#imaginary_container > div:nth-child(1) > input").keyup(function() {
    var $ps = $("#search-dropdown > p");
    var val = $.trim(this.value).toUpperCase();
    if (val === "") {
        $("#search-dropdown").hide(); 
    }
    else {
        $("#search-dropdown").show(); 
        $ps.hide();
        $ps.filter(function() {
            return -1 != $(this).text().toUpperCase().indexOf(val); }).show();
    } 
    $ps.one("click", function() {
      if($('.depositToken').text() !== $(this).attr("fullname")) {
        localStore.setItem("depositToken",$(this).attr("fullname"));  
        $('.depositToken').text(localStore.getItem("depositToken"));
        $("#imaginary_container > div:nth-child(1) > input").val('');      
        $("#search-dropdown").hide();
        contractFunctions.getWalletBalance(loadBalance);
      }        
    });
  });
$('#body > div.main > div:nth-child(3) > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > div > form > input').on('click', function() {
  contractFunctions.create();
});  
$('#positionsTab > div > span:nth-child(1) > button').on('click', function() {
  let order = JSON.parse(localStorage.getItem("tradeableOrder"));
  contractFunctions.closeOption(order);
});
$('#positionsTab > div > span:nth-child(2) > button').on('click', function() {
  let order = JSON.parse(localStorage.getItem("tradeableOrder"));  
  contractFunctions.cancelOptionOrder(order);
})


