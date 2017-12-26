<style scoped>
</style>
<template>
    <div class="wrapper-content ivu-article"><article><h1>DatePicker 日期选择器</h1> <div class="anchor"><!----> <h2 id="概述">概述</h2> <!----> <!----> <!----> <!---->  <a href="#概述">#</a></div> <p>选择或输入日期，支持年、月、日期等类型，支持选择范围。</p> <div class="anchor"><!----> <h2 id="代码示例">代码示例</h2> <!----> <!----> <!----> <!---->  <a href="#代码示例">#</a></div> <div class="example ivu-row" id="基础用法"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div><Row>
        <Col span="12">
            <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row></div></div> <header class="example-header"><span>
                基础用法
                <a href="#基础用法">#</a></span></header> <div class="example-desc"><div><p>设置属性 <code>type</code> 为 <code>date</code> 或 <code>daterange</code> 分别显示<strong>选择单日</strong>和<strong>选择范围</strong>类型。</p> <p>设置属性 <code>placement</code> 可以更改选择器出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 376px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Row</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"12"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"date"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select date"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 200px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Col</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"12"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"daterange"</span> <span class="hljs-attribute">placement</span>=<span class="hljs-value">"bottom-end"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select date"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 200px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Col</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Row</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down" style="display: none;"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style=""></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="快捷方式"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>
    <Row>
        <Col span="12">
            <DatePicker type="date" :options="options1" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="daterange" :options="options2" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>

</div></div> <header class="example-header"><span>
                快捷方式
                <a href="#快捷方式">#</a></span></header> <div class="example-desc"><div><p>设置属性 <code>options</code> 对象中的 <code>shortcuts</code> 可以设置快捷选项，详见示例代码。</p> <p>其中 <strong>value</strong> 为函数，必须返回一个日期，如果是 daterange 类型，需要返回一个数组。</p> <p>value 接收任何正确的日期格式，比如 2016-12-24 或 12/24/16 都是正确的。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 205px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Row</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"12"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"date"</span> <span class="hljs-attribute">:options</span>=<span class="hljs-value">"options1"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select date"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 200px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Col</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"12"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"daterange"</span> <span class="hljs-attribute">:options</span>=<span class="hljs-value">"options2"</span> <span class="hljs-attribute">placement</span>=<span class="hljs-value">"bottom-end"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select date"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 200px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Col</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Row</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                options1: {
                    shortcuts: [
                        {
                            text: <span class="hljs-string">'Today'</span>,
                            value () {
                                <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
                            },
                            onClick: (picker) =&gt; {
                                <span class="hljs-keyword">this</span>.$Message.info(<span class="hljs-string">'Click today'</span>);
                            }
                        },
                        {
                            text: <span class="hljs-string">'Yesterday'</span>,
                            value () {
                                <span class="hljs-keyword">const</span> date = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
                                date.setTime(date.getTime() - <span class="hljs-number">3600</span> * <span class="hljs-number">1000</span> * <span class="hljs-number">24</span>);
                                <span class="hljs-keyword">return</span> date;
                            },
                            onClick: (picker) =&gt; {
                                <span class="hljs-keyword">this</span>.$Message.info(<span class="hljs-string">'Click yesterday'</span>);
                            }
                        },
                        {
                            text: <span class="hljs-string">'One week'</span>,
                            value () {
                                <span class="hljs-keyword">const</span> date = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
                                date.setTime(date.getTime() - <span class="hljs-number">3600</span> * <span class="hljs-number">1000</span> * <span class="hljs-number">24</span> * <span class="hljs-number">7</span>);
                                <span class="hljs-keyword">return</span> date;
                            },
                            onClick: (picker) =&gt; {
                                <span class="hljs-keyword">this</span>.$Message.info(<span class="hljs-string">'Click a week ago'</span>);
                            }
                        }
                    ]
                },
                options2: {
                    shortcuts: [
                        {
                            text: <span class="hljs-string">'A week'</span>,
                            value () {
                                <span class="hljs-keyword">const</span> end = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
                                <span class="hljs-keyword">const</span> start = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
                                start.setTime(start.getTime() - <span class="hljs-number">3600</span> * <span class="hljs-number">1000</span> * <span class="hljs-number">24</span> * <span class="hljs-number">7</span>);
                                <span class="hljs-keyword">return</span> [start, end];
                            }
                        },
                        {
                            text: <span class="hljs-string">'A month'</span>,
                            value () {
                                <span class="hljs-keyword">const</span> end = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
                                <span class="hljs-keyword">const</span> start = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
                                start.setTime(start.getTime() - <span class="hljs-number">3600</span> * <span class="hljs-number">1000</span> * <span class="hljs-number">24</span> * <span class="hljs-number">30</span>);
                                <span class="hljs-keyword">return</span> [start, end];
                            }
                        },
                        {
                            text: <span class="hljs-string">'3 month'</span>,
                            value () {
                                <span class="hljs-keyword">const</span> end = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
                                <span class="hljs-keyword">const</span> start = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
                                start.setTime(start.getTime() - <span class="hljs-number">3600</span> * <span class="hljs-number">1000</span> * <span class="hljs-number">24</span> * <span class="hljs-number">90</span>);
                                <span class="hljs-keyword">return</span> [start, end];
                            }
                        }
                    ]
                }
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="日期格式"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    <Row>
        <Col span="12">
            <DatePicker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</div></div> <header class="example-header"><span>
                日期格式
                <a href="#日期格式">#</a></span></header> <div class="example-desc"><div><p>设置属性 <code>format</code> 可以改变日期的显示格式，详见 <a href="javascript:void(0)"><i class="ivu-icon ivu-icon-information-circled"></i> Date</a>。</p> <p>注意，format 只是改变显示的格式，并非改变 value 值。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 182px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Row</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"12"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">:value</span>=<span class="hljs-value">"value1"</span> <span class="hljs-attribute">format</span>=<span class="hljs-value">"yyyy年MM月dd日"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"date"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select date"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 200px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Col</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"12"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">:value</span>=<span class="hljs-value">"value2"</span> <span class="hljs-attribute">format</span>=<span class="hljs-value">"yyyy/MM/dd"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"daterange"</span> <span class="hljs-attribute">placement</span>=<span class="hljs-value">"bottom-end"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select date"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 200px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Col</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Row</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                value1: <span class="hljs-string">'2016-01-01'</span>,
                value2: [<span class="hljs-string">'2016-01-01'</span>, <span class="hljs-string">'2016-02-15'</span>]
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="日期时间选择"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    <DatePicker type="datetime" placeholder="Select date and time" style="width: 200px"></DatePicker>
    <br>
    <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 200px"></DatePicker>
    <br>
    <DatePicker type="datetimerange" placeholder="Select date and time" style="width: 300px"></DatePicker>
    <br>
    <DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 300px"></DatePicker>
