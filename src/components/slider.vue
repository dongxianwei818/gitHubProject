<style scoped>
</style>
<template>
    <div class="wrapper-content ivu-article"><article data-v-f364bd8c=""><h1 data-v-f364bd8c="">Slider 滑块</h1> <div data-v-f364bd8c="" class="anchor"><!----> <h2 id="概述">概述</h2> <!----> <!----> <!----> <!---->  <a href="#概述">#</a></div> <p data-v-f364bd8c="">滑动输入器，用于在数值区间/自定义区间内进行选择，支持连续或离散值。</p> <div data-v-f364bd8c="" class="anchor"><!----> <h2 id="代码示例">代码示例</h2> <!----> <!----> <!----> <!---->  <a href="#代码示例">#</a></div> <div data-v-f364bd8c="" class="example ivu-row" id="基础用法"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div data-v-f364bd8c=""><Slider v-model="value1"></Slider>
    <Slider v-model="value2" range></Slider>
    <Slider v-model="value3" range disabled></Slider></div></div> <header class="example-header"><span>
                基础用法
                <a href="#基础用法">#</a></span></header> <div class="example-desc"><div data-v-f364bd8c=""><p data-v-f364bd8c="">滑块的基本用法，可以使用 v-model 双向绑定数据。</p> <p data-v-f364bd8c="">通过设置属性 <code data-v-f364bd8c="">range</code> 开启双滑块，通过设置属性 <code data-v-f364bd8c="">disabled</code> 禁用滑块。</p> <p data-v-f364bd8c="">注意，单滑块时，<code data-v-f364bd8c="">value</code> 格式为数字，当开启双滑块时，<code data-v-f364bd8c="">value</code> 为长度是2的数组，且每项为数字。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 383px;"><div style="opacity: 1;"><div data-v-3802a467="" data-v-f364bd8c=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Slider</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Slider</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Slider</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value2"</span> <span class="hljs-attribute">range</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Slider</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Slider</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value3"</span> <span class="hljs-attribute">range</span> <span class="hljs-attribute">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Slider</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                value1: <span class="hljs-number">25</span>,
                value2: [<span class="hljs-number">20</span>, <span class="hljs-number">50</span>],
                value3: [<span class="hljs-number">20</span>, <span class="hljs-number">50</span>]
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down" style="display: none;"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style=""></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div data-v-f364bd8c="" class="example ivu-row" id="离散值"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div data-v-f364bd8c="">    <Slider v-model="value4" :step="10"></Slider>
    <Slider v-model="value5" :step="10" range></Slider>
</div></div> <header class="example-header"><span>
                离散值
                <a href="#离散值">#</a></span></header> <div class="example-desc"><div data-v-f364bd8c=""><p data-v-f364bd8c="">通过设置属性 <code data-v-f364bd8c="">step</code> 可以控制每次滑动的间隔。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 168px;"><div style="opacity: 1;"><div data-v-3802a467="" data-v-f364bd8c=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Slider</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value4"</span> <span class="hljs-attribute">:step</span>=<span class="hljs-value">"10"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Slider</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Slider</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value5"</span> <span class="hljs-attribute">:step</span>=<span class="hljs-value">"10"</span> <span class="hljs-attribute">range</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Slider</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                value4: <span class="hljs-number">30</span>,
                value5: [<span class="hljs-number">20</span>, <span class="hljs-number">50</span>]
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div data-v-f364bd8c="" class="example ivu-row" id="显示间断点"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div data-v-f364bd8c="">    <Slider v-model="value6" :step="10" show-stops></Slider>
    <Slider v-model="value7" :step="10" show-stops range></Slider>
