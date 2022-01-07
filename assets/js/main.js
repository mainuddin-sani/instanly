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
        color picker
    ========================================*/
    $('#cp2').colorpicker();

  /*========================================
        Preloader
    ========================================*/

  $(window).on("load", function () {
    $("#loading").fadeOut(500);
  });

  // $(".main-sidebar").niceScroll();

  /*========================================
        Toggle Fullscreen
    ========================================*/

  function toggleFullscreen(elem) {
    elem = elem || document.documentElement;
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  $("#btnFullscreen").on("click", function () {
    toggleFullscreen();
  });

  /*========================================
        Sidebar Toggle
    ========================================*/

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

  var $icMaineNavbar = $(".ic-navbar-nav"),
    $icSubMenuNav = $icMaineNavbar.find(".ic-dropdown-sub-menu");
  $icSubMenuNav.slideUp();
  $icMaineNavbar.on("click", "li a, li .menu-expand", function (e) {
    var $this = $(this);
    if (
      $this
        .parent()
        .attr("class")
        .match(
          /\b(ic-menu-item-has-children|has-children|has-ic_sub_menu)\b/
        ) &&
      ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
    ) {
      e.preventDefault();
      if ($this.siblings("ul:visible").length) {
        $this.siblings("ul").slideUp("slow");
      } else {
        $this.closest("li").siblings("li").find("ul:visible").slideUp("slow");
        $this.siblings("ul").slideDown("slow");
      }
    }
    if (
      $this.is("a") ||
      $this.is("span") ||
      $this.attr("clas").match(/\b(menu-expand)\b/)
    ) {
      $this.parent().toggleClass("menu-open");
    } else if (
      $this.is("li") &&
      $this.attr("class").match(/\b('ic-menu-item-has-children')\b/)
    ) {
      $this.toggleClass("menu-open");
    }
  });

  /*========================================
        Carousel
    ========================================*/
  $(".ic-slide-only").slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
  });

  //Slider With Control

  $(".ic-slide-controls").slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
  });

  //Slider With Indicators

  $(".ic-slide-indicators").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
  });
  //Slider With Caption

  $(".ic-slider-with-caption").slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
  });

  //Slider With Thumbnil

  $(".ic-slider-thumbnil-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".ic-slider-thumbnil",
    dots: false,
  });
  $(".ic-slider-thumbnil").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".ic-slider-thumbnil-main",
    dots: false,
    focusOnSelect: true,
  });

  $(function () {
    var start = moment().subtract(29, "days");
    var end = moment();

    function cb(start, end) {
      $("#reportrange span").html(
        start.format("D MMMM, YYYY") + " - " + end.format("D MMMM, YYYY")
      );
    }

    $("#reportrange").daterangepicker(
      {
        startDate: start,
        endDate: end,
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [
            moment().subtract(1, "days"),
            moment().subtract(1, "days"),
          ],
          "Last 7 Days": [moment().subtract(6, "days"), moment()],
          "Last 30 Days": [moment().subtract(29, "days"), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
          "Last Month": [
            moment().subtract(1, "month").startOf("month"),
            moment().subtract(1, "month").endOf("month"),
          ],
        },
      },
      cb
    );

    cb(start, end);
  });
  /*========================================
        Email Check All
    ========================================*/

  $("#flexCheckDefault").on("click", function () {
    $(".check-email").prop("checked", $(this).prop("checked"));
    $(".check-flexDefault").prop("checked", $(this).prop("checked"));
    $(".check-dropAll").prop("checked", $(this).prop("checked"));
  });

  $("#checkDropdownAll").on("click", function () {
    $(".check-email").prop("checked", $(this).prop("checked"));
    $(".check-flexDefault").prop("checked", $(this).prop("checked"));
    $(".check-dropAll").prop("checked", $(this).prop("checked"));
  });

  $(".check-email").on("click", function () {
    let childEmailNum = $(".check-email").length;

    let checkedItems = 0;
    $(".check-email").each(function () {
      if ($(this).prop("checked")) {
        checkedItems++;
      }
    });

    if (checkedItems < childEmailNum) {
      $(".check-flexDefault").prop("checked", false);
      $(".check-dropAll").prop("checked", false);
    } else {
      $(".check-flexDefault").prop("checked", true);
      $(".check-dropAll").prop("checked", true);
    }
  });

  // ------------ starred email -----------

  $(".ic-email-star").on("click", function () {
    $(this).toggleClass("ri-star-line ");
    $(this).toggleClass("ri-star-fill ic-starred");
  });

  // ----------- Summernote ------------

  $("#summernote").summernote({
    placeholder: "Write Message Here",
    tabsize: 2,
    height: 120,
    toolbar: [
      ["style", ["style"]],
      ["font", ["bold", "underline", "clear"]],
      ["color", ["color"]],
      ["para", ["ul", "ol", "paragraph"]],
      ["table", ["table"]],
      ["insert", ["link", "picture"]],
      ["view", ["codeview", "help"]],
    ],
  });


  /**Jquery End **/
})(jQuery);
