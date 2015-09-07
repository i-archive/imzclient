/**
 *  settings of user
 */

var setting ={
		
		emailExpression : /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,	
	    usernameNotValid: "<i class='fa fa-remove'></i>  8-14 * are allowed",
	    bioNotValid: "<i class='fa fa-remove'></i>  50-200 * are allowed",
	    emailNotValid: "<i class='fa fa-remove'></i> Email is not valid",
	    minPasswordlength : 8,
	    maxPasswordlength : 25,
	    passwordInvalidlength : "<i class='fa fa-unlock'></i> password should be 8 - 25 characters",
	    passwordDoesNotMatch : "<i class='fa fa-thumbs-down'></i> Passwords does not match",
	    emailNotAvailable: "<i class='fa fa-thumbs-down'></i> Email already registered",
	    emailAvailable: "<i class='fa fa-thumbs-up  '></i> Email is available",
	    errorBox : "<li role='sett-err' class='small-12 large-3 medium-3  columns'></li>",
		erroSpan : function(message){
			     return  "<span  class='error-sett-box'>"+message+"</span>"   
		},		        
		
		validateEmail : function(email){ return this.emailExpression.test(email); },
		validatePassword : function(password){ 
			if(password.length < Form.minPasswordlength || password.length > Form.maxPasswordlength) return false;
			return true;
			},
		validateUsername : function(username){
			if(username.length >= 8 && username.length <= 14) return true;
			return false;
		},
		validateBio : function(bio){
			if(bio.length >= 50 && bio.length <= 200) return true;
			return false;
		},
		user : null,
		init : function(){
			this.user = util.getObjectFromSession('_user');
		}
		
		
};

setting.validateElement = function(role,value){
	switch (role) {
	case 'username':
		   return this.validateUsername(value);
		break;
	case 'email':
		    return this.validateEmail(value);
		break;	
	case 'password':
		     return this.validatePassword(value);
		break;	
	case 'bio':
	     return this.validateBio(value);
	break;

	default:
		return true;
		break;
	}
	
}

setting.ifErrorBoxPresent = function(element){
	 var rid = $(element).parent().next().attr('role');
	 if(rid === 'sett-err') return true;
	 else return false;
	
} 
setting.editUpdate = function(role, element){
	
	var editId = role+'_edit';
	var updateId = role+'_update';
	
	var id = $(element).attr('id');
    
    if(id === updateId){
   	 log('element cant be updated');
       	$(element).removeAttr('id').attr('id',editId);
       	var updatedVal =	$(element).prev().val();
           $(element).prev().remove();
           if(role === 'bio'){
        	   $(element).before("<span class='span-bio'></span>");
           }
           else{$(element).before("<span></span>");}
           $(element).prev().html(updatedVal).hide().fadeIn(500);
           $(element).removeClass('fa-arrow-circle-right ').addClass('fa-pencil');
           if(!this.validateElement(role, updatedVal)){
        	   if(!this.ifErrorBoxPresent(element)){
        		   $(element).parent().after(this.errorBox);
 
        		   if(role === 'username'){
        			   $(element).parent().next().html(this.erroSpan(this.usernameNotValid)).hide().fadeIn(500);
        		   }
        		   else if(role === 'email'){
        			   $(element).parent().next().html(this.erroSpan(this.emailNotValid)).hide().fadeIn(500);
        		   }
        		   else if(role === 'bio'){
        			   $(element).parent().next().html(this.erroSpan(this.bioNotValid)).hide().fadeIn(500);
        		   }
   
        	   }
           }
           else {
        	    var rid = $(element).parent().next().attr('role');
        	    if(rid === 'sett-err') $(element).parent().next().remove();
           }
       	
    }
    else {
       	log('element cant be edited');
       	$(element).removeAttr('id').attr('id',updateId);
       	var previousVal =	$(element).prev().html();
           $(element).prev().remove();
           if(role === 'bio'){
        	   $(element).before("<textarea  > </textarea>")
           }
           else {  $(element).before("<input type='text' />");}
           $(element).prev().val(previousVal).hide().fadeIn(500);
           $(element).addClass('fa-arrow-circle-right').removeClass('fa-pencil');
        }
  
}

setting.processEdit= function(){
	$('i.prof-edit').on('click',function(){
		log('inside setting edit');
		var role = $(this).attr('role');
		
		
		switch (role) {
		case 'username':
			    setting.editUpdate(role,this);
			    log($(this).prev().html());
			break;
		case 'name':
		    setting.editUpdate(role,this);
		    log($(this).prev().html());
		break;	
		case 'email':
		    setting.editUpdate(role,this);
		    log($(this).prev().html());
		break;
		case 'bio':
		    setting.editUpdate(role,this);
		    log($(this).prev().html());
		break;

		}
		
	});
	
}




setting.buildSettings= function(){
	
	if(Auth.isLoggedIn()){
		this.init();
		userheader.processHeader(this.user);
		this.processEdit();
	}
	
}


$(setting.buildSettings());