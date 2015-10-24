<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html class="no-js" >
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Authentication | wemater.org</title>
        <meta name="description" content="Pushy is an off-canvas navigation menu for your website.">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
     
 
              
		        <link rel="stylesheet" href="../../css/normalize.css">
		       	<link rel="stylesheet" href="../../css/pushy.css">
		        <link rel="stylesheet" href="../../css/app.css">
				<link rel="stylesheet" href="../../css/app-font.css">
		       	<link rel="stylesheet" href="../../css/foundation.css">
        		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
		        <link rel="stylesheet" href="../../css/jquery-ui.css">
		         
    </head>
    
    <body class="home-body" >
  
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
					class="fa fa-lg fa-sign-in"></span> sign in/sign up</a></li>
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

	<nav class="sub-menu">
    	<i class="fa fa-2x  fa-bars menu-btn menu " id="menu"></i>
     <a  href="${pageContext.request.contextPath}/home"
    	 class=" button-a signUp blue-button fade-border hide-for-small 
    	 float-right font-runda-heading-link " >home</a>
 
			<a href="${pageContext.request.contextPath}/home/explore"
			    class=" header-link-black fade-border font-runda-heading-link float-right hide-for-small ">
			      <span class="fa fa-lg fa-newspaper-o" ></span>explore
			 </a>
    </nav>
	
		<header class="app-header ">
		
		<i class="fa fa-2x black-color fa-bars menu-btn menu " id="menu"></i>
    
			<a  href="${pageContext.request.contextPath}/home"
    	 class=" button-a signUp blue-button fade-border hide-for-small 
    	 float-right font-runda-heading-link " >home</a>
			<a href="${pageContext.request.contextPath}/home/explore" class=" header-link-black fade-border font-runda-heading-link float-right hide-for-small ">
			      <span class="fa fa-lg fa-newspaper-o" ></span>explore
			 </a>
			 
			
		</header>


<div class="form-wrapper  ">


           <ul class='tabs no-list-style small-11 large-5 medium-8 small-centered medium-centered large-centered  columns' >
            
            <li id='sign-in-head' class='auth-head'>
            <h5 ><i class='fa fa-lg fa-sign-in'></i>sign in to your account</h5>
            </li>
            <li id='sign-in-cont'>
            <section class=" form-login-class  small-12 large-12 medium-12 " >

				 <div class=" row ">
				           <div class=" form-input small-12 large-7 medium-8 large-centered medium-centered columns ">
				           <input id="username" type="text" placeholder="username">
				           <span id="username_error" class=" error-box"></span>
				           </div>
				 </div>
				  <div class="  row ">
				           <div class="form-input small-12 large-7 medium-8 large-centered medium-centered columns ">
				           <input id="password" type="password" placeholder="password">
				           <span id="password-error" class="error-box"></span>
				           </div>
				</div>
				<div class=" row ">
				           <div class="form-input small-12 large-7 medium-8  large-centered medium-centered columns ">
				           		
				               <input  type="checkbox"  id="remember_me" name="check"  />
				     			<label id="remember_me_label" for="remember_me" >Remmember my password</label>
				           
				           </div>
				</div>
				
				 <div class="row">
					           
					           <div class=" form-button small-12 medium-8 large-7 medium-centered large-centered columns ">
					            <a id="login-submit" 
					            class="button-a blue-button small-12 large-12 medium-12 columns">
					             <i class="fa fa-sign-in"></i> sign in</a>
					           </div>
				</div>
				 <div class="row ">
					           <ul class='no-list-style login-option'>
					              <li>
					              <span>forgot password?</span>
					              <a >click here</a>
					              </li>
					              <li class='right'>
					              <span>Dont have an account yet?</span>
					                 <a id='show-signup' >Sign up</a>
					              </li>
					           
					           </ul>
					         
				</div>
				           
				           
				 
				 </section>	
            
            </li>
            <li id='sign-up-head' class='auth-head'>
            <h5><i class='fa fa-lg fa-sign-out'></i>register a new account</h5>
            </li>
            <li id='sign-up-cont'>
              
		 
		 <section  class=" form-class  small-12 large-12 medium-12" >
		  
		  <div class=" row ">
		           <div class=" form-input small-12 large-7 medium-8 large-centered medium-centered columns ">
		           <input id="usermamep" type="text" placeholder="pick a username">
		           <span id="usernamep-error" class=" error-box"></span>
		           </div>
		 </div>
		 <div class=" row ">
		           <div class=" form-input small-12 large-7 medium-8 large-centered medium-centered columns ">
		           <input id="emailp" type="text" placeholder="enter your email address">
		           <span id="emailp-error" class=" error-box"></span>
		           </div>
		 </div>
		  <div class="  row ">
		           <div class="form-input small-12 large-7 medium-8 large-centered medium-centered columns ">
		           <input id="passwordp" type="password" placeholder="password">
		           <span id="passwordp-error" class="error-box"></span>
		           </div>
		</div>
		<div class="  row ">
		           <div class="form-input small-12 large-7 medium-8 large-centered medium-centered columns ">
		           <input id="password-g" type="password" placeholder="confirm password">
		           <span id="password-g-error" class="error-box"></span>
		           </div>
		</div>
		           <div class="row">
			           
			           <div class=" form-button small-12 medium-8 large-7 large-centered medium-centered columns ">
			            <a id="sign_up_button" class=" button-a blue-button small-12 large-12 medium-12 columns">  
			            <i class="fa fa-sign-in"></i> sign up </a>
			           </div>
		</div>
		 <div class="row ">
					           <ul class='no-list-style login-option'>
					           
					              <li class='right'>
					              <span>Already have an account?</span>
					                 <a id='show-signin' >Sign in</a>
					              </li>
					           
					           </ul>
					         
				</div>
		           
		           
		 
		 </section> <!-- end of registertion mannual -->

            
            
            </li>
           
           </ul>

	  		


</div>






</div><!-- Container END -->



    
        
     <script src='../../js/modernizr.js'></script>
   	<script src='../../js/jquery-1.11.3.js'></script>
   	<script src='../../js/pushy.min.js'></script>
   	<script src='../../js/util.js'></script>
   	<script src='../../js/menu.js'></script>
   	<script src='../../js/form.js'></script>
		
        

    </body>
</html>
    