
function ResizeNavBar(){
      var win = $(window).width();
      if (win < 800) {
        console.log("HELL")
        console.log(win)
        // $('#flex').css("display","inline-block !important");
        $('#logo').removeClass('col-2');
        $('#nav-button').removeClass('col-10');
        $('#logo').addClass('col-8');
        $('#nav-button').addClass('col-4');
        $('#nav-button').removeClass('col-10');

        $('#img-flex').removeClass('person');
         $('#img-flex').removeClass('mr-3');

      } else {
        $('#logo').removeClass('col-8');
        $('#nav-button').removeClass('col-4');
        $('#logo').addClass('col-2');
        $('#nav-button').addClass('col-10');
        $('#img-flex').addClass('person');
         $('#img-flex').addClass('mr-3');
      }
          
};






// EMBED SOCIAL
     (function(d, s, id){
        var js; 
        if (d.getElementById(id)) {
          return;
        }      
          js = d.createElement(s); 
          js.id = id; 
          js.src = "https://embedsocial.com/embedscript/ei.js"; 
          d.getElementsByTagName("head")[0].appendChild(js);
      }
          (document, "script", "EmbedSocialScript"));
//EMBED SOCIAL    
    


    $(document).on("click","#head", function(){
    document.getElementById( 'top' ).scrollIntoView();
    })


    $(window).on('resize', function() {
      ResizeNavBar();
   });

    


   setTimeout(function(){$("#k").fadeOut();},5000)


ResizeNavBar();