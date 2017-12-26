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
			{ path: 'leftMenu', component:resolve => require(['./components/leftMenu.vue'], resolve)},
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