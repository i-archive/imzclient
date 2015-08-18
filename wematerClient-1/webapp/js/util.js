
var Base64 = {
// private property
_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

// public method for encoding
encode : function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
   if(input !== null){
    input = Base64._utf8_encode(input);

    while (i < input.length) {

        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output +
        Base64._keyStr.charAt(enc1) + Base64._keyStr.charAt(enc2) +
        Base64._keyStr.charAt(enc3) + Base64._keyStr.charAt(enc4);

    }

    return "Base "+output;
  }
},

// public method for decoding
decode : function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    //remove the appended Base String
    if(input !== null){
    arr = input.split(/[ ]+/);
    if(arr.length == 2 )
    input = arr[1].replace(/[^A-Za-z0-9\+\/\=]/g, "");
    else 
    input = arr[0].replace(/[^A-Za-z0-9\+\/\=]/g, "");	

    while (i < input.length) {

        enc1 = Base64._keyStr.indexOf(input.charAt(i++));
        enc2 = Base64._keyStr.indexOf(input.charAt(i++));
        enc3 = Base64._keyStr.indexOf(input.charAt(i++));
        enc4 = Base64._keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

    }

    output = Base64._utf8_decode(output);

    return output;
    }
},

// private method for UTF-8 encoding
_utf8_encode : function (string) {
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {

        var c = string.charCodeAt(n);

        if (c < 128) {
            utftext += String.fromCharCode(c);
        }
        else if((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }

    }

    return utftext;
},

// private method for UTF-8 decoding
_utf8_decode : function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while ( i < utftext.length ) {

        c = utftext.charCodeAt(i);

        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        }
        else if((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i+1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        }
        else {
            c2 = utftext.charCodeAt(i+1);
            c3 = utftext.charCodeAt(i+2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }

    }
    return string;
}
}
/*end of Base64*/

var Ajax ={
		 AllUserURL : "http://backendapi-vbr.rhcloud.com/api/users"
};
Ajax.GET = function(obj){
	  obj.prejax();
	  $.ajax({ 
		 xhr: function(){
			 var xhr = new XMLHttpRequest();
			 xhr.addEventListener("progress",function(event){
				if(typeof obj.progress == 'function') obj.progress(event);
					 
			 },false);
			 
			 xhr.onloadstart = function (e) {
				 if(typeof obj.loadStart == 'function') obj.loadStart(e);
				}
			xhr.onloadend = function (e) {
					if(typeof obj.loadEnd == 'function') obj.loadEnd(e);
				}
			return xhr; 
		 }, 
		   
       type: "GET",
       dataType: "json",
       contentType:"application/json",
       url: obj.url,
       beforeSend : function(request){
    	   if(typeof obj.beforeSend == 'function') 
    	     obj.beforeSend(request);},
       success: function(data){ 
    	   		if(typeof obj.success == 'function')
    		   	obj.success(data); 
    	  },  
	    error:function(data){
	    		if(typeof obj.error == 'function') 
	    			obj.error(data);
	    }
   });
  
}//end of GET


Ajax.POST  = function(obj){
	   
       obj.prejax();
	  $.ajax({ 
		 xhr: function(){
			   var xhr = new XMLHttpRequest();
			   xhr.upload.addEventListener("progress",function(event){
			   if(typeof obj.progress == 'function') obj.progress(event);	 
			   },false);
			   
			  xhr.onloadstart = function (e) {
					 if(typeof obj.loadStart == 'function') obj.loadStart(e);
					}
			xhr.onloadend = function (e) {
						if(typeof obj.loadEnd == 'function') obj.loadEnd(e);
					}
			   return xhr; 
		 }, 
        type: "POST",
        dataType: "json",
        contentType:"application/json",
        url: obj.url,
        data: obj.data,
	   	beforeSend : function(request){
	   				if(typeof obj.beforeSend == 'function') 
	   						obj.beforeSend(request);
	   				}, 
        success: function(data){ 
	   				if(typeof obj.success == 'function')
	   				obj.success(data); 
        	},  
        error:function(data){
    			if(typeof obj.error == 'function') 
    			obj.error(data);
        }
    });
}


Ajax.PUT  = function(obj){
	   
    obj.prejax();
	  $.ajax({ 
		 xhr: function(){
			   var xhr = new XMLHttpRequest();
			   xhr.upload.addEventListener("progress",function(event){
			   if(typeof obj.progress == 'function') obj.progress(event);	 
			   },false);
			   
			  xhr.onloadstart = function (e) {
					 if(typeof obj.loadStart == 'function') obj.loadStart(e);
					}
			xhr.onloadend = function (e) {
						if(typeof obj.loadEnd == 'function') obj.loadEnd(e);
					}
			   return xhr; 
		 }, 
     type: "PUT",
     dataType: "json",
     contentType:"application/json",
     url: obj.url,
     data: obj.data,
	   	beforeSend : function(request){
	   				if(typeof obj.beforeSend == 'function') 
	   						obj.beforeSend(request);
	   				}, 
     success: function(data){ 
	   				if(typeof obj.success == 'function')
	   				obj.success(data); 
     	},  
     error:function(data){
 			if(typeof obj.error == 'function') 
 			obj.error(data);
     }
 });
}




