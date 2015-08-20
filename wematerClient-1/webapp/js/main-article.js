var MainArticle = {
	article : null,
	user : null,
	commentcount:0,
	init : function() {
		this.article = util.getObjectFromSession('_cA');
		this.user = util.getObjectFromSession('_user');
		var count = sessionStorage.getItem('c_Ct');
		var lc = sessionStorage.getItem('_lc');
		autosize($("#write-comment-content"));
		if(count && lc && count > lc)
			this.commentcount = count;
		else this.commentcount = this.article.commentCount;
		sessionStorage.setItem('_lc', this.article.articleCount);
		
		
		log(this.article);

	},
	buildtags : function(tags, parentclass) {
		var tagString = "";
		for (i = 0; i < tags.length; i++) {
			tagString += " <small><span class='fa fa-tag'></span>" + tags[i]
					+ "</small>"
		}
		$('.' + parentclass).append(tagString);
	},
	processCommentAuthor : function() {
		var message = "Login to post comment";
		if (this.user) {
			var message = " <i class='fa fa-user'></i> " + this.user.username;
		} else {
			var lv = location.href;
			sessionStorage.setItem('_lv', Base64.encode(lv));
			$('.comment-author').attr('href', "./signup");
			log("user is null " + lv);
		}
		$('.comment-author').html(message);
	},
	updateSignupButton : function(){
		if (this.user) {
			$('.signUp')
					.html("<i class='fa fa-user'></i>" + this.user.username)
					.attr("href", "./setting")
					.css('border-radius','20px')
					.css('border-color', "rgba(0,120,60,0.8)");
		}
	}
}

MainArticle.buildCurrentArticle = function() {
	if (this.article != null) {
		log("inside build article " + this.article.title);
		$('#a_t').html(Base64.decode(this.article.title) + " | wemater.org")
		this.updateSignupButton();
		$('.main-content').html(Base64.decode(this.article.content));
		$('.main-article-cover')
				.html(
						"<h1 class='uploaded-image-title'>"
								+ Base64.decode(this.article.title) + "</h1>")
				.css(
						'background',
						"linear-gradient(rgba(255, 255, 255, 0.1), rgba(25, 155, 255, .2), " +
						"rgba(25, 5, 255, .1)), url('"+ this.article.image + "') no-repeat 100% 50%")
				.css('background-size', "cover");

		$('a.article-author').html(
				"<i class='fa fa-user'></i>" + this.article.userModel.name);
		$('a.article-date').html(
				"<i class='fa fa-lg fa-calendar'></i>" + this.article.date);
		$('.author-bio').html("<p><i class='fa fa fa-quote-left  fa-pull-left fa-border'></i>" +
				"" + this.article.userModel['bio'] +  "</p>");
		MainArticle.buildtags(this.article.tags, "article-tags");
		
		MainArticle.updateLikes();
		MainArticle.processLikes();
		MainArticle.processCommentAuthor();
	}
	

}

MainArticle.bookmark = function() {

	$("a.bookmark").click(function(e) {

	});
}
MainArticle.getMoreButton = function(){
	return "<li> <a class=' showmore_c button-a blue-button push-5 small-push-4'>" +
			"<i class='fa fa-chevron-circle-down'></i>show more</a></li>";
}
MainArticle.removeMoreButton = function(){
	$('.showmore_c').remove();
}
MainArticle.getMoreComments = function(){
	
	$('.comment-wrapper').on('click','.showmore_c', function(){
		$('.showmore_c').html("<i class='fa fa-circle-o-notch fa-spin'></i> fetching");
		++getcommentAjax.next;
		Ajax.GET(getcommentAjax);
	});
}

MainArticle.createComment = function(username, commentContent) {
	return "<li class='comment-user'>"
			+ "<a class='commented-author'><i class='fa fa-user'></i>"
			+ username + "</a></li>" + "<li class='comment-content'>"
			+ Base64.decode(commentContent) + "</li>";
}

MainArticle.attachComments = function(comments) {

	var commentString = "";
	for (i = 0 ; i < comments.length; i++) {
		var comment = comments[i];

		commentString += this.createComment(comment.username, comment.content)
	}
	if((getcommentAjax.next+1)*10 < this.commentcount){
		commentString += this.getMoreButton();
	}
	
	return " <ul class='no-bullet comments'>" + commentString + "</ul>";

}

