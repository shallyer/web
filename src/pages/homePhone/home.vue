<template>
    <div id="index">
        <div class="swiper-container" id="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="section active">
                        <div class="homeShow">
                            <div class="sectionImg">
                                <div><img class="sectionImg1" v-bind:src="Longmen"></div>
                                <!--<br />-->
                                <div><img class="LongData" v-bind:src="LongData"></div>
                                <div class="preuseImg">
                                    <span class="previewSpan" @click="asd">功能预览</span>
                                    <span class="useSpan">立即使用</span>
                                </div>
                                <div class="item_content">
                                    <div class="item_content1">
                                        <div class="contentImg" @click="partOne">
                                            <img class="" v-bind:src="service" />
                                        </div>
                                        <div class="contentSon">安全纵深服务</div>
                                    </div>
                                    <div class="item_content2  ">
                                        <div class="contentImg" @click="partTwo">
                                            <img v-bind:src="defense" />
                                        </div>
                                        <div class="contentSon">未知威胁防御</div>
                                    </div>
                                    <div class="item_content3 ">
                                        <div class="contentImg" @click="partThree">
                                            <img v-bind:src="structure" />
                                        </div>
                                        <div class="contentSon">安全体系构建</div>
                                    </div>
                                </div>
                            </div>
                            <div autoplay="autoplay" width="320" height="240" id='video'>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide" v-if="1==isActive">
                    <div class="sectionTest">
                        <img class="sectionTestimg1" v-bind:src="sectionTestimg1" />
                        <img class="sectionTestimg2" v-bind:src="sectionTestimg2" />
                    </div>
                </div>
                <div class="swiper-slide" v-if="1==isActive">
                    <div class="sectionAnalysis">
                        <img class="sectionAnaimg1" v-bind:src="sectionAnaimg1" />
                        <img class="sectionAnaimg2" v-bind:src="sectionAnaimg2" />
                    </div>
                </div>
                <div class="swiper-slide" v-if="1==isActive">
                    <div class="sectionVulner">
                        <img class="Vulnerability1" v-bind:src="Vulnerability1" />
                        <img class="Vulnerability2" v-bind:src="Vulnerability2" />
                    </div>
                </div>
                <!---------------------------点击显示的第二部分---------------------->
                <div class="swiper-slide" v-if="2==isActive">
                    <div class="SectionTop">
                        <img class="distinguishLeft" v-bind:src="distinguishLeft">
                        <img class="distinguishRight" v-bind:src="distinguishRight">
                    </div>
                </div>
                <div class="swiper-slide" v-if="2==isActive">
                    <div class="SectionBottom">
                        <img class="threatenLeft" v-bind:src="threatenLeft">
                        <img class="threatenRight" v-bind:src="threatenRight">
                    </div>
                </div>
                <!-------------------------点击显示第三部分内容---------------------->
                <div class="swiper-slide" v-if="3==isActive">
                    <div class="prospect">
                        <img class="prospectLeft" v-bind:src="prospectLeft">
                        <img class="prospectRight" v-bind:src="prospectRight">
                    </div>
                </div>
                <div class="swiper-slide" v-if="3==isActive">
                    <div class="sincerity">
                        <img class="sincerityLeft" v-bind:src="sincerityLeft">
                        <img class="sincerityRight" v-bind:src="sincerityRight">
                    </div>
                </div>
                <div class="swiper-slide" v-if="3==isActive">
                    <div class="strategy">
                        <img class="strategyLeft" v-bind:src="strategyLeft">
                        <img class="strategyRight" v-bind:src="strategyRight">
                    </div>
                </div>
                <div class="swiper-slide" v-if="3==isActive">
                    <div class="facilities">
                        <img class="facilitiesLeft" v-bind:src="facilitiesLeft">
                        <img class="facilitiesRight" v-bind:src="facilitiesRight">
                    </div>
                </div>
                <!-- -----------------------所有尾部内容---------------------------!-->
                <div class="swiper-slide">
                    <div class="sectionData">
                        <div class=" sectionDataimg ">
                            <img class="LongData" v-bind:src="LongData">
                            <div class="preuseImg">
                                <span class="previewSpan">功能预览</span>
                                <span class="useSpan">立即使用</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide" id="swiper12">
                    <div class="footer-area">
                        <Bottom></Bottom>
                    </div>
                </div>
            </div>
            <!--右侧导航 -->
            <div class="swiper-pagination" v-show="isShow">
            </div>
        </div>
        <div class="toTopimg" @click="backToTop" v-show="isShow">
            <img v-bind:src="toTop">
        </div>
    </div>
