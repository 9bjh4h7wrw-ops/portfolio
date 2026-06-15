// Hamburger menu
jQuery("#js-button-drawer").on("click", function () {
  jQuery(this).toggleClass("is-checked");
  jQuery("#js-drawer").slideToggle(280);
  jQuery("body").toggleClass("is-fixed");
});

// Close drawer when nav link clicked (mobile)
jQuery("#js-drawer .header__nav-link").on("click", function () {
  if (jQuery(window).width() < 768) {
    jQuery("#js-button-drawer").removeClass("is-checked");
    jQuery("#js-drawer").slideUp(280);
    jQuery("body").removeClass("is-fixed");
  }
});

// Back to top
jQuery("#js-button-top").on("click", function () {
  jQuery("html, body").animate({ scrollTop: 0 }, 500);
});

// Show/hide back to top button
const $topBtn = jQuery("#js-button-top");
jQuery(window).on("scroll", function () {
  if (jQuery(this).scrollTop() > 80) {
    $topBtn.fadeIn(300);
  } else {
    $topBtn.fadeOut(300);
  }
});

// On desktop resize: reset mobile menu state
jQuery(window).on("resize", function () {
  if (jQuery(window).width() >= 768) {
    jQuery("#js-drawer").removeAttr("style");
    jQuery("#js-button-drawer").removeClass("is-checked");
    jQuery("body").removeClass("is-fixed");
  }
});
