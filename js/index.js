$(function () {
    //移动端手势切换图片
    banner();
    //移动端页签
    initMobileTab();
    //初始化工具提示
    $('[data-toggle="tooltip"]').tooltip();
})

var banner = function () {
    var startX = 0;
    var distanceX = 0;
    var isMove = false;
    /*originalEvent 代表js原生事件,jquery事件对象要加上orginalEvent*/
    $(".wjs-banner").on("touchstart", function (e) {
        startX = e.originalEvent.touches[0].clientX;
    }).on("touchmove", function (e) {
        var moveX = e.originalEvent.touches[0].clientX;
        distanceX = moveX - startX;
        isMove = true;
    }).on("touchend", function (e) {
        /*距离足够 50px 一定要滑动过*/
        if (isMove && Math.abs(distanceX) > 50) {
            /*手势*/
            /*左滑手势*/
            if (distanceX < 0) {
                //console.log('next');
                $(".carousel").carousel("next");
            }
            /*右滑手势*/
            else {
                //console.log('prev');
                $(".carousel").carousel("prev");
            }
        }
        startX = 0;
        distanceX = 0;
        isMove = false;
    });
}
var initMobileTab = function () {
    //解决换行问题
    var width = 0;
    var $navTabs = $(".wjs-product .nav-tabs");
    $navTabs.find("li").each(function (index, key) {
        /*
         * width()  内容
         * innerWidth() 内容+内边距
         * outerWidth() 内容+内边距+边框
         * outerWidth(true) 内容+内边距+边框+外边距
         * */
        var liWidth = $(this).outerWidth(true);
        width += liWidth;
    })
    console.log(width);
    $navTabs.width(width);

    new IScroll($(".nav-tabs-parent")[0],{
        scrollX:true,
        scrollY:false
    })
}
