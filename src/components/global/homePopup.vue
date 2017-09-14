<template>
	<div class="homePopup" id='homePopup'>
		<component v-bind:is="component_a" v-on:alert_emit="alert_emit" :alert_options='alert_options'></component> 
		<div class='suateam_container_frame homePopupModal'>
			<span class='close-mask' @click="wantShow()">×</span>
			<div class='homePopupModal_freme'>
				<p v-if="currCase==4" class="home-decription">
					在用户授权的情况下，使用专业的漏扫工具，涵盖自主研发的扫描器以及Acunetix，Appscan，Microsoft MBSA，Nessus，Burpsuite，Sqlmap等多种工具，同时由经验丰富的安全专家予以实施分析，检测出信息系统的高、中危的安全漏洞，准确识别OWASP Top10 安全风险，保证网络对最新CVE漏洞的防御能力，并向用户提供漏洞检测报告。	
				</p>
				<p v-if="currCase==2" class="home-decription">
					网站监测预警是集事前监控预防、事中响应预警的网站监测预警系统，为客户提供针对门户网站的信息安全服务。具有及时性、易用性、可视化特点。及时性：在不影响网站性能情况下7X24小时实时对网站进行实时监测，发现问题第一时间报警,如弹出框、邮件、短信、声音等。易用性：实现10分钟内快速部署，快速掌握。可视化：为管理层提供一个易了解、方便参观的展示平台，使信息中心网站管理工作做到一目了然。
				</p>
				<p v-if="currCase==3" class="home-decription">
					差距分析自测简介（初版）：差距分析自测旨在协助用户自行检测目前所用信息系统与国家信息系统保护准则之间的差距，是根据国家信息系统等级保护标准，专为等级保护项目的建设过程提供工具和知识支持的服务。其中包括定级、备案、差距分析自测、整改建设、监督检查和知识库等几大功能模块，提供信息资产管理、自动生成自测报告和数据汇总分析支撑。
				</p>
				<p class="reviewResult">{{reviewResult}}</p>
				<div class ='reviewResult_frame' v-if="currCase=='03'&&uniqueGapAnalysisSelfTesUrl!==null">
					<a v-bind:href='uniqueGapAnalysisSelfTesUrl'>开始自测</a>
				</div>
				<form v-if="isShow" class="homeForm" onsubmit="return false;">
					<div class='suateam_input_frame'>
						<label>企业名称:</label>
						<input type="text" v-model='corpName' name='corpName' required data-msg-required="不能为空" />
					</div>
					<div class='suateam_input_frame'>
						<label>企业地址:</label>
						<input type="text" v-model='corpAddr' name='corpAddr' required data-msg-required="不能为空"/>
					</div>
					<div class='suateam_input_frame'>
						<label>联系人:</label>
						<input type="text" v-model='contact' name='contact' required data-msg-required="不能为空"/>
					</div>
					<div class='suateam_input_frame'>
						<label>联系人电话:</label>
						<input type="text" v-model='contactPhone' name='contactPhone' required data-rule-cellphone="true" data-msg-cellphone="请正确填写您的手机号码" data-msg-required="请输入联系电话" />
					</div>	
					<div class='suateam_input_frame'>
						<label>联系人邮箱:</label>
						<input type="text" v-model="email" name="email" placeholder="请输入email地址" required data-rule-email="true" data-msg-email="邮箱格式不正确" data-msg-required="请输入email地址"/>
					</div>
					<div class='suateam_input_frame' v-if="currCase=='03'">
						<label>需求测试系统数量:</label>
						<input type="text" v-model="systemnum" placeholder="请输入测试系统数量" required data-rule-digits="true" data-msg-digits="请输入测试系统数量" data-msg-required="请输入测试系统数量"/>
					</div>
					<div v-if="currCase==2||currCase==4" class='suateam_input_frame'>
						<label>域名:</label>
						<input type="text" v-model="domainIp" placeholder="如果没有域名请输入IP地址" required  data-msg-required="请输入域名或者IP地址" />				
					</div>
					<input type="hidden" name='imgUrl' v-model="imgUrl" />
					
					<div class="uploadImg">
						<div class='suateam_input_frame' style='position:relative;'>
							<label>营业执照副本:</label>
							<i class="file">
								选择文件<input style="width:100%;height:100%;" class="all_file" type="file" name="fileToUpload" id="file" multiple="multiple"/>
							</i>
							<div class='showFileName' v-if='imgStatus!==null'>{{imgStatus}}</div><div class="fileerrorTip"></div>
		
							<button class='upload' @click="upImg()" disabled='disabled'>我要上传</button>
							<span class='up-suc'>上传成功！</span>
						</div>
					</div>
					<input type="hidden" name='imgUrl' />
					<p v-if="currCase==4" class="home-decription">
						<i style="font-style:normal;color:#c00;margin-right:6px;">*</i>
						尊敬的用户，您好！赛鳌在获取您的授权后方可为您的信息系统进行远程漏洞扫描服务，请您点击下方链接下载授权协议模板，签字盖章后发送至赛鳌邮箱saiao@secoros.com。
