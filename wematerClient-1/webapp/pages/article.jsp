<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<!DOCTYPE html>
<html class='no-js' >
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>
        <title id='a_t'></title>
        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no'>

   
		        <link rel='stylesheet' href='../../css/normalize.css'>
		       	<link rel='stylesheet' href='../../css/pushy.css'>
		        <link rel='stylesheet' href='../../css/app.css'>
				<link rel='stylesheet' href='../../css/app-font.css'>
		       	<link rel='stylesheet' href='../../css/foundation.css'>
		        <link rel='stylesheet' href='../../css/jquery-ui.css'>
		        <script src="https://use.fontawesome.com/1083451c67.js"></script>
		        <script src='../../js/modernizr.js'></script>
    </head>
   
    <body class='article-body' >
   
        <noscript >
  		<div class='small-12 large-12 medium-12 ' > <i class='fa fa-exclamation-triangle'></i>Please enable javascript. This site won't work properly</div>
  		</noscript>
        <!-- Pushy Menu -->
    <!-- Pushy Menu -->
<nav class="pushy pushy-left nav-side">
	
	    <div class="small-12 large-12 medium-12  nav-badge">
	    	<div class="box">IMZAH</div>
	    </div>
	    <div class="small-12 large-12 medium-12 nav-wrapper "> 
	    
	    	 <ul class="side-nav" role="navigation" >
			   <li role="menuitem">
				   <a href="${pageContext.request.contextPath}/">
				   		<i class="fa fa-lg fa-home align" aria-hidden="true"></i>home
				   </a>
			   </li>
			   <li role="menuitem">
				   	<a href="${pageContext.request.contextPath}/home/explore">
				   		<i class="fa fa-lg fa-industry align" aria-hidden="true"></i>explore
				   	</a>
			   	</li>
			   <li role="menuitem">
				   	<a href="${pageContext.request.contextPath}/home/user/editor">
				   		<i class="fa fa-lg fa-pencil-square-o align" aria-hidden="true"></i>write
				   	</a>
			   </li>
			   <li role="menuitem">
				   	<a href="${pageContext.request.contextPath}/home/user/signup">
				   		<i class="fa fa-lg fa-sign-in align" aria-hidden="true"></i>sign-in
				   	</a>
			   	</li>
			  
				<li class="nav-break"></li>
				 <li class="divider"></li>
				 
			 </ul>
			 
			 <ul class="inline-list social">
				  <li><a href="#"><i class="fa  fa-facebook align" aria-hidden="true"></i></a></li>
				  <li><a href="#"><i class="fa  fa-google-plus align" aria-hidden="true"></i></a></li>
				  <li><a href="#"><i class="fa  fa-twitter align" aria-hidden="true"></i></a></li>
				  <li><a href="#"><i class="fa  fa-medium align" aria-hidden="true"></i></a></li>
				  <li><a href="#"><i class="fa  fa-instagram align" aria-hidden="true"></i></a></li>
			</ul>
			 <ul class="side-nav" role="navigation" >
				 <li class="divider"></li>
			</ul>
			<ul class="inline-list side-nav-footer">
			  <li><a href="#">about</a></li>
			  <li><a href="#">privacy</a></li>
			  <li><a href="#">feedback</a></li>
			
			</ul>	
			 
	    </div>
		
	</nav>

        

    
        <!-- Site Overlay -->
        <div class='site-overlay'></div>
       
        <!-- Your Content -->
<div id='container'>
			<nav class='sub-menu'>
    	<i class='fa fa-2x fa-bars menu-btn menu ' id='menu'></i>
    	<a  href='${pageContext.request.contextPath}/home/user/signup'
    	 class='  button-a signUp blue-button fade-border hide-for-small 
    	 float-right font-runda-heading-link ' >sign in/sign up</a>
		
			<a href='${pageContext.request.contextPath}/home/explore' class=' header-link-black fade-border font-runda-heading-link float-right hide-for-small '>
			      <span class='fa fa-lg fa-newspaper-o' ></span>explore
			 </a>
    </nav>
	
		<header class='app-header '>
		<i class='fa fa-2x fa-bars menu-btn menu ' id='menu'></i>
        <a  href='${pageContext.request.contextPath}/home/user/signup'
        class='  button-a signUp blue-button fade-border hide-for-small
         float-right font-runda-heading-link '>sign in/sign up</a>
		
			<a href='${pageContext.request.contextPath}/home/explore' class=' header-link-black fade-border font-runda-heading-link float-right hide-for-small '>
			      <span class='fa fa-lg fa-newspaper-o' ></span>explore
			 </a>
			
		</header>

<section class='article-wrapper '>

  <div class='main-article-cover small-12 large-12 medium-12 '>  </div>
    
