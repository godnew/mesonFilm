$(function(){
    $(".header-ul").find('li').hover(function(){
        $(this).find("span").stop(true,true).animate({'width':'100%'},400);
    },function(){
        if(!$(this).hasClass("header-active")) {
            $(this).find("span").stop(true, true).animate({'width': '0%'}, 400);
        }
    });
    $(".header-ul").children("li").each(function(){
        if($(this).hasClass("header-active")){
            $(this).find("span").css({'width':'100%'});
        }
    });
    (function() {
        var a = document.getElementsByTagName('html')[0], b = document.getElementById('container');
        var scroll_width = 100;

        if(document.addEventListener){
            document.addEventListener('DOMMouseScroll', mousewheel_event, false); // FF
        }
        a.onmousewheel = mousewheel_event; // IE/Opera/Chrome

        function mousewheel_event(e) {
            var e = e || window.event, v;
            e.wheelDelta ? v=e.wheelDelta : v=e.detail;
            if(v>3||-v>3) v=-v;
            v>0 ? a.scrollLeft+=scroll_width : a.scrollLeft-=scroll_width;
            var x=$("body").scrollLeft();
            if(v>0){
                var m=x+scroll_width;
                $("body").stop(true,true).animate({scrollLeft:m},300,"linear");
            }else {
                var n = x - scroll_width;
                if (n < 0)n = 0;
                $("body").stop(true,true).animate({scrollLeft:n},300,"linear");
            }
        }
    })();
    function changeSize(){
        var w=parseInt(document.body.clientHeight)-100;
        $("#film-bg").height(w);
        $("#film-bg").width(w);
        $("#container-logo").height(w);
        $("#container-logo").width(w);
        $("#message").height(w);
        $("#message>ul").height(w/3);
        $("#message>ul>li").width(2*w/3);
        if(($("#container-logo").width()+$("#message").width())>parseInt(document.body.clientWidth)){
            $("#container").width($("#container-logo").width()+$("#message").width()+2);
        }else{
            $("#container").width(parseInt(document.body.clientWidth));
            $("html").css("overflowX",'hidden');
        }

        console.log(parseInt(document.body.clientWidth));
        console.log($("#container-logo").width()+$("#message").width());
        console.log($("#message").width());
        console.log($("#container-logo").width());
    }
    changeSize();
    $(window).resize(function(){
        changeSize();
        $("#container").width($("#container-logo").width()+$("#message").width()+2);
        changeSize();
    });
    $("#message>ul>li").hover(function(){
            $(this).find(".share").stop(true,true).animate({bottom:0},300,"linear");
            $(this).find(".img").stop(true,true).animate({top:'-1em'},300,"linear");
        },
        function(){
            $(this).find(".share").stop(true,true).animate({bottom:'-3.5em'},300,"linear");
            $(this).find(".img").stop(true,true).animate({top:'0'},300,"linear");
        }
    );
    $(".share").find("li:first-child a").attr("href","http://connect.qq.com/intro/login");
    $(".share").find("li:nth-of-type(2) a").attr("href","https://wx.qq.com/");
    $(".share").find("li:last-child a").attr("href","http://weibo.com/");
    var show= setTimeout(function(){changeSize();clearTimeout(show)},1);
});