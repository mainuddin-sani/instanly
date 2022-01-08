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

  


  /*========================================
        Menu itemToggle
    ========================================*/

/*========================================
    back-to-top
    ========================================*/
    // var html_body = $('html,body');
    // var backTotop = $(".ic-back-to-top");
    // backTotop.on('click', function() {
    //     html_body.animate({
    //         scrollTop: 0
    //     }, 1000)
    // });

    $(window).on('scroll', function() {
        var scrolling = $(this).scrollTop();
        if (scrolling > 30) {
            $('.navbar-light').addClass('animated fadeInDown active');
        } else {
            $('.navbar-light').removeClass('animated fadeInDown active');
        }
        // if (scrolling > 300) {
        //     backTotop.fadeIn(300);
        // } else {
        //     backTotop.fadeOut(300);
        // }
    });
 

 
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
