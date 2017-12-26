<style scoped>
</style>
<template>
    <div class="wrapper-content ivu-article"><article><h1>Alert 警告提示</h1> <div class="anchor"><!----> <h2 id="概述">概述</h2> <!----> <!----> <!----> <!---->  <a href="#概述">#</a></div> <p>静态地呈现一些警告信息，可手动关闭。</p> <div class="anchor"><!----> <h2 id="代码示例">代码示例</h2> <!----> <!----> <!----> <!---->  <a href="#代码示例">#</a></div> <div class="example ivu-row" id="基础用法"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>
        <Alert>An info prompt</Alert>
    <Alert type="success">A success prompt</Alert>
    <Alert type="warning">A warning prompt</Alert>
    <Alert type="error">An error prompt</Alert>

    </div></div> <header class="example-header"><span>
                基础用法
                <a href="#基础用法">#</a></span></header> <div class="example-desc"><div><p>基本使用方法，有四种样式可以选择<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 294px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span>&gt;</span>An info prompt<span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"success"</span>&gt;</span>A success prompt<span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"warning"</span>&gt;</span>A warning prompt<span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"error"</span>&gt;</span>An error prompt<span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <!----></div></div> <div class="example ivu-row" id="含描述信息"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>
    <Alert>
        An info prompt
        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
    </Alert>
    <Alert type="success">
        A success prompt
        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
    </Alert>
    <Alert type="warning">
        A warning prompt
        <template slot="desc">
        Content of prompt. Content of prompt. Content of prompt.
    </template>
    </Alert>
    <Alert type="error">
        An error prompt
        <span slot="desc">
            Custom error description copywriting. <Icon type="help-circled" size="14"></Icon>
        </span>
    </Alert>

