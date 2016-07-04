<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isELIgnored="false"%>

<!DOCTYPE html>
<html class="no-js">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Home | imzah.com</title>

<meta name="viewport"
	content="width=device-width, initial-scale=1, user-scalable=no">

<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/pushy.css">
<link rel="stylesheet" href="css/app.css">
<link rel="stylesheet" href="css/app-font.css">
<link rel="stylesheet" href="css/foundation.css">
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<!-- jQuery -->


</head>

<body class="home-body">
	<noscript>
		<div class="small-12 large-12 medium-12 ">
			<i class=" fa fa-exclamation-triangle"></i>Please enable javascript.
			This site won't work properly
		</div>
	</noscript>
	
	
	<!-- Pushy Menu -->
	<nav class="pushy pushy-left nav-side">
	    <div class="small-12 large-12 medium-12 columns  nav-badge">
	    </div>
	    <div class="small-12 large-12 medium-12 nav-wrapper">
	    	<ul class="ul-side  no-list-style">

			<li class="nav-break"></li>
			<li class=" font-runda-heading li-side"><a
				href="${pageContext.request.contextPath}/home"><span
					class="fa fa-lg fa-home"></span> home</a></li>
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

			<li class=" font-runda-heading li-side">
			<a href=""><span class="fa fa-2x fa-twitter"></span> </a>
			<a href=""><span class="fa  fa-2x fa-facebook"></span>  </a>
			
			<a href=""><span class="fa fa-2x fa-google-plus"></span> </a>
			<a href=""><span class="fa fa-2x fa-instagram"></span> </a>
			</li>

		</ul>
	    	
	    
	    </div>
		
	</nav>
	<!-- Site Overlay -->
	<div class="site-overlay"></div>

	<!-- Your Content -->
	<div id="container">
		<div class="sub-menu ">
			<i class="fa fa-2x  fa-bars menu-btn menu " id="menu"></i> <a
				href="${pageContext.request.contextPath}/home/user/signup"
				class=" button-a signUp blue-button fade-border 
				hide-for-small float-right font-runda-heading-link ">sign in/sign up</a> 
				 <a href="${pageContext.request.contextPath}/home/explore"
				class=" header-link-black fade-border font-runda-heading-link float-right hide-for-small ">
				<span class="fa fa-lg fa-newspaper-o"></span>explore
			</a>
		</div>
		<div class="poster-container  " id="mainNav">
			<header class="app-header index-header">
				<i class="fa fa-2x  fa-bars menu-btn " id="menu"></i> <a
					href="${pageContext.request.contextPath}/home/user/signup"
					class=" button-a signUp fade-border hide-for-small
					 float-right font-runda-heading-link white-button">sign in/sign up</a> 
					 <a href="${pageContext.request.contextPath}/home/explore"
					class=" header-link fade-border font-runda-heading-link float-right hide-for-small ">
					<span class="fa fa-lg fa-newspaper-o"></span> explore
				</a>

			</header>

			<section class="poster  ">
				  <ul class="no-list-style">
				  <li><h3 id="logo">i.m.z.a.h</h3></li>
				  <li><h1>read the words you love</h1></li>
				  <li> <h3>discover new articles and start writing your own</h3></li>
				  <li class='hide-for-small'><a class='chev-down'> <i class='  fa fa-lg fa-chevron-down'></i></a></li>
				  <li>
				  <div class="row searchHome">
				  
				
				  <div class='small-12 large-12 medium-12 columns  '>
				  <a class='button-a  small-centered medium-centered large-centered small-10 large-2 medium-3 columns white-button' 
				  href="${pageContext.request.contextPath}/home/user/signup">start writing</a>
				  </div>
				  </div>
				  
				  
				  </li>
				  </ul>
				
			</section>
		</div>

		<div class=" container-g ">
	    <div class = "card-row">
	       <section class="trending-headline small-12 large-2 medium-3 columns ">
	       
				
				<h3>trending articles</h3>
			
			
			
				
		</section>
	    </div>
          

			<!-- card row -->
			<section id='cards' class=" card-row">
			   
				<!-- card START -->
		        <div class='home-trends '>
		          
		        </div> 
				
				<!-- card END-->

			</section>
			<!-- trending row ends here -->
           <section class="home-invite small-12 large-12 medium-12  columns ">
           <div class="row  ">
           <div class=' invite-heading small-12 large-12 medium-12 columns '>
              <h4>We are still Developing <b>I.M.Z.A.H</b></h4>
              <h4>Thank you for visiting..</h4>
              
              </div>
              <img class="devc" alt="we are still developing it.." src="img/dvl.svg">
           </div>
                
           </section>


		

		</div>
		<!-- container-g END -->

	</div>
	<!-- Container END -->



	<footer id='footer' class=" small-12 large-12 medium-12 columns">
		<a id='chev-footer' class='chev-down-a right'> <i  class='  fa fa-2x fa-chevron-circle-up'></i></a>	
		<i class="fa fa-copyright"></i> Copyright 2001-2016
			<a href="www.imzah.com">imzah.com </a>- All Rights Reserved 


	</footer>

	<!-- Pushy JS -->
	  <script src='js/modernizr.js'></script>
   	<script src='js/jquery-1.11.3.js'></script>
	<script src="js/modernizr.js"></script>
  	<script src="js/pushy.min.js"></script>
	<script src="js/util.js"></script>
	<script src="js/menu.js"></script>
	<script src="js/home.js"></script>

</body>
</html>
