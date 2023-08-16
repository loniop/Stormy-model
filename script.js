function dark() {
  bew();
  reload();
};
function bew() {
         let model-viewerDiv = document.getElementById("img");
         model-viewerDiv.environment-image = 'ot.hdr'; // replace the image on button click.
};
function reload(){
    var container = document.getElementById("img");
    var content = container.innerHTML;
    container.innerHTML= content; 
    
   //this line is to watch the result in console , you can remove it later	
    console.log("Refreshed"); 
}
