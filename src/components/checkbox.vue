<style scoped>
</style>
<template>
    <div>
        <article data-v-f5c51248=""><h1 data-v-f5c51248="">Checkbox 多选框</h1> <div data-v-f5c51248="" class="anchor"><!----> <h2 id="概述">概述</h2> <!----> <!----> <!----> <!---->  <a href="#概述">#</a></div> <p data-v-f5c51248="">基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。</p> <div data-v-f5c51248="" class="anchor"><!----> <h2 id="代码示例">代码示例</h2> <!----> <!----> <!----> <!---->  <a href="#代码示例">#</a></div> <div data-v-f5c51248="" class="example ivu-row" id="单独使用"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div data-v-f5c51248="">
        <Checkbox v-model="single">Checkbox</Checkbox> <p data-v-f5c51248="" class="demo-data">{{single}}</p></div></div> <header class="example-header"><span>
                单独使用
                <a href="#单独使用">#</a></span></header> <div class="example-desc"><div data-v-f5c51248=""><p data-v-f5c51248="">使用 v-model 可以双向绑定数据。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 300px;"><div style="opacity: 1;"><div data-v-3802a467="" data-v-f5c51248=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Checkbox</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"single"</span>&gt;</span>Checkbox<span class="hljs-tag">&lt;/<span class="hljs-title">Checkbox</span>&gt;</span>
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
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down" style="display: none;"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style=""></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div data-v-f5c51248="" class="example ivu-row" id="组合使用"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div data-v-f5c51248=""><div data-v-f5c51248="" class="ivu-checkbox-group">
<CheckboxGroup v-model="social">
        <Checkbox label="twitter">
            <Icon type="social-twitter"></Icon>
            <span>Twitter</span>
        </Checkbox>
        <Checkbox label="facebook">
            <Icon type="social-facebook"></Icon>
            <span>Facebook</span>
        </Checkbox>
        <Checkbox label="github">
            <Icon type="social-github"></Icon>
            <span>Github</span>
        </Checkbox>
        <Checkbox label="snapchat">
            <Icon type="social-snapchat"></Icon>
            <span>Snapchat</span>
        </Checkbox>
    </CheckboxGroup></div> <p data-v-f5c51248="" class="demo-data">{{social}}</p> <div data-v-f5c51248="" class="ivu-checkbox-group">
    <CheckboxGroup v-model="fruit">
        <Checkbox label="香蕉"></Checkbox>
        <Checkbox label="苹果"></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup></div> <p data-v-f5c51248="" class="demo-data">{{fruit}}</p></div></div> <header class="example-header"><span>
                组合使用
                <a href="#组合使用">#</a></span></header> <div class="example-desc"><div data-v-f5c51248=""><p data-v-f5c51248="">使用<code data-v-f5c51248="">CheckboxGroup</code>配合数组来生成组合。在组合使用时，<code data-v-f5c51248="">Checkbox</code> 使用 <code data-v-f5c51248="">label</code> 来自动判断选中状态。每个 Checkbox 的内容可以自定义，如不填写则默认使用 label 的值。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 243px;"><div style="opacity: 1;"><div data-v-3802a467="" data-v-f5c51248=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">CheckboxGroup</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"social"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Checkbox</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"twitter"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"social-twitter"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Twitter<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Checkbox</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"facebook"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"social-facebook"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Facebook<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Checkbox</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"github"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"social-github"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Github<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Checkbox</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"snapchat"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"social-snapchat"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Snapchat<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">CheckboxGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">CheckboxGroup</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"fruit"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Checkbox</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"香蕉"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Checkbox</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"苹果"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Checkbox</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"西瓜"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">CheckboxGroup</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                social: [<span class="hljs-string">'facebook'</span>, <span class="hljs-string">'github'</span>],
                fruit: [<span class="hljs-string">'苹果'</span>]
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div data-v-f5c51248="" class="example ivu-row" id="不可用"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div data-v-f5c51248=""><Checkbox v-model="disabledSingle" disabled>Checkbox</Checkbox> <p data-v-f5c51248="" class="demo-data">{{disabledSingle}}</p> <div data-v-f5c51248="" class="ivu-checkbox-group">
<CheckboxGroup v-model="disabledGroup">
        <Checkbox label="香蕉" disabled></Checkbox>
        <Checkbox label="苹果" disabled></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup></div> <p data-v-f5c51248="" class="demo-data">{{disabledGroup}}</p></div></div> <header class="example-header"><span>
                不可用
                <a href="#不可用">#</a></span></header> <div class="example-desc"><div data-v-f5c51248=""><p data-v-f5c51248="">通过设置<code data-v-f5c51248="">disabled</code>属性来禁用多选框。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 222px;"><div style="opacity: 1;"><div data-v-3802a467="" data-v-f5c51248=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Checkbox</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"disabledSingle"</span> <span class="hljs-attribute">disabled</span>&gt;</span>Checkbox<span class="hljs-tag">&lt;/<span class="hljs-title">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">CheckboxGroup</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"disabledGroup"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Checkbox</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"香蕉"</span> <span class="hljs-attribute">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Checkbox</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"苹果"</span> <span class="hljs-attribute">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Checkbox</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"西瓜"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">CheckboxGroup</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                disabledSingle: <span class="hljs-literal">true</span>,
                disabledGroup: [<span class="hljs-string">'苹果'</span>]
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div data-v-f5c51248="" class="example ivu-row" id="与其它组件通信"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div data-v-f5c51248="">
<Checkbox v-model="checked" :disabled="disabled">
        <span v-if="checked">Checked</span>
        <span v-else>Unchecked</span>
         - 
        <span v-if="!disabled">Usable</span>
        <span v-else>Disabled</span>
    </Checkbox>
    <br>
    <Button type="primary" @click="checked = !checked">
        <span v-if="!checked">Checked</span>
        <span v-else>Unchecked</span>
    </Button>
    <Button type="primary" @click="disabled = !disabled">
        <span v-if="disabled">Usable</span>
        <span v-else>Disabled</span>
    </Button></div></div> <header class="example-header"><span>
                与其它组件通信
                <a href="#与其它组件通信">#</a></span></header> <div class="example-desc"><div data-v-f5c51248=""><p data-v-f5c51248="">与其它组件进行数据联动。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 173px;"><div style="opacity: 1;"><div data-v-3802a467="" data-v-f5c51248=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Checkbox</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"checked"</span> <span class="hljs-attribute">:disabled</span>=<span class="hljs-value">"disabled"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">v-if</span>=<span class="hljs-value">"checked"</span>&gt;</span>Checked<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">v-else</span>&gt;</span>Unchecked<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
         - 
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">v-if</span>=<span class="hljs-value">"!disabled"</span>&gt;</span>Usable<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">v-else</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"checked = !checked"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">v-if</span>=<span class="hljs-value">"!checked"</span>&gt;</span>Checked<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">v-else</span>&gt;</span>Unchecked<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"disabled = !disabled"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">v-if</span>=<span class="hljs-value">"disabled"</span>&gt;</span>Usable<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">v-else</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                checked: <span class="hljs-literal">true</span>,
                disabled: <span class="hljs-literal">false</span>
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div data-v-f5c51248="" class="example ivu-row" id="全选"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div data-v-f5c51248="">
<div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
        <Checkbox
            :indeterminate="indeterminate"
            :value="checkAll"
            @click.prevent.native="handleCheckAll">全选</Checkbox>
    </div>
    <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
        <Checkbox label="香蕉"></Checkbox>
        <Checkbox label="苹果"></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
