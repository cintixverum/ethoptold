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
        $('.baseToken').html(localStore.getItem("baseToken"));
        $('.tradedToken').html(localStore.getItem("tradedToken"));                             
      }
    });
  });

