<template>
	<div class='upfile_frame'>
		<div class ='up_btn_frame'>
			<button class ='bluecolor upfile_btn'>文件上传</button>
			<input type="file" multiple="multiple" name="fileToUpload" @change="initupfire($event)" />
		</div>
		<div class='upfile_selected'>
			<span v-for="items in fileArray" v-if="fileArray!==null">{{items}}</span>
		</div>
	
	</div>
</template>

<script>
	var common_tools=require("common_tools");
	import store from "store";
    module.exports = {
    	name:'upfile',
    	props:['upfile_option'],
        data: function () {
            return {
            	fileArray:null,
            	returndataurl:null,
            	limitsize:true,
            	limittype:true,
            	inputdom:{},
            	islimitsize:true,
            	islimittype:true,
            	upfile_options:[]
            }    
        },
        mounted:function(){
 
        },
        methods: {
		   	initupfire:function(_this){
		   		this.fileArray=[];
		   		this.inputdom=_this.target;
		   		if(this.limitsize==true){
		   			this.checkfilesize(this.upfile_option[1]);	
		   		};
		   		if(this.limittype==true){
		   			this.checkfiletype(this.upfile_option[0]);
		   		};
		   		this.senddata();
		   	},
		   	checkfilesize:function(_size){
		   		var limitsize = _size;
		   		var filesx = this.inputdom.files;
		   		for(var a=0;a<filesx.length;a++){
		   			var tempsize=(filesx[a].size)/1024;	
		   			var tempname=filesx[a].name;	
		   			if(tempsize>limitsize){
		   				alert(tempname+"文件大小大于"+limitsize+"KB");
		   				this.islimitsize=false;
		   			};
		   		};
		   	},
		   	checkfiletype:function(_type){
		   		var limittype = _type.split(",");
		   		var filesx = this.inputdom.files;
		   		
		   		for(var a=0;a<filesx.length;a++){
		   			var temptype=filesx[a].type.toString();
		   			var file_length=0;
			   			for(var x=0;x<limittype.length;x++){
			   				if(temptype.indexOf(limittype[x].toString())!==-1) {
			   					this.islimittype=true;
				   				break;
				   			}else{
				   				file_length++;
				   			};
			   			};
		   			if(file_length==limittype.length){
		   				alert("文件类型异常");
			   			this.islimittype=false;
			   		};
		   		};
		   	},
		   	senddata:function(){
		   		var _self =this;
		   		if(this.islimitsize==true&&this.islimittype==true){
		   			var formData = new FormData();
			   		var filesx=this.inputdom.files;
			   		for(var a=0;a<filesx.length;a++){
			   			this.fileArray.push(filesx[a].name);
			   			formData.append('file', filesx[a]);
			   		};
					$.ajax({
					    url: common_tools.interfaceurl+'/common/filesUpload',
					    type: 'POST',
					    cache: false,
					    data: formData,
					    processData: false,
					    contentType: false,
					    success:function(data){
					    	if(data.rspCode=='100000'){
					    		_self.returndataurl=data.data.imgUrl;
					    		_self.$emit('upfile_emit',_self.returndataurl);
					    	}else if(data.rspCode!=='100000'){
					    		console.log(data);
					    	}
					    },
					    error:function(data){
					    	console.log(data)
					    }
					});
		   		}
		   		
		   	}
  			
	    }
    }
</script>

<style>
	div.upfile_frame{
		display: table;
		min-height: 32px;
		width: 60%;
		min-width: 250px;
	}
	div.up_btn_frame{
		height: 32px;
		width: 86px;
		position: relative;
		overflow: hidden;
		float: left;
	}
	div.up_btn_frame button.upfile_btn{
		position: absolute;
		left: 0;
		top:0;
		display:table;
		z-index: 1;
	}
	div.up_btn_frame input[type='file']{
		z-index: 2;
		width: 100%;
		height: 100%;
		position: absolute;
		opacity: 0;
	}
	div.upfile_selected {
		display: table;
		float: left;
		margin-left: 20px;
		box-sizing: border-box;
		padding-top: 14px;
	}
	div.upfile_selected span {
		display: inline-block;
	    min-width: 10px;
	    padding: .25em .625em;
	    font-size: 1.2rem;
	    color: #fff;
	    line-height: 1;
	    vertical-align: baseline;
	    white-space: nowrap;
	    text-align: center;
	    background-color: #999;
	    border-radius: 3px;
	    float: left;
	    margin: 0 7px;
	    max-height: 19px;
	    overflow: hidden;
	    max-width: 110px;
	}
</style>