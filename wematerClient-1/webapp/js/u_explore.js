

var Explore = {
		user :  null,
		exploreArticles : null,
		isUpdating : false,
		isbfrePresent : true,
		init : function(){
		this.user = util.getObjectFromSession('_user');	
			
		}
        
		
};

Explore.buildTimeLine = function(){
	var timeline = "    <div class='explore-timeline small-12 medium-12  large-8 columns '> </div>"
	$('.u-explore-wrapper').prepend(timeline);
    this.isTimeLinePresent = true;
}

Explore.buildArticle = function( article){
	      var articleStructure="";
	      var articleContent = Base64.decode(article.content);
	      var  ex_id = 'ex_'+article.id;
	      var et_id = 'et_'+article.id;
	      var  dt_ref = Base64.encode(article.links[0].url);
	      articleStructure = "<article class=' explore-article small-12 medium-12 large-8  large-centered column'>" +
    		"<div class='explore-article-top '>" +
    		" <div class='article-date large-4 small-6 medium-4 columns '>" +
    		"<span><i class='fa fa-lg fa-calendar'></i>" +
    		 article.date +
    		" </span>" +
    		"</div>" +
    		"<div class=' article-like large-4 small-4 medium-4 columns  '>" +
    		"<ul class='no-list-style'>" +
    		"<li><a><span class='fa fa-lg fa-heart'></span>"+article.likes+"</a></li>" +
    		" </ul>" +
    		"</div>" +
    		"</div>" +
    		"<div class='explore-article-title '>" +
    		"<a class = '"+ex_id+"' dt-ref='"+dt_ref+"'>  "+Base64.decode(article.title)+"</a>" +
    		"</div>" +
    		" <div  class='"+ex_id+" explore-article-cover' style = 'background: "
			+ "linear-gradient(rgba(255, 255, 255, 0.1), rgba(25, 155, 255, .2), rgba(25, 5, 255, .1)),"
			+ "url(" + article.image + ") no-repeat 100% 50% ; background-size:cover; cursor:pointer;'>" +
    		" </div>" +
    		"<div class='explore-article-content '>" +
    		"<ul class='no-list-style'>" +
    		"<li>" +
    		"<div class='exp-content'> "+articleContent+" </div>" +
    		"</li>" +
    		"<li>" +
    		" <ul>" +
    		"<li><a><span class = 'fa fa-user'></span>"+article.userModel.name+"</a></li>" +
    		" <li class='continue-read'><a class='"+ex_id+"'>continue reading	</a> </li>" +
    		"</ul>" +
    		"</li>" +
    		"</ul>" +
    		"</div>" +
    		"</article>";
	         if(this.isbfrePresent){ $('.bfre-exp').remove(); this.isbfrePresent = false;}
	         
	    
	         $('.explore-timeline').append(articleStructure);   
	         
	         $('.explore-timeline').on('click','.'+ex_id,function(){
	        	 log('article is clicked');
	        	 var url = Base64.decode($('.'+ex_id).attr('dt-ref'));
	        	 log('url  '+url);
	        	 eachTopAjax.url = url;
	        	 Ajax.GET(eachTopAjax);
	         });
	         
	    
	         
	   
}

Explore.buildTag = function(index,tag){
	       
	      return "<small><a id = exptag_"+index+" >"+tag+"</a></small>";
	
}
Explore.getTopArticleString = function(article){
	var dt_ref =Base64.encode(article.links[0].url);
	var a_id = 'ar_'+article.id;
	 var string =  "<dt><a id='"+a_id+"' dt-ref='"+dt_ref+"'>"+Base64.decode(article.title)+"</a></dt>"+
			"<dd><a><span class='fa fa-user'></span>"+article.userModel.name+"</a></dd>"; 
	 
	 $(".ul-explore-top").on('click','#'+a_id,function(){
		 var url = Base64.decode($('#'+a_id).attr('dt-ref'));
		 eachTopAjax.url = url;
		 Ajax.GET(eachTopAjax);
	 });
	 
	 return string;
	 
}
Explore.attachTopArticles =  function(articleString){
	  return "<dl class='dl-top-articles'>"+ articleString +"</dl>"
	
}
Explore.createTopArticles = function (articleArray){
	    
	var str="";
	    for(i= 0; i< articleArray.length; i++){
	       str += Explore.getTopArticleString(articleArray[i]);
	       }
	   var finalString="";
	   finalString = Explore.attachTopArticles(str);
	   
	   $(".ul-explore-top").append(finalString);
	    
}


Explore.createArticles = function(articleArray,buildTimeLine){
	         
	          log('inside createExploreArticles :'+articleArray);  
	          var count=0;
	          var articleString = "";
	          var articleCount = articleArray.length;
	         
	          for(i = 0; i< articleCount; i++ ){
	        	   Explore.buildArticle(articleArray[i]);
	          }
	  
   }

Explore.manageTags = function(tagArray){
	
	    var totalTags = tagArray.length;
	    var tagString="";
	    for(i=0 ; i < totalTags; i++){
	       	tagString += Explore.buildTag(i, tagArray[i]);
	    }
	    
	    $('.explore-tag-wrapper').append(tagString);  
	    
}