</template>
<script>
import Swiper from '../../public_resource/vendor/swiper-3.4.2.min.js';
import Bottom from '../../components/global/bottom';
export default {
    components: { Swiper, Bottom },
    name: 'index',
    data: function() {
        return {
            bodyHeight: '',
            isActive: 1,
            mySwiper: null,
            isShow: false,
            LongData: require('./homeImg/Slogan.png'),
            Longmen: require('./homeImg/Title.png'),
            defense: require('./homeImg/defense.png'),
            service: require('./homeImg/service.png'),
            structure: require('./homeImg/structure.png'),
            sectionTestimg1: require('./homeImg/PenetrationLeft.png'),
            sectionTestimg2: require('./homeImg/Penetration.png'),
            sectionAnaimg1: require('./homeImg/threatenLeft.png'),
            sectionAnaimg2: require('./homeImg/threatenRight.png'),
            Vulnerability1: require('./homeImg/VulnerabilityText.png'),
            Vulnerability2: require('./homeImg/Vulnerability.png'),
            distinguishLeft: require('./homeImg/disLeft_Image.png'),
            distinguishRight: require('./homeImg/dis_Text.png'),
            threatenLeft: require('./homeImg/threaten_Text.png'),
            threatenRight: require('./homeImg/threaten_Image_1.png'),
            prospectLeft: require('./homeImg/prospect_Image_1.png'),
            prospectRight: require('./homeImg/prospect_Text.png'),
            sincerityLeft: require('./homeImg/sincerity_Text.png'),
            sincerityRight: require('./homeImg/sincerely_Image_2.png'),
            strategyLeft: require('./homeImg/strategyLeft_Image_1.png'),
            strategyRight: require('./homeImg/strategy_Text.png'),
            facilitiesLeft: require('./homeImg/facilities_Text.png'),
            facilitiesRight: require('./homeImg/facilities_Image.png'),
            toTop: require('./homeImg/top.png'),
        }
    },
    methods: {
        //返回顶部
        backToTop() {
            var _self = this;
            _self.mySwiper.slideTo(0, 1000, function() {})
        },
        //  点击显示第一部分别
        partOne: function() {
            var _self = this;
            _self.isActive = 1;
            _self.mySwiper.slideTo(1, 500, function() {})
        },
        //点击显示第二部分
        partTwo: function() {
            var _self = this;
            _self.isActive = 2;
            _self.mySwiper.slideTo(1, 500, function() {})
        },
        partThree: function() {
            var _self = this;
            _self.isActive = 3;
            _self.mySwiper.slideTo(1, 500, function() {})
        },
        swiperSlide: function() {
            var _self = this;
            console.log();
            _self.mySwiper = new Swiper('#swiper-container', {
                slidesPerView: 'auto',
                direction: 'vertical',
                keyboardControl: true,
                mousewheelControl: true,
                watchSlidesProgress: true,
                pagination: '#swiper-container .swiper-pagination',
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true, //修改swiper的父元素时，自动初始化swiper
                onTransitionEnd: function(swiper) {
                    if (swiper.activeIndex == 0) {
                        _self.isShow = false;
                        $('#header').css({
                            "display": "block"
                        })
                    } else {
                        _self.isShow = true;
                        $('#header').css({
                            "display": "none"
                        })
                    }
                    if (swiper.activeIndex == 1) {
                        $('.sectionTestimg1').addClass("allAnimation1")
                        $('.sectionTestimg2').addClass("allAnimation2")
                        $('.distinguishLeft').addClass('allAnimation7')
                        $('.distinguishRight').addClass('allAnimation8')
                        $('.prospectLeft').addClass('allAnimation11')
                        $('.prospectRight').addClass('allAnimation12')
                    } else {
                        $('.sectionTestimg1').removeClass("allAnimation1")
                        $('.sectionTestimg2').removeClass("allAnimation2")
                        $('.distinguishLeft').removeClass('allAnimation7')
                        $('.distinguishRight').removeClass('allAnimation8')
                        $('.prospectLeft').removeClass('allAnimation11')
                        $('.prospectRight').removeClass('allAnimation12')
                    }
                    if (swiper.activeIndex == 2) {
                        $('.sectionAnaimg1').addClass("allAnimation3")
                        $('.sectionAnaimg2').addClass("allAnimation4")
                        $('.threatenLeft').addClass('allAnimation9')
                        $('.threatenRight').addClass('allAnimation10')
                        $('.sincerityLeft').addClass('allAnimation13')
                        $('.sincerityRight').addClass('allAnimation14')
                    } else {
                        $('.sectionAnaimg1').removeClass("allAnimation3")
                        $('.sectionAnaimg2').removeClass("allAnimation4")
                        $('.threatenLeft').removeClass('allAnimation9')
                        $('.threatenRight').removeClass('allAnimation10')
                        $('.sincerityLeft').removeClass('allAnimation13')
                        $('.sincerityRight').removeClass('allAnimation14')
                    }
                    if (swiper.activeIndex == 3) {
                        $('.Vulnerability1').addClass("allAnimation5")
                        $('.Vulnerability2').addClass("allAnimation6")
                        $('.strategyLeft').addClass("allAnimation15")
                        $('.strategyRight').addClass("allAnimation16")
                    } else {
                        $('.Vulnerability1').removeClass("allAnimation5")
                        $('.Vulnerability2').removeClass("allAnimation6")
                        $('.strategyLeft').removeClass("allAnimation15")
                        $('.strategyRight').removeClass("allAnimation16")
                    }
                    if (swiper.activeIndex == 4) {
                        $('.facilitiesLeft').addClass("allAnimation17")
                        $('.facilitiesRight').addClass("allAnimation18")
                    } else {
                        $('.facilitiesLeft').removeClass("allAnimation17")
                        $('.facilitiesRight').removeClass("allAnimation18")
                    }
                },
            });
        }
    },
    mounted() {
        var _self = this;
        _self.swiperSlide();
    },
}
</script>
<style>
@import '../../public_resource/styles/swiper-3.4.2.min.css';