</div></div> <header class="example-header"><span>
                日期时间选择
                <a href="#日期时间选择">#</a></span></header> <div class="example-desc"><div><p>设置属性 <code>type</code> 为 <code>datetime</code> 或 <code>datetimerange</code> 可以选择时间。</p> <p>设置 format 并且忽略秒，可以只设置小时和分钟维度。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 278px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"datetime"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select date and time"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 200px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"datetime"</span> <span class="hljs-attribute">format</span>=<span class="hljs-value">"yyyy-MM-dd HH:mm"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select date and time(Excluding seconds)"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 200px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"datetimerange"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select date and time"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 300px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"datetimerange"</span> <span class="hljs-attribute">format</span>=<span class="hljs-value">"yyyy-MM-dd HH:mm"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select date and time(Excluding seconds)"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 300px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="年和月"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>
    <Row>
        <Col span="12">
            <DatePicker type="year" placeholder="Select year" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="month" placeholder="Select month" style="width: 200px"></DatePicker>
        </Col>
    </Row>

</div></div> <header class="example-header"><span>
                年和月
                <a href="#年和月">#</a></span></header> <div class="example-desc"><div><p>设置属性 <code>type</code> 为 <code>year</code> 或 <code>month</code> 可以使用选择年或月的功能。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 160px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Row</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"12"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"year"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select year"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 200px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Col</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"12"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"month"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select month"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 200px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Col</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Row</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="不可选日期"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    <Row>
        <Col span="12">
            <DatePicker type="date" :options="options3" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="date" :options="options4" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</div></div> <header class="example-header"><span>
                不可选日期
                <a href="#不可选日期">#</a></span></header> <div class="example-desc"><div><p>设置属性 <code>options</code> 对象中的 <code>disabledDate</code> 可以设置不可选择的日期。</p> <p>disabledDate 是函数，参数为当前的日期，需要返回 Boolean 是否禁用这天。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 182px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Row</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"12"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"date"</span> <span class="hljs-attribute">:options</span>=<span class="hljs-value">"options3"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select date"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 200px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Col</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"12"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"date"</span> <span class="hljs-attribute">:options</span>=<span class="hljs-value">"options4"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select date"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 200px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Col</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Row</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                options3: {
                    disabledDate (date) {
                        <span class="hljs-keyword">return</span> date &amp;&amp; date.valueOf() &lt; <span class="hljs-built_in">Date</span>.now() - <span class="hljs-number">86400000</span>;
                    }
                },
                options4: {
                    disabledDate (date) {
                        <span class="hljs-keyword">const</span> disabledDay = date.getDate();
                        <span class="hljs-keyword">return</span> disabledDay === <span class="hljs-number">15</span>;
                    }
                }
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="带有确认操作"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    <Row>
        <Col span="12">
            <DatePicker type="date" confirm placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="daterange" confirm placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</div></div> <header class="example-header"><span>
                带有确认操作
                <a href="#带有确认操作">#</a></span></header> <div class="example-desc"><div><p>设置属性 <code>confirm</code>，选择日期后，选择器不会主动关闭，需用户确认后才可关闭。</p> <p>确认按钮并没有影响日期的正常选择。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 182px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Row</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"12"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"date"</span> <span class="hljs-attribute">confirm</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select date"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 200px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Col</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"12"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"daterange"</span> <span class="hljs-attribute">confirm</span> <span class="hljs-attribute">placement</span>=<span class="hljs-value">"bottom-end"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select date"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 200px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Col</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Row</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {

    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="手动控制组件"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    
