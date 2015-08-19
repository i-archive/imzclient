/**
 *  has html for all the common files of user
 */

userheader ={
};
headerhtml = {
		header: "<header class='home-header '></header>",
		ul_header : " <section class=' ul-header large-4 medium-12 small-12 columns  ' >" +
		"<a id='home' class='float-left' >" +
		"<span class='fa fa-lg fa-bars black-color'></span>home</a>" +
		" <a id='self_user' class='float-left push-1' >" +
		"</a></section>",
		ul_tools : " <section class='ul-tools large-6  medium-12 small-12 columns '>" +
				"<a " +
				"class='float-left' id='write'>" +
				"<span class='fa fa-lg fa-pencil-square-o'></span><b class='hide-for-small-only'> write</b>  </a>" +
				"<a  class='float-left' id='your-article'>" +
				"<span  class='fa fa-lg fa-list-alt'></span><b class='hide-for-small-only'> past articles </b>" +
				"	</a>" +
				"<a  class='float-left' id='explore'>" +
				"<span  class='fa fa-lg fa-folder '></span> <b class='hide-for-small-only'> explore</b> </a>" +
				"<a " +
				"class='float-left' id='account'>" +
				"<span  class='fa fa-lg  fa-gear '></span> <b class='hide-for-small-only'>account </b></a>" +
				"</section> "

	
}

userheader.processHeader = function(user){
	
	log("inside header: user is "+user.username);
	
	$('.body').prepend(headerhtml.header);
	$('.home-header').append(headerhtml.ul_header).append(headerhtml.ul_tools);
	
	$('.ul-tools a').on('click',function(){
		var id = $(this).attr('id');
		if(id === 'write') location.replace('./editor');
		if(id === 'explore') location.replace('./explore');
		if(id === 'your-article') location.replace('./articles');
		if(id === 'account') location.replace('./setting');
		
		
	});
	$('.ul-header a').on('click',function(){
		var id = $(this).attr('id');
		if(id === 'home') location.replace('../../');
		if(id === 'self_user') location.replace('./setting');
	});
	$('#u_title').html(user.username+"| wemater.org");
	$('#self_user').html("<span class='fa fa-lg fa-user'></span>"+user.username);
	
}



DisplayToggles ={};
DisplayToggles.showListView = function(){
	
		 log("show list view");
		 $(".user-article").addClass("user-article-list small-12 large-12 medium-12").removeClass("user-article small-12 large-3 medium-4");
		 $(".user-article-inside").addClass("user-article-inside-list").removeClass("user-article-inside");
		 $(".user-article-pic").addClass("user-article-pic-list small-2 large-3 medium-4 columns   ").removeClass("user-article-pic");
		 $(".user-article-text").addClass(" user-article-text-list small-10 large-7 medium-5 columns  ").removeClass("user-article-text");
		 $(".user-article-info").addClass("user-article-info-list hide-for-small large-2 medium-3 columns ")
		 .removeClass("user-article-info");
	
}



DisplayToggles.showGridView = function(){
		 log("show grid view");
		 
		 $(".user-article-list").removeClass("user-article-list small-12 large-12 medium-12").addClass("user-article small-12 large-3 medium-4 left");
		 $(".user-article-inside-list").removeClass("user-article-inside-list").addClass("user-article-inside");
		 $(".user-article-pic-list").removeClass("user-article-pic-list small-2 large-3 medium-4 columns   ").addClass("user-article-pic");
		 $(".user-article-text-list").removeClass(" user-article-text-list small-10 large-7 medium-5 columns  ").addClass("user-article-text");
		 $(".user-article-info-list").removeClass("user-article-info-list hide-for-small large-2 medium-3 columns ")
		 .addClass("user-article-info");
	
}

