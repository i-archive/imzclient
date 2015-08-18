<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isELIgnored="false"%>

<!DOCTYPE html>
<html class="no-js">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Home | wemater.org</title>
<meta name="description"
	content="Pushy is an off-canvas navigation menu for your website.">
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
<script src="js/modernizr.js"></script>
<script src="js/jquery-1.11.3.js"></script>
<script src="js/jquery-ui.js"></script>
<link rel="stylesheet" href="css/jquery-ui.css">
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
	<div id="container">
		<div class="sub-menu">
			<i class="fa fa-2x  fa-bars menu-btn menu " id="menu"></i> <a
				href="${pageContext.request.contextPath}/home/user/signup"
				class=" button-a signUp blue-button fade-border 
				hide-for-small float-right font-runda-heading-link ">sign in/sign up</a> 
				<a
				class=" header-link-black fade-border font-runda-heading-link float-right hide-for-small ">
				<span class="fa fa-lg fa-info-circle"></span>about
			</a> <a href="${pageContext.request.contextPath}/home/topstories"
				class=" header-link-black fade-border font-runda-heading-link float-right hide-for-small ">
				<span class="fa fa-lg fa-star-o"></span>top stories
			</a> <a href="${pageContext.request.contextPath}/home/explore"
				class=" header-link-black fade-border font-runda-heading-link float-right hide-for-small ">
				<span class="fa fa-lg fa-newspaper-o"></span>explore
			</a>
		</div>
		<div class="poster-container tinted-image" id="mainNav">
			<header class="app-header index-header">
				<i class="fa fa-2x  fa-bars menu-btn " id="menu"></i> <a
					href="${pageContext.request.contextPath}/home/user/signup"
					class=" button-a signUp fade-border hide-for-small
					 float-right font-runda-heading-link white-button">sign in/sign up</a> <a
					class=" header-link fade-border font-runda-heading-link float-right hide-for-small ">
					<span class="fa fa-lg fa-info-circle"></span>about
				</a> <a href="${pageContext.request.contextPath}/home/topstories"
					class=" header-link fade-border font-runda-heading-link float-right hide-for-small ">
					<span class="fa fa-lg fa-star-o"></span>top stories
				</a> <a href="${pageContext.request.contextPath}/home/explore"
					class=" header-link fade-border font-runda-heading-link float-right hide-for-small ">
					<span class="fa fa-lg fa-newspaper-o"></span> explore
				</a>

			</header>

			<section class="poster  ">
				<div class="poster-sub-1  ">
					<h4 class="font-heading-para fa-lg ">wematter.org</h4>
					<h2 class=" fa-3x font-heading-oswald-para ">freedom of
						knowldge</h2>
					<p class="  font-heading-msg ">Easily share your knowledge and
						learn from others</p>
					<a class="button-a white-button fade-border" href="#">be part of it</a>
				</div>
			</section>
		</div>

		<div class=" container-g ">



			<!-- card row -->
			<section class=" card-row">

				<!-- trending articles -->
				<div id="trending-articles" class="headline white-background">
					<h4 class="font-runda-heading fa-lg text-center">trending
						articles</h4>

				</div>



				<!-- card START -->

				<article class=" card columns small-12 medium-6 large-3 ">
					<div class="inner-card ">
						<div id="trendImage" class="inner-image"
							onclick="location.href='http://www.example.com';"></div>
						<div class="inner-link-info ">
							<ul class="no-list-style object-info">
								<li><a><span class="fa fa-external-link"></span>mannual
										labrinth of location foccused</a></li>
								<li><a><span class="fa fa-user"></span>author name</a></li>
							</ul>
							<ul class="no-list-style comment-like">
								<li>
								<li><a><span class="fa fa-heart"></span><b>100</b></a></li>
								<li>
								<li><a><span class="fa fa-comment"></span><b>100</b></a></li>

							</ul>

						</div>
					</div>
				</article>
				<!-- card END-->

			</section>
			<!-- trending row ends here -->



			<section class="latest-row ">

				<div id="latest-articles" class="headline white-background">
					<h4 class="font-runda-heading fa-lg text-center">latest
						articles</h4>

				</div>


				<!-- book row starts -->
				<article
					class="small-12 large-6 medium-6 columns latestContent-wrapper ">
					<div class="small-12 large-6 medium-12 latest-img  columns ">

					</div>


					<div class="small-12 large-6 medium-12 columns latest-content">
						<div class="content ">
							<a class="title font-runda-heading-link"> <span
								class="fa fa-lg fa-external-link"></span> first new article
								title here
							</a>

							<p class="font-heading-para">Few years ago, again the great
								politcal ambitions of the roiters had raised in the consolium
								and had reached to the worth to mention. Even because it was not
								that good ew years ago, again the great politcal ambitions of
								the roiters had raised in the consolium and had reached to the
								worth to mention. Even because it was not that good ew years
								ago, again the great politcal ambitions of the roiters had
								raised in the consolium and had reached to the worth to mention.
								Even because it was not that good ew years ago, again the great
								politcal ambitions of the roiters had raised in the consolium
								and had reached to the worth to mention. Even because it was not
								that good ew years ago, again the great politcal ambitions of
								the roiters had raised in the consolium and had reached to the
								worth to mention. Even because it was not that good</p>
						</div>
						<div class="content-info ">
							<ul class="no-list-style object-info">
								<li><a><span class="fa fa-user"></span>name of author</a></li>
							</ul>
							<ul class="no-list-style comment-like">
								<li>
								<li><a><span class="fa fa-heart"></span><b>100</b></a></li>
								<li>
								<li><a><span class="fa fa-comment"></span><b>100</b></a></li>

							</ul>

						</div>
					</div>
				</article>
				<!-- book row ends -->


			</section>
			<!-- latest article end -->

			<section class="featured-article ">

				<div id="quick-articles" class="headline white-background">
					<h4 class="font-runda-heading fa-lg text-center">quick reads</h4>

				</div>

				<!-- newspaper start  -->
				<article
					class="small-12 large-3 medium-5 columns  left feature-content">
					<div class="content-news ">

						<p class="font-heading-para">Few years ago, again the great
							politcal ambitions of the roiters had raised in the consolium and
							had reached to the worth to mention. Even because it was not that
							good ew years ago, again the great politcal ambitions of the
							roiters had raised in the consolium and had reached to the worth
							to mention. Even because it was not that goodFew years ago, again
							the great politcal ambitions of the roiters had raised in the
							consolium and had reached to the worth to mention. Even because
							it was not that good ew years ago, again the great politcal
							ambitions of the roiters had raised in the consolium and had
							reached to the worth to mention. Even because it was not that
							good ew years ago, again the great politcal ambitions of the
							roiters had raised in the consolium and had reached to the worth
							to mention. Even because it was not that good ew years ago, again
							the great politcal ambitions of the roiters had raised in the
							consolium and had reached to the worth to mention. Even because
							it was not that good ew years ago, again the great politcal
							ambitions of the roiters had raised in the consolium and had
							reached to the worth to mention. Even because it was not that
							good</p>
					</div>
					<div class="content-info ">
						<ul class="no-list-style object-info">
							<li><a><span class="fa fa-external-link"></span>big
									title here with few words</a></li>
							<li><a><span class="fa fa-user"></span>author name</a></li>
						</ul>
						<ul class="no-list-style comment-like">
							<li>
							<li><a><span class="fa fa-heart"></span><b>100</b></a></li>
							<li>
							<li><a><span class="fa fa-comment"></span><b>100</b></a></li>

						</ul>

					</div>
				</article>


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
					<a class="button-a blue-button fade-border">subscribe</a>
				</div>
			</section>

		</div>
		<!-- container-g END -->

	</div>
	<!-- Container END -->



	<footer class=" small-12 large-12 medium-12 columns">

		<i class="fa fa-copyright"></i><em>Copyright 2001-2014
			wemater.org - All Rights Reserved </em>


	</footer>

	<!-- Pushy JS -->
	<script src="js/pushy.min.js"></script>
	<script src="js/util.js"></script>
	<script src="js/menu.js"></script>

</body>
</html>
