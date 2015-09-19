/**
 * 
 */



log('home.js');

home={
		
		bubbleChew :function(){
	       setInterval(function(){
	    	   $('a.chev-down').animate({'top' : "470px"},1000);
	    	   $('a.chev-down').animate({'top' : "480px"},1000);
	    	   
	       }, 2);
	       $('a.chev-down').on('click',function(){
	    	   $('html,body').animate({
		           scrollTop: $("#cards").offset().top},
		           'slow');
	       });
	       
		}
};

home.getTrendingArticle = function(){
	
	 var x =   "<article id='"+
	  10+"'"+
		" dt-ref='"+100+
		 "' class='user-article small-12 large-3 medium-4 columns left'>"+
		 "<div class='user-article-inside '>"+
		 "<div id='"+
		 10+
		 "' class='user-article-pic opacity-light' style ='background: "+
		 "linear-gradient(rgba(255, 255, 255, 0.1), rgba(25, 155, 255, .2)," +
			" rgba(25, 5, 255, .1)), " +
		 "url(img/1.jpeg) no-repeat 100% 50% ; background-size:cover;'>"+
		 " <ul class='no-list-style object-info '>" + " <li>" +
		 "<a id='" +10+
		 "' class='art-info-title'>"+
		  "some fucking title here for all" + "</a></li>" + "</ul>"+
		 "</div>" + 
		 "<div class='user-article-info '>"+
		 "<ul class='no-list-style comment-like '>"+
		 "<li><li><a><span class='fa fa-heart-o'></span><b>"+
		 10 + "</b></a></li>"+
		 "<li><li><a><span class='fa fa-comment-o'></span><b>"+
		 100 + "</b></a></li>"+
		 "<li><li><a><span class='fa fa-trash'></span></a></li>"+
		 "</ul> </div>  </div> </article> ";
	 
	   $('.home-trends').append(x);
};

home.getlatestArticle = function(){
	var x = "<article class='small-12 large-6 medium-6 columns latestContent-wrapper '>"+
			"<div class='small-12 large-6 medium-12 latest-img  columns '></div>" +
			"<div class='small-12 large-6 medium-12 columns latest-content'>" +
			"<div class='content '>" +
			"<a class='title font-runda-heading-link'>" +
			"<span 	class='fa fa-lg fa-external-link'></span>" +
			"first new article	title here" +
			"</a>" +
			"<p class='font-heading-para'>" +
			"some larege and content here and marks" +
			"new beinginging of the content" +
			"</p>" +
			"</div>" +
			"<div class='content-info '>" +
			"<ul class='no-list-style object-info'>" +
			"<li><a><span class='fa fa-user'></span>name of author</a></li>" +
			"</ul>" +
			"<ul class='no-list-style comment-like'>" +
			"<li>" +
			"<li><a><span class='fa fa-heart'></span><b>100</b></a></li>" +
			"<li>" +
			"<li><a><span class='fa fa-comment'></span><b>100</b></a></li>" +
			"</ul>" +
			"</div>" +
			"</div>" +
			"</article>";
			
	   $('.home-latest').append(x);
};


home.appendlatestarticles = function(length){
	for(i=0;i<length ; i++){
		this.getlatestArticle();
	}
};
home.appendTrendingarticles = function(length){
	for(i=0;i<length ; i++){
		this.getTrendingArticle();
	}
};





home.processHome = function(){
	this.bubbleChew();
	this.appendTrendingarticles(10);
	this.appendlatestarticles(4);
};

$(home.processHome());