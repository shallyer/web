<template>
	<div id='online'>
		<div class='online_frame'>
			<ul class='online_ul'>
				<li class='online_li a'>
					<div class='online_li_bg '></div>
					<p class='title'>安全方案</p>
				</li>
				<li class='online_li b' >
					<div class='online_li_bg'></div>
					<p class='title'>购物帮助</p>
				</li>
				<li class='online_li c' >
					<div class='online_li_bg'></div>
					<p class='title'>租赁帮助</p>
				</li>
				<li class='online_li d' >
					<div class='online_li_bg'></div>
					<p class='title'>咨询服务</p>
				</li>
				<li class='online_li e' >
					<div class='online_li_bg'></div>
					<p class='title'>全息服务</p>
				</li>
				<li class='online_li f' >
					<div class='online_li_bg'></div>
					<p class='title'>合作加盟</p>
				</li>
			</ul>
		</div>
	</div>

</template>

<script>
	module.exports = {
    	//components configs
    	name:'online',
        data: function () {
            return {
              	
            }
        },
        methods:{
        	sendinfo:function(){
        		alert("功能模块，尽情期待");
        	}
        }
    }
</script>

<style>
div.online_frame li.online_li{
	float:left;
	width: 20%;
	margin: 20px 6%;
	border: 1px #ddd solid;
	box-sizing: border-box;
	padding: 20px;
	transition: all ease-in-out .5s .5s; 
	cursor: pointer; 
}
div.online_frame li.online_li.a div.online_li_bg{
	background-image: url(../../../public_resource/img/ico/safe_before.png);
}
div.online_frame li.online_li.a:hover div.online_li_bg{
	background-image: url(../../../public_resource/img/ico/safe_after.png);
}
div.online_frame li.online_li.b div.online_li_bg{
	background-image: url(../../../public_resource/img/ico/shop_before.png);
}
div.online_frame li.online_li.b:hover div.online_li_bg{
	background-image: url(../../../public_resource/img/ico/shop_after.png);
}
div.online_frame li.online_li.c div.online_li_bg{
	background-image: url(../../../public_resource/img/ico/zu_before.png);
}
div.online_frame li.online_li.c:hover div.online_li_bg{
	background-image: url(../../../public_resource/img/ico/zu_after.png);
}
div.online_frame li.online_li.d div.online_li_bg{
	background-image: url(../../../public_resource/img/ico/zixun_before.png);
}
div.online_frame li.online_li.d:hover div.online_li_bg{
	background-image: url(../../../public_resource/img/ico/zixun_after.png);
}
div.online_frame li.online_li.e div.online_li_bg{
	background-image: url(../../../public_resource/img/ico/quanxi_before.png);
}
div.online_frame li.online_li.e:hover div.online_li_bg{
	background-image: url(../../../public_resource/img/ico/quanxi_after.png);
}
div.online_frame li.online_li.f div.online_li_bg{
	background-image: url(../../../public_resource/img/ico/cooperation_before.png);
}
div.online_frame li.online_li.f:hover div.online_li_bg{
	background-image: url(../../../public_resource/img/ico/cooperation_after.png);
}
div.online_frame li.online_li p.title{
	text-align: center;
}
div.online_frame li.online_li div.online_li_bg{
	width: 120px;
	margin: 0 auto 10px auto;
	display: table;
	height: 120px;
	background-size: 100% 100%;
}
div.online_frame li.online_li button{
	margin: 0 auto;
	display: table;
}
</style>