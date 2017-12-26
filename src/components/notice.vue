<style scoped>
</style>
<template>
    <div class="wrapper-content ivu-article"><article><h1>Notice 通知提醒</h1> <div class="anchor"><!----> <h2 id="概述">概述</h2> <!----> <!----> <!----> <!---->  <a href="#概述">#</a></div> <p>在界面右上角显示可关闭的全局通知，常用于以下场景：</p> <ul><li>通知内容带有描述信息</li> <li>系统主动推送</li></ul> <div class="anchor"><!----> <h2 id="代码示例">代码示例</h2> <!----> <!----> <!----> <!---->  <a href="#代码示例">#</a></div> <div class="example ivu-row" id="基础用法"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>
        <Button type="primary" @click="open(false)">Open notice</Button>
        <Button @click="open(true)">Open notice(only title)</Button>

    </div></div> <header class="example-header"><span>
                基础用法
                <a href="#基础用法">#</a></span></header> <div class="example-desc"><div><p>基本用法，默认在 4.5秒后关闭。如果 <code>desc</code> 参数为空或不填，则自动应用仅标题模式下的样式。</p> <p>建议标题言简意赅，例如"删除成功"，更详细的内容可以放在描述信息里。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 199px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"open(false)"</span>&gt;</span>Open notice<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"open(true)"</span>&gt;</span>Open notice(only title)<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        methods: {
            open (nodesc) {
                <span class="hljs-keyword">this</span>.$Notice.open({
                    title: <span class="hljs-string">'Notification title'</span>,
                    desc: nodesc ? <span class="hljs-string">''</span> : <span class="hljs-string">'Here is the notification description. Here is the notification description. '</span>
                });
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="提醒类型"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    
<p>带描述信息</p>
    <Button @click="info(false)">Info</Button>
    <Button @click="success(false)">Success</Button>
    <Button @click="warning(false)">Warning</Button>
    <Button @click="error(false)">Error</Button>
    <p>仅标题</p>
    <Button @click="info(true)">Info</Button>
    <Button @click="success(true)">Success</Button>
    <Button @click="warning(true)">Warning</Button>
    <Button @click="error(true)">Error</Button>
</div></div> <header class="example-header"><span>
                提醒类型
                <a href="#提醒类型">#</a></span></header> <div class="example-desc"><div><p>带有状态图标的提醒。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 249px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>With desc<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"info(false)"</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"success(false)"</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"warning(false)"</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"error(false)"</span>&gt;</span>Error<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Only title<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"info(true)"</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"success(true)"</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"warning(true)"</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"error(true)"</span>&gt;</span>Error<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        methods: {
            info (nodesc) {
                <span class="hljs-keyword">this</span>.$Notice.info({
                    title: <span class="hljs-string">'Notification title'</span>,
                    desc: nodesc ? <span class="hljs-string">''</span> : <span class="hljs-string">'Here is the notification description. Here is the notification description. '</span>
                });
            },
            success (nodesc) {
                <span class="hljs-keyword">this</span>.$Notice.success({
                    title: <span class="hljs-string">'Notification title'</span>,
                    desc: nodesc ? <span class="hljs-string">''</span> : <span class="hljs-string">'Here is the notification description. Here is the notification description. '</span>
                });
            },
            warning (nodesc) {
                <span class="hljs-keyword">this</span>.$Notice.warning({
                    title: <span class="hljs-string">'Notification title'</span>,
                    desc: nodesc ? <span class="hljs-string">''</span> : <span class="hljs-string">'Here is the notification description. Here is the notification description. '</span>
                });
            },
            error (nodesc) {
                <span class="hljs-keyword">this</span>.$Notice.error({
                    title: <span class="hljs-string">'Notification title'</span>,
                    desc: nodesc ? <span class="hljs-string">''</span> : <span class="hljs-string">'Here is the notification description. Here is the notification description. '</span>
                });
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="自定义时长"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    <Button type="primary" @click="time">Open notice</Button>
</div></div> <header class="example-header"><span>
                自定义时长
                <a href="#自定义时长">#</a></span></header> <div class="example-desc"><div><p>自定义时长，为 0 则不自动关闭。也可以在<code>Notice.config()</code>中全局配置，详见API。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 159px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"time"</span>&gt;</span>Open notice<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        methods: {
            time () {
                <span class="hljs-keyword">this</span>.$Notice.open({
                    title: <span class="hljs-string">'Notification title'</span>,
                    desc: <span class="hljs-string">'This notification does not automatically close, and you need to click the close button to close.'</span>,
                    duration: <span class="hljs-number">0</span>
                });
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="api"><div class="anchor"><!----> <h2 id="API">API</h2> <!----> <!----> <!----> <!---->  <a href="#API">#</a></div> <div class="anchor"><!----> <!----> <h3 id="Notice_instance">Notice instance</h3> <!----> <!----> <!---->  <a href="#Notice_instance">#</a></div> <p>通过直接调用以下方法来使用组件：</p> <ul><li><code>this.$Notice.open(config)</code></li> <li><code>this.$Notice.info(config)</code></li> <li><code>this.$Notice.success(config)</code></li> <li><code>this.$Notice.warning(config)</code></li> <li><code>this.$Notice.error(config)</code></li></ul> <p>以上方法隐式地创建及维护Vue组件。参数 config 为对象，具体说明如下：</p> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>title</td> <td>通知提醒的标题</td> <td>String</td> <td>-</td></tr> <tr><td>desc</td> <td>通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式</td> <td>String</td> <td>-</td></tr> <tr><td>duration</td> <td>自动关闭的延时，单位秒，不关闭可以写 0</td> <td>Number</td> <td>4.5</td></tr> <tr><td>name</td> <td>当前通知的唯一标识</td> <td>String</td> <td>自动</td></tr> <tr><td>onClose</td> <td>关闭时的回调</td> <td>Function</td> <td>-</td></tr></tbody></table> <p>另外提供了全局配置、全局关闭某个通知和全局销毁的方法：</p> <ul><li><code>this.$Notice.config(options)</code></li> <li><code>this.$Notice.close(name)</code></li> <li><code>this.$Notice.destroy()</code></li></ul> <br> <div data-v-3802a467=""><pre data-v-3802a467="" class="bg"><code data-v-3802a467="" class="javascript hljs"><span class="hljs-keyword">this</span>.$Notice.config({
    top: <span class="hljs-number">50</span>,
    duration: <span class="hljs-number">3</span>
});
</code></pre> <!----> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div> <br> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>top</td> <td>通知组件距离顶端的距离，单位像素</td> <td>Number</td> <td>24</td></tr> <tr><td>duration</td> <td>默认自动关闭的延时，单位秒</td> <td>Number</td> <td>4.5</td></tr></tbody></table></div></article></div>
</template>
<script>
    export default 
    {
        data () {
            return {
            }
        },
        methods: {
            open (nodesc) {
                this.$Notice.config({
                    top: 80,
                });
                this.$Notice.open({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. ',
                });
            },
            info (nodesc) {
                this.$Notice.info({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            success (nodesc) {
                this.$Notice.success({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            warning (nodesc) {
                this.$Notice.warning({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            error (nodesc) {
                this.$Notice.error({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            time () {
                this.$Notice.open({
                    title: 'Notification title',
                    desc: 'This notification does not automatically close, and you need to click the close button to close.',
                    duration: 0
                });
            }

        }
    }

</script>