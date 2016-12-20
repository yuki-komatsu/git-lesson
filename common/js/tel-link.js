$(function(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 && ua.indexOf('iPod') == -1 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0 && ua.indexOf('SC-01C') == -1 && ua.indexOf('A1_07') == -1 ){
        $('.tel-link img').each(function(){
            var alt = $(this).attr('alt');
            $(this).wrap($('<a>').attr('href', 'tel:' + alt.replace(/-/g, '')));
        });
    }
});