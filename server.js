var port = process.env.PORT || 3000;
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const TOKEN_PATH = 'token.json';
var CalendarArray=[];
var callsCompleted=1;
var moment = require('moment-timezone');
var multer = require("multer");
var upload = multer({dest: "./kimUploads"});
moment().tz("America/New_York").format();
var mongoose = require("mongoose");
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/Jimbos");
//var conn = mongoose.connection;

//app.use(express.bodyParser({uploadDir:'./uploads'}));

if (!process.env.MONGODB_URI){
  mongoose.connect("mongodb://localhost/Jimbos");
  }
else{
  mongoose.connect(process.env.MONGODB_URI)
    }



app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("./suites"));

var db= mongoose.connection;
  
  db.on("error", function(error){
  console.log("Mongoose Error",error)
  });
  db.once("open", function(error){
  console.log("Mongoose Rocks")
  });

require("./routes/images.js")(app);
//require("./routes/outfits.js")(app);




// ///GOOGLE CALENDAR 
// app.get("/check-cred", function(req,res1){

//     	fs.readFile('credentials.json', (err, content) => { 
//     	  if (err) return console.log('Error loading client secret file:', err);
//     	  authorize(JSON.parse(content), listEvents);
//     	});

//     	function authorize(credentials, callback) {
//     	  const {client_secret, client_id, redirect_uris} = credentials.installed;
//     	  const oAuth2Client = new google.auth.OAuth2(
//     	      client_id, client_secret, redirect_uris[0]);

//     	  fs.readFile(TOKEN_PATH, (err, token) => {
//     	    if (err) return getAccessToken(oAuth2Client, callback);
//     	    oAuth2Client.setCredentials(JSON.parse(token));
//     	    callback(oAuth2Client);
//     	  });
//     	}

//     	function getAccessToken(oAuth2Client, callback) {
//     		  const authUrl = oAuth2Client.generateAuthUrl({
//     		    access_type: 'offline',
//     		    scope: SCOPES,
//     		  });
//     		  console.log('Authorize this app by visiting this url:', authUrl);
//     		  const rl = readline.createInterface({
//     		    input: process.stdin,
//     		    output: process.stdout,
//     		  });
//     		  rl.question('Enter the code from that page here: ', (code) => {
//     		    rl.close();
//     		    oAuth2Client.getToken(code, (err, token) => {
//     		      if (err) return console.error('Error retrieving access token', err);
//     		      oAuth2Client.setCredentials(token);
//     		      // Store the token to disk for later program executions
//     		      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
//     		        if (err) console.error(err);
//     		        console.log('Token stored to', TOKEN_PATH);
//     		      });
//     		      callback(oAuth2Client);

//     		    });
//     		  });
//     	}

//     	function listEvents(auth) {
//       const calendar = google.calendar({version: 'v3', auth});
//       calendar.events.list({
//         calendarId: 'primary',
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
            
//           // console.log(event)
//           var description= event.description;
//           var band =event.summary;
//           var end=new Date(event.start.dateTime)
//       		var tiempo= new Date(event.end.dateTime);
//       		var date=new Date(event.start.dateTime);
//       	  //var endTime= tiempo.toLocaleString('en-us',{hour:'numeric',minute:'numeric',hour12:true})
//       		// var startTime= end.toLocaleString('en-us',{hour:'numeric',minute:'numeric',hour12:true})
//       		 //var date= date.toLocaleString('en-us',{weekday:'long',month:'long',day:'numeric'})
          
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

//             // console.log(CalendarObject.timeSpan)
//             // console.log(CalendarObject.date)

//         if(event.attachments==undefined && link!= undefined){
//             CalendarObject.altLink="";
//         }

//         else if(event.attachments!=undefined && link== undefined){
//              CalendarObject.link="https://lh3.google.com/u/0/d/"+event.attachments[0].fileId+"=w762-h570-p-k-nu-iv1";
//              CalendarObject.altLink="https://lh3.google.com/u/0/d/"+event.attachments[0].fileId+"=w762-h570-p-k-nu-iv1";
//         }

//         else if(event.attachments!=undefined && link!= undefined){
//              CalendarObject.link="https://lh3.google.com/u/0/d/"+event.attachments[0].fileId+"=w762-h570-p-k-nu-iv1";
//              CalendarObject.altLink="https://lh3.google.com/u/0/d/"+event.attachments[0].fileId+"=w762-h570-p-k-nu-iv1";
//         }

//         else{
//             if (band.toLowerCase()==="Tim Reynolds".toLowerCase()) {CalendarObject.link="/images/tim.jpg";}
//             if(band.toLowerCase()==="Ned Ryerson".toLowerCase()){CalendarObject.link="/images/ned.jpg";}
//             if(band.toLowerCase()==="Sneak Attack".toLowerCase()){CalendarObject.link="/images/sneak.jpg";}
//             if(band.toLowerCase()==="Dj Cali".toLowerCase()){CalendarObject.link="/images/drinks.jpg";}
//         }

//     CalendarArray.push(CalendarObject)

//               	if(callsCompleted==events.length){
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
		







// //////poster
// // app.post("/kim", function(req,res){

// //   if(req.body.link===""){
// //     return false;
// //   }
// //   else{

// //       fs.writeFileSync("./kimUploads/log.txt",req.body.link)
// //       fs.readdir("./kimUploads", function( err, data ) {


// //           if(data.length==2 && data[0]==="log.txt"){

// //             fs.unlink("./kimUploads/"+data[1], (err) => {
// //               if (err) throw err;
// //               res.redirect('/')
// //             })

// //           }

// //           else if(data.length==2 && data[1]==="log.txt"){
// //             fs.unlink("./kimUploads/"+data[0], (err) => {
// //               if (err) throw err;
// //                res.redirect('/')
// //             })
// //           }

// //           else{
// //             console.log("HEREE")
// //              res.redirect('/')
// //           }

// //         })
// //   }
// // })


// // app.get("/poster", function(req,res){
// //      fs.readFile("./kimUploads/log.txt","utf8", function(err,data){
// //       if(err){return false}
// //       res.send(data)
// //     })
// // })
// ///poster




// ///UPLOAD IMAGE FOR KIM
// ///this uploads images
// app.post('/profile', upload.single('avatar'), function (req, res, next) {

//   fs.readdir("./kimUploads", function( err, data ) {
//     if(data.length==2 && req.file.filename===data[0]){
//       fs.unlink("./kimUploads/"+data[1], (err) => {
//         if (err) throw err;
//         res.redirect('/')
//       })

//     }

//     else if(data.length==2 && req.file.filename===data[1]){
//       fs.unlink("./kimUploads/"+data[0], (err) => {
//         if (err) throw err;
//          res.redirect('/')
//       })
//     }

//     else{
//       console.log("HEREE")
//        res.redirect('/')
//     }

//   })

// })



// ////this spits out the images **Im drunkl
// app.get("/uploads",function(req,res){
//     fs.readdir("./kimUploads", function( err, data ) {
//       if(data.length==0){console.log("No picsss")}
     
//      fs.readFile("./kimUploads/"+data[0], function(err, imageData){
//         if(err){
//         }else{
//           var base64data = new Buffer(imageData, 'binary').toString('base64');
//           res.set({'Content-Type':'image/jpeg'});
//           res.send(base64data);
//         }
//       })
//     })
// })




////FOR KIM


///LISTENING
app.listen(port, function() {
  console.log("The Magic running on port "+ port);
});


