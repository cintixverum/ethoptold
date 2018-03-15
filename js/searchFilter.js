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
        console.log($ps.text());
        $ps.filter(function() {
            return -1 != $ps.text().toUpperCase().indexOf(val); }).show();
    }
  });
