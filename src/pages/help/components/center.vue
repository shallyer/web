<template>
	<div id='center'>	
		<tabHorizontal :tabControlArray="tabControlArray"></tabHorizontal>
	</div>

</template>

<script>
	import tabHorizontal from '../../../components/tabs/tab_horizontal'
	module.exports = {
    	//components configs
    	components: {tabHorizontal},
    	name:'center',
        data: function () {
            return {
              	tabControlArray:[
              		{tab_controlName:'',tab_contentRouter:'/helpcenter/center/1-1',bg:''},
            
              	]
            }
        },
        mounted:function(){
        	this.$router.push('/helpcenter/center/1-1');
        },
        methods:{
        	
        }
    }
</script>

<style>
</style>