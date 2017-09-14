<template>
	<footer id='footer'>
		<div class='suateam_footerframe'>
			<div class='suateam_footercontent'>
				<div class='contactus suateam_fl'>
					<div class='content_title suateam_fl'>
						<img class='suateam_fl' v-bind:src='line'>
						<span class='title suateam_fl'>联系我们</span>
					</div>
					<span>电话：<font>400-622-0199</font></span>
					<span>邮箱：<font>sec@secoros.com</font></span>
					<span>地址：<font>天津市和平区拉萨道16号和平区电子商务大厦8层</font></span>
				</div>
				<div class='chat suateam_fl'>
					<div class='imgcontent'>
						<img class='suateam_fl' v-bind:src='chat'>
					</div>
				</div>
				<div class='link suateam_fl'>
					<div class='content_title suateam_fl'>
						<img class='suateam_fl' v-bind:src='friends'>
						<span class='title suateam_fl'>友情链接</span>
					</div>
					<div class='linkcontent'>
						<span v-for='items in linkArray'>
							<a v-bind:href='items.link'>
								<font v-if='items.img==null'>{{items.name}}</font>
								<img v-bind:src='items.img' v-if='items.img!==null' style="height: 20px;float: left;">
							</a>
						</span>
						<span><a href="https://www.easyaq.com/">
							<font><font style="color:#b01f24;">E-</font>安全</font>
							</a>
						</span>
					</div>
				</div>
				<div class='erweicode suateam_fl'>
					<div class='imgcontent'>
						<img class='suateam_fl' v-bind:src='erweicoder' style="width: 100px;height: 100px;">
					</div>
				</div>
			</div>
		</div>
		<div class='suateam_copyright'>
			<p class='suateam_fl'>CopyRight© Secoros 2017&nbsp;&nbsp;<font>津ICP备17006046号</font></p>
		</div>
	</footer>
    
</template>
<script>
    module.exports = {
    	//components configs
    	name:'footer',
        data: function () {
            return {
                linkArray: [
	                {link:'http://www.suateam.com/',name:'圣目官网',img:null}
//	                
	                
                ],
                line:require('../../public_resource/img/ico/line.png'),
                friends:require('../../public_resource/img/ico/friends.png'),
                chat:require('../../public_resource/img/ico/chat.png'),
                erweicoder:require('../../public_resource/img/ico/code.jpg')
            }
        },
        methods:{
        	
        }
    }
</script>
<style>
div.suateam_footerframe{
	box-sizing: border-box;
	margin: 0 auto;
	display: table;
	/*min-height: 250px;*/
	width: 100%;
	color: #818181;
	font-size: 1.4rem;
	background-color: #f5f5f5;
}
div.link{
	width: 40%;
}
div.contactus{
	width: 19%;
}
div.chat{
	width: 16%;
	min-height: 140px;
}
div.erweicode{
	width: 14%;
	min-height: 140px;
}
div.suateam_copyright{
	background-color: #ccc;
	min-height: 60px;
}
div.suateam_copyright p{
	text-align: center;
	width: 100%;
	margin: 0;
	line-height: 60px;
	color: #818181;
}
div.suateam_footercontent{
	margin: 20px auto;
	width: 1200px;
}
div.suateam_footercontent:after{
	display: table;
	content: '';
	clear: both;
}
div.suateam_footercontent span{
	display: block;
	line-height: 2.0;
}
div.contactus,div.link{
	margin-left: 66px;
}
div.content_title{
	display: block;
	width: 100%;
	margin-bottom: 20px;
}
div.content_title img{
	margin-left: -66px;
	position: relative;
	width: 36px;
	height:36px;
}
div.content_title span.title{
	font-size: 1.6rem;
	line-height: 36px;
}
div.linkcontent span{
	width: 33.3%;
	float: left;
}
div.linkcontent span a{
	color: #818181;
}
div.linkcontent span a:hover{
	color: #818181;
	text-decoration: underline;
}
div.imgcontent{
	margin: 30px auto;
	display: table;
}

</style>