/**
 *  settings of user
 */

var setting ={
		user : null,
		init : function(){
			this.user = util.getObjectFromSession('_user');
		}
		
		
};

setting.buildSettings= function(){
	
	if(Auth.isLoggedIn()){
		this.init();
		userheader.processHeader(this.user);
	}
	
}


$(setting.buildSettings());