<style scoped>
</style>
<template>
<div class="wrapper-content ivu-article"><article><h1>AutoComplete 自动完成</h1> <div class="anchor"><!----> <h2 id="概述">概述</h2> <!----> <!----> <!----> <!---->  <a href="#概述">#</a></div> <p>输入框自动完成功能。</p> <div class="anchor"><!----> <h2 id="代码示例">代码示例</h2> <!----> <!----> <!----> <!---->  <a href="#代码示例">#</a></div> <div class="example ivu-row" id="基础用法"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div><AutoComplete
        v-model="value1"
        :data="data1"
        @on-search="handleSearch1"
        placeholder="input here"
        style="width:200px"></AutoComplete>
        </div></div> <header class="example-header"><span>
                基础用法
                <a href="#基础用法">#</a></span></header> <div class="example-desc"><div><p>基本用法，通过 data 设置自动完成的数据源。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 156px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">AutoComplete</span>
        <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value1"</span>
        <span class="hljs-attribute">:data</span>=<span class="hljs-value">"data1"</span>
        @<span class="hljs-attribute">on-search</span>=<span class="hljs-value">"handleSearch1"</span>
        <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"input here"</span>
        <span class="hljs-attribute">style</span>=<span class="hljs-value">"width:200px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">AutoComplete</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                value1: <span class="hljs-string">''</span>,
                data1: []
            }
        },
        methods: {
            handleSearch1 (value) {
                <span class="hljs-keyword">this</span>.data1 = !value ? [] : [
                    value,
                    value + value,
                    value + value + value
                ];
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="自定义选项"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    <AutoComplete
        v-model="value2"
        @on-search="handleSearch2"
        placeholder="input here"
        style="width:200px">
        <Option v-for="item in data2" :value="item" :key="item">{{ item }}</Option>
    </AutoComplete>
</div></div> <header class="example-header"><span>
                自定义选项
                <a href="#自定义选项">#</a></span></header> <div class="example-desc"><div><p>除了使用 data，还可以直接传入 <code>Option</code> 组件作为 slot 使用，这样可以自定义显示效果。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 160px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">AutoComplete</span>
        <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value2"</span>
        @<span class="hljs-attribute">on-search</span>=<span class="hljs-value">"handleSearch2"</span>
        <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"input here"</span>
        <span class="hljs-attribute">style</span>=<span class="hljs-value">"width:200px"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Option</span> <span class="hljs-attribute">v-for</span>=<span class="hljs-value">"item in data2"</span> <span class="hljs-attribute">:value</span>=<span class="hljs-value">"item"</span> <span class="hljs-attribute">:key</span>=<span class="hljs-value">"item"</span>&gt;</span>{{ item }}<span class="hljs-tag">&lt;/<span class="hljs-title">Option</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">AutoComplete</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                value2: <span class="hljs-string">''</span>,
                data2: []
            }
        },
        methods: {
            handleSearch2 (value) {
                <span class="hljs-keyword">this</span>.data2 = !value || value.indexOf(<span class="hljs-string">'@'</span>) &gt;= <span class="hljs-number">0</span> ? [] : [
                    value + <span class="hljs-string">'@qq.com'</span>,
                    value + <span class="hljs-string">'@sina.com'</span>,
                    value + <span class="hljs-string">'@163.com'</span>
                ];
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="不区分大小写"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    <AutoComplete
        v-model="value3"
        :data="data3"
        :filter-method="filterMethod"
        placeholder="input here"
        style="width:200px">
    </AutoComplete>
</div></div> <header class="example-header"><span>
                不区分大小写
                <a href="#不区分大小写">#</a></span></header> <div class="example-desc"><div><p>不区分大小写的 AutoComplete，及过滤的用法。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 156px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">AutoComplete</span>
        <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"value3"</span>
        <span class="hljs-attribute">:data</span>=<span class="hljs-value">"data3"</span>
        <span class="hljs-attribute">:filter-method</span>=<span class="hljs-value">"filterMethod"</span>
        <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"input here"</span>
        <span class="hljs-attribute">style</span>=<span class="hljs-value">"width:200px"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">AutoComplete</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                value3: <span class="hljs-string">''</span>,
                data3: [<span class="hljs-string">'Steve Jobs'</span>, <span class="hljs-string">'Stephen Gary Wozniak'</span>, <span class="hljs-string">'Jonathan Paul Ive'</span>]
            }
        },
        methods: {
            filterMethod (value, option) {
                <span class="hljs-keyword">return</span> option.toUpperCase().indexOf(value.toUpperCase()) !== -<span class="hljs-number">1</span>;
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div>

 </article> <div class="api"><div class="anchor"><!----> <h2 id="API">API</h2> <!----> <!----> <!----> <!---->  <a href="#API">#</a></div> <div class="anchor"><!----> <!----> <h3 id="AutoComplete_props">AutoComplete props</h3> <!----> <!----> <!---->  <a href="#AutoComplete_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>value</td> <td>绑定的值，可使用 v-model 双向绑定</td> <td>String | Number</td> <td>-</td></tr> <tr><td>data</td> <td>自动完成的数据源</td> <td>Array</td> <td>[]</td></tr> <tr><td>clearable</td> <td>是否可以清空选项</td> <td>Boolean</td> <td>false</td></tr> <tr><td>disabled</td> <td>是否禁用</td> <td>Boolean</td> <td>false</td></tr> <tr><td>placeholder</td> <td>占位文本</td> <td>String</td> <td>-</td></tr> <tr><td>size</td> <td>输入框尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不设置</td> <td>String</td> <td>-</td></tr> <tr><td>icon</td> <td>输入框尾部图标</td> <td>String</td> <td>-</td></tr> <tr><td>filter-method</td> <td>是否根据输入项进行筛选。当其为一个函数时，会接收 <code>value</code> 和 <code>option</code> 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false</td> <td>Function | Boolean</td> <td>false</td></tr> <tr><td>transfer</td> <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td> <td>Boolean</td> <td>false</td></tr> <tr><td>element-id</td> <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td> <td>String</td> <td>-</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="AutoComplete_events">AutoComplete events</h3> <!----> <!----> <!---->  <a href="#AutoComplete_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-change</td> <td>选中 option，或 input 的 value 变化时，调用此函数</td> <td>value</td></tr> <tr><td>on-select</td> <td>被选中时调用，参数为选中项的 value 值</td> <td>value</td></tr> <tr><td>on-search</td> <td>搜索补全项的时候调用</td> <td>query</td></tr></tbody></table></div></div>
</template>
<script>
    export default {
        data () {
            return {
                value1: '',
                data1: [],
                value2: '',
                data2: [],
                value3: '',
                data3: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive'],
                value4: '',
                data4: [
                    {
                        title: '话题',
                        children: [
                            {
                                title: 'iView',
                                count: 10000,

                            },
                            {
                                title: 'iView UI',
                                count: 10600,

                            }
                        ]
                    },
                    {
                        title: '问题',
                        children: [
                            {
                                title: 'iView UI 有多好',
                                count: 60100,

                            },
                            {
                                title: 'iView 是啥',
                                count: 30010,

                            }
                        ]
                    },
                    {
                        title: '文章',
                        children: [
                            {
                                title: 'iView 是一个设计语言',
                                count: 100000,

                            }
                        ]
                    }
                ]

            }
        },
        methods: {
            handleSearch1 (value) {
                this.data1 = !value ? [] : [
                    value,
                    value + value,
                    value + value + value
                ];
            },
            handleSearch2 (value) {
                this.data2 = !value || value.indexOf('@') >= 0 ? [] : [
                    value + '@qq.com',
                    value + '@sina.com',
                    value + '@163.com'
                ];
            },
            filterMethod (value, option) {
                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            }

        }
    }
</script>