/*头部*/

#header {
    background-color: rgba( 169, 169, 169, .3);
    min-width: 1200px;
}

html,
body,
#app {
    width: 100%;
    height: 100%;
}

#index {
    width: 100%;
    height: 100%;
    /*height: 950px;*/
    min-width: 1200px;
}

#swiper-container {
    width: 100%;
    height: 100%;
}

#swiper-container .swiper-slide {
    height: 100%;
    overflow: hidden;
}















/*设置swiper高度部分*/

#swiper-container .swiper-slide:nth-child(1) {
    height: 65%;
}

#swiper-container .swiper-slide:nth-child(2) {
    height: 30%;
}

#swiper-container .swiper-slide:nth-child(3) {
    height: 30%;
}

#swiper-container .swiper-slide:nth-child(4) {
    height: 30%;
}

#swiper-container .swiper-slide:nth-child(5) {
    height: 30%;
}

#swiper-container .swiper-slide:nth-child(6) {
    height: 30%;
}

#swiper-container .swiper-slide:nth-child(7) {
    height: 30%;
}

#swiper-container .swiper-slide:last-child {
    height: 260px;
}















/*第一屏*/

.homeShow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*background: white;*/
    background: url(homeImg/banner_top.jpg) no-repeat;
    background-size: 100% 100%;
}

.shade.s1 {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    /*background: url(./homeImg/page1_bak.png) no-repeat;*/
    /*filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";*/
    -moz-background-size: 90% 100%;
    background-size: 90% 100%;
    background: url(homeImg/banner_top.jpg) no-repeat;
    z-index: -2;
}

.sectionImg {
    /*border: 1px solid;*/
    margin: 0px auto;
    text-align: center;
    /*padding-top: 260px;*/
    /*border: 1px solid white;*/
}

.sectionImg1 {
    width: 20%;
    margin-top: 20%;
}

.sectionImg .LongData {
    width: 35%;
}

.preuseImg {
    margin-top: 2%;
}

.preuseImg span {
    color: white;
    font-size: 16px;
    display: inline-block;
    width: 160px;
    border-radius: 4px;
    line-height: 36px;
}

.preuseImg .previewSpan {
    height: 40px;
    margin-right: 80px;
    background-image: url(homeImg/Button_bg.png);
    background-position: 0px 0px;
    cursor: pointer;
    transition: 0.5s;
}

@keyframes backg {
    from {
        background-position: 0px 0px;
    }
    to {
        background-position: -100px 0px;
    }
}

