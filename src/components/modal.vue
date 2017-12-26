<style scoped>
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }

</style>
<template>
    <div class="wrapper-content ivu-article"><article><h1>Modal 对话框</h1> <div class="anchor"><!----> <h2 id="概述">概述</h2> <!----> <!----> <!----> <!---->  <a href="#概述">#</a></div> <p>模态对话框，在浮层中显示，引导用户进行相关操作。</p> <p><code>Modal</code>提供了两种用法，普通组件使用和封装好的简洁实例调用。</p> <div class="anchor"><!----> <h2 id="代码示例">代码示例</h2> <!----> <!----> <!----> <!---->  <a href="#代码示例">#</a></div> <div class="anchor"><!----> <!----> <h3 id="普通组件使用方法">普通组件使用方法</h3> <!----> <!----> <!---->  <a href="#普通组件使用方法">#</a></div> <div class="example ivu-row" id="基础用法"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    <Button type="primary" @click="modal1 = true">显示对话框</Button>    <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>

 <!----></div></div> <header class="example-header"><span>
                基础用法
                <a href="#基础用法">#</a></span></header> <div class="example-desc"><div><p>最简单的使用方法，通过控制属性<code>visible</code>来显示 / 隐藏对话框。</p> <p>可以使用 v-model 实现双向绑定。</p> <p>默认按键盘<code>ESC</code>键也可以关闭。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 209px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"modal1 = true"</span>&gt;</span>Display dialog box<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Modal</span>
        <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"modal1"</span>
        <span class="hljs-attribute">title</span>=<span class="hljs-value">"Common Modal dialog box title"</span>
        @<span class="hljs-attribute">on-ok</span>=<span class="hljs-value">"ok"</span>
        @<span class="hljs-attribute">on-cancel</span>=<span class="hljs-value">"cancel"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Content of dialog<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Content of dialog<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Content of dialog<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Modal</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                modal1: <span class="hljs-literal">false</span>
            }
        },
        methods: {
            ok () {
                <span class="hljs-keyword">this</span>.$Message.info(<span class="hljs-string">'Clicked ok'</span>);
            },
            cancel () {
                <span class="hljs-keyword">this</span>.$Message.info(<span class="hljs-string">'Clicked cancel'</span>);
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="自定义样式"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>
    <Button @click="modal2 = true">自定义页头和页脚</Button>
    <Modal v-model="modal2" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="information-circled"></Icon>
            <span>Delete confirmation</span>
        </p>
        <div style="text-align:center">
            <p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>
            <p>Will you delete it?</p>
        </div>
        <div slot="footer">
            <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button>
        </div>
    </Modal>
    <Button @click="modal3 = true">不带标题栏</Button>
    <Modal v-model="modal3">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
    <Button @click="modal4 = true">国际化</Button>
    <Modal
        v-model="modal4"
        title="Modal Title"
        ok-text="OK"
        cancel-text="Cancel">
        <p>Something...</p>
        <p>Something...</p>
        <p>Something...</p>
    </Modal>
    <Button @click="modal5 = true">设置宽度</Button>
    <Modal
        v-model="modal5"
        title="Custom width"
        width="300">
        <p>Customize width, unit px, default 520px.</p>
        <p>The width of the dialog box is responsive, and the width becomes <code>auto</code> when the screen size is less than 768px.</p>
    </Modal>

</div></div> <header class="example-header"><span>
                自定义样式
                <a href="#自定义样式">#</a></span></header> <div class="example-desc"><div><p>Modal 组件提供了灵活的自定义样式 API 和 Slot，可以自由控制整个 Modal 的各个组成部分，比如页头、页脚、关闭按钮。</p> <p>通过和其它组件的交互，能实现更复杂的功能，满足了大多业务场景。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 195px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"modal2 = true"</span>&gt;</span>Custom header and footer<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Modal</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"modal2"</span> <span class="hljs-attribute">width</span>=<span class="hljs-value">"360"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"header"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"color:#f60;text-align:center"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"information-circled"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Delete confirmation<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"text-align:center"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>After this task is deleted, the downstream 10 tasks will not be implemented.<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Will you delete it?<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"footer"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"error"</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"large"</span> <span class="hljs-attribute">long</span> <span class="hljs-attribute">:loading</span>=<span class="hljs-value">"modal_loading"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"del"</span>&gt;</span>Delete<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Modal</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"modal3 = true"</span>&gt;</span>No title bar<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Modal</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"modal3"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Content of dialog<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Content of dialog<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Content of dialog<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Modal</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"modal4 = true"</span>&gt;</span>Internationalization<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Modal</span>
        <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"modal4"</span>
        <span class="hljs-attribute">title</span>=<span class="hljs-value">"Modal Title"</span>
        <span class="hljs-attribute">ok-text</span>=<span class="hljs-value">"OK"</span>
        <span class="hljs-attribute">cancel-text</span>=<span class="hljs-value">"Cancel"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Something...<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Something...<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Something...<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Modal</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"modal5 = true"</span>&gt;</span>Set the width<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Modal</span>
        <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"modal5"</span>
        <span class="hljs-attribute">title</span>=<span class="hljs-value">"Custom width"</span>
        <span class="hljs-attribute">width</span>=<span class="hljs-value">"300"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Customize width, unit px, default 520px.<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>The width of the dialog box is responsive, and the width becomes <span class="hljs-tag">&lt;<span class="hljs-title">code</span>&gt;</span>auto<span class="hljs-tag">&lt;/<span class="hljs-title">code</span>&gt;</span> when the screen size is less than 768px.<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Modal</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                modal2: <span class="hljs-literal">false</span>,
                modal_loading: <span class="hljs-literal">false</span>,
                modal3: <span class="hljs-literal">false</span>,
                modal4: <span class="hljs-literal">false</span>,
                modal5: <span class="hljs-literal">false</span>
            }
        },
        methods: {
            del () {
                <span class="hljs-keyword">this</span>.modal_loading = <span class="hljs-literal">true</span>;
                setTimeout(() =&gt; {
                    <span class="hljs-keyword">this</span>.modal_loading = <span class="hljs-literal">false</span>;
                    <span class="hljs-keyword">this</span>.modal2 = <span class="hljs-literal">false</span>;
                    <span class="hljs-keyword">this</span>.$Message.success(<span class="hljs-string">'Successfully delete'</span>);
                }, <span class="hljs-number">2000</span>);
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="异步关闭"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    <Button type="primary" @click="modal6 = true">显示对话框</Button>
    <Modal
        v-model="modal6"
        title="Title"
        :loading="loading"
        @on-ok="asyncOK">
        <p>After you click ok, the dialog box will close in 2 seconds.</p>
    </Modal>
</div></div> <header class="example-header"><span>
                异步关闭
                <a href="#异步关闭">#</a></span></header> <div class="example-desc"><div><p>给<code>Modal</code>添加属性<code>loading</code>后，点击确定按钮对话框不会自动消失，并显示 loading 状态，需要手动关闭对话框，常用于表单提交。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 177px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"modal6 = true"</span>&gt;</span>Display dialog box<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Modal</span>
        <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"modal6"</span>
        <span class="hljs-attribute">title</span>=<span class="hljs-value">"Title"</span>
        <span class="hljs-attribute">:loading</span>=<span class="hljs-value">"loading"</span>
        @<span class="hljs-attribute">on-ok</span>=<span class="hljs-value">"asyncOK"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>After you click ok, the dialog box will close in 2 seconds.<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Modal</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                modal6: <span class="hljs-literal">false</span>,
                loading: <span class="hljs-literal">true</span>
            }
        },
        methods: {
            asyncOK () {
                setTimeout(() =&gt; {
                    <span class="hljs-keyword">this</span>.modal6 = <span class="hljs-literal">false</span>;
                }, <span class="hljs-number">2000</span>);
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="禁用关闭"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    <Button @click="modal7 = true">禁用右上角关闭（含Esc键）</Button>
    <Modal
        title="Title"
        v-model="modal7"
        :closable="false">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
    <Button @click="modal8 = true">禁用遮罩层关闭</Button>
    <Modal
        title="Title"
        v-model="modal8"
        :mask-closable="false">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</div></div> <header class="example-header"><span>
                禁用关闭
                <a href="#禁用关闭">#</a></span></header> <div class="example-desc"><div><p>可以禁用关闭和遮罩层关闭。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 155px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"modal7 = true"</span>&gt;</span>Disable upper right corner (including Esc key)<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Modal</span>
        <span class="hljs-attribute">title</span>=<span class="hljs-value">"Title"</span>
        <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"modal7"</span>
        <span class="hljs-attribute">:closable</span>=<span class="hljs-value">"false"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Content of dialog<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Content of dialog<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Content of dialog<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Modal</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"modal8 = true"</span>&gt;</span>Disable mask layer closure<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Modal</span>
        <span class="hljs-attribute">title</span>=<span class="hljs-value">"Title"</span>
        <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"modal8"</span>
        <span class="hljs-attribute">:mask-closable</span>=<span class="hljs-value">"false"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Content of dialog<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Content of dialog<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Content of dialog<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Modal</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                modal7: <span class="hljs-literal">false</span>,
                modal8: <span class="hljs-literal">false</span>,
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="自定义位置"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    <Button @click="modal9 = true">距离顶部 20px</Button>
    <Modal
        title="Title"
        v-model="modal9"
        :styles="{top: '20px'}">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
    <Button @click="modal10 = true">垂直居中</Button>
    <Modal
        title="Title"
        v-model="modal10"
        class-name="vertical-center-modal">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</div></div> <header class="example-header"><span>
                自定义位置
                <a href="#自定义位置">#</a></span></header> <div class="example-desc"><div><p>可以自定义 Modal 的对话框样式 以及 对话框 Wrap 的 class 名称，从而实现更多自定义的样式，比如垂直居中。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 173px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">style</span> <span class="hljs-attribute">lang</span>=<span class="hljs-value">"less"</span>&gt;</span><span class="css">
    <span class="hljs-class">.vertical-center-modal</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">display</span>:<span class="hljs-value"> flex</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">align-items</span>:<span class="hljs-value"> center</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">justify-content</span>:<span class="hljs-value"> center</span></span>;

        .ivu-modal{
            <span class="hljs-rule"><span class="hljs-attribute">top</span>:<span class="hljs-value"> <span class="hljs-number">0</span></span></span>;
        }</span>
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">style</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"modal9 = true"</span>&gt;</span>20px from the top<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Modal</span>
        <span class="hljs-attribute">title</span>=<span class="hljs-value">"Title"</span>
        <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"modal9"</span>
        <span class="hljs-attribute">:styles</span>=<span class="hljs-value">"{top: '20px'}"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Content of dialog<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Content of dialog<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Content of dialog<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Modal</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"modal10 = true"</span>&gt;</span>Vertical center<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Modal</span>
        <span class="hljs-attribute">title</span>=<span class="hljs-value">"Title"</span>
        <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"modal10"</span>
        <span class="hljs-attribute">class-name</span>=<span class="hljs-value">"vertical-center-modal"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Content of dialog<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Content of dialog<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Content of dialog<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Modal</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                modal9: <span class="hljs-literal">false</span>,
                modal10: <span class="hljs-literal">false</span>,
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="anchor"><!----> <!----> <h3 id="实例化使用方法">实例化使用方法</h3> <!----> <!----> <!---->  <a href="#实例化使用方法">#</a></div> <p>除了上述通过标准组件的使用方法，iView 还精心封装了一些实例方法，用来创建一次性的轻量级对话框。</p> <p>实例以隐式创建 Vue 组件的方式在全局创建一个对话框，并在消失时移除，所以同时只能操作一个对话框。</p> <div class="example ivu-row" id="基本用法"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    <Button @click="instance('info')">消息</Button>
    <Button @click="instance('success')">成功</Button>
    <Button @click="instance('warning')">警告</Button>
    <Button @click="instance('error')">错误</Button>
</div></div> <header class="example-header"><span>
                基本用法
                <a href="#基本用法">#</a></span></header> <div class="example-desc"><div><p>四种基本的对话框，只提供一个确定按钮。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 155px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"instance('info')"</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"instance('success')"</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"instance('warning')"</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"instance('error')"</span>&gt;</span>Error<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        methods: {
            instance (type) {
                <span class="hljs-keyword">const</span> title = <span class="hljs-string">'Title'</span>;
                <span class="hljs-keyword">const</span> content = <span class="hljs-string">'&lt;p&gt;Content of dialog&lt;/p&gt;&lt;p&gt;Content of dialog&lt;/p&gt;'</span>;
                <span class="hljs-keyword">switch</span> (type) {
                    <span class="hljs-keyword">case</span> <span class="hljs-string">'info'</span>:
                        <span class="hljs-keyword">this</span>.$Modal.info({
                            title: title,
                            content: content
                        });
                        <span class="hljs-keyword">break</span>;
                    <span class="hljs-keyword">case</span> <span class="hljs-string">'success'</span>:
                        <span class="hljs-keyword">this</span>.$Modal.success({
                            title: title,
                            content: content
                        });
                        <span class="hljs-keyword">break</span>;
                    <span class="hljs-keyword">case</span> <span class="hljs-string">'warning'</span>:
                        <span class="hljs-keyword">this</span>.$Modal.warning({
                            title: title,
                            content: content
                        });
                        <span class="hljs-keyword">break</span>;
                    <span class="hljs-keyword">case</span> <span class="hljs-string">'error'</span>:
                        <span class="hljs-keyword">this</span>.$Modal.error({
                            title: title,
                            content: content
                        });
                        <span class="hljs-keyword">break</span>;
                }
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="确认对话框"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    
    <Button @click="confirm">标准</Button>
    <Button @click="custom">自定义按钮文字</Button>
    <Button @click="async">异步关闭</Button>
</div></div> <header class="example-header"><span>
                确认对话框
                <a href="#确认对话框">#</a></span></header> <div class="example-desc"><div><p>快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 155px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"confirm"</span>&gt;</span>Normal<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"custom"</span>&gt;</span>Custom button text<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"async"</span>&gt;</span>Asynchronous closing<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        methods: {
            confirm () {
                <span class="hljs-keyword">this</span>.$Modal.confirm({
                    title: <span class="hljs-string">'Title'</span>,
                    content: <span class="hljs-string">'&lt;p&gt;Content of dialog&lt;/p&gt;&lt;p&gt;Content of dialog&lt;/p&gt;'</span>,
                    onOk: () =&gt; {
                        <span class="hljs-keyword">this</span>.$Message.info(<span class="hljs-string">'Clicked ok'</span>);
                    },
                    onCancel: () =&gt; {
                        <span class="hljs-keyword">this</span>.$Message.info(<span class="hljs-string">'Clicked cancel'</span>);
                    }
                });
            },
            custom () {
                <span class="hljs-keyword">this</span>.$Modal.confirm({
                    title: <span class="hljs-string">'Title'</span>,
                    content: <span class="hljs-string">'&lt;p&gt;Content of dialog&lt;/p&gt;&lt;p&gt;Content of dialog&lt;/p&gt;'</span>,
                    okText: <span class="hljs-string">'OK'</span>,
                    cancelText: <span class="hljs-string">'Cancel'</span>
                });
            },
            <span class="hljs-keyword">async</span> () {
                <span class="hljs-keyword">this</span>.$Modal.confirm({
                    title: <span class="hljs-string">'Title'</span>,
                    content: <span class="hljs-string">'&lt;p&gt;The dialog box will be closed after 2 seconds&lt;/p&gt;'</span>,
                    loading: <span class="hljs-literal">true</span>,
                    onOk: () =&gt; {
                        setTimeout(() =&gt; {
                            <span class="hljs-keyword">this</span>.$Modal.remove();
                            <span class="hljs-keyword">this</span>.$Message.info(<span class="hljs-string">'Asynchronously close the dialog box'</span>);
                        }, <span class="hljs-number">2000</span>);
                    }
                });
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="自定义内容"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div><    <p>
        Name: {{ value }}
    </p>
    <p>
        <Button @click="render">自定义内容</Button>
    </p>
</div></div> <header class="example-header"><span>
                自定义内容
                <a href="#自定义内容">#</a></span></header> <div class="example-desc"><div><p>使用 <code>render</code> 字段可以基于 Render 函数来自定义内容。</p> <p>使用 render 后，将不再限制类型，content 也将无效。</p> <p><span><a href="https://segmentfault.com/l/1500000008892728" target="_blank"><i class="ivu-icon ivu-icon-social-youtube-outline"></i> <span> 学习 Render 函数的内容</span></a> <!----> <!----></span></p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 235px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>
        Name: {{ value }}
    <span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"render"</span>&gt;</span>Custom content<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                value: <span class="hljs-string">''</span>
            }            
        },
        methods: {
            render () {
                <span class="hljs-keyword">this</span>.$Modal.confirm({
                    render: (h) =&gt; {
                        <span class="hljs-keyword">return</span> h(<span class="hljs-string">'Input'</span>, {
                            props: {
                                value: <span class="hljs-keyword">this</span>.value,
                                autofocus: <span class="hljs-literal">true</span>,
                                placeholder: <span class="hljs-string">'Please enter your name...'</span>
                            },
                            on: {
                                input: (val) =&gt; {
                                    <span class="hljs-keyword">this</span>.value = val;
                                }
                            }
                        })
                    }
                })
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="api"><div class="anchor"><!----> <h2 id="API">API</h2> <!----> <!----> <!----> <!---->  <a href="#API">#</a></div> <div class="anchor"><!----> <!----> <h3 id="Modal_props">Modal props</h3> <!----> <!----> <!---->  <a href="#Modal_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>value</td> <td>对话框是否显示，可使用 v-model 双向绑定数据。</td> <td>Boolean</td> <td>false</td></tr> <tr><td>title</td> <td>对话框标题，如果使用 slot 自定义了页头，则 title 无效</td> <td>String</td> <td>-</td></tr> <tr><td>closable</td> <td>是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭</td> <td>Boolean</td> <td>true</td></tr> <tr><td>mask-closable</td> <td>是否允许点击遮罩层关闭</td> <td>Boolean</td> <td>true</td></tr> <tr><td>loading</td> <td>点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置<code>visible</code>来关闭对话框</td> <td>Boolean</td> <td>false</td></tr> <tr><td>scrollable</td> <td>页面是否可以滚动</td> <td>Boolean</td> <td>false</td></tr> <tr><td>ok-text</td> <td>确定按钮文字</td> <td>String</td> <td>确定</td></tr> <tr><td>cancel-text</td> <td>取消按钮文字</td> <td>String</td> <td>取消</td></tr> <tr><td>width</td> <td>对话框宽度，对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动<code>auto</code>。当其值不大于 100 时以百分比显示，大于 100 时为像素</td> <td>Number | String</td> <td>520</td></tr> <tr><td>styles</td> <td>设置浮层样式，调整浮层位置等，该属性设置的是<code>.ivu-modal</code>的样式</td> <td>Object</td> <td>-</td></tr> <tr><td>class-name</td> <td>设置对话框容器<code>.ivu-modal-wrap</code>的类名，可辅助实现垂直居中等自定义效果</td> <td>String</td> <td>-</td></tr> <tr><td>transition-names</td> <td>自定义显示动画，第一项是模态框，第二项是背景</td> <td>Array</td> <td>['ease', 'fade']</td></tr> <tr><td>transfer</td> <td>是否将弹层放置于 body 内</td> <td>Boolean</td> <td>true</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Modal_events">Modal events</h3> <!----> <!----> <!---->  <a href="#Modal_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-ok</td> <td>点击确定的回调</td> <td>无</td></tr> <tr><td>on-cancel</td> <td>点击取消的回调</td> <td>无</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Modal_slot">Modal slot</h3> <!----> <!----> <!---->  <a href="#Modal_slot">#</a></div> <table><thead><tr><th>名称</th> <th>说明</th></tr></thead> <tbody><tr><td>header</td> <td>自定义页头</td></tr> <tr><td>footer</td> <td>自定义页脚内容</td></tr> <tr><td>close</td> <td>自定义右上角关闭内容</td></tr> <tr><td>无</td> <td>对话框主体内容</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Modal_instance">Modal instance</h3> <!----> <!----> <!---->  <a href="#Modal_instance">#</a></div> <p>通过直接调用以下方法来使用：</p> <ul><li><code>this.$Modal.info(config)</code></li> <li><code>this.$Modal.success(config)</code></li> <li><code>this.$Modal.warning(config)</code></li> <li><code>this.$Modal.error(config)</code></li> <li><code>this.$Modal.confirm(config)</code></li></ul> <p>以上方法隐式地创建及维护Vue组件。参数 config 为对象，具体说明如下：</p> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>title</td> <td>标题</td> <td>String | Element String</td> <td>-</td></tr> <tr><td>content</td> <td>内容</td> <td>String | Element String</td> <td>-</td></tr> <tr><td>render</td> <td>自定义内容，使用后不再限制类型， content 也无效。<span><a href="https://segmentfault.com/l/1500000008892728" target="_blank"><i class="ivu-icon ivu-icon-social-youtube-outline"></i> <span> 学习 Render 函数的内容</span></a> <!----> <!----></span></td> <td>Function</td> <td>-</td></tr> <tr><td>width</td> <td>宽度，单位 px</td> <td>Number | String</td> <td>416</td></tr> <tr><td>okText</td> <td>确定按钮的文字</td> <td>String</td> <td>确定</td></tr> <tr><td>cancelText</td> <td>取消按钮的文字，只在<code>Modal.confirm()</code>下有效</td> <td>String</td> <td>取消</td></tr> <tr><td>loading</td> <td>点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动调用<code>Modal.remove()</code>来关闭对话框</td> <td>Boolean</td> <td>false</td></tr> <tr><td>scrollable</td> <td>页面是否可以滚动</td> <td>Boolean</td> <td>false</td></tr> <tr><td>onOk</td> <td>点击确定的回调</td> <td>Function</td> <td>-</td></tr> <tr><td>onCancel</td> <td>点击取消的回调，只在<code>Modal.confirm()</code>下有效</td> <td>Function</td> <td>-</td></tr></tbody></table> <p>另外提供了全局关闭对话框的方法：</p> <ul><li><code>this.$Modal.remove()</code></li></ul></div></article></div>
</template>
<script>
    export default 
    {
        data () {
            return {
                modal1: false,
                modal2: false,
                modal_loading: false,
                modal3: false,
                modal4: false,
                modal5: false,
                modal6: false,
                loading: true,
                modal7: false,
                modal8: false,
                modal9: false,
                modal10: false,
                value: ''
            }
        },
        methods: {
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            },
            del () {
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal2 = false;
                    this.$Message.success('Successfully delete');
                }, 2000);
            },
            asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            },
            instance (type) {
                const title = 'Title';
                const content = '<p>Content of dialog</p><p>Content of dialog</p>';
                switch (type) {
                    case 'info':
                        this.$Modal.info({
                            title: title,
                            content: content
                        });
                        break;
                    case 'success':
                        this.$Modal.success({
                            title: title,
                            content: content
                        });
                        break;
                    case 'warning':
                        this.$Modal.warning({
                            title: title,
                            content: content
                        });
                        break;
                    case 'error':
                        this.$Modal.error({
                            title: title,
                            content: content
                        });
                        break;
                }
            },
            confirm () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
            },
            custom () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    okText: 'OK',
                    cancelText: 'Cancel'
                });
            },
            async () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>The dialog box will be closed after 2 seconds</p>',
                    loading: true,
                    onOk: () => {
                        setTimeout(() => {
                            this.$Modal.remove();
                            this.$Message.info('Asynchronously close the dialog box');
                        }, 2000);
                    }
                });
            },
            render () {
                this.$Modal.confirm({
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: 'Please enter your name...'
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                }
                            }
                        })
                    }
                })
            }
        }
    }

</script>