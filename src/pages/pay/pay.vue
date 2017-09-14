<template>
	 <div id="orderlist">
    	<section>
	    	<div class='section suateam_banner' v-bind:style="{backgroundImage:banner}" :class='{suateam_banner_hasbanner:banner!=null}'>
	    	</div>
    	</section>
    	<section>
    		<div class='suateam suateam_container_frame successfulPay' v-if='payStatus==true'>
    			<!--<p style="text-align: center;">appid：{{appid}}</p>
    			<p style="text-align: center;">order_no：{{order_no}}</p>
    			<p style="text-align: center;">order_amount：{{order_amount}}</p>
    			<p style="text-align: center;">order_time：{{order_time}}</p>
    			<p style="text-align: center;">pay_time：{{pay_time}}</p>
    			<p style="text-align: center;">sno：{{sno}}</p>
    			<p style="text-align: center;">smac：{{smac}}</p>-->
    			<div class='payStatusImg'>
    				<img v-bind:src='payStatusImgSuccessful'>
    			</div>
    			<div class='payStatusInfo'>
    				<p class='payStatusInfo_title'>恭喜您，成功支付</p>
    				<p class='payStatusInfo_items'>订单编号：{{appid}}</p>
    				<p class='payStatusInfo_items'>您已成功支付：{{order_amount}}元</p>
    				<p class='payStatusInfo_items'><router-link to='/orderlist'><font style="font-size: 1.4rem;">返回订单管理</font></router-link></p>
    			</div>
    		</div>
    		<div class='suateam suateam_container_frame errorPay' v-if='payStatus==false'>
    			<div class='payStatusImg'>
    				<img v-bind:src='payStatusImgError'>
    			</div>
    			<div class='payStatusInfo'>
    				<p class='payStatusInfo_title'>对不起，您的订单出现问题</p>
    				<!--<p class='payStatusInfo_items'>订单编号：{{order_no}}</p>
    				<p class='payStatusInfo_items'>您已成功支付：{{order_amount}} &nbsp;&nbsp;元</p>-->
    				<p class='payStatusInfo_items'><router-link to='/orderlist'><font style="font-size: 1.4rem;">返回订单管理</font></router-link></p>
    			</div>
    		</div>
    	</section>
    	
	 	
	 </div>
</template>
<script>
	export default {
		name: 'orderlist',
		data: function () {
            return {
              	banner:null,
              	appid:null,
              	order_no:null,
              	order_amount:null,
              	order_time:null,
              	pay_time:null,
              	sno:null,
              	mac:null,
              	payStatus:true,
              	payStatusImgSuccessful:require('./successful.png'),
              	payStatusImgError:require('./error.png')
            }
       	},
       	mounted:function(){
       		this.appid=this.getParam('appid');
       		this.order_no=this.getParam('order_no');
       		this.order_amount=this.getParam('order_amount');
       		this.order_time=this.getParam('order_time');
       		this.pay_time=this.getParam('pay_time');
       		this.sno=this.getParam('sno');
       		this.mac=this.getParam('mac');
       		if(this.appid!==null&&this.order_no!==null&&this.order_amount!==null&&this.order_time!==null&&this.pay_time!==null){
       			this.payStatus=true;
       		}else{
       			this.payStatus=false;
       		}
       		
       	},
       	methods:{
       		getParam(name){
       			var reg = new RegExp("([^&]*)" + name + "=([^&]*)(&|$)", "i");
				var r = window.location.hash.match(reg);
				if (r !== null){
					return unescape(r[2]);
				};
				return null;
       		}
       		
       	}
	}
</script>
<style>
	div.successfulPay{
		background: url(./successful_bg.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		padding: 20px;
		box-sizing: border-box;
	}
	div.errorPay{
		background: url(./error_bg.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		padding: 20px;
		box-sizing: border-box;
	}
	div.payStatusImg{
		float: left;
	}
	div.payStatusInfo{
		float: left;
		margin-top: 80px;
	}
	div.payStatusInfo p.payStatusInfo_title{
		color: #fff;
		font-size: 3.6rem;
		font-weight: 600;
		margin-bottom: 70px;
	}
	div.payStatusInfo p.payStatusInfo_items{
		color: #fff;
		font-size: 1.8rem;
		line-height: 18px;
	}
	div.payStatusInfo p.payStatusInfo_items a{
		color: #fff;
	}
</style>