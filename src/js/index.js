$(function(){
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

  function CheckForm() {
    if (document.search_one.text_one.value == "") {
        alert("请输入需要搜索的关键词");
        document.search_one.text_one.focus();
        return false;
    } else {
        var urlstr = encodeURI(document.search_one.text_one.value);
        //var city = document.search_one.citymk.value;
        var urlx = 'http://s.hxnews.com/cse/search?s=28529395802979984&nsid=4&entry=1&q=' + urlstr;
        //document.search_one.action = urlx;
        //document.search_one.submit();
        window.open(urlx);
    }
    return false;
  }
});