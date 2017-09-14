<template>
	 <div id='notfound'>
    	<section>
	    	<div class='section suateam_banner' v-bind:style="{backgroundImage:banner}" :class='{suateam_banner_hasbanner:banner!=null}'>
	    	</div>
    	</section>
    	<section>
    		<div class='section suateam_banner'>
	    		<img v-bind:src='notfound'>	
	    	</div>
    	</section>
    	
	 </div>
</template>
<script>
	
	export default {
		name: 'notfound',
		data: function () {
            return {
            	banner:null,
		notfound:require('./banner.jpg')
            }
       }
	}
</script>
<style>
	
</style>