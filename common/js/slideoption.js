$(function(){
        $.sublime_slideshow({
            src:[
            {url:"../../images/index/main_img01.jpg"},
            {url:"../../images/index/main_img02.jpg"},
            {url:"../../images/index/main_img03.jpg"}
            ],
            duration:   7,/*画像ごとの存続時間、単位は秒*/
            fade:       1,/*フェードイン・フェードアウトの速度指定、単位は秒*/
            scaling:    1.2,/*拡大エフェクトの設定、値は画像サイズの倍率になります。*/
            rotating:   2,/*回転エフェクトの設定、値は度数で指定する。*/
            overlay:    "../../images/index/pattern.png"/*マスク画像のurlを指定する文字列/*
        });
    });