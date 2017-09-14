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
                                    <span class="previewSpan" @click="toYWJC">功能预览</span>
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
                                <span class="previewSpan"  @click="toYWJC">功能预览</span>
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
    components: {
        Bottom,
        Swiper,
    },
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
    beforeRouteEnter (to, from, next) {
            var sUserAgent = navigator.userAgent.toLowerCase();
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            var bIsMidp = sUserAgent.match(/midp/i) == "midp";
            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
            var bIsAndroid = sUserAgent.match(/android/i) == "android";
            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
            if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
                   next();
            }else{
                    next({
                    path:'/index_m'
                });
            }
        },
    methods: {
        //返回顶部
        toYWJC(){
        	window.location.href='http://192.168.120.211:8890';
        },
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
@import 'home.css';
</style>