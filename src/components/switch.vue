<style scoped>
</style>
<template>
    <div>
    <article><h1>Switch 开关</h1> <div class="anchor"><!----> <h2 id="概述">概述</h2> <!----> <!----> <!----> <!---->  <a href="#概述">#</a></div> <p>在两种状态间切换时用到的开关选择器。</p> <blockquote style="color: rgb(237, 63, 20);">注意：没有使用 <a href="/docs/guide/iview-loader" class="">iview-loader</a> 时，必须使用 <code>i-switch</code> 标签。</blockquote> <div class="anchor"><!----> <h2 id="代码示例">代码示例</h2> <!----> <!----> <!----> <!---->  <a href="#代码示例">#</a></div> <div class="example ivu-row" id="基本"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div><i-switch v-model="switch1" @on-change="change"></i-switch></div></div> <header class="example-header"><span>
                基本
                <a href="#基本">#</a></span></header> <div class="example-desc"><div><p>基本用法，状态切换时会触发事件。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 148px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Switch</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"switch1"</span> @<span class="hljs-attribute">on-change</span>=<span class="hljs-value">"change"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Switch</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                switch1: <span class="hljs-literal">false</span>
            }  
        },
        methods: {
            change (status) {
                <span class="hljs-keyword">this</span>.$Message.info(<span class="hljs-string">'开关状态：'</span> + status);
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="尺寸"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>
    <i-switch size="large"></i-switch>
    <i-switch></i-switch>
    <i-switch size="small"></i-switch>
    </div></div> <header class="example-header"><span>
                尺寸
                <a href="#尺寸">#</a></span></header> <div class="example-desc"><div><p>设置<code>size</code>为 <code>large</code> 或 <code>small</code> 使用大号和小号的开关。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 152px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Switch</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"large"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Switch</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Switch</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Switch</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Switch</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"small"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Switch</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="文字和图标"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>
    <i-switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
    </i-switch>
    <i-switch>
        <Icon type="android-done" slot="open"></Icon>
        <Icon type="android-close" slot="close"></Icon>
    </i-switch>
    <br><br>
    <i-switch size="large">
        <span slot="open">开启</span>
        <span slot="close">关闭</span>
    </i-switch>
    <i-switch size="large">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
    </i-switch></div></div> <header class="example-header"><span>
                文字和图标
                <a href="#文字和图标">#</a></span></header> <div class="example-desc"><div><p>自定义内容，建议如果使用2个汉字，将开关尺寸设置为 large。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 190px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Switch</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"open"</span>&gt;</span>开<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"close"</span>&gt;</span>关<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Switch</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Switch</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"android-done"</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"open"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"android-close"</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"close"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Switch</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Switch</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"large"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"open"</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"close"</span>&gt;</span>关闭<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Switch</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Switch</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"large"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"open"</span>&gt;</span>ON<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"close"</span>&gt;</span>OFF<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Switch</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="不可用"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    <i-switch :disabled="disabled"></i-switch>
    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
</div></div> <header class="example-header"><span>
                不可用
                <a href="#不可用">#</a></span></header> <div class="example-desc"><div><p>禁用开关。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 155px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Switch</span> <span class="hljs-attribute">:disabled</span>=<span class="hljs-value">"disabled"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Switch</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"disabled = !disabled"</span>&gt;</span>Toggle Disabled<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                disabled: <span class="hljs-literal">true</span>
            }
        },
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="api"><div class="anchor"><!----> <h2 id="API">API</h2> <!----> <!----> <!----> <!---->  <a href="#API">#</a></div> <div class="anchor"><!----> <!----> <h3 id="Switch_props">Switch props</h3> <!----> <!----> <!---->  <a href="#Switch_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>value</td> <td>指定当前是否选中，可以使用 v-model 双向绑定数据</td> <td>Boolean</td> <td>false</td></tr> <tr><td>size</td> <td>开关的尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不写。建议开关如果使用了2个汉字的文字，使用 large。</td> <td>String</td> <td>-</td></tr> <tr><td>disabled</td> <td>禁用开关</td> <td>Boolean</td> <td>false</td></tr> <tr><td>true-value</td> <td>选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td> <td>String, Number, Boolean</td> <td>true</td></tr> <tr><td>false-value</td> <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td> <td>String, Number, Boolean</td> <td>false</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Switch_events">Switch events</h3> <!----> <!----> <!---->  <a href="#Switch_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-change</td> <td>开关变化时触发，返回当前的状态</td> <td>true | false</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Switch_slot">Switch slot</h3> <!----> <!----> <!---->  <a href="#Switch_slot">#</a></div> <table><thead><tr><th>名称</th> <th>说明</th></tr></thead> <tbody><tr><td>open</td> <td>自定义显示打开时的内容</td></tr> <tr><td>close</td> <td>自定义显示关闭时的内容</td></tr></tbody></table></div></article>
    </div>
</template>
<script>
    export default 
    {
        data () {
            return {
                switch1: false,
                disabled: true
            }  
        },
        methods: {
            change (status) {
                this.$Message.info('开关状态：' + status);
            }
        }
    }
</script>