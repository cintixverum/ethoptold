$('#status > label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  $('#body > div.wallet-container > div > div > form > input').value('Deposit');
});

$('#status > label.btn.btn-default.btn-off.btn-sm').on('click', function() {
  $('#body > div.wallet-container > div > div > form > input').value('Withdraw');
});
