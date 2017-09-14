<template>
	 <div id='aboutus'>
    	<section>
	    	<div class='section suateam_banner' v-bind:style="{backgroundImage:banner}" :class='{suateam_banner_hasbanner:banner!=null}'>
	    	</div>
    	</section>
    	<section>
    		<div class='suateam suateam_container_frame'>
    			<div class='aboutus_content'>
    				<p class='title'>关于我们</p>
    				<p class='paragraph'>赛鳌网隶属于天津圣目信息安全技术股份有限公司，总部设于天津。圣目股份自2005年进入网络空间安全管理领域，汇聚了行业领域顶尖安全专家，是中国网络空间安全管理领域领先的技术力量。通过整合的视野和方法为用户打造具有前瞻性的IT安全战略管理体系架构及流程，以前瞻性的眼光，设计和研发了符合市场需求的多项安全服务。</p>
    				<p class='paragraph'>赛鳌网作为国内首家专业从事网络空间安全管理领域电子商务服务、交易的第三方平台，紧跟国家“互联网+”发展趋势，秉承以用户需求为导向，驱动平台最大价值的理念，整合国际、国内顶尖安全厂商、安全服务商，服务用户面向金融、政府、医疗、教育、公安、广电、铁路、海关、民航、电力、国防科工、能源、交通、农业、水利、央企、商业贸易、经营性互联网等集团企业、大型企业，更为众多中小型企业提供定制化的一站式安全需求满足。</p>
    				<p class='paragraph_title'>开启网络安全免费时代</p>
    				<p class='paragraph head'>风险评估自测产品免费获取。旨在为用户能够及时全面了解目前自身信息系统的安全现状，明确安全建设方向与相关方案。</p>
					<p class='paragraph head'>网站监测预警产品免费获取。针对用户网站实现实时、专业、可视的威胁监测与预警功能，为用户网站安全运行保驾护航。</p>
					<p class='paragraph head'>远程漏洞扫描服务免费获取。整合专业技术人员，为用户提供远程漏洞扫描，帮助用户及时发现并且在漏洞转变为威胁，威胁转变为损失之前予以发现。</p>
					<p class='paragraph head'>安全方案免费获取。细分用户属性，根据用户行业、规模、业务类型、互联网应用范围等建立用户模型，提供专家指导性的专属安全方案，涵盖安全部署技术、产品、解决方案、安全标准、政策法规、培训认证全流程内容。解决用户如何建设信息安全的困惑。</p>
					<p class='paragraph_title'>网络安全产品畅选无忧</p>
					<p class='paragraph head'>集合国内、国际顶尖安全厂商，选取数百款核心安全产品，满足不同属性用户的安全需求。</p>
					<p class='paragraph head'>提供销售、租赁可选形式，满足用户安全产品快速、灵活部署，减轻用户安全部署成本负担。</p>
					<p class='paragraph head'>秉承睿智、专注、真实、相伴的经营理念，坚持诚信经营，安全厂商直供产品，从源头确保安全产品质量，同时，始终为用户提供最新技术应用的安全产品。</p>
					<p class='paragraph_title'>安全服务一站式保驾护航</p>
					<p class='paragraph head'>集中各地优质安全服务商，建立战略合作。全面依托最终用户需求，制定标准化的安全服务要求，从安全产品的服务保障，到网络空间安全全息服务提供，建立国内首支在线式安全服务专家级团队，为用户信息化业务提供保驾护航。</p>
					<p class='paragraph_title'>网络安全态势一览无遗</p>
					<p class='paragraph head'>来自全球第一手安全资讯，及时了解全球最新信息安全动态。</p>
					<p class='paragraph head'>及时获知病毒和漏洞信息，让用户做好预防部署、防风险于未然。</p>
					<p class='paragraph head'>细分用户属性的资讯订阅，提升用户对信息安全的认知，降低用户从海量数据中获取有用信息的时间成本，解决用户在信息化安全“痛点”方面的困惑。</p>
    			</div>
    		</div>
    	</section>
    	<section>
    		<div class='suateam suateam_container_frame'>
    			<Customeservice></Customeservice>
    		</div>
    	</section>
    	
	 </div>
</template>
<script>
	import Customeservice from '../../components/customerService/customerService';
	export default {
		components: {Customeservice},
		name: 'aboutus',
		data: function () {
            return {
            	banner:'url(' + require('./banner.jpg') + ')',
              	
            }
       }
	}
</script>
<style>
	div.aboutus_content{
		width: 100%;
		padding: 30px;
		box-sizing: border-box;
	}
	div.aboutus_content p.paragraph_title{
		width: 100%;
		text-align: left;
		font-size: 1.8rem;
		color: #818181;
		font-weight: 600;
	}
	div.aboutus_content p.paragraph.head{
		text-indent: 0;
	}
	div.aboutus_content p.title{
		width: 100%;
		text-align: center;
		font-size: 2.2rem;
		color: #818181;
	}
</style>