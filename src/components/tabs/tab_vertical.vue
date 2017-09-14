<template>
	<div class='tab tab_vertical'>
		<div class='tab_control tab_vertical'>
			<ul class='tab_vertical_ul'>
				<li class='tab_control_li tab_vertical_li default' v-for='items in tabControlArray'>
					<router-link v-bind:to='items.tab_contentRouter'><span v-on:click="changetabcontent($event)">{{items.tab_controlName}}</span></router-link>
				</li>
			</ul>
		</div>
		<div class='tab_content tab_vertical'>
			<router-view></router-view>	
		</div>
	</div>
</template>
<script>
	import store from "store"
	module.exports = {
    	//components configs
    	props:['tabControlArray'],
    	name:'tab_vertical',
        data: function () {
            return {
               
            }
        },
        computed: {
    		currentTabName() {
		      return this.$store.state.currentTabName;
		    }
		},
		watch:{
		  	currentTabName:function(){
		  		if(this.currentTabName=='/usercenter'){
		  			$("li.tab_control_li").removeClass("active");
    				$("li.tab_control_li").eq(0).removeClass("default").addClass("active");
	    		}else if(this.currentTabName=='/usercenter/change_password'){
	    			$("li.tab_control_li").removeClass("active");
	    			$("li.tab_control_li").eq(0).removeClass("default").addClass("active");
	    		}else if(this.currentTabName=='/usercenter/agent_message'){
	    			$("li.tab_control_li").removeClass("active");
	    			$("li.tab_control_li").eq(1).removeClass("default").addClass("active");
	    		}else if(this.currentTabName=='/usercenter/user_setting'){
	    			$("li.tab_control_li").removeClass("active");
	    			$("li.tab_control_li").eq(2).removeClass("default").addClass("active");
	    		}else if(this.currentTabName=='/usercenter/address_setting'){
	    			$("li.tab_control_li").removeClass("active");
	    			$("li.tab_control_li").eq(3).removeClass("default").addClass("active");
	    		}
	    		else if(this.currentTabName=='/helpcenter/online'){
	    			$("li.tab_control_li").removeClass("active");
	    			$("li.tab_control_li").eq(0).removeClass("default").addClass("active");
	    		}else if(this.currentTabName=='/helpcenter/advice'){
	    			$("li.tab_control_li").removeClass("active");
	    			$("li.tab_control_li").eq(1).removeClass("default").addClass("active");
	    		}else if(this.currentTabName=='/helpcenter/center'){
	    			$("li.tab_control_li").removeClass("active");
	    			$("li.tab_control_li").eq(2).removeClass("default").addClass("active");
	    		}
	    		else if(this.currentTabName=='/marketingpartner/cooperative_partner'){
	    			$("li.tab_control_li").removeClass("active");
	    			$("li.tab_control_li").eq(0).removeClass("default").addClass("active");
	    		}else if(this.currentTabName=='/marketingpartner/cooperative_product'){
	    			$("li.tab_control_li").removeClass("active");
	    			$("li.tab_control_li").eq(0).removeClass("default").addClass("active");
	    		}else if(this.currentTabName=='/marketingpartner/cooperative_service'){
	    			$("li.tab_control_li").removeClass("active");
	    			$("li.tab_control_li").eq(0).removeClass("default").addClass("active");
	    		};
		  	}
		 },
    	mounted:function(){
    		if(this.currentTabName=='/usercenter'){
	  			$("li.tab_control_li").removeClass("active");
				$("li.tab_control_li").eq(0).removeClass("default").addClass("active");
    		}else if(this.currentTabName=='/usercenter/change_password'){
    			$("li.tab_control_li").removeClass("active");
    			$("li.tab_control_li").eq(0).removeClass("default").addClass("active");
    		}else if(this.currentTabName=='/usercenter/agent_message'){	
    			$("li.tab_control_li").removeClass("active");
    			$("li.tab_control_li").eq(1).removeClass("default").addClass("active");
    		}else if(this.currentTabName=='/usercenter/user_setting'){
    			$("li.tab_control_li").removeClass("active");
    			$("li.tab_control_li").eq(2).removeClass("default").addClass("active");
    		}else if(this.currentTabName=='/usercenter/address_setting'){
    			$("li.tab_control_li").removeClass("active");
    			$("li.tab_control_li").eq(3).removeClass("default").addClass("active");
    		}
    		else if(this.currentTabName=='/helpcenter/online'){
    			$("li.tab_control_li").removeClass("active");
    			$("li.tab_control_li").eq(0).removeClass("default").addClass("active");
    		}else if(this.currentTabName=='/helpcenter/advice'){
    			$("li.tab_control_li").removeClass("active");
    			$("li.tab_control_li").eq(1).removeClass("default").addClass("active");
    		}else if(this.currentTabName=='/helpcenter/center'){
    			$("li.tab_control_li").removeClass("active");
    			$("li.tab_control_li").eq(2).removeClass("default").addClass("active");
    		}
    		else if(this.currentTabName=='/marketingpartner/cooperative_partner'){
    			$("li.tab_control_li").removeClass("active");
    			$("li.tab_control_li").eq(0).removeClass("default").addClass("active");
    		}else if(this.currentTabName=='/marketingpartner/cooperative_product'){
    			$("li.tab_control_li").removeClass("active");
    			$("li.tab_control_li").eq(0).removeClass("default").addClass("active");
    		}else if(this.currentTabName=='/marketingpartner/cooperative_service'){
    			$("li.tab_control_li").removeClass("active");
    			$("li.tab_control_li").eq(0).removeClass("default").addClass("active");
    		};
    		
    	},
        methods:{
        	changetabcontent:function(_thisdom,_index){
        		var thisdom = _thisdom.target;
        		$("li.tab_control_li").removeClass("active").addClass("default");
        		$(thisdom).parents("li.tab_control_li").removeClass("default").addClass("active");
        	}
        }
    }
</script>

<style>
	div.tab_control.tab_vertical{
		float: left;
		width: 15%;
		min-width: 150px;
	}
	div.tab_content.tab_vertical{
		float: left;
		width: 85%;
		border: 1px #ededed solid;
		box-sizing: border-box;
		border-radius: 5px;
		margin: 20px 0;
		min-height: 460px;
		padding: 20px;
	}
	div.tab_control li.tab_control_li.tab_vertical_li{
		width:80px;
		height: 30px;
		position: relative;
		display: block;
		float: left;
		padding:5px 10px;
		line-height: 30px;
		text-align: center;
		cursor: pointer;
		clear: both;
    	margin: 20px 0;
	}
	
	div.tab_control li.tab_control_li.tab_vertical_li span{
		-webkit-user-select: none;
		-moz-user-select: none;
	}
	div.tab_control li.tab_control_li.tab_vertical_li.default{
    	border: 1px #ededed solid;
    	color: #666;
	}
	div.tab_control li.tab_control_li.tab_vertical_li.active a{
		color: #fff;
		
	}
	div.tab_control li.tab_control_li.tab_vertical_li.active:before{
		position: absolute;
		content: '';
		border: 1px #16b0ff solid;
		width:80px;
		height: 30px;
		padding:5px 10px;
		top:-4px;
		left:-4px;
		z-index: 999;
	}
	div.tab_control li.tab_control_li.tab_vertical_li.active:after{
		background-color: #16b0ff;
		position: absolute;
		content: '';
		opacity: 0.7;
		width:80px;
		height: 30px;
		padding:5px 10px;
		top:4px;
		left:4px;
		z-index: -1;
	}
</style>