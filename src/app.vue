<style scoped>
    .header-wraper{
        position: relative;
        top: 0;
        left: 0;
        height: 64px;
        width: 100%;
        z-index: 10000;
        background-color: #F0F2F3;
        box-shadow: 0 0 6px 0 rgba(0,0,0,.12), 0 10px 12px 0 rgba(170,182,206,.2), inset 0 -1px 0 0 rgba(255,255,255,.3);
    }
    .nav-wrap {
        float: left;
        margin-left: 52px;
    }
    .nav-wrap li {
        display: inline-block;
        position: relative;
        height: 64px;
        line-height: 64px;
        font-size: 14px;
        padding: 0 4px;
        color: #fff;
        cursor: pointer;
        transition: all .2s ease-in-out;
        vertical-align: middle;
    }
    .nav-wrap li span{
        padding:12px;
        font-weight: 700;
    }
    .nav-wrap .ivu-menu-item-active:after {
        content: "";
        display: block;
        width: 100%;
        height: 4px;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .nav-wrap .ivu-menu-light{
        background:transparent;
        height: 62px;
        line-height: 62px;
    }
    .nav-wrap .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
        border-bottom-color:transparent;
        background: rgba(255,255,255,.6);
        cursor: pointer;
        font-weight: 700;
    }

    .nav-wrap .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active{
        border-bottom-color: #5182E4;
        background-color: #FFF;
        cursor: pointer;
        
    }
    .clearfix {
        zoom: 1;
    }
    .clearfix:before, .clearfix:after {
        display: table;
        line-height: 0;
        content: "";
        clear: both;
    }
    .hd-set{
        float: right;
        margin-right: 8px;
        height: 64px;
        line-height: 64px;
    }
    
    .main
    {
        height:calc(100% - 64px);
    }
    .dash-sidebar{
        position: absolute;
        z-index: 1000;
        top: 64px;
        left: 0;
        height: calc(100% - 64px);
        width: 220px;
        background: #f4f7f9;
        box-shadow: 2px 0 3px 0 rgba(0,0,0,.1), 1px 0 1px 0 rgba(0,0,0,.1);
    }
    .side-nouse-wrap {
        height: 100%;
        width: calc(100% + 3px);
        position: absolute;
        background: -webkit-linear-gradient(bottom, rgba(232,235,237,0) 0%, #E8EBED 66%);
        background: -o-linear-gradient(bottom, rgba(232,235,237,0) 0%, #E8EBED 66%);
        background: linear-gradient(to top, rgba(232,235,237,0) 0%, #E8EBED 66%);
    }
    
    .dash-edit-content {
        position: relative;
        height: 100%;
        padding-left: 220px;
    }
</style>
<template>
    <div style="height:100%;">
        <div class="header-wraper clearfix">
            <logo></logo>
            <div class="nav-wrap clearfix">
                <Menu mode="horizontal" active-name="1" @on-select="onSelectMainMenu">
                    <div>
                        <Menu-item name="1">
                            <span>组件</span>
                        </Menu-item>
                        <!--<Menu-item name="2">
                            <span>工作表</span>
                        </Menu-item>
                        <Menu-item name="3">
                            <span>数据源</span>
                        </Menu-item>-->
                    </div>
                </Menu>
            </div>
            <div class="hd-set">
                <ul class="clearfix">
                    <userGuide></userGuide>
                    <userInfo></userInfo>
                    <warnInfo></warnInfo>
                    <messageCenter></messageCenter>
                    <systemSetting></systemSetting>
                    <helperCenter></helperCenter>
                    <logoutController></logoutController>
                </ul>
            </div>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import logo from './views/toolBar/logo/logo.vue';
    import userGuide from './views/toolBar/userGuide/userGuide.vue';
    import warnInfo from './views/toolBar/warnInfo/warnInfo.vue';
    import messageCenter from './views/toolBar/messageCenter/messageCenter.vue';
    import userInfo from './views/toolBar/userInfo/userInfo.vue';
    import helperCenter from './views/toolBar/helperCenter/helperCenter.vue';
    import logoutController from './views/toolBar/logoutController/logoutController.vue';
    import systemSetting from './views/toolBar/systemSetting/systemSetting.vue';

    export default {
        data() 
        {
            return {
               
            };
        },
        methods:
        {
            onSelectMainMenu(name)
            {
                switch(name)
                {
                    case "1":
                    {
                        if(this.$route.path != "/dashBoard")
                        {
                            this.$router.push({ path: "/dashBoard" });
                        }
                        break;
                    }
                    case "2":
                    {
                        if(this.$route.path != "/workTable")
                        {
                            this.$router.push({ path: "/workTable" });
                        }
                        break;
                    }
                    case "3":
                    {
                        if(this.$route.path != "/dataSource")
                        {
                            this.$router.push({ path: "/dataSource" });
                        }
                        break;
                    }
                    default:
                    {
                        break;
                    }
                }
            }
        },
        mounted() 
        {
            this.$nextTick(function () 
            {
                //根据分辨率调整界面高度
                var screenHeight = screen.height;
                jQuery("body").css("height",screenHeight+"px");
            })
        },
        components:
        {
            userGuide,
            warnInfo,
            messageCenter,
            userInfo,
            helperCenter,
            logoutController,
            systemSetting,
            logo
        }
    };
</script>
