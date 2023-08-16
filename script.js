var space = false;
var dark = document.querySelector("model-viewer"); 
$(function() {
  $(document).keyup(function(evt) {
    if (evt.keyCode == 32) {
      space = false;
    }
  }).keydown(function(evt) {
    if (evt.keyCode == 32) {
      space = true;
      input.toggleAttribute("environment-image");    
    }
  });
});
