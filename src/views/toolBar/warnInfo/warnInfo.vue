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
    .font-f-c
    {
        color: #5182E4;
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
    .font-w-b
    {
        font-weight: 700;
    }
    .hd-set .hd-set-item .view-header-seperate-line 
    {
        top: 25px;
        left: auto;
        right: -14px;
        margin-top: 0;
    }
    .view-header-seperate-line 
    {
        background: rgba(81,130,228,.2);
    }
    .view-header-seperate-line 
    {
        position: absolute;
        top: 50%;
        left: 80px;
        width: 2px;
        height: 15px;
        margin-top: -3px;
    }
    .font-f-g
    {
        color:#aaa;
    }
</style>
<template>
    <li class="hd-set-item font-f-g">
        <Badge dot class="icon-wrap" title="报警消息">
            <Icon type="ios-bell-outline" size="20"></Icon>
        </Badge>
    </li>
</template>
<script>

</script>