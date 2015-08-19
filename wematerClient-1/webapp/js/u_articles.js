userarticle = {
		user : null,
		articlecount: 0
};
userarticle.buildSearch = function() {
	var searchString = "<div class='search-your-articles row'>"
			+ "<div class='small-12 large-10 medium-8 columns'>"
			+ " <input type='search' placeholder='search your articles by title' /></div>"
			+ "<div class='small-12 large-2 medium-4 columns'>"
			+ " <a class='button-a blue-button fade-border float-left '>search</a>"
			+ "   </div> </div>"
	$('.your-articles').prepend(searchString);

}
userarticle.getArticleString = function(article, a_id, p_id, t_id){
	 return  "<article id='"
			+ a_id+"'"
			+" dt-ref='"+Base64.encode(article.links[0].url)
			+ "' class='user-article small-12 large-3 medium-4 columns left'>"
			+ "<div class='user-article-inside '>"
			+ "<div id='"
			+ p_id
			+ "' class='user-article-pic' style ='background: "
			+ "linear-gradient(rgba(255, 255, 255, 0.1), rgba(25, 155, 255, .2), rgba(25, 5, 255, .1)),"
			+ "url(" + article.image + ") no-repeat 100% 50% ; background-size:cover;'>"
			+ " </div>" + " <div class='user-article-text '>" + " <p>"
			+ util.chunkString(Base64.decode(article.content), 100) + "</p>"
			+ "</div>  " + "<div class='user-article-info '>"
			+ " <ul class='no-list-style object-info '>" + " <li><a id='" + t_id
			+ "' class='art-info-title'><span class='fa fa-link'></span>"
			+ Base64.decode(article.title) + "</a></li>" + "</ul>"
			+ "<ul class='no-list-style comment-like '>"
			+ "<li><li><a><span class='fa fa-lg fa-heart'></span><b>"
			+ article.likes + "</b></a></li>"
			+ "<li><li><a><span class='fa fa-lg fa-comment'></span><b>"
			+ article.commentCount + "</b></a></li>"
			+ "<li><li><a><span class='fa fa-lg fa-trash'></span></a></li>"
			+ "</ul> </div>  </div> </article> ";

	
}
userarticle.getMoreButton = function(){
	return "<div class='showmore-wrapper large-12 small-12 medium-12 columns '>"
            +"<a class=' showmore button-a blue-button push-5 small-push-4'>" +
            		"<i class='fa fa-chevron-circle-down'></i>show more</a></div> "
            +"</div>";
	
	
}

userarticle.getMoreArticles =function(){
	$('.your-articles').on('click','.showmore',function(){	
		$('.showmore').html("<i class='fa fa-circle-o-notch fa-spin'></i> fetching");
		Ajax.GET(userArticlesAjax);
	});
	
}
userarticle.removeMoreButton = function(next){
	log("the next value inside remove= "+next*10);
	log("user article count= "+this.user.articlecount);
	
	if((next*10) > this.articlecount)
		$('.showmore-wrapper').remove();
}

userarticle.buildArticleWithEvents = function(article) {
	var a_id = "a_" + article.id;
	var t_id = "t_" + article.id;
	var p_id = "t_" + article.id;
	
   var articleString = this.getArticleString(article, a_id, p_id, t_id);
   
	$('#' + a_id).hide().slideDown(300);
	$('.your-articles').on('click', '#' + t_id, function() {  
		fullArticleAjax.url = Base64.decode($('#'+a_id).attr('dt-ref'));
		Ajax.GET(fullArticleAjax);

	});
   //initialize articlecount 
	this.articlecount = article.userModel.articlecount;
	return articleString;
}

userarticle.appendAllArticles = function(articleArray) {
	var arr = articleArray;
	var articlesString = "";
	for(i=0; i< arr.length; i++){
		 articlesString += this.buildArticleWithEvents(arr[i]);
	}
	$('.showmore-wrapper').remove();
	articlesString +=this.getMoreButton();
	$('.your-articles').append(articlesString);
	userarticle.removeMoreButton(userArticlesAjax.next);
	
	
}

var userArticlesAjax = {
	url : "",
	next:0,
	encodedAuth : "",
	prejax : function() {
		progressBar.append=false;
		progressBar.height = 3;
		progressBar.build(".body", 0);
		this.url = userarticle.user.links[2].url+"?next="+this.next;
		++this.next;
		this.encodedAuth = sessionStorage.getItem('_auth');
		log(this.url);
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
		progressBar.success();
		log(obj);
		userarticle.appendAllArticles(obj);
	},
	error : function(data) {
		log('fail');
		log(data);
		errorcode.append = true;
		errorcode.margin='0 0 0 20%';
		if(data.status === errorcode.NOT_FOUND)
			errorcode.showNoData("no article found, head over to editor", ".user-wrapper","fa-file-o ");
		else errorcode.showNoData(data.responseJSON.error_message,  ".comment-wrapper","fa-frown-o");
	}

}

var fullArticleAjax = {
	url : "",
	encodedAuth : "",
	urlMap : [],
	prejax : function(){
		progressBar.build(".body", 0);
		this.encodedAuth = sessionStorage.getItem('_auth');
		log("full article ajax in side build :" + this.url);
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
		progressBar.success();
		util.storeObjectInSession('_cA', obj);
		location.href = './article';
	},
	error : function(data) {
		log('fail in full ajax');
		log(data);
	}

}

userarticle.processUserArticles = function() {
	if (Auth.isLoggedIn()) {
		log("user logged in");
		this.user = util.getObjectFromSession('_user');
		userheader.processHeader(this.user);
		userarticle.buildSearch();
		Ajax.GET(userArticlesAjax);
		userarticle.getMoreArticles();

	}
}

$(userarticle.processUserArticles());