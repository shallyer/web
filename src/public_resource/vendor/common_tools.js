/*  === common.js 全局变量===  */

/* ===通用变量===  */

var suateam_tools={
	//product
//	interfaceurl:'http://125.39.58.36:8080/b2b-web-front/',
//	authcodeimgurl:'http://125.39.58.36:8080/b2b-web-front/login2/pcrimg',
	//dev
	interfaceurl:'https://192.168.120.211/b2b-web-front/',
	authcodeimgurl:'https://192.168.120.211/b2b-web-front/login2/pcrimg',
	
	Shade_on:function(_containerID){
		var shade="<div class='suateam_shade'></div>";
		$('#'+_containerID).prepend(shade);
	},
	Shade_off:function(){
		$("div.suateam_shade").remove();
	},
	AJAX:function(_method,_url,_data,_success,_error){
		var _self =this;
		jQuery.support.cors = true;
		$.ajax({
	        type:_method ||'post',
	        url:_url,
	        xhrFields: {withCredentials: true},
	        dataType:'JSON',
	        contentType:"application/json",
	        data:JSON.stringify(_data),
	        success:_success,
	        error:_error
    	});
	},
	GetParam:function(){
		var url = window.location;
		var reg = /[^\/]*$/;
		var fileName = reg.exec(url)[0];
		return fileName;	
	}
}
module.exports = suateam_tools;