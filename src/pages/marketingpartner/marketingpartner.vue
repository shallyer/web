<template>
	 <div id='marketingpartner'>
    	<section>
	    	<div class='section suateam_banner' v-bind:style="{backgroundImage:banner}" :class='{suateam_banner_hasbanner:banner!=null}'>
	    	</div>
    	</section>
    	<section>
    		
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
	import Customeservice from '../../components/customerService/customerService';
	import tabVertical from '../../components/tabs/tab_vertical.vue';
	export default {
		components: {Customeservice,tabVertical},
		name: 'marketingpartner',
		beforeRouteEnter (to, from, next) {
			next(vm=>{
				vm.init()
			});	
		},
		methods:{
        	init:function(){
        		$("li.tab_control_li").removeClass("active");
        		$("li.tab_control_li").eq(0).removeClass("default").addClass("active");
        		this.$router.push('/marketingpartner/cooperative_partner');
        	},
        },
		data: function () {
            return {
            	banner:'url(' + require('./banner.jpg') + ')',
            	tabControlArray:[
               		{tab_controlName:'合作伙伴',tab_contentRouter:'/marketingpartner/cooperative_partner'},
               		{tab_controlName:'产品合作',tab_contentRouter:'/marketingpartner/cooperative_product'},
               		{tab_controlName:'服务合作',tab_contentRouter:'/marketingpartner/cooperative_service'},
               		
               ]
              	
            }
       }
	}
</script>
<style>
	
</style>