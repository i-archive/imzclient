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
        		<script src="https://use.fontawesome.com/1083451c67.js"></script>
		        <link rel="stylesheet" href="../../css/jquery-ui.css">
		         
    </head>
    
    <body class="home-body" >
  
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
        <div class="site-overlay"></div>
       
        <!-- Your Content -->
<div id="container">

<span  class="fa fa-2x  fa-bars menu-btn login-menu-button" id="menu"></span>



<div class="form-wrapper  ">


           <ul class='tabs no-list-style small-12 large-5 medium-8 small-centered medium-centered large-centered  columns' >
            
            <li id='sign-in-head' class='auth-head'>
            <h1>sign in </h1>
            
            </li>
            <li id='sign-in-cont'>
            <section class=" form-login-class  small-12 large-12 medium-12 " >

				 <div class=" row ">
				           <div class=" form-input small-12 large-8 medium-8 large-centered medium-centered columns ">
				           <input id="username" type="text" placeholder="username">
				           <span id="username_error" class=" error-box"></span>
				           </div>
				 </div>
				  <div class="  row ">
				           <div class="form-input small-12 large-8 medium-8 large-centered medium-centered columns ">
				           <input id="password" type="password" placeholder="password">
				           <span id="password-error" class="error-box"></span>
				           </div>
				</div>
				<div class=" row ">
				           <div class="form-input small-12 large-8 medium-8  large-centered medium-centered columns ">
				           		
				               <input  type="checkbox"  id="remember_me" name="check"  />
				     			<label id="remember_me_label" for="remember_me" >Remmember my password</label>
				           
				           </div>
				</div>
				
				 <div class="row">
					           
					           <div class=" form-button small-12 medium-8 large-8 medium-centered large-centered columns ">
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
            <h1>Sign up</h1>
            </li>
            <li id='sign-up-cont'>
              
		 
		 <section  class=" form-class  small-12 large-12 medium-12" >
		  
		  <div class=" row ">
		           <div class=" form-input small-12 large-8 medium-8 large-centered medium-centered columns ">
		           <input id="usermamep" type="text" placeholder="pick a username">
		           <span id="usernamep-error" class=" error-box"></span>
		           </div>
		 </div>
		 <div class=" row ">
		           <div class=" form-input small-12 large-8 medium-8 large-centered medium-centered columns ">
		           <input id="emailp" type="text" placeholder="enter your email address">
		           <span id="emailp-error" class=" error-box"></span>
		           </div>
		 </div>
		  <div class="  row ">
		           <div class="form-input small-12 large-8 medium-8 large-centered medium-centered columns ">
		           <input id="passwordp" type="password" placeholder="password">
		           <span id="passwordp-error" class="error-box"></span>
		           </div>
		</div>
		<div class="  row ">
		           <div class="form-input small-12 large-8 medium-8 large-centered medium-centered columns ">
		           <input id="password-g" type="password" placeholder="confirm password">
		           <span id="password-g-error" class="error-box"></span>
		           </div>
		</div>
		           <div class="row">
			           
			           <div class=" form-button small-12 medium-8 large-8 large-centered medium-centered columns ">
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
    