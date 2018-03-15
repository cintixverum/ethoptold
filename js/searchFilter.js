  var $ps = $("#search-dropdown > p");
  $("#imaginary_container > div:nth-child(1) > input").keyup(function() {
    var val = $.trim(this.value).toUpperCase();
    console.log(val);
    if (val === "") {
        $("#search-dropdown").hide(); 
    }
    else {
        $ps.filter(function() {
            var bool = -1 !== $(this).text().toUpperCase().indexOf(val);
            if(bool) {
              $("#search-dropdown").show();
            }
           console.log(bool);
           return bool;
        }).show();
    }
  });
