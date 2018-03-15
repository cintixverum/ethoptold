  var $ps = $("#search-dropdown > p");
  $("#imaginary_container > div:nth-child(1) > input").keyup(function() {
    var val = $.trim(this.value).toUpperCase();
    console.log(val);
    if (val === "") {
        $("#search-dropdown").hide(); 
    }
    else {
        $("#search-dropdown").show(); 
        $ps.hide();
        $ps.filter(function() {
            console.log($(this).text());
            return -1 != $(this).text().toUpperCase().indexOf(val); }).show();
    }
  });
