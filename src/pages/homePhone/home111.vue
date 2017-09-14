<template>
	<div id="index">
		<component v-bind:is="component_h" v-on:closeModal="closeModal" :currCase='homepopup_options' ></component> 
		<component v-bind:is="component_a" v-on:alert_emit="alert_emit" :alert_options='alert_options'></component> 
		<div class="sections" id="section0">
			<div class="homeShow_index">
			</div>
			<div class="shade s1">
				<div class='suateam suateam_container_frame indexContent'>
					<div class="item-content1 item-content">
						<div @click="goToHomepopup(4)">
							远程漏洞扫描<br /><span class="english-name">Remote vulnerability scanning</span>
						</div>
					</div>
					<div class="item-content2 item-content">
						<div @click="goToHomepopup(2)">
							网站监测预警<br /><span class="english-name">Website monitoring alert</span>
						</div>
					</div>
					<div class="item-content3 item-content">
						<div @click="goToHomepopup(3)">
							差距分析自测<br /><span class="english-name">Gap analysis self tes</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="sections" id="section1">
			<div class='suateam suateam_container_frame'>
				<div>
					<div class="slide-title">{{slideList1.name}} </div>
					<div class="slide-titleEn">{{slideList1.englishName}}</div>
				</div>
				<p class="slide-text">{{slideList1.description}}</p>
				<div class="imgArea" v-for="item in slideList1Img">
					<img v-bind:src="item.imgUrl" width="282" height="201"/>
				</div>					
				<p class="ck-detail">
					<button @click="goToRoute('scheme');">查看详情</button>
				</p>
			</div>
		</div>
		    
		<div class="sections" id="section2">
			<div class='suateam suateam_container_frame'>
				<div>
					<div class="slide-title">{{slideList2.name}} </div>
					<div class="slide-titleEn">{{slideList2.englishName}}</div>
				</div>
				<p class="slide-text">{{slideList2.description}}</p>
				<div class='section2_container' v-for="item in slideList2Img">
					<div class="imgArea section2" >
						<img v-bind:src="item.imgUrl" />
					</div>
				</div>
				<p class="ck-detail">
						<button @click="goToRoute('goods-lease');">查看详情</button>
					</p>
			</div>
		</div>
		<div class="sections" id="section3">
			<div class='suateam suateam_container_frame'>
				<div>
					<div class="slide-title">专属资讯</div>
					<div class="slide-titleEn">Proprietary information</div>
				</div>
				<div style="margin:60px 0;">
					<div class='section3_container' v-for='items in section3Array'>
						<div class="imgArea section3">
							<img v-bind:src="items.img"/>
						</div>
						<div style="float: left; width: 100%;">
							<h3>{{items.title}}</h3>
							<div class="proInfo" v-html='items.info'></div>
						</div>
					</div>
					<p class="ck-detail">
						<button @click="goToRoute('safecommunity');">查看详情</button>
					</p>
				</div>
			</div>
		</div>
		<div class="sections" id="section4">
			<div class='suateam suateam_container_frame' style="height:100%">
				<div>
					<div class="slide-title">服务客户</div>
					<div class="slide-titleEn">To serve our customers</div>
				</div>
				<div class='customer_service_list'>
					<ul class="clearfix" style="width:100%;">
						<li v-for="items in customeServiceList">
							<div style="display: table; margin: 0 auto;width:100%;">
								<img v-bind:src='items.img'>
								<span>{{items.name}}</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	var common_tools = require("common_tools");
	import HomePopup from '../../components/global/homePopup';
	import Alert from '../../components/global/alert';
	export default {
		components: {Alert,HomePopup},
		name: 'index',
		data: function() {
			return {
				banner: null,
				slideList1: '',
				slideList2: '',
				slideList1Img: [],
				slideList2Img: [],
				section3Array:[{
					img:require('./homeImg/pic_1.png'),
					title:'私人定制',
					info:'全年订阅仅499元<br />每周行业精品全掌握<br />安全最全面'
				},{
					img:require('./homeImg/pic_2.png'),
					title:'私人定制',
					info:'全年订阅仅499元<br />每周行业精品全掌握<br />安全最全面'
				},{
					img:require('./homeImg/pic_3.png'),
					title:'私人定制',
					info:'全年订阅仅499元<br />每周行业精品全掌握<br />安全最全面'
				}],
				customeServiceList:[],
				currCase:null,
				component_a:'',
				alert_options:['',''],	//['标题'，'内容']
				component_h:'',
				homepopup_options:{}
			}
		},
		mounted(){
			var _self = this;
			common_tools.AJAX('POST', common_tools.interfaceurl + 'suateamEbFreeservers/listSuateamEbFreeservers',{
			},function(data) {
				if(data.rspCode == '100000') {
					_self.slideList1 = {
						name: data.data.resultSet.slide1[0].name,
						img: data.data.resultSet.slide1[0].img,
						englishName: data.data.resultSet.slide1[0].englishName,
						description: data.data.resultSet.slide1[0].description,
					}
					var imgList01 = _self.slideList1.img.split(',');
					for(var a = 0; a < imgList01.length; a++) {
						_self.slideList1Img.push({imgUrl: imgList01[a]});
					};
					_self.slideList2 = {
						name: data.data.resultSet.slide2[0].name,
						img: data.data.resultSet.slide2[0].img,
						englishName: data.data.resultSet.slide2[0].englishName,
						description: data.data.resultSet.slide2[0].description,
					}
					var imgList02 = _self.slideList2.img.split(',');
					for(var b=0; b<imgList02.length; b++){
						_self.slideList2Img.push({imgUrl: imgList02[b]});
					};

				}else if(data.rspCode!=='100000') {
					console.log(data);
				}
			}, function(data) {
				console.log(data);
			});
			common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbPartner/listSuateamEbPartner',{
       		},function(data){
   				//success callback
   				if(data.rspCode!=='100000'){
   					console.log(data);
   				}else if(data.rspCode=='100000'){
   					_self.customeServiceList=data.data.resultSet;
   					console.log(data)
   				};
   			},function(data){
   				//error callback
   				console.log(data);		
       		});
		},
		methods:{
			Alert:function(_title,_content){
        		common_tools.Shade_on('index');
        		this.alert_options=[_title,_content];
        		this.component_a=Alert;
        	},
        	alert_emit:function(_val){
        		common_tools.Shade_off();
        		this.component_a='';
        		this.$router.push('/login');
        	},
        	goToRoute:function(toRoute){
				console.log(toRoute)
				this.$router.push('/'+toRoute)
			},
//			goToHomepopup:function(homeIndex){
//				if(this.$store.state.islogin==true){
//					this.component_h=HomePopup;
//					this.homepopup_options=homeIndex;
//				}else{
//					this.Alert('提示',"请先登录");
//				};
//			},
			closeModal:function(arg){
				this.component_h='';
				$.fn.fullpage.setAllowScrolling(true);
			}			
		}
	}
