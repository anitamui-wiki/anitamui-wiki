$(document).ready(function () {
          $('#menuArrow').click (function() {
            if ($('#menu').css('opacity') == 0) {
                $('#menu').css({"opacity":"0.95", "visibility":"visible"});
                $('#invisible').css({"opacity":"0", "visibility":"hidden"});
                $('#menu div a').css({"transform":"translateX(0pt)"});
                $('#menuArrow').css({"transform":"translateX(20pt) rotate(180deg)"});
            }
            else{
                $('#menu').css({"opacity":"0", "visibility":"hidden"});
                $('#menu div a').css({"transform":"translateX(-100pt)"});
                $('#menuArrow').css({"transform":"translateX(0pt) rotate(0)"});            
            }
        });
});
