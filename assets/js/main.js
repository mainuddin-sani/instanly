/*===============================================

Theme Name:Clan Dash  Admin Template
Version:1.0
Author: ITCLAN
Support: itclan@gmail.com
Description: Clan Dash  Admin Template

NOTE:
=====
Please DO NOT EDIT THIS JS, you may need to use "custom.js".

===============================================**/

(function ($) {
  ("use strict");

  /*========================================
        Tooltips
    ========================================*/
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  /*========================================
        popover
    ========================================*/
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })

  /*========================================
        Preloader
    ========================================*/

  $(window).on("load", function () {
    $("#loading").fadeOut(500);
  });

  // $(".main-sidebar").niceScroll();

  

  if ($(window).width() < 1200) {
    $("body").addClass("ic-mini-sidebar");
  }
  $(".ic-nav-collapse").on("click", function () {
    $("body").addClass("ic-mini-sidebar");
    $(this).hide();
    $(".ic-sidebar-cancel").show();
  });
  $(".ic-sidebar-cancel").on("click", function () {
    $("body").removeClass("ic-mini-sidebar");
    $(this).hide();
    $(".ic-nav-collapse").show();
  });
  $(".ic-mobile-nav-collapse").on("click", function () {
    $("body").removeClass("ic-mini-sidebar");
    $(".ic-mobile-sidebar-close").show();
  });
  $(".ic-mobile-sidebar-close").on("click", function () {
    $("body").addClass("ic-mini-sidebar");
    $(this).hide();
  });

  /*========================================
        Menu itemToggle
    ========================================*/


 

 
  /*========================================
        Email Check All
    ========================================*/

    var a = new StickySidebar('#sidebar', {
			topSpacing: 20,
			bottomSpacing: 20,
			containerSelector: '.container',
			innerWrapperSelector: '.sidebar__inner'
		});


  /**Jquery End **/
})(jQuery);
