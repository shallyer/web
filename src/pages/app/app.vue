<template>
    <div id="app">
        <Top></Top>
        <router-view></router-view>
        <div id="rightArrow"><a href="javascript:;" title="在线客户"></a></div>
        <div id="floatDivBoxs">
            <div class="floatDtt" >在线客服</div>
            <div class="floatShadow">
                <ul class="floatDqq">
                    <li style="padding-left:0px;">
                        <a target="_blank" href="tencent://message/?uin=2135870076&Site=http://www.secoros.com&Menu=yes" style="color: #CB464B;font-weight: bold;">
                            <img v-bind:src='qqimg' align="absmiddle" >&nbsp;&nbsp;在线沟通
                        </a>
                    </li>
                </ul>
                <div class="floatDtxt">
                    <img v-bind:src='phone' style="width: 23px; height: 23px; float: left;">
                    <font style="float: left;margin-left: 3px;">热线电话</font>
                </div>
                <div class="floatDtel">022—5995 5103</div>
                <div style="text-align:center;padding:10px 0 5px 0;background:#EBEBEB;">
                    <img v-bind:src='erweicoder' width="155" height="155" alt="微信公众账号" style="margin: 0 auto; display: table;">
                    <font style="margin: 7px auto;display: table; font-weight: bold;">微信公众账号</font>
                </div>
            </div>
        </div>
        <div class='ad_frame' v-if="isShowAD==true" style="width:1024px; margin-left:-512px;">
            <span class='close-mask' style="right: 0; top: 0;" @click='closeAD()'>×</span>
            <div style='position: absolute;width: 100%;'>
                <img v-bind:src='ad' style="width: 100%; display: block;">
            </div>
        </div>
    </div>
</template>
<script>
    require('basecss');
    import "babel-polyfill";
    import store from "store";
    import Top from '../../components/global/top';
    import Bottom from '../../components/global/bottom';

    export default {
        components: { Top, Bottom },
        name: 'app',
        data: function() {
            return {
               
                erweicoder: require('../../public_resource/img/ico/code.jpg'),
                qqimg: require('../../public_resource/img/images/qq.png'),
                phone:require('../../public_resource/img/images/tel.png'),
                ad: require('./ad.jpg'),
                isShowAD: false,
                showADTime: 1000 * 10
            }
        },
        mounted: function() {

            var flag = 1;
            var _self = this;
            $('#rightArrow').click(function() {
                if (flag == 1) {
                //$("#floatDivBoxs").css("height",'170px');
                $("#floatDivBoxs").animate({ right: '0px' }, 300);
                $(this).animate({ right: '170px' }, 300);
                $(this).css('background-position', '0px 0');
                flag = 0;
            } else {
                //$("#floatDivBoxs").css("height",'170px');
                $("#floatDivBoxs").animate({ right: '-170px' }, 300);
                $(this).animate({ right: '0px' }, 300);
                $(this).css('background-position', '-50px 0');
                flag = 1;
            }
        });
            var windowHeight = $(window).height() - 100;
            $(".ad_frame").css("height", windowHeight);
            setTimeout(function() {
                _self.isShowAD = false;
            }, _self.showADTime);
        },
        watch: {
            $route(to, from) {
                if (to.path === "/index" || to.path === "/") {
                    this.isIndex = true;
                    $('body').css('overflowY', 'hidden');
                } else {
                    this.isIndex = false;
                    this.isShowAD = false;
                    $('body').css('overflowY', 'scroll')
                    $('header').css('display', 'block')

                }
            }
        },
        methods: {
            closeAD: function() {
                this.isShowAD ? this.isShowAD = false : this.isShowAD = true;
            }
        }
    }
</script>
<style>
    #floatDivBoxs {
        width: 170px;
        background: #fff;
        position: fixed;
        bottom: 13px;
        right: -170px;
        z-index: 999;
    }

    #floatDivBoxs .floatDtt {
        box-shadow: -2px 0 3px rgba(0, 0, 0, 0.25);
        width: 100%;
        height: 45px;
        line-height: 45px;
        background: #6A4C6E;
        color: #fff;
        font-size: 18px;
        text-indent: 22px;
        position: relative;
    }

    #floatDivBoxs .floatDqq {
        padding: 0 14px;
    }

    #floatDivBoxs .floatDqq li {
        height: 45px;
        line-height: 45px;
        font-size: 15px;
        border-bottom: 1px solid #e3e3e3;
        padding: 0 0 0 50px;
    }

    #floatDivBoxs .floatDtxt {
        font-size: 1.5rem;
        color: #CB464B;
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
        font-weight: bold;
        position: relative;
    }
    #floatDivBoxs .floatDtxt img{
        position: relative;
        top: 10px;
        left: 8px;
        margin-right: 10px;
    }

    #floatDivBoxs .floatDtel {
       color:  #CB464B;
       padding: 10px 0 15px 13px;
       font-weight: bold;
   }

   #floatDivBoxs .floatDtel img {
    display: block;
}

#floatDivBoxs .floatDbg {
    width: 100%;
    height: 20px;
    background: url(../../public_resource/img/images/online_botbg.jpg) no-repeat;
    box-shadow: -2px 0 3px rgba(0, 0, 0, 0.25);
}

.floatShadow {
    background: #fff;
    box-shadow: -2px 0 3px rgba(0, 0, 0, 0.25);
}

#rightArrow {
    width: 50px;
    height: 45px;
    background: url(../../public_resource/img/images/online.jpg) no-repeat;
    background-position: -50px 0;
    position: fixed;
    bottom: 350px;
    right: 0px;
    z-index: 999;
}

#rightArrow a {
    display: block;
    height: 45px;
}
</style>