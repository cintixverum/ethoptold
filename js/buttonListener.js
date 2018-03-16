$('label.btn.btn-default.btn-on.btn-sm').on('click', function() {
  console.log($(this).find('input').val());
});
