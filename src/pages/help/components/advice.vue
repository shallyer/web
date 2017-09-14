<template>
	<div id='advice'>
		<div class=''>
		<!--<p class="title">用户体验提升计划</p>
		<p class="title">TO build our better service</p>
		<p class='paragraph head'>您好，赛鳌诚谢您的访问</p>
		<p class='paragraph head'>赛鳌网站从无到有，从内测到1.0版本上线，我们的团队也经历了意见一致到争吵再到一致，终于能够与大家见面。</p>
		<p class='paragraph head'>虽然网站还有很多问题，但我们还会有2.0、3.0 ……的上线，无论功能、页面都会不断地完善和修整。</p>
		<p class='paragraph head'>所以我们真诚邀请你成为我们用户体验专家团的一员，帮助我们成为你期望的样子！</p>
		<p class='paragraph head'>无论您有任何问题和不解，请发到我们邮箱，邮箱：<span style="font-weight: 600; color:#1973d0;">saiao@secoros.com</span></p>
		<p class='paragraph head'>只要您的建议一经采纳，我们将在7个工作日为您发放9折优惠券作为奖励哦！</p>
		<div style='background: #ccc; text-align: center;width: 555px;margin: 10px 0; padding: 2px 0;'>──近期网站优质意见──</div>-->
        <img v-bind:src='adviceImg' style="width: 100%; float: left;display: block;">                        
		</div>
		
		
	</div>

</template>

<script>
	module.exports = {
    	//components configs
	
    	name:'advice',
        data: function () {
            return {
              	adviceImg:require('./advice.jpg')
            }
        },
        methods:{
        	
        }
    }
</script>

<style>
	div#advice p.title{
		width: 100%;
		text-align: center;
		font-size: 1.8rem;
		color: #818181;
		font-weight: 600;
	}
	div#advice p.paragraph.head{
		text-indent: 0;
	}
	div#advice{
		box-sizing: border-box;
	}
</style>