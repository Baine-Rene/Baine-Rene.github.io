//Cursor

document.addEventListener('DOMContentLoaded', function() {
    var cursor = document.querySelector('.cursor');
  
    document.addEventListener('mousemove', function(e) {
      var x = e.clientX;
      var y = e.clientY;
  
      cursor.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    });
  });

  $(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
    
 });

$('.oleez-header .dropdown').hover(function() {
  $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
}, function() {
  $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
});


 //End Cursor

 $('.hiro-nav-popup-toggle').click(function(){
  $('body').toggleClass('hiro-nav-popup-modal-open');
});

$('.oleez-header .dropdown').hover(function() {
  $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
}, function() {
  $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
});

$('[data-toggle="offCanvasMenu"]').click(function() {
  $('#offCanvasMenu').addClass('open');
});

$('[data-dismiss="offCanvasMenu"]').click(function() {
  $(this).parent('#offCanvasMenu').removeClass('open');
});

$('[data-toggle="searchModal"]').click(function() {
  $('#searchModal').addClass('open');
});

$('[data-dismiss="searchModal"]').click(function() {
  $(this).parent('#searchModal').removeClass('open');
});