</script>
<style>
.homeShow_index {
	width: 100%;
	overflow: hidden;
	background: #000;
	z-index:-1;
	min-width: 1200px;
	background-image: url(./homeImg/m_bg.jpg);
	background-size: 100% 100%;
	height: 100%;
	position: absolute;
}
.shade.s1 {
	width: 100%;
	min-width: 1200px;
	height: 100%;
	position: absolute;
	top: 0;
	background: url(./homeImg/page1_bak.png) no-repeat;
	filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
	-moz-background-size: 100% 100%;
	background-size: 100% 100%;
	z-index:2;
}
.indexContent {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 1200px !important;
	height: 460px;
	margin-top: -190px !important;
	margin-left: -600px !important;
}
.indexContent .item-content {
	float: left;
	width: 33.3%;
	min-height: 270px;
	text-align: center;
	color: #fff;
	cursor: pointer;
	margin-top: 70px;
}
.item-content>div {
	display: inline-block;
	padding-top: 220px;
	font-size:2rem;
}

.english-name {
	font-size: 1.8rem;
}
.index-description {
	font-size: 1.8rem;
	margin: 10px 0;
}
.item-content1 {
	background: url(./homeImg/1-2.png) no-repeat top center;
	background-size:180px;
}
.item-content1.active {
	background: url(./homeImg/1-1.png) no-repeat top center;
	background-size: 180px;
}
.item-content2 {
	background: url(./homeImg/2-2.png) no-repeat top center;
	background-size:180px;
}
.item-content2.active {
	background-size: 150px;
	background: url(./homeImg/2-1.png) no-repeat top center;
	background-size:180px;
}
.item-content3 {
	background: url(./homeImg/3-3.png) no-repeat top center;
	background-size:180px;
}
.item-content3.active {
	background: url(./homeImg/3-1.png) no-repeat top center;
	background-size:180px;
}
.swiper-slide {
	overflow: hidden;
}
.slide-title {
	text-align: center;
	padding-top: 40px;
	font-size: 2.8rem;
	font-weight: 600;
	color: #282828;
	letter-spacing: 4px;
}
.slide-titleEn {
	text-align: center;
	padding: 10px;
	font-size: 1.8rem;
	color: #828282;
}
.slide-text {
	font-size: 1.8rem;
	padding: 20px 120px 60px 120px;
	color: #828282;
	text-indent: 2em;
	line-height: 1.8;
	letter-spacing: 1px;
	text-align: justify;
}
div.imgArea {
	display: inline-block;
	text-align:center;
	box-sizing: border-box;
	width: 25%;
}
div..imgArea img {
	width: 282px;
	height: 201px;
	margin: 0 10px;
}
div.section3_container{
	float: left;
	width: 33.3%;
}
div.section2_container{
	float: left;
	width: 25%;
}
div.section3_container div h3{
	text-align: center;
	width: 100%;
	display: table;
	float: left;
	margin: 10px auto;
}
div.imgArea.section2 {
	width: 280px;
	height: 100px;
	margin: 0 auto;
	display: block;
}
div.imgArea.section2 img{
	width: 100%;
	display: block;
	height: 100%;
}
div.imgArea.section3 {
	width: 200px;
	height: 200px;
	margin: 0 auto;
	display: block;
}

