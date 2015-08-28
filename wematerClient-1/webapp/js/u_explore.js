

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
	      articleStructure = "<article class=' explore-article small-12 medium-12 large-8  large-centered column'>" +
    		"<div class='explore-article-top '>" +
    		" <div class='article-date large-4 small-6 medium-4 columns '>" +
    		"<span><i class='fa fa-calendar-o'></i>" +
    		 article.date +
    		" </span>" +
    		"</div>" +
    		"<div class=' article-like large-4 small-6 medium-4 columns '>" +
    		"<ul class='no-list-style'>" +
    		"<li><a><span class='fa fa-lg fa-thumbs-o-up'></span></a></li>" +
    		" </ul>" +
    		"</div>" +
    		"</div>" +
    		"<div class='explore-article-title '>" +
    		"<a>  "+Base64.decode(article.title)+"</a>" +
    		"</div>" +
    		" <div class='explore-article-cover ' style = 'background-image	:url("+article.image+");'>" +
    		" </div>" +
    		"<div class='explore-article-content '>" +
    		"<ul class='no-list-style'>" +
    		"<li>" +
    		"<div class='exp-content'> "+Base64.decode(article.content)+" </div>" +
    		"</li>" +
    		"<li>" +
    		" <ul>" +
    		"<li><a><span class = 'fa fa-user'></span>"+article.userModel.name+"</a></li>" +
    		" <li class='continue-read'><a>continue reading	</a> </li>" +
    		"</ul>" +
    		"</li>" +
    		"</ul>" +
    		"</div>" +
    		"</article>";
	         if(this.isbfrePresent){ $('#bfre-exp').remove(); this.isbfrePresent = false;} 
	         $('.explore-timeline').append(articleStructure);   
	   
}

Explore.buildTag = function(index,tag){
	       
	      return "<small><a id = exptag_"+index+" >"+tag+"</a></small>";
	
}
Explore.getTopArticleString = function(article){
	 return  "<dt><a>"+Base64.decode(article.title)+"</a></dt>"+
			"<dd><a><span class='fa fa-user'></span>"+article.userModel.name+"</a></dd>"; 
	 
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



/*
 * end of ajax objects
 * 
 */


Explore.processExplorer = function(){
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
	
  
    //Explore.createTopArticles(this.exploreArticles);
    Explore.fixExploreSide(".explore-side");
    
   
}

$(Explore.processExplorer());
/* end of build explore js */



