var activeSection = $('#about').attr('id');
var anchorOffset = 70;
console.log('activeSection', activeSection);
var navLis = $('nav li');
var anchors = $('.anchor');
$("nav a").click(function() {
  var goto = $(this).attr('href');
  
  $.each(navLis, function() {
    //remove the active class on all links releated to the clicked nav a
    $(this).removeClass('active');
  })

  $(this).parent().addClass('active');
  
  $(document).off("scroll", onScroll);
  $('html, body').animate({
    scrollTop: $(goto).offset().top - anchorOffset
  }, 500, function(){
    $(document).on("scroll", onScroll);
  } );
});

$(document).on("scroll", onScroll);

function onScroll() {
  var currentSection = null;
  var scrollPos = $(document).scrollTop() + anchorOffset;
  $.each(anchors, function() {
    var scrollTop = $(this).position().top;
    if (scrollPos >= scrollTop) {
      currentSection = $(this).attr('id');
    }
  })

  if (currentSection !== null && currentSection != activeSection) {
    activeSection = currentSection;
    $.each(navLis, function() {
      //remove the active class on all links releated to the clicked nav a
      if ($(this).children('a').attr('href') == "#" + activeSection) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    })
  }
};