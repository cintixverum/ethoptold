$('label.btn.btn-default.btn-on.btn-sm').one('click', function() {
  console.log($(this).find('input').val());
});
