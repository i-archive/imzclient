<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html class="no-js">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>u_account | wemater.org</title>
<meta name="description" content="wemater.org">
<meta name="viewport"
	content="width=device-width, initial-scale=1, user-scalable=no">

<link rel="stylesheet" href="../../css/normalize.css">
<link rel="stylesheet" href="../../css/pushy.css">
<link rel="stylesheet" href="../../css/app.css">
<link rel="stylesheet" href="../../css/app-font.css">
<link rel="stylesheet" href="../../css/foundation.css">
<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<!-- jQuery -->
<script src="../../js/jquery-1.11.3.js"></script>
<script src="../../js/modernizr.js"></script>
<script src="../../js/jquery-ui.js"></script>
<link rel="stylesheet" href="../../css/jquery-ui.css">


</head>
<noscript>
	<div class="small-12 large-12 medium-12 ">
		<i class="fa fa-exclamation-triangle"></i>Please enable javascript.
		This site won't work properly
	</div>
</noscript>

<body class="body">



	<header class="home-header">

		<section class=" ul-header large-4 medium-12 small-12 columns">
			<a class="float-left" href="${pageContext.request.contextPath}/home"> <span
				class="fa fa-lg fa-home"></span></a> <a class="float-left push-1">
				<span class="fa fa-lg fa-user"></span><b> irshad sheikh</b>
			</a>

		</section>


		<section class="ul-tools large-7  medium-12 small-12 columns">

			<a href="${pageContext.request.contextPath}/home/user/editor" class="float-left" id="write"> <span
				class="fa fa-lg fa-pencil-square-o"></span><b
				class="hide-for-small-only"> write</b>
			</a> 
			<a   href="${pageContext.request.contextPath}/home/user/articles" class="float-left" id="your-article">
				<span class="fa fa-lg fa-list-alt"></span><b
				class="hide-for-small-only"> past articles </b>
			</a> 
			<a href="${pageContext.request.contextPath}/home/user/explore" class="float-left" id="explore"> <span
				class="fa fa-lg fa-folder "></span> <b class="hide-for-small-only">
					explore</b>
			</a> 
			<a   href="${pageContext.request.contextPath}/home/user/setting" class="float-left" id="account"> <span
				class="fa fa-lg  fa-gear "></span> <b class="hide-for-small-only">account
			</b>
			</a>

		</section>


	</header>


	<div class=" user-wrapper ">



		<div class="account small-12 large-12 medium-12   border">
			<div class="user-info panel small-12 large-6 medium-6 columns border">

			</div>
			<div
				class="user-get-info panel small-12 large-6 medium-6 columns border">

			</div>
		</div>
	</div>
	<!-- user-wrapper end -->

	<footer class=" user-footer small-12 large-12 medium-12 columns">

		<i class="fa fa-copyright"></i><small>Copyright 2001-2014
			wemater.org - All Rights Reserved </small>


	</footer>


	<script src="../../js/util.js"></script>




</body>
</html>
