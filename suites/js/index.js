
setTimeout(function(){$("#n").fadeIn(1000);},700);

//Take Out Modal...Get Rid Of MOdal when Summer OCCurs or 
// WHEN COVID IS Over get rid of click function that closes modal
// #n closes the take modal
// (KEEP THIS.... setTimeout(function(){$("#n").fadeIn(1000);},700);)


function ResizeNavBar2(){
      var win2 = $(window).width();
      if (win2 < 400) {     
         console.log(win2)
        $("#append-images").hide();
      } 
      else {
        $("#append-images").show();
      }
};

$(window).on('resize', function() {
  ResizeNavBar2();
});
 ResizeNavBar2();

////RESIZENAVBAR2 is for side images in desktop vieew and takes them away in mobile view


/////TWITTER BUTTON
    var x=0;
$(document).on("click",".hide-tweets",function(){
  var tweetButton='<a class="btn btn-primary pill text-white px-4 icon-twitter hide-tweets"> close tweets</a>'

      if(x==0){
        console.log(x)
        for(i=0;i<platter.length;i++){
             var Step1='<br><br><div class="media-with-text"><div class="img-border-sm mb-4">';
             var Step2='<img src="'+platter[i].link+'" alt="" class="img-fluid adjust-size" style="width:250px;height:250px !important"></div>';
             var Step3='<h2 class="heading mb-0"><a>'+platter[i].heading+'</a></h2></div><br><br><br><br>';

          $("#append-images").append(Step1+Step2+Step3);
        }
          $("#hide").show();
          $(".hide-tweets").hide();
          $("#append-tweets").append(tweetButton);
          x++;
      }
      else{
        console.log(x)
        $("#append-images").empty();
         $("#hide").hide();
         $(".hide-tweets").show();
         document.getElementById( 'h2-top' ).scrollIntoView();
         x=0;
      }

})

///TWITTER FEED END////

//var genericMessage='Toseedetailedinformationforautomaticallycreatedeventslikethisone,usetheofficialGoogleCalendarapp.https://g.co/calendarThiseventwascreatedfromanemailyoureceivedinGmail.https://mail.google.com/mail?extsrc=cal&plid=ACUX6DNpOz_Qba5sc7TZdi7yiFaXcsNMUpeWNTU';

////CALENDAR FEED////4
    // $.ajax({
    //         method: "GET",
    //         url: "/check-cred"
    //       }).done(function(data) {
    //          console.log(data)
    //           for(i=0;i<data.length;i++){
    //             var a = new Date(data[i].startTime)
    //             var b = new Date(data[i].endTime)
    //             var startTime= a.toLocaleString('en-us',{hour:'numeric',minute:'numeric',hour12:true})
    //             var endTime= b.toLocaleString('en-us',{hour:'numeric',minute:'numeric',hour12:true})
    //             var date= a.toLocaleString('en-us',{weekday:'long',month:'long',day:'numeric'})
    //             console.log(startTime)
    //             console.log(endTime)
    //             console.log(date)
    //             // console.log(data[i].description.replace(/\s/g, ""))
    //          // data[i].description==undefined || 
    //             if(data[i].description==undefined || data[i].description.replace(/\s/g, "")===genericMessage){data[i].description="";console.log("JJJJ")}
    //             if(data[i].timeSpan=="Invalid Date - Invalid Date"){data[i].timeSpan="";}
    //             if(data[i].date=="Invalid Date"){data[i].date="";}
    //             // if(data[i].summary==undefined){data[i].description="";}

    //             var pre='<div class="p-4"><div id="flex" class="d-flex block-testimony"><div class="person mr-3 flex"><img src="'
    //               +data[i].link+'" id="event-img" alt="Image" class="img-fluid rounded-1"></div><div style="line-height: 20px"><h2 class="white-text-1">'
    //               +data[i].summary+'</h2><blockquote class="white-text">'
    //               +date+'</blockquote><blockquote class="white-text">'
    //               +data[i].description+'</blockquote><blockquote class="white-text">'
    //               +startTime+"-"+endTime+'</blockquote></div></div></div><br>';
    //             $("#append-cal").append(pre)
    //           }
    //       })
///END CALENDAR FEED//



//// COUNTDOWN CLOCK////
var CountDownDate= "2019/07/04";
      $("#days").countdown(CountDownDate, function(event) {
        $(this).text(event.strftime('%D'))
      });
      $("#hours").countdown(CountDownDate, function(event) {
        $(this).text(event.strftime('%H'))
      });
      $("#minutes").countdown(CountDownDate, function(event) {
        $(this).text(event.strftime('%M'))
      });
      $("#seconds").countdown(CountDownDate, function(event) {
        $(this).text(event.strftime('%S'))
      });





      // $("#days-3").countdown("2019/05/27", function(event) {
      //   $(this).text(event.strftime('%D'))
      // });
      // $("#hours-3").countdown("2019/05/27", function(event) {
      //   $(this).text(event.strftime('%H'))
      // });
      // $("#minutes-3").countdown("2019/05/27", function(event) {
      //   $(this).text(event.strftime('%M'))
      // });
      // $("#seconds-3").countdown("2019/05/27", function(event) {
      //   $(this).text(event.strftime('%S'))
      // });


//// END COUNTDOWN CLOCK////


///POSTER CHANGE////
// $.ajax({
//             method: "GET",
//             url: "/uploads"
//           }).done(function(data) {
//              console.log(data)
//             $('#poster').attr("src",data)
//       })
////POSTER CHANGE////

 var special = new Date()
 var active= special.toLocaleString('en-us',{weekday:'long'})
 var weekArray=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

 for(i=0;i<weekArray.length;i++){
    if(weekArray[i]===active){
        console.log(active)
        console.log("SPECIALLL")
    }
 }




jQuery(function($) {
    $(".overflow").on('scroll', function() {
        if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
          $("#append-cal").css("border-bottom","10px solid red");
        }
        else{
          $("#append-cal").css("border-bottom","none")
        }
    })
});



