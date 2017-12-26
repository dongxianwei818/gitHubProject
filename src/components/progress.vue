<style scoped>
</style>
<template>
    <div class="wrapper-content ivu-article"><article><h1>Progress 进度条</h1> <div class="anchor"><!----> <h2 id="概述">概述</h2> <!----> <!----> <!----> <!---->  <a href="#概述">#</a></div> <p>展示操作或任务的当前进度，比如上传文件。</p> <div class="ivu-alert ivu-alert-info ivu-alert-with-icon" style="margin-top: 16px;"><span class="ivu-alert-icon"><i class="ivu-icon ivu-icon-information-circled"></i></span> <span class="ivu-alert-message">注意：非 template/render 模式下，需使用 <code>i-progress</code>。</span> <span class="ivu-alert-desc"></span> <!----></div> <div class="anchor"><!----> <h2 id="代码示例">代码示例</h2> <!----> <!----> <!----> <!---->  <a href="#代码示例">#</a></div> <div class="example ivu-row" id="基本用法"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div><div class="ivu-progress ivu-progress-normal ivu-progress-show-info"><div class="ivu-progress-outer"><div class="ivu-progress-inner"><div class="ivu-progress-bg" style="width: 25%; height: 10px;"></div></div></div> <span class="ivu-progress-text"><span class="ivu-progress-text-inner">
                25%
            </span></span></div> <div class="ivu-progress ivu-progress-active ivu-progress-show-info"><div class="ivu-progress-outer"><div class="ivu-progress-inner"><div class="ivu-progress-bg" style="width: 45%; height: 10px;"></div></div></div> <span class="ivu-progress-text"><span class="ivu-progress-text-inner">
                45%
            </span></span></div> <div class="ivu-progress ivu-progress-wrong ivu-progress-show-info"><div class="ivu-progress-outer"><div class="ivu-progress-inner"><div class="ivu-progress-bg" style="width: 65%; height: 10px;"></div></div></div> <span class="ivu-progress-text"><span class="ivu-progress-text-inner"><i class="ivu-icon ivu-icon-ios-close"></i></span></span></div> <div class="ivu-progress ivu-progress-success ivu-progress-show-info"><div class="ivu-progress-outer"><div class="ivu-progress-inner"><div class="ivu-progress-bg" style="width: 100%; height: 10px;"></div></div></div> <span class="ivu-progress-text"><span class="ivu-progress-text-inner"><i class="ivu-icon ivu-icon-ios-checkmark"></i></span></span></div> <div class="ivu-progress ivu-progress-normal"><div class="ivu-progress-outer"><div class="ivu-progress-inner"><div class="ivu-progress-bg" style="width: 25%; height: 10px;"></div></div></div> <!----></div></div></div> <header class="example-header"><span>
                基本用法
                <a href="#基本用法">#</a></span></header> <div class="example-desc"><div><p>处在不同状态下的进度条，当 percent 为 100 时，自动将状态置为 success。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 215px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Progress</span> <span class="hljs-attribute">:percent</span>=<span class="hljs-value">"25"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Progress</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Progress</span> <span class="hljs-attribute">:percent</span>=<span class="hljs-value">"45"</span> <span class="hljs-attribute">status</span>=<span class="hljs-value">"active"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Progress</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Progress</span> <span class="hljs-attribute">:percent</span>=<span class="hljs-value">"65"</span> <span class="hljs-attribute">status</span>=<span class="hljs-value">"wrong"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Progress</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Progress</span> <span class="hljs-attribute">:percent</span>=<span class="hljs-value">"100"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Progress</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Progress</span> <span class="hljs-attribute">:percent</span>=<span class="hljs-value">"25"</span> <span class="hljs-attribute">hide-info</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Progress</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="垂直方向"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div><div style="height: 100px;"><div class="ivu-progress ivu-progress-normal ivu-progress-show-info ivu-progress-vertical"><div class="ivu-progress-outer"><div class="ivu-progress-inner"><div class="ivu-progress-bg" style="height: 25%; width: 10px;"></div></div></div> <span class="ivu-progress-text"><span class="ivu-progress-text-inner">
                25%
            </span></span></div> <div class="ivu-progress ivu-progress-active ivu-progress-show-info ivu-progress-vertical"><div class="ivu-progress-outer"><div class="ivu-progress-inner"><div class="ivu-progress-bg" style="height: 45%; width: 10px;"></div></div></div> <span class="ivu-progress-text"><span class="ivu-progress-text-inner">
                45%
            </span></span></div> <div class="ivu-progress ivu-progress-wrong ivu-progress-show-info ivu-progress-vertical"><div class="ivu-progress-outer"><div class="ivu-progress-inner"><div class="ivu-progress-bg" style="height: 65%; width: 10px;"></div></div></div> <span class="ivu-progress-text"><span class="ivu-progress-text-inner"><i class="ivu-icon ivu-icon-ios-close"></i></span></span></div> <div class="ivu-progress ivu-progress-success ivu-progress-show-info ivu-progress-vertical"><div class="ivu-progress-outer"><div class="ivu-progress-inner"><div class="ivu-progress-bg" style="height: 100%; width: 10px;"></div></div></div> <span class="ivu-progress-text"><span class="ivu-progress-text-inner"><i class="ivu-icon ivu-icon-ios-checkmark"></i></span></span></div> <div class="ivu-progress ivu-progress-normal ivu-progress-vertical"><div class="ivu-progress-outer"><div class="ivu-progress-inner"><div class="ivu-progress-bg" style="height: 25%; width: 10px;"></div></div></div> <!----></div></div></div></div> <header class="example-header"><span>
                垂直方向
                <a href="#垂直方向">#</a></span></header> <div class="example-desc"><div><p>设置属性 <code>vertical</code> 将以垂直方向显示。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 228px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"height: 100px;"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Progress</span> <span class="hljs-attribute">vertical</span> <span class="hljs-attribute">:percent</span>=<span class="hljs-value">"25"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Progress</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Progress</span> <span class="hljs-attribute">vertical</span> <span class="hljs-attribute">:percent</span>=<span class="hljs-value">"45"</span> <span class="hljs-attribute">status</span>=<span class="hljs-value">"active"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Progress</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Progress</span> <span class="hljs-attribute">vertical</span> <span class="hljs-attribute">:percent</span>=<span class="hljs-value">"65"</span> <span class="hljs-attribute">status</span>=<span class="hljs-value">"wrong"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Progress</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Progress</span> <span class="hljs-attribute">vertical</span> <span class="hljs-attribute">:percent</span>=<span class="hljs-value">"100"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Progress</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Progress</span> <span class="hljs-attribute">vertical</span> <span class="hljs-attribute">:percent</span>=<span class="hljs-value">"25"</span> <span class="hljs-attribute">hide-info</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Progress</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="配合外部组件使用"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    <Progress :percent="percent"></Progress>
    <ButtonGroup size="large">
        <Button icon="ios-plus-empty" @click="add"></Button>
        <Button icon="ios-minus-empty" @click="minus"></Button>
    </ButtonGroup>
