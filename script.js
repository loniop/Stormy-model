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
      reload()
    }
  });
});
function reload(){
    var container = document.getElementById("img");
    var content = container.innerHTML;
    container.innerHTML= content; 
    
   //this line is to watch the result in console , you can remove it later	
    console.log("Refreshed"); 
};
