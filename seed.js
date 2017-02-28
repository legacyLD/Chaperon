var db = require("./models");

var userList =[];

userList.push(

  {"id":1,"username":"sgeorge0","first_name":"Stephen","last_name":"George","email":"sgeorge0@nih.gov","phone":null,"password":"uXoCz7","contacts":"46, 41, 90, 49, 69"},
  {"id":2,"username":"bbailey1","first_name":"Bobby","last_name":"Bailey","email":"bbailey1@mtv.com","phone":null,"password":"QbYFkGJx","contacts":"15, 84, 55, 23, 29"},
  {"id":3,"username":"priley2","first_name":"Patricia","last_name":"Riley","email":"priley2@epa.gov","phone":null,"password":"8rq4ZotcqSl8","contacts":"22, 98, 30, 55, 45"},
  {"id":4,"username":"lharrison3","first_name":"Lillian","last_name":"Harrison","email":"lharrison3@opera.com","phone":null,"password":"dfVuLWI","contacts":"85, 49, 96, 96, 24"},
  {"id":5,"username":"kstephens4","first_name":"Kelly","last_name":"Stephens","email":"kstephens4@usa.gov","phone":null,"password":"afvY1fO5hz","contacts":"09, 49, 96, 41, 66"},
  {"id":6,"username":"skelley5","first_name":"Stephanie","last_name":"Kelley","email":"skelley5@vistaprint.com","phone":null,"password":"HS12ZH","contacts":"18, 55, 56, 23, 20"},
  {"id":7,"username":"mfoster6","first_name":"Martin","last_name":"Foster","email":"mfoster6@gizmodo.com","phone":null,"password":"wv0amB","contacts":"26, 79, 98, 11, 72"},
  {"id":8,"username":"krose7","first_name":"Kenneth","last_name":"Rose","email":"krose7@nyu.edu","phone":null,"password":"9nTWiou","contacts":"78, 47, 26, 20, 58"},
  {"id":9,"username":"lkelley8","first_name":"Larry","last_name":"Kelley","email":"lkelley8@live.com","phone":null,"password":"8QFtIR","contacts":"81, 20, 53, 52, 43"},
  {"id":10,"username":"ataylor9","first_name":"Amy","last_name":"Taylor","email":"ataylor9@pagesperso-orange.fr","phone":null,"password":"r4GGNJUPgQi","contacts":"34, 74, 48, 23, 37"},
  {"id":11,"username":"bstonea","first_name":"Brandon","last_name":"Stone","email":"bstonea@dmoz.org","phone":null,"password":"ezeEgP82zgUc","contacts":"01, 27, 03, 05, 85"},
  {"id":12,"username":"dknightb","first_name":"Daniel","last_name":"Knight","email":"dknightb@ocn.ne.jp","phone":null,"password":"BzZx3MsOsA","contacts":"03, 15, 06, 64, 99"},
  {"id":13,"username":"bporterc","first_name":"Brandon","last_name":"Porter","email":"bporterc@istockphoto.com","phone":null,"password":"GUb1lQajFItA","contacts":"66, 19, 89, 28, 27"},
  {"id":14,"username":"prichardsd","first_name":"Paul","last_name":"Richards","email":"prichardsd@adobe.com","phone":null,"password":"yxkOSg","contacts":"60, 55, 72, 34, 59"},
  {"id":15,"username":"sshawe","first_name":"Steve","last_name":"Shaw","email":"sshawe@sohu.com","phone":null,"password":"mGNqbi0kS","contacts":"68, 28, 23, 75, 73"},
  {"id":16,"username":"tstanleyf","first_name":"Timothy","last_name":"Stanley","email":"tstanleyf@tiny.cc","phone":null,"password":"r1chSZh","contacts":"33, 73, 48, 40, 32"},
  {"id":17,"username":"pclarkg","first_name":"Pamela","last_name":"Clark","email":"pclarkg@ed.gov","phone":null,"password":"QQPwwx","contacts":"09, 06, 52, 48, 12"},
  {"id":18,"username":"crobertsonh","first_name":"Cheryl","last_name":"Robertson","email":"crobertsonh@si.edu","phone":null,"password":"kghkjPLYcVg9","contacts":"23, 83, 18, 00, 25"},
  {"id":19,"username":"eclarki","first_name":"Elizabeth","last_name":"Clark","email":"eclarki@cyberchimps.com","phone":null,"password":"HpIhjuCPklT","contacts":"12, 38, 32, 56, 76"},
  {"id":20,"username":"rstonej","first_name":"Randy","last_name":"Stone","email":"rstonej@bloomberg.com","phone":null,"password":"6LzGc2w0mfM","contacts":"13, 92, 76, 42, 67"},
  {"id":21,"username":"rreedk","first_name":"Ruth","last_name":"Reed","email":"rreedk@reuters.com","phone":null,"password":"wWVIxw63pyE","contacts":"96, 48, 51, 69, 33"},
  {"id":22,"username":"bdeanl","first_name":"Bonnie","last_name":"Dean","email":"bdeanl@virginia.edu","phone":null,"password":"rVr0GslyYpA","contacts":"48, 53, 83, 54, 90"},
  {"id":23,"username":"ddaym","first_name":"Dennis","last_name":"Day","email":"ddaym@ycombinator.com","phone":null,"password":"80i6n7cli","contacts":"63, 03, 70, 86, 94"},
  {"id":24,"username":"greyesn","first_name":"George","last_name":"Reyes","email":"greyesn@loc.gov","phone":null,"password":"rhVtYfc","contacts":"83, 01, 73, 19, 26"},
  {"id":25,"username":"malleno","first_name":"Mildred","last_name":"Allen","email":"malleno@nationalgeographic.com","phone":null,"password":"iww5XObLyna","contacts":"82, 86, 51, 10, 73"},
  {"id":26,"username":"rblackp","first_name":"Rose","last_name":"Black","email":"rblackp@timesonline.co.uk","phone":null,"password":"1C6UIMxLzT","contacts":"79, 08, 73, 23, 78"},
  {"id":27,"username":"rkingq","first_name":"Richard","last_name":"King","email":"rkingq@1688.com","phone":null,"password":"d0zQex","contacts":"23, 28, 62, 99, 52"},
  {"id":28,"username":"pwillisr","first_name":"Pamela","last_name":"Willis","email":"pwillisr@shareasale.com","phone":null,"password":"xrPbZIO1z","contacts":"67, 36, 62, 11, 28"},
  {"id":29,"username":"kfranklins","first_name":"Kathryn","last_name":"Franklin","email":"kfranklins@microsoft.com","phone":null,"password":"vPGEK3","contacts":"99, 20, 65, 66, 19"},
  {"id":30,"username":"lhendersont","first_name":"Lisa","last_name":"Henderson","email":"lhendersont@mtv.com","phone":null,"password":"T55Vyx0iGu5a","contacts":"05, 27, 12, 45, 56"},
  {"id":31,"username":"promerou","first_name":"Patricia","last_name":"Romero","email":"promerou@army.mil","phone":null,"password":"zO4SZkkxZxsL","contacts":"24, 83, 18, 77, 18"},
  {"id":32,"username":"dhowardv","first_name":"Diana","last_name":"Howard","email":"dhowardv@soup.io","phone":null,"password":"6cZgxz","contacts":"91, 20, 93, 39, 80"},
  {"id":33,"username":"bmitchellw","first_name":"Betty","last_name":"Mitchell","email":"bmitchellw@nationalgeographic.com","phone":null,"password":"gAKjcGbzl","contacts":"56, 41, 98, 91, 54"},
  {"id":34,"username":"tnelsonx","first_name":"Todd","last_name":"Nelson","email":"tnelsonx@youku.com","phone":null,"password":"IFQHVC","contacts":"99, 79, 57, 94, 65"},
  {"id":35,"username":"mwesty","first_name":"Mary","last_name":"West","email":"mwesty@addthis.com","phone":null,"password":"juVwoikw","contacts":"97, 88, 24, 92, 52"},
  {"id":36,"username":"tfranklinz","first_name":"Timothy","last_name":"Franklin","email":"tfranklinz@msn.com","phone":null,"password":"zh0F2K","contacts":"59, 82, 63, 66, 03"},
  {"id":37,"username":"gbradley10","first_name":"George","last_name":"Bradley","email":"gbradley10@com.com","phone":null,"password":"ZsU6zudmtzm","contacts":"24, 14, 96, 83, 96"},
  {"id":38,"username":"jmorales11","first_name":"Jonathan","last_name":"Morales","email":"jmorales11@quantcast.com","phone":null,"password":"vZVP3Z0CVy","contacts":"31, 81, 13, 87, 29"},
  {"id":39,"username":"arichards12","first_name":"Ann","last_name":"Richards","email":"arichards12@google.pl","phone":null,"password":"tWrPF1","contacts":"99, 96, 19, 46, 88"},
  {"id":40,"username":"jkelly13","first_name":"James","last_name":"Kelly","email":"jkelly13@google.co.jp","phone":null,"password":"lNUqopuy","contacts":"32, 08, 23, 39, 35"},
  {"id":41,"username":"amoreno14","first_name":"Ashley","last_name":"Moreno","email":"amoreno14@shareasale.com","phone":null,"password":"NNyzTpO","contacts":"54, 41, 57, 85, 82"},
  {"id":42,"username":"kmedina15","first_name":"Kelly","last_name":"Medina","email":"kmedina15@twitter.com","phone":null,"password":"y2jCA8VVhgY","contacts":"24, 99, 65, 59, 19"},
  {"id":43,"username":"nparker16","first_name":"Norma","last_name":"Parker","email":"nparker16@lulu.com","phone":null,"password":"0hkVZBigU","contacts":"44, 78, 93, 63, 29"},
  {"id":44,"username":"jpeters17","first_name":"Jesse","last_name":"Peters","email":"jpeters17@newyorker.com","phone":null,"password":"Q2seBrA","contacts":"24, 09, 38, 20, 25"},
  {"id":45,"username":"jporter18","first_name":"Joshua","last_name":"Porter","email":"jporter18@dmoz.org","phone":null,"password":"BelEpkJJT2p","contacts":"65, 28, 88, 64, 69"},
  {"id":46,"username":"rstevens19","first_name":"Roy","last_name":"Stevens","email":"rstevens19@wired.com","phone":null,"password":"YOzeucpT","contacts":"09, 75, 20, 87, 51"},
  {"id":47,"username":"dmoore1a","first_name":"Daniel","last_name":"Moore","email":"dmoore1a@scientificamerican.com","phone":null,"password":"IoXJ9BT","contacts":"25, 78, 63, 25, 68"},
  {"id":48,"username":"creyes1b","first_name":"Chris","last_name":"Reyes","email":"creyes1b@cloudflare.com","phone":null,"password":"8ESmpDrG","contacts":"09, 82, 51, 47, 80"},
  {"id":49,"username":"jwoods1c","first_name":"Jose","last_name":"Woods","email":"jwoods1c@blog.com","phone":null,"password":"hOyeiFovKNV","contacts":"13, 10, 31, 64, 28"},
  {"id":50,"username":"jspencer1d","first_name":"Juan","last_name":"Spencer","email":"jspencer1d@so-net.ne.jp","phone":null,"password":"knWWpE","contacts":"85, 77, 97, 80, 54"},
  {"id":51,"username":"ngarrett1e","first_name":"Nicholas","last_name":"Garrett","email":"ngarrett1e@jigsy.com","phone":null,"password":"3NnQweeOUUso","contacts":"94, 17, 04, 77, 30"},
  {"id":52,"username":"rgraham1f","first_name":"Roger","last_name":"Graham","email":"rgraham1f@cocolog-nifty.com","phone":null,"password":"cMide8zXOBfX","contacts":"93, 66, 18, 17, 27"},
  {"id":53,"username":"fmitchell1g","first_name":"Frank","last_name":"Mitchell","email":"fmitchell1g@comsenz.com","phone":null,"password":"YCQWJJUi7ug","contacts":"50, 86, 78, 04, 19"},
  {"id":54,"username":"nevans1h","first_name":"Nancy","last_name":"Evans","email":"nevans1h@va.gov","phone":null,"password":"AuMB3a2","contacts":"15, 37, 22, 30, 13"},
  {"id":55,"username":"jadams1i","first_name":"Joe","last_name":"Adams","email":"jadams1i@wp.com","phone":null,"password":"KwsrvP","contacts":"61, 11, 61, 76, 82"},
  {"id":56,"username":"preynolds1j","first_name":"Paula","last_name":"Reynolds","email":"preynolds1j@posterous.com","phone":"","password":"kGP1Mttp","contacts":"60, 41, 12, 22, 64"},
  {"id":57,"username":"lwells1k","first_name":"Lawrence","last_name":"Wells","email":"lwells1k@youtube.com","phone":null,"password":"eyFDnT","contacts":"18, 88, 81, 06, 43"},
  {"id":58,"username":"scollins1l","first_name":"Shawn","last_name":"Collins","email":"scollins1l@craigslist.org","phone":null,"password":"wG8i55qp","contacts":"21, 37, 03, 99, 67"},
  {"id":59,"username":"relliott1m","first_name":"Russell","last_name":"Elliott","email":"relliott1m@mozilla.com","phone":null,"password":"mjzm2abee4bv","contacts":"77, 96, 37, 37, 06"},
  {"id":60,"username":"tfisher1n","first_name":"Terry","last_name":"Fisher","email":"tfisher1n@mozilla.com","phone":null,"password":"DojiQESUU","contacts":"34, 86, 65, 47, 20"},
  {"id":61,"username":"rmeyer1o","first_name":"Randy","last_name":"Meyer","email":"rmeyer1o@eventbrite.com","phone":null,"password":"Kr2F1lY0T","contacts":"38, 19, 76, 79, 37"},
  {"id":62,"username":"ctucker1p","first_name":"Carlos","last_name":"Tucker","email":"ctucker1p@answers.com","phone":null,"password":"9h9AhVvz","contacts":"92, 30, 32, 58, 00"},
  {"id":63,"username":"jriley1q","first_name":"Jennifer","last_name":"Riley","email":"jriley1q@home.pl","phone":null,"password":"VoFMkBwu1T","contacts":"77, 30, 12, 14, 55"},
  {"id":64,"username":"gmarshall1r","first_name":"Gloria","last_name":"Marshall","email":"gmarshall1r@flavors.me","phone":null,"password":"OYFDIyF","contacts":"13, 16, 15, 70, 76"},
  {"id":65,"username":"rrichards1s","first_name":"Ralph","last_name":"Richards","email":"rrichards1s@xrea.com","phone":null,"password":"U2sV4iS","contacts":"76, 92, 41, 88, 60"},
  {"id":66,"username":"sedwards1t","first_name":"Stephen","last_name":"Edwards","email":"sedwards1t@sciencedaily.com","phone":null,"password":"xni5960wV","contacts":"37, 33, 31, 12, 17"},
  {"id":67,"username":"ntaylor1u","first_name":"Norma","last_name":"Taylor","email":"ntaylor1u@issuu.com","phone":null,"password":"qzfZpF","contacts":"62, 68, 22, 59, 77"},
  {"id":68,"username":"jcarter1v","first_name":"Judy","last_name":"Carter","email":"jcarter1v@aboutads.info","phone":null,"password":"E6nqQBlMa5J","contacts":"28, 85, 50, 51, 43"},
  {"id":69,"username":"pmitchell1w","first_name":"Patricia","last_name":"Mitchell","email":"pmitchell1w@amazon.co.jp","phone":null,"password":"QAWc1rSu0","contacts":"18, 54, 98, 75, 99"},
  {"id":70,"username":"lrichards1x","first_name":"Lois","last_name":"Richards","email":"lrichards1x@mit.edu","phone":null,"password":"TW3p9Knn","contacts":"41, 39, 23, 91, 32"},
  {"id":71,"username":"swilliams1y","first_name":"Scott","last_name":"Williams","email":"swilliams1y@naver.com","phone":null,"password":"yfrUvoCzwFvy","contacts":"22, 93, 40, 94, 91"},
  {"id":72,"username":"ebarnes1z","first_name":"Emily","last_name":"Barnes","email":"ebarnes1z@mozilla.org","phone":null,"password":"KUOZx20bFN","contacts":"05, 80, 82, 38, 98"},
  {"id":73,"username":"rgarcia20","first_name":"Rebecca","last_name":"Garcia","email":"rgarcia20@com.com","phone":null,"password":"UWNCtcujr56","contacts":"80, 20, 13, 73, 12"},
  {"id":74,"username":"jlong21","first_name":"Justin","last_name":"Long","email":"jlong21@hibu.com","phone":null,"password":"q3oWi25sfK","contacts":"09, 75, 84, 58, 36"},
  {"id":75,"username":"lspencer22","first_name":"Lisa","last_name":"Spencer","email":"lspencer22@bigcartel.com","phone":null,"password":"2ih0o5z","contacts":"33, 76, 76, 05, 51"},
  {"id":76,"username":"jmurphy23","first_name":"Joseph","last_name":"Murphy","email":"jmurphy23@t-online.de","phone":null,"password":"5IDt3bj","contacts":"80, 22, 91, 19, 01"},
  {"id":77,"username":"pmurray24","first_name":"Philip","last_name":"Murray","email":"pmurray24@themeforest.net","phone":null,"password":"MrNEtypeWAQ","contacts":"52, 51, 55, 13, 70"},
  {"id":78,"username":"jjones25","first_name":"Joyce","last_name":"Jones","email":"jjones25@blogs.com","phone":null,"password":"4nia4g7xgUYF","contacts":"08, 54, 16, 55, 50"},
  {"id":79,"username":"bmoore26","first_name":"Bonnie","last_name":"Moore","email":"bmoore26@weebly.com","phone":null,"password":"dTzVOFb0i6aj","contacts":"56, 88, 91, 58, 95"},
  {"id":80,"username":"dfowler27","first_name":"Dennis","last_name":"Fowler","email":"dfowler27@is.gd","phone":null,"password":"Ekkz7gyGPjn","contacts":"30, 99, 66, 37, 68"},
  {"id":81,"username":"agarza28","first_name":"Annie","last_name":"Garza","email":"agarza28@infoseek.co.jp","phone":null,"password":"nqSbITuSs","contacts":"77, 11, 64, 23, 75"},
  {"id":82,"username":"lharris29","first_name":"Lisa","last_name":"Harris","email":"lharris29@vkontakte.ru","phone":null,"password":"xz1lqYlw1","contacts":"43, 43, 92, 92, 56"},
  {"id":83,"username":"rday2a","first_name":"Ruth","last_name":"Day","email":"rday2a@nature.com","phone":null,"password":"N1NfOSM","contacts":"37, 01, 36, 66, 25"},
  {"id":84,"username":"aharris2b","first_name":"Ashley","last_name":"Harris","email":"aharris2b@rambler.ru","phone":null,"password":"pz6KcHh4","contacts":"96, 80, 23, 48, 17"},
  {"id":85,"username":"sshaw2c","first_name":"Steven","last_name":"Shaw","email":"sshaw2c@amazon.co.jp","phone":null,"password":"BXPElzBi7eNV","contacts":"96, 23, 14, 20, 21"},
  {"id":86,"username":"lhowell2d","first_name":"Louis","last_name":"Howell","email":"lhowell2d@prweb.com","phone":null,"password":"tG2W9z","contacts":"35, 01, 43, 78, 47"},
  {"id":87,"username":"mhughes2e","first_name":"Martha","last_name":"Hughes","email":"mhughes2e@linkedin.com","phone":null,"password":"uU8e3bgfP9","contacts":"23, 83, 70, 34, 98"},
  {"id":88,"username":"jhawkins2f","first_name":"Jesse","last_name":"Hawkins","email":"jhawkins2f@eventbrite.com","phone":null,"password":"iDNAacGX","contacts":"22, 98, 59, 86, 35"},
  {"id":89,"username":"plynch2g","first_name":"Philip","last_name":"Lynch","email":"plynch2g@cnn.com","phone":null,"password":"eQWZbF","contacts":"68, 45, 44, 12, 54"},
  {"id":90,"username":"dmorris2h","first_name":"Deborah","last_name":"Morris","email":"dmorris2h@icio.us","phone":null,"password":"BgBSmmy5V4","contacts":"35, 17, 35, 18, 13"},
  {"id":91,"username":"rhansen2i","first_name":"Robert","last_name":"Hansen","email":"rhansen2i@furl.net","phone":null,"password":"BfoRaf06","contacts":"76, 25, 79, 03, 13"},
  {"id":92,"username":"kreyes2j","first_name":"Kelly","last_name":"Reyes","email":"kreyes2j@harvard.edu","phone":null,"password":"tnIuLRF6","contacts":"10, 96, 26, 44, 30"},
  {"id":93,"username":"rjackson2k","first_name":"Ryan","last_name":"Jackson","email":"rjackson2k@prweb.com","phone":"","password":"QCBTlT9","contacts":"29, 72, 70, 14, 02"},
  {"id":94,"username":"cwarren2l","first_name":"Cheryl","last_name":"Warren","email":"cwarren2l@soup.io","phone":null,"password":"sU9SLatL6Tb","contacts":"75, 54, 63, 21, 63"},
  {"id":95,"username":"tharrison2m","first_name":"Todd","last_name":"Harrison","email":"tharrison2m@meetup.com","phone":null,"password":"Nd5NyEuLmxZC","contacts":"04, 93, 05, 94, 76"},
  {"id":96,"username":"rrobertson2n","first_name":"Ronald","last_name":"Robertson","email":"rrobertson2n@icio.us","phone":null,"password":"VyZmvPS","contacts":"71, 16, 97, 97, 06"},
  {"id":97,"username":"landerson2o","first_name":"Lillian","last_name":"Anderson","email":"landerson2o@hatena.ne.jp","phone":null,"password":"2kJbPaMQsN","contacts":"26, 23, 45, 70, 82"},
  {"id":98,"username":"jhamilton2p","first_name":"Joyce","last_name":"Hamilton","email":"jhamilton2p@tumblr.com","phone":null,"password":"sbVPZa","contacts":"96, 16, 80, 12, 22"},
  {"id":99,"username":"cwashington2q","first_name":"Christina","last_name":"Washington","email":"cwashington2q@dot.gov","phone":null,"password":"ZB11lUV8","contacts":"01, 09, 65, 13, 41"},
  {"id":100,"username":"jmurray2r","first_name":"Jean","last_name":"Murray","email":"jmurray2r@reuters.com","phone":null,"password":"HasYk33wn","contacts":"24, 65, 60, 06, 71"}

);

// populate each albums song list
// albumList.forEach(function(album) {
//   album.songs = sampleSongs;
// });


db.User.remove({}, function(err, users){

  db.User.create(userList, function(err, users){
    if (err) { return console.log('ERROR seeding: ', err); }
    console.log("users:", users);
    console.log("I made ", users.length, "of the things!");
    process.exit();
  });

});
