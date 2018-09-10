(function(window){
    window.pathJoin = function (path1, path2) {return path1 + path2;};
    var Dev="http://125.77.116.145:6380";
    //设备数据
    var Dcv="http://125.77.116.145:8081";
    var Pord="";
    var DATA_PATH=Dcv
    var SERVER_PATH =Dev;
    var Interface = {};//
    Interface.FEED_BACK = pathJoin(SERVER_PATH,'/appService/feedback');//反馈
     Interface.NAVIGATION = pathJoin(SERVER_PATH,'/appService/dict/pipelines')//流数
    Interface.EQUIPMENT = pathJoin(DATA_PATH,'/icz_out_consumer/');//设备数据


    window.SERVER_PATH=SERVER_PATH;
    
   	window.DATA_PATH=DATA_PATH;
    window.Interface=Interface;
})(window);

var base={
    getUrl: function (url,theRequest) {
        var strs;
        if (url.indexOf("?") != -1) {
            var str = url.substr(0);
            
            strs = str.split("?")[1].split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
            }
        }
    }
   }