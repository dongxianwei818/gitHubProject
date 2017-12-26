/**
 * [util 定义全局的公共方法，可以单独引用某个方法，也可以全量引用]
 * @type {Object}
 */
export const title = function(title) 
{
	if(!title)
	{
		return;
	}
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

export default {title};