</div></div> <header class="example-header"><span>
                显示间断点
                <a href="#显示间断点">#</a></span></header> <div class="example-desc"><div data-v-f364bd8c=""><p data-v-f364bd8c="">通过设置属性 <code data-v-f364bd8c="">show-stops</code> 可以显示间断点，建议在 <code data-v-f364bd8c="">step</code> 间隔不密集时使用。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 168px;"><div style="opacity: 1;"><div data-v-3802a467="" data-v-f364bd8c=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Slider</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value6"</span> <span class="hljs-attribute">:step</span>=<span class="hljs-value">"10"</span> <span class="hljs-attribute">show-stops</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Slider</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Slider</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value7"</span> <span class="hljs-attribute">:step</span>=<span class="hljs-value">"10"</span> <span class="hljs-attribute">show-stops</span> <span class="hljs-attribute">range</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Slider</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                value6: <span class="hljs-number">30</span>,
                value7: [<span class="hljs-number">20</span>, <span class="hljs-number">50</span>]
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div data-v-f364bd8c="" class="example ivu-row" id="带有输入框"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div data-v-f364bd8c="">    <Slider v-model="value8" show-input></Slider>
</div></div> <header class="example-header"><span>
                带有输入框
                <a href="#带有输入框">#</a></span></header> <div class="example-desc"><div data-v-f364bd8c=""><p data-v-f364bd8c="">通过设置属性 <code data-v-f364bd8c="">show-input</code> 可以显示数字输入框，配合使用，仅在单滑块模式下有效。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 148px;"><div style="opacity: 1;"><div data-v-3802a467="" data-v-f364bd8c=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Slider</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value8"</span> <span class="hljs-attribute">show-input</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Slider</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                value8: <span class="hljs-number">25</span>
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div data-v-f364bd8c="" class="example ivu-row" id="自定义提示"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div data-v-f364bd8c="">    <Slider v-model="value9" :tip-format="format"></Slider>
    <Slider v-model="value10" :tip-format="hideFormat"></Slider>