</div></div> <header class="example-header"><span>
                全选
                <a href="#全选">#</a></span></header> <div class="example-desc"><div data-v-f5c51248=""><p data-v-f5c51248="">在实现全选效果时，你可能会用到 <code data-v-f5c51248="">indeterminate</code> 属性。示例代码只是一种写法，业务中可以用更多的方法，比如计算属性。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 197px;"><div style="opacity: 1;"><div data-v-3802a467="" data-v-f5c51248=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Checkbox</span>
            <span class="hljs-attribute">:indeterminate</span>=<span class="hljs-value">"indeterminate"</span>
            <span class="hljs-attribute">:value</span>=<span class="hljs-value">"checkAll"</span>
            @<span class="hljs-attribute">click.prevent.native</span>=<span class="hljs-value">"handleCheckAll"</span>&gt;</span>全选<span class="hljs-tag">&lt;/<span class="hljs-title">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">CheckboxGroup</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"checkAllGroup"</span> @<span class="hljs-attribute">on-change</span>=<span class="hljs-value">"checkAllGroupChange"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Checkbox</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"香蕉"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Checkbox</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"苹果"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Checkbox</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"西瓜"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">CheckboxGroup</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                indeterminate: <span class="hljs-literal">true</span>,
                checkAll: <span class="hljs-literal">false</span>,
                checkAllGroup: [<span class="hljs-string">'香蕉'</span>, <span class="hljs-string">'西瓜'</span>]
            }
        },
        methods: {
            handleCheckAll () {
                <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.indeterminate) {
                    <span class="hljs-keyword">this</span>.checkAll = <span class="hljs-literal">false</span>;
                } <span class="hljs-keyword">else</span> {
                    <span class="hljs-keyword">this</span>.checkAll = !<span class="hljs-keyword">this</span>.checkAll;
                }
                <span class="hljs-keyword">this</span>.indeterminate = <span class="hljs-literal">false</span>;

                <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.checkAll) {
                    <span class="hljs-keyword">this</span>.checkAllGroup = [<span class="hljs-string">'香蕉'</span>, <span class="hljs-string">'苹果'</span>, <span class="hljs-string">'西瓜'</span>];
                } <span class="hljs-keyword">else</span> {
                    <span class="hljs-keyword">this</span>.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                <span class="hljs-keyword">if</span> (data.length === <span class="hljs-number">3</span>) {
                    <span class="hljs-keyword">this</span>.indeterminate = <span class="hljs-literal">false</span>;
                    <span class="hljs-keyword">this</span>.checkAll = <span class="hljs-literal">true</span>;
                } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (data.length &gt; <span class="hljs-number">0</span>) {
                    <span class="hljs-keyword">this</span>.indeterminate = <span class="hljs-literal">true</span>;
                    <span class="hljs-keyword">this</span>.checkAll = <span class="hljs-literal">false</span>;
                } <span class="hljs-keyword">else</span> {
                    <span class="hljs-keyword">this</span>.indeterminate = <span class="hljs-literal">false</span>;
                    <span class="hljs-keyword">this</span>.checkAll = <span class="hljs-literal">false</span>;
                }
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div data-v-f5c51248="" class="api"><div data-v-f5c51248="" class="anchor"><!----> <h2 id="API">API</h2> <!----> <!----> <!----> <!---->  <a href="#API">#</a></div> <div data-v-f5c51248="" class="anchor"><!----> <!----> <h3 id="Checkbox_props">Checkbox props</h3> <!----> <!----> <!---->  <a href="#Checkbox_props">#</a></div> <table data-v-f5c51248=""><thead data-v-f5c51248=""><tr data-v-f5c51248=""><th data-v-f5c51248="">属性</th> <th data-v-f5c51248="">说明</th> <th data-v-f5c51248="">类型</th> <th data-v-f5c51248="">默认值</th></tr></thead> <tbody data-v-f5c51248=""><tr data-v-f5c51248=""><td data-v-f5c51248="">value</td> <td data-v-f5c51248="">只在单独使用时有效。可以使用 v-model 双向绑定数据</td> <td data-v-f5c51248="">Boolean</td> <td data-v-f5c51248="">false</td></tr> <tr data-v-f5c51248=""><td data-v-f5c51248="">label</td> <td data-v-f5c51248="">只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中</td> <td data-v-f5c51248="">String | Number | Boolean</td> <td data-v-f5c51248="">-</td></tr> <tr data-v-f5c51248=""><td data-v-f5c51248="">disabled</td> <td data-v-f5c51248="">是否禁用当前项</td> <td data-v-f5c51248="">Boolean</td> <td data-v-f5c51248="">false</td></tr> <tr data-v-f5c51248=""><td data-v-f5c51248="">indeterminate</td> <td data-v-f5c51248="">设置 indeterminate 状态，只负责样式控制</td> <td data-v-f5c51248="">Boolean</td> <td data-v-f5c51248="">false</td></tr> <tr data-v-f5c51248=""><td data-v-f5c51248="">size</td> <td data-v-f5c51248="">多选框的尺寸，可选值为 <code data-v-f5c51248="">large</code>、<code data-v-f5c51248="">small</code>、<code data-v-f5c51248="">default</code> 或者不设置</td> <td data-v-f5c51248="">String</td> <td data-v-f5c51248="">-</td></tr> <tr data-v-f5c51248=""><td data-v-f5c51248="">true-value</td> <td data-v-f5c51248="">选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td> <td data-v-f5c51248="">String, Number, Boolean</td> <td data-v-f5c51248="">true</td></tr> <tr data-v-f5c51248=""><td data-v-f5c51248="">false-value</td> <td data-v-f5c51248="">没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td> <td data-v-f5c51248="">String, Number, Boolean</td> <td data-v-f5c51248="">false</td></tr></tbody></table> <div data-v-f5c51248="" class="anchor"><!----> <!----> <h3 id="Checkbox_events">Checkbox events</h3> <!----> <!----> <!---->  <a href="#Checkbox_events">#</a></div> <table data-v-f5c51248=""><thead data-v-f5c51248=""><tr data-v-f5c51248=""><th data-v-f5c51248="">事件名</th> <th data-v-f5c51248="">说明</th> <th data-v-f5c51248="">返回值</th></tr></thead> <tbody data-v-f5c51248=""><tr data-v-f5c51248=""><td data-v-f5c51248="">on-change</td> <td data-v-f5c51248="">只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发</td> <td data-v-f5c51248="">true | false</td></tr></tbody></table> <div data-v-f5c51248="" class="anchor"><!----> <!----> <h3 id="CheckboxGroup_props">CheckboxGroup props</h3> <!----> <!----> <!---->  <a href="#CheckboxGroup_props">#</a></div> <table data-v-f5c51248=""><thead data-v-f5c51248=""><tr data-v-f5c51248=""><th data-v-f5c51248="">属性</th> <th data-v-f5c51248="">说明</th> <th data-v-f5c51248="">类型</th> <th data-v-f5c51248="">默认值</th></tr></thead> <tbody data-v-f5c51248=""><tr data-v-f5c51248=""><td data-v-f5c51248="">value</td> <td data-v-f5c51248="">指定选中项目的集合，可以使用 v-model 双向绑定数据</td> <td data-v-f5c51248="">Array</td> <td data-v-f5c51248="">[]</td></tr> <tr data-v-f5c51248=""><td data-v-f5c51248="">size</td> <td data-v-f5c51248="">多选框组的尺寸，可选值为 <code data-v-f5c51248="">large</code>、<code data-v-f5c51248="">small</code>、<code data-v-f5c51248="">default</code> 或者不设置</td> <td data-v-f5c51248="">String</td> <td data-v-f5c51248="">-</td></tr></tbody></table> <div data-v-f5c51248="" class="anchor"><!----> <!----> <h3 id="CheckboxGroup_events">CheckboxGroup events</h3> <!----> <!----> <!---->  <a href="#CheckboxGroup_events">#</a></div> <table data-v-f5c51248=""><thead data-v-f5c51248=""><tr data-v-f5c51248=""><th data-v-f5c51248="">事件名</th> <th data-v-f5c51248="">说明</th> <th data-v-f5c51248="">返回值</th></tr></thead> <tbody data-v-f5c51248=""><tr data-v-f5c51248=""><td data-v-f5c51248="">on-change</td> <td data-v-f5c51248="">在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发</td> <td data-v-f5c51248="">[...]</td></tr></tbody></table></div></article>
    </div>
</template>
<script>
    export default 
    {
        data () 
        {
            return {
            social: ['facebook', 'github'],
            fruit: ['苹果'],
            single: false,
            disabledSingle: true,
            disabledGroup: ['苹果'],
            checked: true,
            disabled: false,
            indeterminate: true,
            checkAll: false,
            checkAllGroup: ['香蕉', '西瓜']
            }
        },
        methods: {
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            }
        }
    }
</script>