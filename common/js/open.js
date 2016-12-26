$(document).ready(function(){
    $(".codecontent").hide();
    var flg = "close";
    $(".codebtn").click(function(){
        $(".codecontent").slideToggle();
        if(flg == "close"){
            $(this).text("適応症状を閉じる");
            flg = "open";
        }else{
            $(this).text("適応症状を見る");
            flg = "close";
        }
    });
});