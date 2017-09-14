//application entry
import "babel-polyfill";
import Vue from "vue";
import store from "store";
import App from './pages/app/app';
import Router from "./public_resource/router_configs/router";

new Vue({
    el: '#app',
    store,
    router: Router,
    render: h => h(App),
    mounted:function(){
    	var ishasusername = sessionStorage.getItem("username"); 
    	var ishasuserid = sessionStorage.getItem("userid"); 
    	var loginstate={
    		username:ishasusername,
    		id:ishasuserid
    	};
    	if(typeof(ishasusername) ==='string'||typeof(ishasuserid)==='string'){
    		store.commit('userislogin',loginstate);
    	};
    	
    }
})
