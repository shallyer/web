<template>
	 <div id='safecommunity_detail'>
    	<section>
	    	<div class='section suateam_banner' v-bind:style="{backgroundImage:banner}" :class='{suateam_banner_hasbanner:banner!=null}'>
	    	</div>
    	</section>
    	<section>
    		<div class='suateam suateam_container_frame'>
    			<div class='safecommunity_detail_content'>
    				<p class='title'>{{detailcontent.title}}</p>
    				<p class='info clearfix'>
    					<span style="float: left;">编辑日期：<font class='safecommunity_detail_content_date'>{{detailcontent.createDate}}</font></span>
    					<span style="float: right;">作者：{{detailcontent.createName}}</span>
    				</p>
    				<!--<p class='biref'>{{detailcontent.miaoshu}}</p>-->
    				<div class='content'v-html='detailcontent.content'></div>
				</div>
				<div class ='safecommunity_download' v-if ="detailcontent.documentList!==null">
					<label class='table_label'>下载列表</label>
					<table>
						<thead>
							<tr>
								<th>文件名称</th>
								<th>文件类型</th>
								<th>下载地址</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for='items in detailcontent.documentList'>
								<td>{{items.documentName}}</td>
								<td>{{items.documentType}}</td>
								<td>
									<a v-bind:href="items.documentUrl">
										<img v-if="items.documentType=='rar'||items.documentType=='zip'" v-bind:src='rar' style="margin:-4px 0">
										<img v-if="items.documentType=='doc'||items.documentType=='docx'" v-bind:src='doc' style="margin:-4px 0">
										[下载地址]
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
    				
    		
    		</div>
    	</section>
    	
    	
	 </div>
</template>
<script>
	var common_tools=require("common_tools");
	import store from "store";
	export default {
		//components: {},
		name: 'safecommunity_detail',
		mounted:function(){
			var getdetail_id=common_tools.GetParam();
			var _self = this;
			common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbInfo/querySuateamEbInfoById',{
				"condition": {
					"id": getdetail_id
					}
       			},function(data){
   				//success callback
   				if(data.rspCode!=='100000'){
   					
   				}else if(data.rspCode=='100000'){
   					console.log(data)
   					_self.detailcontent=data.data.resultSet;
   				};
   			},function(data){
   				//error callback
   				console.log(data);
       		});
       	},
		data: function (){
            return {
            	banner:null,
            	rar:require('../../public_resource/img/ico/rar.png'),
            	doc:require('../../public_resource/img/ico/doc.png'),
            	detailcontent:{}
            }
           
       }
	}
</script>
<style>
	div.safecommunity_detail_content{
		width: 100%;
		padding: 30px;
		box-sizing: border-box;
	}
	div.safecommunity_detail_content p.title{
		width: 100%;
		text-align: center;
		font-size: 1.8rem;
		color: #818181;
	}
	div.safecommunity_detail_content p.info{
		width: 40%;
		text-align: center;
		font-size: 1.4rem;
		color: #818181;
		margin: 0 auto;
	}
	div.safecommunity_detail_content p.biref{
		width: 100%;
		text-align: justify;
		font-size: 1.6rem;
		color: #818181;
		text-indent: 2em;
		line-height: 1.7;
		font-style: italic;
	}
	div.safecommunity_download{
		float: left;
		width: 100%;
		margin: 20px 0;
	}
	font.safecommunity_detail_content_date{
		width:90px;
		word-wrap: break-word;
		overflow: hidden;
		float: right;
		height: 20px;
	}
</style>