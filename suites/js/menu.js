 $("#head").hide();

  var data;  
  var a;   
  $(document).on("click",
    "#Platters, #Paninis, #Pizza, #Drinks,#Raw,#Dessert,#Fajitas,#Starters" ,function(){
      $("#append-menu").empty()
       $("#heading").empty()
        a = $(this).attr("id")
        if(a ==="Sushi"){data=sushi;Menu(data);}
        // if(a ==="Sushi"){data=sushi;Menu(data);}
        if(a ==="Platters"){data=platter;Menu(data);}
        if(a ==="Paninis"){data=panini;Menu(data);}
        if(a ==="Starters"){data=starter;Menu(data);}
        if(a ==="Pizza"){data=pizza;Menu(data);}
        if(a ==="Raw"){data=raw;Menu(data);}
        if(a ==="Fajitas"){data=fajita;Menu(data);}
        if(a ==="Dessert"){data=dessert;Menu(data);}
        if(a ==="Drinks"){data=drinks;Menu(data);}
        console.log(a)
  })

  $(document).on("click","#Sushi" ,function(){
     $("#append-menu").empty()
       $("#heading").empty()
    // window.location.href='/images/sushi-menu.jpg';
    window.open('/images/sushi-menu.jpg','_blank');
  })



 function Menu(data){


            for(i=0;i<data.length;i++){

                console.log(data)

                var Step1='<div class="col-md-6 col-lg-4 mb-5"><div class="media-with-text"><div class="img-border-sm mb-4">';

                var Step2='<img src="'+data[i].link+'" alt="" class="img-fluid adjust-size"></div>';

                var Step3='<h2 class="heading mb-0"><a>'+data[i].heading+'</a></h2>';

                var Step4= '<p>'+data[i].p+'</p></div></div>';


                // if(data[i].heading==="Crushes"||data[i].heading==="Rum Buckets"||data[i].heading==="Frozen Drinks"||data[i].heading==="Crushes"||data[i].heading==="Specialty Drinks"){
                //     Step3='<h2 class="heading mb-0 text-center"><a>'+data[i].heading+'</a></h2>';

                //   }


                $("#append-menu").append(Step1+Step2+Step3+Step4)
                 document.getElementById( 'menu-vanish' ).scrollIntoView();
                 $("#head").show();
            }
        
             $("#heading").append( '<div class="col-md-6 mx-auto text-center mb-5 section-heading"><h2>'+a+'</h2></div>')
 }


    $(document).on("click","#head1", function(){
          document.getElementById( 'up-menu' ).scrollIntoView();
        $("#heading").empty()
        $("#append-menu").empty()
    })


