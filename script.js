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
 

//About me title page transition.
document.addEventListener ('DOMContentLoaded', function() {
  var element = document.querySelector('.fade-up');
  if (element) {
    element.style.opacity = 1;
    element.style.transform = 'translateY(0)';
  }
});