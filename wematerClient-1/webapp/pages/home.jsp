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
				  <li><h3 id="logo">imzah</h3></li>
				  <li><h1>read the words you love</h1></li>
				  <li> <h3>discover new articles and start writing your own</h3></li>
				  <li class='hide-for-small'><a class='chev-down'> <i class='  fa fa-lg fa-chevron-down'></i></a></li>
				  <li>
				  <div class="row searchHome">
				  <div class='small-12 large-7 medium-6 columns '>
				   <div class="row">
					    <div class="large-12 medium-12 small-12 columns">
					      <div class="row sParent collapse ">
					        <div class="small-9 large-11 medium-10 columns">
					          <input type="search" placeholder="Search Articles">
					        </div>
					        <div class="small-3 large-1 medium-2 columns">
					          <a  class="searchAddon postfix"><span class="fa fa-2x fa-search"></span>
					          </a>
					        </div>
					      </div>
					    </div>
					  </div>
				  </div>
				  <div class=' orbridge small-12 large-1 medium-1 columns  '>
				  or
				 
				  </div>
				
				  <div class='small-12 large-4 medium-4 columns  '>
				  <a class='button-a left small-12 large-6 medium-12 columns white-button' 
				  href="${pageContext.request.contextPath}/home/user/signup">start writing</a>
				  </div>
				  </div>
				  
				  
				  </li>
				  </ul>
				
			</section>
		</div>

		<div class=" container-g ">
	  <section class="trending-headline small-12 large-12 medium-12 columns ">
				<span><b>Read Now: &nbsp;&nbsp;  trending articles in community</b></span>
		</section>


			<!-- card row -->
			<section id='cards' class=" card-row">
			   
				<!-- card START -->
		        <div class='home-trends '>
		            <div class=" home-loader small-12 large-2 medium-2 large-centered medium-centered   columns ">
		            <img alt="loading" src="img/ripple.svg">
		            
		            </div>
		        </div> 
				
				<!-- card END-->

			</section>
			<!-- trending row ends here -->
           <section class="home-invite small-12 large-12 medium-12  columns ">
           <div class="row  ">
           <div class=' invite-heading small-12 large-12 medium-12 columns '>
              <h4>join the Imzah community</h4>
              </div>
           </div>
              <div class="row  inviteReadWrite">
              <div class='  small-12 large-6 medium-6 columns '>
                <h5>share your skills with the world.</h5>
                <p> start writing today</p>
              </div>
              <div class=' small-12 large-6 medium-6 columns '>
               <h5>explore the diverse articles </h5>
               <p>start exploring thousands of articles<p>
              </div>
            
              </div>
           </section>


			<section class="subscribe small-12 large-12 medium-12 columns ">
				<div class="subscribe-title small-12 large-5 medium-4 columns ">
					<span class="fa fa-lg fa-envelope-o"><b>Subscribe</b></span>
				</div>
				<div class=" subscribeHome small-12 large-6 medium-7 columns large-pull-2 medium-pull-2">
					<div class="row ">
					    <div class="large-12 medium-12 small-12 columns ">
					      <div class="row  collapse">
					        <div class="small-9 large-11 medium-10 columns">
					          <input type="email" placeholder="type your email">
					        </div>
					        <div class="small-3 large-1 medium-2 columns">
					          <a  class="subAddon postfix"><span class="fa fa-2x fa-envelope "></span>
					          
					          </a>
					        </div>
					      </div>
					    </div>
					  </div>
				
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