我们会在收到邮件后第一时间进行确认，并在您协议内授权时间内为您服务。造成不便，敬请谅解！
					</p>
					<p class="getSchemeArea" style='text-align:center;padding-bottom:1rem;margin-top:2rem;'>
						<button class='homeSubmit-btn bluecolor ' v-if="currCase==4" @click="homeSubmit(4)">提交并下载</button>
						<button class='homeSubmit-btn bluecolor' @click="homeSubmit()" v-if="currCase!==4">提交</button>
					</p>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	var common_tools=require("common_tools");
	import Alert from '../../components/global/Alert'
	export default {
		components: {Alert},
		props: ['currCase'],
		mounted:function(){},
		data:function(){
			return {
				isShow:false,
				corpName: '',
				corpAddr: '',
				contact: '',
				contactPhone: '',
				email: '',
				imgUrl: '',
				domainIp: '',
				reviewResult:null,
				component_a:'',
				alert_options:['',''],	//['标题'，'内容']
				uniqueGapAnalysisSelfTesUrl:null,
				systemnum:null,
				alertStatus:0,
				imgStatus:null,
			}
		},
		mounted:function(){
			var _self=this;
			if(_self.$store.state.schemeTempObject!==null){
				console.log(_self.$store.state.schemeTempObject.retype);
				switch(_self.$store.state.schemeTempObject.retype){
					case 4:
	       				_self.corpName=_self.$store.state.schemeTempObject.corpName;
	       				_self.corpAddr=_self.$store.state.schemeTempObject.corpAddr;
	       				_self.contact=_self.$store.state.schemeTempObject.contact;
	       				_self.contactPhone=_self.$store.state.schemeTempObject.contactPhone;
						_self.email=_self.$store.state.schemeTempObject.email;
						_self.imgUrl=_self.$store.state.schemeTempObject.busiLicDup;
						_self.domainIp=_self.$store.state.schemeTempObject.domainIp;
						_self.currCase=_self.$store.state.schemeTempObject.type;
						_self.imgStatus='图片已上传成功';
					break;
					case 2:
						_self.corpName=_self.$store.state.schemeTempObject.corpName;
	       				_self.corpAddr=_self.$store.state.schemeTempObject.corpAddr;
	       				_self.contact=_self.$store.state.schemeTempObject.contact;
	       				_self.contactPhone=_self.$store.state.schemeTempObject.contactPhone;
						_self.email=_self.$store.state.schemeTempObject.email;
						_self.imgUrl=_self.$store.state.schemeTempObject.busiLicDup;
						_self.domainIp=_self.$store.state.schemeTempObject.domainIp;
						_self.currCase=_self.$store.state.schemeTempObject.type;
						_self.imgStatus='图片已上传成功';
					break;
					case 3:
						_self.corpName=_self.$store.state.schemeTempObject.corpName;
	       				_self.corpAddr=_self.$store.state.schemeTempObject.corpAddr;
	       				_self.contact=_self.$store.state.schemeTempObject.contact;
	       				_self.contactPhone=_self.$store.state.schemeTempObject.contactPhone;
						_self.email=_self.$store.state.schemeTempObject.email;
						_self.imgUrl=_self.$store.state.schemeTempObject.busiLicDup;
						_self.domainIp=_self.$store.state.schemeTempObject.domainIp;
						_self.currCase=_self.$store.state.schemeTempObject.type;
						_self.systemnum=_self.$store.state.schemeTempObject.numOfTestSystem;
						_self.imgStatus='图片已上传成功';
					break;
					
				};
			};
			require('../../public_resource/vendor/jquery.validate.min.js');
			$.validator.setDefaults({errorElement:'i'});
			if(this.$store.state.islogin==true){
				common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbMemberCorpInfo/queryLastMemberCorpInfo',{
					//判断是否填写过表单
	       			"condition": {"type":"0"+_self.currCase}
	       		},function(data){
	   				//success callback
	   				if(data.rspCode!=='100000'){
	   					console.log(data);
	   				}else if(data.rspCode=='100000'){
	   					if(data.data.lastMemberCorpInfo==null){
	   						//可以填写
	   						_self.isShow=true;
	   						_self.$nextTick(function () {
	   							$(".file").on("change","input[type='file']",function(){
								$(".showFileName").html('');
							    var files=$('#file')[0].files;
								for(var f=0;f<files.length;f++){
									if(files[f].name.indexOf("jpg")!=-1 || files[f].name.indexOf("png")!=-1 ||files[f].name.indexOf("jpeg")!=-1 ){
								        $('.upload').show();
			          					$('.up-suc').hide();
								       	$(".fileerrorTip").html("").hide();
								        var old=$(".showFileName").html();
//								        $(".showFileName").html(old+" "+files[f].name);
										_self.imgStatus='请点击我要上传按钮上传图片';
								        $('.upload').removeAttr('disabled');
									    }else{
									        $(".showFileName").html("");
									        $(".fileerrorTip").html("未上传文件或上传文件类型有误！").show().css({'color':'#c00','fontSize':'1.4rem'});
									        return false 
									    };
									};
								});	
	   						});
	   					}else if(data.data.lastMemberCorpInfo.auditStatus=='01'){
	   						_self.reviewResult='您的信息已经提交，正在审核中，请耐心等待！';
	   						if(_self.currCase=='03'){
	   							_self.uniqueGapAnalysisSelfTesUrl=data.data.lastMemberCorpInfo.uniqueGapAnalysisSelfTesUrl;
	   						}else if(_self.currCase=='04'){
	   							
	   						};
	   					}else if(data.data.lastMemberCorpInfo.auditStatus=='02'){
	   						_self.reviewResult='您的申请未通过审核：'+data.data.lastMemberCorpInfo.auditText;
	   						_self.isShow=true;
	   						_self.$nextTick(function(){
	   							$(".file").on("change","input[type='file']",function(){
								$(".showFileName").html('');
							    var files=$('#file')[0].files;
								for(var f=0;f<files.length;f++){
									if(files[f].name.indexOf("jpg")!=-1 || files[f].name.indexOf("png")!=-1 ||files[f].name.indexOf("jpeg")!=-1 ){
								        $('.upload').show();
			          					$('.up-suc').hide();
								        $(".fileerrorTip").html("").hide();
								        var old=$(".showFileName").html();
								        _self.imgStatus='请点击我要上传按钮上传图片';
								        $('.upload').removeAttr('disabled');
									    }else{
									        $(".showFileName").html("");
									        $(".fileerrorTip").html("未上传文件或上传文件类型有误！").show().css({'color':'#c00','fontSize':'1.4rem'});
									        return false 
									    };
									};
								})	
	   						});
	   					}else if(data.data.lastMemberCorpInfo.auditStatus=='03'){
	   						_self.reviewResult='您的审核已通过，请确保授权的签订并及时查看您的邮箱！';
	   						if(_self.currCase=='03'){
	   							
	   						}else if(_self.currCase=='04'){
	   							
	   						};
	   					};
	   					
	   				};
	   			},function(data){
	   				//error callback
	   				console.log(data);
	       		});
			}else{
				_self.isShow=true;
				_self.$nextTick(function () {
					$(".file").on("change","input[type='file']",function(){
					$(".showFileName").html('');
				    var files=$('#file')[0].files;
					for(var f=0;f<files.length;f++){
						if(files[f].name.indexOf("jpg")!=-1 || files[f].name.indexOf("png")!=-1 ||files[f].name.indexOf("jpeg")!=-1 ){
					        $('.upload').show();
          					$('.up-suc').hide();
					       	$(".fileerrorTip").html("").hide();
					        var old=$(".showFileName").html();
					       _self.imgStatus='请点击我要上传按钮上传图片';
					        $('.upload').removeAttr('disabled');
						    }else{
						        $(".showFileName").html("");
						        $(".fileerrorTip").html("未上传文件或上传文件类型有误！").show().css({'color':'#c00','fontSize':'1.4rem'});
						        return false 
						    };
						};
					});	
				});
			};	
		},
		methods:{
			wantShow(){
				this.$emit('closeModal','false');
			},
			//上传图片
			upImg:function () { 
				var _self=this;
			    var formData = new FormData();
		    	var files=$('#file')[0].files;
				for(var n=0;n<files.length;n++){
					formData.append('file', files[n]);
				};
				$.ajax({
				    url: common_tools.interfaceurl+'common/filesUpload',
				    type: 'POST',
				    cache: false,
				    data: formData,
				    processData: false,
				    contentType: false
				}).done(function(returndata) {
					if(returndata.rspCode=='100000'){
		          		console.log(returndata)
		          		_self.imgUrl=returndata.data.imgUrl;
		          		$('.upload').hide();
		          		$('.up-suc').show();
		          	}else{
		          		console.log('error');
		          	}
				}).fail(function(returndata) {
					 console.log('上传失败');
				});
			},
			Alert:function(_title,_content){
        		common_tools.Shade_on('homePopup');
        		this.alert_options=[_title,_content];
        		this.component_a=Alert;
        	},
        	alert_emit:function(_val){
        		common_tools.Shade_off();
        		this.component_a='';
        		if(this.alertStatus==1){
        			this.$router.push('/login');
        		};
        	},
			//提交信息
			homeSubmit:function(_val){
				var _self=this;
				var homePopupObj={};
				$('.homeForm').validate({
					submitHandler:function(){
						switch(_self.currCase){
							case 4:
							homePopupObj={
			       				"corpName": _self.corpName,
			       				"corpAddr": _self.corpAddr,
			       				"contact":_self.contact,
			       				"contactPhone": _self.contactPhone,
								"email": _self.email,
								"busiLicDup": _self.imgUrl,
								"domainIp":_self.domainIp,
								"type":"0"+_self.currCase
							};
							break;
							case 2:
							homePopupObj={
			       				"corpName": _self.corpName,
			       				"corpAddr": _self.corpAddr,
			       				"contact":_self.contact,
			       				"contactPhone": _self.contactPhone,
								"email": _self.email,
								"busiLicDup": _self.imgUrl,
								"domainIp":_self.domainIp,
								"type":"0"+_self.currCase
							};
							break;
							case 3:
							homePopupObj={
			       				"corpName": _self.corpName,
			       				"corpAddr": _self.corpAddr,
			       				"contact":_self.contact,
			       				"contactPhone": _self.contactPhone,
								"email": _self.email,
								"busiLicDup": _self.imgUrl,
								"type":"0"+_self.currCase,
								"numOfTestSystem":_self.systemnum
							};
						};
						if(_self.$store.state.islogin==true){
							common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbMemberCorpInfo/addMemberCorpInfoNewAudit',{
				       			"condition": homePopupObj
				       		},function(data){
				   				//success callback
				   				if(data.rspCode!=='100000'){
				   					_self.Alert('提交',data.rspMsg);
				   				}else if(data.rspCode=='100000'){
				   					console.log(data);
				   					$('.homeSubmit-btn').hide();
				   					$('.getSchemeArea').html('提交成功！管理员会在授权约定时间前一周与您联系，请及时关注您的邮箱并保证所填联系电话畅通，感谢您的支持！').css('color','#ff0000')
				   					_self.$store.commit('clearSchemeTempObject');
				   					if(_val){
										window.location.href='http://125.39.58.36:8090/group1/M00/00/1E/fSc6JFlkmleAPtxsAABbNHuBUqg56.docx';
									};
				   				};
				   			},function(data){
				   				//error callback
				   				console.log(data);
				   				
				       		});
						}else{
							_self.alertStatus=1;
							var sendObj=Object.assign(homePopupObj,{'retype':_self.currCase});
							_self.$store.commit('setSchemeTempObject',homePopupObj);
							_self.Alert('提示','请先登录');
						};
					}
				});
				
				
