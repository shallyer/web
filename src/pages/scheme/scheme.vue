<template>
	<div id='scheme'>
		<component v-bind:is="component_a" v-on:alert_emit="alert_emit" :alert_options='alert_options'></component> 
		<component v-bind:is="component_d" v-on:dialog_emit="dialog_emit" :dialog_options='dialog_option'></component> 
		<section>
			<div class='section suateam_banner' v-bind:style="{backgroundImage:banner}" :class='{suateam_banner_hasbanner:banner!=null}'>
	    	</div>
		</section>
		<section class="section-scheme">
			<div class='suateam suateam_container_frame' style="background:none;">
				<img v-bind:src='contentImg' style='margin:20px 0; width: 1200px; display: table;'>
				<!--<div class='scheme_content'>
					<p class='title'>安全方案</p>
					<p class="content-introduce">
						随着信息化技术的飞速发展，企业通过依托先进的IT技术构建自身的业务和运营平台提升企业的核心竞争力，使企业在残酷的竞争环境中脱颖而出。随着业务的提升，网络规模也日益扩大、复杂，因此计算机网络和计算机应用系统的正常运行对网络安全提出了更高的要求。每一家企业间的网络信息系统无论是从业务内容、搭建机构、系统规模、日常流量等都存在巨大差异，而每一个细小的不同都将对网络安全提出不同的需求。赛鳌为更好的满足企业安全需求，特针对每个行业的不同企业情况，量身打造其专属的网络安全方案，帮助用户以最小的成本拥有最大化的安全防护效果！
					</p>
					<div class="scheme-item" v-for="(item,index) in schemeItems">
						<div class="scheme-left"><span>方案</span></div>
						<div class="scheme-name">{{item.title}}</div>
						<div class="scheme-text">{{item.description}}</div>
					</div>
				</div>-->
				<div class="get-scheme">
						<button @click='schemeWant()'></button>
					</div>
			</div>
		</section>
		<div class="scheme-mask" v-show='isActive'>
			<div class='suateam_container_frame'>
				<span class='close-mask' @click='isActive=!isActive'>×</span>
				<div class='scheme_frame'>
					<form id='myForm' onsubmit="return false;">
						<div class='suateam_input_frame'>
							<label>请输入以下信息:</label>
						</div>
						<div class='suateam_input_frame'>
							<label>企业名称:</label>
							<input type="text" v-model='corpName' name='corpName' required data-msg-required="不能为空" />
						</div>
						<div class='suateam_input_frame'>
							<label>统一社会信用代码:</label>
							<input type="text" v-model='socialCreditCode' name='socialCreditCode' required data-msg-required="不能为空" />
						</div>
						<div class='suateam_select_frame dynamic' v-for="item in dynamicList">
							<label>{{item.typename}}:</label>
							<!--<select v-bind:name='item.activeLabelName' class="choices">
								<option v-for="itemChild in item.suateamEbIndustryTypeList" v-bind:value="itemChild.id">{{itemChild.typename}}</option>
							</select>-->
							<span v-for="itemChild in item.suateamEbIndustryTypeList" class="choices">
								<input type="checkbox" v-bind:value="itemChild.id" v-if='item.isSingle==null' v-bind:id='itemChild.id' v-bind:name='item.id'>
								<input type="radio" v-bind:value="itemChild.id" v-if="item.isSingle=='Y'" v-bind:id='itemChild.id' v-bind:name='item.id'>
								<font>{{itemChild.typename}}</font>
							</span>
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
						<div id="uploadImg">
							<div class='suateam_input_frame' style='position:relative;'>
								<label style="width:25%;">营业执照副本:</label>
								<i class="file">
									选择文件<input style="width:100%;height:100%;" class="all_file" type="file" name="fileToUpload" id="file" multiple="multiple"/>
								</i>
								<div class='showFileName'></div><div class="fileerrorTip"></div>
		
		   						<button class='upload' @click="upImg()" disabled='disabled'>我要上传</button>
		   						<span class='up-suc'>上传成功！</span>
							</div>
						</div>
						<input type="hidden" name='imgUrl' v-model="imgUrl" />
						<button class='getScheme bluecolor' @click="schemeChoice()" style=" margin: 0 auto;display: table;float: none;">获取方案</button>
					</form>
				</div>
				
				
			</div>
		</div>
	</div>