</div></div> <header class="example-header"><span>
                自定义提示
                <a href="#自定义提示">#</a></span></header> <div class="example-desc"><div data-v-f364bd8c=""><p data-v-f364bd8c="">Slider 会把当前值传给 <code data-v-f364bd8c="">tip-format</code>，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 186px;"><div style="opacity: 1;"><div data-v-3802a467="" data-v-f364bd8c=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Slider</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value9"</span> <span class="hljs-attribute">:tip-format</span>=<span class="hljs-value">"format"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Slider</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Slider</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value10"</span> <span class="hljs-attribute">:tip-format</span>=<span class="hljs-value">"hideFormat"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Slider</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                value9: <span class="hljs-number">25</span>,
                value10: <span class="hljs-number">25</span>
            }
        },
        methods: {
            format (val) {
                <span class="hljs-keyword">return</span> <span class="hljs-string">'Progress: '</span> + val + <span class="hljs-string">'%'</span>;
            },
            hideFormat () {
                <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>;
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div data-v-f364bd8c="" class="api"><div data-v-f364bd8c="" class="anchor"><!----> <h2 id="API">API</h2> <!----> <!----> <!----> <!---->  <a href="#API">#</a></div> <div data-v-f364bd8c="" class="anchor"><!----> <!----> <h3 id="Slider_props">Slider props</h3> <!----> <!----> <!---->  <a href="#Slider_props">#</a></div> <table data-v-f364bd8c=""><thead data-v-f364bd8c=""><tr data-v-f364bd8c=""><th data-v-f364bd8c="">属性</th> <th data-v-f364bd8c="">说明</th> <th data-v-f364bd8c="">类型</th> <th data-v-f364bd8c="">默认值</th></tr></thead> <tbody data-v-f364bd8c=""><tr data-v-f364bd8c=""><td data-v-f364bd8c="">value</td> <td data-v-f364bd8c="">滑块选定的值，可以使用 v-model 双向绑定数据。普通模式下，数据格式为数字，在双滑块模式下，数据格式为长度是2的数组，且每项都为数字</td> <td data-v-f364bd8c="">Number | Array</td> <td data-v-f364bd8c="">0</td></tr> <tr data-v-f364bd8c=""><td data-v-f364bd8c="">min</td> <td data-v-f364bd8c="">最小值</td> <td data-v-f364bd8c="">Number</td> <td data-v-f364bd8c="">0</td></tr> <tr data-v-f364bd8c=""><td data-v-f364bd8c="">max</td> <td data-v-f364bd8c="">最大值</td> <td data-v-f364bd8c="">Number</td> <td data-v-f364bd8c="">100</td></tr> <tr data-v-f364bd8c=""><td data-v-f364bd8c="">step</td> <td data-v-f364bd8c="">步长，取值建议能被（max - min）整除</td> <td data-v-f364bd8c="">Number</td> <td data-v-f364bd8c="">1</td></tr> <tr data-v-f364bd8c=""><td data-v-f364bd8c="">disabled</td> <td data-v-f364bd8c="">是否禁用滑块</td> <td data-v-f364bd8c="">Boolean</td> <td data-v-f364bd8c="">false</td></tr> <tr data-v-f364bd8c=""><td data-v-f364bd8c="">range</td> <td data-v-f364bd8c="">是否开启双滑块模式</td> <td data-v-f364bd8c="">Boolean</td> <td data-v-f364bd8c="">false</td></tr> <tr data-v-f364bd8c=""><td data-v-f364bd8c="">show-input</td> <td data-v-f364bd8c="">是否显示数字输入框，仅在单滑块模式下有效</td> <td data-v-f364bd8c="">Boolean</td> <td data-v-f364bd8c="">false</td></tr> <tr data-v-f364bd8c=""><td data-v-f364bd8c="">show-stops</td> <td data-v-f364bd8c="">是否显示间断点，建议在 step 不密集时使用</td> <td data-v-f364bd8c="">Boolean</td> <td data-v-f364bd8c="">false</td></tr> <tr data-v-f364bd8c=""><td data-v-f364bd8c="">show-tip</td> <td data-v-f364bd8c="">提示的显示控制，可选值为 <code data-v-f364bd8c="">hover</code>（悬停，默认）、<code data-v-f364bd8c="">always</code>（总是可见）、<code data-v-f364bd8c="">never</code>（不可见）</td> <td data-v-f364bd8c="">Boolean</td> <td data-v-f364bd8c="">false</td></tr> <tr data-v-f364bd8c=""><td data-v-f364bd8c="">tip-format</td> <td data-v-f364bd8c="">Slider 会把当前值传给 <code data-v-f364bd8c="">tip-format</code>，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip</td> <td data-v-f364bd8c="">Function</td> <td data-v-f364bd8c="">value</td></tr></tbody></table> <div data-v-f364bd8c="" class="anchor"><!----> <!----> <h3 id="Slider_events">Slider events</h3> <!----> <!----> <!---->  <a href="#Slider_events">#</a></div> <table data-v-f364bd8c=""><thead data-v-f364bd8c=""><tr data-v-f364bd8c=""><th data-v-f364bd8c="">事件名</th> <th data-v-f364bd8c="">说明</th> <th data-v-f364bd8c="">返回值</th></tr></thead> <tbody data-v-f364bd8c=""><tr data-v-f364bd8c=""><td data-v-f364bd8c="">on-change</td> <td data-v-f364bd8c="">在松开滑动时触发，返回当前的选值，在滑动过程中不会触发</td> <td data-v-f364bd8c="">value</td></tr> <tr data-v-f364bd8c=""><td data-v-f364bd8c="">on-input</td> <td data-v-f364bd8c="">滑动条数据变化时触发，返回当前的选值，在滑动过程中实时触发</td> <td data-v-f364bd8c="">value</td></tr></tbody></table></div></article></div>
</template>
<script>
    export default 
    {
        data () {
            return {
                value1: 25,
                value2: [20, 50],
                value3: [20, 50],                
                value4: 30,
                value5: [20, 50],
                value6: 30,
                value7: [20, 50],
                value8: 25,
                value9: 25,
                value10: 25

            }
        },
        methods: {
            format (val) {
                return 'Progress: ' + val + '%';
            },
            hideFormat () {
                return null;
            }
        }

    }

</script>