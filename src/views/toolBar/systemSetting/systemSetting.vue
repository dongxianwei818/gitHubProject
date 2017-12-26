<style scoped>
	.hd-set .hd-set-item 
	{
        float: left;
        position: relative;
        height: 64px;
        line-height: 64px;
        cursor: pointer;
        text-align: center;
        margin:0 8px;
        font-weight: 700;
    }
    .icon-wrap 
    {
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        display: inline-block;
        vertical-align: middle;
    }
    .font-f-g
    {
        color:#aaa;
    }
    .user-setting
    {
        background: #fff;
        box-shadow: 0 0 6px 0 rgba(0,0,0,.1), 0 10px 12px 0 rgba(170,182,206,.36);
        position: absolute;
        width: 284px;
        height: auto;
        right: -100px;
        padding: 12px 0 12px 24px;
    }
    .user-setting ul li:not(:last-child)
    {
        border-bottom: 1px solid rgba(0,0,0,.1);
    }
    .user-setting ul li
    {
        padding: 8px 0;
        line-height: 32px;
    }
    .user-setting-topbar
    {
        line-height: 18px;
        margin-bottom: 15px;
    }
    .p10
    {
        padding-left:10px;
        color:#aaa;
    }
    .pr
    {
        position: relative;
    }
    .label_update
    {
        display: block;
        padding: 0 24px;
        position: relative;
        margin-left: -24px;
        color: rgba(10,18,32,.64);
    }
    .label_update:hover
    {
        color:rgba(10,18,32,.87);
        background: #f3f5f6;
    }
    .arrow-top-model
    {
        width: 0;
        height: 0;
        position: absolute;
        margin: -20px 0px -8px 10px;
        z-index: 10;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #FFF;
    }
    .user-setting-topbar>i,.user-setting-topbar>span
    {
        float:left;
    }
    .pr.label_update>span
    {
        float:left;
    }
    .a_link
    {
        margin-top:5px !important;
    }
    .clear
    { 
        clear:both
    } 
</style>

<template>
    <li class="hd-set-item font-f-g">
        <span class="icon-wrap" title="系统设置" @click="showSettingPanel">
           <Icon type="gear-a" size="20"></Icon>
        </span>
        <div class="user-setting" v-if="showPanelFlag">
            <i class="arrow-top-model div-hide"></i>
            <ul>
                <li>
                   <div class="user-setting-topbar">
                       <Icon type="aperture" size="21"></Icon>
                       <span class="p10">主题</span>
                   </div> 
                </li>
                <li>
                    <a href="#" class="pr label_update">
                        <Badge dot class="a_link">
                            <Icon type="ios-refresh" size="21"></Icon>
                        </Badge>
                        <span class="p10">产品更新日志</span>
                        <div class="clear"></div>
                    </a>
                </li>
                <li>
                    <a href="#" class="pr label_update">
                        <Badge class="a_link">
                            <Icon type="ios-refresh" size="21"></Icon>
                        </Badge>
                        <span class="p10">离线任务</span>
                        <div class="clear"></div>
                    </a>
                </li>
            </ul>
        </div>
    </li>
</template>

<script>

export default {
    data()
    {
        return {
            showPanelFlag:false
        }
    },
    methods:
    {
        showSettingPanel()
        {
            this.showPanelFlag = !this.showPanelFlag;
        }
    }
}

</script>