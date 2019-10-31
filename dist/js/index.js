"use strict";

$(function () {
    /**
     * 海峡网
     */
    // 页眉 js
    $(".hxw-nav-list-last").hover(function () {
        $('.hxw-more').addClass("cur");
        $('.hxw-nav-others').css("display", "block");
    }, function () {
        $('.hxw-nav-others').css("display", "none");
        $('.hxw-more').removeClass("cur");
    });
    $(".hxw-client-tl").hover(function () {
        $(".hxw-yd").addClass("cur");
        $('.hxw-dropdown').css("display", "block");
    }, function () {
        $('.hxw-dropdown').css("display", "none");
        $(".hxw-yd").removeClass("cur");
    });
    // 头部
    $('.hx-area').on('click', 'li', function (event) {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.hx-city-box').find('.hx-city').eq($(this).index()).addClass('active').siblings().removeClass('active');
        event.stopPropagation();
    });
    $('.tri-zk').hover(function () {
        $(this).parents('.hx-dalei-nav').addClass('cur');
        $(this).hide();
    });
    $('.hx-dalei-nav').hover(function () {}, function () {
        $(this).removeClass('cur');
        $('.tri-zk').show();
    });
    /**
     * 胶东在线
     */
    // 头部的 城市切换
    $(".jd-area li").each(function (index) {
        var that = this;
        $(that).mouseenter(function () {
            $(that).addClass("active").siblings().removeClass("active");
            $($(".jd-city-box .jd-city")[index]).addClass("active").siblings().removeClass("active");
        });
    });
});

function CheckForm() {
    if (document.search_one.text_one.value == "") {
        alert("请输入需要搜索的关键词");
        document.search_one.text_one.focus();
        return false;
    } else {
        var urlstr = encodeURI(document.search_one.text_one.value);
        //var city = document.search_one.citymk.value;
        var urlx = 'http://zhannei.baidu.com/cse/search?s=6924920297305690263&entry=1&q=' + urlstr;
        //document.search_one.action = urlx;
        //document.search_one.submit();
        window.open(urlx);
    }
    return false;
}