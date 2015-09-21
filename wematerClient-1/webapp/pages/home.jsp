<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isELIgnored="false"%>

<!DOCTYPE html>
<html class="no-js">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Home | website.org</title>

<meta name="viewport"
	content="width=device-width, initial-scale=1, user-scalable=no">

<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/pushy.css">
<link rel="stylesheet" href="css/app.css">
<link rel="stylesheet" href="css/app-font.css">
<link rel="stylesheet" href="css/foundation.css">
<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
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
		<div class="sub-menu">
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
				  <li><h3>website.org</h3></li>
				  <li><h1>write for others &#38 learn from others</h1></li>
				  <li> <h3>support each other and be part of the change!</h3></li>
				  <li><a class='button-a  white-button' 
				  href="${pageContext.request.contextPath}/home/user/signup">start writing</a></li>
				  </ul>
				 <a class='chev-down'> <i class='  fa fa-lg fa-chevron-down'></i></a>
			</section>
		</div>

		<div class=" container-g ">



			<!-- card row -->
			<section id='cards' class=" card-row">

				<!-- trending articles -->
				<div id="trending-articles" class="headline  white-background">
					<h4 class="font-runda-heading fa-lg text-center">trending articles</h4>
					 <a id='chev1' class='chev-down-a right'> <i  class='  fa fa-lg fa-chevron-down'></i></a>	

				</div>



				<!-- card START -->
		        <div class='home-trends '></div> 
				
				<!-- card END-->

			</section>
			<!-- trending row ends here -->



			<section id='lat-cards' class="latest-row  ">

				<div id="latest-articles" class="headline  white-background">
					<h4 class="font-runda-heading fa-lg text-center">latest articles</h4>
				 <a id='chev2' class='chev-down-a right'> <i  class='  fa fa-lg fa-chevron-down'></i></a>	
				</div>


				<!-- book row starts -->
				<div class='home-latest'></div>
				<!-- book row ends -->


			</section>
			<!-- latest article end -->

			<section id='fea-cards' class="featured-article ">

				<div id="quick-articles" class="headline  white-background">
					<h4 class="font-runda-heading fa-lg text-center">quick reads</h4>
					 <a id='chev3' class='chev-down-a right'> <i  class='  fa fa-lg fa-chevron-down'></i></a>	
				</div>

				<!-- read start  -->
				<div class='home-read'>
				</div>
				<!-- read end -->
					


			</section>
			<!-- featured article END -->

			<section class="subscribe small-12 large-12 medium-12 columns ">
				<div class="subscribe-title small-12 large-5 medium-4 columns ">
					<span class="fa fa-lg fa-envelope-o"><b>join our mailing
							list</b></span>
				</div>
				<div class="small-12 large-5 medium-4 columns">
					<input type="search" placeholder="type your email" />
				</div>
				<div class="small-12 large-2 medium-4 columns">
					<a class="button-a small-12 blue-button fade-border">subscribe</a>
				
				</div>
			</section>

		</div>
		<!-- container-g END -->

	</div>
	<!-- Container END -->



	<footer id='footer' class=" small-12 large-12 medium-12 columns">
<a id='chev-footer' class='chev-down-a right'> <i  class='  fa fa-2x fa-chevron-circle-up'></i></a>	
		<i class="fa fa-copyright"></i><em>Copyright 2001-2014
			wemater.org - All Rights Reserved </em>


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
