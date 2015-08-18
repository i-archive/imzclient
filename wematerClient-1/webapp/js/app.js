var MainArticle = {
	article : null,
	user : null,
	init : function() {
		this.article = util.getObjectFromSession('_cA');
		this.user = util.getObjectFromSession('_user');

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
	processSignup : function() {
		if (this.user) {
			$('.signUp')
					.html("<i class='fa fa-user'></i>" + this.user.username)
					.attr("href", "./setting")
					.css('background','rgba(0,120,60,0.7)')
					.css('border-color','rgba(0,120,60,0.7)')
					.css('border-radius',"30px")
					.css('color',"#f1f1f1")
					.css('font-variant', 'normal');
			$('.signUp:HOVER').css('background','rgba(0,120,60,0.5)')
			.css('border-color','rgba(0,120,60,0.5)');
		}
	},
	showNoData : function(message,parentdiv){
		var nodata= "<div class='no-comments small-12 large-12 medium-12 '>"+
        "<span class='fa fa-comment-o'></span>"+message+"</div>";
		$(parentdiv).append(nodata);
	},
	removeNoData : function(){
		$('.no-comments').remove();
	}
}

MainArticle.buildCurrentArticle = function() {
	if (this.article != null) {
		log("inside build article " + this.article.title);
		$('#a_t').html(this.article.title + " | wemater.org")
		this.processSignup();
		$('.main-content').html(Base64.decode(this.article.content));
		$('.main-article-cover')
				.html(
						"<h1 class='uploaded-image-title'>"
								+ this.article.title + "</h1>")
				.css(
						'background',
						"linear-gradient(rgba(255, 255, 255, 0.1), rgba(25, 155, 255, .2), rgba(25, 5, 255, .1)), url('"
								+ this.article.image + "') no-repeat 100% 50%")
				.css('background-size', "cover");

		$('a.article-author').html(
				"<i class='fa fa-user'></i>" + this.article.userModel["name"]);
		$('.author-bio').html("<p>" + this.article.userModel['bio'] + "</p>");
		MainArticle.buildtags(this.article.tags, "article-tags");
	}
	MainArticle.processCommentAuthor();

}

MainArticle.bookmark = function() {

	$("a.bookmark").click(function(e) {

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
	for (i = comments.length - 1; i >= 0; i--) {
		var comment = comments[i];

		commentString += this.createComment(comment.username, comment.content)
	}
	return " <ul class='no-bullet comments'>" + commentString + "</ul>";

}

MainArticle.syncComments = function(comments) {

	$('.comment-wrapper').html(this.attachComments(comments));

}
MainArticle.showCommentCount = function(comments) {
	log(comments);
	if(comments !== undefined ){
		sessionStorage.setItem('_Cc', comments);
		log(comments+" inside show")
	}
	else if(sessionStorage.getItem('_Cc')){} //just to face the condition
	else	sessionStorage.setItem('_Cc', this.article.commentCount);
	
	$('#show-comment').html(
			"<span class='fa fa-comments-o'></span>past comments" + " ("
					+ sessionStorage.getItem('_Cc') + ")");
}
MainArticle.showHideComments = function() {
	$('.comment-wrapper').hide();
	this.showCommentCount();
	$('#show-comment').on('click', function() {
		$('.comment-wrapper').show();
		$('.comment-write-wrapper').hide();
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
	$('#post-comment').html(' <i class="fa fa-comment-o"></i>post');
	$('#post-comment')
			.on(
					'click',
					function() {

						var content = $('#write-comment-content').val().trim();
						if (!content)
							$('#comment-content-error').html(emptyContent)
									.show();
						else {
							$('#comment-content-error').hide();
							log($(this)
									.html(
											'<i class="fa fa-circle-o-notch fa-spin"></i>posting'));
							postcommentAjax.getData(new Comment(Base64
									.encode(content)));
							Ajax.POST(postcommentAjax);
						}

					});

}

var getcommentAjax = {
	url : "",
	prejax : function() {
		progressBar.append = false;
		progressBar.build('.comment-but-wrapper', 0);
		this.url = MainArticle.article.links[2].url;
		log("url is:" + this.url);
	},
	progress : function(event) {
		if (event.lengthComputable) {
			var percentcomplete = (event.loaded / event.total) * 100;
			progressBar.set_MIN_MAX_with(event.load / 1000, percentcomplete);
		}
		log("progressing in comments get");
		progressBar.progress(event);
	},
	loadStart : function(event) {
		progressBar.initialize(event);
	},
	loadEnd : function(event) {
		progressBar.end(event.load/200);
	},
	
	success : function(obj) {
		progressBar.success(obj);
		log("success in all comments");
		log(obj);
		log(obj.length);
		MainArticle.removeNoData();
		MainArticle.showCommentCount(obj.length);
		
		MainArticle.syncComments(obj);
	},
	error : function(data) {
		log('fail in all comments');
		progressBar.error(data);
		log(data);
		if(data.status === errorcode.NOT_FOUND)
			MainArticle.showNoData("no comments yet", ".comment-wrapper");
		else MainArticle.showNoData(data.responseJSON.error_message,  ".comment-wrapper");
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
			var percentcomplete = (event.loaded / event.total) * 100;
			progressBar.set_MIN_MAX_with(event.total / 10, percentcomplete);

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
		progressBar.end(event.load/200);
	},
	success : function(data) {
		progressBar.progress(data);
		log('success post user');
		$('#post-comment').html(' <i class="fa fa-comment-o"></i>post');
		Ajax.GET(getcommentAjax);
		$('.comment-wrapper').show();
		$('.comment-write-wrapper').hide();
		$('#write-comment-content').val("");
	},
	error : function(data) {
		progressBar.error(data)
		log(" error post comment");
		log(data);

	}
}
//end of post comment

var trendingArticlsAjax = {
	url : "",
	prejax : function() {
		progressBar.append = false;
		progressBar.build('.main-article-suggest-wrapper', 0);
		this.url = "http://backendapi-vbr.rhcloud.com/api/public/trending";
		log("url is:" + this.url);
	},
	progress : function(event) {
		if (event.lengthComputable) {
			var percentcomplete = (event.loaded / event.total) * 100;
			progressBar.set_MIN_MAX_with(event.load / 10, percentcomplete);
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
	}

}

// below are topic methods

MainArticle.getTopArticleString = function(article) {

	return "<dt><a href=" + article.url + ">" + article.title + "</a></dt>"
			+ "<dd><a><span class='fa fa-user'></span>"
			+ article.userModel['name'] + "</a></dd>";

}
MainArticle.attachTopArticles = function(articleString) {
	
	return "<dl class='dl-top-articles'>" + articleString + "</dl>"

}
MainArticle.createTopArticles = function(articleArray) {
	
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

MainArticle.processAllArticle = function() {

	//call function when u have data

	MainArticle.init();
	MainArticle.buildCurrentArticle();
	MainArticle.bookmark();
	MainArticle.showHideComments();
	MainArticle.validateCommentOnSubmit();
	MainArticle.buildtopArticles();

}

$(MainArticle.processAllArticle());