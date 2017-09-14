<template>
	<div id='usercenter'>
	 	
    	<section>
	    	<div class='section suateam_banner' v-bind:style="{backgroundImage:banner}" :class='{suateam_banner_hasbanner:banner!=null}'>
	    	</div>
    	</section>
    	<section>
    		<div class='suateam suateam_container_frame'>
    			<div class='usercenter_content'>
    				<tabVertical :tabControlArray="tabControlArray"></tabVertical>
    			</div>
    		</div>
    	</section>
    </div>
</template>

<script>
	import tabVertical from '../../components/tabs/tab_vertical.vue'
	import store from "store"
	export default {
		components: {tabVertical},
		name: 'usercenter',
		beforeRouteEnter (to, from, next) {
			var routerUrl=to.path.toString();
			if(store.state.islogin==false){
				next({
              		path: '/login',
          	});
			}else{
				next(vm=>{
				vm.init(routerUrl)
			});
			};	
		},
		beforeRouteUpdate (to, from, next) {
			var routerUrl=to.path.toString();
			store.commit('setCurrentTabName',routerUrl);
			next();
		},
		data: function () {
            return {
            	banner:'url(' + require('./banner.jpg') + ')',
            	tabControlArray:[
               		{tab_controlName:'修改密码',tab_contentRouter:'/usercenter/change_password',index:0},
               		//{tab_controlName:'手机验证',tab_contentRouter:'/usercenter/phone_validate',index:1},
               		{tab_controlName:'专属方案',tab_contentRouter:'/usercenter/agent_message',index:2},
               		{tab_controlName:'账号管理',tab_contentRouter:'/usercenter/user_setting',index:3},
               		{tab_controlName:'地址管理',tab_contentRouter:'/usercenter/address_setting',index:4}
               ] 	
            }
       },
       mounted:function(){
    
       },
        methods:{
        	init:function(_routerUrl){
        		if(_routerUrl=='/usercenter'){
        			store.commit('setCurrentTabName',_routerUrl);       			
        		}else if(_routerUrl=='/usercenter/change_password'){
        			store.commit('setCurrentTabName',_routerUrl);        			
        		}else if(_routerUrl=='/usercenter/agent_message'){
        			store.commit('setCurrentTabName',_routerUrl);       			
        		}else if(_routerUrl=='/usercenter/user_setting'){
        			store.commit('setCurrentTabName',_routerUrl);        			
        		}else if(_routerUrl=='/usercenter/address_setting'){
        			store.commit('setCurrentTabName',_routerUrl);      			
        		};
        	}
        }
            
	}
</script>

<style>
</style>