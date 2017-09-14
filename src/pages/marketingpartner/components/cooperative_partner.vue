<template>
	<div id='cooperative_partner'>
		<img v-bind:src='mp' style="margin: 0 auto; display: table;"/>
		
	</div>

</template>

<script>
	var common_tools=require("common_tools");
	module.exports = {
    	
    	name:'cooperative_partner',
        data: function () {
            return{
            	mp:require('./mp01.jpg'),
            }
        },
        methods:{
        	
        }
    }
</script>

<style>
</style>