</template>
<script>
	var common_tools = require("common_tools");
	
	import Alert from '../../components/global/Alert'
	import Dialog from '../../components/global/dialog'
	export default {
		components: {Alert,Dialog},
		name: 'scheme',
		data: function() {
			return {
				banner: 'url(' + require('./banner.jpg') + ')',
				contentImg:require('./content.jpg'),
				schemeItems: [],
				isActive: null,
				dynamicList: '',
				corpName: '',
				socialCreditCode: '',
				corpAddr: '',
				contactPhone: '',
				email: '',
				contact: '',
				imgUrl: '',
				selectList: {},
				isMultiple: '',
				dynamicFormValue:[],
				isLastMemberCorpInfo:null,
				auditStatus:'',
				auditText:null,
				component_d:'',
              	dialog_option:['',''],	//['标题'，'内容']
				component_a:'',
            	alert_options:['',''],	//['标题'，'内容']
              
			}
		},
		beforeRouteEnter (to, from, next) {
//			common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbSolutionAd/listSuateamEbSolutionAd',{
//			},function(data){
//				if(data.rspCode=='100000'){
//					var schemeContent=[];
//					for(var i=0;i<data.data.resultSet.length;i++){
//						var schemeItem={
//							title:data.data.resultSet[i].title,
//							description:data.data.resultSet[i].description
//						};
//						schemeContent.push(schemeItem);
//					}
//					next(vm=>{
//						vm.schemeItems=schemeContent;
//					});
//				}else if(data.rspCode=='999999'){
//					console.log(data);
//				}
//			},function(data){
//				console.log(data);
//			});
			next();
		},
		computed: {
    		islogin(){return this.$store.state.islogin;}
		},
		mounted:function(){
			require('../../public_resource/vendor/jquery.validate.min.js');
			$.validator.setDefaults({errorElement:'i'});
			//邮箱 
			$(".file").on("change","input[type='file']",function(){
				$(".showFileName").html('');
			    var files=$('#file')[0].files;
				for(var f=0;f<files.length;f++){
					if(files[f].name.indexOf("jpg")!=-1 || files[f].name.indexOf("png")!=-1 ||files[f].name.indexOf("jpeg")!=-1 ){
				        $('.upload').show();
			          	$('.up-suc').hide();
				        $(".fileerrorTip").html("").hide();
				        var old=$(".showFileName").html();
				        $(".showFileName").html(old+" "+files[f].name);
				        $('.upload').removeAttr('disabled');
				    }else{
				        $(".showFileName").html("");
				        $(".fileerrorTip").html("未上传文件或上传文件类型有误！").show().css({'color':'#c00','fontSize':'1.4rem'});
				        return false 
				    }
				}
			})
		},
		methods: {
			Dialog:function(_title,_content,_confirmBtnText,_cancelBtnText){
        		common_tools.Shade_on('scheme');
        		this.dialog_option=[_title,_content,{confirm:_confirmBtnText,cancel:_cancelBtnText}];
        		this.component_d=Dialog;
        	},
        	dialog_emit:function(_val){
        		common_tools.Shade_off();
        		this.component_d='';
        		if(_val==true){
        			this.$store.commit('setCurrentTabName','/usercenter/agent_message'); 
        			this.$router.push('/usercenter/agent_message/');
        		}else if(_val==false){
    
        		};
        	},
			Alert:function(_title,_content){
        		common_tools.Shade_on('scheme');
        		this.alert_options=[_title,_content];
        		this.component_a=Alert;
        	},
        	alert_emit:function(_val){
        		common_tools.Shade_off();
        		this.component_a='';
        		if(this.auditStatus=='02'){
        			this.isActive=true;
        		}else if(this.islogin==false){
        			this.$router.push('/login');
        		}
        	},
			//上传图片
			upImg:function () { 
				var _self=this;
			    var formData = new FormData();
		    	var files=$('#file')[0].files;
				for(var n=0;n<files.length;n++){
					formData.append('file', files[n]);
				}
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
			schemeWant:function(){
				var _self=this;
				common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbMemberCorpInfo/queryLastMemberCorpInfo',{
						"condition":{
							"type":'01'
						}
					},function(data){
		   				if(data.rspCode=='999999'){
		   					_self.Alert('提示',"请先登录");
		   					var tempSetNeedReturnThisPage={
									pageName:"scheme",
									parm:null
								};
							_self.$store.commit('setNeedReturnThisPage',tempSetNeedReturnThisPage); 
		   				}else if(data.rspCode=='100000'){
		   					if(data.data.lastMemberCorpInfo==null){
		   						//可填写
		   						_self.isLastMemberCorpInfo=true;
		   						if(_self.$store.state.islogin==true){
		   							_self.isActive=true;
									common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbIndustryType/queryPcrList',{
									"condition":{}
									},function(res){
						   				if(res.rspCode=='999999'){
						   					console.log(res);
						   				}else if(res.rspCode=='100000'){
						   					var dynamicListParent=[];
						   					_self.dynamicFormValue=[];
						   					for(var i=0;i<res.data.data.length;i++){
						   						var danamicListChild=[];
						   						var dynamicListSub=res.data.data[i].suateamEbIndustryTypeList;
						   						//获得动态表单valueArray
						   						for(var m=0;m<dynamicListSub.length;m++){
						   							danamicListChild.push({
						   								id:dynamicListSub[m].id,
						   								typename:dynamicListSub[m].typename
						   							});
						   						};
							            		var temp={[res.data.data[i].activeLabelName]:''};
							            		_self.dynamicFormValue=Object.assign(_self.dynamicFormValue,temp);
							            		
						   						dynamicListParent.push({
						   							activeLabelName:res.data.data[i].activeLabelName,
					   								typename:res.data.data[i].typename,
					   								id:res.data.data[i].id,
					   								isSingle:res.data.data[i].isSingle,
					   								suateamEbIndustryTypeList:danamicListChild,
					   							})
						   					};
						            		_self.dynamicList=dynamicListParent;
						            		console.log(_self.dynamicFormValue);
						   				};
						   				
						   			},function(res){
						   				//error callback
						   				console.log(res);
						       		});
		   						}else{
		   							_self.Alert('提示',"加载数据异常");
		   						};
		   					}else{
		   						//不可填写
		   						_self.isLastMemberCorpInfo=false;
		   						_self.auditStatus=data.data.lastMemberCorpInfo.auditStatus;
		   						_self.auditText=data.data.lastMemberCorpInfo.auditText;
		   						if(_self.auditStatus=='03'){
									_self.Dialog('审核状态','尊敬的会员您好！您提交的信息审核已通过，可至个人中心的专属方案频道进行下载查看。','立即查看','稍后查看');
								}else if(_self.auditStatus=='02'){
									common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbIndustryType/queryPcrList',{
									"condition":{}
									},function(res){
						   				if(res.rspCode=='999999'){
						   					console.log(res);
						   				}else if(res.rspCode=='100000'){
						   					var dynamicListParent=[];
						   					_self.dynamicFormValue=[];
						   					for(var i=0;i<res.data.data.length;i++){
						   						var danamicListChild=[];
						   						var dynamicListSub=res.data.data[i].suateamEbIndustryTypeList;
						   						//获得动态表单valueArray
						   						for(var m=0;m<dynamicListSub.length;m++){
						   							danamicListChild.push({
						   								id:dynamicListSub[m].id,
						   								typename:dynamicListSub[m].typename
						   							});
						   						};
							            		var temp={[res.data.data[i].activeLabelName]:res.data.data[i].id+','};
							            		_self.dynamicFormValue=Object.assign(_self.dynamicFormValue,temp);							            		
						   						dynamicListParent.push({
						   							activeLabelName:res.data.data[i].activeLabelName,
					   								typename:res.data.data[i].typename,
					   								id:res.data.data[i].id,
					   								isSingle:res.data.data[i].isSingle,
					   								suateamEbIndustryTypeList:danamicListChild,
					   							})
						   					};
						            		_self.dynamicList=dynamicListParent;
						   				};
						   				
						   			},function(res){
						   				//error callback
						   				console.log(res);
						       		});
									_self.Alert('审核状态',"未通过原因:"+_self.auditText);
								}else if(_self.auditStatus=='01'){
									_self.Alert('审核状态','审核中');
								};
		   					};
		   				};
		   				
		   			},function(data){
		   				console.log(data);
		       	});
				
			},
			//方案选择提交
			schemeChoice:function(){
				var _self=this;
				$('#myForm').validate({
					submitHandler:function(){
						var dateVal=$('#control_date').val();
						var schemeObj={
		       				"corpName": _self.corpName,
		       				"socialCreditCode": _self.socialCreditCode,
							"email": _self.email,
							"corpAddr": _self.corpAddr,
							"contactPhone": _self.contactPhone,
							"busiLicDup": _self.imgUrl,
							"contact":_self.contact
						};
						
						for(var t=0;t<_self.dynamicList.length;t++){
							var getDynamicFormID=_self.dynamicList[t].id;
							var thisFormDom=$("input[name="+getDynamicFormID+"]");
							if(_self.dynamicList[t].isSingle==null){
								console.log("isNoSingle");
								for(var a=0;a<thisFormDom.length;a++){
									var currentDom=thisFormDom.eq(a);
									if(currentDom.prop("checked")==true){
										_self.dynamicFormValue['activeLabelName'+t]=_self.dynamicFormValue['activeLabelName'+t]+currentDom.val()+',';
									};
									if(a==(thisFormDom.length-1)){
										_self.dynamicFormValue['activeLabelName'+t]=_self.dynamicFormValue['activeLabelName'+t].slice(0,-1);
										console.log(_self.dynamicFormValue);
									};
								};
							}else if(_self.dynamicList[t].isSingle=='Y'){
								console.log("isSingle");
								for(var a=0;a<thisFormDom.length;a++){
									var currentDom=thisFormDom.eq(a);
									if(currentDom.prop("checked")==true){
										_self.dynamicFormValue['activeLabelName'+t]=_self.dynamicFormValue['activeLabelName'+t]+currentDom.val()+',';
									};
									if(a==(thisFormDom.length-1)){
										_self.dynamicFormValue['activeLabelName'+t]=_self.dynamicFormValue['activeLabelName'+t].slice(0,-1);
										console.log(_self.dynamicFormValue);
									};
								};
							}
						};	
						
						schemeObj=Object.assign(schemeObj,_self.dynamicFormValue);	
						common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbMemberCorpInfo/addMemberCorpInfo',{
			       			"condition": schemeObj
			       		},function(data){
			   				//success callback
			   				if(data.rspCode!=='100000'){
			   					_self.Alert('提交',data.rspMsg);
								
			   				}else if(data.rspCode=='100000'){
			   					console.log(data);
			   					$('.getScheme').hide();
			   					$('.getSchemeArea').html('提交成功，管理员会在1-2个工作日内将方案发送到您的消息中，请及时查看！').css('color','#ff0000')
			   				};
			   			},function(data){
			   				//error callback
			   				console.log(data);
			   				
			       		});
					}
				})
			}
		}
	}
