// ハンバーガーボタンとドロワー
jQuery("#js-button-drawer").on("click", function () {
  $(this).toggleClass("is-checked");
  $("#js-drawer").slideToggle();
  $("body").toggleClass("is-fixed");
});

// topへ戻る
jQuery("#js-button-top").on("click", function () {
  jQuery("html,body").animate({ scrollTop: 0 }, 500);
});

// topボタンをトップから80pxスクロールしたら300msかけて表示する
const topbtn = jQuery("#js-button-top");
jQuery(window).on("scroll", function () {
  if (jQuery(this).scrollTop() > 80) {
    topbtn.fadeIn(300);
  } else {
    topbtn.fadeOut(300);
  }
});