<div class='main-article-content-wrapper small-12 large-12 medium-12 columns'>
    	
     <div class=' fullRow white-bg  '> 
     
     <div class=' main-content  small-12 large-8 medium-8  columns-c  '></div>
     
     <div class='main-top-bar small-12 large-4 medium-4  columns '>
       <div class=' small-12 large-12 medium-12  bcEnd columns '>
         <div class=' article-date small-12 large-12 medium-12  columns '></div>
          </div>
       <div class='small-6 large-6 medium-6  columns '>
       <div class='small-12 large-12 medium-12  columns '>bookmark</div>
         <div class='small-12 large-12 medium-12  columns '>
         <a href="#" data-reveal-id="bookmarkId"><i class='fa fa-lg fa-bookmark'></i></a>
         </div>
       
       </div>
       <div class='small-6 large-6 medium-6 bcEnd columns '>
       <div class='small-12 large-12 medium-12   columns '>share</div>
         <div class='small-12 large-12 medium-12  columns '>
         <a href="#" data-reveal-id="shareId"><i class='fa fa-lg fa-share-alt-square'></i></a>
         
         </div>
       </div>
       <div class='text-left small-12 large-12 medium-12 bcEnd bcBottom columns '>
       <span id='likeCount'>  </span> <a class='a_like right'></a></div>
     
     <!--    <a class='a_like button-a-trim  black-button'></a>
        <a class='bookmark' title='bookmark'><i class='fa fa-lg fa-bookmark-o'></i></a>
	   <a class='share ' title='share'><i class='fa fa-lg fa-share-alt'></i></a>
	   
	   <a class='article-date'></a>
	    -->
     </div>
    
     
     	<div class=' main-article-info small-12 large-12 medium-12 columns  '>
	     <div class=' main-info small-12 large-5 medium-4 columns '>
		       <div class=' small-12 large-12 medium-12 '>
			      <a class='article-author'></a>
			   </div>
			         
		        <div class=' author-bio small-12 large-12 medium-12 '></div>     
		 </div>
		               
		 <div class=' article-tags small-12 large-7 medium-8 columns '></div>
	</div>
      </div>
 
    
             
    <!-- main article content and top articles -->
   
<div class=' main-comments-wrapper small-12 large-6 medium-6 columns '> 
		      <div class='comment-but-wrapper small-12 large-12 medium-12 '>
		          <a id='show-comment' class=' comment-button small-12 large-4 medium-4' >
		          <span class='fa fa-pencil-square-o'></span> comments
		          </a>
		          <a id='write-comment' class=' comment-button small-12 large-4 medium-4' >
		          <span class='fa fa-pencil-square-o'></span> post comment</a>
		      </div> 
       <div class='comment-wrapper small-12 large-11 medium-11 '>  
           <!-- comments here -->         	
      
       </div>
     <div class='comment-write-wrapper  small-12 large-12 medium-12  '>
   
		   <a class='comment-author '></a>
	       <textarea id='write-comment-content' placeholder='type the comment here'></textarea>
	       <span id='comment-content-error' class=' error-box'>loading</span>  
	       <a id='post-comment' class=' small-12 medium-12 large-12  columns button-a blue-button right'>  </a>  
     </div>
        
       
</div>

   <div class=' main-article-suggest-wrapper small-12 large-6 medium-6 columns '> 
             <div class='suggest-head-wrapper small-12 large-12 medium-12 '>
              <span class=' suggest-heading ' >top articles</span> 
             </div>  
              
      <div class='suggest-wrapper small-12 large-12 medium-12 '>
    
      </div>
  </div>   
    
 </div><!-- main article content wrapper end -->

</section><!-- explore-wrapper end -->




</div><!-- Container END -->

  
<!--  modals for different operations -->
<div id="shareId" class="reveal-modal  small" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
  <h5 id="modalTitle">Share this article.</h5>
  <div class="row shareModal ">
  <div class="small-2 large-2 medium-2 left columns"><a href="" ><i class="fa fa-2x fa-facebook-official"></i></a></div>
  <div class="small-3 large-2 medium-2 left columns"><a href =""><i class="fa fa-2x fa-google-plus"></i></a></div>
    <div class="small-2 large-2 medium-2 left columns"><a href=""><i class="fa fa-2x fa-get-pocket"></i></a></div>  
    <div class="small-2 large-2 medium-2 left columns"><a href=""><i class="fa fa-2x fa-twitter"></i></a></div>
  <div class="small-2 large-2 medium-2 left columns"><a href=""><i class="fa fa-2x fa-whatsapp"></i></a></div>
    <div class="small-2 large-2 medium-2 left columns"><a href=""><i class="fa fa-2x fa-medium"></i></a></div> 
  
  </div>
  
  <a class="close-reveal-modal" aria-label="Close">&#215;</a>
</div>

<div id="bookmarkId" class="reveal-modal small" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
  <h2 id="modalTitle">bookmark this article</h2>
  <p class="lead">This feature is comming soon...</p>
  
  <a class="close-reveal-modal" aria-label="Close">&#215;</a>
</div>
<!-- modals for different operations //END -->
   
<footer class=' small-12 large-12 medium-12 columns'>
  
  <i class='fa fa-copyright'></i><em>Copyright 2001-2014 wemater.org - All Rights Reserved </em>
  

</footer>
    <script src='../../js/jquery-1.11.3.js'></script>
	<script src="../../js/fastclick.js"></script>
    <script src="../../js/foundation.min.js"></script>
	<script src='../../js/pushy.min.js'></script>
	<script src='../../js/util.js'></script>
	<script src='../../js/menu.js'></script>
	<script src="../../js/autosize.min.js"></script>
	<script src='../../js/main-article.js'></script>

<script>
      $(document).foundation();
  </script>
</body>
</html>
    