<template>
	<div class='tab tab_horizontal'>
		<div class='tab_control tab_horizontal helpcenter'>
			<ul class='tab_horizontal_ul'>
				<li class='tab_control_li tab_horizontal_li default' v-for='items in tabControlArray'>
					<router-link v-bind:to='items.tab_contentRouter'><span v-on:click="changetabcontent($event)">{{items.tab_controlName}}</span></router-link>
				</li>
			</ul>
		</div>
		<div class='tab_content tab_horizontal'>
			<router-view></router-view>	
		</div>
	</div>
</template>
<script>
	import store from "store"
	module.exports = {
    	//components configs
    	props:['tabControlArray'],
    	name:'tab_horizontal',
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
		  	
	 	},
    	mounted:function(){
    		
    		
    	},
        methods:{
        	changetabcontent:function(_thisdom,_index){
        		var thisdom = _thisdom.target;
        		$("li.tab_control_li").removeClass("active").addClass("default");
        		$(thisdom).parents("li.tab_control_li.tab_horizontal").removeClass("default").addClass("active");
        	}
        }
    }
</script>

<style>
div.tab_control.tab_horizontal{
	float: left;
	width: 100%;
	min-width: 150px;
	min-height: 30px;
	border:1px red solid;
}
div.helpcenter{
	background-image: url(../../pages/help/components/centerChild/images/nav1.jpg);
	background-size: 100% 100%;
	display: none;
	
}
div.tab_content.tab_horizontal{
	float: left;
	width: 100%;
	border: 1px #ededed solid;
	box-sizing: border-box;
	border-radius: 5px;
	min-height: 460px;
}
div.tab_control li.tab_control_li.tab_horizontal_li{
	width:182px;
	height: 30px;
	position: relative;
	display: block;
	float: left;
	line-height: 30px;
	text-align: center;
	cursor: pointer;
	margin: 0;
	clear: none;
	border: 1px red solid;
}
div.tab_control li.tab_control_li.tab_horizontal_li a{
	width:182px;
	height: 30px;
	display: block;
}

	
	
</style>