MainArticle.syncComments = function(comments) {
     this.removeMoreButton();
	$('.comment-wrapper').append(this.attachComments(comments));

}
MainArticle.showCommentCount = function(increment) {
	
	if(increment){ this.commentcount++; log("comments after increment"+ this.commentcount);}
	sessionStorage.setItem('c_Ct', this.commentcount);
	
	var count = sessionStorage.getItem('c_Ct');
  
	$('#show-comment').html(
			"<span class='fa fa-comments-o'></span>past comments" + " ("
					+ count + ")");
}
MainArticle.showHideComments = function() {
	$('.comment-wrapper').hide();
	this.showCommentCount();
	$('#write-comment-content').hide();
	$('#post-comment').hide();
	if(MainArticle.user){
		$('#write-comment-content').show();
		$('#post-comment').show();
	}
	$('#show-comment').on('click', function() {
		$('.comment-wrapper').show();
		$('.comment-write-wrapper').hide();
	    $('.comment-wrapper').html('');
		Ajax.GET(getcommentAjax);

	});
	$('#write-comment').on('click', function() {
		$('.comment-wrapper').hide();
		$('.comment-write-wrapper').show();

	});

}

MainArticle.validateCommentOnSubmit = function() {

	var emptyContent = "<i class='fa fa-diamond'></i> You didnt write a comment"
	$('#comment-content-error').hide();
	$('#write-comment-content').val('');
	$('#post-comment').html(' <i class="fa fa-chevron-right "></i>post');
	$('#post-comment').on('click',function() {

	    var content = $('#write-comment-content').val().trim();
		 if (!content)
		  $('#comment-content-error').html(emptyContent).show();
		else {
			$('#comment-content-error').hide();
			$(this)	.html('<i class="fa fa-circle-o-notch fa-spin"></i>posting');
			postcommentAjax.getData(new Comment(Base64.encode(content)));
			Ajax.POST(postcommentAjax);
			$('.comment-wrapper').html(''); //clear the html of comment preview
			}

	});

}

//below are topic methods

MainArticle.getTopArticleString = function(article) {
            var tr_id = 'tr_'+article.id;
            
	var string= "<dt><a  id="+tr_id+" dt-ref='"+Base64.encode(article.links[0].url)+"'>"+ article.title + "</a></dt>"
			+ "<dd><a><span class='fa fa-user'></span>"
			+ article.userModel.name + "</a></dd>";
	
	$('.suggest-wrapper').on('click','#'+tr_id,function(){
		eachTrendingAjax.url =Base64.decode($('#'+tr_id).attr('dt-ref'));
		Ajax.GET(eachTrendingAjax);
		
		
	});
	
return string;
}
MainArticle.attachTopArticles = function(articleString) {
	
	return "<dl class='dl-top-articles'>" + articleString + "</dl>"

}
MainArticle.createTopArticles = function(articleArray) {
	if(articleArray.length === 0){
		errorcode.showNoData("We got no trending  articles", ".suggest-wrapper","fa-frown-o");
	return;
	}
	
	var str = "";
	for (i = 0; i < articleArray.length; i++) {
		str += MainArticle.getTopArticleString(articleArray[i]);
	}
	var finalString = "";
	finalString = MainArticle.attachTopArticles(str);

	$(".suggest-wrapper").html(finalString);
}

MainArticle.buildtopArticles = function() {
	var isAlreadyFetched = false;
	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop();

		if (scrollTop > 1270 && !isAlreadyFetched) {

			Ajax.GET(trendingArticlsAjax);
			isAlreadyFetched = true;
		}
	});

}


MainArticle.updateLikes = function(){
	
	if(!this.article.isliked)
		{
		   $('.a_like').html("Like this article to show your support"+
	        "<i class='fa fa-lg fa-heart-o'></i>"+this.article.likes);
		}
	else{
		
		$('.a_like').html("<i class='fa fa-lg fa-heart'></i>"+this.article.likes);
	}
	
}
MainArticle.processLikes = function(){
	$('.a_like i').on('click',function(){	
		$(this).parent().html("<i class='fa fa-lg fa-heart'></i>"+MainArticle.article.likes);
		Ajax.PUT(putLikes);
	});
}


var putLikes = {
		url : "",
		data : "{}",
		encodedAuth : "",
		getData : function(dataObj) {
			this.data = JSON.stringify(dataObj);
		},

		prejax : function() {
			var cl = MainArticle.article.likes+1;
			this.url = MainArticle.article.links[0].url+"?likes="+cl;
			log("put likes url is:" + this.url);
			this.encodedAuth = sessionStorage.getItem('_auth');
			log('put like auth' + this.encodedAuth);
			
		},
		beforeSend : function(request) {
			request.setRequestHeader('Authorization', this.encodedAuth);
		},
		success : function(obj) {
			log("put like success");
			log(obj);
			//update the article in session
			util.storeObjectInSession('_cA', obj);
			MainArticle.article = obj;
			MainArticle.updateLikes();
		},
		error : function(data) {
			log(" error like");
			log(data);
			
	        
		}
	}