</div></div> <header class="example-header"><span>
                含描述信息
                <a href="#含描述信息">#</a></span></header> <div class="example-desc"><div><p>自定义<code>&lt;slot name="desc"&gt;</code>描述内容。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 460px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span>&gt;</span>
        An info prompt
        <span class="hljs-tag">&lt;<span class="hljs-title">template</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"desc"</span>&gt;</span>Content of prompt. Content of prompt. Content of prompt. Content of prompt. <span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"success"</span>&gt;</span>
        A success prompt
        <span class="hljs-tag">&lt;<span class="hljs-title">template</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"desc"</span>&gt;</span>Content of prompt. Content of prompt. Content of prompt. Content of prompt. <span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"warning"</span>&gt;</span>
        A warning prompt
        <span class="hljs-tag">&lt;<span class="hljs-title">template</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"desc"</span>&gt;</span>
        Content of prompt. Content of prompt. Content of prompt.
    <span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"error"</span>&gt;</span>
        An error prompt
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"desc"</span>&gt;</span>
            Custom error description copywriting. <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"help-circled"</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"14"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="图标"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div><div class="ivu-alert ivu-alert-info ivu-alert-with-icon"><span class="ivu-alert-icon"><i class="ivu-icon ivu-icon-information-circled"></i></span> <span class="ivu-alert-message">An info prompt</span> <span class="ivu-alert-desc"></span> <!----></div> <div class="ivu-alert ivu-alert-success ivu-alert-with-icon"><span class="ivu-alert-icon"><i class="ivu-icon ivu-icon-checkmark-circled"></i></span> <span class="ivu-alert-message">A success prompt</span> <span class="ivu-alert-desc"></span> <!----></div> <div class="ivu-alert ivu-alert-warning ivu-alert-with-icon"><span class="ivu-alert-icon"><i class="ivu-icon ivu-icon-android-alert"></i></span> <span class="ivu-alert-message">A warning prompt</span> <span class="ivu-alert-desc"></span> <!----></div> <div class="ivu-alert ivu-alert-error ivu-alert-with-icon"><span class="ivu-alert-icon"><i class="ivu-icon ivu-icon-close-circled"></i></span> <span class="ivu-alert-message">An error prompt</span> <span class="ivu-alert-desc"></span> <!----></div> <div class="ivu-alert ivu-alert-info ivu-alert-with-icon ivu-alert-with-desc"><span class="ivu-alert-icon"><i class="ivu-icon ivu-icon-information-circled"></i></span> <span class="ivu-alert-message">
                    An info prompt
                    </span> <span class="ivu-alert-desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span> <!----></div> <div class="ivu-alert ivu-alert-success ivu-alert-with-icon ivu-alert-with-desc"><span class="ivu-alert-icon"><i class="ivu-icon ivu-icon-checkmark-circled"></i></span> <span class="ivu-alert-message">
                    A success prompt
                    </span> <span class="ivu-alert-desc"><span>Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span></span> <!----></div> <div class="ivu-alert ivu-alert-warning ivu-alert-with-icon ivu-alert-with-desc"><span class="ivu-alert-icon"><i class="ivu-icon ivu-icon-android-alert"></i></span> <span class="ivu-alert-message">
                    A warning prompt
                    </span> <span class="ivu-alert-desc">
                    Content of prompt. Content of prompt. Content of prompt.
                </span> <!----></div> <div class="ivu-alert ivu-alert-error ivu-alert-with-icon ivu-alert-with-desc"><span class="ivu-alert-icon"><i class="ivu-icon ivu-icon-close-circled"></i></span> <span class="ivu-alert-message">
                    An error prompt
                    </span> <span class="ivu-alert-desc"><span>
                        Custom error description copywriting.
                    </span></span> <!----></div> <div class="ivu-alert ivu-alert-info ivu-alert-with-icon ivu-alert-with-desc"><span class="ivu-alert-icon"><i class="ivu-icon ivu-icon-ios-lightbulb-outline"></i></span> <span class="ivu-alert-message">
                    Custom icon
                     </span> <span class="ivu-alert-desc">Custom icon copywriting. Custom icon copywriting. Custom icon copywriting. </span> <!----></div></div></div> <header class="example-header"><span>
                图标
                <a href="#图标">#</a></span></header> <div class="example-desc"><div><p>根据 type 属性自动添加不同图标，或者自定义图标 slot 。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 718px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">show-icon</span>&gt;</span>An info prompt<span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"success"</span> <span class="hljs-attribute">show-icon</span>&gt;</span>A success prompt<span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"warning"</span> <span class="hljs-attribute">show-icon</span>&gt;</span>A warning prompt<span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"error"</span> <span class="hljs-attribute">show-icon</span>&gt;</span>An error prompt<span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">show-icon</span>&gt;</span>
        An info prompt
        <span class="hljs-tag">&lt;<span class="hljs-title">template</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"desc"</span>&gt;</span>Content of prompt. Content of prompt. Content of prompt. Content of prompt. <span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"success"</span> <span class="hljs-attribute">show-icon</span>&gt;</span>
        A success prompt
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"desc"</span>&gt;</span>Content of prompt. Content of prompt. Content of prompt. Content of prompt. <span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"warning"</span> <span class="hljs-attribute">show-icon</span>&gt;</span>
        A warning prompt
        <span class="hljs-tag">&lt;<span class="hljs-title">template</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"desc"</span>&gt;</span>
        Content of prompt. Content of prompt. Content of prompt.
    <span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"error"</span> <span class="hljs-attribute">show-icon</span>&gt;</span>
        An error prompt
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"desc"</span>&gt;</span>
            Custom error description copywriting.
        <span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">show-icon</span>&gt;</span>
        Custom icon
        <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-lightbulb-outline"</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"icon"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">template</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"desc"</span>&gt;</span>Custom icon copywriting. Custom icon copywriting. Custom icon copywriting. <span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="可关闭"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div><!----> <!---->     <Alert closable>An info prompt</Alert>
    <Alert type="success" show-icon closable>
        A success prompt
        <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
    </Alert>
    <Alert type="warning" closable>
        Custom closing content
        <span slot="close">No longer prompt</span>
    </Alert>
