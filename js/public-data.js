
document.write('<script src="js/jquery-3.1.1.js" type="text/javascript" charset="utf-8"></script>');
document.write('<script src="js/base.js" type="text/javascript" charset="utf-8"></script>');
document.write('<script src="js/ajax-pushlet-client.js" type="text/javascript" charset="utf-8"></script>');
var companyData={};//全部数据
PL._init();
PL.joinListen('/TESTGROUP_90');
function onData(event) {
    var callFuns = ['initChart'];
    parseAjaxData(event.arr, callFuns);
}

function parseAjaxData(event, calls) {
    $('#mytable').empty();
    var stream = "TESTGROUP"
   companyData = decodeURIComponent(event[stream]);
    
}
//初始化
function AjaxKafkaData(page) {
    var object5 = new Object;
    object5.topic = "TESTGROUP"

    $.ajax({
        url: 'http://192.168.9.47:9000//icz_out_consumer/kafka/queryKafaByTopic?' + jQuery.param(object5),
        type: 'get',
        dataType: "json",
        async: true,
        success: function (data2) {
            var data = eval('(' + data2 + ')');
            parseAjaxData(data, callFuns);
        },

    });
}
console.log(companyData);