<DatePicker
        :open="open"
        :value="value3"
        confirm
        type="date"
        @on-change="handleChange"
        @on-clear="handleClear"
        @on-ok="handleOk">
        <a href="javascript:void(0)" @click="handleClick">
            <Icon type="ios-calendar-outline"></Icon>
            <template v-if="value3 === ''">Select date</template>
            <template v-else>{{ value3 }}</template>
        </a>
    </DatePicker>
</div></div> <header class="example-header"><span>
                手动控制组件
                <a href="#手动控制组件">#</a></span></header> <div class="example-desc"><div><p>对于一些定制化的场景，可以使用 slot 配合参数 <code>open</code> 及事件来手动控制组件的显示状态，详见示例和 API。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 163px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span>
        <span class="hljs-attribute">:open</span>=<span class="hljs-value">"open"</span>
        <span class="hljs-attribute">:value</span>=<span class="hljs-value">"value3"</span>
        <span class="hljs-attribute">confirm</span>
        <span class="hljs-attribute">type</span>=<span class="hljs-value">"date"</span>
        @<span class="hljs-attribute">on-change</span>=<span class="hljs-value">"handleChange"</span>
        @<span class="hljs-attribute">on-clear</span>=<span class="hljs-value">"handleClear"</span>
        @<span class="hljs-attribute">on-ok</span>=<span class="hljs-value">"handleOk"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"javascript:void(0)"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"handleClick"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-calendar-outline"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">template</span> <span class="hljs-attribute">v-if</span>=<span class="hljs-value">"value3 === ''"</span>&gt;</span>Select date<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">template</span> <span class="hljs-attribute">v-else</span>&gt;</span>{{ value3 }}<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                open: <span class="hljs-literal">false</span>,
                value3: <span class="hljs-string">''</span>
            }
        },
        methods: {
            handleClick () {
                <span class="hljs-keyword">this</span>.open = !<span class="hljs-keyword">this</span>.open;
            },
            handleChange (date) {
                <span class="hljs-keyword">this</span>.value3 = date;
            },
            handleClear () {
                <span class="hljs-keyword">this</span>.open = <span class="hljs-literal">false</span>;
            },
            handleOk () {
                <span class="hljs-keyword">this</span>.open = <span class="hljs-literal">false</span>;
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="尺寸"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    <Row>
        <Col span="8">
            <DatePicker size="small" type="date" placeholder="Select date"></DatePicker>
        </Col>
        <Col span="8">
            <DatePicker type="date" placeholder="Select date"></DatePicker>
        </Col>
        <Col span="8">
            <DatePicker size="large" type="date" placeholder="Select date"></DatePicker>
        </Col>
    </Row>
</div></div> <header class="example-header"><span>
                尺寸
                <a href="#尺寸">#</a></span></header> <div class="example-desc"><div><p>通过设置属性 <code>size</code> 为 <code>large</code> 或 <code>small</code> 可以调整选择器尺寸为大或小，默认不填为中。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 182px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Row</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"8"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"small"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"date"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select date"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Col</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"8"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"date"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select date"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Col</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"8"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">DatePicker</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"large"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"date"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Select date"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">DatePicker</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Col</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Row</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {

    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="api"><div class="anchor"><!----> <h2 id="API">API</h2> <!----> <!----> <!----> <!---->  <a href="#API">#</a></div> <div class="anchor"><!----> <!----> <h3 id="DatePicker_props">DatePicker props</h3> <!----> <!----> <!---->  <a href="#DatePicker_props">#</a></div> <table><colgroup><col> <col> <col> <col width="200"></colgroup> <thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>type</td> <td>显示类型，可选值为 <code>date</code>、<code>daterange</code>、<code>datetime</code>、<code>datetimerange</code>、<code>year</code>、<code>month</code></td> <td>String</td> <td>date</td></tr> <tr><td>value</td> <td>
                            日期，可以是 JavaScript 的 Date，例如 <strong>new Date()</strong>，也可以是标准的日期格式，点击右边查看<br>
                            注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用
                        </td> <td><a href="javascript:void(0)"><i class="ivu-icon ivu-icon-information-circled"></i> Date</a></td> <td>-</td></tr> <tr><td>format</td> <td>展示的日期格式</td> <td><a href="javascript:void(0)"><i class="ivu-icon ivu-icon-information-circled"></i> Date</a></td> <td><ul><li><strong>date | daterange</strong>：<br>yyyy-MM-dd</li> <li><strong>datetime | datetimerange</strong>：<br>yyyy-MM-dd HH:mm:ss</li> <li><strong>year</strong>：yyyy</li> <li><strong>month</strong>：yyyy-MM</li></ul></td></tr> <tr><td>placement</td> <td>日期选择器出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code></td> <td>String</td> <td>bottom-start</td></tr> <tr><td>placeholder</td> <td>占位文本</td> <td>String</td> <td>空</td></tr> <tr><td>options</td> <td>选择器额外配置，比如不可选日期与快捷选项，具体项详见下表</td> <td>Object</td> <td>-</td></tr> <tr><td>confirm</td> <td>是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭</td> <td>Boolean</td> <td>false</td></tr> <tr><td>open</td> <td>手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用</td> <td>Boolean</td> <td>null</td></tr> <tr><td>size</td> <td>尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td> <td>String</td> <td>-</td></tr> <tr><td>disabled</td> <td>是否禁用选择器</td> <td>Boolean</td> <td>false</td></tr> <tr><td>clearable</td> <td>是否显示清除按钮</td> <td>Boolean</td> <td>true</td></tr> <tr><td>readonly</td> <td>完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效</td> <td>Boolean</td> <td>false</td></tr> <tr><td>editable</td> <td>文本框是否可以输入，只在没有使用 slot 时有效</td> <td>Boolean</td> <td>true</td></tr> <tr><td>transfer</td> <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td> <td>Boolean</td> <td>false</td></tr> <tr><td>element-id</td> <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td> <td>String</td> <td>-</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="options">options</h3> <!----> <!----> <!---->  <a href="#options">#</a></div> <p>选择器额外配置</p> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>shortcuts</td> <td>
                            设置快捷选项，每项内容：
                            <ul><li><strong>text | String</strong>：显示的文案</li> <li><strong>value | Function</strong>：返回指定的日期，如需自己控制逻辑，可不设置，并使用 onClick 回调</li> <li><strong>onClick | Function</strong>：点击时的回调，参数为当前日期选择器的 Vue 实例，当需要自定义复杂操作时，可以使用</li></ul></td> <td>Array</td> <td>-</td></tr> <tr><td>disabledDate</td> <td>设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天</td> <td>Function</td> <td>-</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="DatePicker_events">DatePicker events</h3> <!----> <!----> <!---->  <a href="#DatePicker_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-change</td> <td>日期发生变化时触发</td> <td>已经格式化后的日期，比如 2016-01-01</td></tr> <tr><td>on-open-change</td> <td>弹出日历和关闭日历时触发</td> <td>true | false</td></tr> <tr><td>on-ok</td> <td>在 confirm 模式下有效，点击确定按钮时触发</td> <td>-</td></tr> <tr><td>on-clear</td> <td>在 confirm 模式或 clearable = true 时有效，在清空日期时触发</td> <td>-</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="DatePicker_slot">DatePicker slot</h3> <!----> <!----> <!---->  <a href="#DatePicker_slot">#</a></div> <table><thead><tr><th>名称</th> <th>说明</th></tr></thead> <tbody><tr><td>无</td> <td>自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例</td></tr></tbody></table></div></article></div>
</template>
<script>
    export default {
        data () {
            return {
                value1: '2016-01-01',
                value2: ['2016-01-01', '2016-02-15'],
                open: false,
                value3: '',
                options1: {
                    shortcuts: [
                        {
                            text: 'Today',
                            value () {
                                return new Date();
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click today');
                            }
                        },
                        {
                            text: 'Yesterday',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click yesterday');
                            }
                        },
                        {
                            text: 'One week',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click a week ago');
                            }
                        }
                    ]
                },
                options2: {
                    shortcuts: [
                        {
                            text: 'A week',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: 'A month',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '3 month',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                },
                options3: {
                    disabledDate (date) {
                        return date && date.valueOf() < Date.now() - 86400000;
                    }
                },
                options4: {
                    disabledDate (date) {
                        const disabledDay = date.getDate();
                        return disabledDay === 15;
                    }
                }

            }
        },
        methods: 
        {
            handleClick () {
                this.open = !this.open;
            },
            handleChange (date) {
                this.value3 = date;
            },
            handleClear () {
                this.open = false;
            },
            handleOk () {
                this.open = false;
            }
        }
    }

</script>