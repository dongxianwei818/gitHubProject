<style scoped>
    .dash-sidebar
    {
        position: relative;
        z-index: 1000;
        float:left;
        left: 0;
        height: calc(100% - 64px);
        width: 220px;
        background: #f4f7f9;
        box-shadow: 2px 0 3px 0 rgba(0,0,0,.1), 1px 0 1px 0 rgba(0,0,0,.1);
        overflow-y: auto;
        overflow-x: hidden;
        height:100%;
    }
    .side-nouse-wrap 
    {
        height: 28px;
        width: calc(100% + 3px);
        position: absolute;
        background: -webkit-linear-gradient(bottom, rgba(232,235,237,0) 0%, #E8EBED 66%);
        background: -o-linear-gradient(bottom, rgba(232,235,237,0) 0%, #E8EBED 66%);
        background: linear-gradient(to top, rgba(232,235,237,0) 0%, #E8EBED 66%);
    }
    .dash-sidebar .drag-btn 
    {
        position: absolute;
        top: 0;
        right: -9px;
        bottom: 0;
        width: 9px;
        cursor: col-resize;
        border-radius: 2px;
    }
    .drag-btn:after 
    {
        content: "";
        width: 3px;
        height: 12px;
        border-radius: 2px;
        position: absolute;
        top: 50%;
        left: 3px;
        margin: -38px 0 0;
        background: rgba(0,0,0,.1);
        box-shadow: none;
    }
    .dash-sidebar .drag-btn:after 
    {
        position: absolute;
        top: 50%;
        left: 3px;
        content: '';
        width: 3px;
        height: 12px;
        margin: -6px 0 0;
        border-radius: 2px;
    }
    .dash-sidebar .drag-btn:after 
    {
        background: rgba(0,0,0,.1);
        box-shadow: none;
    }
    .create-block
    {
        height: 32px;
        padding-left: 16px;
        position: relative;
        margin-top: 16px;
        z-index: 10;
    }
    .create-block>p 
    {
        color: rgba(10,18,32,.64);
    }
    .create-block>p 
    {
        line-height: 32px;
        font-weight: 700;
        display: inline-block;
    }
    .fl
    {
        float:left;
    }
    .project-list 
    {
        position: relative;
        overflow-x: hidden;
        overflow-y: auto;
        width: 100%;
        margin-left: 20px;
    }
    .dash-content
    {
        float:left;
        width: calc(100% - 220px);
        overflow:auto;
        padding-left: 10px;
        height:95%;
    }
    .leftTool
    {
        float:right;
    }
    .leftTool>button
    {
        border: none;
    }
    .searchDiv
    {
        height:100px;
        top: 25px;
        position: relative;
        background-color: #FFF;
        box-shadow: 0 0 6px 0 rgba(0,0,0,.1), 0 10px 12px 0 rgba(170,182,206,.36);
    }
    .searchDiv>input
    {
        color: rgba(10,18,32,.87);
        box-shadow: 0 -1px 0 0 rgba(81,130,228,.5) inset;
        background: url(https://m1.bdp.cn/static/theme/light/svg/aside/search_149eae8.svg) no-repeat scroll left center;
        margin: 2px 16px 0;
        height: 24px;
        border: 0;
        padding-left: 24px;
        outline:none;
    }
    input[type=text]:focus
    {
        outline:none;
        box-shadow: 0 -2px 0 0 #5182e4 inset;
    }
    #mainView
    {
        overflow:auto;
    }
    iframe
    {
        height:98%;
        width:100%;
    }
</style>
<template>
    <div class="side-nouse-wrap">
        <div class="dash-sidebar">
            <a href="#" class="drag-btn"></a>
            <div class="create-block">
                <p class="fl">组件列表</p>
                <!--<div class="leftTool">
                    <Button id="leftBarSearch" shape="circle" type="dashed" icon="ios-search" @click="leftBarSearch"></Button>
                    <Button shape="circle" type="dashed" icon="ios-plus-empty"></Button>
                    <Button shape="circle" type="dashed" icon="android-more-vertical"></Button>
                </div>-->
                <div v-if="showSearchDiv" class="searchDiv" id="searchDivContainer">
                    <input type="text" icon="ios-search" ></input>
                </div>
            </div>
            <div class="create-block" style="margin-top: 0px;">
                <div class="leftMenuItem"><a href="javascript:void(0)" onclick="window.showFrontFrame()">框架概览</a></div>
                <div class="leftMenuItem"><router-link to="/dashBoard/button" onclick="window.showComponentFrame()">Button 按钮</router-link></div>
                <div class="leftMenuItem"><router-link to="/dashBoard/icon" onclick="window.showComponentFrame()">Icon 图标</router-link></div>
                <div class="leftMenuItem"><router-link to="/dashBoard/font" onclick="window.showComponentFrame()">Font 字体</router-link></div>
                <div class="leftMenuItem"><router-link to="/dashBoard/color" onclick="window.showComponentFrame()">Color 色彩</router-link></div>
                <div class="leftMenuItem"><router-link to="/dashBoard/input" onclick="window.showComponentFrame()">Input 输入框</router-link></div>
                <div class="leftMenuItem"><router-link to="/dashBoard/radio" onclick="window.showComponentFrame()">Radio 单选框</router-link></div>
                <div class="leftMenuItem"><router-link to="/dashBoard/checkbox" onclick="window.showComponentFrame()">Checkbox 多选框</router-link></div>
                <div class="leftMenuItem"><router-link to="/dashBoard/switch" onclick="window.showComponentFrame()">Switch 开关</router-link></div>
                <div class="leftMenuItem"><router-link to="/dashBoard/autoComplete" onclick="window.showComponentFrame()">AutoComplete 自动完成</router-link></div>
                <div class="leftMenuItem"><router-link to="/dashBoard/slider" onclick="window.showComponentFrame()">Slider 滑块</router-link></div>
                <div class="leftMenuItem"><router-link to="/dashBoard/datePicker" onclick="window.showComponentFrame()">DatePicker 日期选择器</router-link></div>
                <div class="leftMenuItem"><router-link to="/dashBoard/timePicker" onclick="window.showComponentFrame()">TimePicker 时间选择器</router-link></div>
                <div class="leftMenuItem"><router-link to="/dashBoard/alert" onclick="window.showComponentFrame()">Alert 警告提示</router-link></div>
                <div class="leftMenuItem"><router-link to="/dashBoard/message" onclick="window.showComponentFrame()">Message 全局提示</router-link></div>
                <div class="leftMenuItem"><router-link to="/dashBoard/notice" onclick="window.showComponentFrame()">Notice 通知提醒</router-link></div>
                <div class="leftMenuItem"><router-link to="/dashBoard/modal" onclick="window.showComponentFrame()">Modal 对话框</router-link></div>
                <div class="leftMenuItem"><router-link to="/dashBoard/progress" onclick="window.showComponentFrame()">Progress 进度条</router-link></div>
                <div class="leftMenuItem"><router-link to="/dashBoard/leftMenu" onclick="window.showComponentFrame()">菜单名称</router-link></div>
            </div>
        </div>
        <div class="dash-content">
            <router-view v-show="showMainViewComponent"></router-view>
            <iframe v-show="!showMainViewComponent"></iframe>
        </div>
    </div>
</template>
<script>
    export default 
    {
        data()
        {
            return {
                showSearchDiv:false,
                showMainViewComponent:false,
            }
        },
        methods: 
        {
            showFrontFrame()    //展示前端框架
            {
                this.showMainViewComponent = false;
                var path = "";
                if(location.port)
                {
                    path = location.origin+"/"+"markdown.html";
                }
                else
                {
                    var href = location.href;
                    path = href.replace(/index/, "markdown");
                }
                
                jQuery("iframe").attr("src", path);
            },
            showComponentFrame()
            {
                this.showMainViewComponent = true;
            },
            onSelectChange(obj)
            {
                var leaf = obj[0].leaf;
                if(leaf)    //叶子节点重新装载路由
                {
                    var id = obj[0].id
                    this.$router.push("/dashBoard/" + id);
                }
            },
            leftBarSearch()
            {
                this.showSearchDiv = !this.showSearchDiv;
            },
            hideLeftBarSearch()
            {
                var className = event.target.className;
                if(className == "searchDiv")
                {
                    return;
                }
                className = event.target.parentElement.className;
                if(className == "searchDiv")
                {
                    return;
                }
                // var divType = event.target.
                this.showSearchDiv = false;
            }
        },
        mounted()
        {
            this.$nextTick(function ()
            {
                var self = this;
                $(document).click(function()
                {
                    // self.hideLeftBarSearch();
                });
                window.showFrontFrame = this.showFrontFrame;
                window.showComponentFrame = this.showComponentFrame;
            })
        }
    };
</script>