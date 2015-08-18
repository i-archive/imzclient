<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html >
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>preview | wemater.org</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

		        <link rel="stylesheet" href="../../../css/normalize.css">
		       	<link rel="stylesheet" href="../../../css/pushy.css">
		        <link rel="stylesheet" href="../../../css/app.css">
				<link rel="stylesheet" href="../../../css/app-font.css">
		       	<link rel="stylesheet" href="../../../css/foundation.css">
        		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
		       <!-- jQuery -->
		        <script src="../../../js/jquery-1.11.3.js"></script>
		        <script src="../../../js/jquery-ui.js"></script>
		        <link rel="stylesheet" href="../../../css/jquery-ui.css">
		        
		        
		        <!-- syntax -->
		        <script type="text/javascript" src="../../../editor/syntaxScripts/shCore.js"></script>
				<script type="text/javascript" src="../../../editor/syntaxScripts/shBrushJScript.js"></script>
				<script type="text/javascript" src="../../../editor/syntaxScripts/shBrushJava.js"></script>
				<link type="text/css" rel="stylesheet" href="../../../editor/syntaxStyles/shCoreDefault.css"/>
				<link type="text/css" rel="Stylesheet" href="../../../editor/syntaxStyles/shThemeDefault.css"/>
		        
    </head>
   
    <body class="home-body" >
        <noscript >
  		<div class="small-12 large-12 medium-12 " > <i class="fa fa-exclamation-triangle"></i>Please enable javascript. This site won't work properly</div>
  		</noscript>
<!-- Pushy Menu -->
	<nav class="pushy pushy-left nav-side">
		<ul class="ul-side  no-list-style">

			<li class="nav-break"></li>
			<li class=" font-runda-heading li-side"><a
				href="${pageContext.request.contextPath}/home"><span
					class="fa fa-lg fa-home"></span> home</a></li>
			<li class=" font-runda-heading li-side"><a
				href="${pageContext.request.contextPath}/home/topstories"><span
					class="fa fa-lg fa-star-o "></span> top stories</a></li>

			<li class="nav-break"></li>
			<li class=" font-runda-heading li-side"><a
				href="${pageContext.request.contextPath}/home/explore"><span
					class="fa fa-lg fa-newspaper-o"></span> explore</a></li>
			<li class=" font-runda-heading li-side"><a
				href="${pageContext.request.contextPath}/home/user/editor"><span
					class="fa  fa-lg fa-pencil "></span> write articles</a></li>
			<li class="nav-break"></li>
			<li class="nav-break"></li>
			<li class=" font-runda-heading li-side"><a
				href="${pageContext.request.contextPath}/home/user/signup"><span
					class="fa fa-lg fa-sign-in"></span>sign in/sign up</a></li>
			<li class="nav-break"></li>
			<li class="nav-break"></li>

			<li class=" font-runda-heading li-side"><a href=""><span
					class="fa fa-lg fa-twitter"></span> twitter</a></li>
			<li class=" font-runda-heading li-side"><a href=""><span
					class="fa  fa-lg fa-facebook"></span> facebook </a></li>
			<li class=" font-runda-heading li-side"><a href=""><span
					class="fa fa-lg fa-google-plus"></span> google<i class="fa fa-plus"></i>
			</a></li>
			<li class=" font-runda-heading li-side"><a href=""><span
					class="fa fa-lg	 fa-instagram"></span> instagram</a></li>
		</ul>

	</nav>


        <!-- Site Overlay -->
        <div class="site-overlay"></div>
       
        <!-- Your Content -->
<div id="container" >
	<header class="app-header  ">
			<i class="fa fa-2x black-color	 fa-bars menu-btn " id="menu"></i>
			<a  href="/saveit" class="  button-a signUp fade-border hide-for-small float-right
			 font-runda-heading-link blue-button" href="#">submit</a>
	</header>
 <nav class="sub-menu">
    	<i class="fa fa-2x  fa-bars menu-btn menu " id="menu"></i>
        <a class=" button-a signUp blue-button fade-border
         hide-for-small float-right font-runda-heading-link " href="#">submit</a>
 </nav>

  <div class="preview-wrapper ">
      
	       <div class="preview-cover-pic small-12 large-12 medium-12    ">
	         <h1 class="preview-title"></h1>
	        </div>
	        
	         <div class=" preview-container small-12 large-6 large-centered medium-centered medium-10 columns ">
	          
	            here in preview content
	                   
	         </div>
	         
	        <div class="preview-bottom-info small-12 large-6 large-centered medium-centered medium-10 columns  " > 
		         <div class=" preview-info small-12 large-5 medium-4 columns  ">
		           <a class="article-author"><i class="fa fa-user"></i> irshad sheikh</a>
		         </div>
		          <div class=" preview-tags small-12 large-7 medium-8 columns  ">
		            
		          </div>
		         
	         </div> 
        	
    
    
 </div>



<footer class=" small-12 large-12 medium-12 columns">
  
  <i class="fa fa-copyright"></i><em>Copyright 2001-2014 wemater.org - All Rights Reserved </em>
  

</footer>

</div><!-- Container END -->



        <!-- Pushy JS -->
         <script src="../../../js/pushy.min.js"></script>
         <script src="../../../js/util.js"></script>
         <script src="../../../js/menu.js"></script>
         <script src="../../../js/preview.js"></script>       


    </body>
</html>
    