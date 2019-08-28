$(function () {
    //�ƶ��������л�ͼƬ
    banner();
    //�ƶ���ҳǩ
    initMobileTab();
    //��ʼ��������ʾ
    $('[data-toggle="tooltip"]').tooltip();
})

var banner = function () {
    var startX = 0;
    var distanceX = 0;
    var isMove = false;
    /*originalEvent ����jsԭ���¼�,jquery�¼�����Ҫ����orginalEvent*/
    $(".wjs-banner").on("touchstart", function (e) {
        startX = e.originalEvent.touches[0].clientX;
    }).on("touchmove", function (e) {
        var moveX = e.originalEvent.touches[0].clientX;
        distanceX = moveX - startX;
        isMove = true;
    }).on("touchend", function (e) {
        /*�����㹻 50px һ��Ҫ������*/
        if (isMove && Math.abs(distanceX) > 50) {
            /*����*/
            /*������*/
            if (distanceX < 0) {
                //console.log('next');
                $(".carousel").carousel("next");
            }
            /*�һ�����*/
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
    //�����������
    var width = 0;
    var $navTabs = $(".wjs-product .nav-tabs");
    $navTabs.find("li").each(function (index, key) {
        /*
         * width()  ����
         * innerWidth() ����+�ڱ߾�
         * outerWidth() ����+�ڱ߾�+�߿�
         * outerWidth(true) ����+�ڱ߾�+�߿�+��߾�
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