.preuseImg .previewSpan:hover {
    /*animation: 1 backg;*/
    /* transform: translateY(-15px); */
    animation: 0.5s backg forwards;
}

.preuseImg .useSpan {
    height: 36px;
    border: 2px solid white;
    cursor: pointer;
    /*background-color: rgba(255,255,255,.2) ;*/
}

.useSpan:hover {
    background-color: rgba(255, 255, 255, .2);
}

.item_content {
    margin: 10% auto 0px auto;
    width: 50%;
    height: 300px;
}

.item_content1,
.item_content2,
.item_content3 {
    float: left;
    width: 33%;
}

.item_content .contentSon {
    font-size: 18px;
    font-weight: bold;
    color: #CC4452;
}

.item_content .contentImg {
    transition: 0.5s;
    cursor: pointer;
    /*width: 198px;
height: 198px;*/
}

.item_content .contentImg img {
    width: 60%;
}

.item_content .contentImg:hover {
    transform: translateY(-15px);
}















/*第二屏前半部分*/

.sectionTest {
    position: relative;
    width: 100%;
    height: 100%;
    background: url(homeImg/wlstcs_bg.png) no-repeat;
    background-position: 80% 0px;
}

.sectionTest .sectionTestimg1 {
    /*width: 27%;
height: 42%;*/
    width: 40%;
    position: absolute;
    top: 30%;
    left: 20%;
}

.sectionTest .sectionTestimg2 {
    width: 25%;
    position: absolute;
    top: 15%;
    left: 65%;
}















/*第二屏后半部分*/

.sectionAnalysis {
    position: relative;
    width: 100%;
    height: 100%;
    /*border: 1px solid;*/
    background: url(homeImg/threaten.png) no-repeat;
    background-size: 100% 100%;
}

.sectionAnalysis .sectionAnaimg1 {
    width: 30%;
    position: absolute;
    top: 15%;
    left: 15%;
}

.sectionAnalysis .sectionAnaimg2 {
    width: 25%;
    position: absolute;
    top: 30%;
    left: 65%;
}















/*第三页前半部分*/

.sectionVulner {
    width: 100%;
    height: 100%;
    /*border: 1px solid;*/
    position: relative;
    background: url(homeImg/Vulnerability_2.png) no-repeat;
    background-position: 100px 0px;
}

.sectionVulner .Vulnerability1 {
    width: 30%;
    position: absolute;
    top: 35%;
    left: 20%;
}

.sectionVulner .Vulnerability2 {
    width: 35%;
    position: absolute;
    top: 20%;
    left: 60%;
}















/*第三页前后部分*/

.sectionData {
    width: 100%;
    height: 100%;
    background-image: url(homeImg/banner_fotter.jpg);
    background-size: 100% 100%;
}

.sectionData .sectionDataimg {
    text-align: center;
    margin: 0px auto;
    padding-top: 100px;
}

.sectionData .sectionDataimg img {
    /*  margin-top: 5%;  */
    width: 45%;
}















/*------------点击显示的第二部分内容-----------------*/

.SectionTop {
    width: 100%;
    height: 100%;
    /*border: 1px solid;*/
    background: url(homeImg/threat_Bg.png) no-repeat;
    background-size: 100% 100%;
    position: relative;
}

.SectionTop .distinguishLeft {
    width: 25%;
    position: absolute;
    top: 18%;
    left: 15%;
}

.SectionTop .distinguishRight {
    width: 280%;
    position: absolute;
    top: 30%;
    left: 55%;
}

.SectionBottom {
    width: 100%;
    height: 100%;
    background: url(homeImg/situation_bg.png) no-repeat;
    background-position: 150px 0px;
    position: relative;
}

.SectionBottom .threatenLeft {
    width: 30%;
    position: absolute;
    top: 35%;
    left: 15%;
}

.SectionBottom .threatenRight {
    width: 30%;
    position: absolute;
    top: 20%;
    left: 60%;
}















/*---------------点击显示的第三部分内容----------------------*/

.prospect {
    width: 100%;
    height: 100%;
    /*border: 1px solid;*/
    background: url(homeImg/prospect_Image_2.png)no-repeat;
    background-position: 200px 0px;
    position: relative;
}

.prospect .prospectLeft {
    width: 25%;
    position: absolute;
    top: 18%;
    left: 15%;
}

.prospect .prospectRight {
    width: 35%;
    position: absolute;
    top: 35%;
    left: 55%;
}

