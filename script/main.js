$(document).ready(function() {
    $('.slide').bxSlider({
        auto: true,
        pager: true,
        speed:500,
        pause:5000,
    });
    gnb();
    lnb();
    tab();
}); 
function gnb(){
    $("ul.lnb").hide();
    $("ul.menu li").hover(function(){
        $(this).children("a").addClass("gnb_on");
        $(".lnb",this).stop().slideDown("fast");
    },function(){
        $(this).children("a").removeClass("gnb_on");
        $(".lnb",this).stop().slideUp("fast");
    });
}
function lnb(){
    $("ul.lnb li").hover(function(){
        $(this).children("a").addClass("lnb_on");
    },function(){
        $(this).children("a").removeClass("lnb_on");
    });
}
function tab(){
    var tab_menu=$(".tab > li");
    var tab_content=$("#tab_content > div");
    tab_menu.click(function(e){
        e.preventDefault();
       var tg=$(this);
       var idx=tg.index();
    if(idx==0) {
        tab_content.eq(0).siblings().hide();
        tab_content.eq(0).show();
    } else if(idx==1) {
        tab_content.eq(1).siblings().hide();
        tab_content.eq(1).show();
    } else if(idx==2) {
        tab_content.eq(2).siblings().hide();
        tab_content.eq(2).show();
       }
    });
}