//				
			},
		}
	}
</script>

<style>
.homePopup {
	position: absolute;
	top: 0;
	left: 0;
	width:100%;
	height:100%;
	z-index: 999999;
}
.home-decription{
	line-height: 1.8;
}
div.suateam_container_frame.homePopupModal{
	position: absolute;
	top: 50%;
	left: 50%;
	width: 700px;
	margin-left: -350px;
	margin-top: -200px ;
	height: 460px;
	overflow: hidden;
	background: #fff;
	border-radius: 5px;
	text-align: center;
	padding: 4px 0;
	min-height: 0;
	z-index:9999;
}
.close-mask{
	position:absolute;
	top:16px;
	right:16px;
	width:20px;
	height:20px;
	text-align: center;
	line-height: 20px;
	border-radius:50%;
	border:1px solid #bbb;
	color:#999;
	font-size:16px;
	cursor:pointer;
	z-index: 999;
}
.homeForm div.suateam_input_frame label,.homeForm div.suateam_select_frame label{
	width:25%;
}
/*.homeForm div.suateam_input_frame input,.homeForm div.suateam_select_frame select{
	width:40%;
}*/
.home-decription{
	text-indent:2em;
	text-align:justify;
	font-size:1.4rem;
	padding:0 60px;
	line-height:1.8rem;
}
.uploadImg .up-suc{
	display:none;
	position: absolute;
	left: 62%;
	top: 7px;
	color:#1E88C7;
}
.file {
    position: relative;
    float:left;
    font-style:normal;
    display: inline-block;
    background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
}
.file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
}
.file:hover {
    background: #AADFFD;
    border-color: #78C3F3;
    color: #004974;
    text-decoration: none;
}
.showFileName{
	position:absolute;
	left:31%;
	top:47px;
}
.fileerrorTip{
	position:absolute;
	left:31%;
	top:47px;
}
div.suateam_input_frame button.upload{
	float:left;
	background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
    display:inline-block ;
    margin-bottom:18px;
    margin-left:22%;
}
p.reviewResult{
	color:#c00;
}
div.homePopupModal_freme{
	height: 400px;
	overflow-x: hidden;
	overflow-y:scroll;
	margin-top: 50px;
}
div.homePopup div.suateam_alert{
    z-index: 9999999;
}
</style>