.sincerity {
    width: 100%;
    height: 100%;
    background: url(homeImg/sinceritys_Bg.png) no-repeat;
    background-size: 100% 100%;
    position: relative;
}

.sincerity .sincerityLeft {
    width: 45%;
    position: absolute;
    top: 30%;
    left: 15%;
}

.sincerity .sincerityRight {
    width: 35%;
    position: absolute;
    top: 10%;
    left: 55%;
}















/*er*/

.strategy {
    width: 100%;
    height: 100%;
    /*border: 1px solid;*/
    background: url(homeImg/strategy_Image_2.png)no-repeat;
    background-position: 70% 0px;
    position: relative;
}

.strategy .strategyLeft {
    width: 35%;
    position: absolute;
    top: 28%;
    left: 13%;
}

.strategy .strategyRight {
    width: 35%;
    /*width: 30%;*/
    position: absolute;
    top: 30%;
    left: 55%;
}

.facilities {
    width: 100%;
    height: 100%;
    background: url(homeImg/facilities_Bg.png) no-repeat;
    background-size: 100% 100%;
    position: relative;
}

.facilities .facilitiesLeft {
    width: 35%;
    position: absolute;
    top: 25%;
    left: 15%;
}

.facilities .facilitiesRight {
    width: 30%;
    position: absolute;
    top: 10%;
    left: 60%;
}















/*置顶*/

.toTopimg {
    position: fixed;
    bottom: 30px;
    right: 50px;
    z-index: 100;
    cursor: pointer;
}

.toTopimg img {
    width: 90%;
}















/*右侧导航*/

.swiper-container-vertical>.swiper-pagination-bullets {
    right: 50px;
    top: 25%;
    /* width: 2%;
height: 20%;
border: 1px solid; */
}

.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 10px 0px;
}

.swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    background-color: #FEBE7E;
}

.swiper-pagination-bullet-active {
    opacity: 1;
    background: #EC7263;
}















/*动画效果*/

@keyframes trans1 {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
    }
}

@keyframes trans2 {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
    }
}

@keyframes trans3 {
    from {
        position: absolute;
        left: 100%;
        top: 10%;
    }
    to {
        position: absolute;
        top: 15%;
        left: 15%;
    }
}

@keyframes trans4 {
    from {
        position: absolute;
        left: 0px;
        top: 25%;
    }
    to {
        position: absolute;
        top: 30%;
        left: 65%;
    }
}

@keyframes trans5 {
    from {
        position: absolute;
        left: 0%;
        top: 0px;
        transform: scale(0);
    }
    to {
        position: absolute;
        top: 35%;
        left: 20%;
        transform: scale(1);
    }
}

@keyframes trans6 {
    from {
        position: absolute;
        left: 100%;
        top: 0px;
        transform: scale(0);
    }
    to {
        position: absolute;
        top: 20%;
        left: 60%;
        transform: scale(1);
    }
}

@keyframes trans7 {
    from {
        position: absolute;
        left: 100%;
        top: 12%;
    }
    to {
        position: absolute;
        top: 18%;
        left: 15%;
    }
}

@keyframes trans8 {
    from {
        position: absolute;
        left: 20%;
        top: 20%;
    }
    to {
        position: absolute;
        top: 30%;
        left: 55%;
    }
}

@keyframes trans9 {
    from {
        position: absolute;
        left: 0%;
        bottom: 0px;
        opacity: 0;
    }
    to {
        position: absolute;
        top: 35%;
        left: 15%;
        opacity: 1;
    }
}

@keyframes trans10 {
    from {
        position: absolute;
        left: 60%;
        top: 100%;
    }
    to {
        position: absolute;
        top: 20%;
        left: 60%;
    }
}

