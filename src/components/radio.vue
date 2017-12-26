<style scoped>
    
</style>
<template>
    <div>
        <article data-v-b171929c=""><h1 data-v-b171929c="">Radio 单选框</h1> <div data-v-b171929c="" class="anchor"><!----> <h2 id="概述">概述</h2> <!----> <!----> <!----> <!---->  <a href="#概述">#</a></div> <p data-v-b171929c="">基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。</p> <div data-v-b171929c="" class="anchor"><!----> <h2 id="代码示例">代码示例</h2> <!----> <!----> <!----> <!---->  <a href="#代码示例">#</a></div> <div data-v-b171929c="" class="example ivu-row" id="单独使用"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div data-v-b171929c="">
        <Radio v-model="single">Radio</Radio><p data-v-b171929c="" class="demo-data">{{single}}</p></div></div> <header class="example-header"><span>
                单独使用
                <a href="#单独使用">#</a></span></header> <div class="example-desc"><div data-v-b171929c=""><p data-v-b171929c="">使用 v-model 可以双向绑定数据。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 168px;"><div style="opacity: 1;"><div data-v-3802a467="" data-v-b171929c=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"single"</span>&gt;</span>Radio<span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                single: <span class="hljs-literal">false</span>
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div data-v-b171929c="" class="example ivu-row" id="组合使用"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div data-v-b171929c=""><RadioGroup v-model="phone">
        <Radio label="apple">
            <Icon type="social-apple"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio label="android">
            <Icon type="social-android"></Icon>
            <span>Android</span>
        </Radio>
        <Radio label="windows">
            <Icon type="social-windows"></Icon>
            <span>Windows</span>
        </Radio>
    </RadioGroup> 
    <p data-v-b171929c="" class="demo-data">{{phone}}</p>
    <RadioGroup v-model="animal">
        <Radio label="金斑蝶"></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
    </RadioGroup>
    <p data-v-b171929c="" class="demo-data">{{animal}}</p>
    </div></div> <header class="example-header"><span>
                组合使用
                <a href="#组合使用">#</a></span></header> <div class="example-desc"><div data-v-b171929c=""><p data-v-b171929c="">使用<code data-v-b171929c="">RadioGroup</code>实现一组互斥的选项组。在组合使用时，<code data-v-b171929c="">Radio</code> 使用 <code data-v-b171929c="">label</code> 来自动判断。每个 Radio 的内容可以自定义，如不填写则默认使用 label 的值。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 240px;"><div style="opacity: 1;"><div data-v-3802a467="" data-v-b171929c=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">RadioGroup</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"phone"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"apple"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"social-apple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"android"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"social-android"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Android<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"windows"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"social-windows"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Windows<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">RadioGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">RadioGroup</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"animal"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"金斑蝶"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"爪哇犀牛"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"印度黑羚"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">RadioGroup</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                phone: <span class="hljs-string">'apple'</span>,
                animal: <span class="hljs-string">'爪哇犀牛'</span>
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div data-v-b171929c="" class="example ivu-row" id="不可用"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div data-v-b171929c=""><Radio v-model="disabledSingle" disabled>Radio</Radio> <p data-v-b171929c="" class="demo-data">{{disabledSingle}}</p> <div data-v-b171929c="" class="ivu-radio-group"><RadioGroup v-model="disabledGroup">
        <Radio label="金斑蝶" disabled></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
    </RadioGroup></div> <p data-v-b171929c="" class="demo-data">{{disabledGroup}}</p></div></div> <header class="example-header"><span>
                不可用
                <a href="#不可用">#</a></span></header> <div class="example-desc"><div data-v-b171929c=""><p data-v-b171929c="">通过设置<code data-v-b171929c="">disabled</code>属性来禁用单选框。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 222px;"><div style="opacity: 1;"><div data-v-3802a467="" data-v-b171929c=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"disabledSingle"</span> <span class="hljs-attribute">disabled</span>&gt;</span>Radio<span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">RadioGroup</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"disabledGroup"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"金斑蝶"</span> <span class="hljs-attribute">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"爪哇犀牛"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"印度黑羚"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">RadioGroup</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                disabledSingle: <span class="hljs-literal">true</span>,
                disabledGroup: <span class="hljs-string">'爪哇犀牛'</span>
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div data-v-b171929c="" class="example ivu-row" id="垂直"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div data-v-b171929c=""><div data-v-b171929c="" class="ivu-radio-group ivu-radio-group-vertical"> <RadioGroup v-model="vertical" vertical>
        <Radio label="apple">
            <Icon type="social-apple"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio label="android">
            <Icon type="social-android"></Icon>
            <span>Android</span>
        </Radio>
        <Radio label="windows">
            <Icon type="social-windows"></Icon>
            <span>Windows</span>
        </Radio>
    </RadioGroup></div></div></div> <header class="example-header"><span>
                垂直
                <a href="#垂直">#</a></span></header> <div class="example-desc"><div data-v-b171929c=""><p data-v-b171929c="">设置属性 <code data-v-b171929c="">vertical</code> 可以垂直显示，按钮样式下无效。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 218px;"><div style="opacity: 1;"><div data-v-3802a467="" data-v-b171929c=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">RadioGroup</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"vertical"</span> <span class="hljs-attribute">vertical</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"apple"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"social-apple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"android"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"social-android"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Android<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"windows"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"social-windows"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Windows<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">RadioGroup</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                vertical: <span class="hljs-string">'apple'</span>
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div data-v-b171929c="" class="example ivu-row" id="按钮样式"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div data-v-b171929c=""><div data-v-b171929c="" class="ivu-radio-group ivu-radio-group-button"><RadioGroup v-model="button1" type="button">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
    </RadioGroup></div> <p data-v-b171929c="" class="demo-data">{{button1}}</p> <div data-v-b171929c="" class="ivu-radio-group ivu-radio-group-button"><RadioGroup v-model="button2" type="button">
        <Radio label="北京"></Radio>
        <Radio label="上海" disabled></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
    </RadioGroup></div> <p data-v-b171929c="" class="demo-data">{{button2}}</p> <div data-v-b171929c="" class="ivu-radio-group ivu-radio-group-button"><RadioGroup v-model="button3" type="button">
        <Radio label="北京" disabled></Radio>
        <Radio label="上海" disabled></Radio>
        <Radio label="深圳" disabled></Radio>
        <Radio label="杭州" disabled></Radio>
    </RadioGroup></div> <p data-v-b171929c="" class="demo-data">北京</p></div></div> <header class="example-header"><span>
                按钮样式
                <a href="#按钮样式">#</a></span></header> <div class="example-desc"><div data-v-b171929c=""><p data-v-b171929c="">组合使用时可以设置属性<code data-v-b171929c="">type</code>为 button 来应用按钮的样式。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 311px;"><div style="opacity: 1;"><div data-v-3802a467="" data-v-b171929c=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">RadioGroup</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"button1"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"button"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"北京"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"上海"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"深圳"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"杭州"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">RadioGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">RadioGroup</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"button2"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"button"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"北京"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"上海"</span> <span class="hljs-attribute">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"深圳"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"杭州"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">RadioGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">RadioGroup</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"button3"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"button"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"北京"</span> <span class="hljs-attribute">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"上海"</span> <span class="hljs-attribute">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"深圳"</span> <span class="hljs-attribute">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"杭州"</span> <span class="hljs-attribute">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">RadioGroup</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                button1: <span class="hljs-string">'北京'</span>,
                button2: <span class="hljs-string">'北京'</span>,
                button3: <span class="hljs-string">'北京'</span>
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div data-v-b171929c="" class="example ivu-row" id="尺寸"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div data-v-b171929c=""><div data-v-b171929c="" class="ivu-radio-group ivu-radio-group-large ivu-radio-large ivu-radio-group-button"><RadioGroup v-model="button4" type="button" size="large">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
    </RadioGroup></div> <p data-v-b171929c="" class="demo-data">{{button4}}</p> <div data-v-b171929c="" class="ivu-radio-group ivu-radio-group-button"><RadioGroup v-model="button5" type="button">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
    </RadioGroup></div> <p data-v-b171929c="" class="demo-data">{{button5}}</p> <div data-v-b171929c="" class="ivu-radio-group ivu-radio-group-small ivu-radio-small ivu-radio-group-button"><RadioGroup v-model="button6" type="button" size="small">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
    </RadioGroup></div> <p data-v-b171929c="" class="demo-data">{{button6}}</p></div></div> <header class="example-header"><span>
                尺寸
                <a href="#尺寸">#</a></span></header> <div class="example-desc"><div data-v-b171929c=""><p data-v-b171929c="">通过设置属性<code data-v-b171929c="">size</code>为<code data-v-b171929c="">large</code>或<code data-v-b171929c="">small</code>将按钮样式设置为大和小尺寸，不设置为默认(中)尺寸。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 325px;"><div style="opacity: 1;"><div data-v-3802a467="" data-v-b171929c=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">RadioGroup</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"button4"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"button"</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"large"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"北京"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"上海"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"深圳"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"杭州"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">RadioGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">RadioGroup</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"button5"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"button"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"北京"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"上海"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"深圳"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"杭州"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">RadioGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">RadioGroup</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"button6"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"button"</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"small"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"北京"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"上海"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"深圳"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Radio</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"杭州"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">RadioGroup</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                button4: <span class="hljs-string">'北京'</span>,
                button5: <span class="hljs-string">'北京'</span>,
                button6: <span class="hljs-string">'北京'</span>
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div data-v-b171929c="" class="api"><div data-v-b171929c="" class="anchor"><!----> <h2 id="API">API</h2> <!----> <!----> <!----> <!---->  <a href="#API">#</a></div> <div data-v-b171929c="" class="anchor"><!----> <!----> <h3 id="Radio_props">Radio props</h3> <!----> <!----> <!---->  <a href="#Radio_props">#</a></div> <table data-v-b171929c=""><thead data-v-b171929c=""><tr data-v-b171929c=""><th data-v-b171929c="">属性</th> <th data-v-b171929c="">说明</th> <th data-v-b171929c="">类型</th> <th data-v-b171929c="">默认值</th></tr></thead> <tbody data-v-b171929c=""><tr data-v-b171929c=""><td data-v-b171929c="">value</td> <td data-v-b171929c="">只在单独使用时有效。可以使用 <code data-v-b171929c="">v-model</code> 双向绑定数据</td> <td data-v-b171929c="">Boolean</td> <td data-v-b171929c="">false</td></tr> <tr data-v-b171929c=""><td data-v-b171929c="">label </td> <td data-v-b171929c="">只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目</td> <td data-v-b171929c="">String | Number</td> <td data-v-b171929c="">-</td></tr> <tr data-v-b171929c=""><td data-v-b171929c="">disabled</td> <td data-v-b171929c="">是否禁用当前项</td> <td data-v-b171929c="">Boolean</td> <td data-v-b171929c="">false</td></tr> <tr data-v-b171929c=""><td data-v-b171929c="">size</td> <td data-v-b171929c="">单选框的尺寸，可选值为 <code data-v-b171929c="">large</code>、<code data-v-b171929c="">small</code>、<code data-v-b171929c="">default</code> 或者不设置</td> <td data-v-b171929c="">String</td> <td data-v-b171929c="">-</td></tr> <tr data-v-b171929c=""><td data-v-b171929c="">true-value</td> <td data-v-b171929c="">选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td> <td data-v-b171929c="">String, Number, Boolean</td> <td data-v-b171929c="">true</td></tr> <tr data-v-b171929c=""><td data-v-b171929c="">false-value</td> <td data-v-b171929c="">没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td> <td data-v-b171929c="">String, Number, Boolean</td> <td data-v-b171929c="">false</td></tr></tbody></table> <div data-v-b171929c="" class="anchor"><!----> <!----> <h3 id="Radio_events">Radio events</h3> <!----> <!----> <!---->  <a href="#Radio_events">#</a></div> <table data-v-b171929c=""><thead data-v-b171929c=""><tr data-v-b171929c=""><th data-v-b171929c="">事件名</th> <th data-v-b171929c="">说明</th> <th data-v-b171929c="">返回值</th></tr></thead> <tbody data-v-b171929c=""><tr data-v-b171929c=""><td data-v-b171929c="">on-change</td> <td data-v-b171929c="">在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发</td> <td data-v-b171929c="">...</td></tr></tbody></table> <div data-v-b171929c="" class="anchor"><!----> <!----> <h3 id="RadioGroup_props">RadioGroup props</h3> <!----> <!----> <!---->  <a href="#RadioGroup_props">#</a></div> <table data-v-b171929c=""><thead data-v-b171929c=""><tr data-v-b171929c=""><th data-v-b171929c="">属性</th> <th data-v-b171929c="">说明</th> <th data-v-b171929c="">类型</th> <th data-v-b171929c="">默认值</th></tr></thead> <tbody data-v-b171929c=""><tr data-v-b171929c=""><td data-v-b171929c="">value</td> <td data-v-b171929c="">指定当前选中的项目数据。可以使用 <code data-v-b171929c="">v-model</code> 双向绑定数据</td> <td data-v-b171929c="">String | Number</td> <td data-v-b171929c="">-</td></tr> <tr data-v-b171929c=""><td data-v-b171929c="">type</td> <td data-v-b171929c="">可选值为 button 或不填，为 button 时使用按钮样式</td> <td data-v-b171929c="">String</td> <td data-v-b171929c="">-</td></tr> <tr data-v-b171929c=""><td data-v-b171929c="">size</td> <td data-v-b171929c="">尺寸，可选值为<code data-v-b171929c="">large</code>、<code data-v-b171929c="">small</code>、<code data-v-b171929c="">default</code>或者不设置</td> <td data-v-b171929c="">String</td> <td data-v-b171929c="">-</td></tr> <tr data-v-b171929c=""><td data-v-b171929c="">vertical</td> <td data-v-b171929c="">是否垂直排列，按钮样式下无效</td> <td data-v-b171929c="">Boolean</td> <td data-v-b171929c="">false</td></tr></tbody></table> <div data-v-b171929c="" class="anchor"><!----> <!----> <h3 id="RadioGroup_events">RadioGroup events</h3> <!----> <!----> <!---->  <a href="#RadioGroup_events">#</a></div> <table data-v-b171929c=""><thead data-v-b171929c=""><tr data-v-b171929c=""><th data-v-b171929c="">事件名</th> <th data-v-b171929c="">说明</th> <th data-v-b171929c="">返回值</th></tr></thead> <tbody data-v-b171929c=""><tr data-v-b171929c=""><td data-v-b171929c="">on-change</td> <td data-v-b171929c="">在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发</td> <td data-v-b171929c="">...</td></tr></tbody></table></div></article>
    </div>
</template>
<script>
    export default 
    {
        data () {
            return {
                single: false,
                phone: 'apple',
                animal: '爪哇犀牛',
                disabledSingle: true,
                disabledGroup: '爪哇犀牛',
                vertical: 'apple',
                button1: '北京',
                button2: '北京',
                button3: '北京',
                button4: '北京',
                button5: '北京',
                button6: '北京'
            }
        }
    }
</script>