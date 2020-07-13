
var path = require("path");
var mongoose = require("mongoose");
var Image = require("../models/image.js");
var fs = require("fs");
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
const readline = require('readline');
const {google} = require('googleapis');
const TOKEN_PATH = 'token.json';
var CalendarArray=[];
var callsCompleted=1;
var multer = require("multer");
var upload = multer({dest: "./kimUploads"});
const code ='node_modules/async/dist/ssn.json';


module.exports=function(app){
  
// credentials.json
///GOOGLE CALENDAR 
// app.get("/check-cred", function(req,res1){

//       fs.readFile(code, (err, content) => { 
//         if (err) return console.log('Error loading client secret file:', err);
//         authorize(JSON.parse(content), listEvents);
//       });

//       function authorize(credentials, callback) {
//         const {client_secret, client_id, redirect_uris} = credentials.installed;
//         const oAuth2Client = new google.auth.OAuth2(
//             client_id, client_secret, redirect_uris[0]);

//         fs.readFile(TOKEN_PATH, (err, token) => {
//           if (err) return getAccessToken(oAuth2Client, callback);
//           oAuth2Client.setCredentials(JSON.parse(token));
//           callback(oAuth2Client);
//         });
//       }

//       function getAccessToken(oAuth2Client, callback) {
//           const authUrl = oAuth2Client.generateAuthUrl({
//             access_type: 'offline',
//             scope: SCOPES,
//           });
//           console.log('Authorize this app by visiting this url:', authUrl);
//           const rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout,
//           });
//           rl.question('Enter the code from that page here: ', (code) => {
//             rl.close();
//             oAuth2Client.getToken(code, (err, token) => {
//               if (err) return console.error('Error retrieving access token', err);
//               oAuth2Client.setCredentials(token);
//               // Store the token to disk for later program executions
//               fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
//                 if (err) console.error(err);
//                 console.log('Token stored to', TOKEN_PATH);
//               });
//               callback(oAuth2Client);

//             });
//           });
//       }

//       function listEvents(auth) {
//       const calendar = google.calendar({version: 'v3', auth});
//       calendar.events.list({

//         //calendarId:encodeURIComponent('p51tsobed51ggtvudmug0tum1ls@group.calendar.google.com'),
//         calendarId:'primary',
//         timeMin: (new Date()).toISOString(),
//         //timeMin: (new Date()),
//         maxResults: 7,
//         singleEvents: true,
//         orderBy: 'startTime',
//       }, (err, res) => { 
//         if (err) return console.log('The API returned an error: ' + err);
//         const events = res.data.items;
//         if (events.length) {
//           console.log('Upcoming 10 events:');
//           events.map((event, i) => {
            
//         //console.log(event)
//           var description= event.description;
//           var band =event.summary;
//           var end=new Date(event.start.dateTime)
//           var tiempo= new Date(event.end.dateTime);
//           var date=new Date(event.start.dateTime);
//           //var endTime= tiempo.toLocaleString('en-us',{hour:'numeric',minute:'numeric',hour12:true})
//           // var startTime= end.toLocaleString('en-us',{hour:'numeric',minute:'numeric',hour12:true})
//            //var date= date.toLocaleString('en-us',{weekday:'long',month:'long',day:'numeric'})
//           console.log(band.indexOf("Wine"))
//           var startTime=end;
//           var endTime=tiempo;

//           var link=event.location;

//           var CalendarObject={

//               endTime:endTime,
//               startTime:startTime,
//               description:description,
//               summary:band,
//               timeSpan:startTime+" - "+endTime,
//               date:date,
//               link:link,
//               number:i
//             }

//        if(band.indexOf("Wine") >= 0){CalendarObject.link="/images/wine.jpg";}

//        else if(event.attachments==undefined && link!= undefined){
//             CalendarObject.altLink="";
//         }

//         // else if(event.attachments!=undefined && link== undefined){
//         //      CalendarObject.link="https://lh3.google.com/u/0/d/"+event.attachments[0].fileId+"=w762-h570-p-k-nu-iv1";
//         //      CalendarObject.altLink="https://lh3.google.com/u/0/d/"+event.attachments[0].fileId+"=w762-h570-p-k-nu-iv1";
//         // }

//         // else if(event.attachments!=undefined && link!= undefined){
//         //      CalendarObject.link="https://lh3.google.com/u/0/d/"+event.attachments[0].fileId+"=w762-h570-p-k-nu-iv1";
//         //      CalendarObject.altLink="https://lh3.google.com/u/0/d/"+event.attachments[0].fileId+"=w762-h570-p-k-nu-iv1";
//         // }

//         else{
//             if (band.toLowerCase()==="Tim Reynolds".toLowerCase()) {CalendarObject.link="/images/tim.jpg";}
//             if(band.toLowerCase()==="Ned Ryerson".toLowerCase()){CalendarObject.link="/images/ned.jpg";}
//             if(band.toLowerCase()==="Sneak Attack".toLowerCase()){CalendarObject.link="/images/sneak.jpg";}
//             if(band.toLowerCase()==="Dj Cali".toLowerCase()){CalendarObject.link="/images/drinks.jpg";}
//             if(band.toLowerCase()==="Sir Cedric".toLowerCase()){CalendarObject.link="/images/cedrick.jpg";}
//         }

//     CalendarArray.push(CalendarObject)

//                 if(callsCompleted==events.length){
//                   res1.send(CalendarArray)
//                   callsCompleted=1;

//                 }
//                 else{
//                   callsCompleted++;
//                 }

//           });
  
          
//         } 
//         else {
//           console.log('No upcoming events found.');
//         }

//       });
//     }
//     CalendarArray=[];
// })
// ///GOOGLE CALENDAR 
    

///UPLOAD IMAGE FOR KIM
///this uploads images
app.post('/profile-1', upload.single('avatar'), function (req, res, next) {

  fs.readdir("./kimUploads", function(err, data) {
    Image.find({}).exec(function(error,data2){if (error){console.log('err: ' + error);}
      fs.readFile("./kimUploads/"+data[0], function(err, imageData){
      if(data2.length==0){
          var NewImage= new Image ({
            data: imageData,
            filename:req.file.filename
          })
        
          NewImage.save(function(err,doc){
            if (err){console.log('err: ' + err);}
            else{
               // console.log(doc);
                fs.unlink("./kimUploads/"+req.file.filename, (err) => {if (err) throw err;
                  res.redirect('/');})

            }
          })

      }

      else{

        Image.updateMany({}, {$set:{data:imageData,filename:req.file.filename}}).exec(function(error,data3){
          if (error){
                console.log('err: ' + error);
                }
          else{  
                fs.unlink("./kimUploads/"+req.file.filename, (err) => {if (err) throw err;res.redirect('/')})
                }   
        })

      }
  })

  })

})

})
          





app.post('/profile', function (req, res, next) {
console.log(req.body)
var itemArray=[];
if(req.body.item1 != ""){ itemArray.push(req.body.item1)}
if(req.body.item2 != ""){ itemArray.push(req.body.item2)}
if(req.body.item3 != ""){ itemArray.push(req.body.item3)}
if(req.body.item4 != ""){ itemArray.push(req.body.item4)}

Image.find({}).exec(function(error,data){
  if(data.length==0){
      console.log("NEW DOC")
      var NewImage= new Image ({missing: itemArray})
      NewImage.save(function(err,doc){console.log(doc);
      res.redirect("/manager")})
  }
  
  else{
      console.log("Existing DOC")
      console.log(data[0].missing)
      console.log(req.body)
      Image.updateMany({},{$push: {missing: {$each:itemArray}}}).exec(function(error,data){
      Image.find({}).exec(function(error,data1){ console.log(data1)
      res.redirect("/manager")})
      })
    }
  })
})


 
app.get("/uploads",function(req,res){
   
   Image.find({}).exec(function(error,imageData){
    if (error){console.log('err: ' + error);}

    else{
        if(imageData.length==0){
          return false;
        }
        var base64data = new Buffer(imageData[0].data, 'binary').toString('base64');
        res.set({'Content-Type':'image/jpeg'});
        res.send(base64data);
    }
   })
})

 

 app.get("/jim",function(req,res){
    Image.find({}).exec(function(error,data2){
      res.send(data2)
    })

})


  app.post("/del",function(req,res){
    Image.deleteMany({}).exec(function(error,data2){
      if(data2.length==0){res.send("Nothing to Delete")}
      else{res.redirect('/manager')};
    // res.send("Deleted");
    })

})





  app.post("/del-box",function(req,res){
   console.log(req.body.checkboxArray)
   var check= req.body.checkboxArray; 
   console.log("")
   console.log(check.length)
  var callsCompleted2=0;
   for(i=0;i<check.length;i++){
    callsCompleted2++;
     //[ check[i] ]
     console.log(check[i])
    Image.updateMany({},{ $pull: { missing:
    { $in: check[i]}} },
    { multi: true }).exec(function(error,data3){
      if(error){console.log(error)}
      else{console.log(data3);console.log("DATAA333")}
   
})

    if(callsCompleted2==check.length){
      res.redirect("/manager")
    }


   }

})



app.get("/find",function(req,res){Image.find({}).exec(function(error,data){res.send(data)})})

app.get("/qr", function(req, res) {res.sendFile(path.join(__dirname, "../suites/qr.html"));});
app.get("/manager", function(req, res) {res.sendFile(path.join(__dirname, "../suites/kim.html"));});
app.get("/about", function(req, res) {res.sendFile(path.join(__dirname, "../suites/about.html"));});
app.get("/events", function(req, res) {res.sendFile(path.join(__dirname, "../suites/events.html"));});
app.get("/menu", function(req, res) {res.sendFile(path.join(__dirname, "../suites/menu.html"));});
app.get("/social", function(req, res) {res.sendFile(path.join(__dirname, "../suites/social.html"));});
app.get("/instagram", function(req, res) {res.sendFile(path.join(__dirname, "../suites/instagram.html"));});
app.get("/mobile-uploads", function(req, res) {res.sendFile(path.join(__dirname, "../suites/mobile-uploads.html"));});
app.get("/gallery", function(req, res) {res.sendFile(path.join(__dirname, "../suites/gallery.html"));});
app.get("/about", function(req, res) {res.sendFile(path.join(__dirname, "../suites/about.html"));});
app.get("/timeline", function(req, res) {res.sendFile(path.join(__dirname, "../suites/timeline.html"));});
app.get("/specials", function(req, res) {res.sendFile(path.join(__dirname, "../suites/specials.html"));});
app.get("/admin.jimbos.com", function(req, res) {res.sendFile(path.join(__dirname, "../suites/kim.html"));});






}////MODULE END///////



  
