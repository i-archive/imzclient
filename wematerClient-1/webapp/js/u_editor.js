function clientArticle(title, image, content, tags){
	this.title = title;
	this.image = image;
	this.content = content;
	this.tags = tags;
	
}

EditorSync = {
		

saveContentBeforeUnload : function(textAreaId,previewDivId){
		
	$(textAreaId).on('keyup',function(){
	//	sessionStorage.setItem("contentValue", Base64.encode($(textAreaId).val()));
		util.setItemInSession("contentValue", $(textAreaId).val());
	//	sessionStorage.setItem("htmlContent", Base64.encode($(previewDivId).html()));
		util.setItemInSession("htmlContent", $(previewDivId).html());
		
	});
	
	
	
},
updateContentAfterload : function(textArea, preview){
	
    $(textArea).val(util.getItemFromSession("contentValue"));
    $(preview).html(util.getItemFromSession("htmlContent"));
     
},

syncEditorContents : function(){
	   EditorSync.updateContentAfterload("#wmd-input", "#wmd-preview");
	   EditorSync.saveContentBeforeUnload("#wmd-input", "#wmd-preview");
}

};



/*userPage object to hold the operations related to editor visibilty of different elements in user page*/
userPage={
		user : null,
		auth: null,
		init : function(){
			this.user = util.getObjectFromSession("_user");
			this.auth = util.getItemFromSession('_auth');
		},
		minViewPortWidth : 768,	
		maxtags : 5,
		hideEditor_not : function(){ $('.editor-not').hide();}
};

userPage.showControls = function(){

	var controlString = "<a class='editor-head-done right hide-for-small'"+
		"title='save the article'><span class='fa  fa-floppy-o'></span></a> " +
		"<a class='editor-head-pre right hide-for-small' title='preview article'>" +
		"<span class='fa  fa-binoculars  '></span></a>";
   $('.ul-tools').append(controlString);
	
	
	$('.editor-head-done span, .editor-head-pre span').hide();

		$(window).scroll(function(){
			var top = $(this).scrollTop();
			if(top > 35)
			 {
				$('.editor-head-done span, .editor-head-pre span').slideDown(200);
			 }
			else $('.editor-head-done span, .editor-head-pre span').hide();
			
		});
}

userPage.showEditorPreview = function(){
	$('#wmd-input, #wmd-button-bar').on("click",function(){
    	if($('.editor').is(':visible') === true){
		 $("#wmd-preview").slideDown(1000);
		}
	});
	 
}

userPage.hideEditorOnResize = function(){
	userPage.hideEditor_not();
	$('.editor').hide();
    if($(window).width() < userPage.minViewPortWidth){
    	$('.editor').hide();
		 $('.editor-not').show();
    	
    }	
	
	
	$(window).resize(function(){
		var currentWidth = $(window).width();
		 if(currentWidth < userPage.minViewPortWidth){
			 
			 $('.editor').hide();
			 $('.editor-not').show();
			 
		 }
		 if(currentWidth >= userPage.minViewPortWidth){
			 
			 $('.editor-not').html(currentWidth);
			 
			 $('.editor').show();
			 userPage.hideEditor_not();
		 }
		 
		 console.log("resize called  " +currentWidth);  
	});
	
}




userPage.clickUpload = function(){
	$(".editor-upload").on("click",function(){ $("#upload").click(); });
	
}
userPage.setCover = function(id,result){
	 $(id).css("background-image", "url(" + result + ")");
     $(id).slideDown(600);
	
}
userPage.loadImage = function(file){
	
	// Create a new instance of the FileReader
    var reader = new FileReader();
    // Read the local file as a DataURL
    reader.readAsDataURL( file);

    // When loaded, set image data as background of page
    reader.onloadend = function(){
    	sessionStorage.setItem("cover", this.result);//save the obj for preview in local storage
       userPage.setCover("#uploaded-image",this.result);
   
     log(this.result);
    }

	
}

userPage.processUploadImage = function(){
	
	$("#upload").on("change",function(){
		// Get a reference to the fileList
	    var files = !!this.files ? this.files : [];

	    // If no files were selected, or no FileReader support, return
	    if ( !files.length || !window.FileReader ) return;

	    // Only proceed if the selected file is an image
	    if ( /^image/.test( files[0].type ) ) {
   
	        userPage.loadImage(files[0]);
	        
	    }
		
	});
	
}

userPage.getCoverAfterRefresh = function(){
	if(sessionStorage.getItem("cover")){
	 userPage.setCover("#uploaded-image",sessionStorage.getItem("cover"));
	 $('h1.cover-title-heading').html(sessionStorage.getItem("cover-title"));
	}
	//else $('#uploaded-image').hide();
}

