<template>
	<div class='list_frame'>
		<div class='list_content'>
			<ul class='list_content_ul'>
				<li class='list_content_li' v-for='items in listcontentArray'>
					<div class='list_content suateam_fl' :class="{w60:items.img!==null}">
						<p class='title' v-on:click="todetail(items.id)">{{items.title}}</p>
						<span class='date'>{{items.createDate}}</span>
						<p class='brief'>{{items.miaoshu}}</p>
					</div>
					<div class='list_content suateam_fr' v-if='items.img!==null' :class="{w30:items.img!==null}">
						<img v-bind:src='items.img' >
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	
	module.exports = {
    	//components configs
    	props:['listcontentArray'],
    	name:'list_frame',
        data: function () {
            return {
               	
            }
        },
        methods:{
        	todetail:function(_id){
        		this.$router.push({ name:'safecommunity_detail', params: {detail:_id }})
        	}
        }
    }
</script>

<style>
	div.list_frame{
		float: left;
		width: 100%;
		min-width: 300px;
		margin-bottom: 20px;
	}
	div.list_content li.list_content_li{
		width:100%;
		min-height: 200px;
		position: relative;
		border: 1px #cecece solid;
		display: block;
		float: left;
		padding:20px;
		line-height: 30px;
		text-align: center;
		cursor: pointer;
		clear: both;
    	margin: 10px 0;
    	box-sizing: border-box;
    	border-radius: 4px;
	}
	div.list_content li.list_content_li:hover{
		border: 1px #16b0ff solid;
	}
	div.list_content li.list_content_li div.list_content{
		float: left;
	}
	div.list_content img{
		width: 100%;
		display: block;	
		float: left;
		height: 230px;
	}
	div.list_content p.title{
		font-weight: 700;
		text-align: left;
		color: #656565;
	}
	div.list_content span.date{
		color: #ccc;
		font-size: 1.4rem;
		float: left;
		width: 90px;
		text-align: left;
		height: 26px;
    	overflow: hidden;
	}
	div.list_content p.brief{
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 3;
	    -webkit-box-orient: vertical;
	    float: left;
	    height: 85px;
	    overflow: hidden;
	    text-align: left;
	    text-indent: 2em;
	    color: #656565;
	    width: 100%;
	}
	div.list_content li.list_content_li div.list_content.w60{
		width: 60%
	}
	div.list_content li.list_content_li div.list_content.w30{
		width: 30%;
		height: 230px;
		position: absolute;
		top:10px;
		right: 20px;
		overflow: hidden;
	}
	
	
</style>