</div></div> <header class="example-header"><span>
                可关闭
                <a href="#可关闭">#</a></span></header> <div class="example-desc"><div><p>显示关闭按钮，点击可关闭提示，也可以自定义关闭 slot 。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 287px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">closable</span>&gt;</span>An info prompt<span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"success"</span> <span class="hljs-attribute">show-icon</span> <span class="hljs-attribute">closable</span>&gt;</span>
        A success prompt
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"desc"</span>&gt;</span>Content of prompt. Content of prompt. Content of prompt. Content of prompt. <span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"warning"</span> <span class="hljs-attribute">closable</span>&gt;</span>
        Custom closing content
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"close"</span>&gt;</span>No longer prompt<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="example ivu-row" id="顶部公告"><div class="example-demo ivu-col ivu-col-span-12"><div class="example-case"><div>    <Alert banner type="warning">Notice: notification contents...</Alert>
    <Alert banner closable type="warning">Notice: notification contents...</Alert>
</div></div> <header class="example-header"><span>
                顶部公告
                <a href="#顶部公告">#</a></span></header> <div class="example-desc"><div><p>设置属性 <code>banner</code> 可以应用顶部公告的样式。</p></div></div></div> <div class="example-split"></div> <div class="example-code ivu-col ivu-col-span-12" style="height: 206px;"><div style="opacity: 1;"><div data-v-3802a467=""><pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">banner</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"warning"</span>&gt;</span>Notice: notification contents...<span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Alert</span> <span class="hljs-attribute">banner</span> <span class="hljs-attribute">closable</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"warning"</span>&gt;</span>Notice: notification contents...<span class="hljs-tag">&lt;/<span class="hljs-title">Alert</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre> <span data-v-3802a467="" class="open-fiddle"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-code-working" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="scale"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span data-v-3802a467="" class="copy"><div data-v-3802a467="" class="ivu-tooltip"><div class="ivu-tooltip-rel"><i data-v-3802a467="" class="ivu-icon ivu-icon-clipboard" style="font-size: 18px;"></i> <i data-v-3802a467="" class="ivu-icon ivu-icon-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></div> <div class="example-code-more"><i class="ivu-icon ivu-icon-ios-arrow-down"></i> <i class="ivu-icon ivu-icon-ios-arrow-up" style="display: none;"></i> <button type="button" class="ivu-btn ivu-btn-text" style="display: none;"><!----> <!----> <span>Show Code</span></button></div></div></div> <div class="api"><div class="anchor"><!----> <h2 id="API">API</h2> <!----> <!----> <!----> <!---->  <a href="#API">#</a></div> <div class="anchor"><!----> <!----> <h3 id="Alert_props">Alert props</h3> <!----> <!----> <!---->  <a href="#Alert_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>type</td> <td>警告提示样式，可选值为<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code></td> <td>String</td> <td>info</td></tr> <tr><td>closable</td> <td>是否可关闭</td> <td>Boolean</td> <td>false</td></tr> <tr><td>show-icon</td> <td>是否显示图标</td> <td>Boolean</td> <td>false</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Alert_events">Alert events</h3> <!----> <!----> <!---->  <a href="#Alert_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-close</td> <td>关闭时触发</td> <td>event</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Alert_slot">Alert slot</h3> <!----> <!----> <!---->  <a href="#Alert_slot">#</a></div> <table><thead><tr><th>名称</th> <th>说明</th></tr></thead> <tbody><tr><td>无</td> <td>警告提示内容</td></tr> <tr><td>desc</td> <td>警告提示辅助性文字介绍</td></tr> <tr><td>icon</td> <td>自定义图标内容</td></tr> <tr><td>close</td> <td>自定义关闭内容</td></tr></tbody></table></div></article></div>
</template>
<script>
    export default 
    {
        data () {
            return {
            }
        },
        methods: {
        }
    }

</script>