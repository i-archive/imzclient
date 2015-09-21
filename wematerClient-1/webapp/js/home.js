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
		      "<span class='author'><a >"+article.user.name+"</a></span>"+
			 "<div class='user-article-info '>"+
			 "<ul class='no-list-style comment-like '>"+
			 "<li><li><a><span class='fa fa-heart-o'></span><b>"+
			 article.likes + "</b></a></li>"+
			 "<li><li><a><span class='fa fa-comment-o'></span><b>"+
			 article.commentCount + "</b></a></li>"+
			 "<li>"+
			 "</ul> </div>  </div> </article> ";
	   $('.home-trends').append(x);
	   
	   $('#'+p_id).on('mouseover', function(){$(this).css('opacity',"0.5");});
	   $('#'+p_id).on('mouseout', function(){$(this).css('opacity',"0.8");});
	   
	   $('#'+a_id).on('click',function(){
		   window.location.href = h_href;
	   });
		
		
};

home.getlatestArticle = function(article){
	var a_id = "la_" + article.id;
	var t_id = "lt_" + article.id;
	var p_id = "lt_" + article.id;
	
	
	var img = article.src;
	
	var x = "<article id='"+a_id+"' class='small-12 large-6 medium-6 columns left latestContent-wrapper '>"+
			"<div class='small-12 large-6 medium-12 latest-img columns-a '>" +
			"<img id ='"+p_id+"' src='"+article.src+"' >" +
			"</div>" +
			"<div class='small-12 large-6 medium-12 columns-a latest-content'>" +
			"<div class='content '>" +
			"<a id ='"+t_id+" ' class='title '>" +
			"<span 	class='fa fa-lg fa-external-link'></span>" +
			Base64.decode(article.title) +
			"</a>" +
			"<div class=' latest-content font-heading-para hide-for-small'>" +
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
 
home.getReads = function(article){
	var a_id = "ra_" + article.id;
	var p_id = "rp_" + article.id;
    var fp =  article.id+'#'+article.user.username+'#'+article.title;
   log('inside reads');
	 var h_href = "./home/user/article#"+Base64.encodeObase(fp);
	 
	var j= "<article id='"+a_id+"' class='small-12 large-10 medium-10  columns-a feature-content'>" +
			"<img id='"+p_id+"' src ='"+article.src+"'>" +
			"<span class='author'><a ><i class='fa fa-user'></i>"+article.user.name+"</a></span>" +
			"<span class='title'><a href='"+h_href+"'> "+Base64.decode(article.title)+"</a></span>" +
			" <span class='date hide-for-small'><i class='fa fa-calendar'></i>"+article.date+"</span>" +
			"</article>";
	
	$('.home-read').append(j);
	$('#'+p_id).on('mouseover', function(){$(this).css('opacity',"0.2");});
	   $('#'+p_id).on('mouseout', function(){$(this).css('opacity',"0.4");});
	
	 $('#'+a_id).on('click',function(){
		   window.location.href = h_href;
	   });
		
	
		
};
home.appendreadArticles = function(arr){
	
	for(i=0;i<arr.length ; i++){
		var article = arr[i];
		this.getReads(article);
	}
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
		counter: 1,
		init : function( role){
			this.role = role;
		},
		prejax : function() {
			this.isInProgress = true;
			this.url= Ajax.publicURL+this.role;
			log("url is:" + this.url);
		},
		success : function(obj) {
			log("success in "+this.role);
			log(obj); 
	       this.performSuccess(this.role, obj);

		},
		error : function(data) {
			
			log('fail in trending');
			log(data);
		},
		complete: function(jqXHR, status){
			this.counter++;
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
	case 'reads':
		home.appendreadArticles(arrayObj);
	  break;  
	}
	
};


home.processHome = function(){
	this.bubbleChew();
	publicAjax.init("trending");
	Ajax.GET(publicAjax);
	 var t1 = setInterval(function(){
		log('polling n interval isprogress='+publicAjax.counter);
		if(publicAjax.counter === 2)
		{
		   publicAjax.init("latest");
		   Ajax.GET(publicAjax);  
		   clearInterval(t1);
		}
	
	}, 500);
	 
	 var t2 = setInterval(function(){
			log('polling n interval isprogress='+publicAjax.counter);
			if(publicAjax.counter === 3)
			{
			   publicAjax.init("reads");
			   Ajax.GET(publicAjax);  
			   clearInterval(t2);
			}
		
		}, 500); 

	
};

$(home.processHome());