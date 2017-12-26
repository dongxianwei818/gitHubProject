<style scoped>
</style>
<template>
<div class="wrapper-content ivu-article"><article><h1>Message 全局提示</h1> <div class="anchor"><!----> <h2 id="概述">概述</h2> <!----> <!----> <!----> <!---->  <a href="#概述">#</a></div> <p>轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。</p> <div class="anchor"><!----> <h2 id="代码示例">代码示例</h2> <!----> <!----> <!----> <!---->  <a href="#代码示例">#</a></div> <div class="example ivu-row" id="普通提示"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case">    <Button type="primary" @click="info">显示普通提示</Button>
</div> <header class="example-header"><span>
                普通提示
                <a href="#普通提示">#</a></span></header> <div class="example-desc"><div><p>最基本的提示，默认在1.5秒后消失。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 155px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"info"</span>&gt;</span>Display info prompt<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        methods: {
            info () {
                <span class="hljs-keyword">this</span>.$Message.info(<span class="hljs-string">'This is a info tip'</span>);
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down" style=""></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="提示类型"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>
    <Button @click="success">显示成功提示</Button>
    <Button @click="warning">显示警告提示</Button>
    <Button @click="error">显示错误提示</Button>

</div></div> <header class="example-header"><span>
                提示类型
                <a href="#提示类型">#</a></span></header> <div class="example-desc"><div><p>不同的提示状态：成功、警告、错误。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 155px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"success"</span>&gt;</span>Display success prompt<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"warning"</span>&gt;</span>Display warning prompt<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"error"</span>&gt;</span>Display error prompt<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        methods: {
            success () {
                <span class="hljs-keyword">this</span>.$Message.success(<span class="hljs-string">'This is a success tip'</span>);
            },
            warning () {
                <span class="hljs-keyword">this</span>.$Message.warning(<span class="hljs-string">'This is a warning tip'</span>);
            },
            error () {
                <span class="hljs-keyword">this</span>.$Message.error(<span class="hljs-string">'This is an error tip'</span>);
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="加载中"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>
<Button @click="loading">显示加载中...</Button>
</div></div> <header class="example-header"><span>
                加载中
                <a href="#加载中">#</a></span></header> <div class="example-desc"><div><p>Loading 的状态，并异步在某个时机移除。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 155px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"loading"</span>&gt;</span>Display loading...<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        methods: {
            loading () {
                <span class="hljs-keyword">const</span> msg = <span class="hljs-keyword">this</span>.$Message.loading({
                    content: <span class="hljs-string">'Loading...'</span>,
                    duration: <span class="hljs-number">0</span>
                });
                setTimeout(msg, <span class="hljs-number">3000</span>);
            },
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="自定义时长"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    <Button @click="time">显示一个10秒的提示</Button>
</div></div> <header class="example-header"><span>
                自定义时长
                <a href="#自定义时长">#</a></span></header> <div class="example-desc"><div><p>自定义时长，也可以在<code>Message.config()</code>中全局配置，详见API。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 159px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"time"</span>&gt;</span>Displays a 10 second prompt<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="undefined">
    export default {
        methods: {
            this.$Message.info({
                content: 'I'll be gone in 10 seconds',
                duration: 10
            });
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="可关闭"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    <Button @click="closable">显示一个可关闭的提示</Button></div></div> <header class="example-header"><span>
                可关闭
                <a href="#可关闭">#</a></span></header> <div class="example-desc"><div><p>将参数设置为一个对象，并指定 <code>closable</code> 为 true 后可以手动关闭提示，完整参数详见API。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 177px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"closable"</span>&gt;</span>Display a closable message<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        methods: {
            closable () {
                <span class="hljs-keyword">this</span>.$Message.info({
                    content: <span class="hljs-string">'Tips for manual closing'</span>,
                    duration: <span class="hljs-number">10</span>,
                    closable: <span class="hljs-literal">true</span>
                });
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="api"><div class="anchor"><!----> <h2 id="API">API</h2> <!----> <!----> <!----> <!---->  <a href="#API">#</a></div> <div class="anchor"><!----> <!----> <h3 id="Message_instance">Message instance</h3> <!----> <!----> <!---->  <a href="#Message_instance">#</a></div> <p>通过直接调用以下方法来使用组件：</p> <ul><li><code>this.$Message.info(config)</code></li> <li><code>this.$Message.success(config)</code></li> <li><code>this.$Message.warning(config)</code></li> <li><code>this.$Message.error(config)</code></li> <li><code>this.$Message.loading(config)</code></li></ul> <p>以上方法隐式的创建及维护 Vue 组件。参数 config 可以是字符串或对象，当为字符串时，直接显示内容，当为对象时，具体说明如下：</p> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>content</td> <td>提示内容</td> <td>String</td> <td>-</td></tr> <tr><td>duration</td> <td>自动关闭的延时，单位秒，不关闭可以写 0</td> <td>Number</td> <td>1.5</td></tr> <tr><td>onClose</td> <td>关闭时的回调</td> <td>Function</td> <td>-</td></tr> <tr><td>closable</td> <td>是否显示关闭按钮</td> <td>Boolean</td> <td>false</td></tr></tbody></table> <p>另外提供了全局配置和全局销毁的方法：</p> <ul><li><code>this.$Message.config(options)</code></li> <li><code>this.$Message.destroy()</code></li></ul> <br> <div data-v-3802a467=""><pre data-v-3802a467="" class="bg"><code data-v-3802a467="" class="javascript hljs"><span class="hljs-keyword">this</span>.$Message.config({
    top: <span class="hljs-number">50</span>,
    duration: <span class="hljs-number">3</span>
});
</code></pre> <!----> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div> <br> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>top</td> <td>提示组件距离顶端的距离，单位像素</td> <td>Number</td> <td>24</td></tr> <tr><td>duration</td> <td>默认自动关闭的延时，单位秒</td> <td>Number</td> <td>1.5</td></tr></tbody></table></div></article></div>
</template>
<script>
    export default 
    {
        data () {
            return {
            }
        },
        methods: {
            info () {
                this.$Message.info('这就是一条普通提示！');
            },
            success () {
                this.$Message.success('这是一条成功的提示！');
            },
            warning () {
                this.$Message.warning('这是一条警告的提示！');
            },
            error () {
                this.$Message.error('对方不想说话，并且向你抛出了一个异常！');
            },
            loading () {
                const msg = this.$Message.loading({
                    content: '正在加载中...',
                    duration: 0
                });
                setTimeout(msg, 3000);
            },
            time()
            {
                this.$Message.info({
                    content: '我将在10秒后消失',
                    duration: 10
                    });

            },
            closable () {
                this.$Message.info({
                    content: ' 可手动关闭的提示',
                    duration: 10,
                    closable: true
                });
            }

        }
    }

</script>