div.imgArea.section3 img{
	width: 100%;
	display: block;
	height: 100%;
}
.proInfo{
	color:#828282;
	line-height:1.8;
	font-size:1.6rem;
	text-align: center;
}
p.ck-detail{
	padding:60px 0;
	text-align: center;
	float: left;
	width: 100%;
}
.ck-detail button{
	background-image:url(../../public_resource/img/ico/btn_bg.png);
	background-size: 100% 100%;
	padding:16px 30px;
	font-size:1.6rem;
	color: #fff;
	box-shadow: 0px 4px 16px #ccc;
	border: none;
}
div#section0{
	min-width: 1200px;
	position: relative;
}
div#section1{
	background:url(./homeImg/triangle.png) #fff no-repeat 76% 84%;
	min-width: 1200px;
}
div#section2{
	background:url(./homeImg/square.png) #eee no-repeat 20% 84%;
	min-width: 1200px;
}
div#section3{
	background:url(./homeImg/triangle.png) #fff no-repeat 76% 84%;
	min-width: 1200px;
}
div.customer_service_list{
	overflow: hidden;
}
div#index div.suateam_alert{
	top:15%
}
div.suateam_container_frame.homePopupModal{
	top:10% !important;
}
div.customer_service_list{
	width: 100%;
}
div.customer_service_list li{
	float: left;
	display: inline-block;
	width: 25%;
	box-sizing: border-box;
	min-height: 100px;
	margin: 8px 0;
}
	
div.customer_service_list li>div>span{
	display:inline-block;
	line-height: 100px;
}

div.customer_service_list li img{
	width: 100px;
	height: 100px;
	vertical-align: middle;
	margin-left:14%;
}
div.sections{
	min-height: 670px;
	display: block;
}
</style>