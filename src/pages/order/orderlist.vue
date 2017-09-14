<template>
	 <div id="orderlist">
    	<section>
	    	<div class='section suateam_banner' v-bind:style="{backgroundImage:banner}" :class='{suateam_banner_hasbanner:banner!=null}'>
	    	</div>
    	</section>
    	<section>
    		<div class='suateam suateam_container_frame'>
    			<label class='table_label'>我的订单</label>
    			<Orderlist></Orderlist>
    		</div>
    	</section>
    	
	 	
	 </div>
</template>
<script>
	import Orderlist from '../../components/order/orderlist'
	export default {
		components: {Orderlist},
		name: 'orderlist',
		data: function () {
            return {
              banner:null
            }
       }
	}
</script>
<style>
	
</style>