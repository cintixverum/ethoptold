$('#status > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  $('#body > div.wallet-container > div > div > form > input').val('Deposit');
  localStorage.setItem('depositWithdraw','deposit');
  console.log(localStorage.getItem("depositWithdraw"));
});

$('#status > label.btn.btn-default.btn-off.btn-sm').on('click', function() {
  $('#body > div.wallet-container > div > div > form > input').val('Withdraw');
  localStorage.setItem('depositWithdraw','withdraw');  
  console.log(localStorage.getItem("depositWithdraw"));
});