</script>
<style>
.section-scheme {
	/*background: url(bg.jpg) no-repeat right top;*/
}

div.scheme_content p.title {
	font-size: 3rem;
	color: #000;
	font-weight: 500;
	margin-bottom:20px;
}

.content-introduce {
	width: 90%;
	color: #282828;
	line-height: 1.8;
	margin-bottom: 3rem;
}

.scheme-left {
	position: absolute;
	left: 0;
	top: 0;
	width: 4%;
	text-align: center;
	height: 100%;
	color: #fff;
	background-image:linear-gradient(120deg,#ffb65f,#ff4b5f);
	background:#ccc
}

.scheme-left span {
	width: 10px;
	position: absolute;
	left: 46%;
	top: 50%;
	transform: translate(-50%, -50%);
}

.scheme-item {
	margin: 20px 0;
	padding: 10px 0 10px 7%;
	position: relative;
}

.scheme-name {
	font-size: 2rem;
}

.scheme-text {
	color: #818181;
	font-size: 1.6rem;
	text-align: justify;
	margin: 10px 0;
}

.get-scheme {
	text-align: center;
	margin: 3rem 0;
}

.get-scheme button {
	font-size: 2.2rem;
	color: #070c2a;
	width: 422px;
	height: 79px;
	background: #eee;
	text-align: center;
	background-image: url(./btn.jpg);
	background-size: 100% 100%;
}

.scheme-mask {
	position: fixed;
	top: 0;
	left: 0;
	width:100%;
	height:100%;
	overflow:hidden;
	background: rgba(0, 0, 0, .5);
	z-index: 999;
}

.scheme-mask .suateam_container_frame {
	position: fixed;
	width:700px;
	border-radius:5px;
	top: 50%;
	left: 50%;
	margin-top: -230px;
	margin-left: -350px;
	height: 460px;
	overflow: hidden;
	background: #fff;
}
.scheme-mask .suateam_input_frame{
	padding:5px;
	margin:5px 0;
}
.scheme-mask .suateam_input_frame input{
	box-sizing: border-box;
}
.scheme-mask .suateam_select_frame{
	padding:5px;
	margin:5px 0;
}
.scheme-mask .suateam_select_frame select{
	box-sizing: border-box;
}
.file {
    position: relative;
    display: inline-block;
    font-style:normal;
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
    margin-left:22.5%;
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

#common-last{
	font-style:normal;
	font-size: 1.4rem;
	line-height: 30px;
	height: 30px;
	width: 9%;
	min-width: 10px;
 	font-weight: 600;
	float: left;
	text-align: left;
	padding-left:1%;
}

#myForm div.suateam_input_frame label,#myForm div.suateam_select_frame label{
	width:25%;
}
/*#myForm .suateam_input_frame input, #myForm .suateam_select_frame select{
	width:40%;
}*/
#uploadImg .up-suc{
	display:none;
	position: absolute;
	left: 62%;
	top: 7px;
	color:#1E88C7;
}
div.scheme_frame{
	height: 400px;
	overflow-y: scroll;
	overflow-x: hidden;
	margin-top: 50px;
}
</style>