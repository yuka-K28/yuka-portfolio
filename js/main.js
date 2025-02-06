const headeMove = $('header');
$(window).on("load scroll", function() {
  if ($(this).scrollTop() > 300 && !headeMove.hasClass("isFixed")) {
    headeMove.css("display", "block");
    headeMove.css({"top": "-10px", "transition": "top 0.6s"});
    headeMove.addClass("isFixed");
    setTimeout(() => headeMove.css("top", "0"), 0);
  } else if ($(this).scrollTop() < 300 && headeMove.hasClass("isFixed")) {
    headeMove.removeClass("isFixed");
    headeMove.css("display", "none");
  }
});

//fade-inのjquery

$(function(){
    $(window).scroll(function(){
      $('.fade-in').each(function(){
        const elemPos = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if(scroll > elemPos - windowHeight){
          $(this).addClass('scroll-in');
        }
      });
    });
    jQuery(window).scroll();
});
// メニュー切り替えボタンのクリックイベント
document.querySelector('.menu-toggle').addEventListener('click', function () {
  const tabMenu = document.querySelector('#tab-menu');
  tabMenu.classList.toggle('open'); // クラスを切り替え
});