</div></div> <header class="example-header"><span>
                配合外部组件使用
                <a href="#配合外部组件使用">#</a></span></header> <div class="example-desc"><div><p>通过数据的联动和逻辑控制，实现动态效果。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 178px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Progress</span> <span class="hljs-attribute">:percent</span>=<span class="hljs-value">"percent"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Progress</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">ButtonGroup</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"large"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-plus-empty"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"add"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-minus-empty"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"minus"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">ButtonGroup</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                percent: <span class="hljs-number">0</span>
            }
        },
        methods: {
            add () {
                <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.percent &gt;= <span class="hljs-number">100</span>) {
                    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
                }
                <span class="hljs-keyword">this</span>.percent += <span class="hljs-number">10</span>;
            },
            minus () {
                <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.percent &lt;= <span class="hljs-number">0</span>) {
                    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
                }
                <span class="hljs-keyword">this</span>.percent -= <span class="hljs-number">10</span>;
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="自定义更多样式"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div><div class="ivu-progress ivu-progress-normal ivu-progress-show-info"><div class="ivu-progress-outer"><div class="ivu-progress-inner"><div class="ivu-progress-bg" style="width: 25%; height: 5px;"></div></div></div> <span class="ivu-progress-text"><span class="ivu-progress-text-inner">
                25%
            </span></span></div> <div class="ivu-progress ivu-progress-success ivu-progress-show-info"><div class="ivu-progress-outer"><div class="ivu-progress-inner"><div class="ivu-progress-bg" style="width: 100%; height: 10px;"></div></div></div> <span class="ivu-progress-text"><i class="ivu-icon ivu-icon-checkmark-circled"></i> <span>成功</span></span></div></div></div> <header class="example-header"><span>
                自定义更多样式
                <a href="#自定义更多样式">#</a></span></header> <div class="example-desc"><div><p>通过自定义<code>slot</code>和属性<code>stroke-width</code>改变进度条效果。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 165px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Progress</span> <span class="hljs-attribute">:percent</span>=<span class="hljs-value">"25"</span> <span class="hljs-attribute">:stroke-width</span>=<span class="hljs-value">"5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Progress</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Progress</span> <span class="hljs-attribute">:percent</span>=<span class="hljs-value">"100"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"checkmark-circled"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>成功<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Progress</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="api"><div class="anchor"><!----> <h2 id="API">API</h2> <!----> <!----> <!----> <!---->  <a href="#API">#</a></div> <div class="anchor"><!----> <!----> <h3 id="Progress_props">Progress props</h3> <!----> <!----> <!---->  <a href="#Progress_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>percent</td> <td>百分比</td> <td>Number</td> <td>0</td></tr> <tr><td>status</td> <td>状态，可选值为<code>normal</code>、<code>active</code>、<code>wrong</code>、<code>success</code></td> <td>String</td> <td>normal</td></tr> <tr><td>stroke-width</td> <td>进度条的线宽，单位 px</td> <td>Number</td> <td>10</td></tr> <tr><td>hide-info</td> <td>隐藏数值或状态图标</td> <td>Boolean</td> <td>false</td></tr> <tr><td>vertical</td> <td>是否在垂直方向显示</td> <td>Boolean</td> <td>false</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Progress_slot">Progress slot</h3> <!----> <!----> <!---->  <a href="#Progress_slot">#</a></div> <table><thead><tr><th>名称</th> <th>说明</th></tr></thead> <tbody><tr><td>无</td> <td>自定义显示状态内容</td></tr></tbody></table></div></article></div>
</template>
<script>
    export default 
    {
        data () {
            return {
                percent: 0
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }

        }
    }

</script>