/**
 * 
 */



log('home.js');

home={
		scrollToDiv : function(div){
			$('html,body').animate({
		           scrollTop: $("#"+div).offset().top},
		           'slow');
		},
		scroll_top : function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
		},
		bubbleChew :function(){
			var t1,t2,t3;
	       setTimeout(function(){
	    	   t1 = setInterval(function(){
		    	   $('a.chev-down').animate({'top' : "470px"},1000);
		    	   $('a.chev-down').animate({'top' : "480px"},1000);
		    	   
		       }, 2);
	       }, 300);
	       
	       $('a.chev-down').on('click',function(){
	    	    home.scrollToDiv("cards");
	    	   
	       });
	       
	       $('a.chev-down-a').on('click',function(){
	    	   var div = $(this).attr('id');
	    	   log("id = "+div);
	    	   switch (div) {
			case 'chev1':
				    home.scrollToDiv('lat-cards');
				break;
			case 'chev2':
			    home.scrollToDiv('fea-cards');
			break;
			case 'chev3':
			    home.scrollToDiv('footer');
			break;
		
			default:
				home.scroll_top();
				break;
			}
	    	   
	    	   
	       });
	       
	       
		}
};

home.getTrendingArticle = function(article){
	var a_id = "a_" + article.id;
	var t_id = "t_" + article.id;
	var p_id = "t_" + article.id;
	
	var fp =  article.id+'#'+article.user.username+'#'+article.title;
	log(fp);
	var h_href = "./home/user/article#"+Base64.encodeObase(fp);
	
	var img = article.src;

	 var x =  "<article id='"+
			  a_id+"'"+
			" dt-ref='"+Base64.encode(article.links[0].url)+
			 "' class='user-article small-12 large-3 medium-4 columns  left'>"+
			 "<div class='user-article-inside '>"+
			 "<div  class='user-article-pic '  >"+
		      "<img id='"+ p_id+  "' src ='"+img+"'/>" +
		      "<h5><a href = '"+h_href+"'>"+Base64.decode(article.title)+"</a></h5>"+
			 "<div class='user-article-info '>"+
			 "<ul class='no-list-style comment-like '>"+
			 "<li><li><a><span class='fa fa-heart-o'></span><b>"+
			 article.likes + "</b></a></li>"+
			 "<li><li><a><span class='fa fa-comment-o'></span><b>"+
			 article.commentCount + "</b></a></li>"+
			 "<li><li><a><span class='fa fa-trash'></span></a></li>"+
			 "</ul> </div>  </div> </article> ";
	   $('.home-trends').append(x);
	   $('#'+p_id).on('mouseover', function(){$(this).css('opacity',"0.9");});
	   $('#'+p_id).on('mouseout', function(){$(this).css('opacity',"0.7");});
};

home.getlatestArticle = function(article){
	var a_id = "la_" + article.id;
	var t_id = "lt_" + article.id;
	var p_id = "lt_" + article.id;
	
	
	var img = article.src;
	
	var x = "<article id='"+a_id+"' class='small-12 large-6 medium-6 columns latestContent-wrapper '>"+
			"<div class='small-12 large-6 medium-12 latest-img columns-a '>" +
			"<img id ='"+p_id+"' src='"+article.src+"' >" +
			"</div>" +
			"<div class='small-12 large-6 medium-12 columns-a latest-content'>" +
			"<div class='content '>" +
			"<a id ='"+t_id+" ' class='title '>" +
			"<span 	class='fa fa-lg fa-external-link'></span>" +
			Base64.decode(article.title) +
			"</a>" +
			"<div class=' latest-content font-heading-para'>" +
			Base64.decode(article.content)+
			"</div>" +
			"</div>" +
			"<div class='content-info '>" +
			"<ul class='no-list-style object-info'>" +
			"<li><a><span class='fa fa-user'></span>"+article.user.name+"</a></li>" +
			"</ul>" +
			"<ul class='no-list-style comment-like'>" +
			"<li>" +
			"<li><a><span class='fa fa-heart'></span><b>" +
			article.likes +
			"</b></a></li>" +
			"<li>" +
			"<li><a><span class='fa fa-comment'></span><b>" +
			article.commentCount +
			"</b></a></li>" +
			"</ul>" +
			"</div>" +
			"</div>" +
			"</article>";
			
	   $('.home-latest').append(x);
	   $('#'+p_id).on('mouseover', function(){$(this).css('opacity',"0.5");});
	   $('#'+p_id).on('mouseout', function(){$(this).css('opacity',"0.9");});
};
 

home.appendlatestarticles = function(arr){
	
	for(i=0;i<arr.length ; i++){
		var article = arr[i];
		this.getlatestArticle(article);
	}
};
home.appendTrendingarticles = function(arr){
	
	for(i=0;i<arr.length ; i++){
		var article = arr[i];
		this.getTrendingArticle(article);
	}
};


var  publicAjax = {
		url : "",
		role: "",
		isInProgress: false,
		init : function( role){
			this.role = role;
		},
		prejax : function() {
			this.isInProgress = true;
			this.url= Ajax.publicURL+this.role;
			log("url is:" + this.url);
		},
		success : function(obj) {
			log("success in trending");
			log(obj); 
			this.url="";
	       this.isInProgress = false;
	       this.performSuccess(this.role, obj);

		},
		error : function(data) {
			this.isInProgress = false;
			log('fail in trending');
			log(data);
			this.url="";
		}

	};


publicAjax.performSuccess = function(role, arrayObj){
	switch (role) {
	case 'trending':
		    home.appendTrendingarticles(arrayObj);
		break;
	case 'latest':
		home.appendlatestarticles(arrayObj);
	  break;
	}
	
};


home.processHome = function(){
	this.bubbleChew();
	publicAjax.init("trending");
	Ajax.GET(publicAjax);
	 var timer = setInterval(function(){
		log('polling n interval isprogress='+publicAjax.isInProgress);
		if(publicAjax.isInProgress === false)
		{
		   publicAjax.init("latest");
		   Ajax.GET(publicAjax);  
		   clearInterval(timer);
		}
		
	}, 500);

	
};

$(home.processHome());