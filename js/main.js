// ハンバーガーメニュー
$(function(){
$('.hamburger').on('click',function(){
    hamburger();
});

$('#navi a').on('click',function(){
    hamburger();
});

// インビュー
$('.inview-balloon').on('inview',function(event, isInView, visiblePartX, visiblePartY){
    if(isInView){
        $(this).stop().addClass('balloon-questions');
    }else{
        $(this).stop().removeClass('balloon-questions');
    }
});
// フェードイン
$(window).scroll(function () {
    const wHeight = $(window).height();
    const wScroll = $(window).scrollTop();
        $(".point").each(function () {
            const bPosition = $(this).offset().top;
        if (wScroll > bPosition - wHeight + 200) {
            $(this).stop().addClass("fadeIn");
        }else{
            $(this).stop().removeClass("fadeIn"); 
        }
    });
});

});

function hamburger(){
    $('.hamburger').toggleClass('active');

    if($('.hamburger').hasClass('active')){
        $('#navi').addClass('active');

    }else{
        $('#navi').removeClass('active');
    }
}