userPage.manageCoverTitle =  function(){
    autosize($(".cover-title-input"));
    $('.cover-title-heading').hide();
      if(!sessionStorage.getItem("cover-title"))
        $('.cover-title-input').focus().val("").val("Type a title here");
     else
    	 $('.cover-title-input').focus().val("").val(Base64.decode(sessionStorage.getItem("cover-title")));
      
	$('.cover-title-input').on('mouseout',function(){

		var val=$(this).val();
		log(val);
		sessionStorage.setItem("cover-title", Base64.encode(val));
		$('.cover-title-heading').html(val).show();
		$(this).hide();
	});
	
	$('.cover-title-heading').on('mouseover',function(){
		   var val= Base64.decode(sessionStorage.getItem("cover-title"));
		   $('.cover-title-input').show().focus().val("").val(val); 
		    
		$(this).hide();
		
	});
	
}
userPage.processTags = function(){
    
    
    $('input.tags').val(""); //clear the tags on refresh
    $("#tag-error").hide();
 
    $('input.tags').on('keyup',function(){
    	$("#tag-error").hide();//hide the error box
         var tagArray=[];
 	     tagArray=$(this).val().split(/[,]+/); //split the string in tokens and store in array
 	 	 var count = tagArray.length;
 	 	 
 	 	 if(count <= userPage.maxtags  ){
 	 		var tagString="";
 	 		
 	 	 	for(i=0; i< count; i++){
 	 	 	   tagString +="<small id= "+i+" >"+tagArray[i]+" <i class='fa fa-close'></i></small>" ;
 	 	 	  }
 	 	 	
 	 	 	$(".tag-list").html(tagString);
 	 	 	util.storeArrayInSession("tag-array", tagArray);
 	 		
 	 	}
 	 	else{
 	 		$("#tag-error").html("Maximum 5 tags are allowed!").show();
 	 	}
 		  
 	 	//clear the tags when input is clear
 	    if(tagArray.length === 1 && tagArray.pop() === ""){
 	    	$(".tag-list").html("");
 	    }
		  
 	   
    });
    
     $('div.tag-list').on('click','i.fa',function(){
     	
    	 var id=$(this).parent().attr("id"); //get id of close
     	 var tags=[];
     	 tags = util.getArrayFromSession("tag-array"); //store in session
     	 tags.splice(id,1); //remove the closed element 
     	 util.storeArrayInSession("tag-array", tags); //update array in session
         $(this).parent().hide();  //hide the closed element
        
         
     });

	
}
userPage.openPreview = function(){
	
	$(".editor-pre, .editor-head-pre").on("click",function(){
	
		window.open("./article/preview");
		
		
	});
	
}

userPage.saveArticle = function(){
		
		var htmlcontent = sessionStorage.getItem('htmlContent');
		var covertitle = sessionStorage.getItem('cover-title');
		var image = sessionStorage.getItem('cover');
		var tags = util.getArrayFromSession('tag-array');
	
		$('.editor-done ,.editor-head-done').on('click',function(){

			$(this).html("<span class='fa fa-circle-o-notch fa-spin'></span>");
			
			 newArticle = new clientArticle(covertitle, image, htmlcontent, tags);
			 log(newArticle);
			 NewArticlePost.setData(newArticle);
			 Ajax.POST(NewArticlePost);
			
		});
	
}


var NewArticlePost = {
		url : "",
		data: "",
		encodedAuth : "",
		setData : function(dataObj) {
			this.data = JSON.stringify(dataObj);
		},
		prejax : function() {
			progressBar.append=true;
			progressBar.height = 3;
			progressBar.build(".home-header", 50);
			this.url = userPage.user.links[2].url;
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
			$('.editor-done ,.editor-head-done').html("<span class='fa fa-floppy-o'></span>");
			log("success in post article");
			log(obj);
		},
		error : function(data) {
			log('fail in post article');
			log(data);
		}

	}
//post article end


userPage.processUserPage = function(){
	if (Auth.isLoggedIn()) {
		log("user logged in");
		this.init();
		userheader.processHeader(this.user);
	}
	
	
	
	EditorSync.syncEditorContents();
	userPage.showControls();
	userPage.hideEditorOnResize();
    userPage.showEditorPreview();
    userPage.clickUpload();
    userPage.openPreview();
	userPage.processUploadImage();
	userPage.getCoverAfterRefresh();
	userPage.manageCoverTitle();
	userPage.processTags();
    userPage.saveArticle();
	

	
}

$(function(){
	$('.error-box').hide();
	userPage.processUserPage();
});
