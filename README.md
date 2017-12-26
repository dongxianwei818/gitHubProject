# 前端框架模板base_frame

### 关于base_frame：
    此前端框架模板是一套基于 Vue.js，并结合IView组件库的 UI 前端框架，主要服务于 PC 前端界面的产品

### 使用之前：
**高效的开发，离不开基础工程的搭建，在开始使用base_frame之前，有必要先了解以下基础知识，我们也假设您已经掌握了下面的内容。**
- a、熟悉了`JS，css，HTML，VUE，VUE-router`相关知识点
- b、了解了`nodejs，webpack，npm，es6`相关知识点

### 浏览器兼容性：
- 支持所有兼容 ECMAScript 5 的浏览器。
	- Opera >= 11.60
	- Firefox >= 4
	- Safari >= 5.1**
	- Chrome  >= 13
	- IE >= 9.0

### 安装base_frame依赖包：
**下载base_frame源码到本地后，请按照下列步骤完成安装和配置环境**
- 安装nodejs
	  从[Nodejs](http://nodejs.cn/download/)根据实际情况连接下载nodejs进行安装，"node": ">= 4.0.0",
- 安装base_frame的依赖包
      通过cmd命令进入base_frame根目录,运行命令`npm install`即可自动安装base_frame的依赖包（如果安装过npm的淘宝镜像，可是使用命令`cnpm install`安装依赖包）。依赖包会自动下载到项目的node_modules文件夹下面。
- 修改端口
	  找到项目的package.json文件，修改scripts-->dev 中的"--port 8082"为合适的端口。
- 运行系统
	  运行命令`npm run dev`
### 命令说明：
- npm install
	  安装base_frame依赖包
- npm run dev
	  开发环境下打包并运行系统
- npm run dist:dev
	  生产环境打包命令，打包后的包放在系统根目录下的dist文件夹下
- 其它NPM命令请查看npm相关文档

### 项目目录说明：
- bulid
	项目运行相关脚本文件夹，具体买个脚本的句法规则和含义，请查看webpack的相关文档
	- build-style.js:样式相关脚本
	- webpack.base.config.js:脚本文件的公共部分
	- webpack.dev.config.js:开发换件的打包脚本
	- webpack.dist.dev.config.js:生产环境的打包脚本
- node_modules
	项目依赖包安装路径
- src
	- src.config:项目的全局配置文件
	- src.libs:项目的公共方法和第三方文件存放路径
	- src.styles:项目样式相关文件存放路径，包括iview.css文件，img（项目中图片文件），fonts（项目字体相关文件）
	- src.template:项目主界面index存放路径
	- src.views:项目中组件存放路径
	- app.vue:项目主框架组件
	- main.js:系统入口js文件
	- routeConfig.js:路由信息配置文件
- package.json:
	项目相关脚本和依赖包管理文件

### 项目规范：
- 项目目录规范:
	- 自定义组件:
		自己封装的项目中的组件放在`src/components`下面
	- 自定义界面:
		项目中定义的展示界面放在`src/views`中，可能会用的自定义的组件或者第三方组件
	- 项目全局配置:
		项目定义的全局级的配置信息放在`src/config`下面
	- 第三方js文件:
		项目中引用的第三方js文件放在`src/libs`下面
	- 自定义全局函数和变量:
		项目定义的全局函数和变量放在`src/libs/util.js`
	- 服务器端交互API:
	 	项目定义的服务器端交互API放在`src/libs/api.js`,并且要按照模块进行封装
	 	```javascript
	 		var baseIp = '192.168.1.124';
			var basePort = ":8080";
			var baseUrl = "http://" + baseIp + basePort;

			const APIStore = 
			{
			    userManager:    //用户管理界面API
			    {
			    	getUserList: //查询所有用户列表API
			        {
			            prod:
			            {
			                url: baseUrl + '/admin/list',
			                method: 'post'
			            }
			        },
			    },
				roleManager:    //角色管理界面API
    			{
    				...
    			}
		    }
		```
	- ajax交互规范:
		项目中前后端http请求	
		```javascript
            let {url,method} = APIStore.userManager['getUserList'][ENV];
            this.$http[method](url, {userId:JSON.stringify(userId)}, {emulateJSON: true}).then(
            (response) => //成功回调
            {
                let data = response.data;
                if (data && data.status != "0") 
                {
                	...
                }
                else
                {
                	...
                }
            },()=>      //失败回调
            {
                ...
            })
		```
	- 前后端http交互消息报文格式:
		```javascrip
			{
				status:'0',	//消息状态码，字符串类型，0：表示请求成功；非0表示请求失败的错误编码，不同			  //的错误编码可以根据项目实际情况定义不同含义
				msgInfo:'', //，字符串类型，如果是status是非0的错误编码，此信息是错误信息的简介说明，一般用户前端提示。
				data:{}     //服务器返回的数据，data的具体类型根据实际情况决定
			}
			eg：
			{status: 0, message: "成功！", data: [{,…}, {,…}, {,…}, {,…}]}
		```	
	- 自定义公共CSS样式:
		自定义的项目及公共css样式放在`src/styles`目录下面
	- 项目图片资源:
		自定义的项目图片资源放在`src/styles/img`目录下面
	- 项目字体资源:
		自定义的项目字体资源放在`src/styles/fonts`目录下面
	- 项目页面:
		自定义的项目如果有html文件，放在`src/template`目录下面
	- 项目主页面框架:
		项目的主页面框架是`src/template/index.html`，会通过webpack脚本进行js文件和css文件的插入，一般不需要修改。
	- 项目主页面组件:
		项目的主页面组件只有一个，放在`src/app.vue`中，可以根据项目的实际情况进行定义
	- 项目入口文件:
		项目的入口文件是唯一的`src/main.js`,可以根据具体情况进行修改
	- 路由配置信息:
		项目的路由配置信息放在`src/routerConfig`中
		```javascript
		const routers = 
		[
			{
				path: '/dashBoard',
				component:resolve => require(['./views/dashBoard/dashBoard.vue'], resolve),  //懒加载
				children: 
				[
					{ path: 'button', component:resolve => require(['./components/button.vue'], resolve)},
					{ path: 'icon', component:resolve => require(['./components/icon.vue'], resolve)},
					{ path: 'font', component:resolve => require(['./components/font.vue'], resolve)},
					{ path: 'color', component:resolve => require(['./components/color.vue'], resolve)},
					{ path: 'input', component:resolve => require(['./components/input.vue'], resolve)},
					{ path: 'radio', component:resolve => require(['./components/radio.vue'], resolve)},
					{ path: 'checkbox', component:resolve => require(['./components/checkbox.vue'], resolve)},
					{ path: 'switch', component:resolve => require(['./components/switch.vue'], resolve)},
					{ path: 'autoComplete', component:resolve => require(['./components/autoComplete.vue'], resolve)},
					{ path: 'slider', component:resolve => require(['./components/slider.vue'], resolve)},
					{ path: 'datePicker', component:resolve => require(['./components/datePicker.vue'], resolve)},
					{ path: 'timePicker', component:resolve => require(['./components/timePicker.vue'], resolve)},
					{ path: 'alert', component:resolve => require(['./components/alert.vue'], resolve)},
					{ path: 'message', component:resolve => require(['./components/message.vue'], resolve)},
					{ path: 'notice', component:resolve => require(['./components/notice.vue'], resolve)},
					{ path: 'modal', component:resolve => require(['./components/modal.vue'], resolve)},
					{ path: 'progress', component:resolve => require(['./components/progress.vue'], resolve)},
				]
			},
			{
				path: '/workTable',
				component:require('./views/workTable/workTable.vue')
			},
			{
				path: '/dataSource',
				component:require('./views/dataSource/dataSource.vue')
			},
			{
				path: '/',
				component:require('./views/dashBoard/dashBoard.vue')
			},
		];
		export default routers;
		```
	- 项目相关脚本:
		项目所有的webpack脚本放在`build`文件夹下面，可根据实际情况进行修改和配置，其中`webpack.base.config.js`是webpack脚本的公共配置信息；'webpack.dev.config.js'是webpack脚本运行时的编译脚本；`webpack.dist.dev.config.js`是项目运行时的编译脚本。
- 注释规范:
	- 文件级注释
		每个文件（js/css/vue等）必须有文件级功能说明:
		```javascript
		/**
		 * [路由配置文件]
		 * @type {Object}
		 */
		```
	- 函数级注释
		每个函数必须加上功能说明、参数、返回值说明
		```javascript
		/**
		 * [ifHasAuth description]  判断指定权限是否在权限列表中
		 * @param  {[string]} value        [description] 指定的权限
		 * @param  {[string]} allAuthValue [description] 权限列表，字符串格式
		 * @return {[bool]}                [description] true：指定的权限在权限列表中，false：指定的权限没有在权限列表中
		 */
		```
	- 模块级注释
		函数中的功能模块也有有相关说明

### 界面增加流程：
	按照下面的流程，你就可以在左边菜单栏增加一栏，并在右边展示详细内容。
   - 增加左边菜单栏
       - 修改`src/views/dashBoard.vue`文件，增加左侧菜单列
			```javascripe
	            <div class="leftMenuItem"><router-link to="/dashBoard/leftMenu" onclick="window.showComponentFrame()">菜单名称</router-link></div>
			```
			其中：
				1、`leftMenuItem`是菜单栏的样式类
				2、`to="/dashBoard/leftMenu"`是这个菜单栏对应的路由信息
				3、`window.showComponentFrame()`是单击菜单的响应事件
				4、`菜单名称`是菜单名称
   - 增加菜单列对应的路由信息
   		- 修改routerConfig.js文件，增加菜单列对应的路由信息
			```javascripe
				{ path: 'leftMenu', component:resolve => require(['./components/leftMenu.vue'], resolve)},
			```
			其中：
			    1、`leftMenu`是菜单栏的路由，必须跟`to="/dashBoard/leftMenu"`中的`leftMenu`一致，
				2、`require(['./components/leftMenu.vue']`是这个菜单栏要在右边展示的信息
	- 增加菜单栏右边展示组件
		- 在`src/components`文件夹下面增加一个文件`leftMenu.vue`,
			在这个文件里面可以实现右边的具体展示视图。
			其中：
				1、`leftMenu.vue`是右边菜单组件的文件名，必须跟`require(['./components/leftMenu.vue']中的leftMenu.vue`一致
				2、菜单栏右边展示组件的存放路径可以任意选择，但是必须跟`require(['./components/leftMenu.vue']中的'./components/leftMenu.vue'`一致

	- 运行`npm run dev`展示效果
### 更改日志：
	
### 鸣谢：
	
### 相关链接
   [base_demo](http://10.20.22.19:8181/svn/UAV/src/service/数据挖掘/base_demo)
   [Vue官方文档](https://vuefe.cn/v2/guide/)
   [webpack](https://doc.webpack-china.org/)
   [VUE-router](https://router.vuejs.org/zh-cn/)
   [NPM](http://www.runoob.com/nodejs/nodejs-npm.html
   test)
