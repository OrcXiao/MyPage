//设置默认的状态。
var state = true;
//显示兴趣爱好。
function showInt() {
    //选中全部的li(这里是一个数组）。
    var li = $('#interest>li');
    var liLen = li.length;
    if (state) {
        state = false;
        for (var i = 0; i < liLen; i++) {
            var num = (i+1)*24.8;
            li.eq(i).css('transform','translateX('+ num + 'vw)');
        }
    } else {
        state = true;
        for (var i = 0; i < liLen; i++) {
            li.eq(i).css('transform','');
        }
    }
}

//在技能区域，条幅宽度的改变。
function widthChange(index,num,time) {
    //index:下标，（指定数组中的哪一个）。
    //num：限定值，（希望给DIV设定的宽度）。
    //time:间隔的时间。
    var number =0;
    var a = setInterval(function () {
        //设定一个计时器，每隔一段时间执行一次函数。
        number++;
        $(".Skill>ul>li>p").eq(index).html(number + '%');
        //把变化的值传给p标签里面的元素。
        $(".Skill>ul>li>div").eq(index).css('width',number + '%');
        //把变化的值设置为div的宽度。
        if (number == num){
            //当递增的数值与给定的值相等时，清除计时器。
            clearInterval(a);
        }
    },time)
}

// 。
function toTop(event) {

    if($(window).scrollTop() >= 300){
        $("#toTop").fadeIn(500);
        //滚动距离大于300时，显示.
    }else {
        $("#toTop").fadeOut(500);
        //滚动距离小于300时，隐藏.
    }
}

$("#toTop").click(function () {
    event.preventDefault();
    //取消事件的默认动作，兼容性处理
    $('body,html').animate({scrollTop: 0}, 500);
    //animate() 方法执行 CSS 属性集的自定义动画。
});


//点击导航栏，跳转到相应的地方。
function clickLi() {
    var newID = $(this).attr('datatype');
    $('html,body').animate({scrollTop: ($("#" + newID).offset().top)},500);
}



var cssState = true;
//滑动屏幕时，触发函数。
$(window).scroll(function(){
    if($(this).scrollTop() >= 300){
        $("#toTop").fadeIn(500);
        //滚动距离大于300时，显示.
    }else{
        $("#toTop").fadeOut(500);
        //滚动距离小于300时，隐藏.
    }
    if ($(this).scrollTop() >= ($("#skill").offset().top -100) && (cssState == true)){
        widthChange(0,90,15);
        widthChange(1,80,17);
        widthChange(2,70,19);
        widthChange(3,70,19);
        widthChange(4,65,22);
        widthChange(5,75,17);
        cssState = false;
    }
    if($(this).scrollTop() < ($("#skill").offset().top -100) ||
        $(this).scrollTop() > ($("#contact").offset().top)){
        cssState = true;
    }
});

//文档就绪事件。
$(document).ready(function () {
    $("#toTop").fadeOut();
    $("#btn").click(showInt);
    $("#headUl>li").click(clickLi);
    toTop();
});





