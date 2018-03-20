$('#tradeTab > input').on('click', function() {
  let order = JSON.parse(localStore.getItem("tradeableOrder"));
  contractFunctions.tradeOptions();
});
