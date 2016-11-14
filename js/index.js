$("#toTop").fadeOut();
$(window).scroll(winScroll);
//回到顶部的点击事件
$("#toTop").click(function (event) {
    event.preventDefault();
    //取消事件的默认动作，兼容性处理
    $('body,html').animate({scrollTop: 0}, 500);
    //animate() 方法执行 CSS 属性集的自定义动画。
});


//显示兴趣爱好。
//设置默认的状态。
var state = true;
function showInt() {
    var li = $('#interest li');
    //选中全部的li(这里是一个数组）。
    var liLen = li.length;
    if (state) {
        state = false;
        for (var i = 0; i < liLen; i++) {
            var num = (i + 1) * 24.8;
            li.eq(i).css('transform', 'translateX(' + num + 'vw)');
        }
    } else {
        state = true;
        for (var i = 0; i < liLen; i++) {
            li.eq(i).css('transform', '');
        }
    }
}

//在技能区域，条幅宽度的改变。
function widthChange(index, num, time) {
    //index:下标，（指定数组中的哪一个）。
    //num：限定值，（希望给DIV设定的宽度）。
    //time:间隔的时间。
    var number = 0;
    var a = setInterval(function () {
        //设定一个计时器，每隔一段时间执行一次函数。
        number++;
        $(".skill>ul>li>p").eq(index).html(number + '%');
        //把变化的值传给p标签里面的元素。
        $(".skill>ul>li>div").eq(index).css('width', number + '%');
        //把变化的值设置为div的宽度。
        if (number == num) {
            //当递增的数值与给定的值相等时，清除计时器。
            clearInterval(a);
        }
    }, time)
}

//点击导航栏，跳转到相应的地方。
function clickHeaderLi() {
    var newID = $(this).attr('datatype');
    $('html,body').animate({scrollTop: ($("#" + newID).offset().top)}, 500);
}

//滑动屏幕时，触发函数。
var cssState = true;
function winScroll() {
    if ($(this).scrollTop() >= 300) {
        $("#toTop").fadeIn(500);
        //滚动距离大于300时，显示.
    } else {
        $("#toTop").fadeOut(500);
        //滚动距离小于300时，隐藏.
    }
    if ($(this).scrollTop() >= ($("#skill").offset().top - 200)
        && cssState ){
        setTimeout(function () {
            $("#skill>ul").css("display", "block");
            widthChange(0, 90, 15);
            widthChange(1, 80, 17);
            widthChange(2, 70, 19);
            widthChange(3, 70, 19);
            widthChange(4, 65, 22);
            widthChange(5, 75, 17);
            cssState = false;
        },500);
    }
    if ($(this).scrollTop() < ($("#skill").offset().top - 600) ||
        $(this).scrollTop() >= ($("#item").offset().top - 200)) {
        $("#skill>ul").css("display", "none");
        cssState = true;
    }
    if ($(this).scrollTop() >= ($("#contact").offset().top - 400)){
        $("#contact>ul").css('display','block');
    }
    if ($(this).scrollTop() < ($("#contact").offset().top - 650)){
        $("#contact>ul").css('display','none');
    }
}

//点击项目图片时执行的操作。
$("#item li").click(function () {
    $("#showBigPic").css("animation", 'showFadeIn .6s ease-in-out forwards');
    //显示窗口执行向下滑动（出现）的动画。
    $("#shade").css("display", 'block');
    //遮罩层出现
    $("html,body").css("overflow", 'hidden');
    //去除窗口的滚动条
    $("html,body").css("paddingRight", '1vw');
    $("header>ul").css("marginRight", '3.85vw');
    //由于滚动条的去除，造成了屏幕宽度的增加，添加这两行代码，消除其影响。
    var num = $(this).index();
    $("#bigPic").prop("src", "images/item/" + num + ".jpg");
    //根据选中li的下标，显示对应的图片。
});

//点击遮罩层和关闭按钮执行的操作。
function shadeAndClose() {
    $("#showBigPic").css("animation", 'showFadeOut .4s ease-in-out forwards');
    //显示窗口执行向上滑动（隐藏）的动画。
    $("#shade").css("display", "none");
    //隐藏遮罩层
    $("html,body").css("overflow", 'auto');
    //窗口出现滚动条。
    $("html,body").css("paddingRight", '');
    $("header>ul").css("marginRight", '');
    //清除多余的样式。
}

//文档就绪事件。
$(document).ready(function () {
    $("#btn").click(showInt);
    $("#headUl>li").click(clickHeaderLi);
    $("#shade,#close").click(shadeAndClose);

});










