import config from '../config/config';

var baseIp = '192.168.1.121';
var basePort = "8080";
var baseUrl = "http://" + baseIp + ":" + basePort +"/uav";
const ajaxUrl = config.env === 'development' ? baseUrl : '61.160.96.90:6263/uav/index.html';

const APIStore = 
{
    uploadUrl:
    {
        upLoadUrl:ajaxUrl + '/uploadAction/upload_uploadFile',
        downLoadUrl:"http://61.160.96.90:6263/"
    },
}

export default APIStore;