//end of like put
var eachTrendingAjax = {
		url : "",
		prejax : function() {
			log("url is:" + this.url);
		},	
		success : function(obj) {
			log("trending success each");
			log(obj);
			util.storeObjectInSession('_cA', obj);
			location.href="./article";
			MainArticle.showCommentCount(obj.commentCount);
			},
		error : function(data) {
			log('fail in trending Each');
			 log(data);
		}

	}

var getcommentAjax = {
	url : "",
	next:0,
	prejax : function() {
		progressBar.append = false;
		progressBar.position= 'absolute';
		progressBar.height =1;
		progressBar.build('.comment-but-wrapper', 0);
		this.url = MainArticle.article.links[2].url+'?next='+this.next;
	
		log("url is:" + this.url);
	},
	progress : function(event) {
		if (event.lengthComputable) {
			progressBar.set_MIN_MAX_with();
		}
		log("progressing in comments get");
		progressBar.progress(event);
	},
	loadStart : function(event) {
		progressBar.initialize(event);
	},
	loadEnd : function(event) {
		progressBar.end(event);
	},
	
	success : function(obj) {
		progressBar.success(obj);
		log("success in all comments");
		log(obj);
		log(obj.length);
		errorcode.removeNoData();
		MainArticle.syncComments(obj);
	},
	error : function(data) {
		log('fail in all comments');
		progressBar.error(data);
		log(data);
		errorcode.append=true;
		if(data.status === errorcode.NOT_FOUND)
			errorcode.showNoData("no comments yet", ".comment-wrapper","fa-frown-o");
		else errorcode.showNoData(data.responseJSON.error_message,  ".comment-wrapper","fa-frown-o");
	}

}

var postcommentAjax = {
	url : "",
	data : "",
	encodedAuth : "",
	getData : function(dataObj) {
		this.data = JSON.stringify(dataObj);
	},

	prejax : function() {
		progressBar.append = false;
		progressBar.position= 'absolute';
		progressBar.height =1;
		progressBar.build('.main-comments-wrapper', 0);
		this.url = MainArticle.article.links[2].url;
		log("post url is:" + this.url);
		this.encodedAuth = sessionStorage.getItem('_auth');
		log('post auth' + this.encodedAuth);
	},
	beforeSend : function(request) {
		request.setRequestHeader('Authorization', this.encodedAuth);
	},
	progress : function(event) {

		if (event.lengthComputable) {
			
			progressBar.set_MIN_MAX_with();

		}
		log("post progess")
		progressBar.progress(event);
	},
	loadStart : function(event) {
		log("inside load start-post");
		progressBar.initialize(event);
	},
	loadEnd : function(event) {
		log('post progess END');
		progressBar.end(event);
	},
	success : function(data) {
		progressBar.progress(data);
		log('success post user');
		$('#post-comment').html(' <i class="fa fa-chevron-right "></i>post');
		errorcode.removeNoData();
		MainArticle.showCommentCount(1);
		Ajax.GET(getcommentAjax);
		$('.comment-wrapper').show();
		$('.comment-write-wrapper').hide();
		$('#write-comment-content').val("");
	},
	error : function(data) {
		progressBar.error(data)
		log(" error post comment");
		log(data);
		errorcode.removeNoData();
		errorcode.showNoData("Unable to post Comment", ".comment-wrapper", "fa-frown-o");
		$('.comment-wrapper').show();
		$('.comment-write-wrapper').hide();
        
	}
}
//end of post comment

var trendingArticlsAjax = {
	url : "",
	prejax : function() {
		progressBar.append = false;
		progressBar.position= 'absolute';
		progressBar.height =1;
		progressBar.build('.main-article-suggest-wrapper', 0);
		this.url = "http://backendapi-vbr.rhcloud.com/api/public/trending";
		log("url is:" + this.url);
	},
	progress : function(event) {
		if (event.lengthComputable) {
			progressBar.set_MIN_MAX_with();
		}
		log("progressing in comments get");
		progressBar.progress(event);
	},
	loadStart : function(event) {
		progressBar.initialize(event);
	},
	loadEnd : function(event) {
		progressBar.end(event);
	},
	success : function(obj) {
		progressBar.success(obj);
		log("success in latest");
		log(obj); 
		MainArticle.createTopArticles(obj);

	},
	error : function(data) {
		log('fail in all comments');
		progressBar.error(data);
		log(data);
		errorcode.showNoData("Not able to fetch anything",".suggest-wrapper","fa-frown-o");
	}

}



MainArticle.processAllArticle = function() {

	//call function when u have data

	MainArticle.init();
	MainArticle.buildCurrentArticle();
	MainArticle.bookmark();
	MainArticle.showHideComments();
	MainArticle.getMoreComments()
	MainArticle.validateCommentOnSubmit();
	MainArticle.buildtopArticles();
	

}

$(MainArticle.processAllArticle());