@keyframes trans11 {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
        transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes trans12 {
    0% {
        position: absolute;
        top: 20%;
        left: 100%;
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
        transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes trans13 {
    from {
        opacity: 0;
        transform: scale(0);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes trans14 {
    from {
        opacity: 0;
        transform: scale(0);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes trans15 {
    from {
        position: absolute;
        left: 100%;
        top: 15px;
    }
    to {
        position: absolute;
        top: 28%;
        left: 13%;
    }
}

@keyframes trans16 {
    from {
        position: absolute;
        left: 0%;
        top: 20%;
    }
    to {
        position: absolute;
        top: 30%;
        left: 55%;
    }
}

@keyframes trans17 {
    0%,
    100%,
    60%,
    75%,
    90% {
        -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(3000px, 0, 0);
        transform: translate3d(3000px, 0, 0)
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(-25px, 0, 0);
        transform: translate3d(-25px, 0, 0)
    }
    75% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
    }
    90% {
        -webkit-transform: translate3d(-5px, 0, 0);
        transform: translate3d(-5px, 0, 0)
    }
    100% {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes trans18 {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
    }
}

.allAnimation1 {
    -webkit-animation: 1s trans1;
    -moz-animation: 1s trans1;
    -o-animation: 1s trans1;
    -ms-animation: 1s trans1;
    animation: 1s trans1;
}

.allAnimation2 {
    -webkit-animation: 1s trans2;
    -moz-animation: 1s trans2;
    -o-animation: 1s trans2;
    -ms-animation: 1s trans2;
    animation: 1s trans2;
}

.allAnimation3 {
    -webkit-animation: 1s trans3;
    -moz-animation: 1s trans3;
    -o-animation: 1s trans3;
    -ms-animation: 1s trans3;
    animation: 1s trans3;
}

.allAnimation4 {
    -webkit-animation: 1s trans4;
    -moz-animation: 1s trans4;
    -o-animation: 1s trans4;
    -ms-animation: 1s trans4;
    animation: 1s trans4;
}

.allAnimation5 {
    -webkit-animation: 1s trans5;
    -moz-animation: 1s trans5;
    -o-animation: 1s trans5;
    -ms-animation: 1s trans5;
    animation: 1s trans5;
}

.allAnimation6 {
    -webkit-animation: 1s trans6;
    -moz-animation: 1s trans6;
    -o-animation: 1s trans6;
    -ms-animation: 1s trans6;
    animation: 1s trans6;
}

.allAnimation7 {
    -webkit-animation: 1s trans7;
    -moz-animation: 1s trans7;
    -o-animation: 1s trans7;
    -ms-animation: 1s trans7;
    animation: 1s trans7;
}

.allAnimation8 {
    -webkit-animation: 1s trans8;
    -moz-animation: 1s trans8;
    -o-animation: 1s trans8;
    -ms-animation: 1s trans8;
    animation: 1s trans8;
}

.allAnimation9 {
    -webkit-animation: 1s trans9;
    -moz-animation: 1s trans9;
    -o-animation: 1s trans9;
    -ms-animation: 1s trans9;
    animation: 1s trans9;
}

.allAnimation10 {
    -webkit-animation: 1s trans10;
    -moz-animation: 1s trans10;
    -o-animation: 1s trans10;
    -ms-animation: 1s trans10;
    animation: 1s trans10;
}

.allAnimation11 {
    -webkit-animation: 1s trans11;
    -moz-animation: 1s trans11;
    -o-animation: 1s trans11;
    -ms-animation: 1s trans11;
    animation: 1s trans11;
}

.allAnimation12 {
    -webkit-animation: 1s trans12;
    -moz-animation: 1s trans12;
    -o-animation: 1s trans12;
    -ms-animation: 1s trans12;
    animation: 1s trans12;
}

.allAnimation13 {
    -webkit-animation: 1s trans13;
    -moz-animation: 1s trans13;
    -o-animation: 1s trans13;
    -ms-animation: 1s trans13;
    animation: 1s trans13;
}

.allAnimation14 {
    -webkit-animation: 1s trans14;
    -moz-animation: 1s trans14;
    -o-animation: 1s trans14;
    -ms-animation: 1s trans14;
    animation: 1s trans14;
}

.allAnimation15 {
    -webkit-animation: 1s trans15;
    -moz-animation: 1s trans15;
    -o-animation: 1s trans15;
    -ms-animation: 1s trans15;
    animation: 1s trans15;
}

.allAnimation16 {
    -webkit-animation: 1s trans16;
    -moz-animation: 1s trans16;
    -o-animation: 1s trans16;
    -ms-animation: 1s trans16;
    animation: 1s trans16;
}

.allAnimation17 {
    -webkit-animation: 1s trans17;
    -moz-animation: 1s trans17;
    -o-animation: 1s trans17;
    -ms-animation: 1s trans17;
    animation: 1s trans17;
}

.allAnimation18 {
    -webkit-animation: 1s trans18;
    -moz-animation: 1s trans18;
    -o-animation: 1s trans18;
    -ms-animation: 1s trans18;
    animation: 1s trans18;
}
</style>