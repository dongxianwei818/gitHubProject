<style scoped>
    
</style>
<template>
    <div>
        <article><h1>Input 输入框</h1> <div class="anchor"><!----> <h2 id="概述">概述</h2> <!----> <!----> <!----> <!---->  <a href="#概述">#</a></div> <p>基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。</p> <blockquote>注意：非 template/render 模式下，需使用 <code>i-input</code>。</blockquote> <div class="anchor"><!----> <h2 id="代码示例">代码示例</h2> <!----> <!----> <!----> <!---->  <a href="#代码示例">#</a></div> <div class="example ivu-row" id="基础用法"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div><div class="ivu-input-wrapper ivu-input-type" style="width: 300px;"><!----> <!----> <i class="ivu-icon ivu-icon-load-c ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i> <input autocomplete="off" type="text" placeholder="请输入..." class="ivu-input"> <!----></div></div></div> <header class="example-header"><span>
                基础用法
                <a href="#基础用法">#</a></span></header> <div class="example-desc"><div><p>基本用法，可以使用 <code>v-model</code> 实现数据的双向绑定。</p> <p>可以直接设置 style 来改变输入框的宽度，默认 100%。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 182px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"请输入..."</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 300px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Input</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                value: <span class="hljs-string">''</span>
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="尺寸"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div><div class="ivu-row" style="margin-left: -4px; margin-right: -4px;"><div class="ivu-col ivu-col-span-8" style="padding-left: 4px; padding-right: 4px;"><div class="ivu-input-wrapper ivu-input-wrapper-large ivu-input-type"><!----> <!----> <i class="ivu-icon ivu-icon-load-c ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i> <input autocomplete="off" type="text" placeholder="large size" class="ivu-input ivu-input-large"> <!----></div></div> <div class="ivu-col ivu-col-span-8" style="padding-left: 4px; padding-right: 4px;"><div class="ivu-input-wrapper ivu-input-type"><!----> <!----> <i class="ivu-icon ivu-icon-load-c ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i> <input autocomplete="off" type="text" placeholder="default size" class="ivu-input"> <!----></div></div> <div class="ivu-col ivu-col-span-8" style="padding-left: 4px; padding-right: 4px;"><div class="ivu-input-wrapper ivu-input-wrapper-small ivu-input-type"><!----> <!----> <i class="ivu-icon ivu-icon-load-c ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i> <input autocomplete="off" type="text" placeholder="small size" class="ivu-input ivu-input-small"> <!----></div></div></div></div></div> <header class="example-header"><span>
                尺寸
                <a href="#尺寸">#</a></span></header> <div class="example-desc"><div><p>输入框有三种尺寸：大、默认（中）、小</p> <p>通过设置<code>size</code>为<code>large</code>和<code>small</code>设置为大和小尺寸，不设置为默认（中）尺寸。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 186px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value1"</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"large"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"large size"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value2"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"default size"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value3"</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"small"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"small size"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Input</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                value1: <span class="hljs-string">''</span>,
                value2: <span class="hljs-string">''</span>,
                value3: <span class="hljs-string">''</span>
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="带Icon的输入框"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div><div class="ivu-input-wrapper ivu-input-type" style="width: 200px;"><!----> <i class="ivu-icon ivu-icon-ios-clock-outline ivu-input-icon ivu-input-icon-normal"></i> <!----> <input autocomplete="off" type="text" placeholder="请输入..." class="ivu-input"> <!----></div></div></div> <header class="example-header"><span>
                带Icon的输入框
                <a href="#带Icon的输入框">#</a></span></header> <div class="example-desc"><div><p>通过 <code>icon</code> 属性可以在输入框右边加一个图标。</p> <p>点击图标，会触发 <code>on-click</code> 事件。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 186px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value4"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-clock-outline"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"请输入..."</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 200px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Input</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                value4: <span class="hljs-string">''</span>
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="文本域"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div><div class="ivu-row" style="margin-left: -4px; margin-right: -4px;"><div class="ivu-col ivu-col-span-12" style="padding-left: 4px; padding-right: 4px;"><div class="ivu-input-wrapper ivu-input-type"><textarea autocomplete="off" placeholder="请输入..." rows="2" class="ivu-input"></textarea></div></div> <div class="ivu-col ivu-col-span-12" style="padding-left: 4px; padding-right: 4px;"><div class="ivu-input-wrapper ivu-input-type"><textarea autocomplete="off" placeholder="请输入..." rows="4" class="ivu-input"></textarea></div></div></div></div></div> <header class="example-header"><span>
                文本域
                <a href="#文本域">#</a></span></header> <div class="example-desc"><div><p>通过设置属性 <code>type</code> 为 <code>textarea</code> 来使用文本域，用于多行输入。</p> <p>通过设置属性 <code>rows</code> 控制文本域默认显示的行数。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 248px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value5"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"textarea"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"请输入..."</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value6"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"textarea"</span> <span class="hljs-attribute">:rows</span>=<span class="hljs-value">"4"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"请输入..."</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Input</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                value5: <span class="hljs-string">''</span>,
                value6: <span class="hljs-string">''</span>
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="适应文本高度的文本域"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div><div class="ivu-row" style="margin-left: -4px; margin-right: -4px;"><div class="ivu-col ivu-col-span-12" style="padding-left: 4px; padding-right: 4px;"><div class="ivu-input-wrapper ivu-input-type"><textarea autocomplete="off" placeholder="请输入..." rows="2" class="ivu-input" style="height: 31px;"></textarea></div></div> <div class="ivu-col ivu-col-span-12" style="padding-left: 4px; padding-right: 4px;"><div class="ivu-input-wrapper ivu-input-type"><textarea autocomplete="off" placeholder="请输入..." rows="2" class="ivu-input" style="height: 52px; min-height: 52px; max-height: 115px;"></textarea></div></div></div></div></div> <header class="example-header"><span>
                适应文本高度的文本域
                <a href="#适应文本高度的文本域">#</a></span></header> <div class="example-desc"><div><p>设置属性 <code>autosize</code>，文本域会自动适应高度的变化。</p> <p><code>autosize</code>也可以设定为一个对象，指定最小行数和最大行数。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 206px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value7"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"textarea"</span> <span class="hljs-attribute">:autosize</span>=<span class="hljs-value">"true"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"请输入..."</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value8"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"textarea"</span> <span class="hljs-attribute">:autosize</span>=<span class="hljs-value">"{minRows: 2,maxRows: 5}"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"请输入..."</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Input</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                value7: <span class="hljs-string">''</span>,
                value8: <span class="hljs-string">''</span>
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="禁用状态"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div><div class="ivu-row" style="margin-left: -4px; margin-right: -4px;"><div class="ivu-col ivu-col-span-12" style="padding-left: 4px; padding-right: 4px;"><div class="ivu-input-wrapper ivu-input-type"><!----> <!----> <i class="ivu-icon ivu-icon-load-c ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i> <input autocomplete="off" type="text" placeholder="请输入..." disabled="disabled" class="ivu-input ivu-input-disabled"> <!----></div></div> <div class="ivu-col ivu-col-span-12" style="padding-left: 4px; padding-right: 4px;"><div class="ivu-input-wrapper ivu-input-type"><textarea autocomplete="off" placeholder="请输入..." disabled="disabled" rows="2" class="ivu-input ivu-input-disabled"></textarea></div></div></div></div></div> <header class="example-header"><span>
                禁用状态
                <a href="#禁用状态">#</a></span></header> <div class="example-desc"><div><p>通过添加<code>disabled</code>属性可设置为不可用状态。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 180px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value9"</span> <span class="hljs-attribute">disabled</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"请输入..."</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value10"</span> <span class="hljs-attribute">disabled</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"textarea"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"请输入..."</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Input</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                value9: <span class="hljs-string">''</span>,
                value10: <span class="hljs-string">''</span>
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="复合型输入框"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div><Input v-model="value11">
        <span slot="prepend">http://</span>
        <span slot="append">.com</span>
    </Input>
    <br>
    <Input v-model="value12">
        <Select v-model="select1" slot="prepend" style="width: 80px">
            <Option value="http">http://</Option>
            <Option value="https">https://</Option>
        </Select>
        <Select v-model="select2" slot="append" style="width: 70px">
            <Option value="com">.com</Option>
            <Option value="org">.org</Option>
            <Option value="io">.io</Option>
        </Select>
    </Input>
    <br>
    <Input v-model="value13">
        <Select v-model="select3" slot="prepend" style="width: 80px">
            <Option value="day">Day</Option>
            <Option value="month">Month</Option>
        </Select>
        <Button slot="append" icon="ios-search"></Button>
    </Input></div></div> <header class="example-header"><span>
                复合型输入框
                <a href="#复合型输入框">#</a></span></header> <div class="example-desc"><div>
                通过前置和后置的 slot 可以实现复合型的输入框。
            </div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 250px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value11"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"prepend"</span>&gt;</span>http://<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"append"</span>&gt;</span>.com<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Select</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"select1"</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"prepend"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 80px"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Option</span> <span class="hljs-attribute">value</span>=<span class="hljs-value">"http"</span>&gt;</span>http://<span class="hljs-tag">&lt;/<span class="hljs-title">Option</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Option</span> <span class="hljs-attribute">value</span>=<span class="hljs-value">"https"</span>&gt;</span>https://<span class="hljs-tag">&lt;/<span class="hljs-title">Option</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Select</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Select</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"select2"</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"append"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 70px"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Option</span> <span class="hljs-attribute">value</span>=<span class="hljs-value">"com"</span>&gt;</span>.com<span class="hljs-tag">&lt;/<span class="hljs-title">Option</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Option</span> <span class="hljs-attribute">value</span>=<span class="hljs-value">"org"</span>&gt;</span>.org<span class="hljs-tag">&lt;/<span class="hljs-title">Option</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Option</span> <span class="hljs-attribute">value</span>=<span class="hljs-value">"io"</span>&gt;</span>.io<span class="hljs-tag">&lt;/<span class="hljs-title">Option</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Select</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value13"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Select</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"select3"</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"prepend"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 80px"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Option</span> <span class="hljs-attribute">value</span>=<span class="hljs-value">"day"</span>&gt;</span>日活<span class="hljs-tag">&lt;/<span class="hljs-title">Option</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Option</span> <span class="hljs-attribute">value</span>=<span class="hljs-value">"month"</span>&gt;</span>月活<span class="hljs-tag">&lt;/<span class="hljs-title">Option</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Select</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"append"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-search"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Input</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                value11: <span class="hljs-string">''</span>,
                value12: <span class="hljs-string">''</span>,
                value13: <span class="hljs-string">''</span>,
                select1: <span class="hljs-string">'http'</span>,
                select2: <span class="hljs-string">'com'</span>,
                select3: <span class="hljs-string">'day'</span>
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="api"><div class="anchor"><!----> <h2 id="API">API</h2> <!----> <!----> <!----> <!---->  <a href="#API">#</a></div> <div class="anchor"><!----> <!----> <h3 id="Input_props">Input props</h3> <!----> <!----> <!---->  <a href="#Input_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>type</td> <td>输入框类型，可选值为 <code>text</code>、<code>password</code> 或 <code>textarea</code></td> <td>String</td> <td>text</td></tr> <tr><td>value</td> <td>绑定的值，可使用 v-model 双向绑定</td> <td>String | Number</td> <td>空</td></tr> <tr><td>size</td> <td>输入框尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td> <td>String</td> <td>-</td></tr> <tr><td>placeholder</td> <td>占位文本</td> <td>String</td> <td>-</td></tr> <tr><td>disabled</td> <td>设置输入框为禁用状态</td> <td>Boolean</td> <td>false</td></tr> <tr><td>readonly</td> <td>设置输入框为只读</td> <td>Boolean</td> <td>false</td></tr> <tr><td>maxlength</td> <td>最大输入长度</td> <td>Number</td> <td>-</td></tr> <tr><td>icon</td> <td>输入框尾部图标，仅在 text 类型下有效</td> <td>String</td> <td>-</td></tr> <tr><td>rows</td> <td>文本域默认行数，仅在 textarea 类型下有效</td> <td>Number</td> <td>2</td></tr> <tr><td>autosize</td> <td>自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }</td> <td>Boolean | Object</td> <td>false</td></tr> <tr><td>number</td> <td>将用户的输入转换为 Number 类型</td> <td>Boolean</td> <td>false</td></tr> <tr><td>autofocus</td> <td>自动获取焦点</td> <td>Boolean</td> <td>false</td></tr> <tr><td>autocomplete</td> <td>原生的自动完成功能，可选值为 off 和 on</td> <td>String</td> <td>off</td></tr> <tr><td>element-id</td> <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td> <td>String</td> <td>-</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Input_events">Input events</h3> <!----> <!----> <!---->  <a href="#Input_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-enter</td> <td>按下回车键时触发</td> <td>无</td></tr> <tr><td>on-click</td> <td>设置 icon 属性后，点击图标时触发</td> <td>无</td></tr> <tr><td>on-change</td> <td>数据改变时触发</td> <td>event</td></tr> <tr><td>on-focus</td> <td>输入框聚焦时触发</td> <td>无</td></tr> <tr><td>on-blur</td> <td>输入框失去焦点时触发</td> <td>无</td></tr> <tr><td>on-keyup</td> <td>原生的 keyup 事件</td> <td>event</td></tr> <tr><td>on-keydown</td> <td>原生的 keydown 事件</td> <td>event</td></tr> <tr><td>on-keypress</td> <td>原生的 keypress 事件</td> <td>event</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Input_slot">Input slot</h3> <!----> <!----> <!---->  <a href="#Input_slot">#</a></div> <table><thead><tr><th>名称</th> <th>说明</th></tr></thead> <tbody><tr><td>prepend</td> <td>前置内容，仅在 text 类型下有效</td></tr> <tr><td>append</td> <td>后置内容，仅在 text 类型下有效</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Input_methods">Input methods</h3> <!----> <!----> <!---->  <a href="#Input_methods">#</a></div> <table><thead><tr><th>方法名</th> <th>说明</th> <th>参数</th></tr></thead> <tbody><tr><td>focus</td> <td>手动聚焦输入框</td> <td>无</td></tr></tbody></table></div></article>
    </div>
</template>
<script>
    export default 
    {
        data () {
            return {
                value11: '',
                value12: '',
                value13: '',
                select1: 'http',
                select2: 'com',
                select3: 'day'
            }
        }
    }
