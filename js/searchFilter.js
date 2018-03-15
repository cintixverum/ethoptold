  var $ps = $("#search-dropdown > p");
  $("#imaginary_container > div:nth-child(1) > input").keyup(function() {
    var val = $.trim(this.value).toUpperCase();
    if (val === "") {
        $("#search-dropdown").hide(); 
    }
    else {
        $("#search-dropdown").show(); 
        $ps.filter(function() {
            return -1 === $(this).text().toUpperCase().indexOf(val); }).hide();
    }
  });
