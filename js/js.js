$( ".faq__row" ).on( "click", function() {
    if($(this).hasClass("faq__row-active")) {
        $(this).removeClass("faq__row-active");
        $(this).find(`.faqRow__content`).slideUp("slow");
    } else {
        $(`.faq__row-active`).removeClass("faq__row-active");
        $(`.faqRow__content`).slideUp("slow");
        $(this).addClass("faq__row-active");
        $(this).find(".faqRow__content").slideDown("slow");
    }
  } );

  $( ".burger__btn" ).click(function() {
    $("body").addClass("body-overlay");
    $(".mob__menu").addClass("mob__menu-active");
});

$( ".mobMenu__closeBtn" ).click(function() {
    $("body").removeClass("body-overlay");
    $(".mob__menu").removeClass("mob__menu-active");
});