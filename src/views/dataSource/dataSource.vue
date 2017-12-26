<style scoped>
    .side-nouse-wrap 
    {
        height: 28px;
        width: calc(100% + 3px);
        position: absolute;
        background: -webkit-linear-gradient(bottom, rgba(232,235,237,0) 0%, #E8EBED 66%);
        background: -o-linear-gradient(bottom, rgba(232,235,237,0) 0%, #E8EBED 66%);
        background: linear-gradient(to top, rgba(232,235,237,0) 0%, #E8EBED 66%);
    }
    .dash-sidebar .drag-btn {
        position: absolute;
        top: 0;
        right: -9px;
        bottom: 0;
        width: 9px;
        cursor: col-resize;
        border-radius: 2px;
    }
    .drag-btn:after {
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
    .dash-sidebar .drag-btn:after {
        position: absolute;
        top: 50%;
        left: 3px;
        content: '';
        width: 3px;
        height: 12px;
        margin: -6px 0 0;
        border-radius: 2px;
    }
    .dash-sidebar .drag-btn:after {
        background: rgba(0,0,0,.1);
        box-shadow: none;
    }
    .create-block{
        height: 32px;
        padding-left: 16px;
        position: relative;
        margin-top: 16px;
        z-index: 10;
    }
    .create-block>p {
        color: rgba(10,18,32,.64);
    }
    .create-block>p {
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
    }
</style>
<template>
    <div class="side-nouse-wrap">
        <a href="#" class="drag-btn"></a>
        <div class="create-block">
            <p class="fl">数据源</p>
        </div>
        <div class="project-list">
            <Tree :data="baseData" @on-select-change="onSelectChange"></Tree>
        </div>
    </div>
</template>
<script>
    export default 
    {
        data()
        {
            return {
                baseData: 
                [
                    {
                        expand: true,
                        title: '仪表盘示例',
                        children: 
                        [
                            {
                                title: '网站订单分析',
                                expand: true                        
                            }, 
                            {
                                title: '销售业绩报表',
                                expand: true                        
                            },
                            {
                                title: '测试试示例',
                                expand: true,
                                children: 
                                [{
                                    title: '示例2',
                                }]
                            }
                        ]
                    }
                ]
            }
        },
        methods: 
        {
            onSelectChange() 
            {
                alert("dashBoard")
            }
        }
    };
</script>