var progressBar = {
		width:5,
		height:2,
		counter:.5,
		headerclass: "",
		top: 0,
		append: false,
		build : function(headerclass,top){
			log('pb build');
			if(top != undefined) this.top = top;
			log("TOP at BUILD "+top)
			this.headerclass = headerclass;
			if(this.append === true){
				$(this.headerclass).append("<div class='loading small-12 large-12 medium-12 '></div>");
			    log("PB appended to"+headerclass);
			}
			else{ 
				$(this.headerclass).prepend("<div class='loading small-12 large-12 medium-12 '></div>");
				log("PB prepended to"+headerclass);
			}
		
		$('.loading').css('position',"absolute")
					.css('top',this.top+'px')
					.css('height',this.height+'px')
					.css('margin',"0")
					.css('left','0');
			
		},
		initialize:function(event){
			$('.loading').css('background-color',"green");   
			 $('.loading').css({ 'width' : this.width+'%'}); 
			 log('loadstart');
		},
		set_MIN_MAX_with: function(){
			$('.loading').css({'max-width' : 100+'%' }); 
			 $('.loading').css({'min-width' : this.counter+'%' }); 
		},
		progress: function(event){
			log("prorgress")
			if(this.width < 100)
			 this.width += this.counter; 
			
             $('.loading').css({'width': this.width+'%'});
             if(this.width  > 10)
                 $('.loading').css('background-color',"red"); 
             if(this.width  > 20)
                 $('.loading').css('background-color',"#1e90ff"); 
             
             
		},
		success :function(data){
			 $('.loading').css('background-color',"blue"); 
		},
		error :function(data){
			 $('.loading').css('background-color',"red"); 
		},
		end: function(event){
			$('.loading').css({'width' : 100+'%'});
			log("load end : ");
			setTimeout(function(){
				$('.loading').hide(2000);
				$('.loading').remove();
			}, 500);
			
		}
		
}




var Auth = {
		 isLoggedIn :function(){
		       var encodedAuth =  sessionStorage.getItem('_auth');
		       var user = sessionStorage.getItem('_user');
		       log(encodedAuth);
		       log(user);
		        if(encodedAuth ===  null || user === null){
		        	log('nulls present. login not present');
		        	sessionStorage.setItem("_lv", Base64.encode(location.href));
		        	location.replace('./signup');
		        }
		        else return true;
	  },
	  ifLoggedIn : function(){
		    var encodedAuth =  sessionStorage.getItem('_auth');
	        var user = sessionStorage.getItem('_user');
	        if(encodedAuth !=  null && user !== null){
	     	 location.replace("./articles");
	        }
	        
	  }
}


var errorcode ={
		OK :200,
		NOT_FOUND :404,
		BAD_REQUEST :400,
		NOT_IMPLEMENTED :415,
		CONFLICT : 409,
		append: false,
		margin: '0',
		showNoData : function(message,parentdiv,fa_icon){
			 this.removeNoData();
			var nodata= "<div style='margin : "+this.margin+"'class='no-data'>"+
	        "<span class='fa "+fa_icon+"'></span>"+message+"</div>";
			if(this.append === true) $(parentdiv).append(nodata);
			else $(parentdiv).prepend(nodata);
		},
		removeNoData : function(){
			$('.no-data').remove();
		}
}	


util={};	
	
util.log=function(msg){ console.log(msg); }
//refererce for util.log for easy use
var log=util.log;

util.storeArrayInSession = function(key,array){
	if(array !== null && key !== null)
	sessionStorage.setItem(key, Base64.encode(JSON.stringify(array)));
}	

util.getArrayFromSession = function(key){
	var val = sessionStorage.getItem(key);
	if(val !== null)
	return JSON.parse(Base64.decode(sessionStorage.getItem(key)));
},
util.storeObjectInSession = function(key,obj){
	if(obj !== null && key !== null)
	sessionStorage.setItem(key, Base64.encode(JSON.stringify(obj)));
}	

util.getObjectFromSession = function(key){
	var val = sessionStorage.getItem(key);
	if(val !== null)
	return JSON.parse(Base64.decode(sessionStorage.getItem(key)));
}

util.setItemInSession = function(key,value)
{
	 if(value !== null && key !== null)sessionStorage.setItem(key,Base64.encode(value) );
}
util.getItemFromSession = function(key){
	var val = sessionStorage.getItem(key);
	if(val !== null)
		return Base64.decode(sessionStorage.getItem(key));
}


util.updateContentonScroll = function(parentId, HtmlString)
{
	$(window).scroll(function(){
		log("checking end");
		if($(window).scrollTop() >= $(document).height() - $(window).height()-200)
		{
			$(parentId).append(HtmlString);
		}
		
	});
	 
 
}

util.getVerifyQueryString = function(){

	return window.location.href.split('?')[1];
}

util.chunkString = function(str, length) {
  return str.match(new RegExp('.{1,' + length + '}', 'g'));
}



function Article(date , name , cover, content , title , url){
	   this.date = date;
		this.author = name;
	   this.cover = cover;
	   this.content = content;
	  this.title  = title;
	  this.url   = url;
}

function Comment(content){
	this.content = content;
}
function postUser(username,email,password){
	this.username = username;
	this.email = email;
	this.password = password;
}

