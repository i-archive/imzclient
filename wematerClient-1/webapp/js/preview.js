
Preview={};

Preview.setCover = function(id,result){
	 $(id).css("background-image", "url(" + result + ")");
     $(id).slideDown(600);
	
}


Preview.showPreview = function(){
	  
	  var article = JSON.parse(sessionStorage.getItem("newarticle"));
	  log(article.title);
	  log(article.cover);
	  log(article.content);
	  log(article.tags);
	  
	
	 if(!sessionStorage.getItem("cover")){
		 //provide default image
		$(".preview-cover-pic").css("background", "#222");
	    }
	    else Preview.setCover(".preview-cover-pic", sessionStorage.getItem("cover"));
	 
	    $(".preview-container").html(util.getItemFromSession("htmlContent"));
	    $("h1.preview-title").html(util.getItemFromSession("cover-title"));
	    
	    //get the tags
	    var tags = util.getArrayFromSession("tag-array");
	    
	    
	    if(tags === null){$(".preview-tags").append("");}
	    else{
		    var numberOfTags = tags.length;
		    var tagString = "";
		      
		     for(i = 0; i< numberOfTags; i++){
		    	 
		    	 tagString += "<small>"+tags[i] +"</small>";
		     }
		    
		    $(".preview-tags").append(tagString);
     }
}


$(Preview.showPreview());