Explore.fixExploreSide = function(tag_class ){
      var scrollTop = 0;
      
      
    $(window).scroll(function(event){
    	
		 scrollTop=$(this).scrollTop();
		 var bottom = $(document).height() - $(window).height();
		 var docWidth = $(document).width();
		 //log(scrollTop +"  scroll fix explore")	
		 $('.explore-side').css({'top' : "100px"});
		 if(scrollTop < 400  && docWidth > 1024){
			 //log(" < 365");
			 
			 $('.explore-side').css({'top' : ""});
			 $('.explore-tag-wrapper').show();
			 $('.explore-top-articles-wrapper').show();
		 }
		 else if(scrollTop >= 400 && scrollTop < (bottom-200)  && docWidth > 1024 ){
			 // log(" > 365 and scrolltip < bottom-200");
			 
			 $('.explore-side').css({'top' : scrollTop});
			 $('.explore-tag-wrapper').hide();
			 $('.explore-top-articles-wrapper').show();
			 
		 }
		 else if(scrollTop >= bottom-200  && docWidth > 1024 ){
			  
			 // log(" > bottom-200");
				 $('.explore-side').css({'top' : bottom});
				 $('.explore-tag-wrapper').show();
				 $('.explore-top-articles-wrapper').hide();
				 
			 }
	      
		else{
			// log(" ---else....");
			$('.explore-side').css({'top' : ""});
			 $('.explore-tag-wrapper').show();
			 $('.explore-top-articles-wrapper').show();
		} 
		
	});
     
   
    
}

/*
 * get base explore articles
 */


var exploreArticlsAjax = {
	url : "",
	next:0,
	prejax : function() {
		progressBar.append = false;
		progressBar.counter = 2;
		progressBar.height = 3;
		progressBar.build('body', 0);
		this.url = "http://backendapi-vbr.rhcloud.com/api/public/explore?next="+this.next;
		log("url is:" + this.url);
	},
	beforeSend : function(request) {
		request.setRequestHeader("Connection", "Keep-Alive");
	},
	progress : function(event) {
		if (event.lengthComputable) {
			progressBar.set_MIN_MAX_with();
		}
		log('progress ARTICLES');
		progressBar.progress(event);
	},
	loadStart : function(event) {
		progressBar.initialize(event);
	},
	loadEnd : function(event) {
		progressBar.end(event);
	},
	success : function(obj) {
		$('.circle-load').remove();
		this.next++;
		Explore.isUpdating = false;
		sessionStorage.setItem('_prev', this.next);
		progressBar.success(obj);
		log("success in explore");
		log(obj); 
		Explore.createArticles(obj, Explore.buildTimeLine);

	},
	error : function(data) {
		$('.circle-load').remove();
		Explore.isUpdating = false;
		log('fail in explore ajax');
		progressBar.error(data);
		if(data.status = 404){
		 Explore.isUpdating = true;
		}

	},
	complete : function(jqxhr, status){
		log('COMPLETE AJAX EXPLORE');
		log(jqxhr);
		log(jqxhr.getAllResponseHeaders());
		log(jqxhr.getResponseHeader('Etag'));
		log(status);
		
	}

}

//tredning article


var topArticlsAjax = {
	url : "",
	prejax : function() {
		this.url = "http://backendapi-vbr.rhcloud.com/api/public/top";
		log("url is:" + this.url);
	},
	beforeSend : function(request) {
		request.setRequestHeader("Connection", "Keep-Alive");
	},
	success : function(obj) {
		log("success in latest");
		log(obj); 
       Explore.createTopArticles(obj);

	},
	error : function(data) {
		log('fail in all comments');
		log(data);
		errorcode.showNoData("Not able to fetch anything",".suggest-wrapper","fa-frown-o");
	}

}

//end of like put
var eachTopAjax = {
		url : "",
		encodedAuth : "",
		prejax : function() {
			log("here in each ajax");
			progressBar.append = false;
			progressBar.height = 3;
			progressBar.position= 'fixed';
			progressBar.build('body', 0);
			this.encodedAuth = sessionStorage.getItem('_auth');
			log("url is:" + this.url);
		},	
		progress : function(event) {
			if (event.lengthComputable) {
				progressBar.set_MIN_MAX_with();
			}
			progressBar.progress(event);
		},
		loadStart : function(event) {
			progressBar.initialize(event);
		},
		loadEnd : function(event) {
			progressBar.end(event);
		},
		beforeSend : function(request) {
			request.setRequestHeader('Authorization', this.encodedAuth);
		},
		success : function(obj) {
			progressBar.success(obj);
			log("trending success in explorere");
			log(obj);
			util.storeObjectInSession('_cA', obj);
	         location.href = './article';
			},
		error : function(data) {
			progressBar.error(data);
			log('fail in trending Each in explorer' );
			 log(data);
		}

	}

/*
 * end of ajax objects
 * 
 */


Explore.processExplorer = function(){
	if(Auth.isLoggedIn()){
		this.init();
		userheader.processHeader(this.user); 
		  var tags = ['arminau', 'fifa', 'secular', 'politics', 'insurance', 'media', 'geography',
		              'secularism', 'media crooks', 'advertisement','insterst','java', 'servlets'];
		  Explore.manageTags(tags);
		  
		Ajax.GET(exploreArticlsAjax);
		 Ajax.GET(topArticlsAjax);
		
	    
		
		update.onScroll( function(){
			if(!Explore.isUpdating && exploreArticlsAjax.next > 0){
		        $('.explore-timeline').append("<div class= 'circle-load small-3 large-3 medium-3 " +
		        		"medium-centered large-centered small-centered  columns'>" +
		        		"<i class='fa fa-3x fa-spinner fa-pulse'></i></div>"); 
				Explore.isUpdating = true;
			  Ajax.GET(exploreArticlsAjax);
			}
			else log('request cant be called from here-Already UPDAATING');
			 

		}); //add at the end
	    Explore.fixExploreSide(".explore-side");
		
	}
    
   
}

$(Explore.processExplorer());
/* end of build explore js */



