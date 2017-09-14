<template>
	<div id='helpcenter'>
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
	import tabVertical from '../../components/tabs/tab_vertical.vue';
	import store from "store";
	
	export default {
		components: {tabVertical},
		name: 'helpcenter',
		beforeRouteEnter (to, from, next) {
			var routerUrl=to.path.toString();
			console.log(routerUrl)
			store.commit('setCurrentTabName',routerUrl);
			next(vm=>{
				vm.init(routerUrl)
			});
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
               		{tab_controlName:'在线客服',tab_contentRouter:'/helpcenter/online'},
               		{tab_controlName:'意见反馈',tab_contentRouter:'/helpcenter/advice'},
               		{tab_controlName:'帮助中心',tab_contentRouter:'/helpcenter/center'},
               ]	
            }
	    },
	    mounted:function(){},
        methods:{
        	init:function(_routerUrl){
        		if(_routerUrl=='/helpcenter'){
        			store.commit('setCurrentTabName',_routerUrl);
        		}else if(_routerUrl=='/helpcenter/online'){
	    			store.commit('setCurrentTabName',_routerUrl);	    			
	    		}else if(_routerUrl=='/helpcenter/advice'){	    			
	    			store.commit('setCurrentTabName',_routerUrl);	    		
	    		}else if(_routerUrl=='/helpcenter/center'){	    			
	    			store.commit('setCurrentTabName',_routerUrl);
	    		};
        	}
        }
            
	}
</script>

<style>
</style>